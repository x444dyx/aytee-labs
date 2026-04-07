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
    slug: 'arcade',
    title: 'Arcade',
    category: 'AyTee Labs',
    year: '2026',
    status: 'Live',
    href: 'https://arcade.ayteelabs.com',
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
    status: 'Live',
    href: 'https://www.moditquick.com',
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
    slug: 'specghost',
    title: 'SpecGhost',
    category: 'Developer Tooling',
    year: '2026',
    status: 'Live',
    href: 'https://specghost.ayteelabs.com',
    blurb:
      'AI-powered spec generation tool that turns requirements and user stories into structured test specifications instantly.',
    mission:
      'To eliminate the manual overhead of writing test specs from scratch by generating structured, readable specifications directly from requirements.',
    overview:
      'SpecGhost takes raw requirement input and produces clean, structured test specifications using AI — reducing spec-writing time and improving consistency across QA workflows.',
    impact:
      'Accelerates test planning cycles and standardises specification quality across engineering teams.',
    tags: ['Next.js', 'TypeScript', 'AI', 'Vercel']
  },

  {
    slug: 'bugreporter',
    title: 'BugReporter',
    category: 'Developer Tooling',
    year: '2026',
    status: 'Live',
    href: 'https://bugreporter.ayteelabs.com',
    blurb:
      'Structured bug reporting tool that generates clean, consistent defect reports ready to paste into any tracker.',
    mission:
      'To remove the inconsistency and friction from writing bug reports by providing a guided, structured reporting workflow.',
    overview:
      'BugReporter guides users through a structured defect form — capturing steps to reproduce, expected vs actual behaviour, environment details and severity — then exports a clean, formatted report.',
    impact:
      'Improves defect communication quality and reduces back-and-forth between testers and developers.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel']
  },

  {
    slug: 'ageineverything',
    title: 'AgeInEverything',
    category: 'AyTee Labs',
    year: '2026',
    status: 'Live',
    href: 'https://ageineverything.ayteelabs.com',
    blurb:
      'Enter your birthday and discover your age expressed across time, space, biology and culture — a curiosity tool with a twist.',
    mission:
      'To turn a simple date of birth into a rich, surprising exploration of age across different units and perspectives.',
    overview:
      'AgeInEverything calculates your age in seconds, heartbeats, moon cycles, dog years, and dozens of other units — presented in a clean, shareable format.',
    impact:
      'A lightweight, viral-friendly utility showcasing creative product thinking and rapid frontend execution.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel']
  },

  {
    slug: 'kinka',
    title: 'Kinka',
    category: 'AyTee Labs',
    year: '2026',
    status: 'In Flight',
    blurb:
      'A Chromium-based browser built for focused, distraction-free work — with privacy-first defaults and a clean, minimal interface.',
    mission:
      'To build a browser that respects how people actually work — removing noise, protecting privacy, and putting the user back in control of their environment.',
    overview:
      'Kinka is a custom Chromium fork with a stripped-back UI, opinionated tab management, and built-in focus tooling. Designed from the ground up for deep work sessions without the bloat of mainstream browsers.',
    impact:
      'Redefines the browser as a productivity tool rather than an advertising platform — a long-term bet on focused computing.',
    tags: ['Chromium', 'C++', 'JavaScript', 'Browser Engineering', 'Privacy']
  },

  {
    slug: 'quality-leadership',
    title: 'Quality Leadership',
    category: 'Company',
    year: '2024–Present',
    status: 'Overview',
    highlight: 'High-Level',
    blurb:
      'Leading quality strategy and automation engineering at a Leeds based SaaS company — embedding structured QA practices across the full delivery pipeline.',
    mission:
      'To raise the quality bar across engineering by shifting testing left, building scalable automation frameworks, and instilling a culture of release confidence over reactive bug fixing.',
    overview:
      'As Test Lead at a Leeds-based SaaS company, I own end-to-end quality strategy across multiple product squads. This includes defining test approaches for new features, triaging defects with engineering leads, managing regression cycles, and continuously improving the automation framework. I work closely with developers, product managers and stakeholders to align quality gates with delivery timelines — ensuring every release goes out with confidence rather than crossed fingers.',
    impact:
      'Measurably improved release stability, reduced regression escape rates, and built a shared quality culture across engineering — shifting QA from a bottleneck into a core delivery accelerator.',
    tags: ['QA Strategy', 'Test Leadership', 'Automation Frameworks', 'Python', 'Release Management', 'Stakeholder Communication', 'Defect Triage', 'Agile Delivery']
  },

  {
    slug: 'llm-testing',
    title: 'AI / LLM Testing',
    category: 'Company',
    year: '2025–Present',
    status: 'Overview',
    highlight: 'AI',
    blurb:
      'Designing and executing structured evaluation frameworks for LLM-powered features in production — testing AI behaviour, reliability, and hallucination risk.',
    mission:
      'To bring rigorous, structured quality engineering into AI systems — where traditional test approaches break down and new evaluation methodologies are required.',
    overview:
      'With AI features increasingly entering the production stack at my current company, I introduced a structured approach to LLM evaluation covering prompt consistency, output reliability, edge case behaviour, and hallucination detection. This involved building custom evaluation harnesses, defining quality criteria for non-deterministic outputs, and collaborating with ML engineers to establish feedback loops that improve model behaviour over time.',
    impact:
      'Established a repeatable LLM testing practice from scratch — improving stakeholder confidence in AI feature releases and reducing unpredictable output incidents in production.',
    tags: ['LLM Evaluation', 'AI Testing', 'Prompt Engineering', 'Hallucination Detection', 'Python', 'Test Harness Design', 'Non-Deterministic Testing']
  }
]
