---
name: frontend-craft
description: "Audit and polish frontend UI code to ensure elite visual craft, pixel perfection, WCAG 2.2 accessibility, zero default browser styles, and impeccable typography."
---

# 🎨 Frontend Craft & UI Polish Skill

Use this skill when implementing or reviewing any HTML/CSS/JS frontend component or page for Olin.os.

## 1. Visual Hierarchy & Pixel Perfection
- **Zero Browser Defaults :** Ensure no element renders with default Times New Roman, generic blue links, or native unstyled buttons.
- **Card Aesthetics :** All cards must use the sharp Studio Pro styling: `background: #FFFFFF`, `border: 1px solid #01050F`, `border-radius: 8px`, and hard brutal shadows `box-shadow: 2px 2px 0px #01050F` (or `3px 3px 0px #01050F` for interactive containers).
- **Typography Pairing :**
  - Headings & body copy: `'Geologica'`, sans-serif with proper letter spacing and line heights (1.4 to 1.6).
  - Metrics, timestamps, terminal captions, metadata, status pills: `'Kode Mono'`, monospace.

## 2. Accessibility & Touch Standards (Non-Negotiable)
- **44px Hit Target Rule :** Every interactive element (`<a>`, `<button>`, tab, accordion toggle) MUST have an effective hit target of at least 44px × 44px (`min-height: 44px; display: inline-flex; align-items: center;`).
- **Focus Rings :** Always provide visible keyboard focus indicators (`:focus-visible { outline: 2px solid #0028FF; outline-offset: 3px; }`).
- **Semantic HTML :** Use proper HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Color Contrast :** Never place light gray text on white backgrounds; body text must be `#334155` or darker.

## 3. Image & Media Rigor
- Always provide descriptive `alt` tags.
- Prevent layout shifts: explicitly set `width` and `height` or `aspect-ratio` where possible.
- Use `loading="lazy"` for below-the-fold images.
