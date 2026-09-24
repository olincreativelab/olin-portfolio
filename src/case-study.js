/**
 * OLIN.OS — CASE STUDY (Progressive Disclosure)
 * Stepper actif au scroll, tiroirs Bento (desktop) / accordéons (mobile),
 * export One-Pager via impression.
 */

const MOBILE_QUERY = window.matchMedia('(max-width: 768px)');

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
// 2. Tiroirs senior : Bento 2x2 ouvert sur desktop, accordéons repliés sur mobile
// --------------------------------------------------------------------------
function syncDrawers() {
  document.querySelectorAll('[data-drawer]').forEach((drawer) => {
    drawer.open = !MOBILE_QUERY.matches;
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

initStepper();
syncDrawers();
MOBILE_QUERY.addEventListener('change', syncDrawers);
initPrint();
