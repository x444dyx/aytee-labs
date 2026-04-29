'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Nav from '@/components/Nav'
import Reveal from '@/components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import GlowCard from '@/components/GlowCard'
import ScrambleText from '@/components/ScrambleText'
import MagneticButton from '@/components/MagneticButton'
import SkillTag from '@/components/SkillTag'

/* -------- Animated Counter -------- */
function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 900
    const stepTime = 16
    const increment = end / (duration / stepTime)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { clearInterval(timer); setCount(end) }
      else setCount(Math.floor(start))
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count}+</span>
}

/* -------- Skill data with tooltips -------- */
const qaSkills = [
  { label: 'Test Strategy',              tooltip: 'Defining end-to-end quality plans aligned to product risk' },
  { label: 'Exploratory Testing',        tooltip: 'Unscripted investigation to surface edge cases and UX issues' },
  { label: 'Defect Triage',              tooltip: 'Prioritising bugs by severity, impact and release risk' },
  { label: 'Release Confidence',         tooltip: 'Sign-off frameworks ensuring safe, predictable deployments' },
  { label: 'Stakeholder Collaboration',  tooltip: 'Working with PMs, devs and leadership on quality goals' },
  { label: 'Risk-Based Testing',         tooltip: 'Focusing effort where failure has the highest business impact' },
  { label: 'Regression Planning',        tooltip: 'Maintaining regression suites that scale with the product' },
  { label: 'Test Case Design',           tooltip: 'Writing clear, reusable test cases from acceptance criteria' },
  { label: 'Root Cause Analysis',        tooltip: 'Digging beyond symptoms to find systemic quality issues' },
  { label: 'Agile / Scrum',             tooltip: 'Embedded QA across sprints, retros and sprint reviews' },
  { label: 'Sprint Planning',            tooltip: 'Sizing and scoping QA tasks within delivery cycles' },
  { label: 'Cross-Squad QA',            tooltip: 'Coordinating quality across multiple product teams' },
  { label: 'Shift-Left Testing',         tooltip: 'Catching defects early in design and development' },
  { label: 'Test Automation Strategy',   tooltip: 'Choosing what to automate, when and at which layer' },
  { label: 'API Contract Testing',       tooltip: 'Validating service interfaces stay consistent over time' },
  { label: 'Accessibility Testing',      tooltip: 'Ensuring products meet WCAG standards for all users' },
  { label: 'Cross-Browser Testing',      tooltip: 'Validating consistent behaviour across browsers and devices' },
  { label: 'Performance Testing',        tooltip: 'Load and stress testing to surface bottlenecks early' },
  { label: 'LLM Evaluation',            tooltip: 'Structured quality evaluation for large language model outputs' },
  { label: 'AI Behaviour Testing',       tooltip: 'Testing AI features for consistency, safety and accuracy' },
  { label: 'Hallucination Detection',    tooltip: 'Identifying when models generate false or misleading content' },
  { label: 'Prompt Consistency Testing', tooltip: 'Verifying prompts produce stable outputs across runs' },
  { label: 'Non-Deterministic Testing',  tooltip: 'Testing systems where outputs vary between identical inputs' },
  { label: 'Test Harness Design',        tooltip: 'Building scaffolding infrastructure for automated test suites' },
]

