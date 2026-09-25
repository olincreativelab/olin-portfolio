/**
 * OLIN.OS — HEADER TRANSVERSE (.olin-header)
 * Menu (bouton « Menu workshop ») et apparition du logo sur la landing.
 */

function initMenu(header) {
  const toggle = header.querySelector('[data-menu-toggle]');
  const panel = header.querySelector('[data-menu-panel]');
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  };

  toggle.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
}

// Landing : le logo apparaît dans la nav dès que la mascotte du hero
// (le même logo, à côté de la promesse) sort de l'écran.
function initBrandReveal(header) {
  if (!header.hasAttribute('data-brand-reveal')) return;
  const mascot = document.querySelector('[data-brand-anchor]');
  if (!mascot || !('IntersectionObserver' in window)) {
    header.classList.add('is-brand-visible');
    return;
  }
  const headerHeight = header.offsetHeight;
  new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-brand-visible', !entry.isIntersecting);
  }, { rootMargin: `-${headerHeight}px 0px 0px 0px` }).observe(mascot);
}

export function initSiteHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  initMenu(header);
  initBrandReveal(header);
}
