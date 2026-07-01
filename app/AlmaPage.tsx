import { useEffect, useState } from "react";
import CaseStudyDesktop from "@/imports/CaseStudyDesktop-1/index";

const DESIGN_WIDTH = 1920;

export default function AlmaPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(Math.min(1, window.innerWidth / DESIGN_WIDTH));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "white" }}>
      {/* Floating back-to-home button — stays fixed, scales with page */}
      <button
        onClick={() => onNavigate("home")}
        style={{
          position: "fixed",
          top: 27 * scale,
          left: 45 * scale,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(8px)",
          border: "1px solid #e8e4df",
          borderRadius: 999,
          padding: `${10 * scale}px ${18 * scale}px`,
          cursor: "pointer",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          fontSize: 14 * scale,
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          color: "#0e1d2b",
          whiteSpace: "nowrap",
        }}
      >
        <svg width={16 * scale} height={16 * scale} viewBox="0 0 16 16" fill="none">
          <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back home
      </button>

      {/* Scaled canvas */}
      <div
        style={{
          width: DESIGN_WIDTH,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
          height: "auto",
        }}
      >
        <CaseStudyDesktop />
      </div>

      {/* Spacer so page height matches scaled content */}
      <div style={{ height: 0, marginTop: `calc((${scale} - 1) * 100%)` }} />
    </div>
  );
}
