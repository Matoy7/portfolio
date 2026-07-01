import { useEffect, useState, useRef } from "react";
import CaseStudyDesktop from "@/imports/CaseStudyDesktop-1/index";

const DESIGN_WIDTH = 1920;

function DesktopAlma({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight * scale);
    }, 600);
    return () => clearTimeout(t);
  }, [scale]);

  useEffect(() => {
    const t = setTimeout(() => {
      const root = contentRef.current?.querySelector('[data-name="Main content"]');
      if (!root) return;
      const sections = Array.from(root.children) as HTMLElement[];
      sections.forEach((el, i) => {
        if (i === 0) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.75s ease-out, transform 0.75s ease-out";
      });
      const check = () => {
        const trigger = window.innerHeight * 0.92;
        sections.forEach((el) => {
          if (el.style.opacity === "1" || el.style.opacity === "") return;
          if (el.getBoundingClientRect().top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        });
      };
      check();
      window.addEventListener("scroll", check, { passive: true });
      return () => window.removeEventListener("scroll", check);
    }, 600);
    return () => clearTimeout(t);
  }, []);

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
        style={{ width: DESIGN_WIDTH, transformOrigin: "top left", transform: `scale(${scale})`, position: "absolute", top: 0, left: 0 }}
      >
        <CaseStudyDesktop />
      </div>
    </div>
  );
}

export default function AlmaPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Alma has no dedicated mobile design yet — show desktop scaled down on mobile too
  return <DesktopAlma onNavigate={onNavigate} />;
}
