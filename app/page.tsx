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

		  	    <motion.div
	      initial={{ opacity: 0, y: 8 }}
	      animate={{ opacity: 1, y: 0 }}
	      transition={{ duration: 0.6 }}
	      className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest uppercase text-white/50"
	    >
	      <motion.span
	        animate={{ opacity: [0.5, 1, 0.5] }}
	        transition={{ duration: 2, repeat: Infinity }}
	        className="h-2 w-2 rounded-full bg-emerald-400"
	      />
	      9+ Years In Tech
	    </motion.div>
	
	    <Reveal delay={0.06}>
	      <h1 className="font-serif leading-[0.9] text-[clamp(3.5rem,9vw,8rem)] tracking-tight">
	        Adil Aslam
	      </h1>
	    </Reveal>
	
	    <Reveal delay={0.12}>
	      <p className="mt-4 text-xs uppercase tracking-[0.28em] text-yellow-400/80 md:text-sm">
	        Founder — AyTee Labs
	      </p>
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
                <a href="/blog" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Blog
                </a>
                <a href="#contact" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                  Contact
                </a>
              </div>
            </Reveal>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto w-full max-w-5xl px-5 pb-20">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-10 shadow-soft">
            <h2 className="text-xl font-semibold">Hey, I'm Adil.</h2>

            <div className="mt-3 space-y-4 text-muted">
              <p>
                I’m a Software Test Lead with 9+ years shaping quality across fast-moving engineering teams, from hands-on automation to leading QA strategy at the product and organisational level.
              </p>
              <p>
                I specialise in building quality systems that scale. Designing automation frameworks from the ground up, embedding testing into CI/CD pipelines, and introducing structured evaluation practices for AI and LLM-powered features where traditional approaches break down.
              </p>
              <p>
                Beyond the day job, I build and ship independent products under AyTee Labs, from developer tooling and AI infrastructure to iOS apps and a Chromium-based browser. It keeps me sharp, commercially minded, and connected to the full product lifecycle in a way most QA leads aren’t.
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
                  'Stakeholder Collaboration',
                  'Risk-Based Testing',
                  'Regression Planning',
                  'Test Case Design',
                  'Root Cause Analysis',
                  'Agile / Scrum',
                  'Sprint Planning',
                  'Cross-Squad QA',
                  'LLM Evaluation',
                  'AI Behaviour Testing',
                  'Hallucination Detection',
                  'Prompt Consistency Testing',
                  'Non-Deterministic Testing',
                  'Test Harness Design',
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
                  'Swift',
                  'C++ (learning)',
                  'SQL',
                  'HTML / CSS',
                  'XML',
                  'API Testing',
                  'REST / JSON',
                  'WebSockets',
                  'Selenium',
                  'Playwright',
                  'pytest',
                  'NumPy',
                  'Jira',
                  'Framework Design',
                  'Logging & Reporting',
                  'CI/CD Awareness',
                  'GitHub Actions',
                  'Git',
                  'npm / pip',
                  'PM2',
                  'NGINX',
                  'Oracle Cloud',
                  'Vercel',
                  'Cloudflare',
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
                  'Tailwind CSS',
                  'Framer Motion',
                  'HTML / CSS',
                  'Chrome Extensions',
                  'Swift',
                  'SwiftUI',
                  'SpriteKit',
                  'iOS Development',
                  'Chromium',
                  'Browser Engineering',
                  'AI Workspace Architecture',
                  'LLM Orchestration',
                  'Persistent Memory Systems',
                  'Context Engineering',
                  'Cross-Model Routing',
                  'OpenAI API',
                  'Google Gemini API',
                  'IndexedDB / Dexie.js',
                  'Node.js',
                  'Express',
                  'WebSockets',
                  'Vercel',
                  'Cloudflare',
                  'NGINX',
                  'Oracle Cloud VM',
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
              {/* LinkedIn */}
              <a
                className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition"
                href="https://www.linkedin.com/in/adilaslam/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition"
                href="https://x.com/x444dyx"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition"
                href="mailto:adil786123@hotmail.co.uk"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
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
