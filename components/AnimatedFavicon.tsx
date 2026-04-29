"use client";

import { useEffect } from "react";

export default function AnimatedFavicon({ faviconPath = "/favicon.ico" }: { faviconPath?: string }) {
  useEffect(() => {
    const SIZE = 128;
    const canvas = document.createElement("canvas");
    canvas.width  = SIZE;
    canvas.height = SIZE;
    const ctx = canvas.getContext("2d")!;

    const logo = new Image();
    logo.src = faviconPath;

    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']")
      || (() => {
          const l = document.createElement("link");
          l.rel = "icon";
          document.head.appendChild(l);
          return l;
        })();

    let angle = 0;

    const interval = setInterval(() => {
      angle += 0.06;

      ctx.clearRect(0, 0, SIZE, SIZE);

      const cx = SIZE / 2;
      const cy = SIZE / 2;
      const r  = SIZE / 2 - 2;

      // Background
      ctx.beginPath();
      ctx.arc(cx, cy, SIZE / 2, 0, Math.PI * 2);
      ctx.fillStyle = "#111111";
      ctx.fill();

      // Logo
      const pad = SIZE * 0.14;
      ctx.drawImage(logo, pad, pad, SIZE - pad * 2, SIZE - pad * 2);

      // Chasing dot on the border
      const dotX = cx + Math.cos(angle) * r;
      const dotY = cy + Math.sin(angle) * r;

      // Glow
      ctx.beginPath();
      ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(250,204,21,0.4)";
      ctx.fill();

      // Bright dot
      ctx.beginPath();
      ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#facc15";
      ctx.fill();

      link.href = canvas.toDataURL("image/png");
    }, 33);

    return () => clearInterval(interval);
  }, [faviconPath]);

  return null;
}
