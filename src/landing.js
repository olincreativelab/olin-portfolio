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

// Atelier : scène Figma 1294 × 696 mise à l'échelle, arrivée des planches
// au scroll et spotlight des 3 planches liées au post-it survolé.
function initAtelier() {
  const viewport = document.querySelector('[data-atelier]');
  if (!viewport) return;
  const stage = viewport.querySelector('.lp-atelier__stage');
  const desktop = window.matchMedia('(min-width: 1024px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const fit = () => {
    if (!desktop.matches) {
      stage.style.removeProperty('--lp-atelier-scale');
      viewport.style.removeProperty('height');
      return;
    }
    const styles = getComputedStyle(viewport);
    const inner = viewport.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    const scale = Math.min(1, inner / stage.offsetWidth);
    stage.style.setProperty('--lp-atelier-scale', String(scale));
    viewport.style.height = `${stage.offsetHeight * scale + parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom)}px`;
  };
  fit();
  new ResizeObserver(fit).observe(viewport);
  desktop.addEventListener('change', fit);

  if (!reduced && 'IntersectionObserver' in window) {
    stage.classList.add('is-armed');
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        stage.classList.add('is-in');
        observer.disconnect();
        // Arrivée terminée : on rend la main aux transitions du spotlight
        setTimeout(() => stage.classList.remove('is-armed', 'is-in'), 1600);
      }
    }, { threshold: 0.25 });
    observer.observe(stage);
  }

  stage.querySelectorAll('.lp-atelier__card').forEach((card) => {
    const focus = () => { if (desktop.matches) stage.dataset.focus = card.dataset.pillar; };
    const blur = () => { delete stage.dataset.focus; };
    card.addEventListener('pointerenter', focus);
    card.addEventListener('pointerleave', blur);
    card.addEventListener('focusin', focus);
    card.addEventListener('focusout', blur);
  });
}

// Photo de profil : la fenêtre s'ouvre en grand dans une lightbox
function initProfileLightbox() {
  const trigger = document.querySelector('[data-profile-open]');
  const dialog = document.querySelector('[data-profile-dialog]');
  if (!trigger || !dialog || typeof dialog.showModal !== 'function') return;

  trigger.addEventListener('click', () => dialog.showModal());
  // Clic sur le fond (hors fenêtre) = fermeture
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

initSiteHeader();
initAtelier();
initProfileLightbox();
initLazyBrainFmPlayers();
initWeightRamp();
initTypewriter({ startDelay: 600 });
initDotGrid(document.getElementById('canvas-dot-grid'));
