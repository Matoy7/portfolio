import { useEffect, useRef, useState } from "react";

interface UseTextScrambleOptions {
  targetText: string;
  scrambleDuration?: number; // ms (default: 3000)
  pauseDuration?: number; // ms (default: 5000)
  enabled?: boolean; // respect prefers-reduced-motion automatically
}

/**
 * Elegant premium text animation hook
 * Matches the refined, sophisticated style of luxury brand animations
 * Characters cycle through intelligible letterforms in a smooth, wave-like motion
 * Creates a sense of the text "settling" into place rather than chaotic scrambling
 */
export function useTextScramble({
  targetText,
  scrambleDuration = 3000,
  pauseDuration = 5000,
  enabled = true,
}: UseTextScrambleOptions) {
  const [displayText, setDisplayText] = useState(targetText);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const phaseRef = useRef<"animate" | "pause">("animate");
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Character cycles - intelligible, refined progressions
  const characterCycles: Record<string, string[]> = {
    // Uppercase letters
    A: "AHIMTUVWXYZNABCDEFG".split(""),
    B: "BPRDEBFGHIJKLMNOPQR".split(""),
    C: "CEOGLCDEFGHIJKLMNOP".split(""),
    D: "DOPDBCDEFGHIJKLMNPQ".split(""),
    E: "EFHLMNEABCDEFGHIJKL".split(""),
    F: "FTELABCDEFGHIJKLMNO".split(""),
    G: "GCOEQGDEFGHIJKLMNOP".split(""),
    H: "HNUMHABCDEFGHIJKLMN".split(""),
    I: "ILTIJABCDEFGHIJKLMN".split(""),
    J: "JJUABCDEFGHIJKLMNO".split(""),
    K: "KXYVABCDEFGHIJKLMNO".split(""),
    L: "LEFHILABCDEFGHIJKMN".split(""),
    M: "MNWHVMABCDEFGHIJKLM".split(""),
    N: "NMHUNABCDEFGHIJKLMO".split(""),
    O: "OQCEGOPABCDEFGHIJKL".split(""),
    P: "PRBOPABCDEFGHIJKLMN".split(""),
    Q: "QOCEPQABCDEFGHIJKLM".split(""),
    R: "RPBDRABCDEFGHIJKLMN".split(""),
    S: "SCZSOABCDEFGHIJKLMN".split(""),
    T: "TELABCDEFGHIJKLMNOP".split(""),
    U: "UNHUMABCDEFGHIJKLMN".split(""),
    V: "VWYUVABCDEFGHIJKLMN".split(""),
    W: "WMVHWABCDEFGHIJKLMN".split(""),
    X: "XKYVXABCDEFGHIJKLMN".split(""),
    Y: "YVWXYABCDEFGHIJKLMN".split(""),
    Z: "ZSCZABCDEFGHIJKLMNO".split(""),
    // Lowercase letters
    a: "anbcdaeghimnopqrstu".split(""),
    b: "bdhpobcdefghijklmno".split(""),
    c: "ceosbcdefghijklmnop".split(""),
    d: "dbophdbcdefghijklmn".split(""),
    e: "acebdefghijklmnoprs".split(""),
    f: "ftieabcdefghijklmno".split(""),
    g: "gqobdgefghijklmnopq".split(""),
    h: "hnhumabcdefghijklmn".split(""),
    i: "iltijabcdefghijklmn".split(""),
    j: "jijabcdefghijklmnop".split(""),
    k: "kxyzvabcdefghijklmn".split(""),
    l: "liefhabcdefghijklmn".split(""),
    m: "mnwhvmabcdefghijklm".split(""),
    n: "hnumabcdefghijklmno".split(""),
    o: "oqcesofbcdefghijklm".split(""),
    p: "pbhodpabcdefghijklm".split(""),
    q: "qocdepabcdefghijklm".split(""),
    r: "rbopdeabcdefghijklm".split(""),
    s: "szcosabcdefghijklmn".split(""),
    t: "telfbcdefghijklmnop".split(""),
    u: "unhumabcdefghijklmn".split(""),
    v: "vwyuvabcdefghijklmn".split(""),
    w: "wmvhwabcdefghijklmn".split(""),
    x: "xkyvxabcdefghijklmn".split(""),
    y: "yvwxyabcdefghijklmn".split(""),
    z: "zsczabcdefghijklmno".split(""),
  };

  // Smooth easing function (ease-in-out cubic) for natural motion
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Get scrambled character based on progress (0-1)
  const getScrambledChar = (char: string, progress: number): string => {
    if (char === " ") return " ";

    const cycle = characterCycles[char];
    if (!cycle) return char;

    // Progress through the cycle: 0 = start of cycle, 1 = end
    // Characters cycle through intelligible letterforms smoothly
    const cycleIndex = Math.floor(progress * cycle.length) % cycle.length;
    return cycle[cycleIndex];
  };

  // Check if user prefers reduced motion
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    prefersReducedMotionRef.current = prefersReduced;
  }, []);

  // Main animation loop
  useEffect(() => {
    if (!enabled || prefersReducedMotionRef.current) {
      setDisplayText(targetText);
      return;
    }

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;

      if (phaseRef.current === "animate") {
        if (elapsed < scrambleDuration) {
          // Normalize progress: 0 to 1
          const rawProgress = elapsed / scrambleDuration;
          
          // Apply easing for smooth, natural motion
          const eased = easeInOutCubic(rawProgress);

          // Generate scrambled text
          let newText = "";
          for (let i = 0; i < targetText.length; i++) {
            const char = targetText[i];
            // Stagger the animation slightly per character for wave effect (subtle)
            const stagger = (i * 0.02); // 2% stagger per character
            const charProgress = Math.min(1, eased + stagger);
            newText += getScrambledChar(char, charProgress);
          }

          setDisplayText(newText);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Animation complete - show final text
          setDisplayText(targetText);
          phaseRef.current = "pause";
          startTimeRef.current = currentTime;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      } else if (phaseRef.current === "pause") {
        // Pause phase
        if (elapsed < pauseDuration) {
          setDisplayText(targetText);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Restart animation
          phaseRef.current = "animate";
          startTimeRef.current = 0;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetText, scrambleDuration, pauseDuration, enabled]);

  return displayText;
}
