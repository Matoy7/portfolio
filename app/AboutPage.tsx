import svgPaths from "@/imports/Desktop/svg-z1fzy8b8m6";
import imgPhoto from "@/imports/Desktop/dec8dd9c600d936d8dc18f074452f6e0171a0b9b.png";

/* ─── SVG Icons ──────────────────────────────────────────── */

function EducationIcon() {
  return (
    <svg className="size-[31px]" fill="none" viewBox="0 0 31.0176 31.0176">
      <path d={svgPaths.p345eae00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
      <path d={svgPaths.p1ae36e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg className="size-[25px]" fill="none" viewBox="0 0 24.8141 24.8141">
      <path d={svgPaths.p2bde4380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
      <path d={svgPaths.p1d032e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.06784" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-[22px]" fill="none" viewBox="0 0 22.3327 22.3327">
      <path d={svgPaths.p3b5ee800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="size-[22px]" fill="none" viewBox="0 0 22.3327 22.3327">
      <path d={svgPaths.p1f0cae00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="size-[22px]" fill="none" viewBox="0 0 22.3327 22.3327">
      <path d={svgPaths.p14e70180} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
      <path d={svgPaths.p2854ba00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-[22px]" fill="none" viewBox="0 0 22.3327 22.3327">
      <path d={svgPaths.p2d2cf100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
      <path d={svgPaths.p185ce00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
      <path d={svgPaths.p199cd3c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.86106" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg className="size-[22px]" fill="none" viewBox="0 0 22.3327 22.3327">
      <g clipPath="url(#behance-clip-desktop)">
        <path d={svgPaths.p12387680} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="behance-clip-desktop">
          <rect fill="white" height="22.3327" width="22.3327" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ─── Footer contact item ────────────────────────────────── */

function FooterItem({
  icon,
  label,
  isEmail,
  isLinkedIn,
  isBehance,
}: {
  icon: React.ReactNode;
  label: string;
  isEmail?: boolean;
  isLinkedIn?: boolean;
  isBehance?: boolean;
}) {
  return (
    <div
      className={[
        "group relative flex gap-[9.926px] items-center cursor-pointer shrink-0",
        "transition-transform duration-[220ms] ease-out",
        "hover:-translate-y-0.5",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      ].join(" ")}
    >
      <div
        className={[
          "shrink-0 text-black",
          "transition-all duration-[220ms] ease-out",
          isLinkedIn
            ? "group-hover:scale-110 group-hover:rotate-[8deg] group-hover:text-[#4793d6]"
            : isBehance
            ? "group-hover:scale-110 group-hover:text-[#4793d6] opacity-85"
            : "group-hover:scale-110 group-hover:text-[#4793d6]",
          "motion-reduce:transition-none motion-reduce:group-hover:transform-none",
        ].join(" ")}
      >
        {icon}
      </div>

      <div className="relative flex flex-col items-start">
        <p
          className={[
            "font-['Inter',sans-serif] font-normal text-[17.37px] leading-[26.055px] whitespace-nowrap",
            "transition-colors duration-[220ms] ease-out",
            "text-black group-hover:text-[#4793d6]",
            "motion-reduce:transition-none",
          ].join(" ")}
        >
          {label}
        </p>
        {isEmail && (
          <span
            className={[
              "absolute bottom-0 left-0 h-[1px] w-full bg-[#4793d6] origin-left",
              "scale-x-0 group-hover:scale-x-100",
              "transition-transform duration-[220ms] ease-out",
              "motion-reduce:transition-none",
            ].join(" ")}
          />
        )}
      </div>
    </div>
  );
}

/* ─── CV row ─────────────────────────────────────────────── */

function CVRow({ years, title, institution }: { years: string; title: string; institution: string }) {
  return (
    <div className="relative flex gap-[143.922px] items-start w-full">
      <div aria-hidden className="absolute border-[#e8e4df] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter',sans-serif] font-normal text-[19.851px] leading-[24.194px] text-black whitespace-nowrap shrink-0 w-[120px]">
        {years}
      </p>
      <div className="flex flex-col gap-[4.963px] items-start">
        <p className="font-['Inter',sans-serif] font-bold text-[22.333px] leading-[27.916px] text-black whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Inter',sans-serif] font-medium text-[19.851px] leading-[27.916px] text-black whitespace-nowrap">
          {institution}
        </p>
      </div>
    </div>
  );
}

/* ─── Section block (Education / Work Experience) ─────────── */

function SectionBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Header row */}
      <div className="flex gap-[19.851px] items-center w-full mb-0">
        <div className="bg-[#f5f1ec] border border-[#e8e4df] rounded-[12.407px] size-[49.628px] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <p className="font-['Inter',sans-serif] font-bold text-[24.814px] leading-[33.499px] text-black whitespace-nowrap">
          {title}
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-[29.777px] items-start pl-[69.479px] pt-[39.703px] w-full">
        {children}
      </div>
    </div>
  );
}

/* ─── Main App ───────────────────────────────────────────── */

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#f5f1ec] min-h-screen w-full flex flex-col items-center">
      <div className="w-full max-w-[1294px] flex flex-col">

        {/* ── Navigation ───────────────────────────────────── */}
        <nav className="h-[108.129px] w-full shrink-0 flex items-center px-[45.054px] py-[27.032px] justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="bg-transparent border-none p-0 cursor-pointer transition-opacity duration-[200ms] hover:opacity-70"
          >
            <p className="font-['Inter',sans-serif] font-bold text-[27.032px] leading-[40.548px] text-black whitespace-nowrap">
              Yotam Eliraz
            </p>
          </button>

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

        {/* ── About Me hero ─────────────────────────────────── */}
        <section className="relative w-full px-[49.628px] py-[79.405px]">
          <div className="relative h-[479.349px] w-full">
            {/* Photo – slightly rotated polaroid feel */}
            <div className="absolute left-0 top-0 h-[382.528px] w-[408.408px] flex items-center justify-center">
              <div className="-rotate-2">
                <div className="h-[368.941px] w-[395.773px] relative">
                  <img
                    alt="Yotam Eliraz"
                    src={imgPhoto}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="absolute bottom-[-0.14px] left-[451.4px] top-[0.49px] w-[604px] flex flex-col items-start">
              <p className="font-['Inter',sans-serif] font-bold text-[19.851px] leading-[22.333px] text-black tracking-[1.2407px] whitespace-nowrap">
                ABOUT ME
              </p>

              <div className="h-[109.182px] w-[743.07px] pt-[19.851px]">
                <p className="font-['Inter',sans-serif] font-bold text-[59.554px] leading-[89.331px] text-black whitespace-nowrap">
                  {"Hi, I'm Yotam"}
                </p>
              </div>

              <div className="w-[727px] pt-[29.777px]">
                <p className="font-['Inter',sans-serif] font-normal text-[19.851px] leading-[33.747px] text-black w-[610px] whitespace-pre-wrap">
                  I design digital experiences that are intuitive, meaningful, and user-centered. With a background in computer science and over a decade in software development, I bring a unique blend of technical understanding and creative thinking to every project.
                  <br /><br />
                  {"I care deeply about solving real problems and creating products that make people's lives easier and better."}
                  <br /><br />
                  {"When I'm not designing, you'll find me traveling, exploring new places, and getting inspired by the world around me."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Education + Work Experience ───────────────────── */}
        <section className="w-full px-[49.628px] pb-[49.628px] flex flex-col gap-[29.777px]">

          {/* Education */}
          <SectionBlock icon={<EducationIcon />} title="Education">
            <CVRow years="2025 - 2026" title="Professional Certificate, UI/UX Design" institution="Graphitech College" />
            <CVRow years="2021 – 2023" title="B.Sc. in Computer Science" institution="Tel Aviv University, Israel" />
          </SectionBlock>

          {/* Work Experience */}
          <SectionBlock icon={<WorkIcon />} title="Work Experience">
            <CVRow years="2024 – 2025" title="Senior Software Developer" institution="XM Cyber" />
            <CVRow years="2021 – 2024" title="Senior Software Developer" institution="Solitics" />
            <CVRow years="2019 – 2021" title="Software Developer" institution="Varonis" />
            <CVRow years="2018 – 2019" title="Software Developer" institution="Imperva" />
            <CVRow years="2016 – 2018" title="Software Developer" institution="HP" />
          </SectionBlock>
        </section>

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className="h-[105.46px] w-full shrink-0 bg-[#f5f1ec] flex items-center px-[49.628px] py-[39.703px] justify-center">
          <div className="flex gap-[39.703px] items-center justify-center flex-1">
            <FooterItem icon={<PhoneIcon />} label="050-5795099" />
            <FooterItem icon={<WhatsAppIcon />} label="050-5795099" />
            <FooterItem icon={<EmailIcon />} label="yotam.eliraz@gmail.com" isEmail />
            <FooterItem icon={<LinkedInIcon />} label="linkedin.com/in/yotameliraz" isLinkedIn />
            <FooterItem icon={<BehanceIcon />} label="behance" isBehance />
          </div>
        </footer>

      </div>
    </div>
  );
}
