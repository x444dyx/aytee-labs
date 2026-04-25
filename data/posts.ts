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
I use AI constantly. For thinking through problems, drafting content, exploring ideas, working through technical decisions. But the thing that kept frustrating me was how every session started from zero.

You explain your context again. You re-establish what you are working on. You remind the model what it said two days ago. If you switch between models, you lose everything. The AI is powerful but it has no memory of you, no continuity, no sense of the broader work you are doing.

That friction compounded over time. I started keeping notes to paste in at the start of sessions. I tried various tools. Nothing felt right. So I built Ankoryn.

**What I actually wanted**

The core thing I wanted was simple to describe and hard to build. I wanted an AI workspace that remembered what I had told it, could summarise and compress older context so it did not eat the whole context window, and could route between different models depending on what I needed at any given moment.

Not a chat interface with a nicer design. A genuine workspace layer that sat on top of the models and managed memory, context and routing in a structured way.

I also wanted it to feel like a place to work, not just a place to chat. There is a difference. Chat interfaces are disposable. A workspace has persistence, structure, and a sense that the work you do there accumulates into something.

**The memory problem**

The hardest part of building this was memory management. Language models have a finite context window. If you just keep appending conversation history, you hit the limit fast and older context gets dropped. So the question is how you compress and summarise what has come before without losing the things that actually matter.

I built a summarisation layer that periodically condenses older conversation segments into compressed summaries, storing them in IndexedDB via Dexie.js. When a new session starts, the relevant summaries are retrieved and injected back into the context alongside the recent conversation history. The model gets enough context to feel continuous without the full raw history eating the window.

Getting this right took longer than anything else in the project. The summarisation has to be aggressive enough to save space but careful enough not to throw away context that will matter later. I went through several iterations before it felt reliable.

**Cross-model routing**

The other thing I wanted was the ability to use different models for different tasks without having to manage multiple interfaces. OpenAI for some things, Gemini for others. The routing layer in Ankoryn lets me switch between them inside the same workspace without losing the thread of what I am working on.

This sounds straightforward but there are edge cases everywhere. Different models handle context differently. Token limits vary. The way you structure a system prompt that works well in one model does not always translate directly to another. A lot of the work was making the routing feel seamless even when the underlying models behave differently.

**What I use it for now**

Ankoryn is my primary AI interface for serious work. When I am working through a complex technical problem, writing something that needs multiple drafts, or planning a new project, I do it in Ankoryn because I know the context will be there when I come back to it.

It is also where I test a lot of ideas before they become products. The workspace structure means I can keep separate threads for different projects without them bleeding into each other.

**What building it taught me**

The biggest lesson was about the gap between what AI demos show and what reliable AI-powered products actually need. A demo of persistent memory is easy. A system that manages memory correctly across hundreds of sessions, different models, varying context lengths and real user behaviour is a different problem entirely.

I also learned a lot about context engineering, which I think is going to become a recognised discipline in the same way prompt engineering has. How you structure the information you give a model, what you include, what you compress, what you leave out, has a massive impact on output quality. Building Ankoryn forced me to think about this at a level I had not before.

If you are building anything AI-powered and you are not thinking carefully about context management, that is probably where your quality problems are coming from.
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
The thing that broke me was the wait.

As a QA lead, a big part of my job is testing new features early and giving developers fast, useful feedback. But the workflow was slowing everything down. A developer would build something locally, I would not be able to see it until it was deployed to a staging environment, and by the time it got there it had usually gone through several more changes. The feedback loop was too long and too slow.

Staging deployments take time. They require the feature to be in a state someone is comfortable putting on a shared environment. That means by the time I am looking at something, it is already further along than it needed to be for me to give useful input. Catching a problem at that point costs more to fix than catching it when the work is fresh.

What I actually needed was a way for developers to share what they were building directly from their local machine, before it was ready for staging, so I could see it, test it, and give feedback immediately. Not a screen share. Not a description. The actual running thing, with a URL I could open and interact with properly.

I looked at what existed. Ngrok does the tunnelling but it is generic, has no context about what is being shared or why, and the free tier limits made it awkward for regular daily use. Nothing I found had a feedback layer built in, which meant any comments still had to go through Slack or Jira anyway.

