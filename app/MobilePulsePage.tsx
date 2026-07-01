import { useEffect, useState, useRef } from "react";
import MobileComponent from "@/imports/Mobile/index";

export default function MobilePulsePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure true content height
  useEffect(() => {
    const t = setTimeout(() => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  // Scroll fade-in
  useEffect(() => {
    const t = setTimeout(() => {
      const root = contentRef.current?.querySelector('[data-name="Mobile"]')
        ?? contentRef.current?.firstElementChild as HTMLElement | null;
      if (!root) return;
      const sections = Array.from(root.children) as HTMLElement[];

      sections.forEach((el, i) => {
        if (i === 0) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(32px)";
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
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ width: "100%", background: "white", position: "relative", minHeight: height || "100vh" }}>
      {/* Back home button */}
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

      <div ref={contentRef}>
        <MobileComponent />
      </div>
    </div>
  );
}
