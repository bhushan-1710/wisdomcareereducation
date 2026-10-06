# PRD — Wisdom Career Education (WCE) Website

> **Status:** v1.0 draft · **Owner:** Bhushan Sapkal (freelance web developer) · **Client:** Wisdom Career Education Pvt. Ltd., Nashik
> **This file is the source of truth.** If any other document or any agent prompt conflicts with it, this file wins on scope and behavior. `design.md` wins on visuals and motion. `content.md` wins on copy.

---

## 0. How to use this document pack

| Order | File | Answers | Wins conflicts on |
|---|---|---|---|
| 1 | `docs/PRD.md` (this file) | What are we building, for whom, what is in/out, how do we know it's done | Scope, behavior, priorities |
| 2 | `docs/design.md` | How it looks and moves | Visuals, motion, components |
| 3 | `docs/content.md` | What the words say | Copy, labels, page text |
| 4 | `docs/architecture.md` | How it is built | Stack, structure, data model |
| 5 | `docs/assets-manifest.md` | Which images/illustrations/logos exist and their status | Asset names and status |
| 6 | `docs/build-plan.md` | Order of work and the prompts for Antigravity | Sequence |
| 7 | `docs/qa-checklist.md` | How we verify and what blocks launch | Definition of done |
| 8 | `AGENTS.md` (repo root) | Rules the coding agent must follow | Agent behavior |

**Change rule:** documents are changed only by the owner (or by an agent when the owner explicitly asks). Every change is noted in section 17 (Decision log).

---

## 1. Product summary

**What:** A modern marketing and lead-generation website for Wisdom Career Education Pvt. Ltd., replacing https://wisdomcareereducation.org/.

**Who the company is:** Registered under the Companies Act 1956 (Government of India), established 2008, based in Nashik. Offers internships, study-abroad/university admissions support and professional development programs, with international placements. Main focus: Internship and Study Abroad.

**Why a redesign:** The current site is text-heavy and generic, its trust counters show labels without numbers, the programs are paragraphs instead of clear choices, there is no visible journey from enquiry to placement, and its call to action is vague.

**Concept:** *"A journey you can scroll."* A paper plane follows a dotted route down the page, landing at each program, story and call to action (see `design.md` section 5.2).

**Primary business goal:** Increase the number of qualified enquiries (counselling bookings) from students, graduates, working professionals and their parents.

---

## 2. Goals, non-goals, success metrics

### 2.1 Goals
| ID | Goal |
|---|---|
| G1 | Make the offering understandable in under 10 seconds (what WCE does, for whom) |
| G2 | Build trust: real numbers, real stories, registration details, named partners |
| G3 | Make one action obvious on every screen: **Book free counselling** |
| G4 | Work very well on mobile (most visitors are on phones) |
| G5 | Look and feel like a modern global-career brand, clearly better than competitors' templated sites |
| G6 | Be fast, accessible and searchable (local and program SEO) |

### 2.2 Non-goals (v1)
- No user accounts, login, student dashboard or payments.
- No CRM build; enquiries are delivered by email and a spreadsheet (see FR-30).
- No full CMS in v1 (see decision D-01); content lives in typed data files.
- No multi-language (Hindi/Marathi) in v1 (see D-04).
- No blog in v1 (phase 2).
- No visa-eligibility calculators or live chat.

### 2.3 Success metrics
| Metric | Target | Notes |
|---|---|---|
| Enquiry form completion rate | [TBC] baseline then +X% | Baseline unknown; measure for 30 days after launch, then set X |
| Click-to-WhatsApp and click-to-call events | Tracked | Count as conversions |
| Lighthouse mobile (Performance / Accessibility / SEO / Best Practices) | ≥ 90 each | Home and all program pages |
| LCP / CLS / INP (mobile, 75th percentile) | ≤ 2.5 s / ≤ 0.1 / ≤ 200 ms | Core Web Vitals "good" |
| Home page weight | < 1.5 MB excluding video | |
| Accessibility | WCAG 2.2 AA | Automated + manual |

No numeric conversion promises are made to the client until a baseline exists.

---

## 3. Users and needs

| Persona | Who | Needs | Worries |
|---|---|---|---|
| **Student (18–24)** | Engineering, hotel management, nursing, IT, business students looking for internships or admissions abroad | Clear options, countries, cost range, timelines, proof from peers | "Is this legit? Will I get placed? Can I afford it?" |
| **Parent** | Often co-decides and pays | Safety, legitimacy, registration details, office address, named contacts | Fraud, hidden fees, child's safety abroad |
| **Recent graduate** | Wants practical experience, maybe migration | Graduate internship details, work-permit pathway | Outcome uncertainty |
| **Working professional** | Wants a professional development program | Eligibility, pathway to professional standing, work permit | Time, cost, risk |
| **Institute / hotel partner** | Colleges and companies | Credibility, how to collaborate | — |

