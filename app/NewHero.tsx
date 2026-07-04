import { useEffect, useState } from "react";
import heroPhoto from "@/imports/Frame_19__3_.png";

interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
}

const DESIGN_WIDTH = 1512;
const DESIGN_HEIGHT = 1038;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function NewHero({ onNavigateAbout, onScrollContact, onScrollWork }: Props) {
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);
  const [floatY, setFloatY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Entrance animation — triggers once on mount, one frame after first paint
  // so the initial (pre-animation) styles are guaranteed to have rendered.
  useEffect(() => {
    if (reducedMotion) {
      setMounted(true);
      return;
    }
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setMounted(true)));
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  // Subtle scroll-tied float on the portrait — vertical only, capped at 15px,
  // no parallax exaggeration. Disabled when reduced motion is requested.
  useEffect(() => {
    if (reducedMotion) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setFloatY(-Math.min(15, window.scrollY * 0.05));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <div className="bg-white relative w-full" style={{ overflow: "hidden", height: `${scale * DESIGN_HEIGHT}px` }}>
      <div
        className="absolute top-0 left-0"
        style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* Hero portrait — fades smoothly into the white background via a mask
            applied directly to the image itself (no separate overlay box, so
            there is no hard edge/seam anywhere in the transition). The mask
            uses many stops on an ease-out curve: it holds fully opaque for the
            top ~62%, then dissolves progressively more softly toward 0%,
            covering roughly the bottom 35% of the photo. */}
        <div
          className="absolute"
          style={{
            left: "273px",
            top: "104px",
            width: "1158px",
            height: "837px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.96)",
            transformOrigin: "center",
            transition: reducedMotion ? "none" : `opacity 800ms ${EASE} 120ms, transform 800ms ${EASE} 120ms`,
          }}
        >
          {/* Inner layer carries the scroll-tied float — updated every frame,
              so it must never share a CSS transition with the entrance
              scale above (that would make it lag behind the scroll). */}
          <div
            className="w-full h-full"
            style={{ transform: `translateY(${floatY}px)`, willChange: "transform" }}
          >
          <img
            alt=""
            src={heroPhoto}
            className="absolute inset-0 pointer-events-none"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "bottom",
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.96) 68%, rgba(0,0,0,0.88) 73%, rgba(0,0,0,0.74) 78%, rgba(0,0,0,0.56) 83%, rgba(0,0,0,0.38) 87.5%, rgba(0,0,0,0.22) 91.5%, rgba(0,0,0,0.10) 95%, rgba(0,0,0,0.03) 98%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.96) 68%, rgba(0,0,0,0.88) 73%, rgba(0,0,0,0.74) 78%, rgba(0,0,0,0.56) 83%, rgba(0,0,0,0.38) 87.5%, rgba(0,0,0,0.22) 91.5%, rgba(0,0,0,0.10) 95%, rgba(0,0,0,0.03) 98%, rgba(0,0,0,0) 100%)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
          </div>
        </div>

        {/* Nav bar — fixed 80px height, content vertically centered via flex
            rather than relying on line-height, so typography is untouched */}
        <div
          className="absolute left-0 top-0 flex items-center justify-between whitespace-nowrap not-italic text-[#161616]"
          style={{
            height: "80px",
            width: "1512px",
            paddingLeft: "40px",
            paddingRight: "40px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(-16px)",
            transition: reducedMotion ? "none" : `opacity 600ms ${EASE}, transform 600ms ${EASE}`,
          }}
        >
          <p
            className="relative shrink-0 text-[#161616]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "1.2", margin: 0 }}
          >
            Yotam Eliraz
          </p>

          <div
            className="flex items-center gap-9"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "18px" }}
          >
            <span
              onClick={onScrollWork}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5 inline-block"
            >
              Work
            </span>
            <span
              onClick={onNavigateAbout}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5 inline-block"
            >
              About
            </span>
            <span
              onClick={onScrollContact}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-all duration-200 hover:opacity-60 hover:-translate-y-0.5 inline-block"
            >
              Contact
            </span>
          </div>
        </div>

        {/* Headline */}
        <p
          className="absolute not-italic text-[#161616] whitespace-pre-wrap"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "62px",
            lineHeight: "66px",
            letterSpacing: "-2px",
            left: "104px",
            top: "199px",
            width: "507px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(24px)",
            transition: reducedMotion ? "none" : `opacity 750ms ${EASE} 80ms, transform 750ms ${EASE} 80ms`,
          }}
        >
          {"A product designer\nwith a development \nbackground"}
        </p>

        {/* Body copy */}
        <p
          className="absolute not-italic text-[#161616] whitespace-pre-wrap"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: "28px",
            left: "1114px",
            top: "417px",
            width: "308px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0px)" : "translateY(20px)",
            transition: reducedMotion ? "none" : `opacity 700ms ${EASE} 260ms, transform 700ms ${EASE} 260ms`,
          }}
        >
          <span style={{ fontWeight: 400 }}>{"As a digital "}</span>
          <span style={{ fontWeight: 800 }}>{"product designer \n"}</span>
          <span style={{ fontWeight: 400 }}>{"with a strong foundation in "}</span>
          <span style={{ fontWeight: 800 }}>software development</span>
          <span style={{ fontWeight: 400 }}>
            {", I design intuitive digital products that balance user needs, business goals, and technical feasibility."}
          </span>
        </p>
      </div>
    </div>
  );
}
