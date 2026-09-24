/**
 * OLIN.OS — CASE STUDY (Progressive Disclosure)
 * Stepper actif au scroll (tiroirs : <details> natifs, fermés par défaut),
 * export One-Pager via impression, trame de fond interactive, titre tapé au chargement.
 */

import { initDotGrid } from './dot-grid.js';

// --------------------------------------------------------------------------
// 0. Titre machine à écrire (préparé par le script inline du <head>)
// --------------------------------------------------------------------------
function initTypewriter() {
  const root = document.documentElement;
  const target = document.querySelector('[data-typewriter]');
  if (!target || !root.classList.contains('js-typing')) return;

  const title = target.closest('h1');
  const caret = title.querySelector('.cs-caret');
  const chars = [...target.textContent].map((char) => {
    const span = document.createElement('span');
    span.className = 'cs-type-char';
    span.textContent = char;
    return span;
  });

  target.replaceChildren(...chars);
  title.classList.add('is-typing');
  root.classList.remove('js-typing');

  let index = 0;
  const typeNext = () => {
    const span = chars[index];
    span.classList.add('is-typed');
    span.after(caret);
    index += 1;
    if (index < chars.length) {
      // Rythme légèrement irrégulier, pause plus longue sur l'espace
      const delay = chars[index - 1].textContent === ' ' ? 140 : 55 + Math.random() * 45;
      setTimeout(typeNext, delay);
    } else {
      target.after(caret);
      title.classList.remove('is-typing');
    }
  };

  setTimeout(typeNext, 350);
}

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

  const setActive = (id) => {
    items.forEach((item, key) => {
      const isActive = key === id;
      item.classList.toggle('olin-stepper__item--active', isActive);
      if (isActive) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
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
// 3. One-Pager PDF : impression du Niveau 1 (voir @media print)
// --------------------------------------------------------------------------
function initPrint() {
  document.querySelectorAll('[data-action="print-onepager"]').forEach((btn) => {
    btn.addEventListener('click', () => window.print());
  });
}

initTypewriter();
initStepper();
initPrint();
initDotGrid(document.getElementById('canvas-dot-grid'));
