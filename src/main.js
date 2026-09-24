/**
 * OLIN PORTFOLIO - JOSSELIN HILLION
 * Interactive logic for Case Study Modals, Clipboard actions & Navigation
 */

// Data for Case Studies (STAR Methodology)
const CASE_STUDIES = {
  excibat: {
    sector: "BTP & LOGICIEL MÉTIER",
    role: "Senior Product Designer & Builder",
    title: "Excibat Platform : Numérisation du pilotage de chantiers BTP",
    subtitle: "Refonte ergonomique d'un ERP de chantiers complexe pour artisans et conducteurs de travaux.",
    metrics: [
      { val: "+35%", lbl: "Gain d'efficacité terrain" },
      { val: "-60%", lbl: "Erreurs de saisie et devis" },
      { val: "10 000+", lbl: "Chantiers gérés en continu" }
    ],
    star: [
      {
        tag: "SITUATION & CONTEXTE",
        title: "Un secteur à forte friction numérique",
        desc: "Les conducteurs de travaux et artisans jonglaient entre des tableurs Excel surchargés, des devis papier et des outils informatiques désuets. Résultat : une perte de traçabilité des matériaux, des retards de livraison et une charge mentale critique sur les chantiers."
      },
      {
        tag: "MISSION & OBJECTIFS",
        title: "Repenser l'expérience utilisateur de A à Z",
        desc: "Concevoir une interface web et mobile capable de fonctionner en conditions de chantier dégradées (faible réseau, manipulation avec gants ou écran en plein soleil), tout en absorbant des nomenclatures de plusieurs milliers d'articles du bâtiment."
      },
      {
        tag: "APPROCHE & EXÉCUTION",
        title: "Immersion terrain, prototypage itératif & Design System",
        desc: "• 15 jours d'immersion directe sur les chantiers en Loire-Atlantique pour observer les gestes réels.\n• Structuration d'une architecture modulaire à haute densité avec contrastes renforcés (conformité WCAG AAA en luminosité extérieure).\n• Modélisation de flux d'édition de devis avec calculs en temps réel et synchronisation locale (offline-first).\n• Intégration d'un Design System complet sur Figma synchronisé avec les composants React de l'équipe de dev."
      },
      {
        tag: "RÉSULTATS & IMPACT",
        title: "Adoption massive et baisse drastique du temps d'administration",
        desc: "Réduction de 60% du temps nécessaire pour générer et faire signer un devis d'avenant sur site. Augmentation du taux de rétention client à 94% dès les trois premiers mois de déploiement."
      }
    ]
  },
  renault: {
    sector: "AUTOMOBILE & EXPÉRIENCE CLIENT",
    role: "Senior UI/UX Designer",
    title: "Renault Moments : L'outil d'immersion commerciale en concession",
    subtitle: "Application tablette connectée pour transformer la visite en concession en expérience personnalisée.",
    metrics: [
      { val: "100%", lbl: "Déploiement réseau France" },
      { val: "< 2s", lbl: "Temps de chargement 3D" },
      { val: "+24%", lbl: "Taux de signature immédiat" }
    ],
    star: [
      {
        tag: "SITUATION & CONTEXTE",
        title: "Désynchronisation entre parcours web et concession",
        desc: "Les clients arrivaient en showroom avec des configurations réalisées chez eux, mais les vendeurs devaient ressaisir chaque élément dans un terminal lourd et opaque, créant un moment d'attente gênant."
      },
      {
        tag: "MISSION & OBJECTIFS",
        title: "Fluidifier l'échange et valoriser le produit",
        desc: "Créer une application iPad intuitive permettant au conseiller et au client de regarder le même écran, de modifier les teintes, finitions et options en temps réel, et d'obtenir immédiatement le plan de financement adapté."
      },
      {
        tag: "APPROCHE & EXÉCUTION",
        title: "Co-conception avec les concessions et design d'interaction tactile",
        desc: "• Ateliers d'alignement avec les équipes marketing Renault et les conseillers de vente en showroom.\n• Mise au point d'une navigation tactile à base de carrousels fluides et de micro-animations pour rendre la sélection vivante.\n• Optimisation extrême des assets graphiques pour garantir une réactivité immédiate sous tablette.\n• Spécifications ultra-précises pour l'intégration mobile iOS."
      },
      {
        tag: "RÉSULTATS & IMPACT",
        title: "Succès national et satisfaction client en hausse",
        desc: "Généralisation de l'outil à l'ensemble du réseau des concessions de France. Diminution de 40% de la durée administrative de la vente au profit du conseil et de l'écoute du client."
      }
    ]
  },
  datacity: {
    sector: "SMART CITY & DATA VIZ",
    role: "Product Designer & Builder",
    title: "DataCity : Plateforme cartographique de supervision territoriale",
    subtitle: "Visualisation temps réel des flux de transports et de la consommation énergétique pour métropoles.",
    metrics: [
      { val: "1M+", lbl: "Événements traités par jour" },
      { val: "Temps réel", lbl: "Fréquence de rafraîchissement" },
      { val: "Multi", lbl: "Collectivités interconnectées" }
    ],
    star: [
      {
        tag: "SITUATION & CONTEXTE",
        title: "L'avalanche de données des capteurs urbains",
        desc: "Les métropoles collectent des millions de points de données chaque minute (capteurs de pollution, comptage de vélos, consommation d'éclairage public), mais les directions techniques manquaient d'un cockpit unifié pour analyser les corrélations."
      },
      {
        tag: "MISSION & OBJECTIFS",
        title: "Rendre intelligible la complexité spatio-temporelle",
        desc: "Concevoir un outil SIG (Système d'Information Géographique) nouvelle génération, combinant carte interactive vectorielle, chronologie dynamique et alertes prédictives."
      },
      {
        tag: "APPROCHE & EXÉCUTION",
        title: "Design de données, shaders WebGL et hiérarchie visuelle stricte",
        desc: "• Création d'une palette chromatique haute lisibilité sur fond de carte désaturé pour faire ressortir les anomalies sans fatigue oculaire.\n• Filtrage multi-critères instantané par polygones géographiques et plages horaires.\n• Définition de jauges, graphiques d'évolution et infobulles contextuelles ergonomiques."
      },
      {
        tag: "RÉSULTATS & IMPACT",
        title: "Prise de décision accélérée lors des pics d'incidents",
        desc: "Outil adopté par plusieurs agglomérations pour coordonner la régulation du trafic et détecter les surconsommations électriques en quelques secondes au lieu de plusieurs heures d'audit manuel."
      }
    ]
  },
  royalcanin: {
    sector: "PHYGITAL RETAIL & KIOSK UX",
    role: "Lead Product Designer & UX Researcher",
    title: "Royal Canin : Borne Phygitale Retail & Prescription Alimentaire",
    subtitle: "Digitaliser la recommandation nutritionnelle vétérinaire au point de vente physique (animaleries).",
    metrics: [
      { val: "< 90s", lbl: "Temps de diagnostic en rayon" },
      { val: "200+", lbl: "Races & pathologies couvertes" },
      { val: "100%", lbl: "Alignement marque / distributeurs" }
    ],
    star: [
      {
        tag: "SITUATION & CONTEXTE",
        title: "Un linéaire dense et anxiogène pour le propriétaire",
        desc: "Plus de 80 références au packaging scientifique similaire dans les rayons d'animalerie. Les clients abandonnaient souvent leur panier par doute ou absence de vendeur conseil."
      },
      {
        tag: "MISSION & OBJECTIFS",
        title: "Guider sans désintermédier l'animalerie partenaire",
        desc: "Concevoir un dispositif tactile en libre-service capable d'orienter le client vers le sac adéquat en moins de 90 secondes, tout en préservant le passage en caisse du magasin."
      },
      {
        tag: "APPROCHE & EXÉCUTION",
        title: "Immersion retail, Design Sprints 5j & prototypage meuble métal",
        desc: "• Immersion in-situ chez Jardiland et Truffaut pour cartographier les freins et postures de vente.\n• Design Sprints 5 jours pour modéliser le moteur de recommandation étape par étape.\n• Cadrage hardware et ergonomie tactile (hauteur PMR, contrastes éclairage néon retail)."
      },
      {
        tag: "RÉSULTATS & IMPACT",
        title: "Dossier de delivery industriel et adoption validée",
        desc: "Dossier de spécifications UX complet et prototypes interactifs validés avec les équipes merchandising et techniques pour le déploiement du réseau."
      }
    ]
  }
};

