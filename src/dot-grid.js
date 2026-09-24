/**
 * OLIN.OS — TRAME DE FOND INTERACTIVE (canvas dot grid)
 * Inspiration : codepen.io/brettsnaidero/pen/oqEYBo
 *
 * - Points #7A7AFF (repos) / #0028FF (influencés), pas 28px, rayon 1.3px.
 * - Répulsion douce dans un rayon de 120px, retour élastique amorti.
 * - mousemove passif, traité une seule fois par frame (throttle rAF).
 * - La boucle s'endort dès que tout est au repos : zéro calcul inutile.
 * - Désactivé si prefers-reduced-motion ou écran sans survol :
 *   le fond CSS statique (radial-gradient) prend le relais.
 */

const STEP = 28;
const DOT_RADIUS = 1.3;
const INFLUENCE = 120;
const PUSH = 12; // déplacement max (px) au centre de l'influence
const SPRING = 0.14;
const DAMPING = 0.76;
const EPSILON = 0.02;
const BASE_COLOR = 'rgba(122, 122, 255, 0.32)';
const ACTIVE_COLOR = 'rgba(0, 40, 255, 0.35)';
const LIVE_CLASS = 'dot-grid-live';

export function initDotGrid(canvas) {
  if (!canvas || !canvas.getContext) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  let teardown = null;

  const sync = () => {
    const shouldRun = !reducedMotion.matches && canHover.matches;
    if (shouldRun && !teardown) teardown = start(canvas);
    if (!shouldRun && teardown) {
      teardown();
      teardown = null;
    }
  };

  sync();
  reducedMotion.addEventListener('change', sync);
  canHover.addEventListener('change', sync);
}

function start(canvas) {
  const ctx = canvas.getContext('2d');
  const root = document.documentElement;

  let width = 0;
  let height = 0;
  let cols = 0;
  let rows = 0;
  let dx, dy, vx, vy;

  const mouse = { x: 0, y: 0, active: false };
  let frameId = 0;
  let resizeTimer = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // +2 colonnes/lignes pour couvrir le décalage de scroll
    cols = Math.ceil(width / STEP) + 2;
    rows = Math.ceil(height / STEP) + 2;
    const size = cols * rows;
    dx = new Float32Array(size);
    dy = new Float32Array(size);
    vx = new Float32Array(size);
    vy = new Float32Array(size);
    schedule();
  }

  // Grille alignée sur le document : elle défile avec la page
  function origin() {
    return {
      ox: -(window.scrollX % STEP) + STEP / 2,
      oy: -(window.scrollY % STEP) + STEP / 2,
    };
  }

  // Intègre un pas de ressort ; renvoie true tant qu'un point bouge encore
  function step(ox, oy) {
    let moving = false;
    for (let r = 0; r < rows; r++) {
      const baseY = oy + r * STEP;
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const baseX = ox + c * STEP;
        let tx = 0;
        let ty = 0;

        if (mouse.active) {
          const ddx = baseX - mouse.x;
          const ddy = baseY - mouse.y;
          const dist = Math.hypot(ddx, ddy);
          if (dist < INFLUENCE && dist > 0.001) {
            const t = 1 - dist / INFLUENCE;
            const force = t * t * PUSH;
            tx = (ddx / dist) * force;
            ty = (ddy / dist) * force;
          }
        }

        // Point au repos loin du curseur : rien à calculer
        if (tx === 0 && ty === 0 && dx[i] === 0 && dy[i] === 0) continue;

        vx[i] = (vx[i] + (tx - dx[i]) * SPRING) * DAMPING;
        vy[i] = (vy[i] + (ty - dy[i]) * SPRING) * DAMPING;
        dx[i] += vx[i];
        dy[i] += vy[i];

        const settled =
          Math.abs(tx - dx[i]) < EPSILON &&
          Math.abs(ty - dy[i]) < EPSILON &&
          Math.abs(vx[i]) < EPSILON &&
          Math.abs(vy[i]) < EPSILON;

        if (settled) {
          dx[i] = tx;
          dy[i] = ty;
          vx[i] = 0;
          vy[i] = 0;
        } else {
          moving = true;
        }
      }
    }
    return moving;
  }

  function draw(ox, oy) {
    ctx.clearRect(0, 0, width, height);

    const base = new Path2D();
    const active = new Path2D();

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        const x = ox + c * STEP + dx[i];
        const y = oy + r * STEP + dy[i];
        const offset = Math.abs(dx[i]) + Math.abs(dy[i]);

        if (offset > 0.4) {
          // Onde d'échelle : le point grossit avec son déplacement
          const radius = DOT_RADIUS + Math.min(offset / PUSH, 1) * 0.5;
          active.moveTo(x + radius, y);
          active.arc(x, y, radius, 0, Math.PI * 2);
        } else {
          base.moveTo(x + DOT_RADIUS, y);
          base.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        }
      }
    }

    ctx.fillStyle = BASE_COLOR;
    ctx.fill(base);
    ctx.fillStyle = ACTIVE_COLOR;
    ctx.fill(active);
  }

  function frame() {
    frameId = 0;
    const { ox, oy } = origin();
    const moving = step(ox, oy);
    draw(ox, oy);
    if (moving) schedule();
  }

  function schedule() {
    if (!frameId) frameId = requestAnimationFrame(frame);
  }

  // Le listener ne fait que mémoriser la position : le calcul attend la frame
  function onPointerMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
    schedule();
  }

  function onPointerOut(event) {
    if (event.relatedTarget) return;
    mouse.active = false;
    schedule();
  }

  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }

  root.classList.add(LIVE_CLASS);
  resize();
  window.addEventListener('mousemove', onPointerMove, { passive: true });
  document.addEventListener('mouseout', onPointerOut, { passive: true });
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    cancelAnimationFrame(frameId);
    frameId = 0;
    clearTimeout(resizeTimer);
    window.removeEventListener('mousemove', onPointerMove);
    document.removeEventListener('mouseout', onPointerOut);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', onResize);
    ctx.clearRect(0, 0, width, height);
    root.classList.remove(LIVE_CLASS);
  };
}
