import { useState, useEffect } from "react";
import MobileHome from "./MobileHome";
import NewHero from "./NewHero";
import svgPaths from "@/imports/Frame11/svg-o0xaf2ie0h";
import imgHero from "@/imports/Frame11/376b4ff69c76e4c7548a2d9016b80b772b65dbee.png";
import imgHeroDashboard from "@/imports/Frame11/hero_dashboard.png";
import imgHeroCurio from "@/imports/Frame11/hero_curio.png";
import aboutPhoto from "@/imports/PIC_5444.jpg";
import imgPulseCard from "@/imports/Frame13/b408d64d475512d56275485cd8a85bf540ac8e83.png";
import imgAlmaCard from "@/imports/Frame13/fde8b98f3f8528432f9f6c69d09f5bccf388e844.png";
import imgCurioCard from "@/imports/Frame13/c51554de7237f51893371d0ee285af660281af21.png";

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

/* ── Featured Works — Case Study Cards (Figma Make) ───────── */

function CaseStudyTag({ label }: { label: string }) {
  return (
    <div className="flex h-[29px] items-center justify-center px-[12px] relative rounded-[10px] shrink-0 border border-white">
      <p className="font-['Inter',sans-serif] font-bold leading-[36.13px] not-italic relative shrink-0 text-[16px] text-white tracking-[-1.0948px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function CaseStudyCardOverlay({ title, tags, top }: { title: string; tags: string[]; top: string }) {
  return (
    <div
      className="absolute flex flex-col gap-[8px] items-start justify-center left-[26px] w-[202.401px]"
      style={{ top }}
    >
      <p className="font-['Inter',sans-serif] font-extrabold leading-[36.13px] not-italic relative shrink-0 text-[24px] text-white tracking-[-1.0948px] w-full">
        {title}
      </p>
      <div className="flex gap-[8px] items-center relative shrink-0 w-full">
        {tags.map((tag) => (
          <CaseStudyTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

function CaseStudyGridCard({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="h-[316.753px] overflow-clip relative rounded-[24.456px] shrink-0 w-[399.109px] cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]"
      style={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)", backgroundColor: "#111214" }}
    >
      {children}
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

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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

      {/* ── New Hero (desktop only, full width, includes its own nav) ─── */}
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

      {/* ── Featured Works — Case Studies grid (Figma Make) ────── */}
      <section
        id="case-studies"
        className="relative w-full bg-white flex flex-col gap-[47px] items-start justify-center"
        style={{ padding: "48px 52px", marginTop: "96px" }}
      >
        {/* Title */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <p
            className="flex-[1_0_0] font-['Inter',sans-serif] font-medium leading-[59.093px] min-w-px not-italic relative text-[#161616] text-[44px] tracking-[-1.7907px]"
            dir="auto"
          >
            Selected Case Studies
          </p>
        </div>

        {/* Grid */}
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div
            className="inline-grid relative shrink-0"
            style={{
              gridTemplateColumns: "repeat(2, fit-content(100%))",
              gridTemplateRows: "repeat(2, fit-content(100%))",
              gap: "9.782423973083496px",
            }}
          >
            {/* Pulse */}
            <CaseStudyGridCard onClick={() => onNavigate("pulse")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24.456px] size-full"
                src={imgPulseCard}
              />
              <CaseStudyCardOverlay title="Pulse" tags={["Dashboard", "Analytics"]} top="225px" />
            </CaseStudyGridCard>

            {/* Alma */}
            <CaseStudyGridCard onClick={() => onNavigate("alma")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24.456px] size-full"
                src={imgAlmaCard}
              />
              <CaseStudyCardOverlay title="Alma" tags={["Mobile App", "Health"]} top="225px" />
            </CaseStudyGridCard>

            {/* Curio */}
            <CaseStudyGridCard onClick={() => onNavigate("curio")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24.456px] size-full"
                src={imgCurioCard}
              />
              <CaseStudyCardOverlay title="Curio" tags={["E-Commerce", "Kids"]} top="225.46px" />
            </CaseStudyGridCard>

            {/* Coming soon */}
            <CaseStudyGridCard>
              <div className="bg-[#161616] absolute inset-0 rounded-[24.456px]" />
              <div className="absolute flex flex-col gap-[9.782px] items-start left-[70.31px] top-[110.62px] w-[288.581px] text-white not-italic">
                <p
                  className="font-['Inter',sans-serif] font-extrabold leading-[45.302px] min-w-full relative shrink-0 text-[34.238px] tracking-[-1.3728px] w-[min-content]"
                  dir="auto"
                >
                  Coming soon...
                </p>
                <p
                  className="font-['Inter',sans-serif] font-medium leading-[19.565px] relative shrink-0 text-[12.228px] w-[280.022px]"
                  dir="auto"
                >
                  {"I'm currently working on my next projects."}
                  <br aria-hidden />
                  Stay tuned.
                </p>
              </div>
            </CaseStudyGridCard>
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
          style={{ maxWidth: 1320, padding: "80px" }}
        >
          {/* ── About Me row ── */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full" style={{ paddingBottom: 88 }}>
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
            <div className="flex flex-col items-start" style={{ width: 620, gap: 24 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                  letterSpacing: "2px",
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
                  fontSize: 56,
                  lineHeight: "1.1",
                  color: "#ffffff",
                  margin: 0,
                }}
              >
                Hi, I'm Yotam
              </h2>
              <div className="flex flex-col" style={{ gap: 20, width: "100%" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.7, color: "#b0b5cc", margin: 0 }}>
                  I design digital experiences that are intuitive, meaningful, and user-centered. With a background in computer science and over a decade in software development, I bring a unique blend of technical understanding and creative thinking to every project.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.7, color: "#b0b5cc", margin: 0 }}>
                  I care deeply about solving real problems and creating products that make people's lives easier and better.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.7, color: "#b0b5cc", margin: 0 }}>
                  When I'm not designing, you'll find me traveling, exploring new places, and getting inspired by the world around me.
                </p>
              </div>
            </div>
          </div>

          {/* ── Divider ── */}
          <div className="w-full" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingBottom: 48 }} />

          {/* ── Let's Talk row ── */}
          <div id="contact" className="flex flex-col lg:flex-row items-center w-full" style={{ gap: 32 }}>
            {/* Eyebrow + heading */}
            <div className="flex flex-col flex-shrink-0" style={{ width: 260, gap: 8 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: "18px",
                  letterSpacing: "2px",
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
                  fontSize: 48,
                  lineHeight: "1.1",
                  color: "#ffffff",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                Let's Talk
              </h2>
            </div>

            {/* Subtitle + social links */}
            <div className="flex-1 flex flex-col items-start" style={{ gap: 20, padding: "0 40px", minWidth: 0 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: 1.6, color: "#b0b5cc", margin: 0 }}>
                Looking for a Product Designer? I'd love to hear about your project, product or opportunity.
              </p>
              <div className="flex flex-wrap items-center" style={{ gap: 32 }}>
                <a
                  href="mailto:yotam.eliraz@gmail.com"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 10, textDecoration: "none" }}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
                    <path d={svgPaths.p2c708800} stroke="#8b90b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p4272980} stroke="#8b90b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "20px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    yotam.eliraz@gmail.com
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yotam-eliraz-977b0450/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 10, textDecoration: "none" }}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
                    <path d={svgPaths.p31aa100} stroke="#8b90b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p271a7a80} stroke="#8b90b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                    <path d={svgPaths.p1833ee00} stroke="#8b90b8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "20px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://www.behance.net/yotame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-70 transition-opacity"
                  style={{ gap: 10, textDecoration: "none" }}
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
                    <g clipPath="url(#behance-clip-figma)">
                      <path d={svgPaths.p12b43500} fill="#8b90b8" />
                    </g>
                    <defs>
                      <clipPath id="behance-clip-figma">
                        <rect fill="white" height="20.2742" width="20.2742" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "20px", color: "#b0b5cc", whiteSpace: "nowrap" }}>
                    Behance
                  </span>
                </a>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-shrink-0 items-center" style={{ gap: 16 }}>
              <a
                href="mailto:yotam.eliraz@gmail.com"
                className="cursor-pointer cta-btn-primary flex items-center no-underline"
                style={{
                  gap: 10,
                  borderRadius: 999,
                  padding: "15px 28px",
                  backgroundImage: "linear-gradient(164.973deg, rgb(79,99,231) 0%, rgb(107,70,230) 100%)",
                }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
                  <path d={svgPaths.p2c708800} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                  <path d={svgPaths.p4272980} stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: "24px", color: "#fff", whiteSpace: "nowrap" }}>
                  Message Me
                </span>
              </a>
              <a
                href="tel:0505795099"
                className="cursor-pointer cta-btn-ghost flex items-center no-underline"
                style={{
                  gap: 10,
                  borderRadius: 999,
                  padding: "15px 28px",
                  border: "1.5px solid rgba(160,165,210,0.35)",
                }}
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
                  <path d={svgPaths.p2be78800} stroke="#c0c4dd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: "24px", color: "#c0c4dd", whiteSpace: "nowrap" }}>
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
