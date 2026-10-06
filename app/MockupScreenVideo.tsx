import { useEffect, useRef } from "react";

/**
 * Plays a screen recording inside the screen of an Alma phone-mockup PNG.
 *
 * The onboarding mockups are 1047×1104 PNGs whose phone screen sits at
 * x 384–663, y 251–853 (279×602) with a 32px corner radius — measured from
 * the PNGs. The video is placed over exactly that rectangle, in percentages
 * of the mockup, so it inherits the mockup's position, size and scaling at
 * every viewport. The device frame stays the original PNG; only the screen
 * plays.
 *
 * Usage: render inside a box that has the same size/position as the mockup
 * <img> (same Tailwind classes), next to the image.
 */
const MOCKUP_W = 1047;
const MOCKUP_H = 1104;
const SCREEN = { x: 384, y: 251, w: 279, h: 602, radius: 32 };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

/** `mp4` (H.264) plays everywhere mainstream; `webm` (VP9) is a fallback for
 * browsers built without H.264 (some Linux Chromium builds). */
export default function MockupScreenVideo({ mp4, webm }: { mp4: string; webm?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't reflect `muted` as an attribute; iOS Safari requires it
    // for autoplay, so set it on the element directly.
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");

    // Respect reduced-motion: stay on the first frame (identical to the
    // original static screen).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    // Only play while on screen — saves battery/CPU on long pages.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
      disablePictureInPicture
      style={{
        position: "absolute",
        left: pct(SCREEN.x, MOCKUP_W),
        top: pct(SCREEN.y, MOCKUP_H),
        width: pct(SCREEN.w, MOCKUP_W),
        height: pct(SCREEN.h, MOCKUP_H),
        objectFit: "cover",
        borderRadius: `${pct(SCREEN.radius, SCREEN.w)} / ${pct(SCREEN.radius, SCREEN.h)}`,
        pointerEvents: "none",
        display: "block",
      }}
    >
      <source src={mp4} type="video/mp4" />
      {webm && <source src={webm} type="video/webm" />}
    </video>
  );
}
