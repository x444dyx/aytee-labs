export type ProjectCategory =
  | 'Company'
  | 'AyTee Labs'
  | 'AI Infrastructure'
  | 'Portfolio / Brand'

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  year: string
  blurb: string
  tags: string[]
  status: 'Live' | 'In Flight' | 'Overview'
  href?: string
  highlight?: string
  mission: string
  overview: string
  impact: string
}

export const projects: Project[] = [
  {
    slug: 'clickument',
    title: 'Clickument',
    category: 'AyTee Labs',
    year: '2026',
    status: 'Live',
    href: 'https://clickument.com',
    blurb:
      'Chrome extension for generating structured step-by-step documentation with screenshots and clean exports.',
    mission:
      'To streamline technical documentation by turning manual screenshot workflows into structured, export-ready documentation.',
    overview:
      'Built as a Chrome extension with clean state management, structured step tracking, and export pipelines. Designed for QA engineers, product teams, and technical writers.',
    impact:
      'Reduces documentation friction and standardises reporting across teams.',
    tags: ['JavaScript', 'Chrome Extension', 'Vercel']
  },

  {
    slug: 'pulse',
    title: 'Pulse',
    category: 'AyTee Labs',
    year: '2026',
    status: 'Live',
    href: 'https://pulse-aa.vercel.app/',
    blurb:
      'Fast-paced browser arcade game focused on reaction timing and escalating difficulty.',
    mission:
      'To create a minimalist, addictive browser-based arcade experience with increasing speed mechanics.',
    overview:
      'Built using React and TypeScript with performance-first animation logic and responsive state updates.',
    impact:
      'Demonstrates rapid product iteration and frontend game architecture.',
    tags: ['React', 'TypeScript', 'Vercel']
  },

  {
    slug: 'aytee-labs',
    title: 'AyTee Labs',
    category: 'Portfolio / Brand',
    year: '2026',
    status: 'Live',
    href: 'https://ayteelabs.com',
    blurb:
      'The official AyTee Labs portfolio — a production-grade showcase built with Next.js, Framer Motion, and modern UI architecture.',
    mission:
      'To establish a structured digital product studio showcasing engineering, design, and AI systems work.',
    overview:
      'Architected using Next.js App Router, motion-based transitions, dynamic routing, and reusable UI components.',
    impact:
      'Acts as the central brand infrastructure and product showcase platform.',
    tags: [
      'Next.js',
      'Framer Motion',
      'Tailwind',
      'Design System',
      'Brand Architecture'
    ]
  },

  {
    slug: 'moditquick',
    title: 'ModitQuick',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'Web productivity toolkit combining lightweight utilities into a streamlined interface.',
    mission:
      'To consolidate everyday web utilities into a single high-performance productivity suite.',
    overview:
      'Built with modular Next.js architecture allowing scalable addition of tools without UI complexity.',
    impact:
      'Reduces friction between common web-based workflows.',
    tags: ['Next.js', 'TypeScript', 'Vercel']
  },

  {
    slug: 'shaper',
    title: 'Shaper',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'iOS arcade game built with Swift & SpriteKit — precision mechanics and polish.',
    mission:
      'To create a visually minimal but mechanically demanding arcade game experience.',
    overview:
      'Developed in Swift using SpriteKit with structured state handling and scalable shape systems.',
    impact:
      'Demonstrates native mobile game architecture and performance optimisation.',
    tags: ['Swift', 'SpriteKit', 'iOS']
  },

  {
    slug: 'qalb',
    title: 'Qalb',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'Minimalist Islamic prayer & dua iOS app — offline-first, calm UX.',
    mission:
      'To provide a distraction-free, offline-first spiritual companion with elegant design.',
    overview:
      'Structured dataset with verified sources, clean SwiftUI interface, and production-ready architecture.',
    impact:
      'Brings clarity and calm design principles into faith-based mobile tooling.',
    tags: ['Swift', 'iOS']
  },

  {
    slug: 'ankoryn',
    title: 'Ankoryn',
    category: 'AI Infrastructure',
    year: '2026',
    status: 'In Flight',
    highlight: 'Flagship',
    blurb:
      'An AI workspace OS enabling structured cross-model orchestration and long-term contextual memory persistence.',
    mission:
      'To eliminate stateless AI workflows by introducing a persistent memory layer enabling true context continuity.',
    overview:
      'An orchestration layer managing summarisation pipelines, token-aware trimming, memory lifecycle and cross-model routing.',
    impact:
      'Transforms isolated prompt interactions into structured, evolving AI workspaces.',
    tags: [
      'AI Workspace Architecture',
      'LLM Orchestration',
      'Persistent Memory Systems',
      'Context Engineering',
      'Cross-Model Routing'
    ]
  },

  {
    slug: 'quality-leadership',
    title: 'Quality Leadership (Panintelligence)',
    category: 'Company',
    year: '2026',
    status: 'Overview',
    highlight: 'High-Level',
    blurb:
      'Leading quality strategy across production environments — improving release confidence and automation maturity.',
    mission:
      'To embed structured quality practices into live production systems.',
    overview:
      'Designing automation frameworks, implementing governance standards, and improving release stability.',
    impact:
      'Improved production confidence and automation maturity across teams.',
    tags: ['QA Strategy', 'Automation']
  },

  {
    slug: 'llm-testing',
    title: 'AI / LLM Testing (Panintelligence)',
    category: 'Company',
    year: '2026',
    status: 'Overview',
    highlight: 'AI',
    blurb:
      'Testing and validating AI-driven behaviours with focus on reliability and safe evaluation.',
    mission:
      'To introduce structured validation methodologies into AI-driven product systems.',
    overview:
      'Evaluating model behaviour, edge cases, hallucination risk and reliability under production constraints.',
    impact:
      'Improved trust and safety standards within AI-enabled enterprise products.',
    tags: ['LLM Testing', 'Evaluation']
  }
]