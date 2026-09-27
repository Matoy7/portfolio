import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { getViewportWidth } from "./useViewportWidth";

/**
 * Shared responsive layout for every case study page.
 *
 * The case studies are Figma exports: fixed-size artboards (1920px desktop,
 * 375px mobile) built from absolutely-sized elements. They can't reflow, so
 * the only faithful way to make them responsive is to scale the whole
 * artboard uniformly to the width that is actually available.
 *
 * Previously each page capped the scale at 1 (Math.min(1, innerWidth/1920))
 * and pinned the artboard to the left edge — on anything wider than 1920px
 * the design stopped growing and the rest of the screen stayed white. The
 * mobile artboards were never scaled at all, so they sat as a 375px strip
 * in the middle of wider phones/tablets.
 *
 * Here the scale is always `availableWidth / designWidth` (no cap), measured
 * from the container itself (so the vertical scrollbar is excluded and
 * nothing is clipped on the right), and the container's height follows the
 * artboard's real height via ResizeObserver instead of a one-off timeout.
 */

/** Below this width the mobile artboard is used, at/above it the desktop one. */
export const CASE_STUDY_BREAKPOINT = 1024;

export const DESKTOP_DESIGN_WIDTH = 1920;
export const MOBILE_DESIGN_WIDTH = 375;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const viewportWidth = getViewportWidth;

/** true when the viewport is narrower than the case-study breakpoint. */
export function useIsCompact() {
  const query = `(max-width: ${CASE_STUDY_BREAKPOINT - 0.02}px)`;
  const [compact, setCompact] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setCompact(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return compact;
}

interface RevealOptions {
  /** Candidate selectors for the element whose children are the sections. First match wins. */
  rootSelectors: string[];
  /** Section indexes that are visible immediately (e.g. the hero). */
  skip: number[];
  /** Initial downward offset in design pixels. */
  offset: number;
}

/**
 * Scroll-triggered fade/slide-in for the artboard's top-level sections.
 * Same effect as before; runs before paint (no 600ms flash) and actually
 * removes its scroll listener on unmount.
 */
function useSectionReveal(ref: React.RefObject<HTMLDivElement | null>, opts?: RevealOptions) {
  const optsRef = useRef(opts);
  useLayoutEffect(() => {
    const o = optsRef.current;
    const host = ref.current;
    if (!o || !host) return;
    let root: Element | null = null;
    for (const s of o.rootSelectors) {
      root = host.querySelector(s);
      if (root) break;
    }
    if (!root) return;
    const sections = Array.from(root.children) as HTMLElement[];
    const pending = sections.filter((_, i) => !o.skip.includes(i));
    pending.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = `translateY(${o.offset}px)`;
      el.style.transition = "opacity 0.75s ease-out, transform 0.75s ease-out";
    });
    let raf = 0;
    const check = () => {
      raf = 0;
      const trigger = window.innerHeight * 0.92;
      for (let i = pending.length - 1; i >= 0; i--) {
        const el = pending[i];
        if (el.getBoundingClientRect().top < trigger) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          pending.splice(i, 1);
        }
      }
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
}

/** Lock horizontal scrolling at the document level while a case study is open. */
function useLockHorizontalScroll() {
  useEffect(() => {
    const html = document.documentElement.style;
    const body = document.body.style;
    const prev = [html.overflowX, body.overflowX];
    html.overflowX = "hidden";
    body.overflowX = "hidden";
    return () => {
      html.overflowX = prev[0];
      body.overflowX = prev[1];
    };
  }, []);
}

interface ArtboardProps {
  designWidth: number;
  reveal?: RevealOptions;
  /** Receives the current scale (e.g. to size fixed UI proportionally). */
  onScale?: (scale: number) => void;
  children: ReactNode;
}

/**
 * Renders a fixed-width Figma artboard scaled to fill the available width at
 * every viewport size, with the page height tracking the scaled content.
 */
export function ScaledArtboard({ designWidth, reveal, onScale, children }: ArtboardProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(() => viewportWidth() / designWidth);
  const [contentHeight, setContentHeight] = useState(0);

  useLockHorizontalScroll();
  useSectionReveal(innerRef, reveal);

  // Scale = available width / design width. No upper cap: wide screens get
  // the full design proportionally larger instead of empty side areas.
  useLayoutEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const update = () => {
      const w = outer.clientWidth || viewportWidth();
      setScale(w / designWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(outer);
    return () => ro.disconnect();
  }, [designWidth]);

  // Track the artboard's real (unscaled) height for the whole session.
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    const update = () => setContentHeight(Math.max(inner.offsetHeight, inner.scrollHeight));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(inner);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    onScale?.(scale);
  }, [scale, onScale]);

  return (
    <div
      ref={outerRef}
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "white",
        touchAction: "pan-y",
        height: contentHeight ? contentHeight * scale : "100vh",
      }}
    >
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          position: "absolute",
          top: 0,
          left: 0,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * "Back" pill. On desktop it scales with the artboard (as before) but is
 * clamped so it stays usable at 1024px and doesn't balloon on 4K screens.
 */
export function BackButton({
  onClick,
  variant,
  scale = 1,
}: {
  onClick: () => void;
  variant: "desktop" | "mobile";
  scale?: number;
}) {
  const desktop = variant === "desktop";
  const s = desktop ? clamp(scale, 0.8, 1.5) : 1;
  const pos = desktop
    ? { top: 27 * clamp(scale, 0.6, 2), left: 45 * clamp(scale, 0.6, 2) }
    : { top: 16, left: 16 };
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        ...pos,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: desktop ? 8 * s : 6,
        background: desktop ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        border: "1px solid #e8e4df",
        borderRadius: 999,
        padding: desktop ? `${10 * s}px ${18 * s}px` : "8px 14px",
        cursor: "pointer",
        boxShadow: desktop ? "0 2px 10px rgba(0,0,0,0.06)" : "0 2px 10px rgba(0,0,0,0.08)",
        fontSize: desktop ? 14 * s : 13,
        fontFamily: "Inter, sans-serif",
        fontWeight: 500,
        color: "#0e1d2b",
        whiteSpace: "nowrap",
      }}
    >
      <svg width={desktop ? 16 * s : 14} height={desktop ? 16 * s : 14} viewBox="0 0 16 16" fill="none">
        <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {desktop ? "Back home" : "Back"}
    </button>
  );
}

interface CaseStudyProps {
  onNavigate: (page: string) => void;
  desktop: { artboard: ReactNode; reveal?: RevealOptions };
  mobile: { artboard: ReactNode; reveal?: RevealOptions };
}

/** A complete case study: picks the mobile or desktop artboard and scales it. */
export function CaseStudy({ onNavigate, desktop, mobile }: CaseStudyProps) {
  const compact = useIsCompact();
  const [scale, setScale] = useState(1);
  const goHome = () => onNavigate("home");

  if (compact) {
    return (
      <>
        <BackButton variant="mobile" onClick={goHome} />
        <ScaledArtboard key="mobile" designWidth={MOBILE_DESIGN_WIDTH} reveal={mobile.reveal}>
          {mobile.artboard}
        </ScaledArtboard>
      </>
    );
  }
  return (
    <>
      <BackButton variant="desktop" scale={scale} onClick={goHome} />
      <ScaledArtboard key="desktop" designWidth={DESKTOP_DESIGN_WIDTH} reveal={desktop.reveal} onScale={setScale}>
        {desktop.artboard}
      </ScaledArtboard>
    </>
  );
}
