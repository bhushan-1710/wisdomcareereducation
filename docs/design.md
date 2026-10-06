# design.md — Wisdom Career Education (WCE) Website Redesign

> Client: Wisdom Career Education Pvt. Ltd. (est. 2008, Nashik, India) · https://wisdomcareereducation.org/
> Purpose of this file: single source of truth for design, motion and build decisions. Give this to the build agent (Antigravity) before any page is generated.

---

## 1. Brief

**Who they are:** Internship, study-abroad and professional-development placement consultancy. 15+ years, international placements, university admission offers. Sectors: Hospitality & Catering, Business & Finance, Engineering & Construction, Nursing & Midwifery, IT & Computer Science.

**Audience:** (a) students aged 18–24 and their parents, (b) recent graduates, (c) working professionals seeking migration or a work permit pathway. Mostly mobile, mostly India (Maharashtra first), trust-sensitive: they are handing over money, documents and a child's future.

**Current site problems (from the live content):**
- Text-heavy, generic corporate layout with no visual story; the four programs read as paragraphs, not choices.
- Stat counters are present but empty (labels with no numbers), so the strongest trust proof is lost.
- Testimonials and the chef congratulatory message are plain text blocks with no faces, flags or destination context.
- The CTA ("achieve your dream today, buzz us") is vague and has no clear action.
- No visible journey (enquiry → admission → visa → placement), which is the thing students most want to understand.

**Redesign goal:** Make WCE feel like a modern, trustworthy, human global-career brand: light, airy, illustrated, easy to scan, with one clear action on every screen.

**Design idea in one line:** *"A journey you can scroll."* A small paper plane follows a dotted route down the page, landing at each program, story and CTA.

---

## 2. Inspiration analysis

Three reference videos were supplied. This section was re-checked against 12 frames per video. Rows marked **(ours)** are our own additions or deliberate deviations, not things seen in the reference.

### Ref A — "Logist" (cargo/logistics landing page, blue)
| Element | Observation | Use in WCE |
|---|---|---|
| Hero | Centered bold headline, one-line subcopy, two buttons (solid dark + ghost text link "Watch more"), large isometric illustration bleeding off left/right | Hero structure: centered headline, primary + secondary CTA, isometric scene of airport, university, hotel, hospital |
| Trust strip | "Over 17,000 Clients All Over The World" with a row of greyscale logos directly under hero | Partner strip: hotels, universities, institutes, countries served |
| Service cards | Four tall cards on a full-bleed blue band, each with an isometric illustration, label bottom-left, circular arrow bottom-right, thin dark outline | **Program cards** (see 6.3). This is the core pattern |
| Section band | Solid pastel-blue section with a round black "Get a Quote" sticker badge overlapping the corner | Rotating "Free counselling" badge on the programs band |
| Testimonial | Blue panel, big quote mark, small company logo, 5 stars, 3 pagination squares | Testimonial slider, but with student photo + destination flag |
| Why choose us | 2×2 icon + title + short text, divider lines, one outlined "Learn more" button | "Why WCE" block |
| FAQ | Narrow centered accordion, outlined rows, diagonal arrow icon | FAQ accordion (visa, fees, eligibility, timelines) |
| Connect | Blue panel with email field + black Subscribe button, illustration (train) on the right | Enquiry strip with plane/passport illustration |
| Footer | 4 columns, thin, social icons right, payment icons | Same structure, navy background |
| Palette / type | Pale blue background, mid blue panels, black buttons, geometric grotesk | Take the tone, not the exact colors |
| Headline motion | Headlines reveal line by line with a slight 3D tilt that settles flat; the second line is offset to the right | Line-by-line reveal with a subtle rotateX settle (max 8°); keep lines left-aligned (ours) |
| Feature rows | Alternating rows: large isometric illustration (truck, drone) + short paragraph + outlined "Learn more ↗" button; one row sits on a lighter blue band with a 2-item checklist | "Spotlight" rows for Study Abroad and Internships (section 7, row 8) |
| Why-choose-us | Two staggered columns, small illustrated icons, thin divider lines | Staggered columns, not a rigid 2×2 grid |
| Logo strip | The key number ("17,000") is highlighted in light blue; logos fade in one by one | Highlight the key number in the trust line; staggered fade for logos |
| Hover/active | FAQ row fills grey on hover | Row fills blue-50 on hover |
| Shape language | Square cards and buttons with thin dark outlines | **(ours)** WCE uses 20px-radius cards and pill buttons instead, to feel warmer and closer to Ref B/C |

