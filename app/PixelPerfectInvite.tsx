import { useEffect, useRef, useState } from "react";
import catImg from "@/imports/PixelPerfect/cat.png";
import thumbImg from "@/imports/PixelPerfect/thumbnail.png";

/**
 * Floating PIXEL PERFECT invitation.
 *
 * Pigmi the cat hides behind the right edge of the viewport (bottom-right),
 * now and then peeks out a little, and on hover (desktop) / tap (touch)
 * slides a small speech bubble out from behind itself: a short headline and
 * the game thumbnail, which opens the game in a new tab.
 *
 * - Only the cat (and the open bubble) take pointer events; the rest of the
 *   fixed layer is click-through, so it never blocks page content.
 * - Closes on pointer leave (desktop), outside tap/click, or Escape.
 * - prefers-reduced-motion: no idle peeking, no sliding — the bubble just
 *   fades in/out.
 */

const GAME_URL = "https://matoy7.github.io/pixel-perfect/";

// cat.png is 170×300; its flat "hiding" edge is at x=153 (the paw on the
// right overlaps that edge, as if gripping the side of the screen).
const CAT_RATIO = 170 / 300;
const CAT_EDGE = 153 / 170;

const CSS = `
.ppi {
  --ppi-cat-h: 116px;
  --ppi-lav: #f4f1ff;
  --ppi-rest: 44%;  /* resting: head + one eye peeking, body behind the edge */
  position: fixed;
  right: 0;
  bottom: 28px;
  z-index: 55;
  pointer-events: none;
  font-family: Inter, sans-serif;
}
@media (max-width: 767.98px) {
  .ppi { --ppi-cat-h: 84px; bottom: 18px; }
}

/* ---------- cat ---------- */
.ppi-cat {
  position: relative;
  z-index: 2;
  display: block;
  height: var(--ppi-cat-h);
  width: calc(var(--ppi-cat-h) * ${CAT_RATIO});
  /* push the transparent strip right of the flat edge off-screen, so the
     body's edge sits exactly on the viewport edge */
  margin-right: calc(var(--ppi-cat-h) * ${CAT_RATIO} * ${(1 - CAT_EDGE).toFixed(4)} * -1);
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  transform: translateX(var(--ppi-rest));
  /* thin white "sticker" edge so the black cat stays readable on dark sections */
  filter: drop-shadow(1px 0 0 #fff) drop-shadow(-1px 0 0 #fff) drop-shadow(0 1px 0 #fff) drop-shadow(0 -1px 0 #fff);
  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}
.ppi-cat img {
  display: block;
  width: 100%;
  height: 100%;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
.ppi-cat:focus-visible { outline: 2px solid #8b7cf6; outline-offset: 4px; border-radius: 16px; }

/* idle: every ~7s peek out a little, hold, slip back */
.ppi:not(.is-open) .ppi-cat { animation: ppi-peek 7s ease-in-out 2.5s infinite; }
@keyframes ppi-peek {
  0%, 62%, 100% { transform: translateX(var(--ppi-rest)); }
  70%           { transform: translateX(12%) rotate(-4deg); }
  80%           { transform: translateX(15%) rotate(1deg); }
  88%           { transform: translateX(var(--ppi-rest)); }
}
.ppi.is-open .ppi-cat { transform: translateX(0); }

/* ---------- bubble ---------- */
.ppi-bubble {
  position: absolute;
  z-index: 1;
  right: calc(var(--ppi-cat-h) * 0.4);
  bottom: calc(var(--ppi-cat-h) * 0.34);
  width: 228px;
  max-width: calc(100vw - var(--ppi-cat-h) * 0.4 - 16px);
  box-sizing: border-box;
  padding: 16px 16px 14px;
  border-radius: 24px;
  background: #fff;
  /* the lavender accent: a whisper of tint around the white card */
  box-shadow: 0 0 0 6px var(--ppi-lav), 0 10px 30px rgba(110, 90, 220, 0.08);
  direction: ltr;
  text-align: left;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  transform-origin: 100% 100%;
  transform: translateX(56px) scale(0.86);
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease,
    visibility 0s linear 0.45s;
}
.ppi.is-open .ppi-bubble {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
  transform: none;
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.06s,
    opacity 0.25s ease 0.06s,
    visibility 0s;
}
@media (max-width: 767.98px) {
  .ppi-bubble { width: 212px; padding: 14px 14px 12px; border-radius: 22px; }
}

.ppi-title {
  margin: 0 2px 12px;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
  color: #0a0a0a;
  letter-spacing: 0;
}
@media (max-width: 767.98px) { .ppi-title { font-size: 15px; margin-bottom: 10px; } }

.ppi-thumb {
  display: block;
  border-radius: 14px;
  outline: none;
  transition: transform 0.25s ease;
}
.ppi-thumb img { display: block; width: 100%; height: auto; }
@media (hover: hover) { .ppi-thumb:hover { transform: translateY(-2px); } }
.ppi-thumb:active { transform: scale(0.98); }
.ppi-thumb:focus-visible { box-shadow: 0 0 0 2px #fff, 0 0 0 4px #8b7cf6; }

/* ---------- reduced motion ---------- */
@media (prefers-reduced-motion: reduce) {
  .ppi:not(.is-open) .ppi-cat { animation: none; }
  .ppi-cat { transition: none; }
  .ppi-bubble, .ppi.is-open .ppi-bubble { transform: none; transition: opacity 0.2s ease, visibility 0s linear 0.2s; }
  .ppi.is-open .ppi-bubble { transition: opacity 0.2s ease, visibility 0s; }
  .ppi-thumb, .ppi-thumb:hover, .ppi-thumb:active { transform: none; transition: none; }
}
`;

export default function PixelPerfectInvite() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  // true on devices with a real hover pointer (mouse / trackpad)
  const canHover = useRef(
    typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );

  // Close on outside pointer-down or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const hoverOpen = () => {
    if (!canHover.current) return;
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    if (!canHover.current) return;
    window.clearTimeout(closeTimer.current);
    // small grace period so moving from cat to bubble doesn't flicker
    closeTimer.current = window.setTimeout(() => setOpen(false), 220);
  };

  return (
    <div
      ref={rootRef}
      className={`ppi${open ? " is-open" : ""}`}
      onMouseLeave={hoverClose}
    >
      <style>{CSS}</style>

      <div
        className="ppi-bubble"
        id="ppi-bubble"
        role="dialog"
        aria-label="PIXEL PERFECT"
        aria-hidden={!open}
        onMouseEnter={hoverOpen}
      >
        <p className="ppi-title">Psst... check out this fun little thing I made.</p>
        <a
          className="ppi-thumb"
          href={GAME_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          aria-label="Play PIXEL PERFECT (opens in a new tab)"
          onClick={() => setOpen(false)}
        >
          <img src={thumbImg} alt="PIXEL PERFECT" draggable={false} />
        </a>
      </div>

      <button
        type="button"
        className="ppi-cat"
        aria-expanded={open}
        aria-controls="ppi-bubble"
        aria-label="Psst... check out this fun little thing I made."
        onMouseEnter={hoverOpen}
        onClick={() => {
          // Touch: tap toggles. Mouse: hover already opened it; a click keeps it open.
          if (canHover.current) setOpen(true);
          else setOpen((o) => !o);
        }}
      >
        <img src={catImg} alt="" draggable={false} />
      </button>
    </div>
  );
}
