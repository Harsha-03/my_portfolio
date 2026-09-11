# CLAUDE.md

Persistent context for Claude Code sessions on `harshaasapu.com`. Read this fully before doing anything.

## Who I am

Harsha Asapu. Product Designer, ~2.5 years experience. Based in Reno, NV; open to relocate anywhere in the US.

* MS Information Systems, Saint Louis University (Dec 2025)
* B.Tech Computer Science, KL University
* Co-founder of BuiltinTech (India-registered IT services studio, active)
* Currently sole design owner on Phoenix AI (live AI health platform, Community Dreams Foundation)
* Background: was a developer, ~1 year of "proper design" work before that transition, engineering background is visible in my work

I identify as a designer who codes. Not "developer who designs." That's the lane. Engineering fluency is a strength I lean into, not a thing I hide.

## The goal

Land an entry-level Product Designer role at a high design-bar company. Active pipeline: IBM (referral in progress, ethical assessment passed, awaiting recruiter call), Google (referral), Amazon (cold), Vercel, Anthropic.

I've reached finals 4 times in the last 3 months and converted zero offers. The portfolio may be one cause. The two mentor sessions below inform the rebuild.

## The 30-second recruiter scan

The single hardest constraint. A recruiter looks at my homepage for 30 seconds and decides whether to click one case study card. Every homepage decision serves that scan:

* Card copy = customer problem + outcome, not project name + solution description
* One metric visible per card, without clicking
* Static previews, no jitter, no auto-cycling
* First 3 cards are the only ones a scanning recruiter processes — ruthless prioritization
* Personality signal (code-block "Exploring/Recent/Reading") is a luxury in this scan. If it costs a case study card view, it goes below the fold.

Highlight-clarity is where I always lag. This is the failure mode we're fixing.

## Mentor feedback — consolidated

### From Ritika Bansal (Senior UX Leader, Amazon London — 15+ years, FAANG specialty)

Core diagnosis: case studies list fixes, they don't tell a story. Nobody reading knows if a project is a website, an app, or who uses it. Reads as designer-telling-designers-about-fixes, not as a customer story.

* Every case study opens with: what is the product / who is the customer / what problem they face / how you solved it
* Structure: Context → Customer → Problem → What you tried → What you rejected → What shipped → What changed for the customer
* Rename chapter titles descriptively: "Context, Initial Research, Who's the Customer, Wireframing" — never "The brief was 'your call'"
* Every design decision needs its why visible. If it's an assumption, say it's an assumption and explain why (no user access, no data, etc.)
* Show the messy middle — disagreements, trade-offs, things that didn't work. This is what differentiates human from AI-written
* Visuals mandatory: rough sketches, rough Figma drafts, rejected explorations, before/after, phone screenshots. Doesn't need to be polished.
* Rejected designs strategically control interview questions ("why not #2?")
* Weave the story from the customer's POV, not mine. Not "I fixed X" — "customers were confused, now they aren't"
* 3–5 case studies, concentrated. Not 8.
* 3-bullet highlight at top of every case study: core customer problem / what I did / how it solved the problem
* Plain-text case studies read as ChatGPT-written by default in 2026. Visuals + human mess = human signal.

### From Ashish Goswami (Lead Product Designer, fintech/AI, Madrid — 8 years)

* Kill auto-cycling tiles on case study cards. Make cycling intentional — hover-triggered, slower transition. He literally didn't look at a single image because it was too jarring.
* Segregate case studies by domain/industry: Finance, AI, Education, Performance, Recruiting. So people from each industry surface relevant work.
* Add visuals to every case study. Even small ones. Add metrics. Add testimonials where possible.
* Kill the "no PM / sole owner" framing. Reads as bragging and as red flag for enterprise. Reframe as challenge: "As the only designer, I had to build my own decision framework since there was no design lead to bounce off — here's how, and where I got it wrong."
* SLU Alumni Connect needs metrics. Storytelling is good, keep it, add numbers.
* Label Starbucks clearly as concept project, move to Concepts section.
* Move Case Studies section directly after Hero (currently something else comes between).
* Move Motion to a completely separate area — separate page, not mixed with case studies. Currently confuses my role.
* Lean into designer-who-codes philosophy. Engineering + design is my identity — own it, don't hide it.
* Need fintech case study ASAP. Pick 1–2 concept case studies. Target neobanks aimed at Gen Z / Gen Alpha — they prefer designers without fintech background for fresh POV. Send the concept to the CEO of that neobank.
* Treat hiring managers/recruiters as your users. Solve for their pain points in how the portfolio is structured. Make their scanning job easier.

## Locked decisions (don't relitigate)

