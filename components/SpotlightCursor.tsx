"use client";

import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId: number;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function animate() {
      // Smooth lerp follow
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      el!.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(250,204,21,0.07), rgba(250,204,21,0.03) 30%, transparent 70%)`;

      rafId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
}
