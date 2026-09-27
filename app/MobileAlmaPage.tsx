import { useEffect } from "react";
import CaseStudyMobile from "@/imports/CaseStudyMobile-1/index";

/** Mobile Alma artboard. Layout, scaling and the Back button come from CaseStudyLayout. */
export default function MobileAlmaPage() {
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

  return <CaseStudyMobile />;
}
