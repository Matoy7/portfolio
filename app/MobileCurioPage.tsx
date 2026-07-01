import CurioDesign from "@/imports/CurioMobile/index";

export default function MobileCurioPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div style={{ width: "100%", background: "white", position: "relative" }}>
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
      <CurioDesign />
    </div>
  );
}
