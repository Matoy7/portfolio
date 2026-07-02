import { useEffect, useRef, useState } from "react";
import imgImage3 from "@/imports/Desktop1_v2/3372907fc21f8df36efc22daf2ade812539169ec.png";

const AI_SYMBOLS = [
  { id: 0, symbol: "⬡", x: 72, y: 18, size: 18, duration: 6.2, delay: 0 },
  { id: 1, symbol: "∿", x: 88, y: 38, size: 14, duration: 7.8, delay: 1.2 },
  { id: 2, symbol: "◈", x: 58, y: 55, size: 12, duration: 5.5, delay: 0.6 },
  { id: 3, symbol: "⟠", x: 94, y: 62, size: 16, duration: 8.1, delay: 2.1 },
  { id: 4, symbol: "⊹", x: 65, y: 22, size: 13, duration: 6.7, delay: 3.0 },
  { id: 5, symbol: "⌬", x: 80, y: 72, size: 15, duration: 7.2, delay: 1.7 },
  { id: 6, symbol: "◇", x: 54, y: 42, size: 11, duration: 9.0, delay: 0.3 },
  { id: 7, symbol: "⟁", x: 91, y: 28, size: 17, duration: 5.9, delay: 4.1 },
];

function FloatingSymbol({ symbol, x, y, size, duration, delay }: {
  symbol: string; x: number; y: number; size: number; duration: number; delay: number;
}) {
  return (
    <div
      className="absolute select-none pointer-events-none"
      style={{
        left: `${x}%`, top: `${y}%`, fontSize: size,
        color: "rgba(196,184,255,0.55)",
        animation: `aiFloat ${duration}s ease-in-out ${delay}s infinite`,
        textShadow: "0 0 12px rgba(124,58,237,0.7)", fontWeight: 300,
      }}
    >
      {symbol}
    </div>
  );
}

interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
}

/* ── Floating navigation ─────────────────────────────────── */

