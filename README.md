# Handoff: dev&dash Studio Website (Next.js)

## Instruction for Claude Code
Build this marketing website as a **Next.js 14+ (App Router) + TypeScript** project, styled with **Tailwind CSS** (or CSS Modules if preferred). Recreate the design in `design/Dev and Dash Website.dc.html` pixel-faithfully. Single page (`app/page.tsx`) composed of section components. Static — no backend. Deploy target: Vercel.

## About the Design Files
`design/Dev and Dash Website.dc.html` is an **HTML design reference** (a prototype showing intended look and behavior), not production code. Open it in a browser to view (it needs `support.js` beside it). Recreate it in idiomatic Next.js/React — don't port the runtime. All copy in the file is final and must be used **verbatim**.

## Fidelity
**High-fidelity.** Final colors, type, spacing, copy and interactions. Match closely.

## Suggested structure
```
app/layout.tsx        fonts (next/font/google: Geist, Geist_Mono), metadata
app/page.tsx          composes sections
components/Nav.tsx  Hero.tsx  Intro.tsx  Work.tsx  ProjectCard.tsx
components/Services.tsx  Process.tsx (client)  Approach.tsx
components/OneApproach.tsx  Capabilities.tsx  Contact.tsx  Footer.tsx
components/ui/Tag.tsx  Button.tsx  Halftone.tsx  Logo.tsx
public/images/*  public/logo/*
```

## Design Tokens
**Colors**
- ink `#1c1a2b` · body text `#5d5a73` · muted `#6b6882` · faint `#8d89a3` · inactive `#9a97ad`
- page bg `#f5f4f9` · card `#ffffff` · hairline `rgba(28,26,43,.07)`
- lavender accent `#7b6ff0` · lavender text `#5a4fc4` · blue `#3f6fd1` / `#5a8ef0` · pink `#b8467f` / `#e27bb4`
- green status `#2f8f5b` (dot `oklch(0.68 0.15 155)`)
- Logo gradient: `linear-gradient(135deg, #e27bb4, #7b6ff0 55%, #5a8ef0)`

**Hero gradient** (section bg):
```
radial-gradient(45% 45% at 8% 88%, oklch(0.82 0.12 350 / .95), transparent 70%),
radial-gradient(40% 50% at 96% 78%, oklch(0.8 0.12 330 / .85), transparent 70%),
radial-gradient(60% 55% at 50% 0%, oklch(0.7 0.12 268), transparent 75%),
linear-gradient(180deg, oklch(0.74 0.1 268) 0%, oklch(0.84 0.08 295) 55%, #f5f4f9 100%)
```
Other section gradients (project frames, service headers, process panel, approach panel) are in the HTML — copy them exactly.

**Halftone dot texture** (reusable `<Halftone mask=… />`): absolutely positioned overlay, `pointer-events:none`,
`background-image: radial-gradient(circle, rgba(255,255,255,.85) 1px, transparent 1.6px); background-size: 8px 8px;` masked by radial-gradient `mask-image` so dots only appear in soft patches. Opacity .7–.8.

**Typography**
- Sans: **Geist** (300/400/500/600). Mono: **Geist Mono** (400/500).
- H1: 300, `clamp(40px, 6.2vw, 76px)`, lh 1.02, ls -0.035em, white, `text-wrap: balance`
- H2: 300, `clamp(30px, 3.8vw, 46px)` (Work H2 `clamp(34px,4.4vw,52px)`), lh 1.05–1.1, ls -0.03em
- Project H3: 400, `clamp(30px,3.4vw,42px)`, ls -0.03em; subtitle H4: 300 20px, accent color per project
- Intro statement: 400 `clamp(22px,2.8vw,32px)` lh 1.35, second half in `#8d89a3`
- Body: 400 14px lh 1.6–1.65; hero sub 16px lh 1.55
- Tags/meta: Geist Mono 500 11px
- Second lines of two-line headings are colored `#8d89a3`

**Radii**: hero/approach panels 32px · project cards 28px · frames 20px · service cards 24px · inner images 14px · buttons 10–12px · pills 999px
**Shadows**: cards `0 1px 2px rgba(28,26,43,.04), 0 24px 60px rgba(90,70,180,.07)`; glass `0 20px 50px rgba(60,40,140,.18)`; white button `0 6px 20px rgba(40,30,110,.2)`
**Layout**: max-width 1320px, outer padding 16px; section vertical padding ~100px desktop; all grids `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so everything reflows on mobile.

## Components
- **Tag**: inline-flex pill, gap 7px, padding 5px 11px, white bg, 1px hairline border, Geist Mono 500 11px `#5a4fc4`, leading 5px dot `#7b6ff0`. On gradient: bg `rgba(255,255,255,.2)`, border `rgba(255,255,255,.35)`, white text/dot.
- **Button primary (light)**: white bg, ink text, 500 14px, padding 12px 20px, radius 12px; hover text `#5a4fc4`.
- **Button primary (dark)**: bg `#1c1a2b`, white text, 500 13–14px, radius 12px; hover bg = section accent.
- **Button ghost (on gradient)**: 1px `rgba(255,255,255,.6)` border, bg `rgba(255,255,255,.12)`; hover `.25`.
- **Logo (nav)**: 40×40 tile, radius 11px, logo gradient bg, inset 1px `rgba(255,255,255,.25)` ring, shadow `0 4px 14px rgba(40,30,110,.25)`; centered white comet (`/images/logo-comet-white.png`, render white, 28×22). Wordmark 600 18px ls -0.02em: **"dev&" in `#1c1a2b`, "dash" in `#fff`**.
- **Logo (footer)**: gradient comet (`/images/logo-comet-gradient.png`, 38×30) + "dev&dash" 600 17px with gradient text `linear-gradient(90deg,#e27bb4,#7b6ff0 50%,#5a8ef0)` via `background-clip:text`.