**Take:** structure, card pattern, accordion, section rhythm. **Avoid:** pure black buttons and heavy outlines everywhere; too cold for an education brand.

### Ref B — "New Energy" (renewable energy, flat illustration, coral accent)
| Element | Observation | Use in WCE |
|---|---|---|
| Headline | Navy bold, key phrase highlighted in coral/salmon ("Renewable Energy") | Highlight 1–2 words per headline in the accent color |
| Illustration | Rich flat-vector landscapes: a house with solar panels, wind turbines on a coast, cyclist and EV, with soft layered hills and trees in warm green/yellow | Full-width scene illustrations per section (campus, hotel, hospital, office, airport), same flat style, layered for parallax |
| Buttons | Rectangular, thin coral outline or solid coral, tiny uppercase tracking text, plus a plain text link | Secondary buttons use outline style; primary uses solid coral |
| Navigation | Logo left, tiny uppercase links right, "Sign in" in a bordered box | Nav pattern with a bordered "Enquire now" button at the end |
| Feature trio | Three small round-icon illustrations with title + 1-line text, left-aligned, lots of whitespace | Three-up benefit rows with small illustrated badges |
| Layout | Text on one side, big illustration on the other, alternating; whitespace generous; illustration blob shape masks | Alternating split sections with organic blob masks |
| Motion | Illustrations slide in from the screen edge and exit upward/sideways as you scroll; the next scene replaces them, so each section feels like a new "room" | Scroll-linked slide in/out of section art (parallax, transform only) |
| Feature trio layout | The three small badges are staggered diagonally, each step lower and further right, not in a straight row | Use the stepped layout for "Why WCE" on desktop; stack on mobile |
| Eyebrow label | Small coral caps label ("TAKE A LOOK") above a section title | Eyebrow labels in coral-700, 12px minimum |
| Scene layouts | Art on the right in a blob mask, then art on the left in a blob mask, then a full-width bottom scene | Same rotation: right blob, left blob, full-bleed |
| Illustration colors | Terracotta/brick red, olive-lime greens, cream sand, sky blue, navy details | Added terracotta and sand to the illustration palette (see 3.1) |

**Take:** accent-on-headline trick, flat illustration style, blob masks, airy alignment. **Avoid:** tiny 9–10px uppercase nav text, which is not readable on mobile.

### Ref C — "Ski With The Club" (scroll-driven storytelling, navy + snow)
| Element | Observation | Use in WCE |
|---|---|---|
| Hero | Massive 3D-ish outlined headline over mountains with a skier overlapping the letters; floating white card with thumbnails ("Read our stories") overlaps the hero bottom | Big hero type with a character/plane crossing it; floating "Student stories" card overlapping the hero bottom edge |
| Scroll story | A tiny skier travels continuously down the page along a curved trail, passing trees; each section appears as the skier arrives | **Core motion idea:** a paper plane travels a dotted flight path from hero to footer |
| Product cards | White cards with soft shadow, product image, name, price, small pill button, horizontal row that peeks off the edge | Horizontal destination/program card carousel with edge peek |
| Buttons | Navy pill, white text, arrow icon, soft drop shadow | Primary pill button style (navy) with arrow |
| Footer | Navy block with an angled top edge, 4 columns, newsletter input + subscribe | Navy footer with diagonal top, same columns |
| Background | Near-white/lavender snow texture with soft curved ridges and scattered trees | Soft off-white with faint topographic/route lines and small decorative icons |
| Skier view | Side view in the hero; after the hero the skier is seen **from above**, weaving down the slope past text blocks. Trees are top-down cones with long cast shadows | Plane switches to a top-down view after the hero; cloud shapes with cast shadows play the role of the trees |
| Card scroll | Product cards slide in horizontally as you scroll vertically; a white round pill sits at the carousel edge | Destination cards slide in horizontally on scroll (desktop), native swipe on mobile |
| Hero type and sun | Very heavy 3D-outlined headline, sun flare top-left, layered mountains, character overlapping the letters | Heavy weight (800) and big scale, but no 3D outline (ours); soft sun glow top-left |
| Background | The hero scene dissolves into a plain soft surface with faint curved trail lines for the rest of the page | Same: after the hero, a soft blue-50 surface with faint dotted route curves |
| Footer / navy | Indigo-leaning navy; footer top edge is angled with one rounded corner | Footer uses navy-800 (indigo-leaning) with the same angled, rounded-corner top edge |
| Video frame | Presented with a heavy soft drop shadow beneath | Not needed |