// DOM Elements
const modalBackdrop = document.getElementById("case-study-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalContent = document.getElementById("modal-content-container");
const toast = document.getElementById("toast-notice");
const emailBox = document.getElementById("email-contact-box");

// Open Modal Function
function openModal(projectId) {
  const data = CASE_STUDIES[projectId];
  if (!data) return;

  modalContent.innerHTML = `
    <div style="margin-bottom: 20px;">
      <span class="project-sector" style="margin-bottom: 12px; display: inline-block;">${data.sector}</span>
      <h2 style="font-size: 26px; font-weight: 900; color: var(--color-dark-ink); margin-bottom: 8px; line-height: 1.25;">${data.title}</h2>
      <p style="font-size: 15px; color: var(--color-muted-blueprint); margin-bottom: 20px;">${data.subtitle}</p>
    </div>

    <div class="project-metrics" style="margin-bottom: 30px;">
      ${data.metrics.map(m => `
        <div class="metric-box">
          <span class="metric-val">${m.val}</span>
          <span class="metric-lbl">${m.lbl}</span>
        </div>
      `).join('')}
    </div>

    <div class="star-section">
      ${data.star.map(step => `
        <div class="star-step">
          <div class="star-step-tag">${step.tag}</div>
          <div class="star-step-title">${step.title}</div>
          <div class="star-step-desc">${step.desc.replace(/\\n/g, '<br />')}</div>
        </div>
      `).join('')}
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Close Modal Function
function closeModal() {
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

// Event Listeners for Project Buttons
document.querySelectorAll(".project-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const projectId = btn.getAttribute("data-project");
    openModal(projectId);
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeModal);
}

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });
}

// Live OS Clock (Montaigu / Europe/Paris CET time)
function updateOsClock() {
  const clockEl = document.getElementById("os-live-clock");
  if (!clockEl) return;
  const now = new Date();
  const timeString = now.toLocaleTimeString("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  clockEl.textContent = `Montaigu ${timeString}`;
}
setInterval(updateOsClock, 1000);
updateOsClock();

// Finder Master-Detail Interaction (Side-panel project switcher)
function initFinderInteraction() {
  const folderItems = document.querySelectorAll(".finder-folder-item");
  const projectCards = document.querySelectorAll(".finder-project-card");

  folderItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-finder-target");
      if (!targetId) return;

      // Update active sidebar item
      folderItems.forEach(f => f.classList.remove("active"));
      item.classList.add("active");

      // Update active project stage card with smooth transition
      projectCards.forEach(card => {
        if (card.getAttribute("data-finder-id") === targetId) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    });
  });
}
initFinderInteraction();

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalBackdrop && modalBackdrop.classList.contains("open")) {
    closeModal();
  }
});

// Email Copy Action
if (emailBox) {
  emailBox.addEventListener("click", () => {
    const email = "josselin@olin.design";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Adresse josselin@olin.design copiée dans le presse-papiers !");
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${email}`;
    });
  });
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* --------------------------------------------------------------------------
   FACÉTIEUX INTERACTIONS & EASTER EGGS (Mascotte & FigJam Stickers)
   -------------------------------------------------------------------------- */