So I built Portix.

**How it works**

Portix runs a lightweight tunnel from your local machine to a public URL hosted on an Oracle Cloud VM behind NGINX. When you start it, you get a URL you can share immediately. The tunnel stays open as long as you need it and closes cleanly when you are done.

The Git integration came from a practical problem. Developers are often working across multiple branches and when they share a link I need to know immediately what I am looking at. Is this the feature branch or main? Is this the fix or the original issue? Portix picks up the current branch name and labels the preview URL with it so when I open the link I can see exactly which branch I am testing. Small thing but it removes a whole category of confusion before the feedback even starts.

The feedback overlay is a floating widget that appears on the shared page. Reviewers can pin comments to specific areas of the page without needing any account or setup. The comments come back to me in real time via WebSockets. No email thread, no separate feedback tool, no trying to decode written descriptions of visual problems.

**The infrastructure decisions**

Running a tunnelling tool means I needed something persistent on the server side. I went with an Oracle Cloud VM because the free tier is genuinely usable, NGINX to handle the routing and SSL termination, PM2 to keep the Node process running reliably, and Cloudflare in front for DNS and additional protection.

The WebSocket layer for real time feedback was the trickiest part to get stable. Keeping connections alive reliably across different network conditions, handling reconnects gracefully, making sure feedback posted from a reviewer actually arrives even if there is a brief drop in connectivity, all of that needed more attention than I expected.

**What it changed about the QA workflow**

The feedback loop is genuinely faster now. Developers share a Portix link when something is ready for a first look, I open it, test it properly in the browser rather than watching someone scroll around on a call, pin my comments directly onto the relevant parts of the page, and they have actionable feedback within minutes.

The quality of the feedback has improved too. When I am actually interacting with a feature rather than watching a demo, I find things I would not have found otherwise. Real interactions, real edge cases, the kind of stuff that only surfaces when you are actually using the thing.

The other shift is that developers share earlier now because the barrier is low. There is no deployment, no preparation, just a link. That means I am seeing features at a stage where changing direction is still cheap. That is exactly where QA input should be landing.

Before Portix I was either waiting for staging or asking developers to walk me through things on a call. Both options were slower, more disruptive, and produced worse feedback. Removing that friction changed how the whole team works together.

It is available at portix.ayteelabs.com if you want to try it.
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
People ask me how I find the time. The honest answer is that I do not find it, I make deliberate choices about where my time goes and I have built habits that make building sustainable rather than exhausting.

I am not going to pretend I have some perfect system. Some weeks I ship a lot. Some weeks the day job is intense and the side work barely moves. But over time, across a full year, the output has been real. Multiple live products, a growing portfolio, things I am genuinely proud of.

Here is what actually works for me.

**Scope is everything**

The biggest mistake I see people make with side projects is building something too large to finish in the time they have. You start something ambitious, life gets in the way, the project stalls, and then the half-finished thing sits there making you feel bad every time you think about it.

I deliberately scope everything small. Not because I lack ambition, but because a finished small thing is worth more than an unfinished big thing in every possible way. It is in front of users. It is building evidence of what I can do. It is teaching me things.

BugReporter and SpecGhost were both built in a few evenings. Deliberately. I could have added ten more features to each of them before shipping. I chose not to. Get it out, see if it is useful, iterate from there.

**Protect the hours that work for you**

I know when I do my best building work and I protect those hours. For me it is early morning before the day job starts and sometimes late evening after everything else is done. Not every day, but consistently enough to keep momentum.

The key thing is not trying to build in whatever time is left over. Leftover time is fragmented, low energy and easily stolen by other things. If building matters to you, you have to treat it like it matters and give it time that is actually yours.

**The day job makes me a better builder**

This is something I genuinely believe. Working as a Test Lead means I think about quality, reliability and user experience constantly. I think about what breaks, what confuses people, what makes software painful to use. That perspective feeds directly into the products I build.

I also work in an AI-driven product environment, which means I am seeing how AI features behave in production, what the real failure modes are, what users actually struggle with. That informs how I build tools like Ankoryn and SpecGhost in ways that purely academic building would not.

