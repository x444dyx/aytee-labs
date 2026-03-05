'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const isCompany = project.category === 'Company'

  const theme = isCompany
    ? {
        dot: 'bg-blue-400',
        gradient:
          'from-purple-500/40 via-yellow-400/10 to-transparent',
        border: 'group-hover:border-yellow-500/50',
        glow: 'rgba(250,204,21,0.25)',
      }
    : {
        dot: 'bg-emerald-400',
        gradient:
          'from-emerald-500/40 via-yellow-400/10 to-transparent',
        border: 'group-hover:border-yellow-500/40',
        glow: 'rgba(250,204,21,0.25)',
      }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          onMouseMove={handleMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f14] p-8 transition-all duration-300 ${theme.border}`}
        >
          {/* GOLD BORDER GLOW (only on hover) */}
          {hovered && (
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                boxShadow: `0 0 80px ${theme.glow}`,
              }}
            />
          )}

          {/* TOP GRADIENT (fade in on hover) */}
          <div
            className={`pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${theme.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* MOUSE RADIAL LIGHT */}
          {hovered && (
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.06), transparent 45%)`,
              }}
            />
          )}

          {/* CONTENT */}
          <div className="relative z-10">

            {/* Top Row */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                <span>{project.category}</span>
              </div>
              <span>{project.year}</span>
            </div>

            {/* Separator */}
            <div className="mt-5 h-px w-full bg-white/5" />

            {/* Title + Arrow */}
            <div className="mt-6 flex items-start justify-between">
              <h3 className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400">
                {project.title}
              </h3>

              <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                ↗
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {project.blurb}
            </p>

            {/* Bottom Separator */}
            <div className="mt-6 h-px w-full bg-white/5" />

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between text-sm">
              <span
                className={
                  project.status === 'Live'
                    ? 'text-emerald-400'
                    : project.status === 'In Flight'
                    ? 'text-yellow-400'
                    : 'text-white/50'
                }
              >
                {project.status}
              </span>

              <span className="text-white/50 transition-colors duration-300 group-hover:text-white">
                View
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}