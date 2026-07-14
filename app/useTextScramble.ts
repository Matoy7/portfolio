import { useEffect, useRef, useState } from "react";

interface UseTextScrambleOptions {
  targetText: string;
  scrambleDuration?: number; // ms (default: 2800)
  updateInterval?: number; // ms between character updates (default: 50)
  pauseDuration?: number; // ms (default: 5000)
  enabled?: boolean; // respect prefers-reduced-motion automatically
}

/**
 * Premium text scramble animation hook
 * All characters shuffle simultaneously, then resolve at the same moment
 * Creates an elegant, lively "shuffling" effect
 */
export function useTextScramble({
  targetText,
  scrambleDuration = 2800,
  updateInterval = 50,
  pauseDuration = 5000,
  enabled = true,
}: UseTextScrambleOptions) {
  const [displayText, setDisplayText] = useState(targetText);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const phaseRef = useRef<"scramble" | "pause">("scramble");
  const prefersReducedMotionRef = useRef<boolean>(false);
  const lastUpdateRef = useRef<number>(0);

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
        lastUpdateRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;

      if (phaseRef.current === "scramble") {
        // Scramble phase - all characters update simultaneously
        if (elapsed < scrambleDuration) {
          // Update characters every `updateInterval` milliseconds
          if (currentTime - lastUpdateRef.current >= updateInterval) {
            lastUpdateRef.current = currentTime;

            // Generate new random text for all characters
            let newText = "";
            for (let i = 0; i < targetText.length; i++) {
              const char = targetText[i];
              // If it's a space, keep it as space
              if (char === " ") {
                newText += " ";
              } else {
                // Replace with random letter
                newText += getRandomLetter();
              }
            }

            setDisplayText(newText);
          }

          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Scramble phase complete - reveal the actual text
          setDisplayText(targetText);
          phaseRef.current = "pause";
          startTimeRef.current = currentTime;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      } else if (phaseRef.current === "pause") {
        // Pause phase - keep the text steady
        if (elapsed < pauseDuration) {
          setDisplayText(targetText);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Pause phase complete, restart
          phaseRef.current = "scramble";
          startTimeRef.current = 0;
          lastUpdateRef.current = 0;
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
  }, [targetText, scrambleDuration, updateInterval, pauseDuration, enabled]);

  return displayText;
}