The two things are not in competition. They inform each other.

**Keep a short list**

I keep a list of things I want to build. Not a backlog with priorities and estimates, just a short list of ideas I am genuinely excited about. When I have time to start something new I look at the list and pick the thing I am most motivated by right now.

Motivation matters more than most productivity advice acknowledges. If I am building something I am genuinely interested in, I will find time for it. If I am building something that feels like obligation, it will stall.

**Ship before it feels ready**

This one took me a while to internalise. The version of the product in my head is always better than the version I can build in the time I have. If I wait until it matches the version in my head I will never ship it.

Shipping something imperfect that works is more valuable than not shipping something perfect. The feedback you get from real users is worth more than any amount of internal iteration. And honestly, the things I thought were imperfect when I shipped them have almost never been the things users cared about.

**The compound effect**

The thing I would tell anyone who is thinking about starting is that the value compounds. The first project teaches you things. The second is faster because of the first. By the time you have several things live, you have a body of work that speaks for itself without you having to explain it.

That is where I am trying to get to. Not a single impressive project but a consistent track record of building things, shipping them, and learning from them. Over time that becomes something that is hard to argue with.
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
When I launched Arcade with Volume 1, the idea was simple. Three minimal browser games, no accounts, no installs, just open and play. Pulse, Sync and Fold. Each one testing something different: timing, pattern recognition, spatial reasoning. The response was good enough to keep going.

So I kept going.

**Volume 2: New Challenges**

Volume 2 adds three new games and pushes the difficulty in a different direction. Where Volume 1 was about rhythm and flow, Volume 2 is about pressure and memory.

Pair puts a grid of shapes in front of you and asks you to find the only matching pair before time runs out. Every level has exactly one correct match hidden in plain sight. It sounds straightforward until the grid gets bigger and the shapes start looking very similar very quickly.

Recall is the most cognitively demanding game in the collection so far. You watch a sequence of shapes appear, then you have to recreate it from memory. Each round adds to the sequence. It is a direct test of visual working memory and it gets uncomfortable fast in the best possible way.

Adapt is probably my favourite of the three. The rules change as you play. You might be told to tap circles, then the rule flips and you have to tap triangles, then it changes again. Staying sharp when the ground keeps shifting under you is a different kind of challenge to anything in Volume 1.

**Volume 3: In Motion**

Volume 3 is a single game and it earns that focus entirely.

Flow is a trail navigation game where you move through obstacles as your path grows behind you. The rule is simple: do not cross your own trail. The execution gets harder the longer you survive because every move you make narrows the space available for future moves. It has that quality where you understand immediately what you did wrong the moment it goes wrong, and you want to try again immediately.

It is the kind of game I could play for twenty minutes without noticing.

**Volume 4: Coming Soon**

Volume 4 is in progress and the theme is Control Systems. Three games: Shift, Split and Stack. I am not revealing too much yet but the direction is about managing multiple moving parts at the same time rather than responding to a single challenge. It is going to be the most complex volume yet.

**Why I am building this in volumes**

The volume structure was a deliberate choice. Launching everything at once would have meant either shipping fewer games or taking much longer to ship anything. Releasing in volumes means each release is a real event, each one adds to something that already exists, and the collection grows in a way that feels intentional rather than random.

It also keeps me honest. Each volume has to have a coherent identity. Volume 1 is The Originals. Volume 2 is New Challenges. Volume 3 is In Motion. Volume 4 is Control Systems. That framing forces me to think about what each game is actually testing and whether it belongs in the set.

Arcade is at arcade.ayteelabs.com. Everything is free, no account needed. Go play something.
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
I want to write about something I have not solved yet. That feels important to say upfront. Most build notes are retrospectives. This one is not. This is an honest account of a problem I am still working through.

Google authentication in Kinka is not working the way I want it to. And the reason is not simple.

**Why this is harder than it sounds**

If you have ever implemented Google OAuth in a web app or a standard Electron app, you might assume it is the same problem in a Chromium fork. It is not. Not even close.

