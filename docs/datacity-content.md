# 🗺️ Architecture de la Page Projet : DataCity ParisSee (Smart City & Data)

> **Rôle du Document :** Gabarit de référence d'une page projet « Deep Dive » pour un **Senior Product Designer & Builder**.  
> **Objectif :** Présenter les textes définitifs, les visuels réels extraits du PDF, les composants d'interface et les arguments clés pour captiver un Lead Designer (Peter De Meurichy) ou un Head of Product.

---

## 🧭 Le Principe de Composition : L'Architecture Séquentielle à Double Vitesse (Progressive Disclosure)

Pour garantir une consommation immédiate sur mobile comme sur desktop sans saturation cognitive, la page abandonne le parallélisme rigide en 2 colonnes pour adopter une **narration séquentielle progressive en 4 niveaux** rythmée par **4 moments-clés de conversion (CTAs)** :

```text
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 1 : L'EXECUTIVE CARD (Le One-Pager Synthétique — Scan 90s)             │
│ • Desktop : Split 60/40 compact (Métadonnées + Matrice 3x3 ↔ Mockup Laptop)   │
│ • Mobile : Visuel Laptop en tête + Cartouche & 3 puces swipeables             │
│ 🎯 MOMENT CTA 1 : [⚡ Scanner la synthèse ↓] • [📥 Télécharger One-Pager PDF]   │
│ 🎯 MOMENT CTA 2 (Fin de Scan) : [Discuter du projet ↗] ou [Creuser la méthode ↓│
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 2 : LE STEPPER DE PROGRESSION (L'Aiguillage Narratif)                   │
│ [01. Tension Urbaine] ➔ [02. Discovery In Situ] ➔ [03. Cadrage MVP] ➔ [04. Impact]│
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 3 : LE DEEP DIVE EN FORMAT PLEINE LARGEUR (Modular Storyboard)          │
│ • Chaque grand acte prend tout l'étage pour donner 100% d'espace aux visuels   │
│ • Storyboards, cartes Mapbox, UI Kit et photos Hôtel de Ville plein format     │
│ 🎯 MOMENT CTA 3 : [Examiner le repo dev ↗] • [Voir la démo Mapbox]             │
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 4 : LES 4 TIROIRS DE MAÎTRISE SENIOR (Arbitrages & Rétrospective)       │
│ • Desktop : Grille Bento 2x2 compacte                                          │
│ • Mobile : 4 tiroirs repliés en accordéon (Tap to Expand)                      │
│ 🎯 MOMENT CTA 4 : BANNIÈRE DE CONVERSION FINALE (Booking direct 15 min)         │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 📐 Wireframe Responsive de la Page

### Vue Desktop (1440px+)
```text
┌────────────────────────────────────────────────────────────────────────────────┐
│  HEADER DOCK : [Logo Olin] [Status: ● Disponible] [Projet 03/03] [On discute ↗]│
├────────────────────────────────────────────────────────────────────────────────┤
│                                                                                │
│  [NIVEAU 1 : EXECUTIVE CARD (Scan 90s)]                                       │
│  ┌──────────────────────────────────────┬───────────────────────────────────┐  │
│  │ GAUCHE (60%) : Posture & Métriques   │ DROITE (40%) : Mockup Mac + Carte │  │
│  │ • Titre : DATACITY PARISSEE          │ • Fenêtre macOS .olin-window      │  │
│  │ • Rôle : Lead UX/UI Designer Builder │ • Laptop posé sur la carte Paris  │  │
│  │ • Badges : [Ville de Paris] [Mastercard] [Numa] [APUR]                   │  │
│  │ • 3 Métriques : [En prod parisinfo] [4 mois sprint] [Hôtel de Ville]     │  │
│  │ 🎯 CTA 1 : [Discuter du projet ↗]    │ 🎯 CTA 2 : [Explorer 4 étapes ↓]  │  │
│  └──────────────────────────────────────┴───────────────────────────────────┘  │
│                                                                                │
│  [NIVEAU 2 : STEPPER 4 ACTES]                                                 │
│  ┌─────────────────┬─────────────────┬─────────────────┬──────────────────┐    │
│  │ 01. TENSION     │ 02. DISCOVERY   │ 03. CADRAGE MVP │ 04. IMPACT & DEMO│    │
│  │ Flux touristique│ 17 vignettes    │ Arbitrages Lean │ Hôtel de Ville   │    │
│  └─────────────────┴─────────────────┴─────────────────┴──────────────────┘    │
│                                                                                │
│  [NIVEAU 3 : DEEP DIVE PLEINE LARGEUR]                                        │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │ ACTE 01 : LE DÉFI DU TOURISME DE MASSE (Plein Étage)                   │    │
│  │ • Problème : 85% des 30M de touristes sur 5% du territoire             │    │
│  │ • Preuve : Schéma collaboration pluridisciplinaire (/assets/datacity)  │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │ ACTE 02 : LA DÉCOUVERTE TERRAIN & STORYBOARD (Plein Étage)             │    │
│  │ • Insight : « Donner l'autorisation morale de flâner hors sentiers »   │    │
│  │ • Preuve : Storyboard 17 étapes de Jeff + note d'atelier jaune inclinée│    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │ ACTE 03 : L'ARBITRAGE DU MVP & CRAFT BUILDER (Plein Étage)             │    │
│  │ • Décision Lean : Suppression du routing rue par rue ➔ Quartiers-bulles│    │
│  │ • Preuve : UI Kit Paris for You + Code React + API Mapbox              │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │ ACTE 04 : TESTS IN SITU & SCÈNE HÔTEL DE VILLE (Plein Étage)           │    │
│  │ • Protocole : 9 testeurs américains, 2h in situ dans les rues de Paris │    │
│  │ • Consécration : Demoday sous les lustres dorés de l'Hôtel de Ville    │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
│                                                                                │
│  [NIVEAU 4 : 4 TIROIRS SENIOR - BENTO 2X2]                                    │
│  ┌──────────────────────────────────────┬───────────────────────────────────┐  │
│  │ [Tiroir 1 : Arbitrages & Compromis]  │ [Tiroir 2 : Rétrospective Senior] │  │
│  ├──────────────────────────────────────┼───────────────────────────────────┤  │
│  │ [Tiroir 3 : Composants réutilisés]   │ [Tiroir 4 : Questions entretien]  │  │
│  └──────────────────────────────────────┴───────────────────────────────────┘  │
│                                                                                │
│  🎯 MOMENT 4 : BANNIÈRE FINALE DE CONVERSION                                   │
│  ┌────────────────────────────────────────────────────────────────────────┐    │
│  │ « Prêt à transformer des flux de données complexes en interfaces ? »   │    │
│  │ [Planifier un call (15 min) ↗]       [Cas suivant : Renault Moments →] │    │
│  └────────────────────────────────────────────────────────────────────────┘    │
└────────────────────────────────────────────────────────────────────────────────┘
```

### Vue Mobile (390px)
```text
┌──────────────────────────────────────┐
│ [Logo]                [Menu Burger ≡]│
├──────────────────────────────────────┤
│ 🚗 DATACITY PARISSEE                 │
│ Lead UX/UI Designer & Builder        │
│                                      │
│ ┌──────────────────────────────────┐ │
│ │ Visuel Laptop & Carte Paris      │ │
│ │ (.olin-window responsive)        │ │
│ └──────────────────────────────────┘ │
│                                      │
│ 3 CAPSULES D'IMPACT (Swipe) :        │
│ [🟢 En prod] [⏱️ 4 mois] [🏛️ Ville] │
│                                      │
│ 🎯 CTA 1 : [Discuter du projet ↗]    │
│ 🎯 CTA 2 : [Découvrir les 4 étapes ↓]│
├──────────────────────────────────────┤
│ STEPPER VERTICAL REPLIABLE           │
│ [Étape 01 : Tension touristique]   ▼ │
├──────────────────────────────────────┤
│ 🏛️ ACTE 01 : LA TENSION ÉCONOMIQUE   │
│ 85% des visiteurs sur 5% du sol      │
│ [Schéma 3 équipes pleine largeur]    │
├──────────────────────────────────────┤
│ 🔍 ACTE 02 : STORYBOARD DE JEFF      │
│ « L'autorisation de flâner »         │
│ [Note jaune d'atelier inclinée]      │
│ [Vignettes dessinées pleine largeur] │
├──────────────────────────────────────┤
│ ✂️ ACTE 03 : CADRAGE DU MVP          │
│ De l'algorithme abstrait à React     │
│ [Comparatif Wireframe vs UI Kit]     │
├──────────────────────────────────────┤
│ 🏆 ACTE 04 : DEMODAY HÔTEL DE VILLE  │
│ 9 américains, 2h in situ dans Paris  │
│ [Photos scène Hôtel de Ville]        │
├──────────────────────────────────────┤
│ 4 TIROIRS EN ACCORDÉON (Tap) :       │
│ [▶ 1. Arbitrages & Compromis Lean]   │
│ [▶ 2. Rétrospective : ce que j'ai vu]│
│ [▶ 3. Composants Design System]      │
│ [▶ 4. Questions d'entretien Peter]   │
├──────────────────────────────────────┤
│ 🎯 CONVERSION FINALE (Collée au bas) │
│ [Réserver un appel (15 min) ↗]       │
│ [Cas suivant : Renault Moments ➔]    │
└──────────────────────────────────────┘
```

---

## 🎬 Déroulé Détaillé des 4 Niveaux & Contenu Réel

### 🏛️ NIVEAU 1 : L'Executive Card (Scan 90s)

#### Données Stratégiques :
* **Titre :** `DataCity — ParisSee : La Data au Service de la Ville Vivante`
* **Sous-titre :** *Comment un algorithme de recommandation prédictif et un MVP cartographique ont réconcilié flux touristiques et commerce local.*
* **Cartouche Méta (`Kode Mono`) :**
  ```text
  Client / Cadre   : Ville de Paris × Numa × Mastercard × APUR
  Rôle             : Lead UX/UI Designer & Builder (ekino x MFG Labs)
  Équipe           : 1 PM, 2 Data Scientists, 2 Devs Front-End React
  Durée du Sprint  : 4 mois fermes (de l'idéation au Demoday)
  Stack Technique  : React, Mapbox API, Navigator Geo API, Open Data Paris
  ```
* **Capsules d'Impact :**
  * `🟢 Déployé sur parisinfo.com (Office du Tourisme)`
  * `📍 2h de test in situ par utilisateur dans Paris`
  * `🏛️ Présenté à l'Hôtel de Ville de Paris`
* **Visuel en Regard :** L'écran du MacBook posé sur la carte vectorielle de Paris dans un conteneur `.olin-window` avec ses pastilles macOS, illustré par `/assets/datacity_hero_slide.png`.
* **Stickers Partenaires :** `/assets/stickers/sticker_client_numa.svg`, `/assets/stickers/sticker_stripe.svg` (ou Mastercard).

---

### ⚡ NIVEAU 2 : Le Stepper de Progression

1. **`01. Tension Urbaine`** : 30M de visiteurs concentrés sur 5% du territoire.
2. **`02. Discovery In Situ`** : 17 vignettes de storyboard et entretiens terrain (Jeff).
3. **`03. Cadrage du MVP`** : Élagage Lean UX, UI Kit Paris for You & code React Mapbox.
4. **`04. Validation & Scène`** : 9 tests in situ dans la rue & présentation à l'Hôtel de Ville.

---

### 🔍 NIVEAU 3 : Les 4 Actes en Pleine Largeur

#### Acte 1 : La Tension Business & Urbaine
* **Le Contexte :** Paris accueille 30 millions de touristes par an, mais 85% s'agglutinent sur l'axe Louvre - Tour Eiffel - Montmartre. Les Batignolles, Necker et Roquette restent invisibles.
* **Le Défi :** Transformer des téraoctets de transactions bancaires anonymisées Mastercard et de données géographiques APUR en un outil de recommandation d'itinéraires personnalisé.
* **Visuel Preuve :** Le schéma de collaboration pluridisciplinaire en 4 étapes (*Design $\times$ Data $\times$ Dev*) issu de `/assets/datacity/slides/slide_p3.png` ou `/assets/datacity/p08_wireframes_ui_cible.png`.

#### Acte 2 : La Découverte Terrain & L'Insight Fondateur
* **L'Insight Terrain :** *« Les touristes ne cherchent pas une liste de 50 monuments : ils sont paralysés par le choix. Ce qu'ils cherchent, c'est l'autorisation morale de flâner dans un quartier authentique sans peur de rater l'essentiel. »*
* **La Note d'Atelier (.olin-sticky--yellow.olin-sticky--tilted) :**
  > *« En atelier de cadrage, la mairie voulait recommander des musées d'État, Mastercard voulait pousser les commerçants partenaires. Mon rôle a été de poser le persona de Jeff au centre de la table pour arbitrer sur la base de l'usage réel. »*
* **Visuel Preuve :** Extrait du Storyboard 17 étapes et persona de Jeff (`/assets/datacity/slides/slide_p6.png` et `slide_p7.png`).

#### Acte 3 : Les Arbitrages Lean UX & L'Ingénierie Builder
* **Ce qu'on a coupé pour sortir en 4 mois :**
  1. *Suppression du routing rue par rue en temps réel :* Remplacé par le concept novateur de **« Quartiers-bulles »** (délimitation visuelle de périmètres de flânerie de 45 minutes).
  2. *Suppression de l'algorithme lourd de profilage psychologique :* Remplacé par 3 curseurs de mood simples (*Curieux, Pressé, Flâneur*).
* **L'Ingénierie Craft :**
  - UI Kit modulaire complet (`/assets/datacity/slides/slide_p9.png` et `slide_p10.png`).
  - Intégration de l'API Mapbox (Vector tiles et bounding boxes dynamiques).
  - React avec custom async fetch hook.

#### Acte 4 : La Preuve du Réel & Le Demoday
* **Les Tests In Situ :** 9 touristes américains équipés du prototype autonome dans les rues de Paris pendant 2h sans accompagnateur.
* **La Consécration :**
  - Mise en ligne publique sur le site officiel de l'Office du Tourisme de Paris (`parisinfo.com`).
  - Soutenance sur écran géant lors du Demoday sous les dorures de l'Hôtel de Ville de Paris (`/assets/datacity/slides/slide_p15.png`).

---

### 🧠 NIVEAU 4 : Les 4 Tiroirs de Maîtrise Senior (Bento 2x2 / Accordéons)

1. **Arbitrages Techniques & Compromis Lean :**
   * *La décision :* Refuser le GPS continu énergivore sur mobile pour privilégier un cache offline léger des POIs de quartiers.
2. **Ce que j'ai appris & Rétrospective :**
   * *Recul critique :* Aujourd'hui, j'utiliserais des Design Tokens machine-readable pour synchroniser les calques cartographiques Mapbox Studio directement avec les variables CSS de l'application.
3. **Composants Design System Réutilisés :**
   * Matrice de statuts, cartouches de coordonnées GPS, cartes bento de POIs, et boutons d'action 44px hit-target.
4. **Questions Fréquentes d'Entretien (Lead Designer Peter De Meurichy) :**
   * *« Comment gères-tu les divergences d'intérêts entre un sponsor privé (Mastercard) et une autorité publique (Ville de Paris) ? »*
   * *Réponse :* En faisant du Storyboard d'usage l'arbitre suprême et non négociable.

---

### 🎯 MOMENT 4 : Bannière Finale de Conversion

* **Titre :** *« Prêt à clarifier vos architectures logicielles ou cartographies denses ? »*
* **Sous-titre :** *Que vous bâtissiez un système embarqué, une plateforme transactionnelle complexe ou un outil SaaS exigeant, appliquons la même rigueur d'arbitrage.*
* **Actions :**
  - `[Planifier un call (15 min) ↗]` (Bouton primaire `.olin-btn--primary`)
  - `[Découvrir le projet suivant : Renault Moments ➔]` (Lien secondaire `.olin-link`)