Devices: mostly mobile (Android, Chrome), 4G conditions. Location: India (Maharashtra first), with parents and students across India.

---

## 4. Scope

### 4.1 Pages (v1)
| Route | Page | Priority |
|---|---|---|
| `/` | Home (15 sections, see 4.2) | P0 |
| `/about` | About WCE: story, registration, team, why us | P0 |
| `/programs` | Programs hub (4 cards) | P0 |
| `/programs/study-abroad` | Study Abroad & University Admissions *(proposed, D-02)* | P0 |
| `/programs/student-internships` | Student Internships | P0 |
| `/programs/graduate-internships` | Graduate Internships | P0 |
| `/programs/professional-development` | Professional Development Programs | P0 |
| `/sectors` | Placement sectors (5 sectors, anchors per sector) | P1 |
| `/destinations` and `/destinations/[country]` | Destinations: seed with Malaysia and France, others [TBC] | P1 |
| `/success-stories` | Testimonials and chef message | P0 |
| `/csr` | Corporate Social Responsibility | P1 |
| `/faq` | Full FAQ (home shows a subset) | P1 |
| `/contact` | Enquiry form, map, phone, WhatsApp, address | P0 |
| `/privacy-policy`, `/terms` | Legal pages (text supplied or reviewed by client) | P0 |
| `/404` | Branded not-found page | P1 |
| `/sitemap.xml`, `/robots.txt` | SEO files | P0 |

Phase 2 (not built now): Blog/news, Hindi/Marathi, CMS, student portal, event pages.

### 4.2 Home page sections (order is fixed)
1 Nav · 2 Hero · 3 Trust strip · 4 About + stats · 5 Programs · 6 Destinations *(optional)* · 7 Placement sectors · 8 Spotlight rows ×2 *(optional)* · 9 Journey · 10 Why WCE · 11 Success stories · 12 CSR · 13 FAQ · 14 Final CTA + enquiry form · 15 Footer.
Layout and visuals: `design.md` section 7.

### 4.3 Optional sections rule
Sections 6 and 8 are built **only if** the client supplies their content (countries, spotlight copy). If not supplied by the content freeze date (section 15), they are cut and the page is still complete.

---

## 5. Functional requirements

Priority: **P0** must ship, **P1** should ship, **P2** nice to have. Each requirement has acceptance criteria (AC) that QA tests.

### 5.1 Navigation and global
| ID | Requirement | AC | P |
|---|---|---|---|
| FR-01 | Sticky header with logo, 6 links and an **Enquire now** button | Header stays at top on scroll; gains shadow after 24px; Enquire opens `/contact` or scrolls to the form | P0 |
| FR-02 | Mobile menu | Hamburger opens a full-height sheet; focus is trapped; Esc closes; links ≥ 44px tall | P0 |
| FR-03 | Sticky bottom action bar on mobile with **Call** and **WhatsApp** | Visible on all pages < 640px; does not cover form fields or footer content | P0 |
| FR-04 | Footer with contact, quick links, programs, newsletter and registration line | All links work; registration text reads exactly as in `content.md` | P0 |
| FR-05 | Skip-to-content link | First tab stop; visible on focus | P0 |

### 5.2 Home and content pages
| ID | Requirement | AC | P |
|---|---|---|---|
| FR-10 | Hero with headline, subcopy, primary and secondary CTA, illustration, floating story card | CTA above the fold at 360×640; story card hidden on mobile and replaced by a scrolling thumbnail row | P0 |
| FR-11 | Trust strip with partner logos | Logos greyscale; real logos only; section is hidden if no logos supplied | P0 |
| FR-12 | Stat tiles (years, placements, admission offers, countries) | Counts up once on first view; shows final numbers with no JS; **numbers come only from `content.md`**; if a number is [TBC], the tile is hidden in production | P0 |
| FR-13 | Program cards (4) | Each links to its detail page; whole card is clickable; keyboard focus ring visible | P0 |
| FR-14 | Placement sectors (5) | Each tile links to `/sectors#<slug>` | P1 |
| FR-15 | Journey stepper (5 steps) | Horizontal on desktop, vertical on mobile; steps highlight in order on scroll | P0 |
| FR-16 | Why WCE (4 reasons) | Staggered layout on desktop, stacked on mobile | P0 |
| FR-17 | Testimonials slider + chef message | Auto-advance 6 s, pause on hover/focus, arrow buttons, swipe; works without JS as a list | P0 |
| FR-18 | FAQ accordion | One open at a time; `aria-expanded`; `FAQPage` structured data | P0 |
| FR-19 | Destination cards | Pinned horizontal scroll on desktop; scroll-snap swipe on mobile | P1 |
| FR-20 | Program detail template | Overview, who it's for, what's included, process, sectors, FAQ subset, CTA; one template with 4 data files | P0 |

