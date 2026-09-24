---
name: bmad-quality-gate
description: "Adversarial quality audit inspired by the BMAD framework. Audits code across Business (conversion CTAs), Marketing (senior posture & proofs), Architecture (clean build & semantics), and Design (pixel perfection & 44px hit-target) before opening a PR."
---

# 🛡️ BMAD Adversarial Quality Gate Skill

Before opening a Pull Request or declaring any frontend task complete, you MUST execute this 4-pillar adversarial self-audit.

## 🎯 Pillar 1: Business (Conversion & Actionability)
- [ ] **4 CTA Moments Check :** Are the key conversion points active?
  1. *Moment 1 (Hero triage) :* Scan vs Explore options clearly visible.
  2. *Moment 2 (Post-90s crossroads) :* Dual choice: `[Discuter du cas (15 min) ↗]` vs `[Découvrir les 4 étapes ↓]`.
  3. *Moment 3 (Contextual deep dive) :* In-line proof anchors and readable artifacts.
  4. *Moment 4 (Final decision) :* Direct booking / calendar card + navigation to next project.
- [ ] **No Dead Ends :** Does every page end with a clear, welcoming path forward?

## 📣 Pillar 2: Marketing (Senior Posture & Proofs)
- [ ] **No Junior Cataloging :** Does the copy highlight *why* decisions were made, business trade-offs, and industrial constraints (not just a list of Figma screens)?
- [ ] **Concrete Proof Points :** Are the key badges present (`COMEX validation`, `Factory testing`, `14 usability tests`, `AAOS standard`)?
- [ ] **Clean Tone :** Professional, authoritative, yet approachable ("La tête dans les nuages, les mains dans le concret").

## 🏗️ Pillar 3: Architecture (Code Hygiene & Semantics)
- [ ] **Build Validation :** Did `npm run build` succeed with code 0 and zero breaking warnings?
- [ ] **Vite Integration :** Is the new page properly declared in `vite.config.js` (`rollupOptions.input`)?
- [ ] **Semantic HTML5 :** Valid document outline (`<header>`, `<main>`, `<section>`, `<h1>` unique, proper heading hierarchy).
- [ ] **Asset Integrity :** Are all image paths absolute (`/assets/...`) and verified against existing files in `public/assets/`? No 404 broken image links.

## 🎨 Pillar 4: Design & Craft (Zero Default Aesthetics)
- [ ] **Strict 44px Hit Target :** Every single interactive element (`.olin-btn`, `.olin-link`, cards, accordions) must be $\ge 44\text{px} \times 44\text{px}$.
- [ ] **Token Fidelity :** Did you use the official classes in `src/styles/components.css` (`.olin-btn--primary`, `.olin-btn--secondary`, `.olin-tag`, `.olin-sticky`, `.olin-window`, `.olin-metric-card`) instead of writing raw ad-hoc CSS?
- [ ] **Mobile Responsiveness :** Tested at 390px. Zero horizontal scrollbar (`overflow-x`). Grids collapse gracefully into single vertical columns.
- [ ] **Hard Brutal Shadows :** Consistent `2px 2px 0px #01050F` or `3px 3px 0px #01050F` (no generic blurry drop shadows).
