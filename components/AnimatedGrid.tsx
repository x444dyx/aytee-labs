"use client";

import { useEffect, useRef } from "react";

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let width  = window.innerWidth;
    let height = window.innerHeight;
    canvas.width  = width;
    canvas.height = height;

    const SPACING   = 60;
    const INFLUENCE = 120; // px radius of mouse effect
    const MAX_SHIFT = 12;  // max px a grid point can shift

    function onResize() {
      width  = window.innerWidth;
      height = window.innerHeight;
      canvas!.width  = width;
      canvas!.height = height;
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth   = 1;

      const cols = Math.ceil(width  / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const mx   = mouseRef.current.x;
      const my   = mouseRef.current.y;

      // Build grid points with distortion
      const pts: { x: number; y: number }[][] = [];
      for (let r = 0; r <= rows; r++) {
        pts[r] = [];
        for (let c = 0; c <= cols; c++) {
          const bx = c * SPACING;
          const by = r * SPACING;
          const dx = bx - mx;
          const dy = by - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const factor = Math.max(0, 1 - dist / INFLUENCE);
          // Push away from cursor
          const ox = (dx / (dist || 1)) * factor * MAX_SHIFT * -1;
          const oy = (dy / (dist || 1)) * factor * MAX_SHIFT * -1;
          pts[r][c] = { x: bx + ox, y: by + oy };
        }
      }

      // Draw horizontal lines
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const p = pts[r][c];
          c === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath();
        for (let r = 0; r <= rows; r++) {
          const p = pts[r][c];
          r === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
    }

    let rafId: number;
    function loop() {
      draw();
      rafId = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("resize", onResize);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