Google's OAuth flow involves a redirect back to a registered URI after authentication. In a web app that URI is a domain you control. In a standard app it might be a localhost callback or a custom protocol handler. Both of those are well-documented, well-supported paths.

In a custom Chromium fork you are in different territory. The browser itself is the client. You are not just implementing OAuth inside a browser, you are implementing it as a browser. The way Chromium handles OAuth internally for Google services like Chrome Sync involves APIs and credential flows that are not part of the public Chromium source in a clean, drop-in way. They are tied to Google's internal infrastructure and the keys that ship with the official Chrome binary.

**The key problem**

When you build Chromium from source, you can apply for API keys from Google to enable certain services. The process is documented, but the approval and scope of what those keys give you access to is limited compared to what ships in the official Chrome build.

For basic OAuth flows where a user is logging into a website through Kinka, this is not the issue. That works fine because the browser is just a container for a standard web OAuth flow. The problem is when I want Kinka itself to have a deeper integration, where the browser has its own authenticated identity, where features inside Kinka can interact with Google services on behalf of the user at a browser level rather than a page level.

That is the thing I am trying to build and that is where it gets complicated.

**Where I am right now**

I have been working through a few different approaches. The first was trying to use the standard OAuth flow with a custom URI scheme registered for Kinka. That gets partway there but the callback handling inside a Chromium fork requires more plumbing than I initially expected, particularly around how the browser processes the redirect and surfaces the token to the right internal component.

The second approach has been looking at how other Chromium-based browsers have handled this. Brave, Vivaldi, Arc. They have all had to solve versions of this problem. The solutions are not always documented publicly but reading through their open source repositories and issue trackers gives you a clearer picture of what is involved.

I am still in that phase. Reading, experimenting, hitting walls, trying something different.

**Why I am writing about this now**

Because I think there is value in being honest about the parts of building that are not going well yet. Everything I write here about Kinka could be polished into a neat narrative of progress and forward momentum. But that would not be fully accurate.

Kinka is a real project with real technical challenges. Some of those challenges are taking longer than I would like. Google auth is one of them. I am not shelving it, I am not giving up on it, but I am also not pretending it is solved.

When I do get it working I will write about that too. The full picture of what the problem actually was and what the solution turned out to be. That post will be more useful to anyone else building in this space than a vague success story would be.

For now, it is still in progress. And that is fine.
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
There is a version of QA that stops at the ticket. You find a bug, you write it up clearly with steps to reproduce, you assign it to a developer, and you wait. That is the job done, technically. The defect is documented. The ball is in someone else's court.

I have never been fully satisfied with that version of the job.

The issues I have been working through recently made this clearer than ever. Three separate problems, all complex, all cross-platform, all the kind of thing that could sit in a backlog for weeks if the approach was purely to log and wait. In each case I went further than the ticket.

**The certificate configuration failure**

The first was a fatal error thrown by a configuration tool when processing custom CA certificates. The error message pointed to a missing executable in the system PATH. On the surface it looked like an environment issue. The kind of thing that gets closed as works on my machine and handed back to the customer.

I dug into it. The tool was running as its own process, which meant it did not inherit user-level PATH changes. The bundled Java runtime had the keytool executable right there in the installation directory but the system PATH did not include it. The fix was a single PowerShell command to add the correct path at the machine level rather than the user level.

I verified it worked, documented exactly why it had to be the system PATH specifically, and handed it to the team with a working solution rather than a problem.

**The missing directory on Windows**

The second issue was subtler. A folder that should have existed after installation was simply not there on Windows. The same process worked fine on Linux because the directory gets created as part of the Docker image build. On Windows, the installer was not explicitly told to create it.

I traced it to the installer configuration file. Inno Setup will not create an empty directory unless you tell it to in the dirs section explicitly. One line needed adding, matching the pattern already used for a similar directory in the same installer. I identified the fix, explained why it behaved differently across platforms, and it went straight into the next release.

**The Linux upgrade script**

The third had been broken since February. An upgrade script on Linux was failing silently and nobody had had a stable Linux environment to test on properly until I got access to one. I found the issue, identified a one line fix in the shell script, verified it worked, and got it into the April release.

