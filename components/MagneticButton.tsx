"use client";

import { useRef, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number; // how strong the pull is, default 0.3
}

export default function MagneticButton({
  children,
  className,
  href,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const el   = ref.current;
    if (!el) return;
    const rect  = el.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;
    const dx    = (e.clientX - cx) * strength;
    const dy    = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function onMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
    el.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
  }

  function onMouseEnter() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.1s ease";
  }

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </a>
  );
}
