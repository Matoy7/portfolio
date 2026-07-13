import { useEffect, useRef, useState } from "react";
import mobilePortrait from "@/imports/mobile-portrait.png";
import imgPulseCard from "@/imports/Frame13/b408d64d475512d56275485cd8a85bf540ac8e83.png";
import imgAlmaCard from "@/imports/Frame13/fde8b98f3f8528432f9f6c69d09f5bccf388e844.png";
import imgCurioCard from "@/imports/Frame13/c51554de7237f51893371d0ee285af660281af21.png";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ── Shared mobile motion helpers ──────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useInViewOnce<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, inView] = useInViewOnce<HTMLDivElement>();
  const reducedMotion = usePrefersReducedMotion();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: reducedMotion || inView ? 1 : 0,
        transform: reducedMotion || inView ? "translateY(0px)" : "translateY(18px)",
        transition: reducedMotion ? "none" : `opacity 550ms ${EASE} ${delay}ms, transform 550ms ${EASE} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Icons ──────────────────────────────────────────────────── */

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6H19M3 11H19M3 16H19" stroke="#161616" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 5L17 17M17 5L5 17" stroke="#161616" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      style={{ flexShrink: 0, display: "block", minWidth: "18px", minHeight: "18px" }}
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="#161616"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
      <path d="M17.3 8.66C19 8.66 20.7 9.35 21.9 10.57C23.1 11.78 23.8 13.44 23.8 15.16V22.74H19.5V15.16C19.5 14.59 19.3 14.03 18.9 13.63C18.5 13.22 17.9 13 17.3 13C16.8 13 16.2 13.22 15.8 13.63C15.4 14.03 15.2 14.59 15.2 15.16V22.74H10.8V15.16C10.8 13.44 11.5 11.78 12.7 10.57C13.9 9.35 15.6 8.66 17.3 8.66Z" stroke="#e5e7eb" strokeWidth="1.6" />
      <path d="M6.5 9.75H2.2V22.74H6.5V9.75Z" stroke="#e5e7eb" strokeWidth="1.6" />
      <path d="M4.3 6.5C5.5 6.5 6.5 5.5 6.5 4.3C6.5 3.1 5.5 2.2 4.3 2.2C3.1 2.2 2.2 3.1 2.2 4.3C2.2 5.5 3.1 6.5 4.3 6.5Z" stroke="#e5e7eb" strokeWidth="1.6" />
    </svg>
  );
}
function IconBehance() {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
      <path d="M7.58 13.41C9.19 13.41 10.5 12.11 10.5 10.5C10.5 8.89 9.19 7.58 7.58 7.58H2.33V20.41H8.16C10.09 20.41 11.66 18.84 11.66 16.91C11.66 15.3 10.54 13.95 9.02 13.57L7.58 13.41ZM4.67 9.91H7C7.97 9.91 8.75 10.7 8.75 11.66C8.75 12.63 7.97 13.41 7 13.41H4.67V9.91ZM7.58 18.08H4.67V15.75H7.58C8.55 15.75 9.33 16.53 9.33 17.5C9.33 18.46 8.55 18.08 7.58 18.08Z" fill="#e5e7eb" />
      <path d="M18.08 9.33C15.17 9.33 12.83 11.68 12.83 14.58C12.83 17.48 15.17 19.83 18.08 19.83C20.06 19.83 21.78 18.74 22.67 17.15L20.75 16.06C20.27 16.88 19.23 17.5 18.08 17.5C16.68 17.5 15.5 16.64 15.07 15.45H23.33C23.36 15.16 23.33 14.87 23.33 14.58C23.33 11.68 20.98 9.33 18.08 9.33ZM15.07 13.71C15.5 12.52 16.68 11.66 18.08 11.66C19.48 11.66 20.66 12.52 21.09 13.71H15.07Z" fill="#e5e7eb" />
      <path d="M15.75 6.16H20.41V7H15.75V6.16Z" fill="#e5e7eb" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
      <path
        d="M18.92 15.57C18.6 15.41 17.02 14.63 16.72 14.53C16.43 14.42 16.21 14.37 15.99 14.69C15.78 15.01 15.16 15.73 14.98 15.95C14.79 16.16 14.6 16.19 14.28 16.03C13.96 15.87 12.92 15.53 11.69 14.43C10.74 13.58 10.09 12.53 9.9 12.2C9.71 11.88 9.88 11.71 10.04 11.55C10.19 11.4 10.37 11.17 10.53 10.98C10.69 10.8 10.74 10.66 10.85 10.45C10.96 10.23 10.9 10.04 10.82 9.88C10.74 9.72 10.1 8.14 9.83 7.49C9.57 6.87 9.3 6.95 9.11 6.94C8.92 6.93 8.7 6.93 8.49 6.93C8.27 6.93 7.93 7.01 7.63 7.33C7.34 7.65 6.5 8.43 6.5 10.02C6.5 11.6 7.66 13.13 7.82 13.35C7.98 13.56 10.09 16.81 13.32 18.2C14.08 18.54 14.68 18.73 15.15 18.88C15.92 19.13 16.62 19.09 17.18 19.01C17.79 18.92 19.08 18.23 19.35 17.48C19.62 16.73 19.62 16.08 19.53 15.95C19.45 15.81 19.24 15.73 18.92 15.57Z"
        fill="#e5e7eb"
      />
      <path
        d="M13.05 23.59C11.13 23.59 9.25 23.07 7.6 22.1L7.21 21.87L3.15 22.93L4.23 18.98L3.98 18.57C2.91 16.87 2.34 14.89 2.35 12.88C2.35 6.98 7.15 2.18 13.05 2.18C15.91 2.18 18.6 3.29 20.62 5.31C21.62 6.31 22.41 7.49 22.94 8.79C23.48 10.09 23.76 11.48 23.75 12.89C23.75 18.79 18.95 23.59 13.05 23.59Z"
        stroke="#e5e7eb"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
      <path d="M21.66 4.33H4.33C3.14 4.33 2.17 5.3 2.17 6.5V19.49C2.17 20.69 3.14 21.66 4.33 21.66H21.66C22.85 21.66 23.82 20.69 23.82 19.49V6.5C23.82 5.3 22.85 4.33 21.66 4.33Z" stroke="#e5e7eb" strokeWidth="1.6" />
      <path d="M23.82 7.58L14.11 13.75C13.77 13.96 13.39 14.07 12.99 14.07C12.6 14.07 12.21 13.96 11.88 13.75L2.17 7.58" stroke="#e5e7eb" strokeWidth="1.6" />
    </svg>
  );
}

const WA_MSG = encodeURIComponent("Hi Yotam, I came across your portfolio and I'd love to chat.");

/* ── Mobile top bar + slide-down menu ──────────────────────── */

function MobileNav({
  onWork,
  onGlance,
  onContact,
}: {
  onWork: () => void;
  onGlance: () => void;
  onContact: () => void;
}) {
  const [open, setOpen] = useState(false);

  const go = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 200);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between" style={{ padding: "18px 20px" }}>
        <p className="font-bold text-[#161616]" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}>
          Yotam Eliraz
        </p>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center transition-transform duration-200 active:scale-90"
          style={{ width: "44px", height: "44px" }}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Slide-down full menu */}
      <div
        className="fixed inset-0 z-[70] bg-white flex flex-col"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0%)" : "translateY(-8%)",
          pointerEvents: open ? "auto" : "none",
          transition: `opacity 280ms ${EASE}, transform 280ms ${EASE}`,
        }}
      >
        <div className="w-full flex items-center justify-between" style={{ padding: "18px 20px" }}>
          <p className="font-bold text-[#161616]" style={{ fontFamily: "Inter, sans-serif", fontSize: "17px" }}>
            Yotam Eliraz
          </p>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center"
            style={{ width: "44px", height: "44px" }}
          >
            <IconClose />
          </button>
        </div>
        <nav className="flex flex-col flex-1 justify-center gap-2" style={{ padding: "0 28px" }}>
          {[
            { label: "Work", fn: onWork },
            { label: "About", fn: onGlance },
            { label: "CV", fn: () => window.open("/portfolio/app/CV.pdf", "_blank") },
            { label: "Contact", fn: onContact },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.fn)}
              className="text-left transition-opacity active:opacity-50"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "36px",
                color: "#161616",
                padding: "14px 0",
                letterSpacing: "-1px",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-6" style={{ padding: "24px 28px 36px" }}>
          <a href="https://www.linkedin.com/in/yotam-eliraz-977b0450/" target="_blank" rel="noopener noreferrer" style={{ color: "#161616" }}>
            <svg width="20" height="20" viewBox="0 0 26 26" fill="none">
              <path d="M17.3 8.66C19 8.66 20.7 9.35 21.9 10.57C23.1 11.78 23.8 13.44 23.8 15.16V22.74H19.5V15.16C19.5 14.59 19.3 14.03 18.9 13.63C18.5 13.22 17.9 13 17.3 13C16.8 13 16.2 13.22 15.8 13.63C15.4 14.03 15.2 14.59 15.2 15.16V22.74H10.8V15.16C10.8 13.44 11.5 11.78 12.7 10.57C13.9 9.35 15.6 8.66 17.3 8.66Z" stroke="#161616" strokeWidth="1.6" />
              <path d="M6.5 9.75H2.2V22.74H6.5V9.75Z" stroke="#161616" strokeWidth="1.6" />
              <path d="M4.3 6.5C5.5 6.5 6.5 5.5 6.5 4.3C6.5 3.1 5.5 2.2 4.3 2.2C3.1 2.2 2.2 3.1 2.2 4.3C2.2 5.5 3.1 6.5 4.3 6.5Z" stroke="#161616" strokeWidth="1.6" />
            </svg>
          </a>
          <a href="https://www.behance.net/yotame" target="_blank" rel="noopener noreferrer" style={{ color: "#161616" }}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <path d="M7.58 13.41C9.19 13.41 10.5 12.11 10.5 10.5C10.5 8.89 9.19 7.58 7.58 7.58H2.33V20.41H8.16C10.09 20.41 11.66 18.84 11.66 16.91C11.66 15.3 10.54 13.95 9.02 13.57L7.58 13.41ZM4.67 9.91H7C7.97 9.91 8.75 10.7 8.75 11.66C8.75 12.63 7.97 13.41 7 13.41H4.67V9.91ZM7.58 18.08H4.67V15.75H7.58C8.55 15.75 9.33 16.53 9.33 17.5C9.33 18.46 8.55 18.08 7.58 18.08Z" fill="#161616" />
              <path d="M18.08 9.33C15.17 9.33 12.83 11.68 12.83 14.58C12.83 17.48 15.17 19.83 18.08 19.83C20.06 19.83 21.78 18.74 22.67 17.15L20.75 16.06C20.27 16.88 19.23 17.5 18.08 17.5C16.68 17.5 15.5 16.64 15.07 15.45H23.33C23.36 15.16 23.33 14.87 23.33 14.58C23.33 11.68 20.98 9.33 18.08 9.33ZM15.07 13.71C15.5 12.52 16.68 11.66 18.08 11.66C19.48 11.66 20.66 12.52 21.09 13.71H15.07Z" fill="#161616" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */

function MobileHero() {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setMounted(true);
      return;
    }
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)));
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  const step = (visible: boolean, y = 16, dur = 550, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
    transition: reducedMotion ? "none" : `opacity ${dur}ms ${EASE} ${delay}ms, transform ${dur}ms ${EASE} ${delay}ms`,
  });

  return (
    <div className="w-full flex flex-col" style={{ padding: "8px 20px 0" }}>
      {/* Eyebrow */}
      <div style={step(mounted, 12, 500, 0)}>
        <span
          className="inline-flex items-center rounded-full"
          style={{
            background: "#f2f2f2",
            padding: "7px 14px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "1.6px",
            color: "#525252",
          }}
        >
          PRODUCT DESIGNER
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          ...step(mounted, 20, 600, 80),
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "38px",
          lineHeight: "1.08",
          letterSpacing: "-1.2px",
          color: "#161616",
          margin: "16px 0 0",
        }}
      >
        A product designer with a development background
      </h1>

      {/* Portrait card */}
      <div style={step(mounted, 18, 700, 140)}>
        <div
          className="relative w-full overflow-hidden"
          style={{ marginTop: "20px", borderRadius: "24px", background: "#ffffff", aspectRatio: "1 / 1.05" }}
        >
          <img
            src={mobilePortrait}
            alt="Yotam Eliraz"
            className="absolute inset-0"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      {/* Supporting text */}
      <p
        style={{
          ...step(mounted, 14, 550, 200),
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#4b4b4b",
          margin: "20px 0 0",
        }}
      >
        As a digital <strong style={{ color: "#161616" }}>product designer</strong> with a strong foundation in{" "}
        <strong style={{ color: "#161616" }}>software development</strong>, I design intuitive digital products
        that balance user needs, business goals, and technical feasibility.
      </p>
    </div>
  );
}

/* ── Featured Works ─────────────────────────────────────────── */

function MobileWorkCard({
  image,
  title,
  tags,
  onClick,
  isDark = false,
  darkContent,
}: {
  image?: string;
  title?: string;
  tags?: string[];
  onClick?: () => void;
  isDark?: boolean;
  darkContent?: { heading: string; body: string };
}) {
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className="relative w-full overflow-hidden text-left transition-transform duration-150 active:scale-[0.98]"
      style={{ borderRadius: "20px", height: "260px", background: isDark ? "#161616" : "#111214", touchAction: "pan-y" }}
    >
      {isDark ? (
        <div className="absolute inset-0 flex flex-col justify-center" style={{ padding: "28px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "26px",
              color: "#fff",
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            {darkContent?.heading}
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              color: "rgba(255,255,255,0.65)",
              marginTop: "10px",
              lineHeight: 1.5,
            }}
          >
            {darkContent?.body}
          </p>
        </div>
      ) : (
        <>
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 75%)" }}
          />
          <div className="absolute left-0 bottom-0 w-full flex flex-col gap-[10px]" style={{ padding: "20px" }}>
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "22px", color: "#fff", margin: 0 }}>
              {title}
            </p>
            <div className="flex gap-[8px] flex-wrap">
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white"
                  style={{
                    padding: "5px 12px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#fff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </button>
  );
}

function MobileFeaturedWorks({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="mobile-work" style={{ padding: "56px 20px 0" }}>
      <Reveal className="flex items-center justify-between" style={{ marginBottom: "20px" } as React.CSSProperties}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#8a8a8a",
            margin: 0,
          }}
        >
          Featured Works
        </p>
      </Reveal>

      <div className="flex flex-col" style={{ gap: "14px" }}>
        <Reveal delay={0}>
          <MobileWorkCard image={imgPulseCard} title="Pulse" tags={["Dashboard", "Analytics"]} onClick={() => onNavigate("pulse")} />
        </Reveal>
        <Reveal delay={70}>
          <MobileWorkCard image={imgAlmaCard} title="Alma" tags={["Mobile App", "Health"]} onClick={() => onNavigate("alma")} />
        </Reveal>
        <Reveal delay={140}>
          <MobileWorkCard image={imgCurioCard} title="Curio" tags={["E-Commerce", "Kids"]} onClick={() => onNavigate("curio")} />
        </Reveal>
      </div>
    </section>
  );
}

/* ── At a Glance ────────────────────────────────────────────── */

function MobileGlanceCard({
  icon,
  label,
  value,
  caption,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: string;
}) {
  return (
    <div className="flex flex-col items-center text-center" style={{ padding: "32px 20px" }}>
      {icon}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "1.8px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.7)",
          margin: "16px 0 0",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "48px",
          color: "#fff",
          margin: "8px 0 0",
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          color: "rgba(255,255,255,0.65)",
          margin: "10px 0 0",
          maxWidth: "240px",
          lineHeight: 1.5,
        }}
      >
        {caption}
      </p>
    </div>
  );
}

function MobileAtAGlance() {
  const icon = (paths: string[], viewBox: string) => (
    <svg width="30" height="30" viewBox={viewBox} fill="none">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="white" strokeOpacity="0.8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );

  return (
    <section id="mobile-glance" className="w-full" style={{ marginTop: "72px" }}>
      <Reveal className="w-full flex justify-center" style={{ marginBottom: "20px" } as React.CSSProperties}>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "2.2px",
            textTransform: "uppercase",
            color: "#121111",
          }}
        >
          At a Glance
        </p>
      </Reveal>

      <Reveal className="w-full bg-[#161616]" style={{ borderRadius: "0px" } as React.CSSProperties}>
        <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <MobileGlanceCard
              icon={icon(
                [
                  "M35.3 29.5L38.8 48.9C38.9 49.4 38.6 49.9 38.2 50.1C37.8 50.3 37.3 50.2 36.9 49.9L28.8 43.9C28 43.3 26.9 43.3 26 43.9L17.8 50C17.4 50.2 16.9 50.3 16.5 50.1C16.1 49.9 15.9 49.4 16 48.9L19.5 29.5",
                  "M27.4 32C34.9 32 41.1 25.9 41.1 18.3C41.1 10.7 34.9 4.6 27.4 4.6C19.8 4.6 13.7 10.7 13.7 18.3C13.7 25.9 19.8 32 27.4 32Z",
                ],
                "0 0 55 55"
              )}
              label="Hold a Certification in"
              value="UI UX"
              caption="Over 240 hours at Graphitech College"
            />
          </div>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <MobileGlanceCard
              icon={icon(
                ["M27.4 15.7V47.7", "M6.8 40.9C6.2 40.9 5.7 40.6 5.2 40.2C4.8 39.8 4.6 39.2 4.6 38.6V8.9C4.6 8.3 4.8 7.7 5.2 7.3C5.7 6.9 6.2 6.6 6.8 6.6H18.3C20.7 6.6 23 7.6 24.7 9.3C26.4 11 27.4 13.3 27.4 15.7C27.4 13.3 28.4 11 30.1 9.3C31.8 7.6 34.1 6.6 36.5 6.6H48C48.5 6.6 49.1 6.9 49.6 7.3C50 7.7 50.2 8.3 50.2 8.9V38.6C50.2 39.2 50 39.8 49.6 40.2C49.1 40.6 48.5 40.9 48 40.9H34.2C32.4 40.9 30.7 41.6 29.4 42.9C28.1 44.1 27.4 45.9 27.4 47.7C27.4 45.9 26.7 44.1 25.4 42.9C24.1 41.6 22.4 40.9 20.5 40.9H6.8Z"],
                "0 0 55 55"
              )}
              label="Hold Computer Science"
              value="B.Sc."
              caption="Tel Aviv University"
            />
          </div>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <MobileGlanceCard
              icon={icon(
                [
                  "M13.1 29.3L16.2 23.2C16.6 22.5 17.1 22 17.7 21.6C18.3 21.2 19.1 20.9 19.8 20.9H42.3C42.9 20.9 43.5 21.1 44.1 21.3C44.7 21.6 45.2 22 45.6 22.5C46 23 46.2 23.6 46.4 24.2C46.5 24.9 46.5 25.5 46.3 26.1L43.1 38.6C42.9 39.5 42.4 40.3 41.6 40.9C40.9 41.5 40 41.8 39 41.8H8.9C7.8 41.8 6.7 41.3 5.9 40.5C5.2 39.8 4.7 38.7 4.7 37.6V10.5C4.7 9.4 5.2 8.3 5.9 7.5C6.7 6.8 7.8 6.3 8.9 6.3H17C17.7 6.3 18.4 6.5 19 6.8C19.7 7.1 20.2 7.6 20.6 8.2L22.3 10.7C22.6 11.3 23.2 11.8 23.8 12.1C24.4 12.4 25 12.6 25.7 12.6H38.1C39.2 12.6 40.3 13 41.1 13.8C41.8 14.6 42.3 15.6 42.3 16.8V20.9",
                ],
                "0 0 51 48"
              )}
              label="Products Designed"
              value="5"
              caption="End-to-end UX and UI, Product design projects"
            />
          </div>
          <div>
            <MobileGlanceCard
              icon={icon(
                ["M15.5 20.5L5 31L15.5 41.4", "M37.6 10L24.5 51.9", "M46.6 41.4L57.1 31L46.6 20.5"],
                "0 0 62 62"
              )}
              label="Years in Development"
              value="13+"
              caption="Building scalable software across multiple industries"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ── FAQ ────────────────────────────────────────────────────── */

const faqs = [
  {
    id: "background",
    question: "What's your background?",
    answer:
      "I spent 13 years as a software engineer before transitioning into Product Design. This technical background helps me design products that are not only intuitive for users but also realistic to build.",
  },
  {
    id: "projects",
    question: "What kind of projects do you design?",
    answer:
      "I focus on digital products, from mobile apps to SaaS platforms. My process covers UX research, user flows, wireframes, high fidelity UI, interactive prototypes, and developer ready designs in Figma.",
  },
  {
    id: "opportunities",
    question: "Are you available for new opportunities?",
    answer:
      "Yes. I'm open to Product Designer and UX/UI Designer opportunities, as well as freelance collaborations. If you think we'd be a good fit, feel free to get in touch.",
  },
];

function MobileFaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <div className="border border-[#ebebeb] rounded-2xl" style={{ padding: "0 18px", marginBottom: "12px" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
        style={{ padding: "20px 0" }}
      >
        <span
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", color: "#1a1a1a", paddingRight: "16px" }}
        >
          {item.question}
        </span>
        <span className="flex-shrink-0 flex items-center justify-center" style={{ width: "28px", height: "28px" }}>
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M2 8H14" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M8 2V14"
              stroke="#1a1a1a"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{
                transformOrigin: "8px 8px",
                transform: isOpen ? "scaleY(0)" : "scaleY(1)",
                opacity: isOpen ? 0 : 1,
                transition: `transform 280ms ${EASE}, opacity 280ms ${EASE}`,
              }}
            />
          </svg>
        </span>
      </button>
      <div style={{ height: `${height}px`, overflow: "hidden", transition: `height 280ms ${EASE}, opacity 280ms ${EASE}`, opacity: isOpen ? 1 : 0 }}>
        <div ref={contentRef} style={{ paddingBottom: "20px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14.5px", lineHeight: 1.65, color: "#5a5a6e" }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileFaq() {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section id="mobile-faq" style={{ marginTop: "64px", padding: "0 20px" }}>
      <Reveal>
        {faqs.map((item) => (
          <MobileFaqItem key={item.id} item={item} isOpen={openId === item.id} onToggle={() => setOpenId((p) => (p === item.id ? null : item.id))} />
        ))}
      </Reveal>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */

function MobileFooter() {
  const social = [
    { icon: <IconLinkedIn />, label: "LinkedIn", href: "https://www.linkedin.com/in/yotam-eliraz-977b0450/", external: true },
    { icon: <IconBehance />, label: "Behance", href: "https://www.behance.net/yotame", external: true },
    { icon: <IconWhatsApp />, label: "WhatsApp", href: `https://web.whatsapp.com/send?phone=972505795099&text=${WA_MSG}`, external: true },
    { icon: <IconMail />, label: "Mail", href: "mailto:yotam.eliraz@gmail.com", external: false },
  ];

  return (
    <div className="w-full bg-[#0f0f0f]" style={{ marginTop: "64px" }}>
      <footer id="mobile-contact" className="bg-[#161616]" style={{ borderRadius: "32px 32px 0 0", fontFamily: "Inter, sans-serif" }}>
        <Reveal className="flex flex-col items-center text-center" style={{ padding: "56px 24px 40px" } as React.CSSProperties}>
          <p style={{ fontWeight: 600, fontSize: "12px", letterSpacing: "2.4px", textTransform: "uppercase", color: "#9ca3af" }}>
            Let's Connect
          </p>
          <h2
            style={{
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: 1.2,
              color: "#f5f5f5",
              margin: "16px 0 0",
              letterSpacing: "-0.6px",
            }}
          >
            Let's <strong style={{ fontWeight: 800 }}>build</strong> something great together
          </h2>
          <p style={{ fontWeight: 400, fontSize: "14px", color: "#9ca3af", margin: "14px 0 0" }}>
            Currently open to new opportunities.
          </p>
          <a
            href="tel:0505795099"
            className="flex items-center justify-center gap-[8px] transition-transform duration-150 active:scale-95"
            style={{
              marginTop: "24px",
              background: "#fefefe",
              borderRadius: "999px",
              height: "52px",
              padding: "0 28px",
              textDecoration: "none",
            }}
          >
            <IconPhone />
            <span style={{ color: "#161616", fontWeight: 700, fontSize: "15px" }}>Call Me</span>
          </a>
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", margin: "0 24px" }} />

        <Reveal className="flex flex-wrap items-center justify-center" style={{ gap: "14px", padding: "28px 20px" } as React.CSSProperties}>
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[8px] transition-transform duration-150 active:scale-95"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "999px",
                padding: "10px 16px",
                textDecoration: "none",
              }}
            >
              {item.icon}
              <span style={{ color: "#e5e7eb", fontSize: "13px", fontWeight: 500 }}>{item.label}</span>
            </a>
          ))}
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: "11px", padding: "16px 20px" }}>
            © {new Date().getFullYear()} Yotam Eliraz. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── Root mobile page ───────────────────────────────────────── */

