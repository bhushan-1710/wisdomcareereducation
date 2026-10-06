# architecture.md — Technical blueprint

> How the site is built. Scope lives in `PRD.md`, visuals in `design.md`, words in `content.md`.

## 1. Stack
| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router), React, TypeScript strict | Match the version used in the owner's `prime-capital-web` project for familiarity |
| Styling | Tailwind CSS + CSS variables for tokens | Tokens from `design.md` 3.1 are defined once in `app/globals.css` and mapped into the Tailwind theme; no hard-coded hex values in components |
| Motion | GSAP + ScrollTrigger (plane route, counters, pinned carousel); Framer Motion (small UI transitions) | Loaded dynamically after the hero; one central registration file |
| Forms | React Hook Form + Zod (shared schema) + Next.js server action / route handler | Same schema client and server |
| Email | Resend (or SMTP) | `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` |
| Lead sheet | Google Apps Script webhook or Sheets API | `SHEETS_WEBHOOK_URL` |
| Analytics | GA4 via `next/script` after consent | `NEXT_PUBLIC_GA_ID` |
| Icons | `lucide-react` for UI icons; illustrations are our own SVGs | |
| Fonts | `next/font`: Plus Jakarta Sans, Inter | |
| Testing | Playwright (screenshots + key flows), Axe (a11y), Lighthouse CI | |
| Hosting | Vercel | |
| Package manager | pnpm (or npm; pick one and record it in AGENTS.md) | |

## 2. Repository layout
```
wce-web/
├─ AGENTS.md
├─ docs/                      PRD.md, design.md, content.md, architecture.md, assets-manifest.md, build-plan.md, qa-checklist.md
├─ references/
│   ├─ videos/                the 3 inspiration videos (not shipped)
│   └─ screenshots/           Playwright output, per step and viewport
├─ public/
│   ├─ illustrations/         ill-*.svg  (see assets-manifest.md)
│   ├─ photos/                real photos, optimized
│   ├─ logos/                 partner logos, WCE logo
│   └─ og/                    og-image.png
├─ src/
│   ├─ app/
│   │   ├─ layout.tsx, page.tsx, not-found.tsx, sitemap.ts, robots.ts
│   │   ├─ about/ programs/ sectors/ destinations/ success-stories/ csr/ faq/ contact/
│   │   ├─ privacy-policy/ terms/
│   │   └─ api/enquiry/route.ts      (or a server action)
│   ├─ components/
│   │   ├─ ui/                Button, Card, Badge, Accordion, Input, Select, Checkbox, Container, Section, Eyebrow
│   │   ├─ layout/            Header, MobileMenu, MobileActionBar, Footer
│   │   ├─ sections/          Hero, TrustStrip, AboutStats, ProgramsBand, Destinations, Sectors, Spotlight, Journey, WhyWce, Stories, Csr, FaqSection, FinalCta
│   │   ├─ motion/            PlaneRoute, Reveal, CountUp, PinnedCarousel, useReducedMotion
│   │   ├─ forms/             EnquiryForm, FormSuccess
│   │   └─ art/               Illustration (wrapper with placeholder fallback)
│   ├─ content/               typed data: site.ts, programs.ts, sectors.ts, destinations.ts, testimonials.ts, faqs.ts, stats.ts, partners.ts, nav.ts
│   ├─ lib/                   schema.ts (zod), seo.ts, analytics.ts, rateLimit.ts, utils.ts, tbc.ts
│   └─ styles/                globals.css (tokens)
├─ scripts/
│   └─ check-tbc.mjs          fails the build if "[TBC]" is in rendered output
└─ tests/                     playwright specs
```

## 3. Content model (TypeScript)
```ts
type Tbc = { tbc: true };                      // marks missing data; renders a dev badge, never in production
type Maybe<T> = T | Tbc;

interface Program {
  slug: 'study-abroad' | 'student-internships' | 'graduate-internships' | 'professional-development';
  title: string; summary: string; audience: string;
  tags: string[]; inclusions: Maybe<string[]>;
  steps: { title: string; text: string }[];
  sectorSlugs: string[]; faqIds: string[];
  art: string;                                  // illustration id from assets-manifest
}
interface Sector { slug: string; title: string; description: Maybe<string>; examples: Maybe<string[]>; art: string }
interface Destination { slug: string; country: string; summary: Maybe<string>; highlights: Maybe<string[]>; art: string }
interface Testimonial { id: string; name: string; context: string; destination: Maybe<string>; quote: Maybe<string>; photo?: string; permission: boolean }
interface Faq { id: string; q: string; a: Maybe<string>; category: 'applications'|'visa'|'fees'|'internships' }
interface Stat { key: string; label: string; value: Maybe<number>; suffix?: string }
interface Partner { name: string; logo: string; type: 'hotel'|'university'|'institute'|'company' }
```
- Rendering helper `tbc.ts`: `show(value)` returns the value or, in development, a visible "TBC" badge; in production it returns `null` and the containing component hides itself (stat tile, FAQ item, logo strip, optional section).
- A testimonial is rendered only if `permission === true`.

