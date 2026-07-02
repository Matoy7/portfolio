import { useState, useEffect } from "react";
import MobileHome from "./MobileHome";
import NewHero from "./NewHero";
import Header from "./Header";
import svgPaths from "@/imports/Frame11/svg-o0xaf2ie0h";
import imgHero from "@/imports/Frame11/376b4ff69c76e4c7548a2d9016b80b772b65dbee.png";
import imgHeroDashboard from "@/imports/Frame11/hero_dashboard.png";
import imgHeroCurio from "@/imports/Frame11/hero_curio.png";
import imgAlma from "@/imports/Frame11/0ff53a7574fe5ddd7893ea066c3a9fa41eb680ff.png";
import imgPulse from "@/imports/Frame11/257c6ffc3188a1eaa8ed81ab7cbbf0f290627b4f.png";
import imgCurio from "@/imports/Frame11/9dce77c3753db7b26f478f524ee1a15c07c28a59.png";
import aboutPhoto from "@/imports/PIC_5444.jpg";

/* ── SVG Icons ─────────────────────────────────────────── */

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-[20.274px]"} fill="none" viewBox="0 0 20.2742 20.2742">
      <path d={svgPaths.p2be78800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-[20.274px]"} fill="none" viewBox="0 0 20.2742 20.2742">
      <path d={svgPaths.p3ec1fd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-[20.274px]"} fill="none" viewBox="0 0 20.2742 20.2742">
      <path d={svgPaths.p2c708800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
      <path d={svgPaths.p4272980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-[20.274px]"} fill="none" viewBox="0 0 20.2742 20.2742">
      <path d={svgPaths.p31aa100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
      <path d={svgPaths.p271a7a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
      <path d={svgPaths.p1833ee00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.68951" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "size-[20.274px]"} fill="none" viewBox="0 0 20.2742 20.2742">
      <g clipPath="url(#behance-clip)">
        <path d={svgPaths.p12b43500} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="behance-clip">
          <rect fill="white" height="20.2742" width="20.2742" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ── Tag pill ───────────────────────────────────────────── */

function Tag({ label, dim }: { label: string; dim?: boolean }) {
  return (
    <div
      className={[
        "rounded-[17103236px] shrink-0 relative",
        dim
          ? "bg-[rgba(255,255,255,0.1)]"
          : "bg-[rgba(255,255,255,0.2)]",
      ].join(" ")}
    >
      {!dim && (
        <div
          aria-hidden
          className="absolute border-[0.51px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[17103236px]"
        />
      )}
      {dim && (
        <div
          aria-hidden
          className="absolute border-[0.51px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[17103236px]"
        />
      )}
      <div className="flex flex-col items-start px-[11.724px] py-[4.715px]">
        <p className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[12.615px] text-white whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ── Case Study Card ────────────────────────────────────── */

interface CardProps {
  image: string;
  categoryLabel: string;
  categoryColor: string;
  categoryTextColor?: string;
  title: string;
  description: string;
  tags: string[];
  dimTags?: boolean;
  hasGradient?: boolean;
  onClick?: () => void;
  featured?: boolean;
}

function CaseStudyCard({
  image,
  categoryLabel,
  categoryColor,
  categoryTextColor = "white",
  title,
  description,
  tags,
  dimTags = false,
  hasGradient = true,
  onClick,
  featured = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        "group relative rounded-[20px] w-full cursor-pointer overflow-hidden",
        "transition-all duration-[280ms] ease-out",
        "hover:-translate-y-[4px] hover:shadow-[0_24px_56px_rgba(0,0,0,0.22)]",
        "active:scale-[0.995]",
        "motion-reduce:transition-none motion-reduce:hover:transform-none",
      ].join(" ")}
      style={{ height: featured ? 273 : 240 }}
    >
      {/* Full-bleed background image */}
      <img
        alt=""
        src={image}
        className={[
          "absolute inset-0 w-full h-full object-cover",
          "transition-transform duration-[500ms] ease-out",
          "group-hover:scale-[1.04]",
          "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
        ].join(" ")}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{ padding: "28px 32px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", width: "fit-content" }}>
            <span style={{
              background: categoryColor, color: categoryTextColor,
              fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 700,
              letterSpacing: "0.6px", padding: "5px 12px", borderRadius: 7,
            }}>
              {categoryLabel}
            </span>
          </div>

          {/* Title */}
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 700,
            fontSize: featured ? 32 : 28, lineHeight: 1.2,
            color: "#ffffff", margin: 0,
          }}>
            {title}
          </p>

          {/* Description */}
          <p style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 400,
            fontSize: 17, lineHeight: 1.5,
            color: "rgba(255,255,255,0.72)", margin: 0,
          }}>
            {description}
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 600,
              fontSize: 13, letterSpacing: "0.4px",
              color: dimTags ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.75)",
              background: dimTags ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 100, padding: "5px 12px",
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


/* ── Footer contact item ────────────────────────────────── */

const WA_MSG = encodeURIComponent("Hi Yotam, I came across your portfolio and I'd love to chat.");

function FooterItem({
  icon, href, title,
}: {
  icon: React.ReactNode; href?: string; title?: string;
}) {
  const inner = (
    <div
      className="group flex items-center justify-center cursor-pointer shrink-0 text-black transition-all duration-[220ms] ease-out hover:-translate-y-0.5 hover:text-[#4793d6] hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none"
      title={title}
    >
      {icon}
    </div>
  );
  if (href) return <a href={href} target="_blank" rel="noopener" className="text-black no-underline">{inner}</a>;
  return inner;
}

/* ── Main App ───────────────────────────────────────────── */

/* ── Hero crossfade slideshow ─────────────────────────── */

const HERO_SLIDES = [
  { src: imgHero,          alt: "Mobile app screens"          },
  { src: imgHeroDashboard, alt: "Pulse dashboard"             },
  { src: imgHeroCurio,     alt: "Curio educational toy shop"  },
];

const DISPLAY_MS = 4000;
const FADE_MS    = 700;

function HeroSlideshow() {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    const t = setTimeout(
      () => setActive((a) => (a + 1) % HERO_SLIDES.length),
      DISPLAY_MS
    );
    return () => clearTimeout(t);
  }, [active, prefersReduced]);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            opacity: i === active ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
            willChange: "opacity",
          }}
        />
      ))}
    </div>
  );
}

