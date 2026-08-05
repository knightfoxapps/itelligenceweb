# HANDOFF.md

## 1. Mission

Marketing website for itelligenceCX (nearshore CX provider going upmarket). A partner started the build in Next.js 16 + WordPress headless CMS; we've taken over to make it match the designer's PSD mockups pixel-for-pixel. ~40 pages, mostly marketing content. Deadline is this week (week of Aug 4, 2026) to show stakeholders. Current priority is design fidelity first, architecture improvements later.

## 2. Current State

**Branch:** `design/match-v2-mockups` (7 commits ahead of the initial rebuild, latest `0c09a48`)

**Git push is blocked** — remote credential (`sketch77`) doesn't have access to `knightfoxapps/itelligenceweb`. User must push manually.

**What's working and verified (all on latest commit):**
- Next.js 16 + React 19 builds cleanly (`pnpm dev` on Node 22)
- WordPress CMS at `http://54.236.105.26/graphql` serving content (blog posts, tags, ACF fields)
- **Navbar**: Real logo wordmark PNG, correct text sizing, both CTA buttons match PSD (rounded-lg, `bg-[#f4f5f7]` for itelligence.AI, `bg-brand-blue` for Get Started, both have bottom shadow stroke, reduced height with `py-1.5`)
- **Hero section**: Eyebrow, headline, subtext matched to PSD. Below-wave statement block with two buttons — "Start a Pilot" (blue + blue glow + bottom stroke) and "itelligence.AI" (grey + bottom stroke), both 43×152px using plain `<Link>` elements (not Button component, to avoid variant conflicts)
- **The Shift section**: Typography matches PSD — eyebrow 24px medium `#6f6f6f`, heading 48px semibold black, body 18px regular black split into two paragraphs. Image is the PNG with gold X baked in, displayed with `object-contain` (no clip-path, no SVG overlay), negative vertical margins so woman spans full section height. Section padding reduced.
- **Performance CX section**: Left-aligned text, asymmetric padding (text near top, large empty space below). Heading is 72px semibold white, eyebrow 24px medium `#99dbf8`, body 18px regular white in `max-w-[30rem]`. CTA buttons removed.
- **Solution Mapping section ("Start Where it Matters Most")**: Left-aligned heading 68px medium with forced break after "Where", arrow icon after "Most" (`ml-10`). Correct PNG icons (icon-engage, icon-grow, icon-retain) at responsive sizes up to 176px. Column titles 24px medium, constrained `max-w-[200px]`. Blurbs 18px regular, `max-w-[220px]`. Pill-style "View Services" buttons.

**What's half-built (immediate next task):**
- **Solution Mapping section needs polish**: Icons are still too far from titles (currently `mb-3` but needs less). Title in first column ("I want every interaction to count.") wraps to 3 lines but should be 2 — `max-w-[200px]` is too narrow, needs ~230px. The columns need to span the full screen width more evenly. User was providing feedback when session ended.

**What's blocked:**
- **Git push** — credential issue, user must push.
- **Footer white logo** — `public/logo-white-new.png` is only the symbol mark (gold knot), NOT the wordmark. User needs to export white wordmark from PSD.
- **Logo SVG** — only PNG exists. User may get Figma SVG later.

**Exact next action:** Fix the Solution Mapping section columns — reduce icon-to-title gap further, widen title max-width to ~230px so "I want every interaction to count." fits on 2 lines, and ensure columns span the full viewport width evenly. Compare against `~/Downloads/Start Where.png` reference.

## 3. Decisions Made (and Why)

- **Decision:** Use plain `<Link>` elements for hero CTA buttons instead of the `<Button>` component
  - **Alternatives:** Use Button with variant="ghost" or override classes
  - **Reason:** The Button component's variant system (using clsx) creates class conflicts in Tailwind v4 where the variant's `bg-transparent` or `bg-brand-blue` overrides custom classes unpredictably. After two failed attempts with variant overrides, plain Links with exact classes work reliably.
  - **Reversibility:** Easy — could refactor Button to use tailwind-merge or add a "custom" variant later.

- **Decision:** Design fidelity before architecture refactoring
  - **Alternatives:** Fix architecture first (CMS module, industry templates, etc.)
  - **Reason:** User has a deadline to show pages this week. Architecture is internal; design is what stakeholders see.
  - **Reversibility:** Easy — architecture work is independent.

- **Decision:** Use forced `<br className="hidden md:inline" />` for text cascade line breaks
  - **Alternatives:** Rely on `max-width` alone
  - **Reason:** Font weight changes shift natural break points. After 6+ iterations in the previous session, forced breaks are the only reliable way to get exact line cascades.
  - **Reversibility:** Easy to remove if responsive behavior needs changing.

- **Decision:** Use PNG for logo (not SVG)
  - **Alternatives:** Wait for Figma SVG export
  - **Reason:** PSD only has a rasterized "Vector Smart Object". 489×105 PNG at 3x is sharp enough.
  - **Reversibility:** Swap the file later.

