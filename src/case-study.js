/**
 * OLIN.OS — CASE STUDY (Progressive Disclosure)
 * Stepper actif au scroll (tiroirs : <details> natifs, fermés par défaut),
 * export One-Pager via impression, trame de fond interactive, titre tapé au chargement.
 */

import { initDotGrid } from './dot-grid.js';
import { initSiteHeader } from './site-header.js';
import { initTypewriter } from './typewriter.js';

// --------------------------------------------------------------------------
// 1. Stepper : état actif synchronisé avec l'acte visible
// --------------------------------------------------------------------------
function initStepper() {
  const stepper = document.querySelector('[data-stepper]');
  const acts = document.querySelectorAll('[data-act]');
  if (!stepper || !acts.length || !('IntersectionObserver' in window)) return;

  const items = new Map(
    [...stepper.querySelectorAll('.olin-stepper__item')].map((item) => [
      item.getAttribute('href').slice(1),
      item,
    ])
  );

  const count = document.querySelector('[data-stepper-count]');
  const label = document.querySelector('[data-stepper-label]');

  const setActive = (id) => {
    [...items].forEach(([key, item], index) => {
      const isActive = key === id;
      item.classList.toggle('olin-stepper__item--active', isActive);
      if (isActive) {
        item.setAttribute('aria-current', 'step');
        // Barre d'accordéon mobile : reflète l'étape en cours
        if (count) count.textContent = String(index + 1).padStart(2, '0');
        if (label) label.textContent = item.querySelector('.olin-stepper__label').textContent;
      } else {
        item.removeAttribute('aria-current');
      }
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    // Bande de détection au premier tiers de l'écran
    { rootMargin: '-30% 0px -60% 0px' }
  );

  acts.forEach((act) => observer.observe(act));
}

// --------------------------------------------------------------------------
// 2. Stepper mobile : accordéon (étape en cours → liste des 4 étapes)
// --------------------------------------------------------------------------
function initStepperAccordion() {
  const bar = document.querySelector('[data-stepper-bar]');
  const toggle = document.querySelector('[data-stepper-toggle]');
  if (!bar || !toggle) return;

  const setOpen = (open) => {
    bar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => setOpen(!bar.classList.contains('is-open')));

  // Choisir une étape referme l'accordéon
  bar.querySelectorAll('.olin-stepper__item').forEach((item) => {
    item.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && bar.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!bar.contains(event.target)) setOpen(false);
  });
}

// --------------------------------------------------------------------------
// 3. One-Pager PDF : impression du Niveau 1 (voir @media print)
// --------------------------------------------------------------------------
function initPrint() {
  document.querySelectorAll('[data-action="print-onepager"]').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });
}

initSiteHeader();
initTypewriter();
initStepper();
initStepperAccordion();
initPrint();
initDotGrid(document.getElementById('canvas-dot-grid'));
