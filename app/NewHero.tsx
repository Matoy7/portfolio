import { useEffect, useState } from "react";
import heroPhoto from "@/imports/Frame_19__3_.png";

interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
}

// Measured directly from the approved reference screenshot (1512px wide export).
const DESIGN_WIDTH = 1512;
const DESIGN_HEIGHT = 520;

export default function NewHero({ onNavigateAbout, onScrollContact, onScrollWork }: Props) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="bg-white relative w-full" style={{ overflow: "hidden", height: `${scale * DESIGN_HEIGHT}px` }}>
      <div
        className="absolute top-0 left-0"
        style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* Hero portrait — smaller/shorter box matching the reference, still
            using object-fit: cover so the source photo is never stretched or
            distorted, only cropped to fill this box. Fade mask unchanged in
            approach, re-tuned to the new height. */}
        <div
          className="absolute"
          style={{ left: "300px", top: "30px", width: "700px", height: "430px" }}
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

        {/* Nav bar */}
        <div
          className="absolute left-0 flex items-center justify-between whitespace-nowrap not-italic text-[#161616]"
          style={{
            top: "36px",
            width: "1512px",
            paddingLeft: "56px",
            paddingRight: "56px",
            paddingTop: "10px",
            paddingBottom: "10px",
            lineHeight: "66px",
          }}
        >
          <p
            className="relative shrink-0 text-[#161616]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "66px" }}
          >
            Yotam Eliraz
          </p>

          <div
            className="flex items-start gap-9"
            style={{ padding: "10px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "18px" }}
          >
            <span
              onClick={onScrollWork}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-opacity duration-150 hover:opacity-60"
            >
              Work
            </span>
            <span
              onClick={onNavigateAbout}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-opacity duration-150 hover:opacity-60"
            >
              About
            </span>
            <span
              onClick={onScrollContact}
              className="relative shrink-0 text-[#161616] cursor-pointer transition-opacity duration-150 hover:opacity-60"
            >
              Contact
            </span>
          </div>
        </div>

        {/* Headline — natural wrap (no forced line breaks) at the measured
            column width so it wraps to 5 lines exactly like the reference. */}
        <p
          className="absolute not-italic text-[#161616]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "44px",
            lineHeight: "48px",
            letterSpacing: "-1.5px",
            left: "60px",
            top: "225px",
            width: "410px",
          }}
        >
          A product designer with a development background
        </p>

        {/* Body copy */}
        <p
          className="absolute not-italic text-[#161616] whitespace-pre-wrap"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            lineHeight: "28px",
            left: "1114px",
            top: "305px",
            width: "308px",
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

        {/* Divider — thin rule beneath the hero, matching the reference */}
        <div
          className="absolute"
          style={{ left: "270px", top: "500px", width: "970px", height: "1px", background: "#e5e5e5" }}
        />
      </div>
    </div>
  );
}