- **Decision:** Hero text colors use exact PSD hex values, not theme tokens
  - **Alternatives:** Use `text-brand-blue` token
  - **Reason:** PSD says `#116ea7` for headline (different from brand token `#036fa7`). PSD is authority per build brief hierarchy.
  - **Reversibility:** Trivial CSS change.

- **Decision:** PSD pt-to-px conversion uses ~2x multiplier
  - **Alternatives:** 1.33x (72dpi→96dpi)
  - **Reason:** Empirically validated — when we use 2x (e.g., 30pt → 60px), the rendered output matches the design screenshots the user provides. The PSD is likely at 144dpi or the designer uses retina artboards.
  - **Reversibility:** N/A, it's a reference formula not a code choice.

- **Decision:** The Shift section image has gold X baked into the PNG — no CSS clip-path or SVG overlay needed
  - **Alternatives:** Clip-path polygon to cut photo into X shape; SVG X behind photo
  - **Reason:** Both alternatives created white triangles cutting through the woman's face. The source PNG (910×900, RGBA) already composites the woman over the gold X correctly.
  - **Reversibility:** N/A.

- **Decision:** Performance CX section uses asymmetric padding (small top, large bottom) to push text toward top
  - **Alternatives:** Centered vertical alignment with flexbox
  - **Reason:** Design shows text in upper third with empty wave space below. Asymmetric padding is the simplest CSS approach.
  - **Reversibility:** Trivial.

## 4. Architecture & Key Files