That last one is worth dwelling on. A broken upgrade path is a serious thing. Customers hitting it would have no clean way forward without support intervention. A one line fix, verified and documented, got it resolved before it became a wide-scale problem.

**What this has to do with understanding code**

None of those investigations would have gone the way they did if I had treated them as black box defects. Understanding how system PATH resolution works, how installer tools handle directory creation, how shell scripts behave differently across environments. That knowledge is what turned three vague problems into three specific, actionable fixes.

QA is often described as finding problems. I think the more accurate and more valuable version is understanding problems. There is a meaningful difference. Finding tells you something is wrong. Understanding tells you why, where, and what it would take to fix it.

A QA engineer who can read code can look at a failing test and understand whether the test is wrong or the product is wrong. They can look at a stack trace and know which layer of the system to focus on. They can look at a configuration file and spot what is missing. These are not developer skills that QA engineers happen to have. They are QA skills that become significantly more powerful when paired with technical literacy.

**The practical argument**

The team I work with trusts me to go deep on problems rather than just surface them. That trust was built over time by consistently doing exactly that. When something breaks in an unusual way, the expectation is that I will come back with more than a reproduction case. I will come back with a theory, often a fix, and always a clearer picture of what actually happened.

That changes how quickly things get resolved. It changes how the relationship between QA and development works. It changes what gets into releases and what gets deprioritised.

If you are a QA engineer and you are not investing in your technical skills, I would genuinely encourage you to start. Not to become a developer. But because the problems you are paid to understand are almost always technical at their root, and understanding them properly makes everything you do more valuable.
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
Linkdrop is live at linkdrop.ayteelabs.com.

The pitch is simple. A link-in-bio tool that actually looks good, gives you real data, and does not charge you for features that should be free. Four layouts. Full theming. Click analytics. Profile views. Password-protected builder. An explore page where you can browse other profiles and copy themes. QR codes. All of it free.

I want to write about how it was actually built, what was harder than expected, and why I made the decisions I did.

**Why I built it**

I have used Linktree. Most people in the space have. It works, but it has always frustrated me. The free tier is aggressively limited. The paid features are things that should be table stakes. The design is generic. You can tell immediately when someone is using it because everything looks the same.

I wanted something with a distinct aesthetic. Something that felt like it belonged in the same visual world as Nothing's products, minimal, high contrast, intentional. And I wanted analytics without a paywall. Knowing which links people are actually clicking is not a premium insight. It is just useful information.

So I built it.

**The stack**

Next.js App Router, Supabase for the database and auth, TypeScript throughout, deployed on Vercel. No UI library. Every component written from scratch with inline styles.

The decision to avoid a UI library was deliberate. I wanted full control over the aesthetic. When you are building something with a specific visual identity, the compromises you make to fit a component library's opinions show up everywhere. Inline styles with a consistent set of colour variables gave me exactly what I wanted.

Supabase handled more than I initially expected it to. Database, auth, storage for profile photos and link images, row-level security policies, even the password reset flow via their built-in email provider. It is genuinely impressive how much you can build on top of it without reaching for additional services.

**What went well**

The builder came together faster than I expected. The core loop of editing profile data and seeing it update in the preview in real time is satisfying to build. React's state model is well suited to that kind of immediate feedback, and keeping the profile object as a derived value from all the individual state slices meant the preview was always in sync without any extra work.

The theme system was also straightforward once I committed to how it should work. Five presets, each with a background and accent colour pair, plus custom hex pickers that let you override both independently. The accent colour does a lot of work throughout the profile, text, borders, interactive states, so getting that right mattered. The contrast auto-detection that flips text dark or light based on the background luminance was a small detail that made a big difference to how profiles look across different themes.

The explore page ended up being one of the more interesting surfaces to design. The idea of showing real profile previews rather than static cards was the right call. You immediately understand what the product does just by looking at it.

**What was harder than expected**

Auth took longer than it should have. Not the implementation itself, Supabase's auth APIs are clean, but all the edge cases around it. Account lockout after failed attempts. Clearing that lockout after a password reset. Making sure the apply-theme feature required password verification so nobody could change your theme without permission. The forgot password flow that validates both handle and email before sending a reset link. Each of those individually is not complicated. The combination of them adds up.

