import { useState, useEffect, useRef, useLayoutEffect } from "react";
import MobileHome from "./MobileHome";
import NewHero from "./NewHero";
import imgHero from "@/imports/Frame11/376b4ff69c76e4c7548a2d9016b80b772b65dbee.png";
import imgHeroDashboard from "@/imports/Frame11/hero_dashboard.png";
import imgHeroCurio from "@/imports/Frame11/hero_curio.png";
import imgPulseCard from "@/imports/Frame13/b408d64d475512d56275485cd8a85bf540ac8e83.png";
import imgAlmaCard from "@/imports/Frame13/fde8b98f3f8528432f9f6c69d09f5bccf388e844.png";
import imgCurioCard from "@/imports/Frame13/c51554de7237f51893371d0ee285af660281af21.png";

/* ── At a Glance icon paths ────────────────────────────────── */
const glanceSvgPaths = {
  award1: "M35.3263 29.4529L38.7843 48.9135C38.823 49.1426 38.7908 49.3781 38.6921 49.5885C38.5934 49.7989 38.4328 49.9741 38.2317 50.0908C38.0307 50.2074 37.7989 50.2599 37.5672 50.2412C37.3356 50.2225 37.1152 50.1336 36.9354 49.9862L28.7641 43.8532C28.3696 43.5585 27.8904 43.3992 27.398 43.3992C26.9056 43.3992 26.4264 43.5585 26.0319 43.8532L17.8469 49.984C17.6673 50.131 17.4471 50.2199 17.2158 50.2386C16.9844 50.2573 16.7528 50.205 16.5519 50.0887C16.3511 49.9723 16.1904 49.7975 16.0915 49.5876C15.9925 49.3776 15.9599 49.1424 15.9981 48.9135L19.4538 29.4529",
  award2: "M27.3899 31.9872C34.9535 31.9872 41.0849 25.8557 41.0849 18.2922C41.0849 10.7286 34.9535 4.59717 27.3899 4.59717C19.8264 4.59717 13.6949 10.7286 13.6949 18.2922C13.6949 25.8557 19.8264 31.9872 27.3899 31.9872Z",
  book1: "M27.3921 15.7441V47.7019",
  book2: "M6.84788 40.8539C6.24247 40.8539 5.66186 40.6134 5.23377 40.1854C4.80568 39.7573 4.56519 39.1767 4.56519 38.5712V8.89622C4.56519 8.29081 4.80568 7.7102 5.23377 7.28211C5.66186 6.85402 6.24247 6.61353 6.84788 6.61353H18.2614C20.683 6.61353 23.0054 7.57551 24.7178 9.28787C26.4301 11.0002 27.3921 13.3227 27.3921 15.7443C27.3921 13.3227 28.3541 11.0002 30.0665 9.28787C31.7788 7.57551 34.1013 6.61353 36.5229 6.61353H47.9364C48.5418 6.61353 49.1224 6.85402 49.5505 7.28211C49.9786 7.7102 50.2191 8.29081 50.2191 8.89622V38.5712C50.2191 39.1767 49.9786 39.7573 49.5505 40.1854C49.1224 40.6134 48.5418 40.8539 47.9364 40.8539H34.2402C32.424 40.8539 30.6821 41.5754 29.3979 42.8597C28.1136 44.144 27.3921 45.8858 27.3921 47.702C27.3921 45.8858 26.6706 44.144 25.3864 42.8597C24.1021 41.5754 22.3603 40.8539 20.544 40.8539H6.84788Z",
  folder: "M13.085 29.2631L16.2128 23.216C16.5529 22.5407 17.0701 21.9705 17.7092 21.5665C18.3483 21.1624 19.0852 20.9397 19.8411 20.9222H42.2781M42.2781 20.9222C42.9152 20.9211 43.5441 21.066 44.1165 21.3457C44.6889 21.6254 45.1896 22.0326 45.5802 22.5359C45.9708 23.0392 46.2409 23.6254 46.3697 24.2493C46.4985 24.8732 46.4827 25.5184 46.3234 26.1353L43.1122 38.6466C42.8799 39.5465 42.3536 40.343 41.6169 40.9097C40.8802 41.4763 39.9754 41.7807 39.046 41.7744H8.91458C7.80851 41.7744 6.74774 41.335 5.96563 40.5529C5.18352 39.7708 4.74414 38.7101 4.74414 37.604V10.4961C4.74414 9.39006 5.18352 8.32929 5.96563 7.54718C6.74774 6.76507 7.80851 6.32569 8.91458 6.32569H17.0469C17.7444 6.31885 18.4325 6.48706 19.0481 6.81492C19.6638 7.14279 20.1874 7.61983 20.571 8.20239L22.26 10.7046C22.6397 11.2813 23.1567 11.7546 23.7645 12.0822C24.3723 12.4097 25.0519 12.5812 25.7423 12.5813H38.1077C39.2137 12.5813 40.2745 13.0207 41.0566 13.8028C41.8387 14.585 42.2781 15.6457 42.2781 16.7518V20.9222Z",
  code1: "M15.4797 20.4797L5 30.9595L15.4797 41.4392",
  code2: "M37.5794 10L24.4797 51.9189",
  code3: "M46.5794 41.4392L57.0591 30.9595L46.5794 20.4797",
};

