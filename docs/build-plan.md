# build-plan.md — Order of work and Antigravity prompts

> One step at a time. After each step: typecheck, lint, build, `pnpm shots`, then the owner reviews screenshots in `references/screenshots/<step>/` **before** the next step starts. Never batch steps.
> Common inputs for every step: `AGENTS.md`, `docs/PRD.md`, `docs/design.md`, `docs/content.md`, `docs/architecture.md`, `docs/assets-manifest.md`.

## Session starter (paste at the start of every new Antigravity session)
```
You are building the Wisdom Career Education website. Before doing anything:
1. Read AGENTS.md, then docs/PRD.md, docs/design.md, docs/content.md, docs/architecture.md and docs/assets-manifest.md in full.
2. Summarize in 8 bullets: the concept, the stack, the content rules, the current step, and what is out of scope.
3. List any ambiguity or conflict you found between documents. Do not guess; ask me.
4. Wait for my "go" before writing code.
Precedence if documents conflict: PRD (scope and behavior) > design.md (visuals and motion) > content.md (copy) > architecture.md.
Never invent copy, numbers, partner names or testimonials. Unknown content is [TBC].
```

## Step overview
| # | Step | Output | Depends on |
|---|---|---|---|
| 0 | Repo and docs | Project scaffold, docs placed, scripts | — |
| 1 | Tokens and base components | Design system + dev gallery | 0 |
| 2 | Content layer | Typed data, TBC helper, Illustration placeholder | 1 |
| 3 | Home A | Nav, hero, trust, about+stats, programs | 2 |
| 4 | Home B | Remaining sections 6–15 | 3 |
| 5 | Inner pages | All other routes | 4 |
| 6 | Motion layer | Reveals, counters, accordion, slider, pinned carousel | 5 |
| 7 | Plane route | Signature scroll animation | 6 |
| 8 | Enquiry flow | Form, API, email, sheet | 5 |
| 9 | SEO and security | Metadata, JSON-LD, sitemap, headers, redirects | 5 |
| 10 | Content and art swap | Real copy, photos, illustrations; TBC gate | client content |
| 11 | QA and launch | Perf, a11y, cross-browser, handover | all |

Steps 6, 8 and 9 can run in parallel only if the owner says so.

---

## Step 0 — Repo and docs
**Goal:** Clean scaffold with the doc pack in place.
**Do:** Create the Next.js (App Router, TypeScript, Tailwind) project `wce-web`; add the folder structure from `architecture.md` section 2; copy the docs into `docs/`; add `.env.example`; add scripts (`typecheck`, `lint`, `shots`, `check:tbc`, `test:a11y`, `lh`); set up Playwright; init git.
**Done when:** `pnpm dev` shows a blank page; all scripts exist and run.
```
Step 0. Scaffold the project as in docs/architecture.md sections 1, 2, 9 and 10. Next.js App Router + TypeScript strict + Tailwind, pnpm. Create the folder tree, .env.example, and the scripts listed (shots can be a stub that screenshots "/" at 390, 768 and 1440 into references/screenshots/step-0/). Install Playwright and @axe-core/playwright. Do not build any UI yet. Output: a short report of what you created and the commands to run.
```

## Step 1 — Tokens and base components
**Goal:** The design system exists before any page.
**Do:** Tokens from `design.md` 3.1–3.3 as CSS variables + Tailwind theme; fonts via `next/font`; base components: Button (primary/secondary/dark/text/icon-circle), Card, Badge, Eyebrow, Container, Section (with bg variants), Accordion, Input, Select, Checkbox, Header, MobileMenu, MobileActionBar, Footer shell. Dev-only route `/dev/components` showing every component and state.
**Done when:** Gallery matches `design.md` 6.1, 6.2, 6.8, 6.10 at 390 and 1440; focus rings visible; contrast rules followed (white text only on coral-700/navy).
```
Step 1. Implement the design system from docs/design.md sections 3, 5.4 and 6 (buttons, nav, footer shell, accordion, inputs). Define all color/spacing/radius/shadow tokens once in src/styles/globals.css and map them into Tailwind; no hard-coded hex anywhere else. Build components in src/components/ui and src/components/layout. Create a dev-only /dev/components page (404 in production) that renders every component in every state (hover, focus, disabled, loading). Respect the contrast rules in design.md 3.1. No page content yet. Then run typecheck, lint, build and shots, and list anything you deviated from.
```

