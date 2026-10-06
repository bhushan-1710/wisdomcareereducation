# assets-manifest.md — Asset tracker

> Single list of every image, illustration, logo and document the site needs, with status. Names are fixed; code refers to these IDs. Specs per asset are in `design.md` section 4.
> Status: **needed** → **requested** (asked client/illustrator) → **received** → **optimized** → **placed**. Until **placed**, use a labelled placeholder of the same size.

## A. Illustrations (produce or license; style rules in design.md 4.1)
| ID | Type | Size | Layers | Used on | Source (commission/licence/AI) | Licence OK | Status |
|---|---|---|---|---|---|---|---|
| ill-hero | Scene | 1600×900 (mobile 800×1000) | back/mid/front + plane | Hero | | | needed |
| ill-plane-side | Sprite | 96×64 | 1 | Hero | | | needed |
| ill-plane-top | Sprite | 96×96 | 1 | Scroll route | | | needed |
| ill-cloud-1, -2, -3 | Decoration | 240×140 | 1 each | Route background | | | needed |
| ill-iso-study | Tile | 480×480 | 1 | Program card | | | needed |
| ill-iso-student | Tile | 480×480 | 1 | Program card | | | needed |
| ill-iso-grad | Tile | 480×480 | 1 | Program card | | | needed |
| ill-iso-pdp | Tile | 480×480 | 1 | Program card | | | needed |
| ill-sector-hospitality | Tile | 240×240 | 1 | Sectors | | | needed |
| ill-sector-business | Tile | 240×240 | 1 | Sectors | | | needed |
| ill-sector-engineering | Tile | 240×240 | 1 | Sectors | | | needed |
| ill-sector-nursing | Tile | 240×240 | 1 | Sectors | | | needed |
| ill-sector-it | Tile | 240×240 | 1 | Sectors | | | needed |
| ill-about | Scene (blob) | 640×560 | back/front | About | | | needed |
| ill-dest-malaysia | Card art | 480×600 | back/front | Destinations | | | needed (optional section) |
| ill-dest-france | Card art | 480×600 | back/front | Destinations | | | needed (optional section) |
| ill-spot-study | Large tile | 720×560 | 1 | Spotlight | | | needed (optional) |
| ill-spot-intern | Large tile | 720×560 | 1 | Spotlight | | | needed (optional) |
| ill-route | Path | 1440×page height | path only | Journey / plane | | | needed |
| ill-step-1 … ill-step-5 | Icon | 96×96 | 1 | Journey | | | needed |
| ill-why-1 … ill-why-4 | Badge | 96×96 | 1 | Why WCE | | | needed |
| ill-csr | Scene | 640×480 | back/front | CSR | | | needed |
| ill-connect | Scene | 640×360 | 1 | Enquiry strip | | | needed |
| ill-cta-scene | Scene | 1600×700 | back/mid/front | Final CTA | | | needed |
| ill-form-success | Animation | 320×240 | 1 | Form success | | | needed |
| ill-404 | Scene | 600×400 | 1 | 404 | | | needed |
| ill-avatar-1 … ill-avatar-6 | Avatar | 128×128 | 1 | Testimonials (until photos arrive) | | | needed |

## B. Brand
| ID | Item | Spec | Owner | Status |
|---|---|---|---|---|
| brand-logo | WCE logo (SVG, light + dark variants) | Vector | Client (Q8) | needed |
| brand-wordmark-fallback | Simple wordmark + plane mark | If no logo supplied | Dev | needed |
| favicon | Plane mark | 512×512 + ICO | Dev | needed |
| og-image | Social share image | 1200×630 | Dev | needed |

## C. Photos and video (real, with permission)
| ID | Item | Spec | Permission | Status |
|---|---|---|---|---|
| photo-story-1 … 5 | Student portraits for the hero story card | 400×400, face-centered | [TBC] | needed |
| photo-testimonial-sathya, -avinash, -kshitija, -aishwarya | Testimonial portraits | 256×256 | [TBC] | needed |
| video-chef-message | Chef Vishnu Manohar congratulatory message | MP4 ≤ 20 MB or YouTube link | [TBC] | needed |
| photo-csr-1 … 4 | CSR event photos | 1200×800 | [TBC] | needed |
| photo-team | Team / office photo | 1600×900 | [TBC] | needed |
| video-story | "Our story" video for the secondary CTA | optional | [TBC] | needed (optional) |

## D. Partner logos (Q2)
| Partner | Type | Logo file | Permission | Status |
|---|---|---|---|---|
| Eastin Penang (hotel, Malaysia) | hotel | | [TBC] | needed |
| DY Patil | institute | | [TBC] | needed |
| Bharti Vidyapeeth Institute | institute | | [TBC] | needed |
| others | | | | [TBC] |

## E. Documents
| Item | Owner | Status |
|---|---|---|
| Privacy Policy text | Client / reviewed template | needed (Q11) |
| Terms text | Client / reviewed template | needed (Q11) |
| Registration certificate wording for footer | Client | needed |
| Old-site URL list for redirects | Dev (crawl) | needed (D-07) |

## F. Placeholder rule
A placeholder is a neutral grey/blue block with the asset **ID and size printed on it**, fixed aspect-ratio, `role="img"` and a dev-only label. It is never shipped: `check:tbc` also fails on any element with `data-placeholder`.
