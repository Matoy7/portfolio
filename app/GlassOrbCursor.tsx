import { useEffect, useRef } from "react";

export default function GlassOrbCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const orbPosRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isCaseStudyRef = useRef(false);
  const animationFrameRef = useRef<number>();
  const currentTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Check if element is interactive
    const isInteractive = (el: HTMLElement): boolean => {
      if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.getAttribute("role") === "button" ||
        el.getAttribute("data-case-study") === "true"
      ) {
        return true;
      }
      const style = window.getComputedStyle(el);
      if (style.cursor === "pointer") {
        return true;
      }
      return !!el.closest("[data-case-study]");
    };

    // Get interactive parent if needed
    const getInteractiveElement = (el: HTMLElement): HTMLElement | null => {
      if (isInteractive(el)) return el;
      let parent = el.parentElement;
      while (parent && parent !== document.body) {
        if (isInteractive(parent)) return parent;
        parent = parent.parentElement;
      }
      return null;
    };

    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check current element
      const target = e.target as HTMLElement;
      const interactiveEl = getInteractiveElement(target);

      if (interactiveEl && interactiveEl !== currentTargetRef.current) {
        currentTargetRef.current = interactiveEl;
        isCaseStudyRef.current = !!interactiveEl.getAttribute("data-case-study");
      } else if (!interactiveEl && currentTargetRef.current) {
        currentTargetRef.current = null;
        isCaseStudyRef.current = false;
      }
    };

    // Smooth interpolation (lerp)
    const lerp = (start: number, end: number, t: number) => {
      return start + (end - start) * t;
    };

    // Animation loop for smooth cursor following
    const animate = () => {
      const orb = orbRef.current;
      if (!orb) return;

      // Smooth follow with lerp
      orbPosRef.current.x = lerp(orbPosRef.current.x, mouseRef.current.x, 0.15);
      orbPosRef.current.y = lerp(orbPosRef.current.y, mouseRef.current.y, 0.15);

      // Apply transform (offset by half size for centering)
      // Use current width from DOM to get accurate half-size
      const width = parseFloat(orb.style.width || "34");
      const offset = width / 2;
      orb.style.transform = `translate(${orbPosRef.current.x - offset}px, ${
        orbPosRef.current.y - offset
      }px)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Detect hover enter/leave
    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = getInteractiveElement(target);

      if (interactiveEl) {
        isHoveringRef.current = true;
        isCaseStudyRef.current = !!interactiveEl.getAttribute("data-case-study");
        currentTargetRef.current = interactiveEl;

        // Hide native cursor
        interactiveEl.style.cursor = "none";

        // Update size for case study
        if (isCaseStudyRef.current) {
          orb.style.width = "52px";
          orb.style.height = "52px";
          orb.style.boxShadow =
            "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 255, 255, 0.15)";
        }

        // Animate in
        orb.style.opacity = "1";
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = getInteractiveElement(target);

      if (interactiveEl) {
        isHoveringRef.current = false;
        isCaseStudyRef.current = false;
        currentTargetRef.current = null;

        // Restore native cursor
        interactiveEl.style.cursor = "";

        // Reset size
        orb.style.width = "34px";
        orb.style.height = "34px";
        orb.style.boxShadow =
          "0 4px 12px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)";

        // Animate out
        orb.style.opacity = "0";
      }
    };

    // Event delegation - capture phase
    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
      document.removeEventListener("mousemove", onMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow:
          "0 4px 12px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)",
        opacity: 0,
        transform: "translate(-17px, -17px)",
        transition:
          "opacity 180ms cubic-bezier(0.23, 1, 0.320, 1), width 200ms cubic-bezier(0.23, 1, 0.320, 1), height 200ms cubic-bezier(0.23, 1, 0.320, 1), box-shadow 200ms cubic-bezier(0.23, 1, 0.320, 1)",
      }}
    />
  );
}
