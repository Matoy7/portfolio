interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
  scale: number;
}

export default function Header({ scale, onScrollWork, onNavigateAbout, onScrollContact }: Props) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: `${scale * 68}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${scale * 32}px`,
        background: "rgba(26,10,74,1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 999,
      }}
    >
      {/* Logo mark */}
      <div
        style={{
          width: scale * 32,
          height: scale * 32,
          borderRadius: scale * 8,
          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: scale * 14,
            color: "#fff",
          }}
        >
          YE
        </span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", alignItems: "center", gap: scale * 40 }}>
        <span
          className="hero-nav-link"
          onClick={onScrollWork}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: scale * 16,
            color: "#c4b8ff",
            cursor: "pointer",
          }}
        >
          Work
        </span>
        <span
          className="hero-nav-link"
          onClick={onNavigateAbout}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            fontSize: scale * 16,
            color: "#c4b8ff",
            cursor: "pointer",
          }}
        >
          About
        </span>
        <div
          className="cursor-pointer hero-nav-contact"
          onClick={onScrollContact}
          style={{
            background: "#7c3aed",
            borderRadius: 999,
            padding: `${scale * 12}px ${scale * 22}px`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: scale * 16,
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            Contact Me
          </span>
        </div>
      </div>
    </header>
  );
}
