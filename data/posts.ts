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
  }

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

]
