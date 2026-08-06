# HANDOFF.md

## 1. Mission

Marketing website for itelligenceCX (nearshore CX provider). Next.js 16 + WordPress headless CMS. A partner started the build; we're making it match PSD mockups pixel-for-pixel. ~40 pages, mostly marketing. Deadline is this week (week of Aug 4, 2026). Design fidelity first, architecture later.

## 2. Current State

**Branch:** `design/home-page-match` (PR #1 open, reviewer: knightfox)

**2 commits ahead of remote, 1 unstaged file:**
- Unpushed commits: `598b737` (product suite section), `ceccdc0` (stats section)
- Unstaged: `src/components/sections/home/insights-lead-in-section.tsx` — case study rows resized to PSD specs but the **background wave position is wrong** (extends into the numbered list when it should stop above it)

**What's working and verified (all on latest local state):**
- Next.js 16 + React 19 builds cleanly (`pnpm dev` on Node 22)
- WordPress CMS at `http://54.236.105.26/graphql` serving content
- **Navbar**: SVG logo (`public/logo-wordmark.svg`), correct CTA buttons
- **Hero section**: Matched to PSD
- **The Shift section**: Matched to PSD
- **Performance CX section**: Matched to PSD
- **Solution Mapping section** ("Start Where it Matters Most"): Columns spread evenly, icons tight to titles (mb-1), title max-w 230px, description max-w 280px, centered CTA buttons with nav styling
- **"Every solution is built on the itelligence.AI operating model"** statement block: 48px medium, "itelligence.AI" in semibold #0078a9, down arrow below
- **Capabilities section** ("How We Design Performance"): Centered header (60px heading, 24px semibold subtext with break after "outcomes"), four columns with sunburst PNG icons (no clipping), correct text (updated copy per user), gold "Learn More" buttons (`bg-[#e7c64a]`), titles have `min-h-[56px]` so blurbs align
- **Product Suite section** ("The Operating Model — itelligence.AI"): Full-cover `operating-model-wave.png` background (no opacity reduction), heading 68px medium, body text `max-w-[440px]` wrapping to 5 lines, three icon cards with title+Explore button overlaid inside at `bottom-8`, buttons 87×32px `bg-[#43c2ff]`, closing statement 28px semibold
- **Stats section** ("Inside Our Operation"): 28px medium eyebrow, 68px heading, two rows of 3 stats with `border-l-[3px] border-[#dadada]`, blue stat values 60px bold, labels 30px medium

**What's half-built (immediate next task):**
- **Insights Lead-In section** ("Customer Lifecycle Intelligence at Scale"): Header area is done (two-column with About/Performance Insights buttons). Case study rows are sized correctly (50px semibold titles, 36px numbers in #b4b4b4, fixed 101×27px pills). **BUT the `proven-outcomes-wave.png` background extends too far down** — it bleeds into the numbered list. In the PSD, the gold wave covers only the header/title area and fades out before the numbered rows start. The background div currently uses `h-[65%]` and `-top-20` which is too much. It needs to stop roughly where the case study list begins.

**What's blocked:**
- **Footer white logo** — `public/logo-white-new.png` is only the symbol mark (gold knot), NOT the wordmark. User needs to export white wordmark from PSD.
- **Git push** — credential works now (pushed earlier this session). Use `RobertAinsworth77` gh account for this repo.

**Exact next action:** Fix the `proven-outcomes-wave.png` background height/position in `insights-lead-in-section.tsx` so it covers only the header area (title + buttons) and doesn't extend into the numbered case study rows. Reduce `h-[65%]` to something like `h-[40%]` or use a fixed pixel height. Then continue with remaining homepage sections below (FAQ section is the last one in the page assembly).

## 3. Decisions Made (and Why)

- **Use plain `<Link>` elements for CTA buttons instead of the `<Button>` component**
  - Alternatives: Button with variant overrides
  - Reason: Button's `clsx` in Tailwind v4 creates class conflicts where variant backgrounds override custom ones unpredictably. After two failed attempts, plain Links with exact classes work reliably.
  - Reversibility: Easy — refactor Button to use tailwind-merge later.

- **CTA button pattern**: `rounded-lg`, specific bg color, `shadow-[0_2px_0_0_rgba(0,0,0,0.85)]` bottom stroke
  - Grey buttons: `bg-[#f4f5f7]`
  - Blue buttons: `bg-brand-blue` with white text
  - Gold buttons: `bg-[#e7c64a]`
  - Light blue buttons: `bg-[#43c2ff]`
  - This pattern is consistent across all sections.

- **Design fidelity before architecture refactoring**
  - Reason: Stakeholder demo this week. Architecture is internal; design is visible.
  - Reversibility: Easy — architecture work is independent.

- **PSD pt-to-px conversion uses ~2x multiplier**
  - Validated empirically across 10+ sections. The PSD is retina (likely 144dpi).

- **PSD "vertical" value = line-height** in pts, same 2x conversion.

- **Icon PNGs include their containers** (translucent rounded rectangles are baked into the images, not CSS-generated)
  - Learned after building a CSS container that duplicated what was already in the PNG.

- **SVG logo** replaced PNG in navbar (user provided vector from designer)

- **Stats section uses single heading** — PSD shows "Performance, Measured" / "Inside Our Operation" once, with all 6 stats (2 rows of 3) below. No separate "What We Deliver" header.

- **Executive Dashboard module added** to `sketch77/executive-dashboard` (separate repo, separate project). Monitors this website's GitHub activity + WordPress CMS health. Pushed to main on sketch77 account.

## 4. Architecture & Key Files

### Files modified this session:
- `src/components/sections/home/solution-mapping-section.tsx` — Fixed columns (gap-0, mb-1 icons, 230px title width, 280px desc width), added "Every solution..." statement block with down arrow, centered CTA buttons with nav styling
- `src/components/sections/home/capabilities-section.tsx` — Centered header (60px/24px), full circular images (no clipping), correct copy, gold Learn More buttons, `min-h-[56px]` on titles
- `src/components/sections/home/product-suite-section.tsx` — Removed lucide icons + Button import, PNG icons with overlay text/buttons inside, full-cover background, bigger icons (380×420), closing statement 28px semibold
- `src/components/sections/home/stats-section.tsx` — Single heading, 2 rows of 3, blue bold values 60px, labels 30px medium, grey left borders
- `src/components/sections/home/insights-lead-in-section.tsx` — **UNSTAGED** — Rewrote: two-column header, About/Performance Insights buttons, proven-outcomes-wave background, case study rows with 50px titles + fixed-size pills. Background position still needs fixing.
- `src/components/layout/navbar.tsx` — Swapped logo from PNG to SVG
- `public/logo-wordmark.svg` — **Created**: Vector logo from designer
- `public/images/home/down-arrow.png` — **Created**: Arrow icon below "operating model" statement

### Key existing files (unchanged this session):
- `src/app/globals.css` — Brand tokens. Don't change.
- `src/app/(marketing)/page.tsx` — Home page, assembles 9 sections: HomeHero, TheShiftSection, PerformanceCXSection, SolutionMappingSection, CapabilitiesSection, ProductSuiteSection, StatsSection, InsightsLeadInSection, FaqSection
- `src/lib/wordpress.ts` — GraphQL client. Don't restructure.
- `src/lib/queries.ts` — All WP queries. Don't restructure.
- `src/components/ui/button.tsx` — Has class conflict issues. Use plain Links instead.
- `public/images/home/operating-model-wave.png` — Gold wave for product suite section (1920×900px)
- `public/images/home/proven-outcomes-wave.png` — Gold wave for insights/proven outcomes section
- `.nvmrc` — Node 22

### Don't touch:
- `src/app/globals.css` — Brand tokens correct per brand sheet
- `src/lib/queries.ts` — Architecture candidate, deferred
- `next.config.ts` — Image remotePatterns configured
- `src/components/ui/button.tsx` — Works for non-pixel-precise uses; hero/nav/section buttons use plain Links intentionally

## 5. Gotchas & Hard-Won Knowledge

- **Button component class conflicts**: Tailwind v4 CSS generation order ≠ source order. Variant classes from `clsx` can override custom classes unpredictably. Use plain `<Link>` elements for pixel-precise buttons.

- **Icon PNGs include their containers**: The product suite icons (`icon-qa.png`, `icon-training.png`, `icon-workforce.png`) have translucent rounded rectangles baked in. Don't add a CSS wrapper with `bg-white/65` — it doubles up.

- **PSD pt × 2 = px**: Validated across all sections. 7pt→14px, 9pt→18px, 12pt→24px, 14pt→28px, 15pt→30px, 18pt→36px, 24pt→48px, 25pt→50px, 30pt→60px, 34pt→68px.

- **PSD "vertical" = line-height** in pts, same 2x.

- **Node 22 required**. `nvm use 22`. pnpm only.

- **Git credentials**: This repo (`knightfoxapps/itelligenceweb`) uses `RobertAinsworth77` gh account. The executive dashboard (`sketch77/executive-dashboard`) uses `sketch77` account. Switch with `gh auth switch --user <name>`.

- **Text cascade via max-width is fragile**: Use forced `<br className="hidden md:inline" />` for exact PSD line breaks.

- **WordPress is HTTP only** (`http://54.236.105.26/graphql`). Fine for dev.

- **Framer Motion opacity: 0 start** — elements invisible until JS hydrates. Known, not priority.

- **Background wave positioning**: The `proven-outcomes-wave.png` should cover only the "Proven Outcomes" / "Customer Lifecycle Intelligence at Scale" header area. It must NOT extend into the numbered case study rows below. Currently `h-[65%]` is too much.

- **capabilities-section title alignment**: Uses `min-h-[56px]` on h3 elements so all four column blurbs start at the same vertical line regardless of whether the title wraps to 1 or 2 lines.

- **product-suite icons overlay**: Title and Explore button are `absolute bottom-8` inside a `relative` container wrapping the Image. The icon PNGs already have the translucent box, so text appears inside them.

## 6. Conventions In Play

- **Tailwind v4** via `@tailwindcss/postcss` — `@theme inline` blocks in CSS
- **Commit style:** Conventional commits (`fix:`, `feat:`)
- **Component organization:** `src/components/sections/home/` (page-specific sections)
- **No tests** — design phase
- **Copy rules:** Headlines Title Case. Nearshore/Offshore/Onshore always capitalized.
- **Button style pattern**: `rounded-lg`, color-specific bg, `shadow-[0_2px_0_0_rgba(0,0,0,0.85)]` bottom stroke
- **PSD reference format**: font family, weight, pt size, vertical (line-height) pt, color → convert pt×2 for px
- **Use Tailwind spacing scale** for margins/padding (not hard px). Only use exact px for font-size and line-height.
- **Authority hierarchy**: Brand guide → PSD mockups → Wireframe/export. Higher wins on conflicts.

## 7. Open Questions

1. **Background wave on "Proven Outcomes" section**: What exact coverage should it have? User showed it should cover the title area and fade before the numbered rows. Needs a height reduction from current `h-[65%]`.
2. **FAQ section**: Not yet styled to PSD. What does it look like in the design?
3. **Remaining sections below case studies**: Are there more sections after the numbered list (01–06) before the footer?
4. **Footer**: Blocked on white wordmark logo. When will user export it?
5. **Should `#116ea7` (PSD hero) or `#036fa7` (brand sheet) be canonical brand-blue?**
6. **After homepage is done**: User wants to run wayfinder/grill-me/write-a-prd skills to create PRDs and GitHub issues for the broader project. These could tie into the executive dashboard.

## 8. Do Not Touch

- **`src/app/globals.css`** — Brand tokens are correct
- **`src/lib/queries.ts`** — Architecture refactor deferred
- **`next.config.ts`** — Image remotePatterns working
- **`src/components/ui/button.tsx`** — Intentionally bypassed for section buttons
- **WordPress CMS config** — Working, don't reconfigure
- **Industry/Solution page content** — Hardcoded, not in scope
- **`sketch77/executive-dashboard`** — Separate repo, itelligence module already pushed and working

## 9. Resume Command

> Read `HANDOFF.md`. We're on branch `design/home-page-match`. There's one unstaged change in `insights-lead-in-section.tsx`. The immediate task is fixing the `proven-outcomes-wave.png` background — reduce its height so it covers only the header area ("Proven Outcomes" / "Customer Lifecycle Intelligence at Scale" + buttons) and does NOT bleed into the numbered case study rows below. Reference: the gold wave in the PSD fades out between the buttons and the first "01" row. After fixing that, commit all outstanding changes and push. Then continue section-by-section (FAQ section is next). Compare against the full-page PSD at `~/Downloads/itelligenceCX_V2 Home d.jpg`. Do not restructure `queries.ts` or change brand tokens in `globals.css`. Confirm with user before touching anything outside homepage sections.