## Sections (top → bottom)
1. **Hero** — rounded 32px gradient panel + halftone. Nav: logo left; center frosted pill nav (Work, Services, Process, Contact → anchor links; bg `rgba(255,255,255,.18)`, blur 12px, items 13px, padding 7×14, active item bg `.22`); right white "Start a Project" button (radius 10). Centered: white Tag "Strategy. Design. Development.", H1, sub paragraph, two buttons. Below: 3 glass cards (Steady rotated -6deg & translateY 28px; Agilance center, larger, 250px image; Mind & Spirit +6deg) each with title row + image; floating status pills "Design" (pink) and "Deployed" (green). 90px bottom fade into `#f5f4f9`.
2. **Intro** — centered statement paragraph.
3. **Selected Work** (`#work`) — header grid (Tag + H2 left, 2 paragraphs right). Three alternating project cards (image left/right/left): white card, padding 14px; image frame 4:3 with project gradient + inset screenshot; text column: mono meta line, H3, colored H4, paragraphs, dark button.
   - Steady → `/images/steady-home.png`, accent `#5a4fc4`, "Explore Steady →"
   - Agilance — AI Triage → `/images/agilance-hero.png`, accent `#3f6fd1`, "View Project →"
   - Mind & Spirit → `/images/mind-spirit.png`, accent `#b8467f`, "View Project →"
4. **What We Do** (`#services`) — header grid + 4 cards (minmax 250px): 150px pastel gradient header with mono index (01–04) and 24px title; description; list items Geist Mono 12px separated by top hairlines.
5. **Process** (`#process`) — H2 "From idea → interface → production." Left: vertical step list (4 buttons, 2px left border; active border `#7b6ff0`, text ink; inactive `#9a97ad`). Right (spans 2 cols): gradient panel with huge light number (300, `clamp(72px,10vw,128px)`, white) + progress pips (active 22px wide, others 6px; width transition .3s), and a frosted card showing "NN — Name", lead (24px) and body.
6. **Approach** — rounded 32px blue/lavender gradient panel + halftone; white Tag, H2 with italic *and*; glass container with two white cards: left big quote "Beautiful on the surface. Solid underneath.", right paragraphs.
7. **One Approach** — centered H2, 3 white cards (gradient orb 34px, name, one-liner), closing 2 lines.
8. **Selected Capabilities** — Tag + infinite horizontal marquee of white pill chips (15px, padding 12×18), edges masked with linear-gradient fade. 60s linear loop; duplicate list for seamless loop.
9. **Contact** (`#contact`) — centered Tag "Have an idea?", H2, stacked short lines, dark "Start a Project →" button. 4 floating pills (Web Design, Product Design, Development, AI) absolutely positioned with gentle float animation; subtle lavender halftone behind. Hide the floating pills below ~720px.
10. **Footer** — logo + "Independent web design & development studio." left; right tagline "Design thoughtfully. Build boldly. Ship beautifully." (last phrase `#7b6ff0`); bottom bar mono 12px: services line / "© 2026 dev&dash".

## Interactions & Behavior
- **Process stepper** (client component): `activeStep` state 0–3. Auto-advance every 5s; stop auto-advancing permanently once the user clicks a step. Respect `prefers-reduced-motion` (no autoplay).
- **Marquee**: CSS `@keyframes marquee { to { transform: translateX(-50%) } }`, 60s linear infinite; pause on hover; disable with reduced motion.
- **Float**: `@keyframes float { 50% { transform: translateY(-8px) } }` 6–7.5s ease-in-out, staggered delays.
- Smooth scrolling for anchor links (`scroll-behavior: smooth`, `scroll-margin-top: 20px` on sections).
- Hover: nav items, buttons as listed above; step list hover → ink.
- Links: project buttons are placeholders (`#`); "Start a Project" → `mailto:` (email TBD — leave a constant in `lib/site.ts`).

## Responsive
Fluid via clamp() and auto-fit grids. At <720px: hero glass cards shrink (hide the two rotated side cards or scale them down), pill nav collapses to a simple menu button or wraps under the logo, project cards stack image-first, process panel full width.

## Assets
- `public/images/` — project screenshots (supplied by the client) and logo comet PNGs (transparent).
- `public/logo/` — downloadable logo lockups + 1024px app icon (use icon for favicon / apple-touch-icon).
- Fonts: Geist, Geist Mono via `next/font/google`.
- Use `next/image` for all screenshots (`object-fit: cover`).

## SEO / Meta
Title "dev&dash — Web design & development studio"; description from hero paragraph; OG image can use the icon for now.

## Files
- `design/Dev and Dash Website.dc.html` — the full design (open in a browser; copy + exact styles live here)
- `design/support.js`, `design/image-slot.js`, `design/shots/` — needed only to view the reference