## Step 2 — Content layer
**Goal:** All copy and data come from typed files, never from JSX.
**Do:** Create `src/content/*` from `content.md` with the types in `architecture.md` section 3; implement `lib/tbc.ts` (`show()` + dev badge), `components/art/Illustration` (renders the real SVG if present in `public/illustrations/`, otherwise a placeholder block with ID, size and fixed aspect ratio, `data-placeholder`).
**Done when:** A test page renders every content entity, shows TBC badges in dev, and hides TBC items in a production build.
```
Step 2. Create the typed content layer from docs/content.md and docs/architecture.md section 3. Every string on the site must live in src/content. Unknown values must be {tbc:true}. Implement src/lib/tbc.ts so dev shows a visible TBC badge and production returns null so the parent hides itself. Implement the Illustration component with a labelled placeholder fallback (ID and size printed, fixed aspect-ratio, data-placeholder attribute). Do not invent any copy; if content.md lacks it, mark it TBC. Run typecheck, lint, build, shots.
```

## Step 3 — Home A (sections 1–5)
**Do:** Header, Hero (with floating story card and mobile thumbnail row), Trust strip (hidden if no logos), About + stat tiles (hidden if value is TBC), Programs band with 4 cards. Static only: no scroll motion yet, except CSS hover states.
**Done when:** Matches `design.md` 6.1, 6.3–6.5 and 7 rows 1–5; CTA visible above the fold at 360×640; no horizontal scroll.
```
Step 3. Build Home sections 1 to 5 per docs/design.md (sections 2, 6.1, 6.3, 6.4, 6.5, 7) using only src/content data and Illustration placeholders. Hero: centered headline with the highlighted phrase, two CTAs, ill-hero slot, floating story card overlapping the hero by 48px on desktop and a scrolling thumbnail row on mobile. Programs: four cards on a full-bleed blue-100 band, 4-up desktop, 2x2 tablet, scroll-snap carousel with peek on mobile, whole card clickable, circle arrow button. Stats hidden when TBC. No JS animation yet. Verify at 360, 390, 768, 1024, 1440 and report overflow issues.
```

## Step 4 — Home B (sections 6–15)
**Do:** Destinations (only if content exists), Placement sectors, Spotlight rows (optional), Journey stepper, Why WCE (staggered), Success stories (static list + slider shell), CSR, FAQ, Final CTA with the enquiry form UI (not wired), Footer with angled navy top.
**Done when:** All sections present in order, empty optional sections leave no gap, layouts match `design.md` 6.6–6.10 and 8.
```
Step 4. Build Home sections 6 to 15 per docs/design.md section 7 and docs/content.md. Skip sections 6 (Destinations) and 8 (Spotlight) automatically if their content is TBC. Why WCE uses the stepped layout on desktop and stacks on mobile. Journey is horizontal on desktop and vertical on mobile. Final CTA is a navy block with the form UI (do not wire submission yet). Footer has the angled top edge with one rounded corner. Keep everything static. Verify with screenshots at 390, 768 and 1440 and list any section that renders nothing because of TBC.
```

## Step 5 — Inner pages
**Do:** `/programs` hub, program detail template (4 data files), `/about`, `/sectors`, `/destinations` (+ `[country]`, only seeded countries), `/success-stories`, `/csr`, `/faq`, `/contact`, `/privacy-policy`, `/terms`, `not-found`. Breadcrumbs on inner pages.
```
Step 5. Build all inner pages listed in docs/PRD.md section 4.1 using shared components and src/content. One program detail template driven by four data entries. Add breadcrumbs. Pages with no approved content must still render a clean, honest layout with TBC items hidden in production. Privacy and Terms render client-supplied text from src/content/legal.ts (TBC for now). Add each route to the sitemap list. Run shots for every route at 390, 768, 1440.
```

## Step 6 — Motion layer
**Do:** `useReducedMotion`, `Reveal` (opacity/translateY, headline rotateX settle), `CountUp`, accordion height animation, testimonial slider (auto-advance, pause, swipe, arrows, no-JS list fallback), pinned horizontal destinations carousel ≥1024px, card hover effects, nav underline/scroll shadow, button micro-interactions.
**Rules:** transform and opacity only; reduced motion shows final states; animation libs loaded dynamically.
```
Step 6. Implement the motion layer from docs/design.md 5.1, 5.3, 5.4, 5.5 and docs/architecture.md section 6. Create useReducedMotion, Reveal, CountUp, the slider and the pinned carousel. Animate only transform and opacity. With prefers-reduced-motion: reduce, render final states with no auto-advance and no counting. Load GSAP dynamically after the hero. Do not implement the plane yet. Provide a Playwright test that emulates reduced motion and asserts all content is visible, and report the first-load JS size before and after.
```