/* ── New Footer icon paths (distinct from the header/contact icon set) ── */
const footerSvgPaths = {
  phone: "M16.629 13.891L17.085 13.438L16.026 12.374L15.572 12.827L16.629 13.891ZM18.614 13.248L20.525 14.287L21.24 12.969L19.33 11.931L18.614 13.248ZM20.892 16.351L19.472 17.764L20.529 18.827L21.949 17.415L20.892 16.351ZM18.606 18.218C17.156 18.354 13.406 18.233 9.344 14.195L8.286 15.258C12.718 19.665 16.937 19.881 18.746 19.712L18.606 18.218ZM9.344 14.195C5.473 10.345 4.831 7.108 4.751 5.703L3.253 5.788C3.353 7.556 4.148 11.144 8.286 15.258L9.344 14.195ZM10.719 8.015L11.006 7.729L9.95 6.666L9.663 6.951L10.719 8.015ZM11.234 4.094L9.974 2.41L8.773 3.31L10.033 4.993L11.234 4.094ZM5.733 2.043L4.163 3.603L5.221 4.667L6.79 3.107L5.733 2.043ZM10.191 7.483C9.661 6.951 9.661 6.951 9.661 6.953H9.659L9.656 6.957C9.60848 7.00491 9.56593 7.05752 9.529 7.114C9.475 7.194 9.416 7.299 9.366 7.432C9.24428 7.77533 9.21395 8.14441 9.278 8.503C9.412 9.368 10.008 10.511 11.534 12.029L12.592 10.965C11.163 9.545 10.823 8.681 10.76 8.273C10.73 8.079 10.761 7.983 10.77 7.961C10.776 7.94767 10.776 7.94567 10.77 7.955C10.7611 7.9688 10.7511 7.98184 10.74 7.994L10.73 8.004L10.72 8.013L10.191 7.483ZM11.534 12.029C13.061 13.547 14.21 14.139 15.076 14.271C15.519 14.339 15.876 14.285 16.147 14.184C16.2988 14.1285 16.4406 14.0488 16.567 13.948L16.617 13.903L16.624 13.897L16.627 13.894L16.628 13.892C16.628 13.892 16.629 13.891 16.1 13.359C15.57 12.827 15.573 12.826 15.573 12.826L15.575 12.824L15.577 12.822L15.583 12.817L15.593 12.807L15.631 12.777C15.6403 12.771 15.638 12.7717 15.624 12.779C15.599 12.788 15.501 12.819 15.304 12.789C14.89 12.725 14.02 12.385 12.592 10.965L11.534 12.029ZM9.974 2.409C8.954 1.049 6.95 0.833 5.733 2.043L6.79 3.107C7.322 2.578 8.266 2.633 8.773 3.31L9.974 2.409ZM4.752 5.704C4.732 5.358 4.891 4.996 5.221 4.668L4.162 3.604C3.625 4.138 3.202 4.894 3.253 5.788L4.752 5.704ZM19.472 17.764C19.198 18.038 18.902 18.192 18.607 18.219L18.746 19.712C19.481 19.643 20.082 19.273 20.53 18.828L19.472 17.764ZM11.006 7.729C11.991 6.75 12.064 5.203 11.235 4.095L10.034 4.994C10.437 5.533 10.377 6.24 9.949 6.667L11.006 7.729ZM20.526 14.288C21.343 14.732 21.47 15.778 20.893 16.352L21.951 17.415C23.291 16.082 22.878 13.859 21.241 12.97L20.526 14.288ZM17.085 13.439C17.469 13.057 18.087 12.963 18.615 13.249L19.331 11.932C18.247 11.342 16.903 11.505 16.027 12.375L17.085 13.439Z",
  linkedin1: "M17.325 8.6625C19.0481 8.6625 20.7006 9.34699 21.919 10.5654C23.1374 11.7838 23.8219 13.4363 23.8219 15.1594V22.7391H19.4906V15.1594C19.4906 14.585 19.2625 14.0342 18.8563 13.628C18.4502 13.2219 17.8994 12.9937 17.325 12.9937C16.7506 12.9937 16.1998 13.2219 15.7937 13.628C15.3875 14.0342 15.1594 14.585 15.1594 15.1594V22.7391H10.8281V15.1594C10.8281 13.4363 11.5126 11.7838 12.731 10.5654C13.9494 9.34699 15.6019 8.6625 17.325 8.6625Z",
  linkedin2: "M6.49687 9.74531H2.16562V22.7391H6.49687V9.74531Z",
  linkedin3: "M4.33125 6.49687C5.52729 6.49687 6.49687 5.52729 6.49687 4.33125C6.49687 3.13521 5.52729 2.16562 4.33125 2.16562C3.13521 2.16562 2.16562 3.13521 2.16562 4.33125C2.16562 5.52729 3.13521 6.49687 4.33125 6.49687Z",
  behance1: "M7.58163 13.4136C9.19127 13.4136 10.4976 12.1073 10.4976 10.4976C10.4976 8.888 9.19127 7.58163 7.58163 7.58163H2.33281V20.4121H8.16483C10.0894 20.4121 11.664 18.8374 11.664 16.9129C11.664 15.3032 10.5443 13.9502 9.0163 13.5653L7.58163 13.4136ZM4.66562 9.91444H6.99843C7.96654 9.91444 8.74803 10.6959 8.74803 11.664C8.74803 12.6322 7.96654 13.4136 6.99843 13.4136H4.66562V9.91444ZM7.58163 18.0793H4.66562V15.7465H7.58163C8.54974 15.7465 9.33123 16.5279 9.33123 17.4961C9.33123 18.4642 8.54974 18.0793 7.58163 18.0793Z",
  behance2: "M18.0793 9.33123C15.1749 9.33123 12.8304 11.6757 12.8304 14.5801C12.8304 17.4844 15.1749 19.8289 18.0793 19.8289C20.0622 19.8289 21.7768 18.7441 22.6749 17.1461L20.7503 16.0614C20.2721 16.8779 19.234 17.4961 18.0793 17.4961C16.6796 17.4961 15.5015 16.6446 15.0699 15.4549H23.3281C23.3631 15.1633 23.3281 14.8717 23.3281 14.5801C23.3281 11.6757 20.9836 9.33123 18.0793 9.33123ZM15.0699 13.7052C15.5015 12.5155 16.6796 11.664 18.0793 11.664C19.4789 11.664 20.657 12.5155 21.0886 13.7052H15.0699Z",
  behance3: "M15.7465 8.16483H20.4121V6.99843H15.7465V8.16483Z",
  whatsapp: "M18.9189 15.573C18.5973 15.4117 17.0153 14.6342 16.7208 14.5259C16.4252 14.4187 16.2108 14.3657 15.9953 14.6884C15.782 15.0099 15.1648 15.7343 14.9775 15.9487C14.7901 16.1642 14.6017 16.1902 14.2801 16.03C13.9585 15.8675 12.9212 15.5286 11.6922 14.4328C10.7361 13.5796 10.0896 12.526 9.90232 12.2033C9.71499 11.8817 9.88283 11.7074 10.0431 11.5471C10.1882 11.4031 10.3658 11.1714 10.526 10.9841C10.6874 10.7956 10.7404 10.6614 10.8487 10.4459C10.9559 10.2315 10.9028 10.0442 10.8216 9.88283C10.7404 9.72149 10.0972 8.13734 9.82977 7.49306C9.56773 6.86611 9.30244 6.95166 9.10537 6.94083C8.91804 6.93217 8.70365 6.93 8.48817 6.93C8.27377 6.93 7.9251 7.01013 7.63058 7.33281C7.33605 7.6544 6.50445 8.43294 6.50445 10.0171C6.50445 11.6002 7.65765 13.1302 7.81791 13.3457C7.97924 13.5601 10.0875 16.8107 13.3153 18.2042C14.0831 18.5356 14.6819 18.7337 15.1496 18.881C15.9206 19.1268 16.6223 19.0921 17.1756 19.0088C17.7939 18.9167 19.0792 18.2302 19.3477 17.4788C19.6162 16.7273 19.6162 16.083 19.535 15.9487C19.4549 15.8145 19.2416 15.7343 18.9189 15.573ZM13.0479 23.5891H13.0436C11.1267 23.5892 9.24514 23.0739 7.59593 22.097L7.20503 21.8652L3.15423 22.9286L4.23488 18.9785L3.98042 18.5735C2.90891 16.8673 2.34206 14.8927 2.34537 12.8779C2.34645 6.97656 7.14873 2.17537 13.0522 2.17537C15.9108 2.17537 18.5984 3.29067 20.6189 5.31336C21.6158 6.30588 22.406 7.48627 22.9437 8.7862C23.4814 10.0861 23.756 11.4798 23.7515 12.8866C23.7482 18.7879 18.9471 23.5891 13.0479 23.5891ZM22.1576 3.77685C20.9645 2.57593 19.545 1.62372 17.9813 0.975397C16.4175 0.327078 14.7407 -0.00445875 13.0479 -5.72204e-07C5.95005 -5.72204e-07 0.173249 5.7768 0.170001 12.8768C0.170001 15.1464 0.762299 17.3618 1.88951 19.3141L0.0617197 25.9875L6.88885 24.1965C8.77684 25.2251 10.8925 25.7642 13.0425 25.7644H13.0479C20.1446 25.7644 25.9225 19.9876 25.9258 12.8866C25.931 11.1944 25.6007 9.51803 24.9539 7.95438C24.3071 6.39072 23.3567 4.97083 22.1576 3.77685Z",
  mail1: "M21.6562 4.33125H4.33125C3.13521 4.33125 2.16562 5.30083 2.16562 6.49687V19.4906C2.16562 20.6867 3.13521 21.6563 4.33125 21.6563H21.6562C22.8523 21.6563 23.8219 20.6867 23.8219 19.4906V6.49687C23.8219 5.30083 22.8523 4.33125 21.6562 4.33125Z",
  mail2: "M23.8219 7.57969L14.109 13.7517C13.7748 13.9612 13.3882 14.0722 12.9938 14.0722C12.5993 14.0722 12.2127 13.9612 11.8785 13.7517L2.16562 7.57969",
};

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
/* Scaled 2× from the original Figma Make export (399.109×316.753 → 798.218×633.506)
   — every pixel value below is exactly double the source, so all proportions
   (text, tags, icons, spacing, radius) are preserved identically. */

