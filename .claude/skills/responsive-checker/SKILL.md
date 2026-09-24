---
name: responsive-checker
description: "Rules and verification checklist for foolproof responsive design across Mobile (390px), Tablet (768px), and Desktop (1440px+)."
---

# 📱 Responsive Checker Skill

Use this skill to ensure layout integrity across all device form factors.

## 1. Zero Horizontal Overflow
- The page must NEVER scroll horizontally on mobile.
- Use `width: 100%; max-width: 1200px; margin: 0 auto; box-sizing: border-box;`.
- Set `overflow-wrap: break-word;` and `word-break: break-word;` on text containers with technical IDs or URLs.

## 2. Breakpoint Strategies
- **Mobile (< 768px) :**
  - Grids collapse to `grid-template-columns: 1fr;`.
  - Side-by-side elements (like Hero split 60/40) stack vertically.
  - Steppers display as stacked vertical items.
  - Padding scales down (e.g. `padding: 16px` instead of `48px`).
  - Font sizes for large titles scale from `48px` down to `28px - 32px`.
- **Tablet (768px - 1024px) :**
  - 2-column bento grids are permitted.
  - Navigation remains comfortable.
- **Desktop (1024px - 1440px+) :**
  - Full expressive layout: split hero, horizontal 4-step bar, bento 2x2 cards.

## 3. Verification Checklist before PR
- [ ] No rigid fixed widths (`width: 800px` without `max-width: 100%`).
- [ ] Images scale responsively (`max-width: 100%; height: auto;`).
- [ ] All touch targets remain $\ge 44\text{px}$ on mobile.