const mascotImg = document.getElementById("mascot-img");
const mascotBubble = document.getElementById("mascot-bubble");

const MASCOT_QUIPS = [
  "Promis, ici pas de lorem ipsum ! 👀",
  "Mode Builder activé : je code aussi ce que je dessine ⚡️",
  "Tu cliques sur une fenêtre qui te fait un clin d'œil... j'adore ! 😄",
  "La tête dans les nuages, les mains dans le code ! ☁️",
  "Projet BTP ou IA complexe ? On en parle autour d'un café ☕️",
  "10 ans d'UI/UX, 0 composant inutile 🎯"
];

let quipIndex = 0;

function triggerMascotReaction() {
  quipIndex = (quipIndex + 1) % MASCOT_QUIPS.length;
  
  if (mascotBubble) {
    mascotBubble.style.transform = "rotate(0deg) scale(0.9)";
    setTimeout(() => {
      mascotBubble.textContent = MASCOT_QUIPS[quipIndex];
      mascotBubble.style.transform = "rotate(4deg) scale(1.08)";
      setTimeout(() => {
        mascotBubble.style.transform = "rotate(4deg) scale(1)";
      }, 200);
    }, 150);
  }

  if (mascotImg) {
    mascotImg.style.transform = "rotate(12deg) scale(1.18)";
    setTimeout(() => {
      mascotImg.style.transform = "rotate(-8deg) scale(1.05)";
      setTimeout(() => {
        mascotImg.style.transform = "";
      }, 200);
    }, 200);
  }
}

if (mascotImg) {
  mascotImg.addEventListener("click", triggerMascotReaction);
}
if (mascotBubble) {
  mascotBubble.addEventListener("click", triggerMascotReaction);
}

