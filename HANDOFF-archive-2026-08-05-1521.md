# HANDOFF.md

## 1. Mission

Marketing website for itelligenceCX (nearshore CX provider going upmarket). A partner started the build in Next.js 16 + WordPress headless CMS; we've taken over to make it match the designer's mockups pixel-for-pixel. ~40 pages, mostly marketing content. Current priority is design fidelity first, then architecture improvements later.

## 2. Current State

**Branch:** `design/match-v2-mockups` (2 commits ahead of `main`, not yet pushed — push fails due to Git credential mismatch, user needs to push manually)

**What's working:**
- Next.js 16 + React 19 app builds cleanly (`pnpm dev` on Node 22)
- WordPress CMS at `http://54.236.105.26/graphql` serving: 1 blog post, 3 solution tags, 8 industry tags, Home page ACF fields populated
- Button component renders `<Link>` when `href` is provided (was broken — rendered `<button>` always)
- Hero section: eyebrow, headline, subtext, and lower statement block all matched to PSD specs (exact colors, weights, line breaks)
- Real logo wordmark PNG in navbar (`/public/logo-wordmark.png`)
- Navbar: text size, chevron size, spacing adjusted toward design

**What's half-built (immediate next task):**
- **Navbar CTA buttons** — the "itelligence.AI" button needs: `bg-[#f4f5f7]`, `font-medium`, slightly rounded, bottom shadow/stroke effect. "Get Started" button needs similar treatment per design. User was providing PSD specs when session ended.
- **Footer logo** — white version exists as `public/logo-white-new.png` (downloaded from SharePoint) but hasn't been integrated. Current footer still uses `logo-white.svg` (text placeholder).
- **Wave positioning** — currently `top-[15%]`. Looked close but may need final pixel nudge once all text above is finalized.

**What's blocked:**
- **Git push** — remote credential (`sketch77`) doesn't have access to `knightfoxapps/itelligenceweb`. User must push from their terminal or fix credentials.
- **Logo SVG** — only a PNG exists (extracted from PSD). User may obtain Figma SVG later. Fine for now.
- **White logo for footer** — `public/logo-white-new.png` is downloaded but it's the symbol mark only (gold knot), NOT the wordmark. User needs to export white wordmark from PSD.

**Exact next action:** Fix the two navbar CTA buttons ("itelligence.AI" and "Get Started") to match the design. PSD specs for "itelligence.AI" button: PlusJakartaSans Medium 7pt, bg `#f4f5f7`, slightly rounded corners, black bottom shadow/stroke.

## 3. Decisions Made (and Why)

- **Decision:** Design fidelity before architecture refactoring
  - **Alternatives:** Fix architecture first (CMS module, industry templates, etc.)
  - **Reason:** User has a deadline to show pages this week. Architecture is internal; design is what stakeholders see.
  - **Reversibility:** Easy — architecture work is independent and can happen after.

- **Decision:** Use forced `<br className="hidden md:inline" />` for text cascade line breaks
  - **Alternatives:** Rely on `max-width` alone to control wrapping
  - **Reason:** Font weight changes kept shifting the natural break points. After 6+ iterations tweaking `max-w`, forced breaks were the only reliable way to get exact line cascades.
  - **Reversibility:** Easy to remove if responsive behavior needs changing later.

- **Decision:** Use PNG for logo (not SVG)
  - **Alternatives:** Wait for Figma SVG export
  - **Reason:** PSD only has a rasterized "Vector Smart Object" — no true vector available yet. 489×105 PNG at 3x is sharp enough.
  - **Reversibility:** Swap the file later when SVG arrives.

- **Decision:** Hero text colors use exact PSD hex values, not theme tokens
  - **Alternatives:** Use `text-brand-blue` token
  - **Reason:** PSD says `#116ea7` for headline (slightly different from brand token `#036fa7`). PSD is the authority per the build brief hierarchy: brand guide → design files → wireframe.
  - **Reversibility:** Could unify later if brand team confirms the token value is correct.

- **Decision:** Brand color tokens in `globals.css` stay as-is (`#036fa7`, `#e3c353`)
  - **Alternatives:** Change to match PSD hero values
  - **Reason:** The PSD hero may use a variant shade; the brand sheet defines the canonical values. Other pages use the tokens correctly.
  - **Reversibility:** Trivial CSS change if needed.

## 4. Architecture & Key Files

### Files we created/modified this session:
- `src/components/ui/button.tsx` — **Rewrote**: renders `<Link>` when `href` provided, `<button>` otherwise. Polymorphic with proper TypeScript types.
- `src/components/sections/home/hero-section.tsx` — **Rewrote**: two-part hero (above wave + below wave), exact PSD typography specs, forced cascade breaks.
- `src/components/layout/navbar.tsx` — **Modified**: bigger text (`text-base`), bigger chevrons (`h-4 w-4`), tighter gap (`gap-4`), shifted right (`lg:ml-auto lg:mr-6`), real logo PNG.
- `public/logo-wordmark.png` — Real brand wordmark (489×105px, exported at 3x from PSD)
- `.nvmrc` — Node 22

### Files downloaded from SharePoint (untracked):
- `public/logo-colour.png` — Gold symbol/icon mark only (NOT the wordmark)
- `public/logo-white-new.png` — White symbol/icon mark only (NOT the wordmark)

