import CaseStudyDesktop from "@/imports/CaseStudyDesktop-1/index";

export default function AlmaPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full bg-white overflow-x-auto flex justify-center">
      {/* Floating back-to-home control */}
      <button
        onClick={() => onNavigate("home")}
        className={[
          "fixed top-[27px] left-[45px] z-50",
          "flex items-center gap-[8px]",
          "bg-white/90 backdrop-blur-sm border border-[#e8e4df]",
          "rounded-full px-[18px] py-[10px] cursor-pointer",
          "shadow-[0_2px_10px_rgba(0,0,0,0.06)]",
          "transition-all duration-[200ms] ease-out",
          "hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-x-0.5",
        ].join(" ")}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12.5L5.5 8L10 3.5" stroke="#0e1d2b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-['Inter',sans-serif] font-medium text-[14px] text-[#0e1d2b] whitespace-nowrap">
          Back home
        </span>
      </button>

      <div className="w-[1920px] shrink-0">
        <CaseStudyDesktop />
      </div>
    </div>
  );
}