## 4. Rendering and routing
- All pages are static (SSG) except the enquiry endpoint.
- Content is in the initial HTML; client components are limited to interactive pieces (menu, accordion, slider, form, motion).
- `generateMetadata` per page from `content/site.ts` + `lib/seo.ts`.
- JSON-LD injected by server components.
- Redirects live in `next.config.ts` (`redirects()`), filled after the old-site crawl (PRD D-07).

## 5. Enquiry flow
```
EnquiryForm (client, RHF + zod)
  → POST /api/enquiry
      1. parse + validate with shared zod schema
      2. honeypot check; rate limit (per IP, in-memory or KV)
      3. Promise.allSettled([sendEmail(), appendToSheet()])
      4. if both fail → 500 + log; if ≥1 succeeds → 200 (log the failed one)
  ← { ok: true } → FormSuccess (plane-out animation, WhatsApp link)
Analytics: enquiry_submit event on success only.
```
Payload also carries `sourcePage`, `utm_*`, `timestamp`. No data is stored on the server beyond the email and sheet.

## 6. Motion architecture
- `lib/gsap.ts` registers GSAP and ScrollTrigger once; imported only inside client motion components via dynamic import.
- `useReducedMotion()` hook gates every animation; when true, components render final states.
- `PlaneRoute` reads a single SVG path (`ill-route`), builds a ScrollTrigger tied to the page height, and uses MotionPath for position/rotation. Mobile uses a simplified vertical variant. Always `pointer-events: none` and below text in z-order.
- `Reveal` is a thin wrapper (opacity + translateY, optional rotateX for headlines) using IntersectionObserver; no layout-affecting properties.
- All ScrollTriggers are created inside `useLayoutEffect`/`gsap.context()` and reverted on unmount.
- Pinned horizontal carousel only ≥ 1024px; below that use native scroll-snap.

## 7. Performance budget
| Item | Budget |
|---|---|
| Hero payload (HTML+CSS+JS+art) | < 400 KB |
| First-load JS per route | Keep under ~170 KB gzip; animation libraries split out |
| Illustration scene | ≤ 80 KB; tile ≤ 30 KB; icon ≤ 8 KB |
| Fonts | 2 families, `display: swap`, subset Latin |
| Images | `next/image`, AVIF/WebP, explicit sizes |
| CLS | ≤ 0.1: every illustration slot has a fixed aspect-ratio |

## 8. Security and privacy
- Security headers via `next.config.ts` (CSP with nonce for GA, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors 'none'`).
- Secrets only in server environment variables; never prefixed `NEXT_PUBLIC_` except the GA ID.
- Input validated on the server; email body built from escaped values.
- Rate limiting on `/api/enquiry`; honeypot field named like a real field and hidden accessibly (`aria-hidden`, `tabindex=-1`).
- GA loads only after the consent choice if D-05 requires it.

## 9. Environment variables
```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=      # digits only, with country code
NEXT_PUBLIC_PHONE_DISPLAY=
RESEND_API_KEY=
ENQUIRY_TO_EMAIL=
ENQUIRY_FROM_EMAIL=
SHEETS_WEBHOOK_URL=
SHEETS_WEBHOOK_SECRET=
TURNSTILE_SECRET_KEY=             # optional (D-06)
```
Provide `.env.example`; never commit `.env.local`.

## 10. Scripts
| Script | Purpose |
|---|---|
| `dev`, `build`, `start` | Standard |
| `lint`, `typecheck` | Must pass before every step is marked done |
| `check:tbc` | Runs after `build`; scans the built HTML for `[TBC]`, "TBC" dev badges and any `data-placeholder` element, exits non-zero if found (production only) |
| `shots` | Playwright: screenshots of every route at 390, 768, 1440 into `references/screenshots/<step>/` |
| `test:a11y` | Axe on every route |
| `lh` | Lighthouse CI on Home, one program page, Contact |

## 11. Definition of "step done" for the agent
Typecheck and lint pass → build passes → `shots` run → agent lists what changed, what is placeholder, what is TBC → owner reviews screenshots before the next step.