The explore page card alignment was a rabbit hole. The core problem was that I was using CSS transform scale to shrink the profile previews down to card size. Transform scale shrinks the visual representation but the browser still reserves the original layout space, so the footer below each card floated in empty space. I went through several approaches before landing on CSS zoom, which unlike transform actually collapses the layout to match the visual size. Once I understood that distinction the fix was one line. Getting to that understanding took considerably longer.

Link click tracking introduced a subtle bug that took me a while to track down. The click handler was only wired up on one layout variant. Rows worked. Bubbles, grid and icons silently dropped the event. The fix was straightforward once I found it, but it is a good example of how easy it is to miss something when you are building quickly and not testing every variant systematically after every change.

The QR code was a nice problem to solve. I did not want to just call a third-party API and display the result. The branded version uses a canvas element where I draw the QR code, overlay the Linkdrop logo mark in the centre, add the LINKDROP header, the dot matrix, the handle and URL in the footer. The result looks like it belongs to the product rather than a generic QR generator.

**The deploy pipeline**

Vercel connected to GitHub. Push to main, auto-deploy. Env vars set in the Vercel dashboard, never committed to the repo. Custom subdomain via a CNAME record pointing at Vercel's edge network. The whole process from first deployment to custom domain took about twenty minutes once the build errors were fixed.

There was one build error. A duplicate onClick attribute on an anchor element in the PublicProfile component. TypeScript catches that at build time but not in local dev, which is the kind of thing that only shows up when you run a proper production build. The lesson there is to run next build locally before pushing rather than treating Vercel as your build system.

**What is next for it**

A few things I want to add. The main one is scheduled link expiry, the ability to set a date after which a link automatically deactivates. Useful for time-limited offers or events. Profile verification badges are another, something that differentiates claimed and verified accounts on the explore page.

The analytics layer could go deeper too. Right now it tracks total profile views and per-link clicks. Time-series data, referrer information, geographic breakdown, those would all be genuinely useful. The data is already being collected, it is just a question of what surfaces to build on top of it.

**The honest summary**

Linkdrop took roughly three weeks of evenings and weekends to get from nothing to deployed. It is a complete product. Auth, analytics, theming, QR codes, explore, docs, a landing page. Not a prototype. Not an MVP with obvious gaps. A thing I would actually use and be comfortable pointing people at.

The thing I find most interesting about building products like this is how much the difficulty is distributed differently to where you expect. The things that sound complicated, a full auth system, real-time preview, a QR code generator, end up being tractable with the right tools. The things that sound trivial, card alignment on an explore page, consistent click tracking across layout variants, end up consuming disproportionate amounts of time.

If you want to try it, it is at linkdrop.ayteelabs.com. Free, no credit card, takes about a minute to set up.
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
There is a problem every developer runs into. You need to share something sensitive, an API key, a database password, a private config, and you reach for the nearest communication channel. Slack. Teams. Email. A quick DM.

And the moment you do that, it lives there forever. Indexed. Searchable. Archived. Sitting in someone's inbox or chat history long after it needed to exist.

That bothered me enough to build BurnBin.

**Why I built it**

I have worked in QA and test engineering for nine years. Credentials get shared constantly across teams, between developers, QA engineers, DevOps, support. And the tooling most teams reach for was not built with privacy in mind.

Pastebin is public by default. Slack stores everything. Email is forever. Even private links on most sharing tools are just obscure, not actually protected. The content persists indefinitely on a server somewhere.

What I wanted was something where the default behaviour is destruction, not persistence. Where sharing a password means it ceases to exist the moment it has been read. Where privacy is not a premium feature, it is the entire point.

**What I built**

BurnBin is a private snippet sharing tool. You paste content, set the rules, get a secret link.

Burn after read is the headline feature. When a paste is set to burn, the moment a recipient opens it the server marks it as destroyed in the database. Not hidden. Gone. Subsequent requests return a 410 Gone response regardless of who is asking.

