import { useEffect } from "react";
import CaseStudyMobile from "@/imports/CaseStudyMobile-1/index";

export default function MobileAlmaPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  // Lock horizontal movement at the document level — a div's own
  // overflow-x:hidden isn't always enough on mobile browsers if a
  // descendant (this Figma export uses fixed pixel widths) is wider
  // than the viewport.
  useEffect(() => {
    const prevHtml = document.documentElement.style.overflowX;
    const prevBody = document.body.style.overflowX;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = prevHtml;
      document.body.style.overflowX = prevBody;
    };
  }, []);

  // Fix the hero-load glitch: the Figma export has 3 text elements ("Alma",
  // the loose "A UX UI Case Study..." line, and the description block) that
  // visually belong OVER the hero photo. Before the 3.7MB PNG loads they
  // stack over each other on the peach background, looking broken.
  // Root fix: keep those elements hidden until the hero image finishes
  // decoding, then reveal them. We also mark the hero <img> as high
  // priority so the browser fetches it first.
  useEffect(() => {
    const section = document.querySelector<HTMLElement>('[data-name="Section"]');
    if (!section) return;
    const hero = section.querySelector<HTMLElement>('[data-name="hero"]');
    const heroImg = hero?.querySelector<HTMLImageElement>("img");
    if (!hero || !heroImg) return;

    // The children of the section's inner flex container: ContainerMargin,
    // Hero, loose <p>A UX UI…</p>, absolute <p>Alma</p>. We hide the loose
    // <p> and the absolute <p> — everything except ContainerMargin and Hero.
    const inner = hero.parentElement;
    if (!inner) return;
    const toHide: HTMLElement[] = [];
    inner.childNodes.forEach((n) => {
      if (n.nodeType !== 1) return;
      const el = n as HTMLElement;
      if (el.tagName === "P") toHide.push(el);
    });
    toHide.forEach((el) => {
      el.style.opacity = "0";
      el.style.transition = "opacity 0.25s ease-out";
    });

    // Also hide the hero container's own image wrapper background artifacts
    // until image is ready, and prioritize the fetch.
    heroImg.setAttribute("fetchpriority", "high");
    heroImg.setAttribute("decoding", "async");
    heroImg.loading = "eager";

    const reveal = () => {
      toHide.forEach((el) => { el.style.opacity = "1"; });
    };

    if (heroImg.complete && heroImg.naturalWidth > 0) {
      reveal();
    } else {
      heroImg.addEventListener("load", reveal, { once: true });
      // Fallback so text is never permanently invisible if load fails
      const t = window.setTimeout(reveal, 4000);
      heroImg.addEventListener("load", () => window.clearTimeout(t), { once: true });
    }
  }, []);

  return (
    <div style={{ width: "100%", background: "white", position: "relative", overflowX: "hidden", maxWidth: "100vw", touchAction: "pan-y" }}>
      {/* Back button */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          position: "fixed", top: 16, left: 16, zIndex: 50,
          display: "flex", alignItems: "center", gap: 6,
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)",
          border: "1px solid #e8e4df", borderRadius: 999,
          padding: "8px 14px", cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          fontSize: 13, fontFamily: "Inter, sans-serif",
          fontWeight: 500, color: "#0e1d2b", whiteSpace: "nowrap",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      <CaseStudyMobile />
    </div>
  );
}