## Step 7 — Plane route
**Do:** `PlaneRoute` per `design.md` 5.2 using `ill-route`, `ill-plane-side`, `ill-plane-top`, `ill-cloud-*` (placeholders allowed); path draws progressively; plane rotates along the tangent; stays behind text; simplified on mobile; hidden under reduced motion.
```
Step 7. Implement PlaneRoute exactly as in docs/design.md 5.2. The plane is side-view in the hero and top-down after it, follows one dotted SVG path down the full page, draws the path progressively, rotates with the tangent, and always sits below text (z-index) with pointer-events none. Mobile: a short vertical dotted line in the left gutter with a small plane. Reduced motion: static dotted line only. Keep the main thread free: no layout reads in scroll handlers. Report Lighthouse performance before and after and confirm no CLS from the route.
```

## Step 8 — Enquiry flow
**Do:** Wire `EnquiryForm` (RHF + zod), `/api/enquiry` per `architecture.md` section 5, honeypot, rate limit, Resend email, Sheets append, success animation, analytics events (stubbed until Step 9), WhatsApp and call links from env.
```
Step 8. Wire the enquiry form per docs/PRD.md FR-30 to FR-37 and docs/architecture.md section 5. Shared zod schema; honeypot; per-IP rate limit; Promise.allSettled for email and sheet; return success if at least one succeeded and log failures. Never expose secrets to the client. Provide a mock mode (ENQUIRY_MODE=mock) that logs instead of sending, for local testing. Write Playwright tests for: valid submit, each validation error, honeypot rejection, rate-limit response, and failure of both providers. Do not hard-code phone or WhatsApp numbers; read from env.
```

## Step 9 — SEO and security
**Do:** `generateMetadata` for every route from `content.md` section 4, Open Graph, JSON-LD (Organization/EducationalOrganization, FAQPage, BreadcrumbList), sitemap, robots, canonical, security headers, GA4 after consent (D-05), redirects placeholder file.
```
Step 9. Add SEO and security per docs/PRD.md FR-50 to FR-56 and docs/architecture.md section 8. Metadata from docs/content.md section 4 (use TBC-free text only). JSON-LD via server components. sitemap.ts and robots.ts. Security headers in next.config.ts with a CSP that works with next/script GA. Load GA4 only after consent. Create redirects.ts with an empty typed list I will fill after crawling the old site. Validate JSON-LD structure and report any warnings.
```

## Step 10 — Content and art swap
**Do:** Replace placeholders with real assets listed in `assets-manifest.md` as they are marked **received**; fill `src/content` with client-approved text; implement `scripts/check-tbc.mjs` and wire it into the production build.
```
Step 10. Swap in real content and assets. For each asset in docs/assets-manifest.md with status "received": optimize it (SVGO for SVG, WebP/AVIF for photos), place it under public/, update the manifest status to "placed", and remove its placeholder usage. Update src/content only with text I paste in this session. Implement scripts/check-tbc.mjs: after a production build, fail if any built HTML contains "[TBC]", "TBC" dev badges or data-placeholder. Print a table of remaining TBC items and placeholders that would block launch.
```

## Step 11 — QA and launch
**Do:** Run everything in `qa-checklist.md`; fix; configure domain, redirects, analytics, Search Console, uptime check; handover notes.
```
Step 11. Run the full docs/qa-checklist.md. Produce a report: for each item PASS / FAIL / N/A with evidence (screenshot path, Lighthouse JSON, Axe output). Fix every FAIL that is in scope, re-run, and stop. List anything that needs a decision from me. Do not deploy.
```

---

## Review rules for the owner (per step)
1. Open `references/screenshots/<step>/` at 390, 768, 1440 and compare with `design.md`.
2. Check the agent's report: deviations, placeholders, TBC items.
3. Search the diff for hard-coded colors, text and numbers.
4. Only then say "go" for the next step.

## Fix-round prompt (when a step needs corrections)
```
Fix round for Step N. Here are the problems: [numbered list with screenshot paths]. Fix only these. Do not refactor or restyle anything else. After fixing, re-run typecheck, lint, build and shots, and show before/after for each item.
```