Time-based expiry lets you set a paste to vanish after 1 hour, 24 hours, 7 days, or 30 days. Good for temporary sharing where you do not need the drama of burn-after-read but still want things to clean up after themselves.

Password protection adds a second layer. Recipients hit a lock screen before the content is revealed. Passwords are hashed server-side with SHA-256, never stored in plain text, never sent back to the client.

Private links mean every paste gets a random 10-character slug. No public index, no discovery, no search engine crawling. The only way to see a paste is to have the exact URL.

Syntax highlighting via Monaco Editor, the same editor that powers VS Code, gives you proper colour coding for 20+ languages. Because there is no reason a private tool should look worse than a public one.

A raw endpoint at /api/raw/{slug} returns plain text for curl and automation use cases. Useful when you want to pipe a shared script directly into your terminal.

The whole thing is built on Next.js, Supabase, and deployed on Vercel.

**The challenges**

Getting burn-after-read to actually work sounds simple. Mark a record as burned when it is viewed. Check if it is burned on subsequent requests. Done.

In practice it took an embarrassingly long time to get right.

The first issue was the Supabase JavaScript client caching query results in memory. The first fetch would correctly return burned: false, burn the record, and set burned: true in the database. But the second fetch, even after a hard refresh in a different browser, was returning the same cached response. The JS client was serving stale data from memory, completely bypassing the database.

The fix was to stop using the Supabase JS client for reads entirely and go directly to the Supabase REST API via fetch with cache: no-store. No client-side caching, no stale data, every request hits the database fresh. Simple fix. Hours to find.

React hydration errors on the landing page came next. The landing page needed custom CSS that was not part of the Tailwind system. My first approach was to inline the styles inside the component as a style tag. Next.js did not like this. The server renders the component one way, the client rehydrates it slightly differently, and React throws a hydration mismatch error that kills the whole page. The fix was to move all styles into a separate CSS file imported at the top of the component.

Rate limiting without infrastructure was another one. I wanted basic rate limiting, 10 pastes per IP per hour, without adding Redis or any external service. The solution was a simple in-memory Map on the server. It is not perfect and it resets on server restart, but for a side project getting modest traffic it is entirely sufficient and adds zero complexity to the infrastructure.

The node_modules git disaster was entirely on me. I added the .gitignore file after running git add, which meant 27,000 node_modules files were already staged. The first push failed because a compiled binary inside the Next.js SWC package was 109MB and GitHub's file size limit is 100MB. The fix was to nuke the git history and start fresh. Lesson learned: always create .gitignore before your first git add.

**What I learned**

Caching is everywhere and it will bite you. The burn-after-read bug was purely a caching issue. When you are building anything where data freshness is critical, and for a burn-after-read tool it is the whole product, you have to be paranoid about every layer of the stack that might cache your reads.

Simple security is better than complex security. SHA-256 password hashing, server-side checks on every request, no trust of the client for any security decision. None of it is complicated but it is solid. Getting the basics right consistently matters more than over-engineering.

The landing page is part of the product. I spent as much time on it as I did on some of the core features. A product without a clear front door is not really a product.

Ship the weird edge cases. The raw endpoint, the character counter, the save this link now warning. None of these were in the original spec. They all came from thinking about how people actually use a tool like this. Building for real usage patterns matters.

BurnBin is live at burnbin.ayteelabs.com. It works, it is production-ready, and it solves the problem I set out to solve.
    `.trim()
  },

  {
    slug: 'building-layerbuzz',
    title: 'LayerBuzz: Building a Digital Marketplace From Scratch Because the Existing Ones Are Not Good Enough',
    date: '24 April 2026',
    category: 'Build Notes',
    readTime: '10 min read',
    excerpt:
      'Gumroad bans creators without warning. Payhip takes a bigger cut than it lets on. I wanted something fairer, cleaner and honest about what it costs. So I built it.',
    content: `
I have been selling Portix Pro through a marketplace for a while. It works, technically. But every time I looked at the fees, the restrictions, and the horror stories from other creators getting banned without explanation, I felt the same thing I feel every time I use a tool that does not respect the person using it.

I could build this better.

