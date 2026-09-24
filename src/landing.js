/**
 * OLIN.OS — LANDING PAGE
 * Header transverse, mini-player Brain.fm (chargé à la première intention),
 * trame interactive, accroche à graisse progressive et chute tapée à la machine.
 */

import { initSiteHeader } from './site-header.js';
import { initTypewriter } from './typewriter.js';
import { initDotGrid } from './dot-grid.js';
import { initLazyBrainFmPlayers } from './brainfm-youtube-player.js';

// Amorce : graisse Geologica croissante lettre par lettre (300 → 900).
// Le texte reste dans le DOM (aria-hidden, le h1 porte un aria-label).
function initWeightRamp() {
  const line = document.querySelector('[data-weight-ramp]');
  if (!line) return;

  const text = line.textContent;
  const letters = [...text].filter((char) => char !== ' ').length;
  let seen = 0;

  const spans = [...text].map((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    if (char !== ' ') {
      const weight = Math.round(300 + (600 * seen) / Math.max(letters - 1, 1));
      span.style.fontWeight = String(weight);
      seen += 1;
    }
    return span;
  });

  line.replaceChildren(...spans);
}

initSiteHeader();
initLazyBrainFmPlayers();
initWeightRamp();
initTypewriter({ startDelay: 600 });
initDotGrid(document.getElementById('canvas-dot-grid'));
