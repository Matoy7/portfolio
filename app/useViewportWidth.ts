import { useEffect, useState } from "react";

/**
 * Usable viewport width in CSS px — `documentElement.clientWidth`, which
 * excludes the vertical scrollbar. (`window.innerWidth` includes it, so
 * anything sized from it is ~15px too wide on Windows and gets clipped.)
 */
export function getViewportWidth() {
  if (typeof document === "undefined") return 1512;
  return document.documentElement.clientWidth || window.innerWidth;
}

export function useViewportWidth() {
  const [width, setWidth] = useState(getViewportWidth);
  useEffect(() => {
    const update = () => setWidth(getViewportWidth());
    update();
    // ResizeObserver on <html> also catches the scrollbar appearing/disappearing.
    const ro = new ResizeObserver(update);
    ro.observe(document.documentElement);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);
  return width;
}

/** Desktop home page design width (the hero artboard). */
export const HOME_DESIGN_WIDTH = 1512;

/**
 * Scale factor for the desktop home page's fixed-size sections: 1 up to the
 * 1512px design width, then grows proportionally with the viewport — the
 * same rate the hero already scales at — so sections below the hero keep
 * their proportions relative to it on 27"/32"/4K/ultrawide screens.
 */
export function useHomeUpscale() {
  const vw = useViewportWidth();
  return Math.max(1, vw / HOME_DESIGN_WIDTH);
}
