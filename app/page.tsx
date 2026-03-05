'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import GlowCard from '@/components/GlowCard'

/* -------- Animated Counter -------- */
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 900
    const stepTime = 16
    const increment = end / (duration / stepTime)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count}+</span>
}

export default function Home() {
  const { scrollYProgress } = useScroll()

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <main className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="grain" />

      <Nav />

      {/* HERO */}
      <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-5">
        <motion.div style={{ opacity: heroOpacity, y: heroY }} className="w-full max-w-5xl">

          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest uppercase text-white/50"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-emerald-400"
            />
            9+ Years In Tech
          </motion.div>

          <Reveal>
            <div className="flex items-center gap-5">
              <img src="/logo.png" alt="AyTee Labs Logo" className="h-24 w-auto" />
              <div className="leading-tight">
                <p className="text-4xl font-semibold tracking-tight text-text">
                  Adil Aslam
                </p>
                <p className="text-sm text-muted tracking-wide">
                  Founder — AyTee Labs
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={0.06}>
              <h1 className="font-serif leading-[0.9] text-[clamp(3.5rem,9vw,8rem)] tracking-tight">
                Build. Refine. Ship.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
                <span className="text-text">Quality Engineering Lead</span> &amp; Product Developer.
                I design & test quality systems, build automation frameworks, and ship web + iOS products.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition">
                  View Projects
                </a>
                <a href="#stack" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Skills & Stack
                </a>
                <a href="#contact" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Contact
                </a>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto w-full max-w-5xl px-5 pb-20">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-10 shadow-soft">
            <h2 className="text-xl font-semibold">Hey, I'm Adil.</h2>

            <div className="mt-3 space-y-4 text-muted">
              <p>
                I’m a Software Test Lead at Panintelligence with 9+ years in Quality Engineering and 5+ years designing automation frameworks for production systems.
              </p>
              <p>
                My career began in manual testing, where I developed a deep understanding of system behaviour and risk. I transitioned into automation engineering, building frameworks from scratch and scaling structured testing practices across delivery pipelines.
              </p>
              <p>
                Today, I lead quality strategy in AI-driven and production environments — including testing LLM-based systems — while building independent web and iOS products under AyTee Labs.
              </p>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
              <GlowCard accent="gold" className="p-4">
                <p className="text-2xl font-semibold"><Counter end={9} /></p>
                <p className="text-xs text-white/60 mt-1">Years in QA</p>
              </GlowCard>

              <GlowCard accent="gold" className="p-4">
                <p className="text-2xl font-semibold"><Counter end={5} /></p>
                <p className="text-xs text-white/60 mt-1">Years in Automation</p>
              </GlowCard>

              <GlowCard accent="gold" className="p-4">
                <p className="text-2xl font-semibold">AI</p>
                <p className="text-xs text-white/60 mt-1">LLM System Testing</p>
              </GlowCard>

              <GlowCard accent="gold" className="p-4">
                <p className="text-2xl font-semibold"><Counter end={2} /></p>
                <p className="text-xs text-white/60 mt-1">Independent Apps Built</p>
              </GlowCard>

              <GlowCard accent="gold" className="p-4">
                <p className="text-2xl font-semibold">Lead</p>
                <p className="text-xs text-white/60 mt-1">Production Quality Strategy</p>
              </GlowCard>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STACK */}
      <section id="stack" className="mx-auto w-full max-w-5xl px-5 pb-24">
        <Reveal>
          <h2 className="text-2xl font-semibold">Skills & Stack</h2>
          <p className="mt-2 text-muted">
            Technologies and systems I actively use across QA leadership and product development.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {/* QA */}
          <Reveal>
            <GlowCard accent="blue">
              <p className="font-medium">Quality & Delivery</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Test Strategy',
                  'Exploratory Testing',
                  'Defect Triage',
                  'Release Confidence',
                  'Stakeholder Collaboration'
                ].map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text">
                    {it}
                  </span>
                ))}
              </div>
            </GlowCard>
          </Reveal>

          {/* AUTOMATION */}
          <Reveal delay={0.08}>
            <GlowCard accent="gold">
              <p className="font-medium">Automation & Languages</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Python',
                  'JavaScript',
                  'TypeScript',
                  'API Testing',
                  'Framework Design',
                  'Logging & Reporting',
                  'CI/CD Awareness'
                ].map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text">
                    {it}
                  </span>
                ))}
              </div>
            </GlowCard>
          </Reveal>

          {/* PRODUCT */}
          <Reveal delay={0.16}>
            <GlowCard accent="green">
              <p className="font-medium">Product Development</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
					  'Next.js',
					  'React',
					  'TypeScript',
					  'Chrome Extensions',
					  'Vercel',
					  'Tailwind',
					  'Swift / SpriteKit',
					  'AI Workspace Architecture',
					  'LLM Orchestration',
					  'Persistent Memory Systems'
                ].map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-text">
                    {it}
                  </span>
                ))}
              </div>
            </GlowCard>
          </Reveal>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto w-full max-w-5xl px-5 pb-24">
        <Reveal>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-2 text-muted">Production builds and active in-flight projects.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-5 pb-28">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-10 shadow-soft">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-2 text-muted">
              Open to collaboration, product discussions, or quality engineering conversations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
 
<a
  className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
  href="https://www.linkedin.com/in/adilaslam/"
  target="_blank"
  rel="noreferrer"
>
  LinkedIn
</a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex items-center justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} AyTee Labs</span>
          <a href="#top" className="hover:text-text">Back to top ↑</a>
        </div>
      </section>
    </main>
  )
}