* Positioning: designer-who-codes. Not pure product designer. Not developer.
* SLU Alumni: KEEP on homepage. Add metrics. (Ritika said cut, Ashish said keep — going with Ashish.)
* Sole-owner language: reframe as mid-process challenge, not opener. Never delete the ownership signal entirely.
* Starbucks: concept project, moves to Concepts section.
* Motion: separate page, not mixed with case studies.
* Homepage H1 and tagline are FINALIZED. Don't touch:
   * `"a Product Designer building products that actually ship."`
   * `"Identifying the real break, not the surface bug."`
* Hero lock scope: the lock covers the H1 and tagline copy only. It does not cover navigation plumbing in `Hero.tsx` — scroll targets, section anchors, and links that break when page structure changes. Fix those as part of the structural task that breaks them and call the change out in the diff; no separate confirmation needed.
* Email is `harshaasapu.b@gmail.com` (not `sriharshaasapu48@gmail.com`).

## Open questions still to resolve (ask before assuming)

* Level signal mismatch: portfolio currently signals mid-level, I apply entry-level. Unresolved whether to dial down portfolio or target mid-level roles.
* Presentation deck for interviews: separate artifact from the website (Figma or Keynote). Not started.
* RAG chatbot production bug: currently returns "Something went wrong" on harshaasapu.com. Root cause: unknown, likely OpenAI env var or credit issue on Vercel. See "Debugging the RAG chatbot" section below.

## Standing rules for how you work with me

1. Discuss before you code. For any non-trivial change, tell me what you're about to do and get confirmation. Especially for prose. Especially for anything touching case study content.
2. Minimal diffs, not full-file replacements. Show me only the lines that change. Never rewrite an entire file to add three lines.
3. One phase at a time on roadmaps. Finish and confirm Phase 1 before touching Phase 2.
4. No bullets in prose deliverables. Case study text, portfolio copy, outreach messages, LinkedIn posts — all prose. Config files and technical documentation like this file are fine to use lists.
5. Never start a response with agreement. No "Great question," "You're absolutely right," "That makes sense," "Absolutely," "Definitely." First sentence challenges an assumption, points out what's missing, or asks a clarifying question.
6. Rate your confidence. Tag claims `[Certain]`, `[Likely]`, `[Guessing]`. If most of a reply is guessing, say so first.
7. Ask me what you don't know. Don't fabricate. If a fact about my career, my code, or my tools isn't in this file or the repo, ask.
8. Textbook-based multiple-choice answers: answer + chapter + page number only. No further detail.
9. For code updates: I paste existing code first, you deliver minimal diffs. Notify in advance if additional files are needed.
10. For roadmap/learning plans: step-by-step monthly guidance starting with Month 1. Move to next phase only after I confirm completion.

## Tone rules for case study prose

* Customer POV, not mine. "Users couldn't tell X" beats "I fixed X."
* No dev jargon in case study prose. No `<Collapsible>`, no `<Sheet>`, no `matchMedia`, no class names. Use design language: layout, information architecture, hierarchy, discoverability, motion, affordance.
* Engineering identity lives in bio and positioning, not in case study prose. These are different surfaces. Bio can say "designer who codes." Case studies talk about design decisions.
* Show the messy middle. Rejected explorations, disagreements, things I tried that didn't work.
* Sound like me telling a friend at a coffee, or my mom. Not corporate. Not scripted. Long, fragmented, conversational sentences are fine — that's how I talk.
* Every decision, show the why. If it's an assumption, name it.
* No "brief was your call" as opener. Ownership signal goes mid-process (as challenge) or at the end (as learning).
* Kill these phrases from all prose you write for me: "seamless," "elegant," "delightful," "cutting-edge," "leveraged," "utilize" (use "use"), "in today's fast-paced world," "at the end of the day."

## Portfolio structure — current and target

### Current

Homepage lists 8 case studies mixed together: Phoenix AI, BuiltinTech, NRI Wellbeing, Starbucks, SLU Alumni Connect, Resume Tailor, harshaasapu.com meta-case study, LifeOS. Motion is mixed in. Auto-cycling images on card previews.

### Target