export default function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    const updateScale = () => setScale(window.innerWidth / 1440);
    
    window.addEventListener("resize", check);
    window.addEventListener("resize", updateScale);
    
    updateScale();
    
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  if (isMobile) return <MobileHome onNavigate={onNavigate} />;

  return (
    <div className="bg-[#f5f1ec] min-h-screen w-full flex flex-col items-center">
      <style>{`
        .cta-btn-primary {
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .cta-btn-primary:hover {
          background: #6d28d9 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(124,58,237,0.55);
        }
        .cta-btn-primary:active { transform: translateY(0); }
        .cta-btn-ghost {
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, color 0.2s ease;
        }
        .cta-btn-ghost:hover {
          background: rgba(124,58,237,0.18) !important;
          border-color: rgba(124,58,237,0.8) !important;
          transform: translateY(-2px);
        }
        .cta-btn-ghost:active { transform: translateY(0); }
      `}</style>

      {/* ── Separate Header (desktop only) ─── */}
      <Header
        scale={scale}
        onNavigateAbout={() => onNavigate("about")}
        onScrollContact={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        onScrollWork={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
      />

      {/* ── New Hero (desktop only, full width) ─── */}
      <div className="w-full">
        <NewHero
          onNavigateAbout={() => onNavigate("about")}
          onScrollContact={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          onScrollWork={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
        />
      </div>

      <div className="w-[1145.25px] flex flex-col">
        {/* placeholder — case studies moved to full-width below */}
      </div>

      {/* ── Case Studies — Full-width editorial layout ────── */}
      {/* ── Case Studies — Editorial Layout ─────────────── */}
      <section
        id="case-studies"
        className="relative w-full"
        style={{ padding: "120px 0 100px" }}
      >
        {/* Two-column grid: cards fill left, title anchored right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 540px",
          gap: 0,
          alignItems: "start",
          position: "relative",
          maxWidth: 1800,
          margin: "0 auto",
          paddingLeft: 80,
          paddingRight: 80,
        }}>

            {/* ── Left column: stacked cards ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32, paddingTop: 60, paddingRight: 48 }}>

              {/* Card 1: Alma */}
              <CaseStudyCard
                image={imgAlma}
                categoryLabel="MOBILE APP"
                categoryColor="#d2684a"
                title="Alma – Pregnancy App"
                description="AI powered pregnancy food safety assistant."
                tags={["AI", "HEALTH", "MOBILE"]}
                hasGradient
                onClick={() => onNavigate("alma")}
              />

              {/* Card 2: Pulse — featured, offset right */}
              <div style={{ marginLeft: 48, position: "relative", zIndex: 2 }}>
                <CaseStudyCard
                  image={imgPulse}
                  categoryLabel="DASHBOARD"
                  categoryColor="rgba(88,86,214,0.9)"
                  title="Pulse – Gaming Analytics"
                  description="A real time dashboard for game product managers."
                  tags={["DATA", "DASHBOARD", "SAAS"]}
                  dimTags
                  hasGradient={false}
                  featured
                  onClick={() => onNavigate("pulse")}
                />
              </div>

              {/* Card 3: Curio — widened, extends right for staggered composition */}
              <div style={{ marginRight: -48 }}>
                <CaseStudyCard
                  image={imgCurio}
                  categoryLabel="E-COMMERCE"
                  categoryColor="#fec66e"
                  categoryTextColor="#1f2937"
                  title="Curio – Online Toys Store"
                  description="An online marketplace for educational toys for kids."
                  tags={["AI", "HEALTH", "MOBILE"]}
                  hasGradient
                  onClick={() => onNavigate("curio")}
                />
              </div>
            </div>

            {/* ── Right column: editorial title ── */}
            <div style={{ paddingLeft: 48, paddingTop: 60, position: "sticky", top: 120 }}>
              {/* Large editorial headline */}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 110,
                  lineHeight: 0.92,
                  letterSpacing: "-3px",
                  color: "#16162B",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                <div>Selected</div>
                <div>Case</div>
                <div>Studies</div>
              </div>
            </div>

          </div>
        </section>

      {/* ── About Me + Let's Talk — Figma design ─────────────── */}
      <section
        id="about-contact"
        className="relative w-full"
        style={{ background: "#0d0b1e" }}
      >
        <div
          className="mx-auto w-full flex flex-col items-center justify-center"
          style={{ maxWidth: 1280, padding: "64px 80px" }}
        >
          {/* ── About Me row ── */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full" style={{ paddingBottom: 80 }}>
            {/* Polaroid photo with glow */}
            <div className="relative flex-shrink-0" style={{ width: 220, height: 242 }}>
              {/* Glow blob */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: 400,
                  height: 422,
                  left: -90,
                  top: -90,
                  filter: "blur(40px)",
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(120,50,255,0.4) 0%, rgba(90,30,200,0.15) 55%, rgba(0,0,0,0) 75%)",
                }}
              />
              {/* Polaroid frame */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: 2, top: -7, width: 216, height: 255 }}
              >
                <div
                  className="bg-white"
                  style={{
                    transform: "rotate(-4deg)",
                    borderRadius: 4,
                    width: 200,
                    padding: "10px 10px 32px 10px",
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.55)",
                  }}
                >
                  <img
                    src={aboutPhoto}
                    alt="Yotam in Venice"
                    className="w-full object-cover"
                    style={{ height: 200, objectPosition: "35% center" }}
                  />
                </div>
              </div>
            </div>

            {/* Text column */}
            <div className="flex flex-col items-start" style={{ width: 564, gap: 20 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: "16px",
                  letterSpacing: "2.16px",
                  textTransform: "uppercase",
                  color: "#8b8fa8",
                }}
              >
                About Me
              </span>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 44.8,
                  lineHeight: "49.28px",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Hi, I'm Yotam
              </h2>
              <div className="flex flex-col" style={{ gap: 16, width: "100%" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14.4, lineHeight: "24.48px", color: "#b0b5cc", margin: 0 }}>
                  I design digital experiences that are intuitive, meaningful, and user-centered. With a background in computer science and over a decade in software development, I bring a unique blend of technical understanding and creative thinking to every project.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14.4, lineHeight: "24.48px", color: "#b0b5cc", margin: 0 }}>
                  I care deeply about solving real problems and creating products that make people's lives easier and better.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14.4, lineHeight: "24.48px", color: "#b0b5cc", margin: 0 }}>
                  When I'm not designing, you'll find me traveling, exploring new places, and getting inspired by the world around me.
                </p>
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="w-full" style={{ borderTop: "0.889px solid rgba(255,255,255,0.07)", paddingBottom: 32 }} />

          {/* ── Let's Talk row ── */}
          <div id="contact" className="flex flex-col lg:flex-row items-center w-full" style={{ gap: 24 }}>
            {/* Eyebrow + heading */}
            <div className="flex flex-col flex-shrink-0" style={{ width: 162, gap: 4 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: "16px",
                  letterSpacing: "2.16px",
                  textTransform: "uppercase",
                  color: "#8b8fa8",
                }}
              >
                Let's Connect
              </span>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 35.2,
                  lineHeight: "38.72px",
                  color: "#ffffff",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Let's Talk
              </h2>
            </div>

            {/* Subtitle + social links */}
            <div className="flex-1 flex flex-col items-start" style={{ gap: 12, padding: "0 32px", minWidth: 0 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 13.12, lineHeight: "20.99px", color: "#b0b5cc", margin: 0 }}>
                Looking for a Product Designer? I'd love to hear about your project, product or opportunity.
              </p>
              <div className="flex flex-wrap items-center" style={{ gap: 24 }}>
                <a
                  href="mailto:yotam.eliraz@gmail.com"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 8, textDecoration: "none" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 20.2742 20.2742">
                    <path d={svgPaths.p2c708800} stroke="#6B70A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p4272980} stroke="#6B70A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    yotam.eliraz@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yotam-eliraz-977b0450/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 8, textDecoration: "none" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 20.2742 20.2742">
                    <path d={svgPaths.p31aa100} stroke="#6B70A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p271a7a80} stroke="#6B70A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p1833ee00} stroke="#6B70A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://www.behance.net/yotame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 8, textDecoration: "none" }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 20.2742 20.2742">
                    <g clipPath="url(#behance-clip-figma)">
                      <path d={svgPaths.p12b43500} fill="#6B70A8" />
                    </g>
                    <defs>
                      <clipPath id="behance-clip-figma">
                        <rect fill="white" height="20.2742" width="20.2742" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: "16px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    Behance
                  </span>
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-shrink-0 items-center" style={{ gap: 12 }}>
              <a
                href="mailto:yotam.eliraz@gmail.com"
                className="cursor-pointer cta-btn-primary flex items-center no-underline"
                style={{
                  gap: 8,
                  borderRadius: 999,
                  padding: "10px 20px",
                  backgroundImage: "linear-gradient(164.973deg, rgb(79,99,231) 0%, rgb(107,70,230) 100%)",
                }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 20.2742 20.2742">
                  <path d={svgPaths.p2c708800} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  <path d={svgPaths.p4272980} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#fff", whiteSpace: "nowrap" }}>
                  Message Me
                </span>
              </a>
              <a
                href="tel:0505795099"
                className="cursor-pointer cta-btn-ghost flex items-center no-underline"
                style={{
                  gap: 8,
                  borderRadius: 999,
                  padding: "10px 20px",
                  border: "0.889px solid rgba(160,165,210,0.35)",
                }}
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 20.2742 20.2742">
                  <path d={svgPaths.p2be78800} stroke="#c0c4dd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: "20px", color: "#c0c4dd", whiteSpace: "nowrap" }}>
                  Call Me
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[1145.25px] flex flex-col">
        {/* ── Footer ─────────────────────────────────────── */}
        <footer className="h-[95.739px] w-full shrink-0 flex items-center px-[45.054px] py-[36.043px] justify-center">
          <div className="flex gap-[36.043px] items-center justify-center flex-1">
            <FooterItem icon={<PhoneIcon />} title="050-5795099" />
            <FooterItem icon={<WhatsAppIcon />} href={`https://web.whatsapp.com/send?phone=972505795099&text=${WA_MSG}`} />
            <FooterItem icon={<EmailIcon />} href="mailto:yotam.eliraz@gmail.com" />
            <FooterItem icon={<LinkedInIcon />} href="https://www.linkedin.com/in/yotam-eliraz-977b0450/" />
            <FooterItem icon={<BehanceIcon />} href="https://www.behance.net/yotame" />
          </div>
        </footer>
      </div>
    </div>
  );
}