// Interactive bounce on FigJam Stickers
document.querySelectorAll(".figjam-sticker").forEach(sticker => {
  sticker.addEventListener("click", () => {
    sticker.style.transition = "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)";
    sticker.style.transform = "scale(1.2) rotate(6deg)";
    setTimeout(() => {
      sticker.style.transform = "scale(0.95) rotate(-3deg)";
      setTimeout(() => {
        sticker.style.transform = "";
      }, 150);
    }, 150);
  });
});

/* --------------------------------------------------------------------------
   SIGNATURE INTERACTION: MODE SWITCHER (Design ⟷ Builder)
   -------------------------------------------------------------------------- */
const btnDesign = document.getElementById("btn-mode-design");
const btnBuilder = document.getElementById("btn-mode-builder");

function setViewMode(mode) {
  document.body.setAttribute("data-mode", mode);
  if (btnBuilder && btnDesign) {
    if (mode === "builder") {
      btnBuilder.classList.add("active");
      btnDesign.classList.remove("active");
      showToast("⚡️ Mode Builder activé : inspection tech & spécifications");
    } else {
      btnDesign.classList.add("active");
      btnBuilder.classList.remove("active");
      showToast("🎨 Mode Design activé : vue poétique & stickers FigJam");
    }
  }
  try {
    localStorage.setItem("olin-view-mode", mode);
  } catch (_) {}
}

if (btnDesign && btnBuilder) {
  btnDesign.addEventListener("click", () => setViewMode("design"));
  btnBuilder.addEventListener("click", () => setViewMode("builder"));
  
  // URL Param override ?mode=builder or ?mode=design
  const urlParams = new URLSearchParams(window.location.search);
  const paramMode = urlParams.get("mode");
  if (paramMode === "builder" || paramMode === "design") {
    setViewMode(paramMode);
  } else {
    try {
      const saved = localStorage.getItem("olin-view-mode");
      if (saved) setViewMode(saved);
    } catch (_) {}
  }
}


/* --------------------------------------------------------------------------
   CANVAS MINIMAP & SPATIAL SCROLL TRACKING
   -------------------------------------------------------------------------- */
const minimapNodes = document.querySelectorAll(".minimap-node");
const minimapPct = document.getElementById("minimap-pct");
const sectionIds = ["hero", "bureau", "atelier", "profil", "services", "projets", "contact"];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

function updateMinimap() {
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = Math.min(100, Math.max(0, Math.round((scrollY / (docHeight || 1)) * 100)));
  
  if (minimapPct) {
    minimapPct.textContent = `${pct}%`;
  }

  let activeId = "bureau";
  sections.forEach(sec => {
    if (!sec) return;
    const rect = sec.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.45) {
      activeId = sec.id;
    }
  });

  minimapNodes.forEach(node => {
    if (node.getAttribute("data-target") === activeId) {
      node.classList.add("active");
    } else {
      node.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateMinimap, { passive: true });
updateMinimap();

minimapNodes.forEach(node => {
  node.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = node.getAttribute("data-target");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* --------------------------------------------------------------------------
   DIRECTION CANVAS SCROLL PERCENTAGE LISTENER
   -------------------------------------------------------------------------- */
const canvasScrollPct = document.getElementById("canvas-scroll-pct");
window.addEventListener("scroll", () => {
  if (canvasScrollPct) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const pct = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((currentScroll / maxScroll) * 100))) : 0;
    canvasScrollPct.textContent = `${pct}%`;
  }
  if (window.scrollY > 480) {
    document.body.classList.add("scrolled-past-hero");
  } else {
    document.body.classList.remove("scrolled-past-hero");
  }
}, { passive: true });

/* --------------------------------------------------------------------------
   PARALLAX DRIFT ON SIDE CARDS (Smooth 60fps)
   -------------------------------------------------------------------------- */
const parallaxCards = document.querySelectorAll(".parallax-card");
let parallaxTicking = false;

window.addEventListener("scroll", () => {
  if (!parallaxTicking && window.innerWidth > 1350) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      parallaxCards.forEach((card, idx) => {
        const factor = idx % 2 === 0 ? 0.05 : -0.04;
        card.style.transform = `translateY(${scrollY * factor}px) rotate(${idx % 2 === 0 ? -3 : 2}deg)`;
      });
      parallaxTicking = false;
    });
    parallaxTicking = true;
  }
}, { passive: true });
