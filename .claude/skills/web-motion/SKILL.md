---
name: web-motion
description: "Guidelines and code patterns for implementing purposeful micro-interactions, tactile hover/press physics, smooth transitions, and accessible motion in Olin.os."
---

# ⚡ Web Motion & Micro-Interactions Skill

Use this skill to give interfaces a responsive, tactile, and high-precision feel without sluggish animations.

## 1. Interaction Physics & Timing
- **Snappy Curves :** Use `cubic-bezier(0.16, 1, 0.3, 1)` for UI feedback (snappy ease-out, settles instantly).
- **Short Durations :**
  - Hover states: `150ms` (instantaneous feel).
  - Drawer / accordion expands: `250ms - 300ms`.
  - Modals / full overlays: `300ms`.

## 2. Neo-Brutalist Mechanical Feel
- **Button Press (Tactile Sensation) :**
  ```css
  .olin-btn:active {
    transform: translateY(1px);
    box-shadow: 0px 0px 0px transparent;
  }
  ```
- **Link Arrow Micro-Translation :**
  ```css
  .olin-link:hover .olin-link-arrow {
    transform: translate(2px, -2px);
  }
  ```
- **Sticky Note Slight Straighten on Hover :**
  ```css
  .olin-sticky--tilted:hover {
    transform: rotate(0deg) translateY(-2px);
  }
  ```

## 3. Telemetry LED Pulse
- Pulse effect for live status badges:
  ```css
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
  ```

## 4. Accessibility & Reduced Motion
- ALWAYS respect users' motion preferences:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
