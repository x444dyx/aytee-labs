export type ProjectCategory =
  | 'Company'
  | 'Product'
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
    category: 'Product',
    year: '2026',
    status: 'Live',
    href: 'https://clickument.com',
    blurb:
      'A Chrome extension that captures your workflow step-by-step — with screenshots, annotations and structured exports — turning manual processes into clean, shareable documentation in minutes.',
    mission:
      'To eliminate the time sink of manual documentation by automating the capture and formatting of step-by-step processes directly inside the browser.',
    overview:
      'Clickument sits inside Chrome and records each action as a numbered step with an accompanying screenshot. Users can annotate, reorder and export their documentation into clean formats ready for internal wikis, client handoffs or team onboarding — without ever leaving the browser.',
    impact:
      'Cuts documentation time dramatically and produces consistent, professional output — removing the inconsistency of manually written guides across teams.',
    tags: ['JavaScript', 'Chrome Extension', 'Vercel']
  },

   {
    slug: 'arcade',
    title: 'Arcade',
    category: 'Product',
    year: '2026',
    status: 'Live',
    href: 'https://arcade.ayteelabs.com',
    blurb:
      'A collection of fast-paced browser games built around reaction timing, pattern recognition and escalating difficulty — designed to be instantly playable with no setup.',
    mission:
      'To build a tight, addictive arcade experience in the browser that proves you can deliver genuinely fun gameplay with lean, performant frontend code.',
    overview:
      'Arcade is built with React and TypeScript, prioritising smooth 60fps animation and responsive input handling. Each game is self-contained with its own difficulty curve, score tracking and restart flow — kept intentionally minimal so the gameplay does the talking.',
    impact:
      'Demonstrates rapid product iteration, frontend game architecture, and the ability to ship polished, complete experiences outside of traditional app frameworks.',
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
      'The official home of AyTee Labs — a digital product studio building focused tools, AI infrastructure and developer utilities under one independent brand.',
    mission:
      'To establish a structured, credible product studio that houses every independent build — giving each project a professional home and a coherent identity under one roof.',
    overview:
      'Built with Next.js App Router, Framer Motion and a custom design system, the AyTee Labs portfolio is itself a product — designed to reflect the quality and craft behind every project it showcases. Smooth scroll, reveal animations and a dark minimal aesthetic set the tone for the brand.',
    impact:
      'Acts as the central brand infrastructure and public-facing proof of work — turning a collection of independent projects into a cohesive studio identity.',
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
      'An AI workspace OS that brings persistent memory, cross-model orchestration and structured context management to every conversation — eliminating the stateless, disposable nature of standard AI chat.',
    mission:
      'To eliminate stateless AI workflows by building a persistent, intelligent layer that remembers context across sessions, routes between models intelligently, and treats every conversation as part of a larger working system.',
    overview:
      'Ankoryn is an orchestration layer built on Next.js App Router that manages memory storage via IndexedDB, routes prompts across OpenAI and Google Gemini APIs, and surfaces structured summaries back to the user. It handles context windowing, memory compression and conversation continuity — turning isolated AI interactions into a coherent, evolving workspace.',
    impact:
      'Transforms AI from a one-shot tool into a structured, persistent workspace — giving power users the memory, context and multi-model flexibility that standard interfaces lack.',
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
      'A developer tool that instantly exposes your localhost to a secure public URL — with Git branch awareness and a floating feedback overlay so collaborators can comment directly on what they see.',
    mission:
      'To eliminate the friction of sharing in-progress local work — removing the need to deploy to staging just to get feedback on a feature that isn\'t ready yet.',
    overview:
      'Portix runs a lightweight tunnel from your local machine to a live public URL, with Git integration that labels each preview by branch. A non-intrusive feedback overlay lets reviewers pin comments to specific areas of the page — all without the developer needing to touch their deployment pipeline. Built on Node.js, Express, WebSockets and hosted on an Oracle Cloud VM behind NGINX.',
    impact:
      'Shortens feedback loops significantly — letting developers share work-in-progress instantly and receive contextual, precise feedback without staging deployments or screen recordings.',
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
    category: 'Product',
    year: '2026',
    status: 'Live',
    href: 'https://www.moditquick.com',
    blurb:
      'A modular web productivity toolkit that consolidates the small but frequent tasks that slow down your day — from text transformation to quick calculations and formatting utilities.',
    mission:
      'To replace the habit of Googling for one-off tools by providing a fast, clean, always-available suite of everyday utilities in a single browser tab.',
    overview:
      'ModitQuick is built as a modular Next.js application where each utility is a self-contained component — making it easy to extend with new tools without touching existing ones. The interface is intentionally minimal: no accounts, no friction, just open and use.',
    impact:
      'Reduces the small but constant workflow interruptions caused by hunting for the right tool — keeping focus intact and day-to-day tasks moving faster.',
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
    category: 'Product',
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
    category: 'Product',
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
  },

  {
    slug: 'team-leadership',
    title: 'Team Leadership & Mentoring',
    category: 'Company',
    year: '2024–Present',
    status: 'Overview',
    highlight: 'People',
    blurb:
      'Leading and mentoring a mixed team of manual and automation testers — building capability, instilling a culture of continuous improvement, and keeping quality at the centre of every delivery.',
    mission:
      'To grow a high-performing QA team by investing in people as much as process — coaching testers to think critically, solve problems proactively, and take ownership of quality outcomes rather than just executing test cases.',
    overview:
      'I lead day-to-day QA team operations across manual and automation disciplines — running sprint ceremonies, unblocking individuals, and creating space for skills growth. I mentor testers at varying experience levels, pairing technical coaching with softer skills around communication, commercial awareness and working effectively in fast-moving agile environments. I actively shape team culture by encouraging knowledge sharing, retrospective honesty, and a mindset of continuous improvement.',
    impact:
      'Built a more confident, capable and self-sufficient QA team — reducing dependency on reactive firefighting and creating a culture where quality is owned collectively, not bolted on at the end.',
    tags: ['Team Leadership', 'Mentoring', 'Coaching', 'Agile / Scrum', 'Continuous Improvement', 'People Management', 'Knowledge Sharing', 'Cross-Functional Collaboration']
  },

  {
    slug: 'delivery-compliance',
    title: 'Delivery, Risk & Compliance',
    category: 'Company',
    year: '2024–Present',
    status: 'Overview',
    highlight: 'Governance',
    blurb:
      'Owning end-to-end QA delivery across cloud-enabled products — covering CI/CD pipelines, risk assessments, data-handling reviews, and audit readiness across performance, security and usability.',
    mission:
      'To ensure quality is not just a test phase but a thread running through every stage of delivery — from roadmap planning to production release — with governance processes that hold up under scrutiny.',
    overview:
      'I oversee QA across cloud-enabled products with AWS and non-AWS infrastructure, working within robust CI/CD pipelines to ensure reliable, repeatable deployments. I carry out risk assessments and data-handling reviews aligned to compliance and audit requirements, and extend quality coverage beyond functional testing to encompass performance, security and usability. I work directly with product managers, developers and stakeholders to translate business requirements into testable strategies — maintaining real-time visibility of product quality through tooling and dashboards.',
    impact:
      'Delivered high-profile features — including AI modules — on time and to standard, with audit-ready QA processes and measurable improvements in release reliability and cross-functional delivery confidence.',
    tags: ['CI/CD', 'AWS', 'Risk Assessment', 'Compliance', 'Audit Readiness', 'Performance Testing', 'Security Testing', 'Usability Testing', 'Data Handling', 'Roadmap Delivery', 'Stakeholder Management', 'Jira', 'SQL', 'Python', 'Selenium']
  }
]
