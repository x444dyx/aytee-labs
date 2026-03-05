'use client'

import { useState } from 'react'

type GlowCardProps = {
  children: React.ReactNode
  accent?: 'blue' | 'green' | 'gold'
  className?: string
}

export default function GlowCard({
  children,
  accent = 'gold',
  className = '',
}: GlowCardProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const themes = {
    blue: {
      gradient: 'from-blue-500/40 via-yellow-400/10 to-transparent',
      glow: 'rgba(250,204,21,0.25)',
    },
    green: {
      gradient: 'from-emerald-500/40 via-yellow-400/10 to-transparent',
      glow: 'rgba(250,204,21,0.25)',
    },
    gold: {
      gradient: 'from-yellow-500/30 via-yellow-400/10 to-transparent',
      glow: 'rgba(250,204,21,0.25)',
    },
  }

  const theme = themes[accent]

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f14] p-6 transition-all duration-300 group-hover:border-yellow-500/50 ${className}`}
    >
      {/* Border Glow */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            boxShadow: `0 0 80px ${theme.glow}`,
          }}
        />
      )}

      {/* Top Gradient */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${theme.gradient} opacity-0 transition-opacity duration-500 ${
          hovered ? 'opacity-100' : ''
        }`}
      />

      {/* Mouse Radial */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 45%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  )
}