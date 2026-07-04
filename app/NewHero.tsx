import { useEffect, useState } from "react";
import heroPhoto from "@/imports/Frame_19__3_.png";

interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
}

const DESIGN_WIDTH = 1512;
const DESIGN_HEIGHT = 980;

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
        {/* Hero portrait */}
        <div
          className="absolute"
          style={{ left: "273px", top: "66px", width: "1158px", height: "837px" }}
        >
          <img
            alt=""
            src={heroPhoto}
            className="absolute inset-0 pointer-events-none"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom" }}
          />
        </div>

        {/* Fade-to-white overlay at the bottom of the portrait */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 0, top: "701px", width: "1498px", height: "279px", filter: "blur(50px)" }}
        >
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 35.667%, rgba(255,255,255,1) 50%)",
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
            top: "304px",
            width: "507px",
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
            top: "359px",
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
      </div>
    </div>
  );
}
