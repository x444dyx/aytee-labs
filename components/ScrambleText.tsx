"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number; // ms before scramble starts
  duration?: number; // ms for full scramble resolve
  tag?: keyof JSX.IntrinsicElements;
}

export default function ScrambleText({
  text,
  className,
  delay = 0,
  duration = 1200,
  tag: Tag = "span",
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef    = useRef(0);
  const totalFrames = Math.floor(duration / 30);

  useEffect(() => {
    const timeout = setTimeout(() => {
      frameRef.current = 0;

      intervalRef.current = setInterval(() => {
        frameRef.current++;
        const progress = frameRef.current / totalFrames;

        // How many characters have resolved (left to right)
        const resolved = Math.floor(progress * text.length);

        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplay(next);

        if (frameRef.current >= totalFrames) {
          setDisplay(text);
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, delay, duration, totalFrames]);

  return (
    // @ts-ignore
    <Tag className={className} aria-label={text}>
      {display}
    </Tag>
  );
}