### Files created/modified this session:
- `src/components/layout/navbar.tsx` — **Modified**: CTA buttons restyled (rounded-lg, bg-[#f4f5f7], bottom shadow stroke, reduced height)
- `src/components/sections/home/hero-section.tsx` — **Modified**: Replaced Button components with plain Link elements for below-wave CTAs. Added `Link` import, removed `Button` import.
- `src/components/sections/home/the-shift-section.tsx` — **Rewrote content area**: Fixed typography to PSD specs, split body into two paragraphs, removed clip-path/SVG X, display PNG directly with object-contain, negative margins for full-height image, reduced section padding.
- `src/components/sections/home/performance-cx-section.tsx` — **Rewrote**: Removed CTA buttons, left-aligned all text, asymmetric padding, increased heading to 72px, added proper spacing. Removed Button import.
- `src/components/sections/home/solution-mapping-section.tsx` — **Rewrote**: Left-aligned heading with forced break, added arrow-most.png inline, replaced lucide icons with correct PNGs, constrained column text widths, pill-style View Services buttons. Removed lucide-react and Button imports.
- `public/images/home/arrow-most.png` — **Created**: Arrow icon placed after "Most" in heading (copied from `~/Downloads/arrow-most@3x.png`, renders at 38px)

### Key existing files (unchanged):
- `src/app/globals.css` — Brand tokens. Don't change.
- `src/lib/wordpress.ts` — GraphQL client wrapper. Works but shallow (architecture candidate #1).
- `src/lib/queries.ts` — All WP queries + types. Monolithic. Don't restructure during design pass.
- `src/app/(marketing)/page.tsx` — Home page, assembles 9 section components.
- `src/components/ui/button.tsx` — Polymorphic Button (renders Link when href provided). Has class conflict issues with Tailwind v4 — prefer plain Links for pixel-precise buttons.
- `.nvmrc` — Node 22
- `public/logo-wordmark.png` — Real brand wordmark (489×105px, 3x)
- `public/logo-white-new.png` — White symbol mark only (NOT wordmark). Unusable for footer.
- `public/logo-colour.png` — Gold symbol mark only.

### Don't touch yet:
- `src/app/(marketing)/industries/automotive/content.tsx` — Hardcoded but working. Architecture fix deferred.
- `src/lib/queries.ts` — Will be refactored later. Don't restructure during design pass.
- `src/app/globals.css` — Brand tokens correct per brand sheet.
- `next.config.ts` — Image remotePatterns configured for WP. Leave as-is.

## 5. Gotchas & Hard-Won Knowledge

- **Button component class conflicts**: The `Button` component uses `clsx` to compose variant + custom classes. In Tailwind v4, class order in source doesn't determine specificity — CSS generation order does. This means `variant="ghost"` adding `bg-transparent` can override your custom `bg-brand-blue` unpredictably. **Solution**: For pixel-precise buttons, use plain `<Link>` elements with all classes inline. Don't fight the Button component.

- **The Shift image PNG already has gold X composited in**: Previous attempts to add an X via CSS clip-path or SVG overlay created white triangles cutting through the woman's face. The PNG (910×900, RGBA with transparency) is the complete composition. Just display it with `object-contain`.

- **PSD pt sizes → px**: Multiply by ~2. This was validated empirically across multiple sections (7pt → 14px, 9pt → 18px, 12pt → 24px, 30pt → 60px, 34pt → 68px). The PSD appears to be at retina resolution.

- **PSD "vertical" value**: This is the line-height in pts. Same 2x conversion applies (e.g., 11pt vertical → 22px line-height).

- **Node version**: Must use Node 22. Next.js 16 requires >=20.9.0. Run `nvm use 22`.

- **pnpm**: Must use pnpm. Install via `corepack enable && corepack prepare pnpm@latest --activate` if not available.

- **Text cascade via max-width is fragile**: Forced `<br className="hidden md:inline" />` breaks are more reliable than max-width for matching PSD line breaks.

- **WordPress is HTTP only** (`http://54.236.105.26/graphql`). Fine for dev (server-side), needs HTTPS before production.

- **Framer Motion animations start with `opacity: 0`** — elements invisible until JS hydrates. Known UX issue, not priority.

- **Home page ignores CMS data** — ACF fields populated in WordPress but frontend hardcodes all copy. Connecting CMS is a future task.

- **Hard px values for spacing are bad practice**: User explicitly called this out. Use Tailwind's spacing scale (mb-2, mb-6, mb-10, mb-14 etc.) for responsive-friendly spacing. Only use exact px for font-size and line-height where PSD specs demand it.

- **Authority hierarchy**: Brand guide → Design files (PSD mockups) → Wireframe/React export. When they conflict, higher wins.

- **Git push blocked**: Remote uses credential for `sketch77` which lacks access to `knightfoxapps/itelligenceweb`. User must push.

## 6. Conventions In Play

- **Tailwind v4** via `@tailwindcss/postcss` — uses `@theme inline` blocks in CSS, not `tailwind.config.js`
- **Commit style:** Conventional commits (`fix:`, `feat:`, `rebuild:`)
- **Component organization:** `src/components/ui/` (primitives), `src/components/sections/home/` (page-specific), `src/components/sections/shared/` (reusable), `src/components/layout/` (nav/footer)
- **Route groups:** `(marketing)` for public pages, `(legal)` for legal pages
- **No tests yet** — design phase. Architecture review identified this as future need.
- **Copy rules:** Headlines are Title Case. Nearshore/Offshore/Onshore always capitalized.
- **Button style pattern for this design**: `rounded-lg`, `bg-[#f4f5f7]` for light buttons, `shadow-[0_2px_0_0_rgba(0,0,0,0.7)]` for bottom stroke, blue glow via `shadow-[0_0_12px_2px_rgba(17,110,167,0.4)]` for primary CTAs
- **PSD reference format**: When user gives specs, they provide: font family, weight, pt size, vertical (line-height) pt, color. Convert pt×2 for px values.

## 7. Open Questions

1. **Solution Mapping section columns**: Icons still too far from titles, first column title wraps to 3 lines. What max-width feels right? Need user to confirm after next adjustment.
2. **Can the user export the white wordmark from PSD for the footer?** Current white logo is symbol-only.
3. **Should `#116ea7` (PSD hero) or `#036fa7` (brand sheet) be the canonical brand-blue?** Needs brand team confirmation.
4. **Is the wave position (`top-[15%]`) in the hero final?** User hasn't given final approval.
5. **When will Figma SVG be available for the logo?**
6. **What are the remaining homepage sections to style after Solution Mapping?** Need to compare the full-page PSD against current output to identify the sequence.
7. **The "View Services" buttons in Solution Mapping** — the PSD reference shows these. Are the link destinations correct (engage, grow, retain solution pages)?

## 8. Do Not Touch

- **`src/app/globals.css` brand tokens** — Colors are correct per brand sheet.
- **WordPress/CMS setup** — Working, don't reconfigure.
- **`src/lib/queries.ts` structure** — Architecture candidate #1. Don't restructure during design pass.
- **Industry/Solution page content** — Hardcoded copy is source-of-truth from copy docs.
- **`next.config.ts` image remotePatterns** — Configured for WP image serving.
- **`src/components/ui/button.tsx`** — Works fine for non-pixel-precise uses. Don't refactor to fix the hero/nav buttons; those use plain Links now and that's intentional.
- **`package.json`** — Has an unstaged modification (likely the `packageManager` field auto-added by corepack). Don't commit unless user says to.

## 9. Resume Command

> Read `HANDOFF.md`. We're on branch `design/match-v2-mockups`. The immediate task is finishing the Solution Mapping section ("Start Where it Matters Most") — the icons need to be closer to the titles below them (reduce the gap), the title `max-w` needs to be wider (~230px) so "I want every interaction to count." fits on 2 lines not 3, and the columns should span the full viewport width more evenly. Reference image is `~/Downloads/Start Where.png`. After that, continue section-by-section down the homepage comparing against `~/Downloads/itelligenceCX_V2 Home d.jpg`. Do not restructure `queries.ts` or change brand tokens in `globals.css`. Confirm with user before touching anything outside the homepage sections.
