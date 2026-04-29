"use client";

import { useState, useEffect, useRef } from "react";

interface SkillTagProps {
  label: string;
  tooltip?: string;
  index?: number; // for stagger delay
}

export default function SkillTag({ label, tooltip, index = 0 }: SkillTagProps) {
  const [visible, setTooltipVisible] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger delay based on index
          setTimeout(() => setRevealed(true), index * 30);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <span
      ref={ref}
      className="relative rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text cursor-default select-none transition-all duration-300"
      style={{
        opacity:   revealed ? 1 : 0,
        transform: revealed ? "translateY(0px)" : "translateY(8px)",
      }}
      onMouseEnter={() => tooltip && setTooltipVisible(true)}
      onMouseLeave={() => setTooltipVisible(false)}
    >
      {label}
      {tooltip && visible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] rounded-lg border border-white/10 bg-[#0b0f14] px-3 py-2 text-[11px] text-white/70 leading-relaxed shadow-xl z-50 pointer-events-none text-center">
          {tooltip}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/10" />
        </span>
      )}
    </span>
  );
}