function CaseStudyTag({ label }: { label: string }) {
  return (
    <div className="flex h-[58px] items-center justify-center px-[24px] relative rounded-[20px] shrink-0 border border-white">
      <p className="font-['Inter',sans-serif] font-bold leading-[72.26px] not-italic relative shrink-0 text-[32px] text-white tracking-[-2.1896px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function CaseStudyCardOverlay({ title, tags, top }: { title: string; tags: string[]; top: string }) {
  return (
    <div
      className="absolute flex flex-col gap-[16px] items-start justify-center left-[52px] w-[404.802px]"
      style={{ top }}
    >
      <p className="font-['Inter',sans-serif] font-extrabold leading-[72.26px] not-italic relative shrink-0 text-[48px] text-white tracking-[-2.1896px] w-full">
        {title}
      </p>
      <div className="flex gap-[16px] items-center relative shrink-0 w-full">
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
      className="h-[633.506px] overflow-clip relative rounded-[48.912px] shrink-0 w-[798.218px] cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]"
      style={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)", backgroundColor: "#111214" }}
    >
      {children}
    </div>
  );
}

/* ── At a Glance — stats section (Figma Make) ─────────────── */

function GlanceStat({
  icon,
  label,
  value,
  caption,
  captionWidth = "316.47px",
  borderRight = false,
  borderBottom = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  caption: React.ReactNode;
  captionWidth?: string;
  borderRight?: boolean;
  borderBottom?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{
        borderRight: borderRight ? "2.11px solid rgba(255,255,255,0.12)" : undefined,
        borderBottom: borderBottom ? "2.11px solid rgba(255,255,255,0.12)" : undefined,
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-[21px] size-full"
        style={{ padding: "70.327px" }}
      >
        {icon}
        <p className="font-['Inter',sans-serif] font-medium leading-[26.372px] not-italic text-[18px] text-[rgba(255,255,255,0.8)] tracking-[3.5163px] uppercase whitespace-nowrap">
          {label}
        </p>
        <p className="font-['Inter',sans-serif] font-bold leading-[98.457px] not-italic text-[98.457px] text-white whitespace-nowrap">
          {value}
        </p>
        <p
          className="font-['Inter',sans-serif] font-light leading-[31.427px] not-italic text-[20px] text-[rgba(255,255,255,0.8)] text-center"
          style={{ width: captionWidth }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

function AtAGlanceSection() {
  const GLANCE_DESIGN_WIDTH = 1512.02;
  const GLANCE_SIDE_PADDING = 32; // matches the section's own px-8

  const [scale, setScale] = useState(1);
  const [designHeight, setDesignHeight] = useState<number | null>(null);
  const glanceContentRef = useRef<HTMLDivElement>(null);

  // Measure the card's natural (unscaled) height once — it's fixed regardless
  // of viewport since every value inside it is a fixed pixel value.
  useLayoutEffect(() => {
    if (glanceContentRef.current) {
      setDesignHeight(glanceContentRef.current.offsetHeight);
    }
  }, []);

  // Recompute scale so the card's rendered width always exactly fills the
  // available space (viewport minus the section's side padding).
  useEffect(() => {
    const update = () => {
      const available = window.innerWidth - GLANCE_SIDE_PADDING * 2;
      setScale(available / GLANCE_DESIGN_WIDTH);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="at-a-glance" className="w-full flex flex-col items-center px-8" style={{ marginTop: "96px" }}>
      <div className="w-full flex flex-col items-center gap-[24px]">
        {/* Eyebrow label — stays at its original literal size, not scaled */}
        <p className="font-['Inter',sans-serif] font-semibold leading-[29.01px] not-italic text-[#121111] text-[22px] tracking-[5.8019px] uppercase whitespace-nowrap">
          At a Glance
        </p>

        {/* Scaled wrapper — reserves exactly the right amount of vertical
            space in normal document flow for the scaled card beneath it */}
        <div
          className="relative w-full"
          style={{ height: designHeight !== null ? `${designHeight * scale}px` : undefined }}
        >
          {/* Black stats card — always rendered at its fixed native design
              width (1512.02px) with every padding/font/icon/border untouched,
              then scaled as a single unit to exactly fill the available
              width. Nothing inside is stretched or resized independently. */}
          <div
            ref={glanceContentRef}
            className="bg-[#161616] flex flex-col items-start overflow-clip rounded-[50px]"
            style={{
              width: `${GLANCE_DESIGN_WIDTH}px`,
              position: "absolute",
              top: 0,
              left: 0,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div className="grid grid-cols-2 grid-rows-2 relative w-full">
              {/* UI UX certification */}
              <GlanceStat
                borderRight
                borderBottom
                icon={
                  <svg className="size-[54.78px]" fill="none" viewBox="0 0 54.78 54.78">
                    <path d={glanceSvgPaths.award2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="4.00687" />
                    <path d={glanceSvgPaths.award1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="4.00687" />
                  </svg>
                }
                label="Hold a Certification in"
                value="UI UX"
                caption={<>Over 140 hours at<br aria-hidden />Graphitech College</>}
              />

              {/* B.Sc Computer Science */}
              <GlanceStat
                borderBottom
                icon={
                  <svg className="size-[54.785px]" fill="none" viewBox="0 0 54.7847 54.7847">
                    <path d={glanceSvgPaths.book1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.42404" />
                    <path d={glanceSvgPaths.book2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.42404" />
                  </svg>
                }
                label="Hold Computer Science"
                value="B.Sc."
                caption="Tel Aviv University"
                captionWidth="357px"
              />

              {/* Products designed */}
              <GlanceStat
                borderRight
                icon={
                  <svg className="w-[51.2px] h-[48.1px]" fill="none" viewBox="0 0 51.1999 48.0999">
                    <path d={glanceSvgPaths.folder} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.12783" />
                  </svg>
                }
                label="Products Designed"
                value="5"
                caption="End-to-end UX and UI, Product design projects"
              />

              {/* Years in development */}
              <GlanceStat
                icon={
                  <svg className="w-[62.059px] h-[61.919px]" fill="none" viewBox="0 0 62.0591 61.9189">
                    <path d={glanceSvgPaths.code1} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.9299" />
                    <path d={glanceSvgPaths.code2} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.9299" />
                    <path d={glanceSvgPaths.code3} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="3.9299" />
                  </svg>
                }
                label="Years in Development"
                value="13+"
                caption="Building scalable software across multiple industries"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ — accordion section (Figma Make) ─────────────────── */

const faqs = [
  {
    id: "background",
    question: "What's your background?",
    answer:
      "I spent 13 years as a software engineer before transitioning into Product Design. This technical background helps me design products that are not only intuitive for users but also realistic to build. I understand both user needs and engineering constraints, making collaboration with development teams more effective.",
  },
  {
    id: "projects",
    question: "What kind of projects do you design?",
    answer:
      "I focus on digital products, from mobile apps to SaaS platforms. My process covers the entire journey, including UX research, user flows, wireframes, high fidelity UI, interactive prototypes, and developer ready designs in Figma.",
  },
  {
    id: "opportunities",
    question: "Are you available for new opportunities?",
    answer:
      "Yes. I'm open to Product Designer and UX/UI Designer opportunities, as well as freelance collaborations. If you think we'd be a good fit, feel free to get in touch.",
  },
];

function FaqAccordionItem({
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
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-btn-${item.id}`;

  return (
    <div className="border-b border-[#e5e5e5] last:border-b-0">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-[28px] px-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#333] rounded-sm"
      >
        <span
          className="text-[20px] font-semibold text-[#1a1a1a] leading-snug pr-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#1a1a1a]"
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path d="M2 8H14" stroke="#1a1a1a" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M8 2V14M2 8H14" stroke="#1a1a1a" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 280ms ease, opacity 280ms ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="pb-[28px]">
          <p
            className="text-[17px] leading-[1.65] text-[#5a5a6e]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full flex justify-center px-8" style={{ marginTop: "96px" }}>
      <div className="w-full" style={{ maxWidth: "820px" }}>
        {faqs.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Footer — replaces old purple CTA + icon strip (Figma Make) ───── */

function FtrPhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d={footerSvgPaths.phone} fill="#161616" />
    </svg>
  );
}

function FtrLinkedInIcon() {
  return (
    <svg width="25.9875" height="25.9875" viewBox="0 0 25.9875 25.9875" fill="none">
      <path d={footerSvgPaths.linkedin1} stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62422" />
      <path d={footerSvgPaths.linkedin2} stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62422" />
      <path d={footerSvgPaths.linkedin3} stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62422" />
    </svg>
  );
}

function FtrBehanceIcon() {
  return (
    <svg width="27.9937" height="27.9937" viewBox="0 0 27.9937 27.9937" fill="none">
      <path d={footerSvgPaths.behance1} fill="#E5E7EB" />
      <path d={footerSvgPaths.behance2} fill="#E5E7EB" />
      <path d={footerSvgPaths.behance3} fill="#E5E7EB" />
    </svg>
  );
}

function FtrWhatsAppIcon() {
  return (
    <svg width="25.9875" height="25.9875" viewBox="0 0 25.9875 25.9875" fill="none">
      <g clipPath="url(#ftr-wa-clip)">
        <path d={footerSvgPaths.whatsapp} fill="#E5E7EB" />
      </g>
      <defs>
        <clipPath id="ftr-wa-clip">
          <rect width="25.9875" height="25.9875" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FtrMailIcon() {
  return (
    <svg width="25.9875" height="25.9875" viewBox="0 0 25.9875 25.9875" fill="none">
      <path d={footerSvgPaths.mail1} stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62422" />
      <path d={footerSvgPaths.mail2} stroke="#E5E7EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.62422" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <div className="w-full bg-[#0f0f0f] flex items-end" style={{ marginTop: "96px" }}>
      <footer
        id="contact"
        className="bg-[#161616] rounded-tl-[50px] rounded-tr-[50px] w-full flex flex-col items-start"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Top section – heading + CTA */}
        <div className="w-full flex flex-col items-center pb-[56px] pt-[64px] px-6">
          <div className="flex flex-col gap-[24px] items-center">
            {/* Heading */}
            <div className="flex flex-col items-center max-w-[560px]">
              <div className="text-[#f5f5f5] text-[44px] text-center tracking-[-0.88px] leading-[1.2]" style={{ fontWeight: 500 }}>
                <p className="mb-0">
                  <span style={{ fontWeight: 500 }}>{"Let's "}</span>
                  <span style={{ fontWeight: 800 }}>build</span>
                  <span style={{ fontWeight: 500 }}>{" something"}</span>
                </p>
                <p>great together</p>
              </div>
            </div>

            {/* Subtitle */}
            <div className="pb-[6px]">
              <p className="text-[#9ca3af] text-[14px] text-center leading-[22.4px]" style={{ fontWeight: 400, width: 392 }}>
                Currently open to new opportunities.
              </p>
            </div>

            {/* Call Me button */}
            <a
              href="tel:0505795099"
              className="relative group flex gap-[8px] items-center bg-[#fefefe] hover:bg-white px-[23.2px] py-[11.2px] rounded-[6px] transition-all duration-200 hover:shadow-[0_0_0_3px_rgba(255,255,255,0.15)] active:scale-95 cursor-pointer no-underline"
            >
              <span aria-hidden className="absolute inset-0 rounded-[6px] border-[1.2px] border-[rgba(255,255,255,0.25)] pointer-events-none" />
              <FtrPhoneIcon />
              <span className="text-[#161616] text-[14px] leading-[21px] tracking-[0.14px] whitespace-nowrap" style={{ fontWeight: 700 }}>
                Call Me
              </span>
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="w-full flex gap-[48px] items-center justify-center pb-[64px] pt-[4px]">
          <a
            href="https://www.linkedin.com/in/yotam-eliraz-977b0450/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-[8px] items-center group cursor-pointer no-underline"
          >
            <span className="opacity-85 group-hover:opacity-100 transition-opacity duration-200 group-hover:scale-110 transform transition-transform">
              <FtrLinkedInIcon />
            </span>
            <span className="text-[#9ca3af] text-[12px] leading-[18px] tracking-[0.12px] whitespace-nowrap group-hover:text-[#e5e7eb] transition-colors duration-200" style={{ fontWeight: 400 }}>
              LinkedIn
            </span>
          </a>

          <a
            href="https://www.behance.net/yotame"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-[8px] items-center group cursor-pointer no-underline"
          >
            <span className="opacity-85 group-hover:opacity-100 transition-opacity duration-200 group-hover:scale-110 transform transition-transform">
              <FtrBehanceIcon />
            </span>
            <span className="text-[#9ca3af] text-[12px] leading-[18px] tracking-[0.12px] whitespace-nowrap group-hover:text-[#e5e7eb] transition-colors duration-200" style={{ fontWeight: 400 }}>
              Behance
            </span>
          </a>

          <a
            href={`https://web.whatsapp.com/send?phone=972505795099&text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-[8px] items-center group cursor-pointer no-underline"
          >
            <span className="opacity-85 group-hover:opacity-100 transition-opacity duration-200 group-hover:scale-110 transform transition-transform">
              <FtrWhatsAppIcon />
            </span>
            <span className="text-[#9ca3af] text-[12px] leading-[18px] tracking-[0.12px] whitespace-nowrap group-hover:text-[#e5e7eb] transition-colors duration-200" style={{ fontWeight: 400 }}>
              WhatsApp
            </span>
          </a>

          <a
            href="mailto:yotam.eliraz@gmail.com"
            className="flex flex-col gap-[8px] items-center group cursor-pointer no-underline"
          >
            <span className="opacity-85 group-hover:opacity-100 transition-opacity duration-200 group-hover:scale-110 transform transition-transform">
              <FtrMailIcon />
            </span>
            <span className="text-[#9ca3af] text-[12px] leading-[18px] tracking-[0.12px] whitespace-nowrap group-hover:text-[#e5e7eb] transition-colors duration-200" style={{ fontWeight: 400 }}>
              Mail
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="relative w-full">
          <div aria-hidden className="absolute inset-0 pointer-events-none border-t-[1.2px] border-[rgba(255,255,255,0.08)]" />
          <div className="flex items-center justify-center px-[32px] pb-[16px] pt-[17.2px]">
            <p className="text-[#6b7280] text-[12px] leading-[18px] whitespace-nowrap" style={{ fontWeight: 400 }}>
              © {new Date().getFullYear()} Yotam Eliraz. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



const WA_MSG = encodeURIComponent("Hi Yotam, I came across your portfolio and I'd love to chat.");

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
    <div className="bg-white min-h-screen w-full flex flex-col items-center">
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
          onNavigateAbout={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
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
              gap: "19.564847946166992px",
            }}
          >
            {/* Pulse */}
            <CaseStudyGridCard onClick={() => onNavigate("pulse")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[48.912px] size-full"
                src={imgPulseCard}
              />
              <CaseStudyCardOverlay title="Pulse" tags={["Dashboard", "Analytics"]} top="450px" />
            </CaseStudyGridCard>

            {/* Alma */}
            <CaseStudyGridCard onClick={() => onNavigate("alma")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48.912px] size-full"
                src={imgAlmaCard}
              />
              <CaseStudyCardOverlay title="Alma" tags={["Mobile App", "Health"]} top="450px" />
            </CaseStudyGridCard>

            {/* Curio */}
            <CaseStudyGridCard onClick={() => onNavigate("curio")}>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[48.912px] size-full"
                src={imgCurioCard}
              />
              <CaseStudyCardOverlay title="Curio" tags={["E-Commerce", "Kids"]} top="450.92px" />
            </CaseStudyGridCard>

            {/* Coming soon */}
            <CaseStudyGridCard>
              <div className="bg-[#161616] absolute inset-0 rounded-[48.912px]" />
              <div className="absolute flex flex-col gap-[19.564px] items-start left-[140.62px] top-[221.24px] w-[577.162px] text-white not-italic">
                <p
                  className="font-['Inter',sans-serif] font-extrabold leading-[90.604px] min-w-full relative shrink-0 text-[68.476px] tracking-[-2.7456px] w-[min-content]"
                  dir="auto"
                >
                  Coming soon...
                </p>
                <p
                  className="font-['Inter',sans-serif] font-medium leading-[39.13px] relative shrink-0 text-[24.456px] w-[560.044px]"
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

      <AtAGlanceSection />

      <FaqSection />

      <SiteFooter />
    </div>
  );
}
