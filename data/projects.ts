export type ProjectCategory =
  | 'Company'
  | 'AyTee Labs'
  | 'AI Infrastructure'
  | 'Portfolio / Brand'
  | 'Developer Tooling'

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
      'Built as a Chrome extension with clean state management, structured step tracking, and export pipelines.',
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
    href: 'https://pulse.ayteelabs.com',
    blurb:
      'Fast-paced browser arcade game focused on reaction timing and escalating difficulty.',
    mission:
      'To create a minimalist, addictive browser-based arcade experience with increasing speed mechanics.',
    overview:
      'Built using React and TypeScript with performance-first animation logic.',
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
      'The official AyTee Labs portfolio.',
    mission:
      'To establish a structured digital product studio.',
    overview:
      'Built using Next.js App Router and modern UI architecture.',
    impact:
      'Acts as the central brand infrastructure.',
    tags: [
      'Next.js',
      'Framer Motion',
      'Tailwind',
      'Design System',
      'Brand Architecture'
    ]
  },

  {
    slug: 'ankoryn',
    title: 'Ankoryn',
    category: 'AI Infrastructure',
    year: '2026',
    status: 'Live',
    href: 'https://www.ankoryn.com',
    highlight: 'Flagship',
    blurb:
      'AI workspace OS enabling structured cross-model orchestration and persistent memory.',
    mission:
      'To eliminate stateless AI workflows.',
    overview:
      'An orchestration layer managing memory, summarisation and routing.',
    impact:
      'Transforms AI into structured workspaces.',
    tags: [
      'AI Workspace Architecture',
      'LLM Orchestration',
      'Persistent Memory Systems',
      'Context Engineering',
      'Cross-Model Routing',
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Markdown',
      'Dexie.js',
      'IndexedDB',
      'OpenAI API',
      'Google Gemini API',
      'Node.js',
      'npm',
      'Vercel'
    ]
  },

  {
    slug: 'portix',
    title: 'Portix',
    category: 'Developer Tooling',
    year: '2026',
    status: 'Live',
    href: 'https://portix.ayteelabs.com',
    highlight: 'New',
    blurb:
      'Git-aware localhost preview sharing with instant feedback overlays.',
    mission:
      'To eliminate friction in sharing local development work.',
    overview:
      'Creates secure public URLs with feedback overlays.',
    impact:
      'Reduces feedback loops and deployment overhead.',
    tags: [
      'Node.js',
      'TypeScript',
      'Express',
      'WebSockets (ws)',
      'NGINX',
      'Lets Encrypt',
      'Cloudflare',
      'Oracle Cloud VM',
      'PM2',
      'npm',
      'Gumroad'
    ]
  },

  {
    slug: 'moditquick',
    title: 'ModitQuick',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'Web productivity toolkit.',
    mission:
      'To consolidate everyday utilities.',
    overview:
      'Modular Next.js architecture.',
    impact:
      'Reduces workflow friction.',
    tags: ['Next.js', 'TypeScript', 'Vercel']
  },

  {
    slug: 'shaper',
    title: 'Shaper',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'iOS arcade game.',
    mission:
      'Create a precision arcade experience.',
    overview:
      'Built with Swift + SpriteKit.',
    impact:
      'Demonstrates native game architecture.',
    tags: ['Swift', 'SpriteKit', 'iOS']
  },

  {
    slug: 'qalb',
    title: 'Qalb',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'Minimalist Islamic app.',
    mission:
      'Provide calm, offline-first experience.',
    overview:
      'Structured dataset + SwiftUI.',
    impact:
      'Clean faith-based UX.',
    tags: ['Swift', 'iOS']
  },

  {
    slug: 'quality-leadership',
    title: 'Quality Leadership (Panintelligence)',
    category: 'Company',
    year: '2026',
    status: 'Overview',
    highlight: 'High-Level',
    blurb:
      'Leading quality strategy.',
    mission:
      'Embed structured QA practices.',
    overview:
      'Automation + governance.',
    impact:
      'Improved production confidence.',
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
      'Testing AI behaviour.',
    mission:
      'Introduce structured validation.',
    overview:
      'Evaluate reliability + hallucinations.',
    impact:
      'Improved trust in AI systems.',
    tags: ['LLM Testing', 'Evaluation']
  }
]