# qa-checklist.md — Verification and launch gates

> Mark each item PASS / FAIL / N/A with evidence. Anything marked **BLOCKER** stops launch.

## 1. Content gates
- [ ] **BLOCKER** No `[TBC]`, "TBC" badge or `data-placeholder` in production HTML (`pnpm check:tbc`)
- [ ] **BLOCKER** Every number, partner, testimonial and date traces to `content.md` or a client message
- [ ] **BLOCKER** No guaranteed visa, job, work-permit or migration claims
- [ ] **BLOCKER** Every published testimonial/photo has recorded permission (`assets-manifest.md`)
- [ ] Footer registration line approved by the client
- [ ] Phone, WhatsApp, email and address correct and consistent on every page
- [ ] Truncated "Computer Scie" fixed everywhere
- [ ] Optional sections (Destinations, Spotlight) either complete or fully absent, with no empty gaps or dead nav links

## 2. Visual fidelity (compare screenshots with `design.md`)
- [ ] Tokens only; no hard-coded hex values (search the diff)
- [ ] Typography scale and weights match (H1 72/40, H2 48/30, body 18/16)
- [ ] Buttons: primary uses coral-700 with white text; no white text on coral-400/500
- [ ] Cards: 20px radius, shadows, hover lift and arrow behavior
- [ ] Section backgrounds alternate as in `design.md` section 7
- [ ] Angled footer top edge with rounded corner
- [ ] Illustration style consistent across pieces (no outlines, top-left light, palette limits)
- [ ] Alignment: hero centered, other sections left-aligned; equal-height cards; CTAs pinned to card bottoms

## 3. Responsive (screenshots at 360, 390, 768, 1024, 1280, 1440, 1920)
- [ ] No horizontal scroll at any width
- [ ] Hero CTA visible above the fold at 360×640
- [ ] Mobile action bar does not cover content, form fields or footer
- [ ] Cards become carousel with peek on mobile; touch targets ≥ 44px
- [ ] Wide tables/diagrams scroll inside their own container

## 4. Motion
- [ ] Only transform/opacity animated (inspect for layout-triggering properties)
- [ ] Reduced motion: no plane, parallax, counters, auto-advance, looping pulses; all content visible
- [ ] Plane stays behind text; no overlap that hurts legibility; mobile variant simplified
- [ ] Counters count once; final values correct without JS
- [ ] Slider pauses on hover/focus; swipe and arrows work
- [ ] Pinned carousel only ≥ 1024px; native swipe below
- [ ] No jank on a mid-range Android (test on a throttled profile)

## 5. Accessibility (WCAG 2.2 AA)
- [ ] Axe: zero critical/serious on every route
- [ ] Keyboard: every control reachable, logical order, visible focus, no traps; skip link works
- [ ] Mobile menu traps focus and closes on Esc
- [ ] Accordion uses `aria-expanded`; slider has accessible controls and pause
- [ ] Form errors announced via `aria-live`; labels associated; required marked
- [ ] Contrast checked for all text on all section backgrounds
- [ ] Alt text present or empty by rule; no text inside images
- [ ] Headings in logical order; one H1 per page
- [ ] Screen reader pass on Home, a program page and Contact (NVDA or VoiceOver)

## 6. Performance (mobile, throttled 4G)
- [ ] Lighthouse mobile ≥ 90 for Performance, Accessibility, Best Practices, SEO on Home, one program page and Contact
- [ ] LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms
- [ ] Hero payload < 400 KB; home < 1.5 MB excluding video
- [ ] Animation libraries are code-split and loaded after the hero
- [ ] All images sized, lazy-loaded below the fold; hero preloaded
- [ ] Fonts: 2 families, swap, no layout shift

## 7. Forms and integrations
- [ ] **BLOCKER** Production test submission arrives in the inbox **and** the sheet
- [ ] Validation: each field's error message correct and announced
- [ ] Honeypot submission rejected silently; rate limit returns a friendly error
- [ ] One provider failing still returns success and logs; both failing shows the failure message
- [ ] Email not landing in spam (SPF/DKIM verified on the sending domain)
- [ ] WhatsApp link opens with the prefilled text; `tel:` link works on mobile
- [ ] Analytics events fire once: `enquiry_submit`, `whatsapp_click`, `call_click`, `cta_click`, `faq_open`

## 8. SEO and technical
- [ ] Unique title and description on every page; canonical set
- [ ] JSON-LD valid (Organization/EducationalOrganization, FAQPage, BreadcrumbList)
- [ ] `sitemap.xml` and `robots.txt` correct; no `noindex` left from staging
- [ ] **BLOCKER** Old URLs 301 to new routes (list verified)
- [ ] Page text present in initial HTML (view-source test)
- [ ] 404 page branded and returns 404 status
- [ ] Open Graph preview correct (test on WhatsApp and a link debugger)
- [ ] Search Console and GA4 connected

## 9. Security and privacy
- [ ] HTTPS everywhere; security headers present (CSP, X-Content-Type-Options, Referrer-Policy, frame-ancestors)
- [ ] No secrets in the client bundle or repo; `.env.local` not committed
- [ ] Privacy policy and terms live and linked in the footer; consent checkbox on forms
- [ ] Analytics respects the consent decision (D-05)

## 10. Cross-browser
- [ ] Chrome, Edge, Firefox, Safari (macOS and iOS 16+), Samsung Internet
- [ ] iOS Safari: 100vh/viewport, safe-area insets, sticky bar behavior
- [ ] Android Chrome low-end device smoke test

## 11. Launch day
- [ ] DNS and SSL configured; www/non-www redirect decided
- [ ] Redirects live and tested; sitemap submitted
- [ ] Uptime monitor set up; error logging visible to the owner
- [ ] Client received handover notes (how to edit content, where leads go, who to call)
- [ ] Backup of the repo and env variable list stored by the owner