### 5.3 Enquiry and lead capture
| ID | Requirement | AC | P |
|---|---|---|---|
| FR-30 | Enquiry form on `/contact` and in Home section 14 | Fields: full name*, phone (+91, 10 digits)*, email*, interested in* (select: Study abroad / Student internship / Graduate internship / Professional development / Not sure), preferred country, message, consent checkbox* | P0 |
| FR-31 | Validation | Client and server validation with the same schema; inline errors announced via `aria-live`; invalid phone/email blocked | P0 |
| FR-32 | Delivery | On submit: (a) email to the WCE enquiry inbox, (b) row appended to a Google Sheet, (c) confirmation shown to the user. If either (a) or (b) fails, the user still sees success only if at least one succeeded and the failure is logged | P0 |
| FR-33 | Spam protection | Honeypot field + server-side rate limit (e.g. 5 per IP per hour) + optional Cloudflare Turnstile (D-06) | P0 |
| FR-34 | Success state | Plane-out animation (respecting reduced motion) + message + WhatsApp link | P1 |
| FR-35 | Newsletter box in footer | Email only; same delivery path, tagged `newsletter` | P2 |
| FR-36 | WhatsApp and call links | `https://wa.me/<number>?text=<prefilled>` and `tel:`; number from env/config, never hard-coded in components | P0 |
| FR-37 | Analytics events | `enquiry_submit`, `whatsapp_click`, `call_click`, `cta_click` (with location), `faq_open`, `story_view` | P0 |

### 5.4 Motion
| ID | Requirement | AC | P |
|---|---|---|---|
| FR-40 | Paper plane scroll route | Per `design.md` 5.2; plane behind text; simplified on mobile; hidden under reduced motion | P1 |
| FR-41 | Section reveals, counters, card hover, accordion, nav behaviors | Per `design.md` 5.3–5.4; only `transform` and `opacity` animated | P0 |
| FR-42 | Reduced motion | With `prefers-reduced-motion: reduce`: no plane, parallax, counters, auto-advance or looping animation; content fully visible | P0 |

### 5.5 SEO and technical
| ID | Requirement | AC | P |
|---|---|---|---|
| FR-50 | Per-page metadata and Open Graph/Twitter | Unique title (≤ 60 chars) and description (≤ 155) on every page | P0 |
| FR-51 | Structured data | `Organization`/`EducationalOrganization`, `FAQPage`, `BreadcrumbList` on inner pages | P0 |
| FR-52 | `sitemap.xml`, `robots.txt`, canonical URLs | Generated at build; all indexable pages listed | P0 |
| FR-53 | Redirects from old URLs | Old site URLs mapped 301 to new routes (list in D-07 once crawled) | P0 |
| FR-54 | Server-rendered content | All page text present in the initial HTML (no client-only rendering of content) | P0 |
| FR-55 | Image handling | `next/image`, explicit dimensions, lazy-load below the fold, hero preloaded | P0 |
| FR-56 | Error pages | Branded 404 and 500 | P1 |

---

## 6. Non-functional requirements
| Area | Requirement |
|---|---|
| Performance | Lighthouse mobile ≥ 90; LCP ≤ 2.5 s on throttled 4G; hero payload < 400 KB; JS for first load kept lean (animation libraries code-split, loaded after hero) |
| Accessibility | WCAG 2.2 AA; keyboard operable; visible focus; contrast per `design.md` 3.1; alt text rules per `design.md` 4.3; touch targets ≥ 44×44 |
| Responsive | 360, 390, 768, 1024, 1280, 1440, 1920 widths; no horizontal scroll at any width |
| Browsers | Last 2 versions of Chrome, Edge, Safari (iOS 16+), Firefox, Samsung Internet |
| Security | HTTPS only; security headers (CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors); no secrets in client bundle; server-side validation; rate limiting |
| Privacy | Consent checkbox on forms; privacy policy page; analytics only after the cookie/consent choice if required (D-05); contact data stored only in the client's inbox and sheet |
| Reliability | Form never loses a submission silently; failures logged and visible to the owner |
| Maintainability | TypeScript strict; typed content; design tokens only (no hard-coded colors); components documented in `architecture.md` |
| i18n readiness | Strings live in content files, not scattered in JSX, so languages can be added later |