function FloatingNav({ scale, heroRef, onScrollWork, onNavigateAbout, onScrollContact }: {
  scale: number;
  heroRef: React.RefObject<HTMLDivElement | null>;
  onScrollWork: () => void;
  onNavigateAbout: () => void;
  onScrollContact: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [heroGone, setHeroGone] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track when the hero scrolls out of view
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setHeroGone(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [heroRef]);

  // Show floating nav when hero is gone + user scrolls; auto-hide after 1s idle
  useEffect(() => {
    const HIDE_DELAY = 1000;

    const showNav = () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      hideTimerRef.current = setTimeout(() => setVisible(false), HIDE_DELAY);
    };

    const onScroll = () => {
      if (heroGone) {
        showNav();
      } else {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [heroGone]);

  // Hide immediately when hero comes back into view
  useEffect(() => {
    if (!heroGone) {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setVisible(false);
    }
  }, [heroGone]);

  return (
    <div
      style={{
        position: "fixed",
        top: 28,
        left: 40,
        right: 40,
        borderRadius: 16,
        transform: visible ? "translateY(0px)" : "translateY(-8px)",
        zIndex: 1000,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 280ms ease, transform 280ms ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${scale * 48}px`,
        height: `${scale * 68}px`,
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* Logo mark */}
      <div style={{ width: scale*39.7, height: scale*39.7, borderRadius: scale*9.925, background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: scale*17.369, color: "#fff" }}>YE</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: scale*49.626 }}>
        <span className="float-nav-link" onClick={onScrollWork} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: scale*16, color: "#0e1d2b", cursor: "pointer", whiteSpace: "nowrap" }}>Work</span>
        <span className="float-nav-link" onClick={onNavigateAbout} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: scale*16, color: "#0e1d2b", cursor: "pointer", whiteSpace: "nowrap" }}>About</span>
        <div
          className="cursor-pointer hero-nav-contact"
          onClick={onScrollContact}
          style={{ background: "#7c3aed", borderRadius: 999, padding: `${scale*12}px ${scale*22}px`, display: "flex", alignItems: "center", height: `${scale*44}px`, flexShrink: 0 }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: scale*16, color: "#fff", whiteSpace: "nowrap" }}>Contact Me</span>
        </div>
      </div>
    </div>
  );
}

export default function NewHero({ onNavigateAbout, onScrollContact, onScrollWork }: Props) {
  const [scale, setScale] = useState(1);
  const heroWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / 1440);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <style>{`
        @keyframes aiFloat {
          0%   { transform: translateY(0px) rotate(0deg); opacity: 0.45; }
          33%  { transform: translateY(-14px) rotate(6deg); opacity: 0.8; }
          66%  { transform: translateY(-6px) rotate(-4deg); opacity: 0.6; }
          100% { transform: translateY(0px) rotate(0deg); opacity: 0.45; }
        }
        @keyframes macPulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(124,58,237,0.35)) drop-shadow(0 0 28px rgba(124,58,237,0.15)); }
          50%       { filter: drop-shadow(0 0 28px rgba(168,85,247,0.65)) drop-shadow(0 0 56px rgba(124,58,237,0.35)); }
        }
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .hero-btn-primary {
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .hero-btn-primary:hover {
          background: #6d28d9 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.55);
        }
        .hero-btn-primary:active { transform: translateY(0); }
        .hero-btn-ghost {
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, color 0.2s ease;
        }
        .hero-btn-ghost:hover {
          background: rgba(124,58,237,0.18) !important;
          border-color: rgba(124,58,237,0.8) !important;
          transform: translateY(-2px);
        }
        .hero-btn-ghost:active { transform: translateY(0); }
        .hero-nav-link { transition: color 0.18s ease; cursor: pointer; }
        .hero-nav-link:hover { color: #ffffff !important; }
        .float-nav-link { transition: color 0.18s ease; cursor: pointer; }
        .float-nav-link:hover { color: #7c3aed !important; }
        .hero-nav-contact { transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease; }
        .hero-nav-contact:hover {
          background: #6d28d9 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(124,58,237,0.5);
        }
      `}</style>

      {/* ── Floating nav — transparent on load, appears on scroll, auto-hides ── */}
      <FloatingNav
        scale={scale}
        heroRef={heroWrapperRef}
        onScrollWork={onScrollWork}
        onNavigateAbout={onNavigateAbout}
        onScrollContact={onScrollContact}
      />

      {/* Scale wrapper to fill full viewport */}
      <div ref={heroWrapperRef} style={{ width: "100%", height: `calc(${scale} * 860px)`, position: "relative", overflow: "hidden" }}>

        {/* ── Static hero nav — absolute on wrapper, always on top, never clipped ── */}
        <nav
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            height: `${scale * 68}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${scale * 32}px`,

          }}
        >
          <div style={{ width: scale*32, height: scale*32, borderRadius: scale*8, background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: scale*14, color: "#fff" }}>YE</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: scale*40 }}>
            <span className="hero-nav-link" onClick={onScrollWork} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: scale*16, color: "#c4b8ff", cursor: "pointer" }}>Work</span>
            <span className="hero-nav-link" onClick={onNavigateAbout} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: scale*16, color: "#c4b8ff", cursor: "pointer" }}>About</span>
            <div className="cursor-pointer hero-nav-contact" onClick={onScrollContact} style={{ background: "#7c3aed", borderRadius: 999, padding: `${scale*12}px ${scale*22}px`, display: "flex", alignItems: "center" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: scale*16, color: "#fff", whiteSpace: "nowrap" }}>Contact Me</span>
            </div>
          </div>
        </nav>
        <div style={{ width: 1440, position: "absolute", top: 0, left: 0, transform: `scale(${scale})`, transformOrigin: "top left" }}>

          <div
            className="relative flex flex-col mx-auto"
            style={{
              width: 1440,
              background: "radial-gradient(ellipse 65% 60% at 65% 40%, rgba(26,10,74,1) 0%, rgba(20,9,53,1) 22.5%, rgba(13,8,32,1) 45%, rgba(8,6,22,1) 100%)",
              paddingBottom: "8%",
            }}
          >
            {/* Hero body */}
            <div className="relative z-10 flex-1 flex items-center w-full" style={{ paddingLeft: 152, paddingRight: 60, gap: 48 }}>
              {/* Left text */}
              <div style={{ flex: "0 0 auto", maxWidth: 706, paddingBottom: 80 }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14.888, lineHeight: "19.851px", color: "#fff", letterSpacing: "1.4888px", textTransform: "uppercase", marginBottom: 32, whiteSpace: "nowrap" }}>
                  Product Designer
                </p>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 76, color: "#f0eeff", letterSpacing: "-1.45px", lineHeight: "80px", marginBottom: 28 }}>
                    <p style={{ margin: 0 }}>From Engineering</p>
                    <p style={{ margin: 0 }}>to Product Design</p>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 22, lineHeight: "34px", color: "#e2daff", maxWidth: 666, margin: 0 }}>
                    Product Designer with 12 years of engineering experience, creating intuitive digital products through user centered design.
                  </p>
                </div>
                <div className="flex items-center" style={{ gap: 19.851, marginTop: 64 }}>
                  <div className="cursor-pointer hero-btn-primary" onClick={onScrollWork} style={{ background: "#7c3aed", borderRadius: 999, padding: "17.369px 34.738px" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 20, color: "#fff", whiteSpace: "nowrap" }}>View Case Studies</span>
                  </div>
                  <div className="cursor-pointer hero-btn-ghost" onClick={onNavigateAbout} style={{ background: "rgba(124,58,237,0.06)", borderRadius: 999, padding: "18.472px 35.841px", border: "1.103px solid rgba(124,58,237,0.45)" }}>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 20, color: "#c4b8ff", whiteSpace: "nowrap" }}>About Me</span>
                  </div>
                </div>
              </div>

              {/* Right — computer with pulse + floating AI symbols */}
              <div className="flex-1 flex items-center justify-center relative" style={{ paddingBottom: 40 }}>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div style={{ width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(124,58,237,0.4)", animation: "ringPulse 3.2s ease-out 0s infinite" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div style={{ width: 380, height: 380, borderRadius: "50%", border: "1px solid rgba(168,85,247,0.3)", animation: "ringPulse 3.2s ease-out 1.6s infinite" }} />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  {AI_SYMBOLS.map((s) => <FloatingSymbol key={s.id} {...s} />)}
                </div>
                <img
                  alt=""
                  style={{ width: 519, height: 509.747, objectFit: "contain", pointerEvents: "none", position: "relative", zIndex: 1, animation: "macPulse 4s ease-in-out infinite" }}
                  src={imgImage3}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
