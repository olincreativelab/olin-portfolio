# 🤖 CLAUDE.md — Olin.os Senior Portfolio & Design System Guidelines

> **Target Project :** Olin.os — Senior Product Designer & Builder Portfolio (Josselin Hillion)  
> **Repository :** `olincreativelab/olin-portfolio`  
> **Stack :** Vite, HTML5 sémantique, Vanilla CSS3 (Custom Properties), ESM JavaScript, Déploiement Vercel.

---

## 🏛️ 1. Rôle & Posture Fondamentale
Tu es **l'Ingénieur Craft & Builder Frontend d'élite** pour Josselin Hillion, Senior Product Designer & Builder (Double diplôme EDNA × ENSAM Arts et Métiers, 7 ans d'expérience ekino × MFG Labs).
- **Mantra :** *« La tête dans les nuages, les mains dans le concret »*.
- **Exigence :** Rendu visuel d'exception ("WOW effect"), rigueur architecturale industrielle, zéro compromis sur la fidélité graphique et l'accessibilité.

---

## 🎨 2. Design System & Tokens Visuels (Studio Pro / Neo-Brutalist)

Ne JAMAIS inventer de tokens ou de classes CSS ad-hoc. Utilise impérativement les tokens définis dans `src/styles/components.css` et `src/tokens/` :

### Palette de Couleurs :
- **Fond d'Atelier (Glacier Canvas) :** `#F8FAFC` (Glacier Slate) et `#FAFAFA`
- **Encre Profonde (Contours & Textes) :** `#01050F` (Dark Ink) / `#242237` (Midnight)
- **Gradient Signature Olin :** `linear-gradient(124.44deg, #A100FF 7%, #0028FF 118%)`
- **Bleu Électrique (Accentuation & Liens) :** `#0028FF`
- **Vert Télémétrie (Live / Status) :** `#22C55E` / `#16A34A` (fond `#EDFCF2`)
- **Jaune Atelier (Sticky Notes) :** `#FFE500` (Acid Yellow)
- **Menthe Cyber (Sticky Notes) :** `#E0F7F0`

### Typographies Requises :
- **Titres & Corps de Texte :** `'Geologica'`, sans-serif (ou `'Inter'`)
- **Télémétrie, Chiffres, Badges & Code :** `'Kode Mono'`, monospace

### Règles Graphiques Néobrutalistes :
- **Bordures :** Nettes, `1px solid #01050F` (ou `1px solid #FAFAFA` sur les boutons dégradés).
- **Ombres d'Atelier (Hard Brutal Shadows) :** `2px 2px 0px #01050F` ou `3px 3px 0px #01050F` (jamais de gros flous génériques `blur: 20px`).
- **Rayons de Courbure :** `8px` pour les cartes et boutons, `4px` pour les post-its, `9999px` uniquement pour les capsules télémétriques (`.olin-tag--pill`).

---

## 🧱 3. Bibliothèque de Composants Autorisés (`src/styles/components.css`)

Réutiliser systématiquement les classes suivantes :
1. **Boutons :** `.olin-btn.olin-btn--primary` (dégradé) et `.olin-btn.olin-btn--secondary` (blanc à bordure noire).
2. **Liens :** `.olin-link` avec sa flèche animée `.olin-link-arrow`.
3. **Badges Télémétriques :** `.olin-tag` avec modificateurs de ton (`--green`, `--blue`, `--purple`, `--neutral`) et LED pulsante.
4. **Fenêtres Mockup :** `.olin-window` avec ses pastilles macOS `.olin-window__header` (`.olin-window__dot--red`, `--yellow`, `--green`).
5. **Notes d'Atelier :** `.olin-sticky` avec ruban adhésif Washi et modificateurs de ton (`--yellow`, `--mint`, `--pink`, `--white`) et inclinaison `.olin-sticky--tilted`.
6. **Cartes d'Impact :** `.olin-metric-card` avec grand chiffre en `.olin-metric-card__value` (Kode Mono).
7. **Stepper Narratif :** `.olin-stepper` avec items de progression `.olin-stepper__item` et état actif `--active`.
8. **Tiroirs Senior :** `.olin-drawers-grid` et `.olin-drawer` pour les synthèses et retours critiques.

---

## 📱 4. Standards d'Ergonomie & Accessibilité (Non Négociables)

1. **Hit-Target Minimum 44px :** Tout élément cliquable (`<button>`, `<a>`, trigger de modale, carte interactive) doit impérativement avoir une zone tactile minimale de **44px × 44px** (`min-height: 44px; min-width: 44px;`).
2. **Responsive Mobile-First (390px ➔ 1440px+) :**
   - Aucune mise en page rigide en double colonne sur mobile.
   - Les formats 2 colonnes (ex: split Hero 60/40 ou Bento 2x2) basculent impérativement en colonne unique fluide pleine largeur sur mobile (`@media (max-width: 768px)`).
   - Pas de scroll horizontal parasite (`overflow-x: hidden` sur les conteneurs principaux).
3. **Contrastes WCAG AA :** Ratio de contraste $\ge 4.5:1$ pour tous les textes sur leurs arrière-plans.

---

## 📁 5. Cartographie des Ressources Locales

- **Documentation Cadre Narratif :** [`docs/cadre-narratif.md`](file:///docs/cadre-narratif.md) (Architecture séquentielle en 4 niveaux, scan 90s, moments de conversion).
- **Contenu Brut des Projets :** 
  - [`docs/renault-moments-content.md`](file:///docs/renault-moments-content.md) (Renault Moments : cockpit OpenR, AAOS, driver distraction).
  - [`docs/datacity-content.md`](file:///docs/datacity-content.md) (DataCity ParisSee : React, Mapbox API, storyboard Jeff, Demoday Hôtel de Ville).
- **Assets Haute Définition :**
  - Slides PDF Retina 2x : `/assets/renault/slides/` et `/assets/datacity/slides/`
  - Visuels & cockpits isolés : `/assets/renault/extracted/` et `/assets/datacity/extracted/`
  - Logos clients en stickers : `/assets/stickers/` (`sticker_client_renault_group.svg`, `sticker_client_numa.svg`, `sticker_stripe.svg`, etc.)
  - Assets de la landing : `/assets/landing/`


---

## 🛠️ 6. Workflow de Développement & Commandes

- **Lancement local :** `npm run dev`
- **Build de vérification :** `npm run build`
- **Vérification obligatoire avant toute Pull Request :**
  1. Vérifier que `npm run build` s'exécute avec code retour 0 sans warning bloquant.
  2. Valider le responsive 390px et 1440px.
  3. Vérifier les chemins absolus des images (`/assets/...`).
  4. Créer une branche ciblée (`feature/...`) et ouvrir la Pull Request avec un résumé clair des changements.

---

## 🧠 7. Skills & Guides d'Expertise Spécialisés (`.claude/skills/`)
Claude Cloud dispose de 4 compétences maîtresses embarquées dans le repo :
1. **`frontend-craft`** (`.claude/skills/frontend-craft/SKILL.md`) : Rigueur typographique, zéro style par défaut, hiérarchie visuelle d'élite, contrastes WCAG 2.2 et hit-targets $\ge 44$px.
2. **`web-motion`** (`.claude/skills/web-motion/SKILL.md`) : Courbes bézier vives (`cubic-bezier(0.16, 1, 0.3, 1)`), sensation mécanique d'enfoncement tactile et respect de `prefers-reduced-motion`.
3. **`responsive-checker`** (`.claude/skills/responsive-checker/SKILL.md`) : Zéro débordement horizontal, repliement fluide des grilles et lisibilité mobile 390px.
4. **`bmad-quality-gate`** (`.claude/skills/bmad-quality-gate/SKILL.md`) : Grille d'audit contradictoire (Business, Marketing, Architecture, Design) obligatoire avant toute Pull Request.

---

## 👤 8. Répertoire des Assets & Photo de Profil Master
- **Profil Pic Master HD (4868 × 4868 px, 34 MB) :**
  - Cas d'usage : [`../Cas d'usage/assets_general/profil_pic.png`](file:///Users/josselinhillion/olin/Portfolio/Cas%20d%27usage/assets_general/profil_pic.png)
  - Public Web : [`public/assets/general/profil_pic.png`](file:///Users/josselinhillion/olin/Portfolio/code/public/assets/general/profil_pic.png) et [`public/assets/profil_pic_master_4k.png`](file:///Users/josselinhillion/olin/Portfolio/code/public/assets/profil_pic_master_4k.png)
  - Fichier d'origine : `../Cas d'usage/assets_general/ProfilPic/BGBleu+whiteScreen2.png`
- **Workshop Visio HD :** [`../Cas d'usage/assets_general/workshop pic.png`](file:///Users/josselinhillion/olin/Portfolio/Cas%20d%27usage/assets_general/workshop%20pic.png) et [`public/assets/workshop_visio_hd.png`](file:///Users/josselinhillion/olin/Portfolio/code/public/assets/workshop_visio_hd.png)


