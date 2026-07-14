import { useEffect, useRef, useState } from "react";

interface UseTextScrambleOptions {
  targetText: string;
  scrambleDuration?: number; // ms (default: 3000)
  pauseDuration?: number; // ms (default: 5000)
  enabled?: boolean; // respect prefers-reduced-motion automatically
}

/**
 * Elegant premium text animation hook
 * Characters morph through visually similar letterforms and progressively resolve
 * Creates an intelligent, refined "coming into focus" effect
 * Matches the sophisticated animation style of luxury brand websites
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

  // Proximity maps - characters ordered from visually similar to target
  // Each sequence ends with the target character itself
  const proximityMap: Record<string, string[]> = {
    // Uppercase
    "A": ["V", "H", "R", "N", "U", "T", "A"],
    "B": ["P", "D", "R", "L", "E", "F", "B"],
    "C": ["G", "O", "Q", "U", "C"],
    "D": ["O", "B", "P", "R", "D"],
    "E": ["F", "L", "B", "H", "E"],
    "F": ["E", "L", "T", "F"],
    "G": ["C", "O", "Q", "G"],
    "H": ["N", "M", "U", "H"],
    "I": ["L", "T", "J", "I"],
    "J": ["I", "L", "J"],
    "K": ["X", "Y", "K"],
    "L": ["I", "T", "F", "L"],
    "M": ["N", "W", "U", "M"],
    "N": ["M", "H", "U", "N"],
    "O": ["Q", "C", "P", "I", "O"],
    "P": ["R", "B", "D", "O", "P"],
    "Q": ["O", "C", "G", "Q"],
    "R": ["P", "B", "T", "R"],
    "S": ["Z", "X", "Y", "S"],
    "T": ["Y", "R", "L", "F", "T"],
    "U": ["V", "Y", "H", "N", "U"],
    "V": ["U", "Y", "A", "V"],
    "W": ["M", "U", "V", "W"],
    "X": ["Y", "K", "Z", "X"],
    "Y": ["X", "Z", "T", "U", "V", "Y"],
    "Z": ["S", "X", "Y", "Z"],
    // Lowercase
    "a": ["v", "n", "u", "r", "a"],
    "b": ["p", "d", "o", "b"],
    "c": ["o", "e", "c"],
    "d": ["o", "b", "p", "d"],
    "e": ["c", "o", "a", "e"],
    "f": ["t", "l", "f"],
    "g": ["o", "q", "g"],
    "h": ["n", "u", "h"],
    "i": ["l", "j", "i"],
    "j": ["i", "l", "j"],
    "k": ["x", "k"],
    "l": ["i", "t", "f", "l"],
    "m": ["n", "u", "w", "m"],
    "n": ["m", "u", "h", "n"],
    "o": ["c", "e", "p", "q", "o"],
    "p": ["o", "d", "b", "p"],
    "q": ["o", "p", "q"],
    "r": ["t", "b", "r"],
    "s": ["z", "x", "s"],
    "t": ["l", "f", "t"],
    "u": ["v", "n", "u"],
    "v": ["u", "y", "v"],
    "w": ["m", "u", "v", "w"],
    "x": ["y", "z", "x"],
    "y": ["x", "v", "y"],
    "z": ["s", "x", "z"],
  };

  // Get the proximity sequence for a character
  const getProximitySequence = (char: string): string[] => {
    if (char === " ") return [" "];
    return proximityMap[char] || [char];
  };

  // Get character at a given progress point
  // Implements progressive resolution where characters gradually lock in
  const getCharAtProgress = (
    char: string,
    globalProgress: number,
    positionIndex: number,
    totalLength: number
  ): string => {
    if (char === " ") return " ";

    const sequence = getProximitySequence(char);
    if (sequence.length <= 1) return char;

    // Calculate when this character should fully resolve
    // Early positions resolve first, creating a wave effect
    const resolutionTime =
      0.1 + (0.85 * positionIndex) / Math.max(totalLength - 1, 1);

    // If we've passed the resolution time, show the correct character
    if (globalProgress >= resolutionTime) {
      return char;
    }

    // Before resolution: show intermediate character from sequence
    // localProgress: 0 = start of resolution window, 1 = end
    const localProgress = globalProgress / resolutionTime;

    // Index into the sequence: progresses from start to end
    const sequenceIndex = Math.floor(localProgress * (sequence.length - 1));
    return sequence[Math.min(sequenceIndex, sequence.length - 1)];
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
          // Calculate progress: 0 to 1
          const progress = elapsed / scrambleDuration;

          // Generate text for this frame
          let newText = "";
          for (let i = 0; i < targetText.length; i++) {
            const char = targetText[i];
            newText += getCharAtProgress(char, progress, i, targetText.length);
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
        // Pause phase - keep text static
        if (elapsed < pauseDuration) {
          setDisplayText(targetText);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          // Pause complete - restart animation
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
