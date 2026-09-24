/**
 * OLIN.OS — HEADER TRANSVERSE (.olin-header)
 * Menu mobile (bouton « Menu workshop »).
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

export function initSiteHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  initMenu(header);
}
