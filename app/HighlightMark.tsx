import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Editorial highlighter stroke behind a word (see hero headline).
 *
 * A solid #FFE54D slanted block sits behind the word — full word height,
 * bleeding a little past both ends — and is revealed left → right with
 * clip-path, like a marker being dragged across. Only that block animates;
 * the text never moves or fades. The block is absolutely positioned, so it
 * has zero effect on layout or line breaks.
 *
 * Runs once, when the word first enters the viewport (after `delay` ms).
 * With prefers-reduced-motion the highlight is simply shown.
 */
const COLOR = "#FFE54D";
const DURATION = 650;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"; // smooth, natural ease-out

/**
 * `bleed` = how far the stroke runs past the word [left, right] in em.
 * Default matches the hero reference (word on its own line); use a tighter
 * bleed when the word sits mid-sentence so the slant doesn't touch neighbours.
 */
export default function HighlightMark({
  children,
  delay = 0,
  bleed = [0.32, 0.3],
}: {
  children: ReactNode;
  delay?: number;
  bleed?: [number, number];
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInstant(true);
      setDrawn(true);
      return;
    }
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect(); // once
        timer = window.setTimeout(() => setDrawn(true), delay);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <span ref={ref} style={{ position: "relative", isolation: "isolate", whiteSpace: "nowrap" }}>
      <span
        aria-hidden
        style={{
          position: "absolute",
          zIndex: -1,
          // full word height (ascender to just below baseline), bleeding past both ends
          top: "0.08em",
          bottom: "0.02em",
          left: `-${bleed[0]}em`,
          right: `-${bleed[1]}em`,
          background: COLOR,
          transform: "skewX(-12deg)",
          clipPath: drawn ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          WebkitClipPath: drawn ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: instant ? "none" : `clip-path ${DURATION}ms ${EASE}, -webkit-clip-path ${DURATION}ms ${EASE}`,
          pointerEvents: "none",
        }}
      />
      {children}
    </span>
  );
}