export default function MobileHome({ onNavigate }: { onNavigate: (page: string) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Lock horizontal movement at the document level. A div's own
  // overflow-x:hidden isn't always enough on mobile browsers — the
  // html/body can still allow elastic horizontal panning/rubber-banding
  // if any descendant is even slightly wider than the viewport.
  useEffect(() => {
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    const prevBodyOverflowX = document.body.style.overflowX;
    const prevHtmlMaxWidth = document.documentElement.style.maxWidth;
    const prevBodyMaxWidth = document.body.style.maxWidth;
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.maxWidth = "100vw";
    document.body.style.maxWidth = "100vw";
    return () => {
      document.documentElement.style.overflowX = prevHtmlOverflowX;
      document.body.style.overflowX = prevBodyOverflowX;
      document.documentElement.style.maxWidth = prevHtmlMaxWidth;
      document.body.style.maxWidth = prevBodyMaxWidth;
    };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full" style={{ overflowX: "hidden", maxWidth: "100vw", touchAction: "pan-y" }}>
      <MobileNav
        onWork={() => scrollTo("mobile-work")}
        onGlance={() => scrollTo("mobile-glance")}
        onContact={() => scrollTo("mobile-contact")}
      />

      <MobileHero />

      <MobileFeaturedWorks onNavigate={onNavigate} />

      <MobileAtAGlance />

      <MobileFaq />

      <MobileFooter />
    </div>
  );
}
