import { useState } from "react";
import imgAlma from "@/imports/Frame11/0ff53a7574fe5ddd7893ea066c3a9fa41eb680ff.png";
import imgPulse from "@/imports/Frame11/257c6ffc3188a1eaa8ed81ab7cbbf0f290627b4f.png";
import imgCurio from "@/imports/Frame11/9dce77c3753db7b26f478f524ee1a15c07c28a59.png";
import svgPaths from "@/imports/Frame11/svg-o0xaf2ie0h";

/* ── Icons ───────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgPaths.p2be78800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgPaths.p3ec1fd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const EmailIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgPaths.p2c708800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgPaths.p4272980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgPaths.p31aa100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgPaths.p271a7a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgPaths.p1833ee00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const BehanceIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 20.2742 20.2742">
    <g clipPath="url(#be-m)">
      <path d={svgPaths.p12b43500} fill="currentColor" />
    </g>
    <defs><clipPath id="be-m"><rect width="20.2742" height="20.2742" /></clipPath></defs>
  </svg>
);

/* ── Case Study Card ─────────────────────────────────────── */
function MobileCard({
  image, categoryLabel, categoryColor, categoryTextColor = "#fff",
  title, description, tags, onClick,
}: {
  image: string; categoryLabel: string; categoryColor: string;
  categoryTextColor?: string; title: string; description: string;
  tags: string[]; onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-[20px] overflow-hidden relative group cursor-pointer border-none p-0 bg-transparent"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
    >
      {/* Image */}
      <div className="w-full h-[200px] overflow-hidden bg-[#1a1a2e] relative">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-active:scale-105" />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full"
          style={{ background: categoryColor }}
        >
          <span className="font-['Inter',sans-serif] font-bold text-[10px] tracking-[0.8px]" style={{ color: categoryTextColor }}>
            {categoryLabel}
          </span>
        </div>
        {/* Title over image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <p className="font-['Inter',sans-serif] font-bold text-[18px] leading-[1.3] text-white">{title}</p>
          <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[1.4] text-white/80 mt-1">{description}</p>
        </div>
      </div>
      {/* Tags */}
      <div className="bg-white px-4 py-3 flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="font-['Inter',sans-serif] font-semibold text-[10px] tracking-[0.6px] text-[#0e1d2b]/50 bg-[#f5f1ec] rounded-full px-3 py-1">
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}

/* ── Contact Row ─────────────────────────────────────────── */
function ContactRow({ icon, href, title }: { icon: React.ReactNode; href?: string; title?: string }) {
  const content = (
    <div className="flex items-center justify-center p-3 rounded-full hover:bg-[#e8e4df] transition-colors">
      <span className="text-[#0e1d2b]">{icon}</span>
    </div>
  );
  return href
    ? <a href={href} title={title} target="_blank" rel="noopener" className="text-[#0e1d2b] no-underline">{content}</a>
    : <div title={title} className="cursor-default">{content}</div>;
}

/* ── Main Mobile Home ────────────────────────────────────── */
export default function MobileHome({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f1ec] min-h-screen w-full font-['Inter',sans-serif]">

      {/* ── Nav ──────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-6 pt-14 pb-4">
        <p className="font-bold text-[20px] text-[#0e1d2b]">Yotam Eliraz</p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => document.getElementById("contact-mobile")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#0e1d2b] text-white font-semibold text-[14px] rounded-full px-5 h-[44px] border-none cursor-pointer whitespace-nowrap transition-all duration-200 active:scale-95"
          >
            Let's Talk
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-transparent border-none cursor-pointer p-1 text-[#0e1d2b]"
            aria-label="Menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="mx-6 bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
          {[
            { label: "About me",      page: "about" },
            { label: "Alma",          page: "alma" },
            { label: "Pulse",         page: "pulse" },
            { label: "Curio",         page: "curio" },
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); setMenuOpen(false); }}
              className="w-full text-left px-5 py-4 font-medium text-[15px] text-[#0e1d2b] border-b border-[#f5f1ec] last:border-0 bg-transparent cursor-pointer hover:bg-[#f5f1ec] transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="px-6 pt-8 pb-10">
        <p className="font-bold text-[11px] tracking-[1.4px] text-[#4793d6] mb-3">PRODUCT DESIGNER</p>
        <h1 className="font-bold text-[36px] leading-[1.15] text-[#0e1d2b] mb-4">
          Product{" "}
          <span className="text-[#4793d6]">Designer</span>
          {" "}with an engineering background
        </h1>
        <p className="font-normal text-[15px] leading-[1.6] text-[#0e1d2b]/70 mb-8">
          Product Designer with 12 years of engineering experience, creating intuitive digital products through user centered design.
        </p>
        <button
          onClick={() => onNavigate("about")}
          className="bg-[#0e1d2b] text-white font-semibold text-[15px] rounded-[14px] px-7 h-[52px] border-none cursor-pointer transition-all duration-200 active:scale-95 active:brightness-90"
        >
          About me
        </button>
      </section>

      {/* ── Case Studies ─────────────────────────────────── */}
      <section className="px-6 pb-10">
        <p className="font-medium text-[13px] text-[#0e1d2b]/50 mb-4 tracking-[0.3px]">Selected Case Studies</p>
        <div className="flex flex-col gap-4">
          <MobileCard
            image={imgAlma}
            categoryLabel="MOBILE APP"
            categoryColor="#d2684a"
            title="Alma – Pregnancy App"
            description="AI powered pregnancy food safety assistant."
            tags={["AI", "HEALTH", "MOBILE"]}
            onClick={() => onNavigate("alma")}
          />
          <MobileCard
            image={imgPulse}
            categoryLabel="DASHBOARD"
            categoryColor="rgba(88,86,214,0.9)"
            title="Pulse – Gaming Analytics"
            description="A real time dashboard for game product managers."
            tags={["DATA", "DASHBOARD", "SAAS"]}
            onClick={() => onNavigate("pulse")}
          />
          <MobileCard
            image={imgCurio}
            categoryLabel="E-COMMERCE"
            categoryColor="#fec66e"
            categoryTextColor="#1f2937"
            title="Curio – Online Toys Store"
            description="An online marketplace for educational toys for kids."
            tags={["AI", "E-COMMERCE", "KIDS"]}
            onClick={() => onNavigate("curio")}
          />
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────── */}
      <section
        id="contact-mobile"
        className="px-6 py-14 flex flex-col items-center gap-8"
        style={{ borderTop: "1px solid #e8e4df" }}
      >
        {/* Headline */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-['Inter',sans-serif] font-bold text-[32px] leading-[1.15] text-[#0e1d2b]">
            Let's Talk
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[1.6] text-[#0e1d2b]/60">
            Looking for a Product Designer? I'd love to hear about your project, product or opportunity.
          </p>
        </div>

        {/* Primary buttons */}
        <div className="flex flex-col gap-3 w-full">
          <a
            href="mailto:yotam.eliraz@gmail.com"
            className="flex items-center justify-center gap-3 bg-[#0e1d2b] text-white no-underline font-['Inter',sans-serif] font-semibold text-[15px] rounded-[14px] h-[52px] w-full transition-all duration-[220ms] ease-out active:scale-[0.98]"
          >
            <EmailIcon />
            Message Me
          </a>
          <a
            href="tel:0505795099"
            className="flex items-center justify-center gap-3 bg-white text-[#0e1d2b] no-underline font-['Inter',sans-serif] font-semibold text-[15px] rounded-[14px] h-[52px] w-full border border-[#0e1d2b]/20 transition-all duration-[220ms] ease-out active:scale-[0.98]"
          >
            <PhoneIcon />
            Call Me
          </a>
        </div>

        {/* Secondary links */}
        <div className="flex gap-6 items-center flex-wrap justify-center">
          <a href="mailto:yotam.eliraz@gmail.com" className="font-['Inter',sans-serif] text-[13px] text-[#0e1d2b]/50 no-underline">
            Email
          </a>
          <a href="https://www.linkedin.com/in/yotam-eliraz-977b0450/" target="_blank" rel="noopener" className="font-['Inter',sans-serif] text-[13px] text-[#0e1d2b]/50 no-underline">
            LinkedIn
          </a>
          <a href="https://www.behance.net/yotame" target="_blank" rel="noopener" className="font-['Inter',sans-serif] text-[13px] text-[#0e1d2b]/50 no-underline">
            Behance
          </a>
        </div>
      </section>

      {/* ── Footer / icons ───────────────────────────────── */}
      <footer className="px-6 pb-12">
        <div className="border-t border-[#e8e4df] pt-4 flex justify-center gap-2">
          <ContactRow icon={<PhoneIcon />} href="tel:0505795099" title="050-5795099" />
          <ContactRow icon={<WhatsAppIcon />} href="https://wa.me/972505795099?text=Hi%20Yotam%2C%20I%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20chat." title="WhatsApp" />
          <ContactRow icon={<EmailIcon />} href="mailto:yotam.eliraz@gmail.com" title="yotam.eliraz@gmail.com" />
          <ContactRow icon={<LinkedInIcon />} href="https://www.linkedin.com/in/yotam-eliraz-977b0450/" title="LinkedIn" />
          <ContactRow icon={<BehanceIcon />} href="https://www.behance.net/yotame" title="Behance" />
        </div>
      </footer>
    </div>
  );
}
