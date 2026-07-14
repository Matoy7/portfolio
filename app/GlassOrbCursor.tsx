import { useEffect, useRef } from "react";

export default function GlassOrbCursor() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const orbPosRef = useRef({ x: 0, y: 0 });
  const isInteractiveRef = useRef(false);
  const isInitializedRef = useRef(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const orb = orbRef.current;
    if (!orb) return;

    // Hide default cursor globally
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    // Remove all cursor: pointer from elements to prevent hand cursor
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      * {
        cursor: none !important;
      }
      *:hover {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleSheet);

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
      // Initialize position on first mouse move
      if (!isInitializedRef.current) {
        mouseRef.current = { x: e.clientX, y: e.clientY };
        orbPosRef.current = { x: e.clientX, y: e.clientY };
        isInitializedRef.current = true;
      } else {
        mouseRef.current = { x: e.clientX, y: e.clientY };
      }

      // Check if currently hovering an interactive element
      const target = e.target as HTMLElement;
      const interactiveEl = getInteractiveElement(target);
      const wasInteractive = isInteractiveRef.current;

      isInteractiveRef.current = !!interactiveEl;

      // Transition to/from interactive state
      if (isInteractiveRef.current && !wasInteractive) {
        // Entering interactive element
        const isCaseStudy = interactiveEl!.getAttribute("data-case-study") === "true";
        if (isCaseStudy) {
          orb.style.width = "52px";
          orb.style.height = "52px";
          orb.style.boxShadow =
            "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 255, 255, 0.15)";
          orb.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
          orb.style.borderColor = "rgba(0, 0, 0, 0.7)";
        } else {
          orb.style.width = "34px";
          orb.style.height = "34px";
          orb.style.boxShadow =
            "0 2px 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(255, 255, 255, 0.08)";
          orb.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
          orb.style.borderColor = "rgba(0, 0, 0, 0.7)";
        }
      } else if (!isInteractiveRef.current && wasInteractive) {
        // Leaving interactive element - return to default
        orb.style.width = "34px";
        orb.style.height = "34px";
        orb.style.boxShadow =
          "0 2px 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(255, 255, 255, 0.08)";
        orb.style.backgroundColor = "rgba(255, 255, 255, 0.02)";
        orb.style.borderColor = "rgba(0, 0, 0, 0.7)";
      }
    };

    // Smooth interpolation (lerp)
    const lerp = (start: number, end: number, t: number) => {
      return start + (end - start) * t;
    };

    // Animation loop for smooth cursor following
    const animate = () => {
      const orb = orbRef.current;
      if (!orb || !isInitializedRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smooth follow with lerp
      orbPosRef.current.x = lerp(orbPosRef.current.x, mouseRef.current.x, 0.15);
      orbPosRef.current.y = lerp(orbPosRef.current.y, mouseRef.current.y, 0.15);

      // Apply transform (offset by half size for centering)
      const width = parseFloat(orb.style.width || "34");
      const offset = width / 2;
      orb.style.transform = `translate(${orbPosRef.current.x - offset}px, ${
        orbPosRef.current.y - offset
      }px)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Listen for mouse move globally
    document.addEventListener("mousemove", onMouseMove);

    // Ensure cursor stays hidden if styles are reset
    const preventCursorReset = setInterval(() => {
      if (document.documentElement.style.cursor !== "none") {
        document.documentElement.style.cursor = "none";
      }
      if (document.body.style.cursor !== "none") {
        document.body.style.cursor = "none";
      }
    }, 100);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      clearInterval(preventCursorReset);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Clean up injected styles
      document.head.removeChild(styleSheet);
      // Restore cursor on unmount
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
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
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "none",
        border: "2px solid rgba(0, 0, 0, 0.7)",
        boxShadow:
          "0 2px 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(255, 255, 255, 0.08)",
        opacity: 1,
        transform: "translate(-17px, -17px)",
        transition:
          "width 200ms cubic-bezier(0.23, 1, 0.320, 1), height 200ms cubic-bezier(0.23, 1, 0.320, 1), box-shadow 200ms cubic-bezier(0.23, 1, 0.320, 1), background-color 200ms cubic-bezier(0.23, 1, 0.320, 1), border-color 200ms cubic-bezier(0.23, 1, 0.320, 1)",
      }}
    />
  );
}
