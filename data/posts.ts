export type Post = {
  slug: string
  title: string
  date: string
  category: string
  readTime: string
  excerpt: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'kinka-extensions-pivot',
    title: 'Why I Stopped Fighting Chromium Extensions and Started Building What Actually Matters',
    date: '7 April 2026',
    category: 'Build Notes',
    readTime: '5 min read',
    excerpt:
      'Building a Chromium-based browser sounds straightforward until you hit the extension layer. Here is what I learned, why I pulled back, and where Kinka is headed instead.',
    content: `
When I started Kinka, the pitch to myself was simple. Take Chromium, strip the noise, add focus tooling, ship a better browser. Straightforward enough, until it wasn't.

The first few weeks were genuinely exciting. Getting a custom Chromium build running, tweaking the UI shell, removing the parts of the browser that have always annoyed me. It felt like real progress. Then I started working on extension support and everything slowed down.

**The extension problem is nastier than it looks**

Chromium's extension architecture is not something you just bolt onto a fork. The Manifest V3 transition alone introduced enough complexity to make my eyes water. Getting extensions to load reliably, handling permissions correctly, ensuring that the extension APIs you're exposing don't introduce security holes, it's an entire engineering discipline in itself. Google has whole teams working on this. I'm one person building in evenings and weekends.

The specific issues I kept hitting were around extension isolation and the way content scripts interact with the browser's internal page model. Some extensions worked fine. Others would silently fail, or worse, appear to work but produce incorrect behaviour that was extremely hard to diagnose. Every fix introduced new edge cases.

I spent a significant chunk of time on a permissions model that honestly still wasn't right by the time I stepped back from it. The deeper I went, the more it became clear that full extension compatibility wasn't a feature I could ship to a quality standard I was happy with. Not yet.

**The decision to pull back**

This wasn't an easy call. Extension support was part of the original vision for Kinka, the idea that you could bring your existing workflow over without friction. But I kept coming back to the same question: what is Kinka actually for?

The answer is focus. A browser that gets out of your way, protects your attention, and works reliably. Shipping a half-broken extension layer is the opposite of that. It would introduce unpredictability into the one thing Kinka is supposed to eliminate.

So I made the call to deprioritise extension support entirely for now and redirect that energy toward the core.

**What I'm building instead**

The area that's absorbed that effort is automation capture, and honestly it's become the most interesting part of the whole project.

The idea is that Kinka should be able to watch what you're doing and help you document, replay, or automate it without you having to set anything up. Native step capture built into the browser itself rather than layered on top as an extension. This is something that tools like Clickument gesture toward from the outside, but doing it natively opens up a completely different set of possibilities.

When the browser owns the capture layer, you get access to context that an extension never can, tab state, navigation events, form interactions, the full picture. The quality of what you can record and replay is in a different league.

I'm still in early stages on this but the direction feels right. It's the kind of feature that only makes sense in a purpose-built browser, which is the whole point of Kinka.

**What this means for the roadmap**

Extension support isn't dead. It's just not the priority right now. When Kinka's core is solid and the automation layer is something I'm genuinely proud of, revisiting extensions with a clearer scope will make more sense. Building a curated set of first-party integrations is probably a better approach than trying to support the entire Chrome Web Store anyway.

For now the focus is: fast, reliable, distraction-free, with native capture that actually works. Everything else follows from that.

If you're interested in following the build, I'll be writing more of these as Kinka develops. The messy, honest version of building a browser from scratch, not the polished retrospective.
    `.trim()
  },

  {
    slug: 'bugreporter-specghost-ai-qa',
    title: 'Two Quick Builds That Genuinely Changed How I Think About Shifting Left',
    date: '7 April 2026',
    category: 'QA & AI',
    readTime: '6 min read',
    excerpt:
      'BugReporter and SpecGhost were built fast. But the impact they have on QA workflows is anything but small. Here is why I built them, what they taught me, and why they represent exactly how AI should be used in quality engineering.',
    content: `
I built BugReporter and SpecGhost within a few weeks of each other. Neither took long. Both were scratching an itch I had felt for years working in QA and both ended up being more useful than I expected.

I want to talk about what they are, why they matter, and why I think they're a good example of how to actually use AI in a QA context, rather than just throwing a chatbot at the problem and hoping for the best.

**The problem they're solving**

Anyone who has worked in QA knows the two most tedious parts of the job are writing bug reports and writing test specifications. Not because they're hard, but because they're repetitive. You know what a good bug report looks like. You know what needs to go in it. Writing the same structure out fifty times a sprint is not where your brain should be spending its energy.

Same with test specs. When a new feature lands, someone has to sit down and translate a requirement into structured, reviewable test cases. If you're a one-person QA function or a small team with a lot of surface area to cover, that work piles up fast.

These aren't glamorous problems. But they're real ones, and they slow teams down.

**BugReporter**

BugReporter is a guided defect reporting tool. You fill in a structured form, steps to reproduce, expected behaviour, actual behaviour, environment, severity, and it generates a clean, consistently formatted bug report you can paste straight into Jira or whatever tracker you're using.

The AI layer takes what you've entered and makes sure the output is clear, unambiguous and professionally structured. It doesn't invent information. It works with what you give it and formats it correctly every time.

The key thing here is consistency. One of the biggest frustrations in any QA team is the variation in bug report quality. A senior tester writes a detailed, reproducible report. A junior writes something vague that a developer can't action. BugReporter closes that gap by standardising the output regardless of who's writing it.

**SpecGhost**

SpecGhost does the same thing but for test specifications. You paste in a requirement or a user story and it generates structured test cases covering the core scenarios, edge cases and negative paths.

This is where the shift left angle becomes really interesting. Shift left as a principle is about catching defects earlier in the development cycle, ideally before code is even written. One of the most effective ways to do that is to have detailed test specifications ready at the point requirements are written, not after development has finished.

In practice, writing specs that early is hard because QA teams are usually stretched and the spec work gets pushed back. SpecGhost removes a big chunk of that effort. It doesn't replace the thinking, it does the heavy lifting of structure and coverage so that the tester can focus on reviewing and refining rather than writing from scratch.

**Why this is the right way to use AI in QA**

There's a lot of noise at the moment about AI replacing QA. I don't think that's the right frame at all. What I see AI being genuinely useful for is the repetitive, structured, time-consuming parts of QA work that don't actually require human judgement but do require human time.

Writing the skeleton of a bug report is not where a QA engineer's value lies. Their value is in understanding system behaviour, identifying risk, and knowing which edge cases are actually worth testing. If AI can handle the formatting and structure, the QA engineer gets more time to do the work that actually requires their expertise.

That's what both of these tools are doing. They're not making decisions. They're not replacing the tester. They're handling the scaffolding so the tester can focus on what matters.

The other thing I'm deliberate about is keeping the human review step intact. SpecGhost generates test cases. A tester still reviews them, adjusts them, removes ones that don't apply and adds ones that do. BugReporter generates a report. The person submitting it still reads it before they submit. The AI is doing the hard work of initial structure, not making the final call.

That balance feels important to me. The moment you stop reviewing the output is the moment quality starts to slip through the cracks. These tools are built to accelerate the process, not to bypass the thinking.

**What I took away from building them**

The speed of building these was deliberately a feature. Both were scoped tightly, built quickly and deployed fast. I wanted to prove that useful QA tooling doesn't have to be a six-month project. You can identify a real pain point, build something focused that addresses it, and get it in front of people in days.

That approach is something I think about a lot in the context of QA more broadly. The best quality processes are usually simple, focused and consistently applied. Not complicated frameworks that nobody follows. The same principle applies to tooling.

If you work in QA and you're not experimenting with AI to handle the structural, repetitive parts of your workflow, I'd genuinely encourage you to start. Not to replace your process, but to give yourself more time to do the parts of it that actually require you.
    `.trim()
  },

  {
    slug: 'building-ankoryn',
    title: 'Building Ankoryn: Why I Wanted Persistent Memory Across AI Sessions and How I Built It',
    date: '7 April 2026',
    category: 'Build Notes',
    readTime: '7 min read',
    excerpt:
      'Every AI conversation I had felt like starting from scratch. No context, no memory, no continuity. Ankoryn started as a frustration and turned into the most technically interesting thing I have built.',
    content: `
Every AI conversation starts the same way. You open a new chat, you re-explain who you are, what you're working on, what context matters. The model has no idea. It's a blank slate every single time.

For casual use that's fine. For anyone using AI as a serious part of their workflow, it gets old fast.

I wanted something that remembered. Not in a vague, approximate way, but in a way I could control, verify, and build on. That's what Ankoryn is.

**The core problem**

The frustration is specific. When I'm working on a project, I have a lot of context that's relevant to every AI interaction I have about it. The stack I'm using, decisions I've already made and why, constraints I'm working within, the shape of the problem. Re-establishing that context every time I open a new session is friction I shouldn't have to deal with.

The workaround most people use is copying and pasting a context block at the start of each conversation. It works, sort of. It's also manual, easy to forget, and doesn't scale as your context grows. If your project context is five hundred words, you're pasting five hundred words every time. If it's two thousand words, you're not doing it at all.

I wanted the context to live somewhere persistent that I could build over time and have automatically available when I needed it.

**What Ankoryn does**

Ankoryn is a persistent context and memory layer for AI sessions. You build up a library of context blocks, structured notes about projects, preferences, decisions, anything you want an AI to know, and Ankoryn surfaces the relevant ones when you start a session.

The key design decision was making the context explicit and editable. I didn't want a black box that was learning things about me without my knowledge. I wanted to be able to see exactly what context was being used, add to it deliberately, and remove things that were no longer relevant.

That transparency matters to me. If the AI is giving me a response that feels off, I want to be able to look at what context it was working with and understand why. Hidden memory is a debugging nightmare.

**The technical decisions**

The context retrieval problem is more interesting than it sounds. If you have fifty context blocks, you don't want all fifty of them prepended to every conversation. You want the relevant ones. That means some form of semantic matching between what you're asking about and what context blocks are likely to be useful.

I used embeddings for this. Each context block gets embedded when it's saved. When you start a session and provide an initial prompt, that prompt gets embedded too and the closest context blocks are retrieved and included. It's not perfect but it's significantly better than no retrieval at all.

The other decision was around context block structure. Freeform text is flexible but hard to match reliably. I settled on a lightweight schema, a title, a category, and the content itself. The category layer gives you a crude but useful filter before you even get to semantic matching. If you're asking about a technical problem, context blocks in the technical category should score higher than ones about design preferences.

**What building it taught me**

Embeddings and vector search are genuinely underused by solo developers. The perception is that they're complicated and expensive. In practice, with the right tools, they're neither. The retrieval quality you get from even a basic embedding approach is dramatically better than keyword matching, and for a context problem like this it makes the whole thing feel much more intelligent than it actually is.

The harder problem was the UX of building and maintaining context. Creating context blocks has to be low friction or people won't do it, including me. If adding a new piece of context requires more effort than just re-explaining it in the chat, you've lost. I spent more time on the input and management experience than on the retrieval side, which in hindsight was the right call.

**Where it is now**

Ankoryn is live and I use it daily. The context library I've built up over the last few months is something I'd genuinely miss if it disappeared. That's the test I apply to all of these tools: would I notice if it was gone? For Ankoryn, yes. Immediately.

The next direction is integration. Right now Ankoryn is a standalone tool. The longer term vision is that context should be available wherever you're using AI, not just in a dedicated app. That's a harder problem but it's the one that would make it genuinely indispensable.
    `.trim()
  },

  {
    slug: 'building-portix',
    title: 'Portix: The Frustration That Led Me to Build My Own Localhost Sharing Tool',
    date: '7 April 2026',
    category: 'Build Notes',
    readTime: '5 min read',
    excerpt:
      'I was sick of waiting for staging deployments just to test a new feature. Portix came from wanting developers to share their work directly with me, earlier, so I could give feedback while it still mattered.',
    content: `
The feedback loop between development and QA is broken in most teams I've worked in. Not because people don't want it to work, but because the tooling creates friction at exactly the wrong point.

Here's the pattern I kept seeing. A developer finishes a feature on their local machine. It works. They push it. It goes into a queue. It gets reviewed. It gets merged. It gets deployed to staging. Then QA looks at it. By that point, the developer has moved on to something else entirely. If there's a problem, the context switch cost is enormous.

I wanted to close that gap. Portix is how I did it.

**The actual problem**

The specific friction point is the gap between a developer's local environment and the first time QA can see the work. In most workflows, that gap is measured in hours or days. A staging deployment pipeline is not a fast thing. Review queues are not a fast thing.

What I wanted was a way for a developer to share what they're looking at right now, directly, without any of that pipeline. If I could see the feature running on the developer's machine while they're still building it, I can give feedback while it's still cheap to act on. Before the PR is raised, before the review cycle, before the mental context is gone.

**What Portix does**

Portix creates a secure public tunnel to a local development server. The developer runs the CLI, gets a URL, shares it. I open the URL and I'm looking at exactly what they're looking at on their machine, in real time.

That's the core. No deployment. No staging environment. No waiting. The developer doesn't have to change their workflow, they just share a URL when they want feedback.

The security side of this matters. Exposing a localhost server to the public internet is not something you do carelessly. Portix sessions are authenticated, time-limited by default, and can be password protected for sensitive work. The URL you get is not guessable and it expires when the session ends.

**Why I built it instead of using ngrok**

ngrok exists. I've used it. For casual use it's fine. The problems start when you want to use it seriously as part of a QA workflow.

The free tier limitations are real. The random subdomain you get changes every time you start a new session, which means you can't give anyone a consistent URL to check back on. The dashboard is designed for developers, not for QA engineers trying to manage multiple active sessions across a team.

What I wanted was something built specifically for this use case, with the right defaults and the right UX for both sides of the handoff. The developer side should be as simple as running one command. The reviewer side should just be a URL that works.

**What I learned building it**

The tunnelling layer is the part that looks scary but isn't. Once you understand the mechanics of how a TCP tunnel works, the implementation is reasonably straightforward. The harder part was the session management and the authentication layer. Getting those right, reliably, across different network conditions, took more iteration than the core tunnelling code.

The CLI UX also took longer than I expected. The command should be memorable and the output should be immediately clear. Port sharing tools have a reputation for being developer tools that only developers understand. I wanted Portix to be something a non-technical QA lead could install and use without a tutorial.

Portix is live and available now. If your current process involves waiting for staging deployments to get feedback to developers, it's worth a look.
    `.trim()
  },

  {
    slug: 'shipping-products-full-time-job',
    title: 'How I Ship Independent Products While Working a Full Time Job',
    date: '7 April 2026',
    category: 'Perspective',
    readTime: '6 min read',
    excerpt:
      'I work full time as a Test Lead. I also build and maintain a portfolio of independent products. Here is how I actually make that work without burning out.',
    content: `
I get asked about this fairly regularly, usually by people who are thinking about doing something similar and want to know if it's actually possible or if I'm just making it sound easier than it is.

The honest answer is that it's possible, it's not always easy, and the way I make it work is probably not what most productivity advice would suggest.

**The actual constraints**

I work full time as a Test Lead. That's not a light job. It involves real responsibilities, a team to support, and a workload that doesn't stay neatly within business hours. I also have a life outside both of those things. The idea that I have eight spare hours a day to build products is not accurate.

What I actually have is evenings, some weekends, and the occasional focused stretch when things align. That's it. Everything I've shipped has been built in that time.

The constraint forces something useful though. When your building time is genuinely limited, you make different decisions. You scope more tightly. You cut more aggressively. You ship earlier because you can't afford to keep polishing indefinitely.

**How I choose what to build**

The filter I use is: does this solve a real problem I actually have? Not a hypothetical problem. Not a problem I've read about. A problem I personally run into and find frustrating enough that I'd use a tool to fix it.

This sounds obvious but it rules out a lot of ideas that seem compelling until you ask the question honestly. Products built to scratch a real personal itch have a different quality to them than products built because the market opportunity looked interesting.

The other filter is: can I build a useful v1 in a reasonable amount of time with the skills I have right now? If the answer is no, I either break it into something smaller or I put it aside. I don't have the runway to spend six months on something before getting any signal on whether it's useful.

**The rhythm that actually works**

I don't try to build every day. The advice to work on your projects for thirty minutes every morning sounds good and works terribly for me. Thirty minutes is enough time to get into something but not enough to make real progress. It mostly produces the frustration of starting without finishing.

What works better is longer, less frequent sessions. An evening where I have two or three hours and a clear goal is worth more than five scattered thirty-minute sessions that don't connect to each other. I'd rather have two or three of those a week than try to maintain a daily streak.

The other thing that helps is knowing exactly what I'm going to work on before I sit down. Context switching is expensive when your time is limited. If I have to spend twenty minutes remembering where I was and deciding what to do next, I've lost a significant chunk of a short session. I keep a running list of the next concrete thing to do on each project so I can sit down and start immediately.

**What I've had to give up**

There's a version of this where you pretend it's all fine and nothing costs anything. That version isn't honest.

Building products in evenings and weekends means less time for other things. Some weeks that's fine. Some weeks it's not. Learning to read which is which, and being willing to close the laptop and do something else when the balance is off, has been important.

I've also had to accept that some projects move slowly. Kinka has been in development for a long time relative to how far along it is. That's because it's genuinely complex and the time I can give it is genuinely limited. That's okay. Not everything needs to move at the same pace.

**What makes it sustainable**

The thing that keeps it going is that I find it interesting. Not every day, not every session, but overall. Building products is a different kind of thinking to my day job and I like having both. When one is frustrating, the other is usually not.

The portfolio aspect also helps. Having multiple projects means that if one is stuck or stale, I can shift attention to another one. I'm rarely in a position where everything is blocked at the same time. There's usually something I can make progress on.

If you're thinking about doing something similar, the honest version is: start with one thing, keep it small, and find out whether you actually enjoy the building part before you commit to making it a habit. Some people do, some people don't. Both are fine.
    `.trim()
  },

  {
    slug: 'arcade-volumes-2-3-4',
    title: 'Arcade Just Got a Lot Bigger: Volumes 2 and 3 Are Live and Volume 4 Is Coming',
    date: '8 April 2026',
    category: 'Build Notes',
    readTime: '4 min read',
    excerpt:
      'Volume 1 launched with three games and proved the concept. Now Volumes 2 and 3 are live, four more games are playable, and Volume 4 is already in the works.',
    content: `
Arcade started as a simple idea. A collection of fast, minimal games built for short sessions. No accounts, no progression systems, no friction. Just open it and play.

Volume 1 proved that was the right call. Three games, clean design, straightforward. People used it. That was enough to keep going.

**What's in Volumes 2 and 3**

Volume 2 added two games that pushed in a slightly different direction. Where Volume 1 was mostly reflex-based, Volume 2 introduced more pattern recognition and spatial thinking. The goal was to give the collection more variety without losing the fast, frictionless feel.

Volume 3 continued that. Two more games, both designed around the same constraint: the core loop should be understandable in under ten seconds. If someone has to read instructions before they can start, the game hasn't done its job.

That constraint shapes every design decision. Controls have to be obvious. The objective has to be visible. Feedback has to be immediate. When you're building for short attention spans and zero onboarding, there's no room for anything unclear.

**The design philosophy hasn't changed**

The temptation with a growing collection is to add complexity. Leaderboards, achievements, unlockables. All of the things that game designers reach for to increase engagement.

I've deliberately avoided all of it. Not because those things are bad in general, but because they change what Arcade is. Arcade is a place to play something for three minutes and then close the tab. The moment it asks you to sign in to save your score, it's a different product.

There's real value in tools and products that don't want anything from you. No sign up, no tracking, no dark patterns. Just the thing itself. Arcade is an exercise in that. Keeping it that way as the collection grows requires saying no to a lot of things that would technically make sense.

**Volume 4**

Volume 4 is already in progress. Three games are in some stage of design or build. I'm not going to say which ones because the details tend to change significantly between concept and shipped, but the direction is toward games that are slightly more strategic without sacrificing the instant accessibility that makes the collection work.

The target is to keep the volume cadence roughly monthly. Not because there's a deadline, but because the rhythm keeps me honest about scope. If I'm not ready to ship a volume in a month, I've probably let the scope creep beyond what Arcade is supposed to be.

Arcade is free, no sign up required, and available at arcade.ayteelabs.com. Volume 4 when it's ready.
    `.trim()
  },

  {
    slug: 'kinka-google-auth',
    title: 'Getting Google Auth Working in a Chromium Fork Is More Painful Than It Should Be',
    date: '14 April 2026',
    category: 'Build Notes',
    readTime: '5 min read',
    excerpt:
      'I am still working on it. Google OAuth in a custom Chromium build is a different problem to Google OAuth in a web app and I want to be honest about why.',
    content: `
Most OAuth implementations are straightforward. Register an application, get a client ID, redirect to Google, get a token back. An afternoon of work, maybe two.

Google OAuth in a custom Chromium fork is not that. I've been at this for a while and I want to write down what I've found because the information out there is scattered and a lot of it is out of date.

**Why it's different**

When you build a web app and implement OAuth, Google is issuing tokens to a web application it can identify by its registered origin. The flow is well-documented, the error messages are mostly useful, and the edge cases are well-trodden.

When you build a Chromium fork, you're not a web application. You're a browser. The identity that Google uses to determine whether to issue tokens is tied to Chromium's internal application identity system, which is not something you can just reconfigure by changing a client ID.

Kinka inherits Chromium's application identity by default. That means it presents itself to Google as Chromium, which sounds fine until you realise that the specific token scopes and capabilities available to a browser application versus a third-party application are different, and the documentation for exactly what is available to whom is not clear.

**The specific problems I've hit**

The first issue was with the OAuth redirect flow. Standard web OAuth uses redirect URIs. Browser OAuth uses a different mechanism involving native messaging and internal browser callbacks. Getting that plumbing right in a fork requires understanding how Chromium handles auth callbacks internally, which is not well documented outside of the Chromium source itself.

The second issue is around application verification. For certain Google services, Google wants to verify that the application requesting access is what it claims to be. For web apps this is handled through the developer console. For browser forks it's significantly more complicated and involves a verification process that assumes you're shipping a browser at a scale that justifies Google's attention.

The third issue is the one I'm still working through, which is around the specific permission scopes available to browser applications for things like bookmark sync and account integration. There are capabilities that Chrome has access to that are not available to forks through the standard OAuth flow.

**What I'm doing about it**

The short-term solution is to scope down what Kinka uses Google auth for. The sync features that require deep browser-level OAuth are not essential for the core Kinka experience. The features that just need basic account identification, like knowing who's logged in for personalisation purposes, can work with a more standard OAuth flow that doesn't require browser-level identity.

The longer-term answer probably involves either applying for the specific permissions Google makes available to browser vendors, which is a process I'm still investigating, or building the features that would have required deep Google integration in a way that doesn't depend on it.

This is one of the less glamorous parts of building a browser. The core browsing experience is surprisingly achievable. The integration layer with the broader internet ecosystem, especially Google's ecosystem, is where the real complexity lives.

I'll write more on this when I have a resolution. For now it's ongoing.
    `.trim()
  },

  {
    slug: 'qa-engineers-who-understand-code',
    title: 'Why QA Engineers Who Understand Code Are Worth More Than Those Who Do Not',
    date: '14 April 2026',
    category: 'QA & AI',
    readTime: '6 min read',
    excerpt:
      'There is a version of QA that stops at the ticket. Reproduce it, log it, move on. I have been doing something different lately and the difference in impact is hard to ignore.',
    content: `
I have been in QA long enough to see both versions of the role. The version that stays in the test case and the version that gets into the code. The gap in impact between them is significant and I think it's worth being direct about why.

**What surface-level QA looks like**

The reproduce-and-report model of QA is not useless. Structured defect reports matter. Regression coverage matters. Consistent test execution matters. All of that is real work that catches real problems.

But it has a ceiling. If your entire understanding of a defect is what you can observe through the UI, your ability to communicate that defect usefully to a developer is limited. You can describe what happened. You cannot say where it probably happened. You cannot identify the likely class of problem. You cannot suggest what related areas might be affected.

The developer has to do all of that work themselves. Which is fine, it's their job, but it means the QA engineer's contribution stops at the point where it could have continued.

**What changes when you understand the code**

When I look at a defect now, I'm thinking about what in the codebase could produce the behaviour I'm seeing. Not because I'm going to fix it, but because that framing changes what I do next.

It changes where I look for related issues. If I understand roughly how a feature is implemented, I have a much better sense of what other areas are likely to be affected by the same underlying problem. Surface-level testing finds the defect that was reported. Code-informed testing finds the defects that weren't.

It changes how I write the report. Instead of logging observed behaviour and leaving the root cause as unknown, I can include a hypothesis. This is the right level of depth for a developer to engage with. It saves them a diagnostic step and it makes the QA engineer part of the problem-solving conversation rather than just the observation layer.

It changes how I talk to developers. The conversations I have with developers now are different to the ones I was having three years ago. They're faster, more specific, and more useful. Developers talk differently to testers who understand code. They share more context, they engage with the analysis rather than just the report, and the feedback loop tightens.

**How I got here**

I want to be honest that this didn't happen overnight. I've been building things in my own time for years, side projects, tools, experiments. That practice is what built the skill. Not formal training, not a certification, just the habit of building.

The things I've built for AyTee Labs have directly made me better at my day job. When I build a feature and then test it myself, I understand the testing problem differently to when I'm testing someone else's work blind. That understanding transfers.

I'm not saying every QA engineer needs to become a developer. I'm saying that the QA engineers who are curious about how the things they test are built, and who do something with that curiosity, end up being a different calibre of contributor.

**What teams should be looking for**

If you're hiring in QA and you're not asking about technical depth, you're probably optimising for the wrong thing. Not test case volume, not tool familiarity, but the ability to understand a system well enough to test it intelligently.

The QA engineers who ask developers questions about architecture are more valuable than the ones who don't. The ones who can read a pull request and ask a useful question about it are more valuable than the ones who wait for the deployment. The ones who understand what they're testing, not just how to test it, are the ones worth building a team around.

That version of QA is also more interesting to do. The ceiling on impact is much higher and the work is genuinely harder in the right ways.
    `.trim()
  },

  {
    slug: 'building-linkdrop',
    title: 'I Built a Link-in-Bio Tool From Scratch. Here Is What That Actually Involved.',
    date: '17 April 2026',
    category: 'Build Notes',
    readTime: '8 min read',
    excerpt:
      'Linkdrop is live. A full-stack link-in-bio platform with auth, analytics, themes, QR codes and an explore page — built in a single sprint. Here is the honest version of how that went.',
    content: `
Link-in-bio tools are a solved problem. Linktree exists. Beacons exists. There are dozens of them. Building another one is the kind of decision that requires either a good reason or no self-awareness. I'll let you decide which applies here.

The actual reason was technical. I wanted to build a full-stack product with auth, a user-facing dashboard, public profile pages, analytics, and a proper data layer, under time pressure, to see how fast I could ship something coherent. Linkdrop was the vehicle for that experiment.

**What Linkdrop actually is**

Linkdrop lets you create a personalised link page with your links, your branding, and your theme. You get a public URL at linkdrop.ayteelabs.com/yourhandle that you can point people to. Standard stuff.

Where I spent more time than expected was on the features that make it feel like a real product rather than a demo. Theme customisation. QR code generation for your profile. An explore page that surfaces public profiles. Analytics showing you which links are getting clicked and by whom.

None of those are technically difficult in isolation. Getting them all working together, with a proper auth layer, on a real database, with a UI that doesn't feel like a tutorial project, takes more time than a features list suggests.

**The auth decision**

I used NextAuth, now Auth.js, for authentication. Google and GitHub providers, magic link email fallback.

The decision I'd make differently is around session handling. I went with JWT sessions for simplicity and hit the predictable problem: when a user updates their profile, the session token doesn't automatically reflect those changes until it expires and is refreshed. For a profile-heavy product where the session data includes display information, this produces subtle inconsistencies that feel like bugs even when they aren't. Database sessions would have avoided this. I'll use them next time.

**The analytics layer**

I built a lightweight analytics system rather than dropping in a third-party tool. Each link click writes an event to the database with a timestamp and a hashed IP for rough geographic deduplication. The dashboard aggregates those events into a simple view.

The reason for building rather than buying was control. Third-party analytics tools introduce a script on every page load, terms of service you're agreeing to on behalf of your users, and a dependency you can't easily remove. For a product where trust is the thing you're selling, those feel like the wrong tradeoffs.

The downside is that it's simpler than something like Plausible or Fathom. It doesn't do geographic breakdown or referrer analysis. For v1 that's fine. Click counts and trends are the things users actually care about at this stage.

**What broke on launch**

Two things broke that shouldn't have.

The image upload flow had a race condition. The upload completes and immediately triggers a profile refresh. If the refresh beats the propagation of the new image URL to the CDN edge, the profile loads with a broken image reference. The fix was adding a short delay before the refresh, which is the wrong kind of fix but works in practice.

The image crop modal introduced a build error on Vercel because react-easy-crop was not installed. It worked locally because I had it in my global node modules. Clean installs on Vercel do not have that luxury. A reminder that your local environment lying to you is a real and constant risk.

**What I'd do differently**

Database sessions over JWT. I've made the JWT tradeoff twice now and regretted it both times.

More conservative dependency management. The react-easy-crop incident was embarrassing and entirely preventable. I now run a clean install in a temp directory before any production deployment.

More time on the explore page. It's functional but the discoverability mechanism is basic. For a product where the network effect matters, the explore experience should be something people actually want to use rather than something that exists to say it exists.

**What worked**

The theme system worked better than I expected. Letting users choose from a set of pre-designed themes rather than building a freeform customisation tool was the right call. Freeform customisation is a feature that sounds good and produces a lot of ugly profiles. Curated themes are easier to build and produce better results.

The QR code feature gets more use than I expected. People are using Linkdrop for physical contexts, event badges, business cards, printed materials. The QR code is the bridge between the physical and the digital and it costs almost nothing to implement.

Linkdrop is live at linkdrop.ayteelabs.com. Free to use, no credit card, your page is live in under two minutes.
    `.trim()
  },

  {
    slug: 'building-burnbin',
    title: 'BurnBin: Why I Built a Tool That Destroys Itself',
    date: '19 April 2026',
    category: 'Build Notes',
    readTime: '8 min read',
    excerpt:
      'Every time I shared a credential over Slack or email I knew it was sitting there forever. BurnBin is the tool I built to fix that — private, self-destructing snippet sharing with burn-after-read, expiry, and password protection.',
    content: `
Every developer has done it. You need to share a credential with a colleague. You drop it in Slack. You send it in an email. You paste it into a Jira comment. You know, as you're doing it, that this is not the right way to handle sensitive information. You do it anyway because there's no better option that's fast enough to actually use.

BurnBin is the better option.

**The problem in detail**

The issue with sharing secrets through normal channels is permanence. Slack messages sit in your history indefinitely. Email threads get forwarded. Jira tickets get exported. A credential that was supposed to be temporary becomes permanently accessible to anyone who can read those channels, now or in the future.

This is not a theoretical risk. Leaked credentials in internal communication tools are a real and common cause of security incidents. The friction of using a proper secrets management tool means people reach for whatever's convenient instead.

The gap I was trying to close was between the secure option and the convenient option. BurnBin needed to be fast enough to actually use under pressure, or it would lose to Slack every time.

**What BurnBin does**

BurnBin lets you create an encrypted snippet with a self-destructing link. You paste your secret, set an expiry, optionally set a password, and you get a URL. Share the URL. When the recipient opens it, the content is shown once and then deleted. If someone else opens the same URL, it's gone.

The burn-after-read behaviour is the core thing. The link doesn't expire after a time period, it expires after a read. Which means the window of exposure is as short as possible. You share it, they read it, it's gone.

The encryption is client-side. The server never sees the plaintext content. What gets stored in the database is already encrypted, with the decryption key embedded in the URL fragment, which is never sent to the server in a standard HTTP request. Even if the database were compromised, the stored content is not useful without the corresponding URL.

**The technical decisions**

Client-side encryption with the key in the URL fragment is a pattern that tools like PrivateBin use. The fragment, the part of the URL after the hash, is not included in HTTP requests to the server. That means the server genuinely cannot see the content. It's not a policy claim, it's a technical constraint.

The encryption itself uses AES-GCM through the Web Crypto API. Browser-native, no dependencies, well-audited. The key is generated client-side at creation time, embedded in the fragment, and used client-side at read time for decryption.

The expiry system has two layers. Time-based expiry runs as a scheduled cleanup job. Read-based expiry triggers immediately on the first successful decryption. A snippet that hasn't been read but has passed its expiry window gets cleaned up on the next run. A snippet that gets read is deleted immediately, regardless of its expiry time.

Password protection adds an additional layer. The password is used to derive an additional encryption key that wraps the primary key. Knowing the URL alone is not enough to read the content if a password is set. This is useful for particularly sensitive content where you want to make sure the recipient is who you intended.

**What I got wrong first**

The first version stored the encrypted content in memory between creation and the redirect. Under any load, this produced race conditions where a snippet that had just been created couldn't be found because the write hadn't completed before the redirect triggered the read. Moving to a write-then-confirm pattern with an explicit read-back before issuing the redirect fixed this.

The burn logic also had a subtle bug where concurrent reads, two people opening the link at the same time, could both succeed before either triggered the delete. I fixed this with a database-level atomic update that sets a burned flag and returns whether the update was the first one. Only the first successful read shows the content. Subsequent reads see a burned message.

**How it fits into a workflow**

BurnBin is fast enough to use without thinking about it. Create a snippet, share the URL, done. It takes about fifteen seconds. That's the threshold that determines whether people will actually change their behaviour. If it's slower than dropping something in Slack, people will keep dropping things in Slack.

The extension I'm thinking about is a CLI tool that pipes stdin directly to BurnBin and returns the URL. For developers working in the terminal, that would make it genuinely faster than any alternative.

BurnBin is live at burnbin.ayteelabs.com. Free to use. Your secrets don't have to live forever.
    `.trim()
  },

  {
    slug: 'building-layerbuzz',
    title: 'Building LayerBuzz: A Marketplace for Digital Products With Stripe Connect and No Monthly Fee',
    date: '22 April 2026',
    category: 'Build Notes',
    readTime: '9 min read',
    excerpt:
      'I wanted a marketplace I could use to sell my own products without paying a monthly platform fee. LayerBuzz is what I built — Stripe Connect, licence key generation, seller storefronts, and a three percent transaction fee.',
    content: `
The products I build at AyTee Labs needed somewhere to live commercially. I had Portix Pro, Ankoryn Pro, Clickument. Each was using its own payment system. Stripe here, a payment link there, a custom checkout elsewhere. It worked but it was fragmented and increasingly hard to maintain.

I looked at the obvious options. Gumroad. Lemon Squeezy. Paddle. All of them have monthly fees or percentage cuts that compound as your volume grows. All of them are also someone else's platform, with someone else's design decisions about what your product page looks like and what data you can access.

I decided to build my own.

**What LayerBuzz is**

LayerBuzz is a marketplace for digital products. Sellers create a storefront, list their products, set their prices. Buyers browse, purchase, receive licence keys or download links. LayerBuzz takes three percent per transaction. No monthly fee.

The three percent is lower than every platform I looked at. Gumroad is ten percent. Lemon Squeezy starts at five. Paddle is higher. The trade-off I'm making is volume over margin. I'd rather have more sellers using the platform because the economics make sense than fewer sellers because the fee structure doesn't.

**The Stripe Connect decision**

Stripe Connect is the right architecture for a marketplace and also the most complex part of the build. Standard Stripe processes payments into your account and you pay sellers. Connect processes payments directly into seller accounts with a platform fee withheld. The money never touches LayerBuzz's bank account.

That distinction matters for several reasons. It simplifies the accounting. It removes the liability of holding other people's money. It makes the tax reporting situation significantly cleaner. And it means sellers get paid immediately rather than waiting for a weekly or monthly payout cycle.

The setup process for Connect is longer than standard Stripe. Sellers go through an onboarding flow that collects identity information and bank details. That flow is handled by Stripe, not by me, which means the compliance and regulatory burden sits with Stripe. That's the trade-off you're making when you use Connect rather than managing payouts manually.

**Licence key generation**

Most digital products sold on LayerBuzz include licence keys. The key generation system creates unique keys at purchase time, associates them with the buyer's email and the product, and provides a validation endpoint that products can call to verify a key is legitimate and active.

The validation endpoint is what allows products to implement proper licence enforcement rather than just trusting that the buyer paid. Portix validates its licence against this endpoint every time it runs. If the key isn't valid, or has been revoked, or has exceeded its activation limit, the product can respond appropriately.

The key format is designed to be human-readable enough to be entered manually if necessary while still being long enough to be practically unguessable. Four groups of six alphanumeric characters. Not cryptographically interesting but fit for purpose.

**Seller storefronts**

Every seller on LayerBuzz gets a public storefront at layerbuzz.ayteelabs.com/seller/username. This is the page you send people to if you want to browse everything a particular seller offers.

The storefront design is intentionally minimal. Name, short bio, product grid. The focus is on the products, not on the storefront chrome. I looked at a lot of creator marketplace storefronts while building this and the ones that work best are the ones that get out of the way and let the products speak.

Theme customisation is on the list for a future version. For v1 the priority was making the storefront fast, clean, and trustworthy rather than endlessly configurable.

**What broke**

Webhooks broke first. Stripe webhooks arrive asynchronously after the checkout session completes. In my first implementation, the success page read the order status from the database before the webhook had written it. This produced a gap where buyers saw a confirmation page but couldn't yet access their purchase.

The fix was adding a polling mechanism on the success page that checks for the order up to ten times with a short delay between attempts. It's not elegant but it handles the race condition in practice. A better fix would be to make the checkout flow explicitly wait for order confirmation before redirecting, which is something I'll implement properly in the next version.

The image crop modal introduced a build error on Vercel because react-easy-crop was not installed. It worked locally because I had it in my global node modules. Clean installs on Vercel do not have that luxury. A reminder that your local environment lying to you is a real and constant risk.

**The architecture decisions I would make again**

Stripe Connect over manual payouts was the right call. The alternative is collecting all payments centrally and paying sellers out manually, which is a compliance and accounting nightmare. Connect handles the money movement, the tax reporting, and the identity verification at the seller level. Worth the setup pain.

Supabase for everything was the right call. Auth, database, storage, row level security, realtime if I need it later. One platform, one dashboard, no stitching together multiple services. The free tier is generous enough that LayerBuzz can grow significantly before I need to think about costs.

Server-side theme application with an inline script was the right call. The alternative, applying the theme in a client component on mount, produces a visible flash every time the page loads. For a marketplace where storefronts are the product, that flash is unacceptable.

Resend for transactional email was the right call. The API is clean, the logs are clear, the deliverability is solid, and the free tier covers a serious volume of emails for a product at this stage.

**What is missing and what comes next**

The things I shipped intentionally without are subscriptions, affiliate codes, bundle pricing, a public discovery feed, and custom domain support for seller storefronts. All of them are on the list. None of them were right for v1.

The discovery feed is probably the most important. Right now LayerBuzz is a tool for sellers who bring their own audience. For it to become a marketplace in the true sense, buyers need to be able to find products they were not already looking for. That requires a different kind of product thinking and I want to get the seller experience right first.

Custom domains are the other one I keep coming back to. If you are a creator with your own brand, pointing shop.yourname.com at your LayerBuzz storefront changes the trust dynamic entirely. It is a meaningful feature for serious sellers and not technically complicated to build.

**What I learned**

Webhooks need to be treated like a different programming model entirely. They are not synchronous. They do not throw errors in places you can catch them. They arrive out of order, retry on failure, and your only debugging tool is logs. Every webhook handler I write from now on will have explicit logging at every step.

Environment variables are a class of bug you cannot afford to be casual about. The difference between localhost and a real URL cost me two hours on launch day. I now have a pre-deployment checklist that includes every environment variable the application needs to function and I verify it before every push to production.

Building the commerce layer for your own products first is the right way to validate a marketplace. Portix Pro sells through LayerBuzz. I am the first seller. I have direct skin in the game. If the licence key delivery breaks, I know about it immediately. If the checkout flow is confusing, I feel it. Building your own product on your own platform is the fastest quality feedback loop there is.

LayerBuzz is live at layerbuzz.ayteelabs.com. Three percent per sale. No monthly fee. Start selling free.
    `.trim()
  },

  {
    slug: 'one-commerce-layer-for-everything',
    title: 'Why I Moved Every Product I Sell Onto LayerBuzz',
    date: '25 April 2026',
    category: 'Build Notes',
    readTime: '5 min read',
    excerpt:
      'Portix was using Stripe directly. Ankoryn had its own checkout. Clickument pointed straight at a Stripe payment link. All three now sell through LayerBuzz. Here is why that was the right call.',
    content: `
When I shipped LayerBuzz I had three products already selling through different payment systems. Portix Pro had its own licence validation API and pointed buyers at a Stripe payment link. Ankoryn had a built-in checkout flow that called its own API routes to create Stripe sessions. Clickument had a hardcoded Stripe buy URL baked directly into the extension popup.

All three worked. All three were also a maintenance problem waiting to happen.

**The problem with three different commerce systems**

Each product having its own payment system sounds fine until you think about what that actually means in practice.

Portix had its own Stripe product, its own webhook, its own licence validation endpoint. When I needed to update how licence keys were issued, I had to touch Portix-specific code. When I wanted to see all my sales in one place, I could not. When I wanted to apply a discount code across my products, there was no concept of that.

Ankoryn's checkout was the most elaborate. API routes for creating Stripe sessions, a webhook listener for purchase events, a separate licence verification flow. All of that living inside the Ankoryn codebase meant that any change to how I handled payments required touching the Ankoryn repository, running tests, deploying a new version. For a product that is otherwise stable, that is a lot of overhead for what should be a shared concern.

Clickument was the simplest and also the most brittle. A hardcoded Stripe payment link in a Chrome extension means every time that link needs updating, a new extension version has to go through Chrome Web Store review. Which takes days.

**The case for a single commerce layer**

What I actually wanted was one place where all of my products live, one dashboard where I can see every order, one system for generating and validating licence keys, and one place to update pricing, apply discounts, or retire a product.

That is exactly what LayerBuzz gives me now.

Portix Pro is a product on LayerBuzz. The CLI validates licence keys against the LayerBuzz API. The purchase flow is the LayerBuzz checkout. If I want to offer a discount on Portix, I create a discount code in the LayerBuzz dashboard and it works immediately. No code changes, no deployment.

Ankoryn Pro is the same. The upgrade button in the app now opens the LayerBuzz product page. The licence validation in the app calls the LayerBuzz validate endpoint. I removed an entire API directory from the Ankoryn codebase because LayerBuzz handles all of it.

Clickument pointed directly at a Stripe payment link for years. Changing that required updating the extension and waiting for Chrome review. Now it points at the LayerBuzz product page. When I need to change the price, add a bundle, or run a promotion, I do it in the LayerBuzz dashboard and it is live immediately. The extension never needs to change unless the product itself changes.

**The practical benefits**

The most immediate one is visibility. Every sale across every product shows up in one orders table. I can see at a glance what is selling, when, and to whom. Before this, getting that picture required cross-referencing Stripe dashboards for three separate products.

Licence key management is centralised. Every key that has ever been issued, for any product, lives in one database. If I need to revoke a key, update activation limits, or check whether a customer's key is valid, I have one place to look.

Discount codes work across the catalogue. I can create a code that applies to a specific product or to everything. That flexibility did not exist when each product had its own system.

The maintenance burden is dramatically lower. Portix, Ankoryn and Clickument do not need to care about payments anymore. They just need to know where to send someone who wants to buy, and where to validate a key. Both of those are now a single URL.

**What this means for future products**

Any product I build from here that needs a payment layer gets it from LayerBuzz. No Stripe integration to build, no webhook handler to write, no licence validation endpoint to maintain. Create a product in the dashboard, set the price, point the buy button at the product page. Done in ten minutes.

That is the compound benefit of building the infrastructure once. The first product on LayerBuzz required months of work to get the commerce layer right. Every product after it gets that for free.

If you are building multiple products and managing separate payment systems for each one, it is worth asking whether that complexity is actually buying you anything. In my case it was not. One commerce layer, properly built, is worth more than three separate ones held together with environment variables and crossed fingers.
    `.trim()
  },

  {
    slug: 'building-specforge',
    title: 'SpecForge: I Got Tired of Writing Test Scenarios From Scratch So I Built Something That Does It',
    date: '5 May 2026',
    category: 'QA & AI',
    readTime: '6 min read',
    excerpt:
      'SpecGhost generates specs. BugReporter generates reports. But neither one gave me the raw test scenario output in the exact format my team actually uses. SpecForge fills that gap — plain English in, Gherkin, Cypress, Playwright, Robot Framework and more out.',
    content: `
I have been building QA tooling for a while now. BugReporter handles defect reporting. SpecGhost handles test specification generation. Both have been useful and both have taught me something about where the real friction in QA workflows sits.

The feedback I kept getting, and the gap I kept feeling myself, was about format. QA teams do not all work in the same way. Some write Gherkin. Some write Robot Framework test suites. Some write Cypress or Playwright tests directly. A tool that generates output in one format is useful to some teams and useless to others.

SpecForge is the answer to that.

**What it does**

SpecForge takes a plain English description of a feature or behaviour and generates test scenarios in whichever formats you need. Gherkin, Robot Framework, Cypress, Playwright, JUnit, Jest. You select the formats before you generate and you get tabbed output for each one, ready to copy or export.

The input is genuinely plain English. You do not need to know anything about the output format to use it. You describe what the feature does, what the edge cases are, what should and should not happen, and SpecForge handles the translation into structured test syntax.

That translation step is where the value is. Writing Gherkin from scratch is not hard but it is slow. Getting the Given/When/Then structure right, covering the right scenarios, including the edge cases that matter, that work takes time. SpecForge does the first draft in seconds. A tester reviews it, adjusts it, and ends up with something usable in a fraction of the time.

**Why multiple formats**

The decision to support multiple formats from the start came from watching how different teams work.

A team using Cucumber and Java writes Gherkin feature files. A team using Robot Framework writes .robot test suites. A team using Playwright writes TypeScript spec files. If your tool only speaks one of those languages, you are forcing teams to translate, which defeats a significant part of the point.

SpecForge gives you the output in the format you actually use. No translation step. No reformatting. You generate, you review, you use it.

The other reason is that test coverage often lives across multiple tools. You might write Gherkin for your acceptance tests and Cypress for your integration tests. Being able to generate both from the same description, in the same session, is useful in ways that a single-format tool is not.

**The AI provider choice**

One of the design decisions I felt strongly about was giving users control over the AI model running the generation. SpecForge works with Claude, OpenAI, and local models via Ollama or LM Studio.

The local model support matters more than it might seem. A lot of teams working on enterprise software cannot send feature descriptions to an external API. The data governance considerations alone rule out cloud AI for a significant portion of the market. If your only option is a local model, SpecForge still works. You configure the endpoint, you pick your model, you generate.

The quality difference between a large cloud model and a small local model is real, especially for structured output like Gherkin. Claude and GPT-4o produce cleaner, more consistent output than llama3.2 running locally. But llama3.1 or mistral-nemo on a decent machine produce results that are genuinely useful. The tool works across the range.

**What the output actually looks like**

The Gherkin output includes Feature declarations, Scenario and Scenario Outline blocks with appropriate Given/When/Then structure, tags for smoke and regression coverage, and Examples tables where parameterisation makes sense. It is not perfect on every input but it is a solid first draft that covers the main cases.

The framework-specific outputs, Cypress, Playwright, JUnit, Jest, are structured correctly for each framework. Cypress output uses describe and it blocks with cy commands. Playwright output uses TypeScript with page locators and expect assertions. JUnit output uses JUnit 5 annotations and Assertions. Each format gets the idioms right for its ecosystem.

**How it fits with BugReporter and SpecGhost**

The three tools are complementary rather than competing.

SpecGhost is for generating full test specifications from requirements. It produces structured test cases with preconditions, steps, and expected results. That output is what you'd put in a test management tool.

SpecForge is for generating executable test scenarios in automation framework syntax. It produces the code or feature files you'd put directly in a test suite. The focus is on the format your automation tooling actually consumes.

BugReporter is for when things go wrong. Structured defect reports that go into Jira or whatever tracker you use.

Together they cover the main places where QA engineers spend time on structure rather than thinking. The thinking is still yours. The scaffolding is not.

**What comes next**

The obvious next step is letting you feed in an existing spec or user story directly and have SpecForge use that as the source rather than requiring you to rephrase it as plain English. That removes a translation step for teams that already have documentation.

Custom templates are also on the list. If your team has a specific Gherkin style guide or a preferred way of structuring Playwright tests, you should be able to tell SpecForge about that and have the output conform to it.

SpecForge is live at specforge.ayteelabs.com. Your API key never leaves your browser. Pick your formats, describe your feature, get your scenarios.
    `.trim()
  }
]
