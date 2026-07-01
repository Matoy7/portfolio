import { useEffect, useState, useRef } from "react";
import Desktop1 from "@/imports/Desktop-1/index";

const DESIGN_WIDTH = 1920;

export default function PulsePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const updateScale = () => {
      const s = Math.min(1, window.innerWidth / DESIGN_WIDTH);
      setScale(s);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = contentRef.current;
      if (!el) return;

      setHeight(el.scrollHeight * scale);

      // Pulse uses data-name="Main content" inside data-name="Desktop"
      const root = el.querySelector('[data-name="Main content"]') || el.querySelector('[data-name="Desktop"] > div');
      if (!root) return;
      const sections = Array.from(root.children) as HTMLElement[];

      sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        section.style.willChange = "opacity, transform";
      });

      observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const s = entry.target as HTMLElement;
              s.style.opacity = "1";
              s.style.transform = "translateY(0)";
              observerRef.current?.unobserve(s);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
      );

      sections.forEach((s) => observerRef.current?.observe(s));
    }, 500);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [scale]);

  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "white", position: "relative", height: height || "auto" }}>
      <button
        onClick={() => onNavigate("home")}
        style={{
          position: "fixed", top: 27 * scale, left: 45 * scale, zIndex: 50,
          display: "flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
          border: "1px solid #e8e4df", borderRadius: 999,
          padding: `${10 * scale}px ${18 * scale}px`, cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          fontSize: 14 * scale, fontFamily: "Inter, sans-serif",
          fontWeight: 500, color: "#0e1d2b", whiteSpace: "nowrap",
        }}
      >
        <svg width={16 * scale} height={16 * scale} viewBox="0 0 16 16" fill="none">
          <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back home
      </button>

      <div
        ref={contentRef}
        style={{
          width: DESIGN_WIDTH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Desktop1 />
      </div>
    </div>
  );
}