* Case Studies (real shipped work): Phoenix AI, SLU Alumni Connect, BuiltinTech, plus one more (Resume Tailor or LifeOS). 3–5 max, concentrated.
* Concepts page: Starbucks, and any future concept case studies including the fintech one.
* AI Explorations page: Resume Tailor if not in Case Studies, plus other AI experiments.
* Motion page: Ted Drewes, Nike, McLaren, and any future motion pieces.
* Domain filter/segmentation (Ashish's request): Finance, AI, Education, Performance, Recruiting — recruiters from each domain surface relevant work first.

Case Studies section moves directly after Hero. Nothing between.

## Files that need special care

* `app/components/Hero.tsx` — H1 and tagline are locked. Confirm before any change to hero content.
* `app/components/Projects.tsx` — source of truth for the homepage cards. `CASE_STUDY_ORDER` decides which cards appear and in what order; removing a slug hides the card without touching its case study page. `CARD_COPY` holds everything a card visibly says: wordmark, headline, description, metrics, tags, and colors. Card order and card copy are content decisions. Ask before editing.
* `data/projects.ts` — project metadata, not homepage order or card copy. Its array order and `featured` flags are ignored by the homepage. The homepage reads only the title (accessibility labels), preview media (`image`, `video`), live and code links, status, and case study route from it. The remaining fields (overview, role, problems, solutions, tools) feed the project detail modal. Ask before editing.
* `embeddings.json` — RAG chatbot knowledge base, 4.5MB. When case study content changes materially, this must be regenerated using the ingestion script in `scripts/`. Never edit by hand.
* `app/api/chat/route.ts` — RAG chatbot backend. Currently broken on production. See debugging section.
* `.env.local` — never commit, never expose. If you need to check a value, ask me to read it out.
* `public/cv.pdf` — needs the latest resume. Ask before assuming which version is current.

## Sequencing plan (Ashish's priority order, refined)

### Phase 1 — Homepage first (the 30-second scan fix)

1. Kill auto-cycling tiles on case study cards. Replace with static, meaningful preview images.
2. Rewrite each homepage card headline to `customer problem + outcome`, not `project name + solution description`.
3. Add one visible metric to each card.
4. Reorder cards: Phoenix AI first, then whichever two case studies best represent shipped work.
5. Move Case Studies section directly after Hero.
6. Restructure site into sections: Case Studies / Concepts / AI Explorations / Motion (separate pages).
7. Rewrite "sole owner" language across Phoenix AI content.

### Phase 2 — Case study depth (Ritika's rewrite)

8. Phoenix AI: rewrite opening two paragraphs (what is Phoenix AI, who uses it, problem it solves). Kill "brief was your call" as hook.
9. Phoenix AI: add 3-bullet highlight at top (core customer problem / what I did / how it solved).
10. Phoenix AI: add visuals to at least Chapter 2 (badge → biomarkers). Screenshots: original page, first attempt, final shipped, rejected explorations.
11. Phoenix AI: rewrite chapters in customer language. Cut dev jargon.
12. Phoenix AI: depth over breadth — pick 2 most complex reframes, minimize the rest.
13. Phoenix AI: add metrics (quality improvement, friction reduction, faster handoff), add testimonials.
14. SLU Alumni: add metrics.
15. Restructure every remaining case study around Ritika's customer-first template.

### Phase 3 — Parallel work

16. Build 1 fintech concept case study for a neobank (Gen Z / Alpha target).
17. Send fintech concept to CEO of that neobank.
18. Use ADPList for fintech referrals.
19. Build separate presentation deck in Figma/Keynote for interview walkthroughs.
20. Start tracking data on Phoenix AI shipping — adoption, task completion, drop-off, error rate.
21. Document disagreements, trade-offs, times overruled — behavioral interview ammunition.

Do not jump phases. Confirm completion of Phase 1 before touching Phase 2 content.

## Debugging the RAG chatbot

Currently broken on `harshaasapu.com` — returns `"Something went wrong while processing your request."` This exact string is hard-coded in `app/api/chat/route.ts` in the catch block. Something inside the try block throws.

Diagnostic order:

1. Check Vercel Functions → Logs for `❌ Chat API crash:` entries. The error object printed after names the exact failure.
2. Check Vercel Project Settings → Environment Variables. `OPENAI_API_KEY` must be set for the Production environment. It is not deployed from `.env.local`.
3. Check OpenAI dashboard: billing balance, key status, rate limit history.
4. Verify `embeddings.json` is included in the Vercel deployment (should be — not gitignored, at repo root).
5. Test locally first: `npm run dev`, hit `/api/chat`, confirm it works. If yes, problem is env-side. If no, problem is code-side.

Never edit `embeddings.json` by hand. If content changes materially, regenerate via the ingestion script in `scripts/`.

## Never do these without asking

* Change the hero H1 or tagline.
* Edit `data/projects.ts` structure or reorder homepage cards.
* Regenerate `embeddings.json`.
* Push directly to `main`. Work on a branch, PR to main after review.
* Commit anything that pattern-matches an API key, token, or secret.
* Write case study prose in bulk without paragraph-by-paragraph review.
* Invent metrics, testimonials, or data. If a number isn't in the repo or given by me, ask.
* Add new dependencies without flagging the trade-off (bundle size, security, maintenance).
* Modify `README.md` without confirming it's meant for a new audience.

## Working with me — session pattern

Every session starts:

1. Read this file.
2. Ask what phase we're on.
3. Confirm the specific task before doing it.
4. Show the diff, wait for approval, apply.
5. Test (run `npm run dev`, verify locally).
6. Ask about commit message and branch.

If I'm vague ("fix the case study"), ask which one, which section, what specifically feels wrong. Don't guess.

If a task involves prose, show me a draft first — do not write directly into the file.

If a task involves visuals or design decisions I haven't approved (image choices, layout changes, color decisions), stop and ask.
