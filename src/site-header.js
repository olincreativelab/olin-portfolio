/**
 * OLIN.OS — HEADER TRANSVERSE (.olin-header)
 * Menu mobile (bouton « Menu workshop ») et mini-player Brain.fm.
 * Le SDK YouTube n'est chargé qu'au premier clic sur Play : aucune requête
 * tierce au chargement de la page.
 */

import { BrainFmPlayerController } from './brainfm-youtube-player.js';

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

function initLazyPlayers(header) {
  header.querySelectorAll('[data-brainfm-player]').forEach((element) => {
    const play = element.querySelector('.olin-brainfm-player__btn-play');
    if (!play) return;
    // Le contrôleur (et le SDK YouTube) naît au premier clic, puis gère seul
    // les clics suivants.
    play.addEventListener(
      'click',
      () => {
        const controller = new BrainFmPlayerController({ element });
        controller.toggle();
      },
      { once: true }
    );
  });
}

export function initSiteHeader() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  initMenu(header);
  initLazyPlayers(header);
}