---

## 7. Content rules (hard rules for humans and agents)
1. **No invented facts.** Statistics, counts, partner names, fees, timelines, visa claims, dates and addresses come from `content.md` only.
2. Anything unknown is written `[TBC]`. In development the UI shows a visible "TBC" marker; **the production build fails if any `[TBC]` string reaches rendered output** (check script in `build-plan.md`, step 10).
3. **No guaranteed outcomes.** Never promise a visa, job, work permit or migration. Use language like "may lead to", "pathway to", "support with". The live site already says the program "may further lead to a work permit and/or migration"; keep that tone.
4. Testimonials and photos are published only with the person's permission (client confirms; tracked in `assets-manifest.md`).
5. Registration line is shown in the footer exactly as approved by the client.
6. Prices and fees are not shown unless the client supplies them; otherwise the copy says "Talk to a counsellor".
7. Tone: short, reassuring, concrete (see `content.md`).

---

## 8. Information architecture

```
/                       Home
├─ /about
├─ /programs
│   ├─ /study-abroad
│   ├─ /student-internships
│   ├─ /graduate-internships
│   └─ /professional-development
├─ /sectors             (anchors: hospitality, business-finance, engineering-construction, nursing-midwifery, it-computer-science)
├─ /destinations        (seed: malaysia, france)
├─ /success-stories
├─ /csr
├─ /faq
├─ /contact
├─ /privacy-policy
└─ /terms
```
Primary nav: Programs · Destinations · Sectors · Success Stories · About · Contact + **Enquire now**.
(If section 6 "Destinations" is cut, remove it from nav until content exists.)

---

## 9. Data entities (summary; full types in `architecture.md`)
- **Program** (slug, title, summary, audience, inclusions, process steps, sectors, faq ids, illustration id)
- **Sector** (slug, title, description, roles/examples [TBC], illustration id)
- **Destination** (slug, country, summary, programs available, highlights, partner list [TBC])
- **Testimonial** (name, institute/context, destination, quote, photo, permission flag)
- **Faq** (id, question, answer, categories)
- **Stat** (key, value, suffix, label, source/verified flag)
- **Partner** (name, logo, type)
- **Enquiry** (fields from FR-30, timestamp, source page, UTM params)

---

## 10. Integrations
| Need | Default choice | Alternatives | Decision |
|---|---|---|---|
| Email delivery | Resend (or SMTP) to the WCE enquiry inbox | Gmail SMTP, Postmark | D-03 |
| Lead sheet | Google Sheets via Apps Script webhook or Sheets API | Airtable | D-03 |
| Analytics | GA4 (+ Search Console) | Plausible | D-05 |
| Spam | Honeypot + rate limit | + Cloudflare Turnstile | D-06 |
| Hosting | Vercel | Netlify | D-08 |
| Maps | Static map image + "Open in Google Maps" link (no heavy embed) | Embedded map | — |
| Chat | WhatsApp click-to-chat only | — | — |

---

## 11. Assumptions
1. Content is in English only for v1.
2. Client will provide real numbers, logos, photos and permissions before the content freeze.
3. Illustrations are produced or licensed per `design.md` section 4.6; placeholders are used until then.
4. The coding agent is Antigravity, supervised by the owner, with Playwright screenshots used to verify each step.
5. The live site's visual layout has not been audited; this PRD is based on its text content.

---

## 12. Risks
| Risk | Impact | Mitigation |
|---|---|---|
| Client does not supply stats/photos/permissions | Empty trust section | FR-12 hides tiles with [TBC]; optional sections cut by freeze date |
| Illustration production delays | Site looks unfinished | Placeholder blocks with exact IDs; layout never depends on final art |
| Scroll animation hurts performance or accessibility | Poor mobile experience | Transform/opacity only, lazy init, simplified mobile, reduced-motion path, perf budget in QA |
| Agent invents copy or breaks tokens | Wrong facts published | AGENTS.md rules, [TBC] build gate, review screenshots every step |
| Old URLs lose SEO value | Traffic drop | Crawl old site, map 301s (D-07) |
| Overpromising outcomes in copy | Legal/reputation risk | Content rule 3; client reviews copy |
| Form deliverability (email lands in spam) | Lost leads | Verified sending domain, Sheet backup, test submissions in QA |

