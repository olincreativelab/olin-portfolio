/**
 * OLIN.OS — EFFET MACHINE À ÉCRIRE
 * Préparé par un script inline du <head> qui pose `html.js-typing` (sauf
 * prefers-reduced-motion) pour masquer le texte avant la frappe, sans flash.
 *
 * Balisage : <span data-typewriter>Texte</span><span data-typewriter-caret>_</span>
 * Le texte garde sa place (visibility) et le curseur sa largeur : la mise en
 * page ne bouge jamais pendant la frappe.
 */

export function initTypewriter({ startDelay = 350 } = {}) {
  const root = document.documentElement;
  const target = document.querySelector('[data-typewriter]');
  if (!target || !root.classList.contains('js-typing')) return;

  const host = target.parentElement;
  const caret = host.querySelector('[data-typewriter-caret]');
  const chars = [...target.textContent].map((char) => {
    const span = document.createElement('span');
    span.className = 'olin-type-char';
    span.textContent = char;
    return span;
  });

  target.replaceChildren(...chars);
  host.classList.add('is-typing');
  root.classList.remove('js-typing');

  let index = 0;
  const typeNext = () => {
    const span = chars[index];
    span.classList.add('is-typed');
    if (caret) span.after(caret);
    index += 1;
    if (index < chars.length) {
      // Rythme légèrement irrégulier, pause plus longue sur l'espace
      const delay = chars[index - 1].textContent === ' ' ? 140 : 55 + Math.random() * 45;
      setTimeout(typeNext, delay);
    } else {
      if (caret) target.after(caret);
      host.classList.remove('is-typing');
    }
  };

  setTimeout(typeNext, startDelay);
}