### Key existing files:
- `src/app/globals.css` — Brand tokens, correct. Don't change unless brand team says to.
- `src/lib/wordpress.ts` — GraphQL client wrapper. Works but shallow (architecture review candidate #1).
- `src/lib/queries.ts` — All WP queries + types. Monolithic but functional.
- `src/app/(marketing)/page.tsx` — Home page, assembles 9 section components.
- `src/components/sections/shared/` — Reusable sections (XHero, SundialSection, FAQSection, CTASection).

### Don't touch yet:
- `src/app/(marketing)/industries/automotive/content.tsx` — Hardcoded but working. Architecture fix (template extraction) is deferred.
- `src/lib/queries.ts` — Will be refactored into a deep CMS module later. Don't restructure during design pass.

## 5. Gotchas & Hard-Won Knowledge

- **Node version:** Must use Node 22. The project uses Next.js 16 which requires >=20.9.0. Run `nvm use 22` or the `.nvmrc` handles it.
- **pnpm:** Must use pnpm (there's a `pnpm-lock.yaml` and `pnpm-workspace.yaml`). Install via `corepack enable && corepack prepare pnpm@latest --activate` if not available.
- **Text cascade via max-width is fragile:** Changing font weight, size, or even the text content will break the cascade. The `<br className="hidden md:inline" />` approach is more robust. Use it.
- **WordPress is HTTP only** (`http://54.236.105.26/graphql`) — fine for dev (server-side calls), will need HTTPS before production.
- **The React wireframe export from SharePoint (Relume)** is NOT a spec. It's copy + section sequence only. Visual design comes from the PSD mockups and brand sheet. The build brief explicitly states this.
- **Authority hierarchy:** Brand guide → Design files (PSD mockups) → Wireframe/React export. When they conflict, higher wins.
- **SharePoint access** works via MSAL certificate auth. Script pattern is in the chat history but credentials should not be stored in this repo. Key is at `~/Documents/etl/keys/sp_private_key.pem`.
- **Git push blocked:** Remote uses credential for `sketch77` which lacks access to `knightfoxapps/itelligenceweb`. User must push or fix auth.
- **Framer Motion animations start with `opacity: 0`** — elements are invisible until JS hydrates. This is a known UX issue but not a priority fix right now.
- **The home page ignores CMS data** — ACF fields are populated in WordPress but the frontend hardcodes all copy. The `getHomePageData()` function exists but isn't called. Connecting it is a future task.

## 6. Conventions In Play

- **Tailwind v4** via `@tailwindcss/postcss` — uses `@theme inline` blocks in CSS, not `tailwind.config.js`
- **Commit style:** Conventional commits (`fix:`, `feat:`, `rebuild:`)
- **Component organization:** `src/components/ui/` (primitives), `src/components/sections/home/` (page-specific), `src/components/sections/shared/` (reusable), `src/components/layout/` (nav/footer)
- **Route groups:** `(marketing)` for public pages, `(legal)` for legal pages
- **No tests yet** — prototyping/design phase. Architecture review identified this as a future need.
- **Copy rules:** Headlines are Title Case. Nearshore/Offshore/Onshore always capitalized. Buttons over dark/image backgrounds use outline style only.
- **PSD reference values** for font specs: PSD pt sizes roughly double for px on screen (e.g., 9pt ≈ 18px, 12pt ≈ 24px, 14pt ≈ 28px, 30pt ≈ 60px).

## 7. Open Questions

1. **What are the exact PSD specs for the "Get Started" nav button?** (User was about to provide when session ended)
2. **Can the user export the white wordmark from PSD for the footer?** (Current white logo is symbol-only, not the full wordmark)
3. **Should `#116ea7` (PSD hero) or `#036fa7` (brand sheet) be the canonical brand-blue?** They differ slightly. Needs brand team confirmation.
4. **Is the wave position (`top-[15%]`) final?** It looked close but user hadn't given final approval on positioning after the last text changes.
5. **When will Figma SVG be available for the logo?** PNG works but SVG is better long-term.
6. **What's the deadline?** User mentioned "this week" (week of Aug 4, 2026) for showing pages to stakeholders.

## 8. Do Not Touch

- **`src/app/globals.css` brand tokens** — Colors are correct per brand sheet. Don't change.
- **WordPress/CMS setup** — Working, don't reconfigure.
- **`src/lib/queries.ts` structure** — Will be refactored later (architecture candidate #1). Don't restructure during design pass.
- **Industry/Solution page content** — Hardcoded copy is source-of-truth from copy docs. Don't edit copy without user direction.
- **`next.config.ts` image remotePatterns** — Configured for WP image serving. Leave as-is.

## 9. Resume Command

> Read `HANDOFF.md`. We're on branch `design/match-v2-mockups`. The immediate task is fixing the two navbar CTA buttons ("itelligence.AI" and "Get Started") to match the design. The "itelligence.AI" button specs: PlusJakartaSans Medium, bg `#f4f5f7`, slightly rounded, black bottom shadow/stroke. Check `~/Downloads/itelligence.Al.png` for the design reference. After buttons, continue section-by-section down the homepage comparing against `~/Downloads/itelligenceCX_V2 Home d.jpg`. Do not restructure `queries.ts` or change brand tokens in `globals.css`. Confirm with user before touching anything outside the hero/nav area.