LayerBuzz is the result. A digital marketplace where creators sell files, software, music, templates and anything else digital. Three percent per sale. No monthly fee. No surprise bans. Beautiful storefronts. Real analytics. And a licence key system built into the core for software sellers.

**Why the existing platforms are not good enough**

Gumroad is the name everyone knows. And Gumroad is also the platform that has banned creators mid-launch, held payouts without explanation, and changed its fee structure in ways that caught sellers off guard. The product itself is fine. The trust relationship is not.

Payhip is more creator-friendly but the free tier takes five percent and the branding options are limited unless you pay for a subscription. Which is fine, but it means the headline pitch of zero monthly fees is technically true while obscuring the actual cost.

Lemon Squeezy is good but it is aimed squarely at SaaS. If you are selling music, PDFs, Notion templates or design assets it is a slightly awkward fit.

None of them have a built-in licence key system that actually works for software distribution. You can bolt one on with integrations but that is friction nobody needs.

I wanted one platform that handled all of it cleanly.

**What I built**

LayerBuzz is a full-stack Next.js 14 application backed by Supabase and Stripe Connect.

Sellers sign up, connect their Stripe account, and get a public storefront at layerbuzz.ayteelabs.com/store/username. From the dashboard they can create products, upload files, set prices, write descriptions, add cover images, configure discount codes, and track orders and analytics. The platform takes three percent of each sale and transfers the rest directly to the seller's Stripe account in real time.

There are two product types. File products deliver a download link to the buyer by email immediately after purchase, with a configurable number of download attempts. Licence key products generate a unique key, store it in the database, and email it to the buyer with their custom licence subject and message. Both flows are triggered automatically by a Stripe webhook.

The storefront system is properly themed. Sellers choose from five themes, Midnight, Slate, Nord, Violet, and Dawn, which control the colour palette across their entire store. The theme is applied server-side with an inline script in the head to prevent flash of unstyled content. Seller stores at /store/username use the seller's chosen theme. The landing page always uses Midnight.

Social links are stored as a JSON array in the profiles table and render across both the store page and individual product pages. Twelve platforms are supported including Twitter, Instagram, TikTok, Spotify, SoundCloud and GitHub.

The licence key system is the piece I am most proud of. Keys are generated with a seller-configured prefix, issued on purchase, stored in Supabase with activation tracking, and validated against a public API endpoint. Portix uses this endpoint directly. When someone buys Portix Pro on LayerBuzz, the key is generated, emailed, and immediately usable in the CLI. No manual step, no CSV download, no copy-paste from a dashboard.

**The challenges**

Stripe Connect in live mode requires significantly more setup than the sandbox suggests. You cannot just create connected accounts the moment you go live. Stripe requires you to complete a platform profile, acknowledge negative balance liability, acknowledge ongoing seller compliance, create a live customer, create a live invoice, and verify your identity before the Connect API will respond with anything other than an error. None of this is documented clearly in one place. I worked through it step by step on launch day.

The webhook was the most painful debugging session of the build. The webhook fires, returns 200 OK, the order gets created in Supabase, and then nothing. No email, no licence key. The problem was a single missing method call. The Supabase insert was returning an array, not a single object, because I had not chained .select().single() onto the end. So newOrder.id was undefined. The licence issue call received a null order ID, failed silently, and the webhook returned 200 anyway because the order had been created successfully.

Two hours of staring at Stripe logs before I noticed.

The NEXT_PUBLIC_APP_URL environment variable was another quiet failure. The webhook fires server-side. When it tries to call the internal licence issue endpoint it constructs the URL from the app URL environment variable. In development I had not set this variable, so it was defaulting to localhost. The webhook was being delivered through a Portix tunnel but the internal fetch was trying to reach localhost, which from inside the server resolves to itself, not the tunnelled URL. Setting NEXT_PUBLIC_APP_URL to the tunnel URL fixed it immediately.

Supabase auth emails were broken for the entire launch day because of a platform outage affecting new project DNS resolution. Nothing I could debug. Nothing I could fix. Just bad timing. I ended up manually creating user accounts via the Supabase dashboard while waiting for it to resolve.

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
  }
]
