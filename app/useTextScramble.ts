import { useEffect, useRef, useState } from "react";

interface UseTextScrambleOptions {
  targetText: string;
  scrambleDuration?: number; // ms (default: 800)
  pauseDuration?: number; // ms (default: 4500)
  enabled?: boolean; // respect prefers-reduced-motion automatically
}

/**
 * Premium text scramble animation hook
 * Animates text by scrambling it with random letters and locking in characters left-to-right
 * Perfect for high-end portfolio websites
 */
export function useTextScramble({
  targetText,
  scrambleDuration = 800,
  pauseDuration = 4500,
  enabled = true,
}: UseTextScrambleOptions) {
  const [displayText, setDisplayText] = useState(targetText);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const phaseRef = useRef<"scramble" | "pause">("scramble");
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Generate a random letter (uppercase or lowercase)
  const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return letters[Math.floor(Math.random() * letters.length)];
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

      if (phaseRef.current === "scramble") {
        // Scramble phase
        if (elapsed < scrambleDuration) {
          // Calculate progress (0 to 1)
          const progress = elapsed / scrambleDuration;

          // Calculate how many characters should be locked in
          // Lock in characters from left to right based on progress
          const lockedCount = Math.floor(progress * targetText.length);

          // Build the display text
          let newText = "";
          for (let i = 0; i < targetText.length; i++) {
            if (i < lockedCount) {
              // This character is locked in
              newText += targetText[i];
            } else {
              // This character is scrambling
              newText += getRandomLetter();
            }
          }

          setDisplayText(newText);

          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Scramble phase complete
          setDisplayText(targetText);
          phaseRef.current = "pause";
          startTimeRef.current = currentTime;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      } else if (phaseRef.current === "pause") {
        // Pause phase
        if (elapsed < pauseDuration) {
          // Keep the text steady
          setDisplayText(targetText);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Pause phase complete, restart
          phaseRef.current = "scramble";
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
