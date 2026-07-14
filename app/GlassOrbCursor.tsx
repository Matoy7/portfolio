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
          // Hover on case study: larger ring with glow
          orb.style.width = "50px";
          orb.style.height = "50px";
          orb.style.border = "9px solid rgba(255, 255, 255, 0.4)";
          orb.style.boxShadow =
            "0 4px 16px rgba(0, 0, 0, 0.12), 0 0 24px rgba(255, 255, 255, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.3)";
        } else {
          // Hover on regular interactive: normal ring, subtle enhance
          orb.style.width = "34px";
          orb.style.height = "34px";
          orb.style.border = "7px solid rgba(255, 255, 255, 0.35)";
          orb.style.boxShadow =
            "0 2px 8px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.2)";
        }
      } else if (!isInteractiveRef.current && wasInteractive) {
        // Leaving interactive element - return to default
        orb.style.width = "34px";
        orb.style.height = "34px";
        orb.style.border = "7px solid rgba(255, 255, 255, 0.3)";
        orb.style.boxShadow =
          "0 2px 8px rgba(0, 0, 0, 0.06), 0 0 14px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.15)";
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
        // Glass ring: semi-transparent white border with no background
        border: "7px solid rgba(255, 255, 255, 0.3)",
        backgroundColor: "transparent",
        // Frosted glass effect via backdrop blur
        backdropFilter: "blur(14px)",
        // Subtle shadow and inner highlight for premium feel
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.06), 0 0 14px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.15)",
        opacity: 1,
        transform: "translate(-17px, -17px)",
        // Smooth transitions for size, shadow, and border
        transition:
          "width 200ms cubic-bezier(0.23, 1, 0.320, 1), height 200ms cubic-bezier(0.23, 1, 0.320, 1), box-shadow 200ms cubic-bezier(0.23, 1, 0.320, 1), border 200ms cubic-bezier(0.23, 1, 0.320, 1)",
      }}
    />
  );
}