const autoSkills = [
  { label: 'Python',              tooltip: 'Primary language for automation frameworks and tooling' },
  { label: 'JavaScript',         tooltip: 'Used for frontend testing and browser automation' },
  { label: 'TypeScript',         tooltip: 'Typed JS used across web projects and test tooling' },
  { label: 'Swift',              tooltip: 'iOS app development and SwiftUI interfaces' },
  { label: 'C++ (learning)',     tooltip: 'Currently learning for systems and browser engineering' },
  { label: 'SQL',                tooltip: 'Database queries and test data management' },
  { label: 'HTML / CSS',         tooltip: 'Frontend markup and styling across web projects' },
  { label: 'XML',                tooltip: 'Config files, test reports and data interchange formats' },
  { label: 'Bash / Shell',       tooltip: 'Scripting CI pipelines and server automation' },
  { label: 'API Testing',        tooltip: 'REST and GraphQL endpoint validation with real payloads' },
  { label: 'REST / JSON',        tooltip: 'Standard API communication and data serialisation' },
  { label: 'WebSockets',         tooltip: 'Real-time connection testing for live data features' },
  { label: 'Selenium',           tooltip: 'Browser automation for legacy and cross-browser suites' },
  { label: 'Playwright',         tooltip: 'Modern E2E testing across Chromium, Firefox and WebKit' },
  { label: 'pytest',             tooltip: 'Python test framework for unit, integration and API tests' },
  { label: 'NumPy',              tooltip: 'Numerical processing in data and AI testing pipelines' },
  { label: 'Postman',            tooltip: 'API exploration, collections and manual contract testing' },
  { label: 'Curl',               tooltip: 'Command-line HTTP requests for quick API validation' },
  { label: 'Supabase',           tooltip: 'Backend-as-a-service for auth, DB and real-time features' },
  { label: 'PostgreSQL',         tooltip: 'Relational database used across multiple products' },
  { label: 'Jira',               tooltip: 'Bug tracking, sprint planning and test cycle management' },
  { label: 'Framework Design',   tooltip: 'Building reusable automation architecture from scratch' },
  { label: 'Logging & Reporting',tooltip: 'Structured test output and failure reporting pipelines' },
  { label: 'CI/CD Awareness',    tooltip: 'Integrating tests into continuous delivery workflows' },
  { label: 'GitHub Actions',     tooltip: 'Automating test runs on push, PR and scheduled triggers' },
  { label: 'Git',                tooltip: 'Version control and branch strategy across all projects' },
  { label: 'npm / pip',          tooltip: 'Package management for JS and Python ecosystems' },
  { label: 'PM2',                tooltip: 'Process management for Node.js production servers' },
  { label: 'NGINX',              tooltip: 'Reverse proxy and static file serving on cloud VMs' },
  { label: 'Oracle Cloud',       tooltip: 'Cloud VM hosting for self-managed backend services' },
  { label: 'Vercel',             tooltip: 'Frontend deployment platform for Next.js projects' },
  { label: 'Cloudflare',         tooltip: 'DNS, CDN and DDoS protection across all domains' },
]

