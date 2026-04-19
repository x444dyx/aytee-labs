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
    slug: 'burnbin',
    title: 'BurnBin',
    category: 'Product',
    year: '2026',
    status: 'Live',
    href: 'https://burnbin.ayteelabs.com',
    highlight: 'New',
    blurb:
      'A private snippet sharing tool built around burn-after-read destruction — share code, keys or text via a secret link that vanishes after first view, with password protection and expiry timers.',
    mission:
      'To give developers and teams a frictionless, private way to share sensitive content — where the default is destruction, not persistence, and privacy is guaranteed by design.',
    overview:
      'BurnBin is a full-stack Next.js application backed by Supabase that lets users paste any content, configure expiry behaviour, and share a one-time secret link. Core features include burn-after-read self-destruction, time-based expiry (1h to 30d), optional password protection with server-side SHA-256 hashing, syntax highlighting via Monaco Editor for 20+ languages, a raw text endpoint for curl and automation, and a 50,000 character limit with live counter. The API is protected by IP-based rate limiting and request size validation. A landing page with scroll animations communicates the product clearly to non-technical users.',
    impact:
      'Demonstrates end-to-end product thinking — from security architecture and API design to UI polish and landing page copy — shipping a complete, production-ready tool with genuine utility for developers.',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Row Level Security',
      'Monaco Editor',
      'Syntax Highlighting',
      'Rate Limiting',
      'Password Hashing',
      'SHA-256',
      'REST API',
      'Cron Jobs',
      'Tailwind CSS',
      'Vercel'
    ]
  },

  {
    slug: 'linkdrop',
    title: 'Linkdrop',
    category: 'Product',
    year: '2026',
    status: 'Live',
    href: 'https://linkdrop.ayteelabs.com',
    highlight: 'New',
    blurb:
      'A minimal, design-forward link-in-bio tool built on the Nothing UI aesthetic — four layouts, full theming, click analytics and profile views, all behind a secure password-protected builder.',
    mission:
      'To build a link-in-bio tool that actually looks good and gives creators real data — without the bloat, paywalls or generic templates of mainstream alternatives.',
    overview:
      'Linkdrop is a full-stack Next.js application with Supabase as the backend. Users claim a handle, set a password, and get a live profile at linkdrop.ayteelabs.com/handle. The builder offers four layouts (rows, bubbles, grid, icons), per-link sizing, drag-to-reorder, pinning, per-link images, and a full theme system with hex colour pickers. Analytics track profile views and per-link click counts — shown live in the builder. An explore page lets users browse all profiles, sort by views or recency, search, and copy themes from other profiles with password verification. Security features include account lockout after 5 failed attempts, email-based password reset, and full account deletion.',
    impact:
      'Shipped as a complete, production-ready SaaS product — demonstrating full-stack architecture, auth systems, real-time data, complex UI state management, and polished design execution from zero to deployed.',
    tags: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
      'Supabase Auth',
      'Supabase Storage',
      'Vercel',
      'Nothing UI',
      'Full-stack',
    ]
  },

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
      'SpecGhost takes raw requirement input and produces clean, structured test specifications using AI, reducing spec-writing time and improving consistency across QA workflows.',
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
    blurb:
      'A structured defect reporting tool that guides testers through capturing everything a developer needs — steps, environment, severity and expected behaviour — then exports a clean, formatted report.',
    mission:
      'To raise the quality of defect communication by replacing inconsistent, freeform bug reports with a structured capture flow that produces developer-ready output every time.',
    overview:
      'BugReporter guides users through a structured defect form — capturing steps to reproduce, expected vs actual behaviour, environment details and severity — then exports a clean, formatted report.',
    impact:
      'Improves defect communication quality and reduces back-and-forth between testers and developers.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel']
  },

  {
    slug: 'moditquick',
    title: 'ModitQuick',
    category: 'Developer Tooling',
    year: '2026',
    status: 'Live',
    href: 'https://moditquick.ayteelabs.com',
    blurb:
      'A bulk file and folder renaming tool built for developers and power users — with pattern matching, regex support and live preview before any changes are committed.',
    mission:
      'To give developers and power users a fast, safe way to rename files and folders in bulk without resorting to brittle shell scripts or manual effort.',
    overview:
      'ModitQuick provides a clean interface for defining rename rules using plain text patterns or regex, previewing every change before applying it, and executing bulk renames with a single action. It handles edge cases like duplicate names, nested structures and extension preservation — making complex renaming tasks reproducible and reversible.',
    impact:
      'Eliminates hours of manual renaming work and script-writing — giving developers a reliable, auditable tool for file system operations that are typically error-prone.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel']
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
      'To remove the friction of sharing local development work by combining tunnelling, branch context and live feedback into a single, zero-config tool.',
    overview:
      'Portix runs as a lightweight CLI that establishes a secure tunnel to your localhost and generates a shareable URL. It detects your current Git branch automatically and surfaces that context alongside the link — so collaborators always know what they\'re reviewing. A floating overlay on the shared page lets reviewers leave pinned comments tied to specific elements, removing the need for back-and-forth in Slack or email.',
    impact:
      'Collapses the feedback loop between developers and stakeholders — making local work instantly shareable and reviewable without deployments, staging environments or screen sharing.',
    tags: [
      'Developer Tooling',
      'CLI',
      'Tunnelling',
      'Git Integration',
      'Real-time Feedback',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Vercel'
    ]
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
  },

  {
    slug: 'dev-defect-resolution',
    title: 'Defect Investigation & Dev Fix Contribution',
    category: 'Company',
    year: '2025–Present',
    status: 'Overview',
    highlight: 'Impact',
    blurb:
      'Going beyond traditional QA by investigating complex defects at a system and code level, identifying root causes, and contributing verified fixes directly to the development team.',
    mission:
      'To close the gap between finding a defect and fixing it by doing the investigative heavy lifting myself rather than simply raising a ticket and waiting, accelerating resolution and reducing back-and-forth between QA and engineering.',
    overview:
      'Across several high-priority issues I have gone beyond standard defect reporting to investigate root causes at a deeper technical level. This has involved diagnosing environment-specific failures related to system PATH configuration, installer behaviour across operating systems, and upgrade script compatibility. In each case I identified not just the problem but a working solution, verified it independently, and shared the fix with the engineering team for implementation. Issues have spanned Windows and Linux environments, installer tooling, certificate configuration, and shell scripting. The cross-platform nature of these investigations required careful analysis of how the same process behaves differently across operating systems and deployment contexts.',
    impact:
      'Multiple production-affecting issues resolved faster than the standard defect lifecycle would allow. Fixes I identified and verified have been implemented directly into release candidates, reducing customer-facing friction and support overhead. Demonstrates a QA approach that treats defect resolution as a collaborative engineering activity rather than a handoff process.',
    tags: ['Root Cause Analysis', 'Windows', 'Linux', 'Shell Scripting', 'Installer Engineering', 'Cross-Platform Testing', 'Environment Debugging', 'Dev Collaboration', 'Release Impact']
  }

]
