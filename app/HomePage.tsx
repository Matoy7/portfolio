import { useState, useEffect } from "react";
import MobileHome from "./MobileHome";
import svgPaths from "@/imports/Frame11/svg-o0xaf2ie0h";
import imgHero from "@/imports/Frame11/376b4ff69c76e4c7548a2d9016b80b772b65dbee.png";
import imgHeroDashboard from "@/imports/Frame11/hero_dashboard.png";
import imgHeroCurio from "@/imports/Frame11/hero_curio.png";
import imgAlma from "@/imports/Frame11/0ff53a7574fe5ddd7893ea066c3a9fa41eb680ff.png";
import imgPulse from "@/imports/Frame11/257c6ffc3188a1eaa8ed81ab7cbbf0f290627b4f.png";
import imgCurio from "@/imports/Frame11/9dce77c3753db7b26f478f524ee1a15c07c28a59.png";

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
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        "group relative rounded-[16.821px] w-full h-[200px] cursor-pointer overflow-hidden",
        "transition-all duration-[250ms] ease-out",
        "hover:-translate-y-1 hover:scale-[1.01] hover:brightness-105",
        "hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]",
        "hover:ring-1 hover:ring-white/20",
        "active:scale-[0.99]",
        "motion-reduce:transition-none motion-reduce:hover:transform-none",
      ].join(" ")}
    >
      {/* Background image */}
      <div className="absolute inset-0 rounded-[16.821px] overflow-hidden">
        <img
          alt=""
          src={image}
          className={[
            "absolute inset-0 w-full h-full object-cover rounded-[16.821px]",
            "transition-transform duration-[250ms] ease-out",
            "group-hover:scale-[1.03]",
            "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          ].join(" ")}
        />
        {/* Gradient overlay */}
        {hasGradient && (
          <div
            className={[
              "absolute inset-0 rounded-[16.821px]",
              "bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(102,102,102,0)]",
              "transition-opacity duration-[250ms] ease-out",
              "opacity-100 group-hover:opacity-[0.78]",
              "motion-reduce:transition-none",
            ].join(" ")}
          />
        )}
        {/* Flat overlay for cards without gradient (Pulse) */}
        {!hasGradient && (
          <div
            className={[
              "absolute inset-0 rounded-[16.821px] bg-black/45",
              "transition-opacity duration-[250ms] ease-out",
              "group-hover:bg-black/35",
              "motion-reduce:transition-none",
            ].join(" ")}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-[28.034px]">
        {/* Top: category + title + description */}
        <div className="flex flex-col w-full">
          {/* Category badge */}
          <div className="h-[26.856px] relative w-full mb-0">
            <div
              className="absolute left-0 top-[1.27px] px-[8.41px] py-[2.803px] rounded-[5.607px] flex items-center justify-center"
              style={{ backgroundColor: categoryColor }}
            >
              <p
                className="font-['Inter',sans-serif] font-bold text-[9.812px] leading-[11.564px] tracking-[0.3504px] whitespace-nowrap"
                style={{ color: categoryTextColor }}
              >
                {categoryLabel}
              </p>
            </div>
          </div>

          {/* Title */}
          <p
            className={[
              "font-['Inter',sans-serif] font-bold text-[22.428px] leading-[33.641px] text-white whitespace-nowrap",
              "transition-transform duration-[250ms] ease-out",
              "group-hover:translate-x-0.5",
              "motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
            ].join(" ")}
          >
            {title}
          </p>

          {/* Description */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[16.821px] text-white whitespace-nowrap pt-[5.607px] pb-[11.214px]">
            {description}
          </p>
        </div>

        {/* Bottom: Tags */}
        <div
          className={[
            "flex gap-[8px] items-start h-[22.43px]",
            "opacity-85 transition-opacity duration-[250ms] ease-out",
            "group-hover:opacity-100",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          {tags.map((tag) => (
            <Tag key={tag} label={tag} dim={dimTags} />
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
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) return <MobileHome onNavigate={onNavigate} />;

  return (
    <div className="bg-[#f5f1ec] min-h-screen w-full flex flex-col items-center">
      <div className="w-[1145.25px] flex flex-col">

        {/* ── Navigation ─────────────────────────────────── */}
        <nav className="h-[108.129px] w-full shrink-0 flex items-center px-[45.054px] py-[27.032px] justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => onNavigate("home")}
            className="shrink-0 bg-transparent border-none p-0 cursor-pointer transition-opacity duration-[200ms] hover:opacity-70"
          >
            <p className="font-['Inter',sans-serif] font-bold text-[27.032px] leading-[40.548px] text-black whitespace-nowrap">
              Yotam Eliraz
            </p>
          </button>

          {/* Nav actions */}
          <div className="flex gap-[27.032px] items-center shrink-0">
            {/* Case Studies link */}
            <button
              className={[
                "cursor-pointer bg-transparent border-none p-0",
                "transition-all duration-[240ms] ease-out",
                "opacity-100 hover:opacity-80 hover:translate-y-px hover:text-[#0a121c]",
                "motion-reduce:transition-none motion-reduce:hover:transform-none",
              ].join(" ")}
            >
              <p className="font-['Inter',sans-serif] font-medium text-[20.274px] leading-[27.032px] text-black whitespace-nowrap">
                Case Studies
              </p>
            </button>

            {/* Let's Talk button */}
            <button
              className={[
                "bg-[#1a1a2e] rounded-[27486380px] px-[27.032px] py-[13.516px] cursor-pointer border-none",
                "transition-all duration-[220ms] ease-out",
                "hover:brightness-[1.08] hover:scale-[1.02]",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
                "active:scale-[0.98]",
                "motion-reduce:transition-none motion-reduce:hover:transform-none",
              ].join(" ")}
            >
              <p className="font-['Inter',sans-serif] font-semibold text-[20.274px] leading-[27.032px] text-white whitespace-nowrap">
                {"Let's Talk"}
              </p>
            </button>
          </div>
        </nav>

        {/* ── Hero Section ───────────────────────────────── */}
        <section className="h-[551.908px] w-full shrink-0 flex flex-col items-start pt-[18.021px] px-[45.054px]">
          <div className="flex items-center justify-between w-full h-full">
            {/* Left: text content */}
            <div className="flex flex-col h-[508.634px] items-start justify-center w-[506.24px] shrink-0">
              <div className="flex flex-col gap-[27.032px] items-start">
                {/* Role + heading + paragraph */}
                <div className="flex flex-col gap-[27.032px] items-start">
                  <div className="flex flex-col gap-[18.021px] items-start">
                    {/* PRODUCT DESIGNER label */}
                    <p className="font-['Inter',sans-serif] font-bold text-[20.274px] leading-[20.274px] text-[#4793d6] tracking-[1.1263px] whitespace-nowrap">
                      PRODUCT DESIGNER
                    </p>

                    <div className="flex flex-col gap-[18.021px] items-start">
                      {/* Heading */}
                      <div className="w-[551.908px]">
                        <p
                          className="font-['Inter',sans-serif] font-bold text-[54.064px] leading-[1.15] text-[#0e1d2b] w-[530.508px]"
                          dir="auto"
                        >
                          <span>{"Product "}</span>
                          <span className="text-[#4793d6]">Designer</span>
                          <span>{" with an engineering background"}</span>
                        </p>
                      </div>

                      {/* Paragraph */}
                      <div className="max-w-[540.644px] w-[506.24px]">
                        <p
                          className="font-['Inter',sans-serif] font-normal text-[20.274px] text-[#0e1d2b] h-[75px] w-[506.854px]"
                          dir="auto"
                        >
                          Product Designer with 12 years of engineering
                          experience, creating intuitive digital products through
                          user centered design.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Me button */}
                <button
                  onClick={() => onNavigate("about")}
                  className={[
                    "bg-[#0e1d2b] h-[63.075px] flex items-center px-[36.043px] py-[18.021px] rounded-[16.895px] shrink-0 cursor-pointer border-none",
                    "transition-all duration-[240ms] ease-out",
                    "hover:brightness-[1.10] hover:scale-[1.02]",
                    "hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
                    "active:scale-[0.98]",
                    "motion-reduce:transition-none motion-reduce:hover:transform-none",
                  ].join(" ")}
                  dir="auto"
                >
                  <p className="font-['Inter',sans-serif] font-semibold text-[18.021px] leading-[27.032px] text-white whitespace-nowrap">
                    About me
                  </p>
                </button>
              </div>
            </div>

            {/* Right: hero slideshow */}
            <div className="h-[399.199px] relative rounded-[21.214px] shrink-0 w-[498.03px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21.214px]">
                <HeroSlideshow />
              </div>
            </div>
          </div>
        </section>

        {/* ── Case Studies Section ────────────────────────── */}
        <section className="relative w-[1014px] flex flex-col items-center justify-center pb-[22.428px] pt-[5.607px] px-[28.034px] self-center">
          {/* Section heading */}
          <div className="w-full flex items-center mb-0">
            <p className="font-['Inter',sans-serif] font-medium text-[18px] leading-[33.641px] text-black whitespace-nowrap">
              Selected Case Studies
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-[29.868px] w-full py-[16.821px]">
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

            {/* Card 2: Pulse */}
            <CaseStudyCard
              image={imgPulse}
              categoryLabel="DASHBOARD"
              categoryColor="rgba(88,86,214,0.9)"
              title="Pulse – Gaming Analytics"
              description="A real time dashboard for game product managers."
              tags={["DATA", "DASHBOARD", "SAAS"]}
              dimTags
              hasGradient={false}
              onClick={() => onNavigate("pulse")}
            />

            {/* Card 3: Curio */}
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
        </section>

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