**Take:** scroll-linked traveler, overlapping floating card, angled navy footer, pill buttons, card carousel. **Avoid:** busy decorative scatter that competes with content on mobile.

### Combined direction
Ref A's **structure** + Ref B's **illustration and color accent** + Ref C's **scroll story and footer**.

**Deliberate deviations from the references (ours)**
1. Rounded cards and pill buttons instead of Ref A's square outlined ones.
2. Buttons and text colors adjusted for contrast; the references' light coral and light blue fail WCAG for small text.
3. The plane stays *behind* text. In Ref C the skier crosses over headlines, which hurts legibility.
4. No tiny 9–10px nav text and no 3D outlined headline type.
5. Ref A (outlined isometric) and Ref B (outline-free flat) are different illustration styles. Section 4 merges them into one rule set so the site does not look like two brands.

---

## 3. Brand and visual identity

**Personality:** Trustworthy · Warm · Ambitious · Clear. Not luxurious, not childish.

### 3.1 Color tokens
```css
:root {
  /* Brand */
  --wce-navy-900: #0F1B3D;   /* headings, body-strong text */
  --wce-navy-800: #1C2757;   /* footer, dark buttons (indigo-leaning, as Ref C) */
  --wce-navy-700: #1E3A8A;   /* links on light backgrounds */
  --wce-blue-500: #3B82F6;   /* focus ring, decorative only (fails 4.5:1 as small text) */
  --wce-blue-100: #E6F0FF;   /* soft section bands (Ref A) */
  --wce-blue-50:  #F4F8FF;   /* page background */

  /* Accent (Ref B coral, split into three roles for contrast) */
  --wce-coral-400: #FF7A59;  /* illustrations, decorative fills, badges (use navy text on it) */
  --wce-coral-500: #F0572F;  /* LARGE headline highlight (>=28px) and outlines; about 3.4:1 on white */
  --wce-coral-700: #CF4326;  /* button fill with white text (about 4.7:1), small coral text, eyebrow labels */
  --wce-coral-800: #B83A20;  /* button hover */
  --wce-coral-100: #FFE9E3;

  /* Illustration support colors */
  --wce-sun-400:  #FFC857;
  --wce-green-400:#8FBF5A;
  --wce-green-200:#D6EBB5;
  --wce-sky-300:  #9CCBFF;
  --wce-terracotta:#C4533A;  /* building/roof accents (Ref B) */
  --wce-sand-100: #F6EBD0;   /* ground, runway, beach */

  /* Neutrals */
  --wce-ink:      #0B1020;
  --wce-slate-600:#475569;   /* body text */
  --wce-slate-300:#CBD5E1;   /* borders */
  --wce-white:    #FFFFFF;
}
```
**Contrast rules (corrected from v1, where coral #FF6B4A on white was only about 2.8:1 and white-on-coral buttons failed AA):**
- White text on `coral-700` or `navy-*` only. Never white text on `coral-400/500`.
- Headline highlight uses `coral-500`, only at 28px or larger.
- Small links and text on light backgrounds use `navy-700`, not `blue-500`.

### 3.2 Typography
- **Headings:** `Plus Jakarta Sans` (700/800), tight tracking (-0.02em).
- **Body:** `Inter` (400/500), 16–18px, line-height 1.6.
- **Eyebrow/labels:** Inter 600, uppercase, +0.08em tracking, **min 12px** (never smaller).
- Scale (desktop / mobile): H1 72/40 · H2 48/30 · H3 28/22 · Body 18/16 · Small 14/13.
- Headline rule: max 2 lines, one highlighted phrase in coral.

### 3.3 Shape, spacing, elevation
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Section padding: 96px desktop / 56px mobile.
- Container: 1200px max, 24px mobile gutter.
- Radius: cards 20px, buttons pill (999px), inputs 14px, images 24px or blob masks.
- Shadows: `--shadow-sm: 0 2px 8px rgba(15,27,61,.06)`, `--shadow-md: 0 12px 32px rgba(15,27,61,.10)`, `--shadow-float: 0 24px 60px rgba(15,27,61,.16)`.
- Grid: 12 columns desktop, 4 columns mobile.

---

## 4. Illustration system

### 4.1 One style family (merging Ref A and Ref B)
Ref A is outlined isometric with a hard yellow/blue palette; Ref B is outline-free flat with soft layered landscapes. Using both as-is would look like two brands, so WCE uses one rule set:

| Rule | Decision |
|---|---|
| Outlines | None on objects. Depth comes from tonal shades. The only dark outline is the card frame itself (UI, not art) |
| Light | From the top-left; shadows fall bottom-right at 20% navy-900 |
| Palette per piece | Max 6 hues from: navy-900, sky-300/blue-100, coral-400, terracotta, sun-400, green-400/200, sand-100, white |
| Shapes | Rounded corners, soft organic hills and blobs; isometric pieces use true 30° isometric |
| People | Indian students and professionals, mixed gender and skin tones, ages 18–35, simplified faces (dot eyes, no heavy detail), about 6.5 heads tall, clothing in palette colors |
| Texture | None (flat). Optional 2% grain only on the hero sky |
| Detail level | Scenes medium-high, tiles medium, icons low |
| Text inside art | Never (convert to outlines or leave out) so it can be translated and stay crisp |

### 4.2 Two illustration types
1. **Isometric tiles** (Ref A): single subject cluster on a pastel tile; used on cards and spotlight rows.
2. **Layered scenes** (Ref B): full-bleed or blob-masked landscapes with separable layers for parallax.

### 4.3 Technical spec
- Format: SVG (inline or SVGR), optimized with SVGO; WebP fallback at 2× for any piece with gradients that render poorly.
- Transparent background; scenes are exported as separate layers `-back`, `-mid`, `-front` named `ill-<id>-<layer>.svg`.
- viewBox fixed per asset (table below); no embedded raster images.
- Weight budget: scene ≤ 80 KB per layer set, tile ≤ 30 KB, icon ≤ 8 KB.
- Each asset has alt text (below) or `alt=""` if decorative.
- Safe area: keep key subjects inside the central 80%; mobile crops use `object-position` per asset.

### 4.4 Asset list
| ID | Type | Subject | Size (viewBox) | Layers | Used on |
|---|---|---|---|---|---|
| ill-hero | Scene | Runway with a plane lifting off, a university, hotel, hospital and office tower on soft hills, 2–3 students with luggage, sun glow top-left, clouds. Mobile crop 4:5 | 1600×900 (mobile 800×1000) | back (sky, sun, clouds), mid (buildings), front (runway, students, trees); plane separate | Hero |
| ill-plane-side | Sprite | Paper plane, side view | 96×64 | 1 | Hero accent |
| ill-plane-top | Sprite | Paper plane, top-down, with soft shadow | 96×96 | 1 | Scroll route |
| ill-cloud-1..3 | Decoration | Top-down clouds with offset cast shadow (the "trees" of Ref C) | 240×140 | 1 each | Route background |
| ill-iso-study | Tile | Campus building, graduation cap, globe | 480×480 | 1 | Program card: Study Abroad |
| ill-iso-student | Tile | Laptop, notebook, hotel/office building | 480×480 | 1 | Program card: Student Internships |
| ill-iso-grad | Tile | Briefcase, certificate, office building | 480×480 | 1 | Program card: Graduate Internships |
| ill-iso-pdp | Tile | Passport, work-permit card, globe with pin | 480×480 | 1 | Program card: Professional Development |
| ill-sector-hospitality / business / engineering / nursing / it | Tile ×5 | One object cluster each (hotel and cloche; bank and chart; crane and gear; hospital cross and stethoscope; laptop and code) | 240×240 | 1 each | Placement sectors |
| ill-about | Scene (blob mask) | Counsellor with a student at a desk, globe and documents | 640×560 | back, front | About |
| ill-dest-malaysia, ill-dest-france (+ more TBD) | Card art | A recognisable landmark or skyline per country, portrait | 480×600 | back, front | Destination cards |
| ill-spot-study, ill-spot-intern | Large tile | Larger isometric scenes (Ref A feature rows): university campus; hotel kitchen/front desk | 720×560 | 1 | Spotlight rows |
| ill-route | Path | Dotted curved route, full page height, with 5 stop anchors | 1440×(page height), responsive | path only | Journey / plane |
| ill-step-1..5 | Icon | Counselling, choose country, offer letter, visa/passport, airplane | 96×96 | 1 | Journey stepper |
| ill-why-1..4 | Badge | Round badges: counselling, visa support, global network, post-placement support | 96×96 | 1 | Why WCE |
| ill-csr | Scene | Students volunteering / community help | 640×480 | back, front | CSR |
| ill-connect | Scene | Passport, plane, suitcase | 640×360 | 1 | Enquiry strip |
| ill-cta-scene | Scene | Sunset runway, plane lifting off, hills | 1600×700 | back, mid, front | Final CTA |
| ill-form-success | Animation | Plane flying out of an envelope (Lottie or SVG) | 320×240 | 1 | Form success |
| ill-404 | Scene | Plane lost among clouds | 600×400 | 1 | 404 page |
| ill-avatar-1..6 | Avatar | Placeholder faces until real student photos arrive | 128×128 | 1 | Testimonials |
| og-image, favicon | Brand | Plane mark on blue; OG 1200×630, favicon 512×512 | as stated | 1 | Metadata |

**Real photos, not illustrations:** student portraits for testimonials, the celebrity chef message, CSR event photos, and the thumbnails in the floating story card.

### 4.5 Brief template for each asset
Subject · Mood · Palette (max 6) · Composition and focal point · Safe area · Layers needed · Alt text · "No text, no outlines, top-left light". Example for ill-hero: *"Optimistic morning scene. Runway diagonal from bottom-left, plane lifting off right, university and hotel on mid hills, two students with luggage in the foreground left, sun glow top-left, flat vector, palette navy/sky/coral/terracotta/green/sand."*

### 4.6 How to produce them
1. **Commission an illustrator** (best consistency) using 4.1 and 4.4 as the brief; or
2. **License a library** (check the licence allows commercial client use and whether attribution is required); or
3. **AI-generate then vectorize**: expect raster output, inconsistent style across pieces and garbled text, so generate all pieces in one session with the same style prompt and clean them up.
Until assets exist, build with grey placeholder blocks that carry the exact IDs and sizes above so nothing in the layout shifts when art is swapped in.
Do not copy or trace the reference illustrations (Logist, New Energy, Ski With The Club); they belong to their creators.

---

## 5. Motion and animation

**Principles:** meaningful, calm, 60fps, reduced-motion safe. Motion explains the journey; it is never decoration only.

### 5.1 Global tokens
```css
--ease-out: cubic-bezier(.22,1,.36,1);
--ease-in-out: cubic-bezier(.65,0,.35,1);
--dur-fast: 160ms; --dur-base: 320ms; --dur-slow: 700ms;
```

### 5.2 Signature: the Paper Plane route (from Ref C's skier)
- Hero: the plane is seen from the **side**, taking off in the hero illustration.
- After the hero: the plane switches to a **top-down** view (as the skier does in Ref C) and follows a dotted curved SVG path down the page, passing soft clouds that cast shadows.
- Position is driven by scroll progress (GSAP ScrollTrigger + MotionPath, or CSS scroll-timeline where supported); the plane rotates to follow the path tangent.
- Path is drawn progressively (stroke-dashoffset) behind the plane.
- At each section the plane "lands" briefly and the section's heading and cards reveal.
- The plane stays **behind text** (z-index below content). Ref C lets the skier cross headlines; we do not, for legibility.
- **Mobile:** a short dotted vertical line in the left gutter with a small plane; no wide swooping.
- **Reduced motion:** hide the plane; show the static dotted line only.

### 5.3 Section by section
| Moment | Motion |
|---|---|
| Page load | Logo and nav fade in (300ms), hero headline reveals line by line with a slight rotateX settle (Ref A) and a 60ms stagger, illustration layers slide in from different depths |
| Hero | Plane in the illustration drifts slowly; clouds parallax at 0.2× scroll; headline highlight word has a coral underline that draws in |
| Floating story card (overlaps hero bottom) | Rises 40px with fade after headline; thumbnails scale 1.05 on hover |
| Stat counters | Count up from 0 over 1.6s when 40% visible, once only; numbers use tabular figures |
| Destination cards | Pinned section on desktop: vertical scroll slides the cards horizontally (Ref C); native swipe with scroll-snap on mobile |
| Program cards | Stagger in (80ms apart). Hover: lift 8px, shadow-md → shadow-float, isometric art tilts 3° and scales 1.04, arrow circle fills coral and rotates 45° |
| Sector tiles | Icons pop in with slight overshoot; hover wobbles 2° |
| Journey section | Steps light up in order as the plane passes; line draws between them |
| Testimonials | Cross-fade + 24px slide, auto-advance every 6s, pause on hover/focus; progress bar replaces the pagination squares |
| FAQ accordion | Height animates 280ms ease-out; arrow rotates 45°; only one open at a time |
| Final CTA | Plane lifts off the runway as the section enters; button has a gentle pulse every 5s (stops after 2 loops) |
| Footer | Diagonal navy edge slides up slightly as it enters (16px) |

### 5.4 Micro-interactions
- Buttons: press scale 0.97, 120ms; arrow icon slides 4px right on hover.
- Nav: underline grows from left, 200ms; sticky nav gets a soft shadow and blur after 24px scroll.
- Links: color transition 160ms.
- Form fields: label floats, border turns blue-500, a green check appears when valid.
- Cursor (desktop only): no custom cursor.

### 5.5 Performance and accessibility rules
- Only animate `transform` and `opacity`.
- Respect `prefers-reduced-motion: reduce` by disabling the plane, parallax, counters and auto-advance.
- Lazy-load below-fold illustrations; hero art preloaded; total hero payload under 400 KB.
- No animation longer than 1s except the plane and counters.

---

## 6. Components

### 6.1 Navigation
- Left: WCE logo (wordmark + small plane mark). Right: Programs · Study Abroad · Internships · Success Stories · About · Contact, then a bordered/solid **Enquire now** button (coral).
- Link text 15px/600, **not** tiny uppercase. Sticky, 72px high, white with blur.
- Mobile: hamburger opens a full-height navy sheet, links stacked at 24px, Enquire button pinned at the bottom, WhatsApp shortcut.

### 6.2 Buttons
| Type | Style | Use |
|---|---|---|
| Primary | `coral-700` fill, white text, pill, 52px high, arrow icon (hover `coral-800`) | Main CTA (one per viewport) |
| Secondary | Navy outline 1.5px, navy text, pill (optional coral-500 outline on blue-50 sections, as Ref B) | Alternative actions |
| Dark | `navy-800` fill, white text, pill, soft shadow (Ref C) | On light-blue bands |
| Text link | `navy-700`, underline on hover, arrow | Tertiary ("Watch story") |
| Icon circle | 44px circle, navy outline, diagonal arrow ↗ | Card corner action |

States: hover (darker + lift 2px), focus (3px blue-500 ring offset 2px), disabled (50% opacity), loading (spinner replaces arrow).

### 6.3 Program cards (core component, from Ref A cards)
- Tall card, 4:5 ratio, white, radius 20px, 1px slate-300 border, shadow-sm.
- Top: isometric illustration on a pastel blue tile.
- Title (H3), 2-line description, small tag chips (e.g. "Work permit pathway").
- Bottom: label left, circle ↗ button right.
- Desktop: 4-up on a full-bleed blue-100 band with the round "Free counselling" text badge (slow rotation is ours, not seen in Ref A) overlapping the top-right corner. Tablet: 2×2. Mobile: horizontal scroll-snap carousel with the next card peeking 24px (from Ref C).
- Cards (4): **Study Abroad & University Admissions** · Student Internships · Graduate Internships · Professional Development Programs. *The live site lists three programs plus placement sectors; the Study Abroad card is our proposal because the site calls Internship and Study Abroad its main focus. Client to confirm.* Placement sectors get their own section (7, row 7) instead of a fourth card.

### 6.4 Floating story card (from Ref C)
White card, radius 20px, shadow-float, overlapping the hero bottom by 48px. Title "Real stories, real journeys", 5 student thumbnails with destination flag badges, link "Read all stories". Hidden on mobile and replaced by a horizontally scrolling thumbnail row.

### 6.5 Stat tiles
Four large numbers: **15+ Years**, **[X]+ Placements**, **[X]+ University admission offers**, **[X] Countries**. Navy number 56px, label slate-600. **Client must supply the real numbers**; do not invent them.

### 6.6 Testimonial card
Blue-100 panel, large quote mark, quote (max 40 words), student photo (circular 64px), name, institute/destination, destination flag, 5 stars in sun-400. Content for launch: Sathya Naidu (visa support), Avinash Chaudary (DY Patil, Eastin Penang, Malaysia internship), Kshitija Adsul (France admission), Aishwarya More (Bharti Vidyapeeth Institute; her text is not on the page, so the client must supply it), plus the congratulatory message from celebrity gourmet chef Vishnu Manohar as a video or featured quote.

### 6.7 Journey stepper
Five steps on the dotted route: **1 Free counselling → 2 Choose program & country → 3 Admission / internship offer → 4 Visa & documentation → 5 Fly & get placed**. Each is a small card with a number badge and one line. Horizontal on desktop, vertical on mobile.

### 6.8 FAQ accordion
Narrow (760px) centered, outlined rows, 18px question, diagonal arrow icon. Starter questions: What documents are needed? How long does the visa take? Are internships paid? Can an internship lead to a work permit? What are the fees and what do they cover? Who is eligible? (Answers to be supplied by the client.)

### 6.9 Enquiry form
Fields: Full name, Phone (+91), Email, Interested in (select: Study abroad / Student internship / Graduate internship / Professional development), Preferred country, Message (optional). Primary button "Book free counselling". Consent line for contact. Success state: plane flies out of the button, confirmation message plus WhatsApp link.

### 6.10 Footer
`navy-800`, angled top edge with one rounded corner (Ref C). Four columns: Contact (address, phone, email), Quick links, Programs, Newsletter (email + subscribe). Bottom row: copyright, "Registered under Companies Act 1956, Government of India", social icons.

---

## 7. Page structure (home)

| # | Section | Layout | Background |
|---|---|---|---|
| 1 | Nav | Sticky bar | White |
| 2 | **Hero**: "Your global career *starts here*" + subcopy + [Book free counselling] [Watch our story] + hero illustration + floating story card | Centered text over illustration | Blue-50 with sky gradient |
| 3 | **Trust strip**: "Trusted by students and institutes across India" with the key number highlighted + logo row | Single row, greyscale logos, staggered fade | White |
| 4 | **About / 15+ years** + stat tiles | Split: text left, illustration right (blob mask) | White |
| 5 | **Programs** ("What we offer") + 4 program cards | Full-bleed band, cards 4-up | Blue-100 |
| 6 | **Destinations** (Malaysia, France, others TBD) *(optional, needs client content)* | Pinned horizontal card scroll | Blue-50 |
| 7 | **Placement sectors** (Hospitality & Catering, Business & Finance, Engineering & Construction, Nursing & Midwifery, IT & Computer Science) | 5 isometric tiles | White |
| 8 | **Spotlight rows** ×2: Study Abroad, Internships (Ref A feature rows with a 2–3 item checklist and "Learn more ↗") *(optional)* | Alternating split, one on a lighter blue band | White / Blue-100 |
| 9 | **Journey** | Stepper on the dotted path | Blue-50 |
| 10 | **Why WCE** | Stepped/staggered layout | White |
| 11 | **Success stories** | Testimonial slider + chef message | Blue-100 |
| 12 | **CSR** (Corporate Social Responsibility) | Photo + short text | White |
| 13 | **FAQ** | Accordion | Blue-50 |
| 14 | **Final CTA + enquiry form** ("Achieve your dream today") | Split with plane-on-runway illustration | Navy block with white text |
| 15 | Footer | 4 columns | Navy-800 |

Sections 6 and 8 are optional; drop them if the client cannot supply content.

### Copy fixes from the live site
- "Information Technology and Computer Scie" is cut off on the live site; use "Computer Science".
- The "Years Experience", "International Placements" and "University admission offers" labels have no numbers.

### Copy tone
Short, reassuring, concrete. Replace vague lines with specifics, for example "Free counselling in Nashik or online" instead of "buzz us".

### Other pages (phase 2)
Programs (one template with 4 variants), Study Abroad by country, Success Stories, About / Team, CSR, Contact, Blog.

---

## 8. Alignment and layout rules
- Hero text centered; every other section left-aligned for readability, alternating the illustration side.
- Illustrations may bleed off the viewport edge by up to 10% (Ref A), but text never does.
- Cards in a row share equal height; CTAs pinned to the bottom of each card.
- Maintain a consistent 8px baseline; vertical rhythm between heading and body is 16px, body and button 32px.
- Never place more than one primary button in a viewport.
- Section transitions use a curved or angled divider, not a hard straight line, in 3 places maximum (hero→trust, journey→why, CTA→footer).

---

## 9. Responsive behavior
| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | <640 | Single column, carousel for cards, simplified plane line, sticky bottom bar with **Call** and **WhatsApp** |
| Tablet | 640–1024 | 2-col grids, hero art scaled to 90% |
| Desktop | 1024–1440 | Full layout |
| Wide | >1440 | Container stays 1200px, illustration bleeds wider |

Touch targets min 44×44px. Body text never below 16px on mobile.

---

## 10. Accessibility and SEO
- WCAG 2.2 AA: contrast, focus rings, keyboard navigation, skip link, semantic landmarks.
- Alt text for all illustrations (decorative ones `alt=""`).
- One H1 per page, logical heading order.
- Form errors announced with `aria-live`.
- Metadata and Open Graph for every page; structured data (`Organization`, `EducationalOrganization`, `FAQPage`).
- Target: Lighthouse ≥ 90 on mobile for Performance, Accessibility, SEO.
- Page weight: home under 1.5 MB excluding video.

---

## 11. Suggested tech stack
- **Next.js (App Router) + TypeScript + Tailwind CSS**
- **GSAP + ScrollTrigger** (plane route, counters, reveals); Framer Motion for small UI transitions
- SVG illustrations inlined or via SVGR
- Forms: server action or API route sending to email and a Google Sheet or CRM; WhatsApp click-to-chat link
- Hosting: Vercel; images through `next/image`; fonts via `next/font`

---

## 12. Open items (need from the client)
1. Real numbers for the four stat tiles and the countries served.
2. High-resolution logo and brand colors if they want to keep any existing ones.
3. Student photos and permission to publish them; the chef's message (video or text).
4. List of partner hotels, universities and institutes for the logo strip.
5. Answers for the FAQ, fees structure and visa timelines.
6. Phone, email, WhatsApp number, office address(es), and social links.
7. CSR content and photos.
8. Which countries to feature first (Malaysia and France appear in current testimonials).

---

## 13. Build order
1. Design tokens, fonts, global styles, base components (buttons, cards, inputs).
2. Home page static layout, all 15 sections (sections 6 and 8 optional), with placeholder illustrations by ID.
3. Illustrations swapped in; hero parallax and reveal animations.
4. Paper Plane scroll route and counters.
5. Forms, FAQ, testimonials slider.
6. Responsive pass, accessibility pass, performance pass.
7. Inner pages from the same components.

---

## 14. Notes on this analysis
- The live site content was read from the page text. Its visual layout, colors and exact animations were **not** inspected, so the problems in section 1 come from its content structure. A screen recording or screenshots would allow a proper visual audit.
- The three videos are web design concept showcases (Logist, New Energy, Ski With The Club), not WCE assets. Use them as direction only.
- The frames were reviewed at low resolution (about 12 per video), so small details such as exact hex values, hard-shadow offsets and easing curves are estimates, not measurements.

## 15. Revision log (v2)
- Re-verified every reference claim against 12 frames per video; marked our own additions with **(ours)**.
- Added missing observations: Ref A headline tilt reveal, feature rows, staggered why-us; Ref B stepped trio, eyebrow label, slide-in/out art; Ref C top-down skier, horizontal card scroll, rounded-corner footer, indigo navy.
- Fixed contrast errors in the color system (coral buttons and highlight, blue links).
- Rebuilt section 4: one unified illustration style, technical spec, 30+ assets with sizes and layers, brief template, production options.
- Program cards now match the live site (placement sectors are a separate section; Study Abroad card proposed).
- Added destinations and spotlight sections; added Aishwarya More to testimonials; flagged the truncated "Computer Scie" copy.