---

## 13. Open questions (need answers; defaults apply if unanswered)
| ID | Question | Owner | Default if unanswered |
|---|---|---|---|
| Q1 | Real values: years of experience, number of international placements, university admission offers, countries served | Client | Hide stat tiles except "15+ years" |
| Q2 | Partner logos (hotels, universities, institutes) with permission | Client | Hide trust logo strip |
| Q3 | Phone, email, WhatsApp number, office address(es), map pin, social links | Client | Block launch |
| Q4 | Student photos + written permission; chef message (video or text); Aishwarya More's testimonial text | Client | Use only the three testimonials already public |
| Q5 | Which countries to feature (Malaysia and France appear in testimonials) | Client | Malaysia and France only, or cut section 6 |
| Q6 | Fees/pricing visibility | Client | "Talk to a counsellor" |
| Q7 | Is "Study Abroad & University Admissions" a separate program the client wants highlighted? | Client | Yes, as proposed (D-02) |
| Q8 | Logo files, brand colors and fonts to keep, if any | Client | New identity per `design.md` with a simple wordmark |
| Q9 | Who will edit content after launch? | Client | Developer edits (no CMS) |
| Q10 | Domain/DNS access, existing analytics, existing Search Console | Client | Needed before launch |
| Q11 | Legal text for privacy policy and terms | Client | Draft template, client legal review required |
| Q12 | FAQ answers, visa timelines, eligibility rules | Client | Answers marked [TBC] and FAQ hidden until supplied |

---

## 14. Acceptance (definition of done for v1)
The site is done when **all** of these are true:
1. All P0 requirements pass their AC in `qa-checklist.md`.
2. No `[TBC]` appears in production output; hidden optional sections do not leave empty gaps.
3. Lighthouse mobile ≥ 90 on Home, one program page and Contact.
4. Axe/automated checks show zero critical or serious issues, plus manual keyboard pass.
5. Form test submissions reach the inbox **and** the sheet from production.
6. Redirects from old URLs verified.
7. Client has approved copy, photos and legal pages in writing.
8. Playwright screenshots at 390, 768 and 1440 widths reviewed for every page.

---

## 15. Milestones (relative; no dates promised)
| M | Name | Output |
|---|---|---|
| M0 | Docs pack approved | This pack, open questions sent to client |
| M1 | Foundation | Repo, tokens, layout shell, base components |
| M2 | Home static | All home sections with placeholders |
| M3 | Inner pages | Programs, About, Sectors, Stories, FAQ, Contact, legal |
| M4 | Motion | Reveals, counters, plane route, carousels |
| M5 | Forms and integrations | Enquiry flow, email, sheet, analytics |
| M6 | Content and art swap | Real copy, photos, illustrations |
| M7 | QA and hardening | Perf, a11y, SEO, redirects, cross-browser |
| M8 | Launch | DNS, monitoring, handover |
**Content freeze:** end of M5 (client content for optional sections must arrive by then).

---

## 16. Out-of-pack references
- Current site: https://wisdomcareereducation.org/ (content read; visuals not audited)
- Visual references: Logist (structure), New Energy (illustration and accent), Ski With The Club (scroll story and footer). Direction only; never copy artwork.

---

## 17. Decision log
| ID | Decision | Status | Notes |
|---|---|---|---|
| D-01 | No CMS in v1; typed content files in the repo; CMS (e.g. Sanity) is phase 2 | Proposed | Revisit if the client needs self-editing (Q9) |
| D-02 | Add a "Study Abroad & University Admissions" program card and page | Proposed | Based on the site's stated main focus; client to confirm (Q7) |
| D-03 | Enquiries delivered by Resend email + Google Sheet | Proposed | Needs inbox and sheet owner |
| D-04 | English only in v1 | Proposed | Hindi/Marathi candidates for phase 2 |
| D-05 | GA4 for analytics; consent handling reviewed with client | Proposed | |
| D-06 | Honeypot + rate limit; add Turnstile only if spam appears | Proposed | |
| D-07 | Crawl old site before launch and map 301s | Required | Do at M2 |
| D-08 | Host on Vercel | Proposed | Domain DNS from client |
| D-09 | Rounded cards and pill buttons (deviation from Ref A) | Decided | See `design.md` |
| D-10 | Paper plane route stays behind text | Decided | See `design.md` |
