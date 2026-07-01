import imgPhoto from "@/imports/Desktop/dec8dd9c600d936d8dc18f074452f6e0171a0b9b.png";
import svgPaths from "@/imports/Desktop/svg-z1fzy8b8m6";

/* ── Icons ───────────────────────────────────────────────── */
const EducationIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 31.0176 31.0176">
    <path d={svgPaths.p345eae00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.07" />
    <path d={svgPaths.p1ae36e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.07" />
  </svg>
);
const WorkIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24.8141 24.8141">
    <path d={svgPaths.p2bde4380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.07" />
    <path d={svgPaths.p1d032e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.07" />
  </svg>
);

/* ── CV Row ──────────────────────────────────────────────── */
function CVRow({ years, title, institution }: { years: string; title: string; institution: string }) {
  return (
    <div className="flex gap-4 items-start">
      {/* Timeline dot */}
      <div className="mt-[6px] shrink-0 flex flex-col items-center">
        <div className="w-[8px] h-[8px] rounded-full bg-[#4793d6]" />
      </div>
      <div>
        <p className="font-['Inter',sans-serif] font-normal text-[12px] text-[#0e1d2b]/50 mb-[2px]">{years}</p>
        <p className="font-['Inter',sans-serif] font-bold text-[15px] text-[#0e1d2b] leading-[1.3]">{title}</p>
        <p className="font-['Inter',sans-serif] font-normal text-[13px] text-[#0e1d2b]/60 mt-[2px]">{institution}</p>
      </div>
    </div>
  );
}

/* ── Section Block ───────────────────────────────────────── */
function SectionBlock({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="bg-[#f5f1ec] border border-[#e8e4df] rounded-[10px] w-[40px] h-[40px] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <p className="font-['Inter',sans-serif] font-bold text-[18px] text-[#0e1d2b]">{title}</p>
      </div>
      <div className="flex flex-col gap-5 pl-4 border-l-2 border-[#e8e4df]">
        {children}
      </div>
    </div>
  );
}

/* ── Footer contact row ──────────────────────────────────── */
import svgHome from "@/imports/Frame11/svg-o0xaf2ie0h";

const PhoneIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgHome.p2be78800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgHome.p3ec1fd00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgHome.p2c708800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgHome.p4272980} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20.2742 20.2742">
    <path d={svgHome.p31aa100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgHome.p271a7a80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
    <path d={svgHome.p1833ee00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.69" />
  </svg>
);
const BehanceIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20.2742 20.2742">
    <g clipPath="url(#be-a)">
      <path d={svgHome.p12b43500} fill="currentColor" />
    </g>
    <defs><clipPath id="be-a"><rect width="20.2742" height="20.2742" /></clipPath></defs>
  </svg>
);

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

/* ── Main Mobile About ───────────────────────────────────── */
export default function MobileAbout({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#f5f1ec] min-h-screen w-full font-['Inter',sans-serif]">

      {/* ── Nav ──────────────────────────────────────────── */}
      <nav className="flex flex-col px-6 pt-14 pb-4 gap-3">
        {/* Row 1: Logo + Let's Talk */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="font-bold text-[20px] text-[#0e1d2b] bg-transparent border-none cursor-pointer p-0"
          >
            Yotam Eliraz
          </button>
          <button
            onClick={() => {
              onNavigate("home");
              setTimeout(() => document.getElementById("contact-mobile")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="bg-[#0e1d2b] text-white font-semibold text-[14px] rounded-full px-5 h-[44px] border-none cursor-pointer transition-all duration-200 active:scale-95"
          >
            Let's Talk
          </button>
        </div>

        {/* Row 2: Back home button */}
        <div>
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 bg-white border border-[#e8e4df] rounded-full px-4 py-2 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-[200ms] active:scale-95"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#0e1d2b] whitespace-nowrap">← Back home</span>
          </button>
        </div>
      </nav>

      {/* ── Photo + Intro ─────────────────────────────────── */}
      <section className="px-6 pb-10">
        <p className="font-bold text-[11px] tracking-[1.4px] text-[#4793d6] mb-5">ABOUT ME</p>

        {/* Polaroid photo */}
        <div className="flex justify-center mb-8">
          <div
            className="-rotate-2"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
              width: "260px",
            }}
          >
            <img
              src={imgPhoto}
              alt="Yotam Eliraz"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>

        {/* Bio */}
        <h2 className="font-bold text-[32px] leading-[1.2] text-[#0e1d2b] mb-4">Hi, I'm Yotam</h2>
        <div className="flex flex-col gap-4">
          <p className="font-normal text-[15px] leading-[1.7] text-[#0e1d2b]/70">
            I design digital experiences that are intuitive, meaningful, and user-centered. With a background in computer science and over a decade in software development, I bring a unique blend of technical understanding and creative thinking to every project.
          </p>
          <p className="font-normal text-[15px] leading-[1.7] text-[#0e1d2b]/70">
            {"I care deeply about solving real problems and creating products that make people's lives easier and better."}
          </p>
          <p className="font-normal text-[15px] leading-[1.7] text-[#0e1d2b]/70">
            {"When I'm not designing, you'll find me travelling, exploring new places, and getting inspired by the world around me."}
          </p>
        </div>
      </section>

      {/* ── Education + Work Experience ───────────────────── */}
      <section className="px-6 pb-10 flex flex-col gap-8">

        <SectionBlock icon={<EducationIcon />} title="Education">
          <CVRow years="2025 – 2026" title="Professional Certificate, UI/UX Design" institution="Graphitech College" />
          <CVRow years="2021 – 2023" title="B.Sc. in Computer Science" institution="Tel Aviv University, Israel" />
        </SectionBlock>

        <SectionBlock icon={<WorkIcon />} title="Work Experience">
          <CVRow years="2024 – 2025" title="Senior Software Developer" institution="XM Cyber" />
          <CVRow years="2021 – 2024" title="Senior Software Developer" institution="Solitics" />
          <CVRow years="2019 – 2021" title="Software Developer" institution="Varonis" />
          <CVRow years="2018 – 2019" title="Software Developer" institution="Imperva" />
          <CVRow years="2016 – 2018" title="Software Developer" institution="HP" />
        </SectionBlock>

      </section>

      {/* ── Footer / Contact ──────────────────────────────── */}
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
