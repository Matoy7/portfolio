import { useState, useEffect, useRef } from "react";
import svgPaths from "@/imports/Desktop1/svg-9iolwnpgfe";
import imgDesktop1 from "@/imports/Desktop1/259c64d1bdda6c16cf78ca5587f90447475c20a8.png";
import imgFrame2 from "@/imports/Desktop1/47afee3535c14740bb0088582f060746b591a336.png";
import imgFrame3 from "@/imports/Desktop1/def865325ce02292c60367ff2329e5413d9c52b0.png";
import imgFrame5 from "@/imports/Desktop1/43a6a229bc9789560eec8161cd2154c844df535c.png";
import imgImage2 from "@/imports/Desktop1/14fd5efec55e2d6148d80cc1669408de6f2df43f.png";
import imgFrame4 from "@/imports/Desktop1/b37f13c7b7d1110561f31db2096e60cfba9dc957.png";

type Obj = "mug" | "laptop" | "frame" | null;

const CANVAS_W = 1440;
const CANVAS_H = 1024;

interface Props {
  onNavigateAbout: () => void;
  onScrollContact: () => void;
  onScrollWork: () => void;
}

export default function NewHero({ onNavigateAbout, onScrollContact, onScrollWork }: Props) {
  const [hovered, setHovered] = useState<Obj>(null);
  const [clicked, setClicked] = useState<Obj>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [swingKey, setSwingKey] = useState(0);
  const [swinging, setSwinging] = useState(false);
  const [viewportScale, setViewportScale] = useState(1);

  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const idleRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onResize = () => setViewportScale(Math.min(1, window.innerWidth / CANVAS_W));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(rafRef.current!);
      rafRef.current = requestAnimationFrame(() => setMousePos({ x, y }));
    };
    el.addEventListener("mousemove", onMove);
    return () => { el.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current!); };
  }, []);

  useEffect(() => {
    const schedule = () => {
      idleRef.current = setTimeout(() => {
        setSwingKey((k) => k + 1);
        setSwinging(true);
        setTimeout(() => { setSwinging(false); schedule(); }, 900);
      }, 10000 + Math.random() * 5000);
    };
    schedule();
    return () => clearTimeout(idleRef.current);
  }, []);

  const handleClick = (target: NonNullable<Obj>) => {
    setClicked(target);
    setTimeout(() => setClicked(null), 180);
    if (target === "mug")    onScrollContact();
    if (target === "laptop") onScrollWork();
    if (target === "frame")  onNavigateAbout();
  };

  const triggerFrameSwing = () => { setSwingKey((k) => k + 1); setSwinging(true); };
  const stopFrameSwing = () => setSwinging(false);

  const mx = mousePos.x;
  const my = mousePos.y;
  const dim = (self: string) => hovered !== null && hovered !== self ? 0.92 : 1;
  const cs = (t: string) => (clicked === t ? 0.985 : 1);
  const mugHover = hovered === "mug";
  const laptopHover = hovered === "laptop";
  const frameHover = hovered === "frame";
  const frameSwingActive = swinging || frameHover;

  return (
    <>
      <style>{`
        @keyframes grain {
          0%,100% { transform:translate(0,0); }
          10%  { transform:translate(-2%,-3%); }
          20%  { transform:translate(-5%,2%); }
          30%  { transform:translate(3%,-5%); }
          40%  { transform:translate(-2%,4%); }
          50%  { transform:translate(-5%,3%); }
          60%  { transform:translate(5%,0%); }
          70%  { transform:translate(0%,4%); }
          80%  { transform:translate(1%,7%); }
          90%  { transform:translate(-3%,3%); }
        }
        @keyframes steam-rise {
          0%   { transform:translateY(0) scaleX(1); opacity:0.45; }
          100% { transform:translateY(-32px) scaleX(1.5); opacity:0; }
        }
        @keyframes frame-swing {
          0%   { transform:rotate(0deg); }
          20%  { transform:rotate(1deg); }
          40%  { transform:rotate(0deg); }
          60%  { transform:rotate(-1deg); }
          80%  { transform:rotate(0deg); }
          100% { transform:rotate(0deg); }
        }
        @keyframes sunlight {
          0%,100% { opacity:0; }
          50%     { opacity:1; }
        }
        @keyframes screen-reflect {
          0%   { transform:translateX(-180%) skewX(-18deg); opacity:0; }
          25%  { opacity:0.07; }
          100% { transform:translateX(320%) skewX(-18deg); opacity:0; }
        }
        .steam { animation: steam-rise 2.6s ease-out infinite; }
      `}</style>

      <div ref={heroRef} style={{ position: "relative", width: "100%", height: viewportScale * CANVAS_H, overflow: "hidden" }}>
        <div style={{ width: CANVAS_W, height: CANVAS_H, position: "absolute", top: 0, left: 0, transform: `scale(${viewportScale})`, transformOrigin: "top left" }}>

          {/* Background */}
          <img alt="" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", pointerEvents:"none" }} src={imgDesktop1} />

          {/* Ambient sunlight */}
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse 65% 45% at 72% 18%, rgba(255,218,100,0.05) 0%, transparent 70%)", animation:"sunlight 14s ease-in-out infinite", pointerEvents:"none" }} />

          {/* Film grain */}
          <div style={{ position:"absolute", inset:"-50%", width:"200%", height:"200%", backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`, backgroundRepeat:"repeat", backgroundSize:"200px 200px", animation:"grain 0.55s steps(1) infinite", mixBlendMode:"overlay", opacity:0.32, pointerEvents:"none", zIndex:99 }} />

          {/* Nav text parallax */}
          <div style={{ position:"absolute", inset:0, transform:`translate(${mx*-1}px,${my*-1}px)`, transition:"transform 700ms ease-out", pointerEvents:"none" }}>
            <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[64px] top-0 w-[1441px]">
              <div className="h-[89px] relative shrink-0 w-[62px]" style={{ pointerEvents:"auto" }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[99.63%] left-[-58.06%] max-w-none top-0 w-[214.52%]" src={imgImage2} />
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex font-['Inter',sans-serif] font-bold gap-[64px] items-center leading-[normal] not-italic relative shrink-0 text-[#1e1e1d] text-[22px] whitespace-nowrap" style={{ pointerEvents:"auto" }}>
                <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={onNavigateAbout}>ABOUT</p>
                <p className="relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" onClick={onScrollContact} dir="auto">LET'S TALK</p>
              </div>
            </div>
          </div>

          {/* Hero text parallax */}
          <div style={{ position:"absolute", inset:0, transform:`translate(${mx*-1.5}px,${my*-1.5}px)`, transition:"transform 700ms ease-out", pointerEvents:"none" }}>
            <p className="[word-break:break-word] absolute font-['Inter',sans-serif] font-semibold leading-[0] left-[65px] not-italic text-[0px] text-black top-[210px] tracking-[-2.16px] w-[665px]" dir="auto">
              <span className="font-['Inter',sans-serif] font-bold leading-[72px] text-[72px]">{`Product `}</span>
              <span className="font-['Inter',sans-serif] font-bold leading-[72px] text-[#1c72bd] text-[72px]">Designer</span>
              <span className="font-['Inter',sans-serif] font-bold leading-[72px] text-[72px]">{` with an engineering background`}</span>
            </p>
            <p className="[word-break:break-word] absolute font-['Inter',sans-serif] font-normal leading-[normal] left-[66px] not-italic text-[22px] text-black top-[449px] w-[544px]">
              Product Designer with 12 years of engineering experience, creating intuitive digital products through user centered design.
            </p>
          </div>

          {/* Annotation labels */}
          <p className="[word-break:break-word] absolute font-['Patrick Hand',cursive] leading-[normal] left-[1281px] not-italic text-[#1e1e1d] text-[26px] top-[217px] whitespace-nowrap pointer-events-none">ABOUT ME</p>
          <p className="[word-break:break-word] absolute font-['Patrick Hand',cursive] leading-[normal] left-[1263px] not-italic text-[#1e1e1d] text-[26px] top-[681px] whitespace-nowrap pointer-events-none">My Work</p>
          <p className="[word-break:break-word] absolute font-['Patrick Hand',cursive] leading-[normal] left-[100px] not-italic text-[#1e1e1d] text-[26px] top-[681px] whitespace-nowrap pointer-events-none">{"Let's Talk"}</p>

          {/* Arrows */}
          <div className="absolute flex inset-[71.86%_84.31%_18.29%_9.73%] items-center justify-center pointer-events-none" style={{ containerType:"size" }}>
            <div className="flex-none h-[hypot(80.6777cqw,12.9756cqh)] rotate-[-79.3deg] w-[hypot(19.3223cqw,-87.0244cqh)]">
              <div className="relative size-full">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.3729 70.5175">
                  <path d={svgPaths.p2132ac60} fill="#072333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[70.82%_5.2%_13.4%_82.73%] items-center justify-center pointer-events-none" style={{ containerType:"size" }}>
            <div className="-scale-x-100 flex-none h-[hypot(70.4432cqw,-59.682cqh)] rotate-[-128.24deg] w-[hypot(29.5568cqw,40.318cqh)]">
              <div className="relative size-full">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.9668 155.836">
                  <path d={svgPaths.p3f099980} fill="#072333" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[26.08%_7.54%_65.69%_84.57%] items-center justify-center pointer-events-none" style={{ containerType:"size" }}>
            <div className="flex-none h-[hypot(-16.1149cqw,-56.6644cqh)] rotate-[159.03deg] w-[hypot(-83.8851cqw,43.3356cqh)]">
              <div className="relative size-full">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.029 51.136">
                  <path d={svgPaths.p1d0508c0} fill="#072333" />
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative frame (non-interactive) */}
          <div className="absolute h-[128px] left-[891px] top-[116px] w-[251px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame5} />
          </div>

          {/* INTERACTIVE: Framed picture → About */}
          <div style={{ position:"absolute", left:820, top:172, width:390, height:254, transform:`translate(${mx*-4}px,${my*-4}px)`, transition:"transform 700ms ease-out", zIndex:20 }}>
            <div
              style={{ width:"100%", height:"100%", cursor:"pointer", opacity:dim("frame"), transition:"opacity 250ms ease, transform 250ms ease, filter 250ms ease, box-shadow 250ms ease", transform:`scale(${frameHover ? 1.03*cs("frame") : cs("frame")})`, filter:frameHover?"saturate(1.08) contrast(1.05)":"saturate(1) contrast(1)", boxShadow:frameHover?"0px 12px 36px rgba(0,0,0,0.22), 0px 4px 8px rgba(0,0,0,0.15)":"0px 4px 4px 0px rgba(0,0,0,0.25)", position:"relative" }}
              onMouseEnter={() => { setHovered("frame"); triggerFrameSwing(); }}
              onMouseLeave={() => { setHovered(null); stopFrameSwing(); }}
              onClick={() => handleClick("frame")}
            >
              <div key={`swing-${swingKey}`} style={{ width:"100%", height:"100%", transformOrigin:"top center", animation:frameSwingActive?"frame-swing 900ms ease-in-out forwards":"none" }}>
                <div aria-hidden style={{ position:"absolute", inset:0, pointerEvents:"none" }}>
                  <div style={{ position:"absolute", inset:0, overflow:"hidden" }}>
                    <img alt="" className="absolute h-[184.59%] left-[-38.68%] max-w-none top-[-55.12%] w-[180.33%]" src={imgFrame4} />
                  </div>
                  <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.25)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* INTERACTIVE: Laptop → Case Studies / My Work */}
          <div style={{ position:"absolute", left:466, top:489, width:786.048, height:535, transform:`translate(${mx*-8}px,${my*-8}px)`, transition:"transform 700ms ease-out", zIndex:15 }}>
            <div
              style={{ width:"100%", height:"100%", cursor:"pointer", opacity:dim("laptop"), transition:"opacity 250ms ease, transform 250ms ease, box-shadow 250ms ease, filter 250ms ease", transform:`scale(${laptopHover ? 1.015*cs("laptop") : cs("laptop")}) translateY(${laptopHover?-3:0}px)`, filter:laptopHover?"brightness(1.03)":"brightness(1)", boxShadow:laptopHover?"517px 702px 244px 0px rgba(0,0,0,0),331px 450px 223px 0px rgba(0,0,0,0.01),186px 253px 188px 0px rgba(0,0,0,0.07),83px 112px 140px 0px rgba(0,0,0,0.13),21px 28px 77px 0px rgba(0,0,0,0.16)":"517px 702px 244px 0px rgba(0,0,0,0),331px 450px 223px 0px rgba(0,0,0,0.01),186px 253px 188px 0px rgba(0,0,0,0.05),83px 112px 140px 0px rgba(0,0,0,0.09),21px 28px 77px 0px rgba(0,0,0,0.1)", position:"relative", overflow:"hidden" }}
              onMouseEnter={() => setHovered("laptop")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick("laptop")}
            >
              <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none" }}>
                <img alt="" className="absolute h-[140.32%] left-[-21.61%] max-w-none top-[-16.52%] w-[143.26%]" src={imgFrame2} />
              </div>
              {laptopHover && (
                <div style={{ position:"absolute", top:"8%", bottom:"12%", left:0, right:0, pointerEvents:"none", overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(108deg, transparent 20%, rgba(255,255,255,0.09) 50%, transparent 80%)", animation:"screen-reflect 750ms ease-out forwards" }} />
                </div>
              )}
              <div style={{ position:"absolute", inset:"14% 8% 10% 8%", background:"rgba(255,255,255,0.025)", opacity:laptopHover?1:0, transition:"opacity 250ms ease", pointerEvents:"none", borderRadius:3 }} />
            </div>
          </div>

          {/* INTERACTIVE: Coffee mug → Let's Talk / Contact */}
          <div style={{ position:"absolute", left:236, top:756, width:205, height:263, transform:`translate(${mx*-12}px,${my*-12}px)`, transition:"transform 700ms ease-out", zIndex:20 }}>
            <div style={{ position:"absolute", top:-48, left:28, width:110, height:55, pointerEvents:"none" }}>
              {[{left:18,w:9,h:15,delay:"0s"},{left:40,w:7,h:12,delay:"0.9s"},{left:60,w:9,h:14,delay:"1.8s"}].map((s,i) => (
                <div key={i} className="steam" style={{ position:"absolute", bottom:0, left:s.left, width:s.w, height:s.h, borderRadius:"50% 50% 50% 50% / 60% 60% 40% 40%", background:"rgba(255,255,255,0.6)", filter:"blur(2.5px)", animationDelay:s.delay, opacity:mugHover?1:0.45, transition:"opacity 250ms ease" }} />
              ))}
            </div>
            <div
              style={{ width:"100%", height:"100%", cursor:"pointer", opacity:dim("mug"), transition:"opacity 250ms ease, transform 250ms ease, box-shadow 250ms ease, filter 250ms ease", transform:`translateY(${mugHover?-4:0}px) scale(${cs("mug")})`, filter:mugHover?"brightness(1.04)":"brightness(1)", boxShadow:mugHover?"222px 157px 76px 0px rgba(0,0,0,0.08),142px 88px 84px 0px rgba(0,0,0,0.1),80px 56px 59px 0px rgba(0,0,0,0.14),35px 25px 43px 0px rgba(0,0,0,0.12),9px 6px 24px 0px rgba(0,0,0,0.22),0px 8px 22px rgba(0,0,0,0.14)":"222px 157px 76px 0px rgba(0,0,0,0.08),142px 88px 84px 0px rgba(0,0,0,0.08),80px 56px 59px 0px rgba(0,0,0,0.1),35px 25px 43px 0px rgba(0,0,0,0.09),9px 6px 24px 0px rgba(0,0,0,0.15)", position:"relative" }}
              onMouseEnter={() => setHovered("mug")}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick("mug")}
            >
              <img alt="" style={{ position:"absolute", inset:0, maxWidth:"none", objectFit:"contain", pointerEvents:"none", width:"100%", height:"100%" }} src={imgFrame3} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
