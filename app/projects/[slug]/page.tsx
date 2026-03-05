'use client'

import { projects } from '../../../data/projects'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <Link href="/" className="mt-6 inline-block text-sm underline">
            Back to home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen project-scroll">

      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="grain" />

      <section className="project-section min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">

        <Link
          href="/"
          className="fixed top-8 left-8 z-50 text-sm tracking-wide text-white/50 hover:text-white transition"
        >
          ← Back
        </Link>

        <p className="text-xs tracking-widest uppercase text-white/40 mb-6">
          {project.category} / {project.year}
        </p>

        <h1 className="text-[clamp(3rem,6vw,6rem)] font-serif leading-tight">
          {project.title}
        </h1>

        <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed">
          {project.blurb}
        </p>

        <Link
          href="#overview"
          className="mt-16 text-xs uppercase tracking-widest text-white/40 flex items-center gap-2 cursor-pointer"
        >
          Explore
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </Link>

      </section>

      <section
        id="overview"
        className="project-section min-h-screen flex items-center px-6 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-20 w-full">

          <div>
            <h2 className="text-5xl font-serif mb-10">
              The Mission
            </h2>

            <p className="text-white/60 leading-relaxed text-lg">
              {project.mission}
            </p>

            <p className="text-white/50 leading-relaxed text-base mt-8">
              {project.overview}
            </p>
          </div>

          <div className="border-l border-white/10 pl-12 space-y-14">

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                Status
              </p>
              <p className="text-4xl font-serif">
                {project.status}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                Impact
              </p>
              <p className="text-2xl font-serif text-white/80">
                {project.impact}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                Category
              </p>
              <p className="text-2xl font-serif text-white/80">
                {project.category}
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="project-section min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto">

        <h2 className="text-5xl font-serif mb-20">
          Core Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-20">
          {project.tags.map((tag) => (
            <div key={tag} className="space-y-6">
              <div className="h-px bg-white/10 w-full" />
              <h3 className="text-2xl font-serif">{tag}</h3>
            </div>
          ))}
        </div>

      </section>

    </main>
  )
}