const productSkills = [
  { label: 'Next.js',                    tooltip: 'React framework used for ayteelabs.com and web products' },
  { label: 'React',                      tooltip: 'Component-based UI development' },
  { label: 'TypeScript',                 tooltip: 'Type-safe development across all web projects' },
  { label: 'Tailwind CSS',              tooltip: 'Utility-first styling across all web products' },
  { label: 'Framer Motion',             tooltip: 'Animation library for polished UI interactions' },
  { label: 'HTML / CSS',                tooltip: 'Core web markup and styling fundamentals' },
  { label: 'Chrome Extensions',         tooltip: 'Building browser extensions on the Chrome APIs' },
  { label: 'Swift',                     tooltip: 'Native iOS app development language' },
  { label: 'SwiftUI',                   tooltip: 'Declarative UI framework for iOS apps' },
  { label: 'SpriteKit',                 tooltip: '2D game engine used in iOS projects' },
  { label: 'iOS Development',           tooltip: 'Full-cycle iOS app design, build and App Store deployment' },
  { label: 'Chromium',                  tooltip: 'Building Kinka — a custom Chromium-based browser' },
  { label: 'Browser Engineering',       tooltip: 'Modifying browser internals, UI and behaviour' },
  { label: 'Supabase',                  tooltip: 'Auth, database and storage for SaaS products' },
  { label: 'PostgreSQL',                tooltip: 'Primary relational database across all backend services' },
  { label: 'Row Level Security',        tooltip: 'Supabase RLS policies for multi-tenant data isolation' },
  { label: 'Stripe Connect',            tooltip: 'Payment processing and subscription billing integration' },
  { label: 'Resend',                    tooltip: 'Transactional email delivery for product notifications' },
  { label: 'SaaS Architecture',         tooltip: 'Designing multi-tenant software-as-a-service systems' },
  { label: 'Webhook Design',            tooltip: 'Event-driven integrations between third-party services' },
  { label: 'Licence Key Systems',       tooltip: 'Building software licensing and activation infrastructure' },
  { label: 'CLI Development',           tooltip: 'Building command-line tools for developer workflows' },
  { label: 'npm Publishing',            tooltip: 'Packaging and publishing open-source Node.js packages' },
  { label: 'SSH / Linux',               tooltip: 'Remote server management and Linux administration' },
  { label: 'Vite',                      tooltip: 'Fast frontend build tooling for modern web apps' },
  { label: 'AI Workspace Architecture', tooltip: 'Designing multi-model AI systems with persistent context' },
  { label: 'LLM Orchestration',         tooltip: 'Routing and chaining multiple language models in pipelines' },
  { label: 'Persistent Memory Systems', tooltip: 'Building AI systems that retain context across sessions' },
  { label: 'Context Engineering',       tooltip: 'Optimising prompts and context windows for LLM accuracy' },
  { label: 'Cross-Model Routing',       tooltip: 'Directing tasks to the best model based on capability' },
  { label: 'OpenAI API',                tooltip: 'GPT-4 and embedding API integration in products' },
  { label: 'Google Gemini API',         tooltip: 'Gemini model integration for multimodal AI features' },
  { label: 'IndexedDB / Dexie.js',      tooltip: 'Client-side database for offline-first web features' },
  { label: 'Node.js',                   tooltip: 'Server-side JavaScript runtime for backend services' },
  { label: 'Express',                   tooltip: 'Minimal Node.js web framework for REST APIs' },
  { label: 'WebSockets',                tooltip: 'Bidirectional real-time communication in web apps' },
  { label: 'Vercel',                    tooltip: 'Deployment and hosting for Next.js frontend projects' },
  { label: 'Cloudflare',                tooltip: 'CDN, DNS and security layer for all products' },
  { label: 'NGINX',                     tooltip: 'Web server and reverse proxy on self-hosted VMs' },
  { label: 'Oracle Cloud VM',           tooltip: 'Free-tier cloud VM running backend Node.js services' },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6])
  const heroY       = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <main className="relative min-h-screen">
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
              <ScrambleText text="Adil Aslam" delay={400} duration={1400} />
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-yellow-400/80 md:text-sm">
              <ScrambleText text="Founder — AyTee Labs" delay={800} duration={1000} />
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
              <span className="text-text">Quality Engineering Lead</span> &amp; Product Developer.
              I design &amp; test quality systems, build automation frameworks, and ship web + iOS products.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#projects" className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium hover:bg-white/15 transition">
                View Projects
              </MagneticButton>
              <MagneticButton href="#stack" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                Skills &amp; Stack
              </MagneticButton>
              <MagneticButton href="/blog" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                Blog
              </MagneticButton>
              <MagneticButton href="#contact" className="rounded-xl border border-white/12 px-5 py-3 text-sm font-medium hover:bg-white/5 transition">
                Contact
              </MagneticButton>
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
              <p>I'm a Software Test Lead with 9+ years shaping quality across fast-moving engineering teams, from hands-on automation to leading QA strategy at the product and organisational level.</p>
              <p>I specialise in building quality systems that scale. Designing automation frameworks from the ground up, embedding testing into CI/CD pipelines, and introducing structured evaluation practices for AI and LLM-powered features where traditional approaches break down.</p>
              <p>Beyond the day job, I build and ship independent products under AyTee Labs, from developer tooling and AI infrastructure to iOS apps and a Chromium-based browser. It keeps me sharp, commercially minded, and connected to the full product lifecycle in a way most QA leads aren't.</p>
            </div>

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
          <h2 className="text-2xl font-semibold">Skills &amp; Stack</h2>
          <p className="mt-2 text-muted">Technologies and systems I actively use across QA leadership and product development.</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Reveal>
            <GlowCard accent="blue">
              <p className="font-medium">Quality &amp; Delivery</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {qaSkills.map((s, i) => (
                  <SkillTag key={s.label} label={s.label} tooltip={s.tooltip} index={i} />
                ))}
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlowCard accent="gold">
              <p className="font-medium">Automation &amp; Languages</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {autoSkills.map((s, i) => (
                  <SkillTag key={s.label} label={s.label} tooltip={s.tooltip} index={i} />
                ))}
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.16}>
            <GlowCard accent="green">
              <p className="font-medium">Product Development</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {productSkills.map((s, i) => (
                  <SkillTag key={s.label} label={s.label} tooltip={s.tooltip} index={i} />
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
            <p className="mt-2 text-muted">Open to collaboration, product discussions, or quality engineering conversations.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition" href="https://www.linkedin.com/in/adilaslam/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition" href="https://x.com/x444dyx" target="_blank" rel="noreferrer" aria-label="X / Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a className="rounded-xl border border-white/10 p-3 text-white/60 hover:bg-white/5 hover:text-white transition" href="mailto:adil786123@hotmail.co.uk" aria-label="Email">
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
