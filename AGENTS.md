# AGENTS.md — Rules for the coding agent (Antigravity)

You are building the **Wisdom Career Education (WCE)** website. Follow this file in every session.

## 1. Read first, in this order
1. `docs/PRD.md` — scope and behavior (source of truth)
2. `docs/design.md` — visuals, motion, components
3. `docs/content.md` — all copy
4. `docs/architecture.md` — stack, structure, data model
5. `docs/assets-manifest.md` — asset IDs and status
6. `docs/build-plan.md` — current step

If documents conflict: PRD > design.md > content.md > architecture.md. If anything is ambiguous, **ask**; do not guess.

## 2. Hard rules
1. **Never invent content.** No made-up statistics, partner names, testimonials, addresses, prices, dates or visa/placement claims. Unknown = `{ tbc: true }` in content files.
2. **All text lives in `src/content/*`.** No literal copy in JSX except trivial UI labels defined in `content/site.ts`.
3. **Tokens only.** Colors, spacing, radius and shadows come from CSS variables/Tailwind theme defined from `design.md` 3. No hard-coded hex values in components.
4. **Contrast rules:** white text only on `navy-*` or `coral-700`. Headline highlight uses `coral-500` at ≥ 28px. Links use `navy-700`.
5. **No guaranteed outcomes** in copy: never promise a visa, job, work permit or migration.
6. **Illustrations** are referenced by ID from `assets-manifest.md`. If the file is missing, render the labelled placeholder (`Illustration` component). Never generate or trace the reference designs' artwork. Never hotlink external images.
7. **Motion:** animate only `transform` and `opacity`. Respect `prefers-reduced-motion`. Load animation libraries dynamically. The plane stays behind text.
8. **Accessibility:** semantic HTML, one H1 per page, visible focus, 44px touch targets, labelled form fields, `aria-live` errors, alt text rules from `design.md` 4.3.
9. **Server-rendered content:** page text must be in the initial HTML. Client components only where interactivity is required.
10. **Secrets** only in server env vars; never in client code or git. Phone/WhatsApp numbers come from env or `content/site.ts`, never hard-coded in components.
11. **Do not edit files in `docs/`** unless the owner asks. Propose changes in your report instead.
12. **Scope discipline:** do only the current step. No refactors, restyles or "improvements" outside it.

## 3. Conventions
- TypeScript strict; no `any` without a comment.
- Components: PascalCase files, one component per file, props typed.
- Folders as in `docs/architecture.md` section 2.
- Class names via Tailwind utilities; shared patterns become components, not copied class strings.
- Commit per step with message `step N: <summary>`.
- Package manager: pnpm.

## 4. Every step ends with
1. `pnpm typecheck && pnpm lint && pnpm build` all green
2. `pnpm shots` → screenshots in `references/screenshots/step-N/` at 390, 768, 1440 for every route touched
3. A report with these headings:
   - **Done** (what was built, mapped to PRD requirement IDs)
   - **Deviations** (anything different from the docs, with reason)
   - **Placeholders and TBC** (list)
   - **Risks / questions for the owner**
4. Stop and wait for the owner's "go" before the next step.

## 5. Verification habits
- Look at your own screenshots; report visible problems (overflow, overlap, contrast) honestly, including ones you did not fix.
- Test at 360px width as well as 390.
- Emulate reduced motion and confirm all content is visible.
- Never claim something is verified unless you ran the check and can point to the output.

## 6. When blocked
State the blocker, list options with trade-offs, recommend one, and wait.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
