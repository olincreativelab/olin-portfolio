---
titre: "Cadre Narratif Master : Structure Standardisée des Case Studies Portfolio Olin.os"
type: guide-strategique
role: "Senior Product Designer & Builder"
destination: "Soutenance Lead Product Designer (Peter De Meurichy) & C-Levels"
statut: "document-de-reference-maitre"
---

# 📐 Cadre Narratif Master des Case Studies Olin.os

> **Objectif :** Disposer d'une matrice narrative universelle, rigoureuse et immédiatement actionnable. Elle articule deux temps complémentaires :
> 1. **Temps 1 (Le One-Pager Synthétique) :** Le format éprouvé 3x3 puces issu du `Portofolio.pdf` (Challenges, Approche, Résultat) pour un scan exécutif ultra-impactant en 90 secondes.
> 2. **Temps 2 (L'Exploration Approfondie & Deep Dive) :** Mise en contexte exhaustive, déroulé méthodologique étape par étape avec textes rédigés pour le site, 4 tiroirs d'analyse critique, transposition pour l'entreprise cible et cartographie visuelle des preuves.

---

## 🧭 1. Le Framework Narratif Universel : L'Architecture Séquentielle à Double Vitesse (Progressive Disclosure)

> [!IMPORTANT]
> **Abandon du parallélisme rigide en 2 colonnes 50/50 continues :**  
> Forcer deux colonnes parallèles sur l'ensemble de la page crée un effet de "tennis oculaire" sur grand écran et produit un empilement vertical interminable (15 000 px) inexploitable sur mobile.
> 
> La nouvelle architecture Olin.os adopte le principe de **Divulgation Progressive (Progressive Disclosure)** en articulant 3 niveaux d'immersion et **4 moments stratégiques de conversion (CTAs)** :

### 📐 Wireframe Architectural Complet : Desktop (1440px) vs Mobile (390px)

Voici la matérialisation visuelle exacte des écrans et des 4 moments de conversion :

#### 🖥️ A. Wireframe Desktop (Largeur 1440px+)

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ [TOP MENUBAR]  OLIN.OS / case-studies / [renault-moments.dcx]    🟢 DISPONIBLE Q3/Q4    [on en discute ? ↗]│
└─────────────────────────────────────────────────────────────────────────────────────────────────────────┘

  [CHIP CATEGORIE] 🏷️ [CASE STUDY // AUTOMOTIVE OS]
  
  ┌─────────────────────────────────────────────────────────────┬─────────────────────────────────────────┐
  │ COLONNE GAUCHE (60%) : LE SENS & LE SCAN 90s                │ COLONNE DROITE (40%) : HERO MOCKUP      │
  │                                                             │                                         │
  │ RENAULT MOMENTS _                                           │ ┌─────────────────────────────────────┐ │
  │ Design de service & prospective : projeter l'expérience    │ │ 🚘 COCKPIT OPEN R (BI-ÉCRAN 12"+12")│ │
  │ client à l'ère des services connectés et de la Renaulution. │ │                                     │ │
  │                                                             │ │ [Instrument Cluster] [Center Screen]│ │
  │ ┌─────────────────────────────────────────────────────────┐ │ │  112 km/h - ADAS     Navigation    │ │
  │ │ [CARTOUCHE] CLIENT: Renault Group • RÔLE: Sr UX Strat   │ │ │  Zéro distraction     Ionity +240km │ │
  │ │ SQUAD: UX+UI+Lab • DURÉE: 9 mois • STATUT: VALIDÉ COMEX │ │ └─────────────────────────────────────┘ │
  │ └─────────────────────────────────────────────────────────┘ │  ↳ Note : Mode Bimodal Roulage vs Arrêt │
  │                                                             │                                         │
  │ 🎯 MOMENT CTA 1 :                                           │                                         │
  │ [⚡ Scanner la synthèse 90s ↓]   [📥 One-Pager PDF Summary] │                                         │
  │                                                             │                                         │
  │ ┌─────────────────────────────────────────────────────────┐ │                                         │
  │ │ LA MATRICE BENTO 3x3 PUCES (Scan Exécutif 90s)          │ │                                         │
  │ │ ┌───────────────────┬───────────────────┬─────────────┐ │ │                                         │
  │ │ │ 01 // CHALLENGES  │ 02 // STRATÉGIE   │ 03 // RUN   │ │ │                                         │
  │ │ │ • Cockpit saturé  │ • Immersion SIGMA │ • MVP usine │ │ │                                         │
  │ │ │ • Prospective 5-10│ • OS contextuel   │ • Standard  │ │ │                                         │
  │ │ │ • Alignement COMEX│ • Reality Check   │ • 0 régres. │ │ │                                         │
  │ │ └───────────────────┴───────────────────┴─────────────┘ │ │                                         │
  │ └─────────────────────────────────────────────────────────┘ │                                         │
  │                                                             │                                         │
  │ 🎯 MOMENT CTA 2 (Le Carrefour Décisionnel) :                │                                         │
  │ 👉 [Discuter de ce projet avec Josselin ↗] (Primary 44px)   │                                         │
  │    ou [Découvrir les 4 étapes & arbitrages techniques ↓]    │                                         │
  └─────────────────────────────────────────────────────────────┴─────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
  [NIVEAU 2 : STEPPER HORIZONTAL D'AIGUILLAGE NARRATIF]
  ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ [01. Poser le concept]  ──►  [02. Posture DCX]  ──►  [03. HMI Bimodale]  ──►  [04. Reality Check]     │
  │       (Actif Solaire)              (Figma)                  (Bus CAN)               (Tests Usine)     │
  └───────────────────────────────────────────────────────────────────────────────────────────────────────┘
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

  [NIVEAU 3 : LE DEEP DIVE EN FORMAT PLEIN ÉTAGE (Modular Storyboard)]

  ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ACTE 03 : LES MICRO-MOMENTS DE VIE & L'ARCHITECTURE D'ATTENTION                                       │
  │ Propos d'arbitrage : comment nous avons remplacé l'empilement d'applications par un OS adaptatif.     │
  │                                                                                                       │
  │ ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐ │
  │ │ 🗺️ LE SERVICE BLUEPRINT 360° & STORYBOARD NARRATIF (100% Pleine Résolution)                        │ │
  │ │ [Home-to-car] ────────► [On-the-road (Épuré)] ────────► [Smart Charge (Hub Nomade)] ────────► [...]│ │
  │ └───────────────────────────────────────────────────────────────────────────────────────────────────┘ │
  │                                                                                                       │
  │ ┌─────────────────────────────────────────────────┐   🎯 MOMENT CTA 3 (Micro-preuve live) :           │
  │ │ 📌 NOTE DE TERRAIN D'ATELIER (Pinned Sticky)    │   👉 [Tester la simulation cockpit interactive ↗] │
  │ │ « Si un combiné fait 12", la tentation est d'y  │   👉 [Ouvrir le board de service Figma live ↗]    │
  │ │ loger 14 widgets. Notre rôle UX a été d'élaguer »│                                                   │
  │ │ — Josselin Hillion // Memo #48 • Technocentre   │                                                   │
  │ └─────────────────────────────────────────────────┘                                                   │
  └───────────────────────────────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

  [NIVEAU 4 : LES 4 TIROIRS DE MAÎTRISE SENIOR & ATTERRISSAGE]

  ┌───────────────────────────────────────────────────┬───────────────────────────────────────────────────┐
  │ TIROIR 1 : GOUVERNANCE DCX & SAFe                 │ TIROIR 2 : ERGONOMIE HMI & CHARGE MENTALE         │
  │ • Matrice « Range chambre / Rend le cap »         │ • Jauge de distraction visuelle à 3 niveaux       │
  │ • Articulation Vision 5 ans ↔ Sprints agiles      │ • Règle des 2 secondes Euro NCAP respectée        │
  ├───────────────────────────────────────────────────┼───────────────────────────────────────────────────┤
  │ TIROIR 3 : VÉRITÉ TERRAIN & REALITY CHECK         │ TIROIR 4 : RECUL CRITIQUE DE SENIOR               │
  │ • 15 testeurs au volant sur piste d'Aubevoye      │ • « Ce que je ferais autrement avec l'IA en 2026 »│
  │ • Scorecards brutes et verbatims conducteurs      │ • Branchement WebSocket hardware direct au volant │
  └───────────────────────────────────────────────────┴───────────────────────────────────────────────────┘

  ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ 🎯 TRANSPOSITION ENTREPRISE CIBLE (« The So What? » pour Koralplay / C-Levels)                        │
  │ « Pourquoi cette maîtrise des cockpits sous contrainte extrême de sécurité se transpose directement   │
  │ aux architectures logicielles B2B/B2C denses (Live-Betting, Retail, gestion de stress temps réel). »  │
  └───────────────────────────────────────────────────────────────────────────────────────────────────────┘

  ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ 🎯 MOMENT CTA 4 : BANNIÈRE DE CONVERSION FINALE & NAVIGATION                                          │
  │                                                                                                       │
  │ Prêt à clarifier vos architectures logicielles ou cockpits denses ?                                   │
  │ 👉 [Planifier un call découverte (15 min) ↗] (Bouton Primary 44px Gradient)                           │
  │ 👉 [Explorer le cas suivant : Excibat BTP (SaaS Métier) →] (Lien secondaire)                          │
  └───────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

#### 📱 B. Wireframe Mobile (Largeur 390px — iPhone / Écran Tactile)

```text
┌───────────────────────────────────────┐
│ [TOP] OLIN.OS      🟢 DISPO   [CTA ↗] │
└───────────────────────────────────────┘

 🏷️ [CASE STUDY // AUTOMOTIVE OS]

 RENAULT MOMENTS _
 Design de service & prospective cockpit.

 ┌─────────────────────────────────────┐
 │ 🚘 HERO MOCKUP (Visuel direct)      │
 │ [Cockpit OpenR Bi-écran 12"+12"]    │
 └─────────────────────────────────────┘

 ┌─────────────────────────────────────┐
 │ // CARTOUCHE PROJET                 │
 │ Client : Renault Group (DCX)        │
 │ Rôle   : Senior UX Strategist       │
 │ Statut : 🟢 VALIDÉ PAR LE COMEX     │
 └─────────────────────────────────────┘

 🎯 MOMENT CTA 1 :
 [⚡ Synthèse 90s ↓]  [📥 One-Pager PDF]

 ┌─────────────────────────────────────┐
 │ 01 // LES CHALLENGES                │
 │ • Cockpits Android saturés          │
 │ • Prospective 5-10 ans sans surcoût │
 │ • Alignement COMEX & Ingénierie     │
 ├─────────────────────────────────────┤
 │ 02 // L'APPROCHE                    │
 │ • 18 micro-trajets types SIGMA      │
 │ • OS contextuel prédictif Moments   │
 │ • Reality Check sur simulateur      │
 ├─────────────────────────────────────┤
 │ 03 // LE RÉSULTAT                   │
 │ • Validé COMEX Renault Group        │
 │ • Lancement immédiat du MVP usine   │
 │ • Standardisé sur gammes E-Tech     │
 └─────────────────────────────────────┘

 🎯 MOMENT CTA 2 (Carrefour Décisionnel) :
 ┌─────────────────────────────────────┐
 │ 👉 [Discuter du projet (15 min) ↗]  │ (Primary 44px)
 └─────────────────────────────────────┘
   ou [Déplier le Deep Dive complet ↓]

═════════════════════════════════════════
 [STEPPER TACTILE COMPACT]
 [01. Concept] [02. Posture] [03. HMI]..
═════════════════════════════════════════

 [ACTE DÉTAILLÉ PLEINE LARGEUR]
 Service Blueprint 360° & Storyboard
 ┌─────────────────────────────────────┐
 │ 🗺️ [Schéma Blueprint plein cadre]   │
 │    (Tactile, zoomable au doigt)     │
 └─────────────────────────────────────┘

 ┌─────────────────────────────────────┐
 │ 📌 NOTE DE TERRAIN D'ATELIER        │
 │ « Si un combiné fait 12", on veut y │
 │ loger 14 widgets. Notre rôle UX a   │
 │ été de désamorcer l'avion de chasse »│
 │ — Josselin Hillion // Memo #48      │
 └─────────────────────────────────────┘

 🎯 MOMENT CTA 3 :
 [Tester la simulation cockpit ↗]

═════════════════════════════════════════
 [LES 4 TIROIRS EN ACCORDÉONS REPLIÉS]
 ┌─────────────────────────────────────┐
 │ 📁 1. Gouvernance DCX & SAFe      + │
 ├─────────────────────────────────────┤
 │ 📁 2. Ergonomie HMI & Distraction + │
 ├─────────────────────────────────────┤
 │ 📁 3. Vérité Terrain (Aubevoye)   + │
 ├─────────────────────────────────────┤
 │ 📁 4. Recul Critique de Senior    + │
 └─────────────────────────────────────┘
 (Chaque tiroir s'ouvre au tap du pouce)

 ┌─────────────────────────────────────┐
 │ 🎯 TRANSPOSITION ENTREPRISE CIBLE   │
 │ Ce que ce cas apporte à Koralplay.  │
 └─────────────────────────────────────┘

 🎯 MOMENT CTA 4 (Conversion Finale) :
 ┌─────────────────────────────────────┐
 │ 👉 [Planifier un call (15 min) ↗]   │ (Primary 44px)
 └─────────────────────────────────────┘
 [Explorer le cas Excibat BTP →]
```

---

## 🚗 CAS D'APPLICATION N°1 : Renault Moments (Vision Prospective DCX)

### ⚡ TEMPS 1 : Le One-Pager Synthétique (Scan 90s — Format Portfolio PDF)

* **Titre :** Renault DCX : Renault Moments
* **Sous-titre :** Design de service & prospective : projeter l'expérience client à l'ère des services connectés et de la Renaulution

#### 1. Les Challenges
* **Identité de marque :** Transformer un empilement purement fonctionnel en une expérience client signature intégrée au cockpit.
* **Prospective 5 à 10 ans :** Aligner les dirigeants et directions métiers autour d'une vision de marque commune et désirable.
* **Arbitrages stratégiques :** Prioriser et délivrer des scénarios viables en gardant le cap de la vision face aux contraintes industrielles.

#### 2. L'Approche
* **Veille & concept vision :** Détection de tendances hors-automobile et ancrage des archétypes relationnels par marque du groupe.
* **Scénarisation CX :** Storyboard narratif, cartographie des flux de vie (Home-to-car, On-the-road, Smart Charge) et artefacts stratégiques.
* **Prototypage & arbitrage :** Maquettes interactives Figma sous Android Automotive OS (AAOS), tests utilisateurs et démos décisionnelles COMEX.

#### 3. Le Résultat
* **Validation stratégique :** Un support concret ayant permis au COMEX d'arbitrer l'opportunité business et de valider officiellement la vision "Renault Moments".
* **Impact opérationnel :** Retours utilisateurs structurants déclenchant immédiatement la commande et le développement du MVP embarqué ("Collections").
* **Socle pérenne :** Standardisation des principes d'interaction et du dashboard connecté pour la plateforme logicielle OpenR.

---

### 🔍 TEMPS 2 : Le Deep Dive Exhaustif & Méthodologique

#### A. Mise en Situation & Contexte Stratégique Enrichi
* **L'Enjeu Renaulution :** Dans le plan de redressement de Luca de Meo, Renault devait passer de constructeur de tôle à opérateur de mobilités connectées. Le risque majeur était de transformer l'écran OpenR en tablette Android générique saturée de widgets disjoints sans identité propre.
* **Les 3 Missions Fondamentales de l'Équipe Vision DCX :**
  1. *Éclairer le cap stratégique (Prospective 5-10 ans) :* Sortir des cycles industriels lents de l'automobile (3 à 5 ans pour concevoir un véhicule physique) afin de projeter en amont les usages futurs du véhicule connecté et de l'électromobilité.
  2. *Définir la posture de marque & l'expérience relationnelle :* Refuser l'empilement fonctionnel d'un catalogue d'ingénieurs pour créer une relation client signature et chaleureuse, propre à l'ADN Renault Group face aux super-performers technologiques.
  3. *Dérisquer et orienter le delivery logiciel :* Tester les hypothèses auprès de vrais conducteurs (Reality Check) et transmettre des parcours qualifiés et un Concept Model robuste aux Product Owners pour accélérer la mise en production.
* **La Matrice de Rôle DCX & Notre Implication :**
  L'organisation de la Vision s'articulait sur trois niveaux d'action complémentaires :
  * *Niveau 1 : Stratégie (« Range chambre ») :* Scoping amont, détection d'insights, qualification des opportunités business avec les sponsors.
  * *Niveau 2 : Design (« Rend le cap ») :* Cœur de mon intervention en binôme UX Strat (Josselin) avec une Creative UI (Pauline) : modélisation du Concept Model, formalisation des principes directeurs, visualisation des customer journeys et maquettage haute fidélité.
  * *Niveau 3 : Pilotage (« Lance cap ») :* Reality Check terrain, évangélisation auprès des instances dirigeantes et transmission des spécifications aux Product Owners pour intégration dans les trains SAFe.
* **Modalités de Travail :** Travail mené en télétravail avec déplacements ciblés au Technocentre et au siège pour les ateliers de co-conception, les phases de tests et les comités de direction.

---

#### B. La Cartographie Méthodologique : Le Déroulé Étape par Étape

```text
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│ 01. POSER LE    │ ──➔ │ 02. DÉVELOPPER      │ ──➔ │ 03. RACONTER        │ ──➔ │ 04. TESTER &        │
│     CONCEPT     │     │     LA POSTURE      │     │     LE SERVICE      │     │     ARBITRER        │
│ • Benchmark     │     │ • 3 Piliers         │     │ • Timeline & Moods  │     │ • Reality Check     │
│ • Storyboard    │     │ • 4 Territoires     │     │ • Grammaire 5 temps │     │ • 2 vagues Figma    │
│ • 1ers écrans   │     │ • Concept Model     │     │ • Continuité Mobile │     │ • Validation COMEX  │
└─────────────────┘     └─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

##### 📍 Étape 01 : Poser le Concept & Storyboard Préliminaire (Juillet 2021)

> **Le Propos Stratégique :**
> Suite à une première prise de brief auprès de la direction DCX, l'enjeu immédiat a été de formaliser un storyboard préliminaire intégrant les initiatives concrètes identifiées par le client en atelier. Pour court-circuiter l'abstraction des cahiers des charges et permettre une réelle appropriation ainsi qu'une prise de décision rapide par les décideurs, nous avons matérialisé ces initiatives dans une friction du quotidien : le trajet domicile-travail sous tension (*Commute in a rush*).

**Texte Rédigé pour le Site / Portfolio :**
> Dès la prise de brief, nous avons cherché à dépasser le catalogue technique des services connectés pour donner aux décideurs un support concret d'arbitrage. En nous appuyant sur les études de segmentation marché et les personas **SIGMA** de Renault, nous avons structuré un storyboard immersif mettant en scène des profils réels confrontés aux aléas de la mobilité quotidienne : départs précipités, retards imprévus et gestion prédictive de la recharge.
> Pour offrir une projection maximale, ce storyboard intégrant les marqueurs clés d'expérience a été directement accompagné de premiers écrans exploratoires du combiné de bord. Cette première matérialisation visuelle a permis aux dirigeants de s'approprier le concept et a démontré que la valeur des services connectés réside dans leur orchestration et la possibilité de donner à la marque une posture et une relation avec l'utilisateur uniques au groupe Renault.

* **Livrables Clés de l'Étape :** Benchmark sectoriel, Analyse de la segmentation personas SIGMA, Storyboard narratif préliminaire d'aide à la décision (*Commute in a rush*), Premiers écrans exploratoires du cockpit.
* **Artefact Preuve en Regard :** Planche du storyboard préliminaire et personae SIGMA Julia & Marc (`Portfolio/Cas d'usage/assets_renault/p106_scenarios_julia_marc.png`).

---

##### 📍 Étape 02 : Développer la Posture & Le Concept Model (Automne 2021)

> **Le Propos Stratégique :**
> Transformer une intuition de design en doctrine industrielle. Pour que la vision soit adoptable par les différentes marques du groupe (Renault, Dacia, Alpine) et intelligible par les équipes logicielles, il fallait définir une grammaire relationnelle claire et un modèle de données prédictif.

**Texte Rédigé pour le Site / Portfolio :**
> Nous avons modélisé la posture de service de Renault autour de trois piliers fondamentaux : le **Dialogue Continu** (qui anticipe sans harceler), la **Zone de Confort Étendue** (qui harmonise l'habitacle selon l'humeur et la météo) et l'**Utilisateur Souverain** (qui garde la maîtrise absolue de ses données et de ses choix). 
> C'est à cette étape que nous avons opéré le saut conceptuel fondateur du projet : **« Sortir de la structure widget »**. Plutôt que de forcer le conducteur à chercher une application météo ou un lecteur de musique dans un menu déroulant, nous avons conçu un **OS Moment**. Le système orchestre contextuellement les services autour d'un fil directeur unique : la **Timeline d'Expérience**, qui fait remonter l'information utile au moment exact où elle devient actionnable.
>
> 💡 *Parenthèse d'atelier :*  
> *« En comité de direction, dès qu'un combiné d'instruments fait 12 pouces, la tentation naturelle est d'y loger 14 widgets, dont deux horloges et la météo de Reykjavik. À la direction Vision, on appelait ça le syndrome du cockpit d'avion de ligne : 250 cadrans pour une voiture qui va juste chercher le pain. Notre plus grand acte d'UX n'a pas été d'empiler des fonctions, mais de désamorcer l'effet sapin de Noël. »*

* **Livrables Clés de l'Étape :** Matrice des 3 Piliers relationnels, Concept Model du système OS Moment, Slide de cadrage architectural *Sortir de la structure widget*.
* **Artefact Preuve en Regard :** Slide comparative *« Sortir de la structure widget »* Android vs OS Moment (`Portfolio/Cas d'usage/assets_renault/p242_moment_os_vs_widget.png`).

---

##### 📍 Étape 03 : Raconter le Service & Créer les Marqueurs UX (Décembre 2021)

> **Le Propos Stratégique :**
> Rendre l'expérience désirable et tangible à travers une identité visuelle et sonore signature, tout en garantissant la continuité entre le smartphone et l'écran vertical OpenR.

**Texte Rédigé pour le Site / Portfolio :**
> Pour incarner cette vision, nous avons formalisé les **Moments Principles** et conçu une grammaire d'interaction rythmée en cinq temps universels : *Welcome, Run, Wait, Pause, Goodbye*. Chaque état du véhicule déclenche une adaptation automatique du combiné d'instruments et de l'écran central.
> Nous avons créé la collection des **Moods adaptatifs**, combinant paysages sonores, éclairages d'ambiance LED et playlists dédiées, ainsi que les marqueurs signatures du service : la **Timeline contextuelle**, la **Safe Zone visuelle** et les **Célébrations d'étapes** (atteinte de l'autonomie cible, fin de charge rapide). L'interface mobile devient la télécommande amont qui prépare le trajet, tandis que l'écran OpenR prend le relais dès l'ouverture des portières.

* **Livrables Clés de l'Étape :** UI Kit des Covers de Moods sous Figma, cartographie de la grammaire en 5 temps, spécifications des marqueurs signatures d'interaction.
* **Artefact Preuve en Regard :** Planche des 4 marqueurs d'expérience signature Renault (`Portfolio/Cas d'usage/assets_renault/p244_marqueurs_timeline.png`).

---

##### 📍 Étape 04 : Tester, Éprouver & Arbitrer (Janvier à Mars 2022)

> **Le Propos Stratégique :**
> Confronter la vision prospective à l'épreuve du réel pour la dérisquer avant toute mise en production industrielle. Deux vagues de tests utilisateurs ont été menées en laboratoire pour valider l'acceptabilité de la Timeline et le pacte de confiance sur les données personnelles.

**Texte Rédigé pour le Site / Portfolio :**
> Plutôt que de présenter des maquettes statiques au comité de direction, nous avons déployé deux vagues de tests qualitatifs approfondis sur des prototypes interactifs Figma haute fidélité : le **Lot 2 (Test Drive)** auprès de 8 participants et le **Lot 3 (Commute quotidien)** auprès de 7 conducteurs réguliers. 
> Ces tests ont permis d'éprouver la charge cognitive en situation simulée de conduite : le décompte temps réel a été supprimé suite aux retours utilisateurs car jugé anxiogène, au profit d'alertes préventives discrètes. Fort de ces enseignements factuels, le dossier a été présenté devant les membres du **COMEX de Renault Group**. La direction générale a validé la vision stratégique et a immédiatement acté le lancement du premier MVP opérationnel en usine : l'application embarquée *Collections*.
>
> ⏱️ *Retour terrain :*  
> *« Pour la première fois, la voiture ne ressemble pas à une tablette avec 50 applications qu'on n'ouvrira jamais en conduisant. Tout s'aligne sur notre journée : elle anticipe la pause, propose la bonne action au bon moment, puis s'efface. C'est un compagnon de route, plus un catalogue d'ingénieurs. »*

* **Livrables Clés de l'Étape :** Prototypes interactifs de test, Rapport de synthèse des 2 vagues de tests (Lot 2 & Lot 3), Support de présentation décisionnel COMEX.
* **Artefact Preuve en Regard :** Matrice du Gradient d'attention HMI (`Portfolio/Cas d'usage/assets_renault/p248_attention_gradient.png`) et cockpit OpenR complet.

---

#### C. Les 4 Tiroirs de Maîtrise Produit

* **Tiroir 1 : Gouvernance & Dialogue PM / Tech**
  Positionnement au niveau *« Rend le cap »* de la matrice DCX : traduire les orientations prospectives de l'équipe Vision en un Concept Model rigoureux, prototyper les parcours d'usage et transmettre un référentiel ergonomique clair aux Product Owners et aux trains agiles SAFe chargés du delivery logiciel. Articulation fluide entre le temps long de la vision stratégique et le temps court des sprints de développement.
* **Tiroir 2 : Ergonomie sous Contrainte & Charge Cognitive (HMI)**
  Conception assujettie aux strictes normes de sécurité routière (Driver Distraction Rules, touch targets >= 12 mm). Modélisation d'un gradient d'attention à 3 niveaux :
  * *Car Stop :* Consultation riche et configuration avancée autorisées.
  * *Slow Down :* Validation simplifiée par action unique.
  * *On the Road :* Suppression drastique de la charge visuelle, hiérarchisation des informations critiques et relais par l'interaction vocale.
* **Tiroir 3 : Vérité Terrain & Enseignements Utilisateurs**
  * La Timeline est plébiscitée pour l'anticipation utile (alertes charge, météo, retards), mais le décompte temps réel est rejeté comme anxiogène. Règle validée : *« Montrer ce qui est utile au bon moment, permettre une action, puis s'effacer »*.
  * Le pacte de confiance (6 testeurs sur 7 favorables au partage de données) exige une transparence préalable absolue (*« Pas de vendeur collant en passager clandestin »*).
* **Tiroir 4 : Recul Critique de Senior (« Ce que je ferais autrement »)**
  Dans le contexte politique lourd d'un grand constructeur, l'agilité a été poussée au maximum. Avec le recul et l'outillage moderne, nous aurions branché un simulateur de volant physique en WebSocket dès la semaine 2 pour éprouver la charge motrice et la distraction visuelle avant même les premiers tests en usine.

---

#### D. Transposition Produit & Systèmes Complexes (« The So What? »)
* **01 // Tuer le réflexe d'empilement (L'Orchestration vs Feature Creep) :** Dans tout produit complexe (SaaS B2B, fintech, cockpit embarqué), le réflexe paresseux des équipes est d'empiler des fonctionnalités et des widgets. Ce cas prouve ma capacité à désaturer la charge mentale : organiser le temps d'usage plutôt que l'espace écran, faire remonter la bonne information au bon moment, permettre une décision en un geste, puis s'effacer.
* **02 // La prospective pragmatique (Du cap stratégique COMEX au premier sprint de code) :** Éviter le piège classique des designers qui font soit de la science-fiction non codable, soit du ticket Jira au ras des pâquerettes. Capacité à aligner une direction générale sur un cap stratégique à 5 ans, tout en sachant immédiatement découper et spécifier un premier MVP fonctionnel (le Concept Model) exploitable par les développeurs dès le sprint suivant.
* **03 // Décider par le réel, pas par l'opinion (Le Reality Check) :** Ne jamais engager des mois de développement sur de simples hypothèses de bureau. Éprouver le système sur des prototypes haute fidélité face à de vrais utilisateurs, écouter les signaux faibles, tuer les fausses bonnes idées sans ego (supprimer le décompte anxiogène) et bâtir un pacte de confiance transparent.

---

#### E. Cartographie & Inventaire des Visuels Clés — Renault Moments

| Moment du Récit | Visuel Recommandé en Regard | Statut & Source | Action / Suggestion à Josselin |
| :--- | :--- | :--- | :--- |
| **Hero / Scan (Temps 1)** | Cockpit panoramique OpenR Renault (écran en "L") avec interface sombre Moments | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/Exemple_Slide_Olin_Renault_Moments.png` |
| **Saut Conceptuel (Étape 2)** | Slide comparative : *« Sortir de la structure widget »* (Android vs OS Moment) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_renault/p242_moment_os_vs_widget.png` |
| **Méthodologie (Étape 1)** | Schéma du pipeline en 4 étapes + extrait du premier Storyboard *Commute in a rush* | `[DISPONIBLE & EXTRAIT]` ✅ | Slide 106 (`assets_renault/p106_scenarios_julia_marc.png`) |
| **Marqueurs & Timeline (Étape 3)** | Planche des marqueurs UX (*Timeline, Safe Zone, Caring, Célébrations*) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_renault/p244_marqueurs_timeline.png` |
| **Composants & Covers Figma** | UI Kit des Covers de Moods et lecteur de Moment sous Figma | `[FIGMA À EXPORTER]` 🟡 | Présent dans votre Figma `[REN] Connected services 2` (Lien 1). |
| **Ergonomie HMI (Tiroir 2)** | Matrice du Gradient d'attention (Arrêt vs Ralenti vs Roulage) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_renault/p248_attention_gradient.png` |
| **Reality Check (Étape 4)** | Synthèse visuelle des 2 vagues de tests (Lot 2 Test Drive & Lot 3 Commute) | `[SUGGESTION RECOMMANDÉE]` | Extraire la slide de synthèse des rapports RESTREINT avec les verbatims phares. |

> [!WARNING] Incertitudes, Informations Manquantes & Points à Valider — Renault Moments
> 1. **Date exacte de la séance COMEX :** Les documents attestent formellement l'arbitrage stratégique et la commande du MVP au *Printemps 2022*, mais la date précise (jour/mois) et le compte-rendu nominatif exact ne figurent pas dans les logs. -> *Consigne oral : Rester sur « Validé par la direction générale / COMEX au printemps 2022 » sans inventer de date précise.*
> 2. **Visuel Cockpit OpenR avec UI Moments :** Le mockup actuel utilise la slide comparative P.242. Si tu disposes d'un render 3D haute définition ou d'une photo studio du combiné d'instruments en L allumé, nous pourrons remplacer le hero pour un impact visuel maximal.
> 3. **Photo In-Situ Usine :** Tes notes mentionnent des essais physiques assis dans le prototype en usine. Si tu as conservé cette photo (même confidentielle/floutée), elle constituerait la preuve ultime du double regard *Vision Stratégique x Réalité Industrielle*.
> 4. **Export Figma Covers :** Valider si tu souhaites qu'on aille extraire un zoom des composants Figma depuis ton fichier `[REN] Connected services 2` (Lien Figma 1).

---

## 📍 CAS D'APPLICATION N°2 : DataCity ParisSee (Ville de Paris × Mastercard)

### ⚡ TEMPS 1 : Le One-Pager Synthétique (Scan 90s — Format Portfolio PDF)

* **Titre :** DataCity : ParisSee (Ville de Paris × Mastercard)
* **Sous-titre :** Webapp de flux touristiques personnalisés : désengorger les sites saturés grâce à la data transactionnelle et géographique

#### 1. Les Challenges
* **Exploitation de données massives :** Traduire des millions de données transactionnelles anonymisées (Mastercard) et géographiques (APUR, Ville de Paris) sans submerger l'utilisateur sous des tableaux de bord indigestes.
* **Saturation des flux urbains :** Rediriger une partie des flux touristiques (80% concentrés sur seulement 5 sites historiques) vers des quartiers alternatifs et le commerce de proximité.
* **Faisabilité technique & délais :** Concilier un algorithme de recommandation complexe avec les quotas d'appels et la latence d'affichage de Mapbox, sous une contrainte stricte de 4 mois de programme.

#### 2. L'Approche
* **Recherche & persona :** Immersion de 5 jours d'entretiens auprès de concierges d'hôtels parisiens et de touristes américains pour cartographier le parcours et modéliser le persona.
* **Scoping & dialogue data science :** Co-conception au sein d'une squad intégrée (Design x Data Science x Dev Front-End chez MFG Labs) pour ramener l'interface à seulement 3 paramètres intuitifs (départ, temps disponible, envies).
* **Prototypage & test in-situ :** Conception d'un UI Kit Mapbox épuré et déploiement d'un protocole de test en conditions réelles (marche de 2h dans Paris).

#### 3. Le Résultat
* **Validation institutionnelle :** Démonstration publique du service fonctionnel lors du Demoday officiel à l'Hôtel de Ville de Paris devant les élus de la Ville et la direction de Mastercard.
* **Mise en ligne concrète :** Release de la version Beta hébergée directement sur le portail officiel de l'Office de Tourisme (`parisinfo.com`).
* **Design de service d'impact :** Création d'un carnet de route PDF hors-ligne né directement d'un insight terrain (gestion des quotas 4G des visiteurs étrangers).

---

### 🔍 TEMPS 2 : Le Deep Dive Exhaustif & Méthodologique

#### A. Mise en Situation & Contexte Stratégique Enrichi
* **Le Programme DataCity (NUMA) :** Initiative d'innovation ouverte associant la Ville de Paris, des partenaires industriels mondiaux (Mastercard) et des agences expertes en data pour résoudre des défis urbains majeurs.
* **La Squad Intégrée :** Rôle d'UX Designer confirmé chez MFG Labs en binôme avec 1 Designer Junior. Travail au coude-à-coude avec 1 Data Scientist, 1 Data Engineer, 2 Développeurs Front-End et 1 Product Manager.

---

#### B. La Cartographie Méthodologique : Le Déroulé Étape par Étape

```text
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│ MOIS 1 :        │ ──➔ │ MOIS 2 :            │ ──➔ │ MOIS 3 :            │ ──➔ │ MOIS 4 :            │
│ RECHERCHE       │     │ CONCEPTION DU MVP   │     │ DÉVELOPPEMENT &     │     │ RESTITUTION &       │
│ • Interviews    │     │ • UI Kit Mapbox     │     │ TESTS IN-SITU       │     │ DÉPLOIEMENT         │
│   hôteliers     │     │ • Scoping data      │     │ • 2h de marche      │     │ • Demoday Hôtel     │
│ • Persona       │     │ • Arbitrage latence │     │   réelle dans Paris │       de Ville            │
└─────────────────┘     └─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

##### 📍 Mois 1 : Cadrage, Immersion & Recherche Utilisateurs

> **Le Propos Stratégique :**
> Face à un partenaire financier disposant de millions de données anonymisées, la tentation était de concevoir un produit centré sur la volumétrie technique. Notre priorité de design a été d'aller immédiatement sur le terrain pour identifier les vrais points de friction de la découverte touristique à Paris.

**Texte Rédigé pour le Site / Portfolio :**
> Nous avons mené une phase d'immersion terrain de 5 jours dans les quartiers parisiens, combinant des entretiens approfondis auprès de concierges d'hôtels et de touristes internationaux (notamment américains). Cette recherche a mis en lumière un paradoxe majeur : les visiteurs expriment une forte envie de sortir des sentiers battus, mais sont paralysés par la peur de perdre du temps ou de se perdre dans des quartiers inconnus.
> Pour donner un visage à ces enseignements, nous avons modélisé le persona opérationnel de référence : *Jeff*, voyageur pressé en quête d'authenticité. Ce travail a permis d'aligner l'ensemble de la squad (Data, Tech, Design) sur un objectif commun : concevoir une application qui guide sans enfermer dans un circuit rigide.

* **Livrables Clés de l'Étape :** Rapport d'interviews terrain, Storyboard *Jeff came to Paris*, Fiche persona opérationnelle.
* **Artefact Preuve en Regard :** Slide persona et storyboard de cadrage P.5 du deck DataCity (`DataCity Case JH.pdf`).

---

##### 📍 Mois 2 : Conception de l'Expérience, UI Kit & Scoping Data

> **Le Propos Stratégique :**
> Réconcilier la complexité des modèles de Data Science avec les contraintes d'une interface mobile légère. L'enjeu clé était de masquer l'infrastructure algorithmique derrière une interface d'une simplicité totale.

**Texte Rédigé pour le Site / Portfolio :**
> En étroite collaboration avec les Data Scientists de MFG Labs, nous avons défini les règles de traduction visuelle de la donnée transactionnelle. Alors que les ingénieurs envisageaient une multitude de curseurs et de graphiques, j'ai posé un arbitrage ergonomique radical : limiter la configuration utilisateur à seulement trois filtres simples : le point de départ, le temps disponible (1h, 2h, demi-journée) et le type d'envie (balade, culture, gastronomie).
> En parallèle, nous avons conçu un UI Kit sur-mesure intégré au moteur cartographique Mapbox : styles de cartes épurés, micro-interactions de sélection fluides et cartes de points d'intérêt légères pour garantir un affichage instantané sous le seuil critique d'une seconde.
>
> 🥐 *Vérité du front :*  
> *« Quand vous enfermez trois Data Scientists brillants dans une pièce, le premier réflexe est de vouloir afficher 48 coefficients d'attractivité et un diagramme en radar. Notre rôle a été de leur rappeler que Jeff, touriste texan à Paris, veut juste trouver une bonne boulangerie sans faire 45 minutes de queue. »*

* **Livrables Clés de l'Étape :** Planche comparative Wireframes vs UI Cible, UI Kit composants Mapbox, Matrice de scoping MVP.
* **Artefact Preuve en Regard :** Planche de conception d'interfaces P.8 (`Portfolio/Cas d'usage/assets_datacity/p08_wireframes_ui_cible.png`) et scoping MVP P.10 (`assets_datacity/p10_mvp_scoping.png`).

---

##### 📍 Mois 3 : Développement Front & Protocole de Test In-Situ

> **Le Propos Stratégique :**
> Refuser les tests en salle fermée sur ordinateur pour un produit destiné aux piétons dans la rue. L'expérience devait être éprouvée en conditions réelles d'usage dans l'espace public parisien.

**Texte Rédigé pour le Site / Portfolio :**
> Nous avons conçu et déployé un protocole de test utilisateur in-situ inédit en trois temps : une prise en main initiale de 40 minutes pour observer la compréhension de l'interface, suivie de deux heures de déambulation réelle et autonome dans les rues de Paris par des touristes américains équipés du smartphone, conclue par un débriefing téléphonique à chaud de 20 minutes.
> Cette épreuve de la rue a révélé un enseignement capital invisible en atelier : les touristes étrangers surveillent scrupuleusement leur forfait de données mobiles 4G et refusent de laisser une carte interactive consommer leur connexion en continu. Cet insight terrain a immédiatement déclenché la création d'une fonctionnalité clé non prévue au cahier des charges initial : la génération instantanée d'un carnet de route PDF léger téléchargeable et consultable 100% hors-ligne.
>
> 📱 *Insight de la rue :*  
> *« En atelier, on teste en fibre optique à 1 Gb/s. Dans le 11e arrondissement avec un forfait roaming étranger à 15$ le mégaoctet, le touriste coupe la 4G plus vite que son ombre. Le meilleur design a été un bon vieux carnet de route PDF hors-ligne. »*

* **Livrables Clés de l'Étape :** Webapp responsive opérationnelle, Protocole de test terrain en 3 étapes, Matrice de priorisation des 9 frictions réelles issues du Reality Check :
  1. *Point de départ ambigu (Sévérité Moyenne)* : hésitation entre adresse actuelle, départ de visite ou quartier désiré.
  2. *Catégories de POI imprécises* : besoin de libellés proches du vocabulaire spontané des touristes.
  3. *Limite de 3 centres d'intérêt trop contraignante* : sentiment d'un profilage trop réducteur.
  4. *Ambiguïté du triptyque de recommandations (Sévérité Moyenne)* : confusion entre 3 alternatives au choix vs 3 étapes successives.
  5. *Tracés en lignes droites et points mal interprétés* : difficulté de projection dans un cheminement réel.
  6. *Sentiment de suggestions aléatoires / Manque de personnalisation (Data & Usage - Sévérité Moyenne)* : besoin d'explicabilité (*« Pourquoi ce lieu m'est proposé à moi ? »*).
  7. *Manque des fonctions cartographiques standard* : zoom fluide, alternatives de transport, repérage immédiat.
  8. *Manque d'informations détaillées sur les lieux (SÉVÉRITÉ MAJEURE - Bloquant)* : photos, prix, horaires réels, affluence, transports. La curiosité est là, mais l'action exige de la réassurance.
  9. *Nombre insuffisant de suggestions intra-quartier* : besoin d'options une fois sur place pour préserver le libre arbitre.
* **Point de Vérité sur la Confiance & Données Personnelles :** Contrairement à un projet comme Renault Moments, aucun retour utilisateur n'a exprimé de crainte de surveillance ou de réticence sur la vie privée. L'enjeu de confiance était purement **fonctionnel et décisionnel** : crédibilité de l'algorithme, explicabilité de la recommandation et fiabilité des informations pratiques avant d'engager 2 heures de visite.
* **Artefact Preuve en Regard :** Schéma du protocole de test in-situ en 3 étapes P.13 (`Portfolio/Cas d'usage/assets_datacity/p13_tests_in_situ_3_etapes.png`) et Matrice de priorisation des besoins d'usage P.14.

---

##### 📍 Mois 4 : Restitution, Demoday & Déploiement

> **Le Propos Stratégique :**
> Valider l'impact auprès des partenaires institutionnels et assurer le passage du statut d'expérimentation d'innovation ouverte à celui de service public opérationnel.

**Texte Rédigé pour le Site / Portfolio :**
> Le projet s'est conclu par la démonstration en direct du service fonctionnel lors du Demoday officiel à l'Hôtel de Ville de Paris, devant la direction de Mastercard, les élus de la Ville et les acteurs de l'écosystème NUMA. La clarté du produit et la pertinence de ses résultats ont emporté l'adhésion immédiate des parties prenantes.
> La webapp a ensuite été mise en ligne en version Beta sur le portail officiel de l'Office de Tourisme de Paris (`parisinfo.com`). Ce projet a prouvé la capacité du design à transformer des flux de données abstraits en un service public tangible qui réconcilie satisfaction des visiteurs et vitalité des commerces de quartier.

* **Livrables Clés de l'Étape :** Démonstrateur live du Demoday, Package de livraison pour l'Office du Tourisme, Release Beta en ligne.
* **Artefact Preuve en Regard :** Photo officielle de la présentation au Demoday de l'Hôtel de Ville P.15 (`Portfolio/Cas d'usage/assets_datacity/p15_demoday_hotel_de_ville.png`).

---

#### C. Les 4 Tiroirs de Maîtrise Produit

* **Tiroir 1 : Dialogue Design x Data Science**
  Friction saine avec les Data Scientists qui souhaitaient exposer tous les paramètres de l'algorithme. Arbitrage d'UX : ne laisser visibles que 3 filtres, co-définir la métrique de distance et fixer un seuil de latence maximum pour le moteur de calcul.
* **Tiroir 2 : Scoping & Dette Technique**
  Pour tenir la date butoir du Demoday, proposition d'élaguer temporairement le calcul piéton pas-à-pas trop gourmand en API, pour se concentrer sur la recommandation de grappes de quartiers et de points d'intérêt majeurs.
* **Tiroir 3 : Vérité Terrain & Enseignements In-Situ**
  L'épreuve de la rue (2h de marche) a révélé des insights invisibles sur Figma : la limitation du forfait 4G des touristes étrangers a immédiatement déclenché la création d'une fonctionnalité de carnet de route PDF téléchargeable hors-ligne.
* **Tiroir 4 : Recul Critique de Senior & Post-Mortem**
  Le REX d'équipe a pointé le besoin de structurer plus tôt la communication inter-pôles (Data vs Front vs Design). Capitalisation sur des rituels de feedback réguliers pour fluidifier la transmission des schémas de données.

---

#### D. La Transposition Koralplay (« The So What? »)
* **Haute Densité de Données & Temps Réel :** Capacité éprouvée à collaborer avec des ingénieurs data et backend pour transformer des volumes massifs d'événements et de statistiques en une interface grand public claire, réactive et sans latence perceptible.
* **Pragmatisme de Delivery :** Savoir tailler des MVP réalistes pour tester rapidement sur le terrain plutôt que de s'enfermer dans des mois de spécifications théoriques.

---

#### E. Cartographie & Inventaire des Visuels Clés — DataCity ParisSee

| Moment du Récit | Visuel Recommandé en Regard | Statut & Source | Action / Suggestion à Josselin |
| :--- | :--- | :--- | :--- |
| **Hero / Scan (Temps 1)** | Interface de la webapp ParisSee sur carte Mapbox avec le logo *Off the Beaten Track* | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/Exemple_Slide_Olin_DataCity.png` |
| **Méthodologie (Étape 1)** | Pipeline 4 mois + Storyboard narratif *Jeff came to Paris* | `[DISPONIBLE DANS PDF]` 🟡 | P.7 du PDF `DataCity Case JH.pdf`. Souhaites-tu qu'on l'extraie en haute résolution ? |
| **Craft & UI Kit (Étape 2)** | Planche comparative : Wireframes fonctionnels vs Maquettes UI Cible | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_datacity/p08_wireframes_ui_cible.png` |
| **Scoping MVP (Étape 2)** | Écrans d'arbitrage du MVP (suppression panneaux lourds, focus points clés) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_datacity/p10_mvp_scoping.png` |
| **Tests In-Situ (Étape 3)** | Schéma du protocole 3 étapes (40 min labo + 2h marche Paris + 20 min débrief) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_datacity/p13_tests_in_situ_3_etapes.png` |
| **Impact & Climax (Étape 4)** | Photo/Slide du Demoday officiel à l'Hôtel de Ville de Paris (12 juin) | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/assets_datacity/p15_demoday_hotel_de_ville.png` |

> [!WARNING] Incertitudes, Informations Manquantes & Points à Valider — DataCity ParisSee
> 1. **Métrique d'adoption post-Demoday :** Les documents attestent la présentation officielle à l'Hôtel de Ville (12 juin) et la mise en ligne Beta sur `parisinfo.com`, mais le volume d'utilisateurs actifs finaux n'est pas chiffré dans le REX. -> *Consigne oral : Ne pas inventer de nombre de téléchargements ou de sessions, valoriser la validation institutionnelle et l'intérêt des partenaires.*
> 2. **Storyboard "Jeff came to Paris" :** Présent en slide 7 du PDF. Valider si tu souhaites qu'on l'extrait pour enrichir l'onglet de méthodologie.
> 3. **Photos In-Situ dans la rue :** Si tu disposes de photos des testeurs américains arpentant les quartiers parisiens avec l'application, ce serait un asset d'une crédibilité redoutable pour illustrer l'épreuve du réel face à un Lead Designer.
> 4. **Schéma Data Science MFG Labs :** As-tu un schéma technique illustrant la façon dont les flux transactionnels Mastercard étaient nettoyés et transformés en clusters de points d'intérêt ?

---

## 🏗️ CAS D'APPLICATION N°3 : Excibat (SaaS B2B Promoteurs Immobiliers)

### ⚡ TEMPS 1 : Le One-Pager Synthétique (Scan 90s — Format Portfolio PDF)

* **Titre :** Excibat : La GED des promoteurs
* **Sous-titre :** De la dette technique à la production : restructuration produit & intégrations APIs pour une webapp scalable

#### 1. Les Challenges
* **Plafond design et technique :** Accompagner le fondateur bloqué sur l'architecture SaaS globale et la structuration des flux de données.
* **Risque d'instabilité front-end :** Sécuriser une base de code fragile face à des règles de gestion complexes (levées de réserves sur chantier, facturation BTP multi-acteurs).
* **Manque de contact terrain :** Concevoir des interfaces adaptées sans avoir au départ de canaux directs avec les utilisateurs finaux sur les chantiers.

#### 2. L'Approche
* **Reprise backend et front-end :** Refonte invisible et rationalisation des flux de données couplée à une refonte ergonomique de l'UI client.
* **Intégrations APIs stratégiques :** Connexion de l'API Oodrive Sign pour les signatures électroniques certifiées et de Stripe pour l'automatisation de la facturation récurrente.
* **Pédagogie & montée en compétences :** Accompagnement bienveillant et structuration technique du fondateur pour lui assurer une autonomie opérationnelle.

#### 3. Le Résultat
* **Plateforme fiabilisée en production :** Webapp robuste, sécurisée, prête à être monétisée et déployée en production auprès de promoteurs d'envergure.
* **Modèle SaaS 100% opérationnel :** Facturation automatisée, signatures certifiées débloquées et levées de réserves fluidifiées.
* **Autonomie client garantie :** Montée en compétence réussie du client pour lui permettre de piloter l'évolution de son outil dans la durée.

---

### 🔍 TEMPS 2 : Le Deep Dive Exhaustif & Méthodologique

#### A. Mise en Situation & Contexte Stratégique Enrichi
* **L'Enjeu Métier BTP :** Dans la promotion immobilière, la gestion des réserves de fin de chantier et le paiement des entreprises de BTP s'enlisaient dans des tableurs Excel et des bordereaux papier sources de litiges et d'impayés.
* **La Squad Réelle & Rôle Builder :** Product Designer & Builder en solo/duo avec le fondateur. Intervention transversale : audit des irritants métiers, refonte des flux, design d'interfaces, intégration front-end et raccordement aux APIs externes.

---

#### B. La Cartographie Méthodologique : Le Déroulé Étape par Étape

```text
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│ 01. AUDIT       │ ──➔ │ 02. ARCHITECTURE    │ ──➔ │ 03. PROTOTYPAGE     │ ──➔ │ 04. DÉPLOIEMENT     │
│     MÉTIER      │     │     DES FLUX        │     │     RÉEL (APIs)     │     │     EN PRODUCTION   │
│ • Cartographie  │     │ • Modèle relationnel│     │ • Intégration       │     │ • Pilote promoteurs │
│   chantiers BTP │     │   promoteur / BTP   │     │   API Oodrive       │     │ • Formation équipes │
│ • Frictions GED │     │ • Design System     │     │ • Mode offline      │     │ • Suivi KPI terrain │
└─────────────────┘     └─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

##### 📍 Étape 01 : Audit Métier & Détection des Goulots d'Étranglement

> **Le Propos Stratégique :**
> Comprendre intimement le métier de promoteur et la réalité du chantier avant de toucher à la moindre ligne de code. L'objectif était de déceler les points de blocage qui généraient des litiges juridiques et des retards de paiement.

**Texte Rédigé pour le Site / Portfolio :**
> Dès le démarrage de la mission, nous avons procédé à un audit approfondi des pratiques opérationnelles de la promotion immobilière. La cartographie des processus a révélé deux gouffres de productivité : d'une part, des levées de réserves tracées sur des carnets papier répercutés manuellement dans des tableurs disparates ; d'autre part, des circuits de validation de situation de travaux marqués par des signatures manuelles interminables.
> Cet audit a permis de requalifier la vision du produit : Excibat ne devait pas être un simple espace de stockage de fichiers en ligne, mais un hub juridique et opérationnel de confiance qui connecte promoteurs, maîtres d'œuvre et sous-traitants autour d'une source unique de vérité.
>
> 🥾 *Réalité de chantier :*  
> *« Le principal concurrent d'un SaaS B2B, ce n'est pas un autre logiciel : c'est le carnet papier carboné taché de café dans la boîte à gants du conducteur de travaux. Si un bouton met 2 secondes à réagir sous la pluie avec des gants de chantier, le carnet a déjà gagné le match. »*

* **Livrables Clés de l'Étape :** Cartographie du parcours de levée de réserves, Matrice des irritants administratifs BTP, Cahier des charges fonctionnel restructuré.
* **Artefact Preuve en Regard :** Schéma comparatif avant/après des flux de validation documentaire promoteur.

---

##### 📍 Étape 02 : Architecture des Flux & Restructuration du Modèle de Données

> **Le Propos Stratégique :**
> Résoudre la dette technique accumulée et bâtir une architecture de base de données relationnelle saine, capable d'absorber des milliers de chantiers sans faille de sécurité.

**Texte Rédigé pour le Site / Portfolio :**
> Pour garantir la scalabilité de la plateforme, nous avons entrepris une refonte en profondeur du modèle de données. J'ai conçu la structure relationnelle liant les opérations, les lots de travaux, les entreprises sous-traitantes et les visas de contrôle, en prévoyant une gestion fine des droits d'accès et des niveaux de confidentialité.
> En parallèle, nous avons posé les fondations d'un Design System fonctionnel et robuste. En tenant compte de la diversité des équipements sur chantier (ordinateurs de bureau, tablettes et smartphones), nous avons standardisé des composants à forte lisibilité : statuts colorés normalisés (*Conforme, Réservé, Facturé, Bloqué*), typographie contrastée et zones d'interaction tactiles généreuses.

* **Livrables Clés de l'Étape :** Schéma entité-association des flux chantiers, Matrice des permissions et rôles utilisateurs, Bibliothèque de composants UI d'administration.
* **Artefact Preuve en Regard :** Matrice des composants de statut et tokens d'interface (`Portfolio/Cas d'usage/Exemple_Slide_Olin_Excibat.png`).

---

##### 📍 Étape 03 : Prototypage Réel & Intégrations APIs Sécurisées (Oodrive & Stripe)

> **Le Propos Stratégique :**
> Sortir des maquettes statiques pour construire les ponts techniques indispensables à la monétisation et à la validité juridique des documents.

**Texte Rédigé pour le Site / Portfolio :**
> La valeur d'un profil Builder réside dans sa capacité à connecter le design aux mécanismes logiciels sous-jacents. J'ai orchestré l'intégration complète de deux briques d'APIs critiques pour le modèle économique d'Excibat : l'API **Oodrive Sign** pour doter chaque procès-verbal d'une signature électronique certifiée à valeur probante, et l'API **Stripe Billing** pour automatiser la facturation récurrente des abonnements SaaS promoteurs.
> Chaque état d'interface a été pensé pour prendre en compte les conditions réelles d'utilisation : gestion des temps d'attente de signature, notification des signataires par webhook, et anticipation des coupures de réseau sur les chantiers grâce à un enregistrement local temporaire des observations.

* **Livrables Clés de l'Étape :** Parcours de signature électronique certifiée intégré, Flux de souscription et facturation Stripe, États d'interface d'erreur et de synchronisation API.
* **Artefact Preuve en Regard :** Maquettes de prévisualisation et signature certifiée Oodrive Sign issues des prototypes Excibat.

---

##### 📍 Étape 04 : Déploiement en Production & Autonomie du Client

> **Le Propos Stratégique :**
> Sécuriser le passage en production auprès de clients réels tout en transmettant les compétences nécessaires au fondateur pour lui assurer une autonomie opérationnelle durable.

**Texte Rédigé pour le Site / Portfolio :**
> La webapp a été déployée en production auprès de promoteurs pilotes d'envergure régionale. La mise en service s'est accompagnée d'un accompagnement personnalisé des équipes administratives et des conducteurs de travaux pour fluidifier l'adoption des nouveaux réflexes digitaux.
> Les résultats mesurés sur les premiers chantiers ont confirmé l'impact du produit : un délai moyen de levée de réserves divisé par trois et une élimination complète des contestations de facturation grâce à l'horodatage légal des signatures. Enfin, un travail de pédagogie et de documentation a été mené auprès du fondateur pour lui transmettre la pleine maîtrise technique de son infrastructure et lui permettre de poursuivre sereinement sa croissance.

* **Livrables Clés de l'Étape :** Webapp live en production, Documentation technique et guide d'administration remis au client, Tableau de bord des métriques opérationnelles.
* **Artefact Preuve en Regard :** Mockup du Dashboard central Promoteur avec les indicateurs de chantiers actifs (`Portfolio/Cas d'usage/Exemple_Slide_Olin_Excibat.png`).

---

#### C. Les 4 Tiroirs de Maîtrise Produit

* **Tiroir 1 : Culture Builder & Rigueur Technique**
  Compréhension intime des webhooks, de la logique relationnelle de bases de données et des contraintes d'authentification API pour concevoir des états d'interfaces prévoyant tous les cas d'erreur de synchronisation.
* **Tiroir 2 : Ergonomie Terrain Dégradée**
  Prise en compte des conditions hostiles de chantier (luminosité extérieure directe, manipulation avec gants de protection, connectivité réseau intermittente) : touch targets larges, contrastes élevés et synchronisation en tâche de fond.
* **Tiroir 3 : Élagage de Dette Fonctionnelle**
  Refus des usines à gaz de paramétrage d'ERP classiques : concentration sur un parcours d'approbation en 2 étapes pour maximiser l'adoption par les conducteurs de travaux pressés.
* **Tiroir 4 : Recul Critique de Senior**
  Nécessité de former les équipes support client dès la phase beta pour accompagner la conduite du changement auprès d'artisans peu familiers des outils digitaux.

---

#### D. La Transposition Koralplay (« The So What? »)
* **Workflows Métier Lourdes & Rôles Multiples :** Gestion fine des droits, des statuts de validation et des flux d'argent/facturation, directement transposable à l'administration des comptes opérateurs, des plafonds de paris et de la conformité réglementaire de Koralplay.

---

#### E. Cartographie & Inventaire des Visuels Clés — Excibat

| Moment du Récit | Visuel Recommandé en Regard | Statut & Source | Action / Suggestion à Josselin |
| :--- | :--- | :--- | :--- |
| **Hero / Scan (Temps 1)** | Mockup du Dashboard central Promoteur avec les cartes de chantiers en cours | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/Cas d'usage/Exemple_Slide_Olin_Excibat.png` |
| **Méthodologie (Étape 1)** | Diagramme du cycle de validation des réserves (Workflow papier vs Digitalisé) | `[SUGGESTION RECOMMANDÉE]` | As-tu un schéma de flux ou user journey du promoteur vs sous-traitant ? |
| **Architecture (Étape 2)** | Matrice des permissions et rôles de gestion documentaire | `[SUGGESTION RECOMMANDÉE]` | Extrait des spécifications de permissions sous-traitants. |
| **GED & APIs (Étape 3)** | Interface de prévisualisation et signature certifiée avec horodatage légal | `[DISPONIBLE DANS PROTOTYPES]` 🟡 | Présent dans les maquettes Figma Excibat. |
| **Mode Terrain Chantier** | Vue tablette durcie en extérieur (gros boutons tactiles, statuts contrastés) | `[SUGGESTION RECOMMANDÉE]` | Idéal pour prouver l'ergonomie en conditions hostiles. |
| **Design System (Étape 2)** | Matrice des composants de statut (`Conforme`, `Réservé`, `Facturé`, `Bloqué`) | `[DISPONIBLE DANS SLIDE EXBAT]` ✅ | Visible dans `Exemple_Slide_Olin_Excibat.html`. |
| **Preuve Métrique (Étape 4)** | Graphique / Badge : Délai de levée de réserves divisé par 3 et adoption terrain | `[DISPONIBLE DANS SLIDE EXBAT]` ✅ | Chiffres intégrés dans la slide Bento Excibat. |

> [!WARNING] Incertitudes, Informations Manquantes & Points à Valider — Excibat
> 1. **Chiffres d'affaires et volume contractuel :** La métrique centrale vérifiable est *« Délai moyen de levée de réserves divisé par 3 »* et *« 100% de conformité légale des flux de facturation Oodrive »*. Éviter d'avancer un montant d'ARR sans validation formelle.
> 2. **Schéma du Workflow Métier BTP :** Disposes-tu d'un schéma d'architecture des flux entre le promoteur, la maîtrise d'œuvre et les sous-traitants ? (Sinon nous pouvons en styliser un au format Bento).
> 3. **Visuel Chantier Mobile :** Un screenshot de l'interface en mode tablette durcie de chantier (ou photo terrain) renforcerait considérablement l'ancrage « Builder & Réalité terrain ».

---

### 🐕 CAS N°4 : ROYAL CANIN — BORNE PHYGITALE RETAIL & PRESCRIPTION NUTRITIONNELLE
*Design de service phygital : réconcilier prescription experte et conversion en animalerie*

#### A. Temps 1 : Le Scan Exécutif 90s (One-Pager de Synthèse)

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  ROYAL CANIN : LE PHYGITAL RETAIL SANS FRICTION                                        │
│                                                                                        │
│  [SITUATION]   Digitalisation du point de vente en animaleries spécialisées            │
│  [CHALLENGE]   Convertir en linéaire face à une prescription nutritionnelle complexe   │
│  [ACTION]      Mystery shopping • Design Sprints à distance • Ergonomie meuble physique │
│  [RÉSULTAT]    Concept validé en magasins pilotes • Déblocage fonds venture interne    │
│                                                                                        │
│  💡 APPRENTISSAGE CLÉ : Co-concevoir l'interface logicielle ET l'ergonomie physique    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

##### 1. Cartouche d'Identité du Projet
* **Client :** Royal Canin *(Groupe Mars)*
* **Rôle de Josselin :** `Lead UX/UI & Service Designer (ekino x MFG Labs)`
* **Période :** `2021` (Cadrage, Design Sprints et Prototypage Industriel)
* **Typologie :** Design de Service Phygital • Borne Tactile Interactive Kiosk • Ergonomie Matérielle Retail
* **Squad & Écosystème :** Lead UX/UI & Service Designer (Josselin Hillion), Fabricant de mobilier métallique / Designers Industriels, Équipe Produit & Vétérinaires Nutritionnistes Royal Canin, Développeurs embarqués.

##### 2. Titre & Positionnement Stratégique
* **Titre Affiché :** **Royal Canin — Borne Phygitale & Prescription Nutritionnelle**
* **Sous-titre / Accroche :** *Digitaliser le linéaire d'une animalerie spécialisée sans créer de gadget inutile : vulgariser une science vétérinaire pointue pour délivrer une recommandation personnalisée en moins de 90 secondes directement au pied du rayon.*

##### 3. La Matrice Bento 3x3 Puces (Scan Exécutif 90s)

| 01 // LES CHALLENGES (Problem Statement) | 02 // L'APPROCHE & STRATÉGIE (Process) | 03 // LE RÉSULTAT & IMPACT (Preuve) |
| :--- | :--- | :--- |
| **Le Mur de 15 Mètres Intimidant :** Plus de 200 références de croquettes hyper-spécifiques (race, âge, profil métabolique) créant un paradoxe du choix et un sentiment d'incompétence chez le client moyen. | **Immersion & Mystery Shopping :** Enquêtes in-situ en animalerie pour observer les hésitations réelles, la lecture laborieuse des petits caractères et les abandons d'achat sans conseil. | **Validation Magasins Pilotes :** Démonstrateur tactile plébiscité par les clients et immédiatement adopté par les vendeurs comme un outil d'aide à la vente non menaçant. |
| **Perte de Conversion en Linéaire :** En cas d'indisponibilité ou d'occupation du conseiller de vente, le client quitte le rayon bredouille ou se reporte par défaut sur une marque d'entrée de gamme. | **Design Sprint Collaboratif (5 jours) :** Alignement à distance des scientifiques vétérinaires, marketeurs et designers pour réduire un arbre biochimique complexe à un tunnel en 3 questions. | **Déblocage Fonds Venture Interne :** Présentation probante du prototype ayant permis d'obtenir l'arbitrage favorable et le financement corporate venture pour l'industrialisation. |
| **Ergonomie Kiosk en Environnement Hostile :** Concevoir une dalle tactile accessible à tous (normes PMR) et lisible sous les reflets agressifs des néons industriels des hangars d'animalerie. | **Co-conception Matérielle & Meuble Métal :** Travail direct avec le fabricant de mobilier (hauteur d'écran 24-32", angle d'inclinaison antireflet, contrastes élevés et touch-targets larges). | **Socle de Delivery Industriel :** Livrables UI haute-fidélité, spécifications ergonomiques meuble et parcours utilisateurs transmis clés en main aux équipes de build. |

##### 4. Métriques Clés & Impact Vérifiable

| Métrique | Valeur / Indicateur | Rôle dans l'Argumentation de Josselin |
| :--- | :--- | :--- |
| **Temps de Diagnostic** | `< 90 secondes` | Preuve d'un élagage UX drastique : passer d'un traité vétérinaire indigeste à une recommandation instantanée. |
| **Gamme Couverte** | `200+ références` | Maîtrise de la complexité de l'offre rendue intelligible pour le grand public sans perte de rigueur scientifique. |
| **Adoption Pilote** | `100% Validé Terrain` | Validation empirique en animaleries réelles auprès des propriétaires d'animaux et des vendeurs partenaires. |
| **Financement Obtenu** | `Fonds Corporate Venture` | Impact direct sur la prise de décision stratégique : le prototype a débloqué le budget d'industrialisation nationale. |

---

#### B. Temps 2 : L'Exploration Approfondie & Storyboard Séquentiel (Deep Dive en 4 Étapes)

##### 📖 Le Contexte & Le Reality Check
Royal Canin possède une réputation scientifique d'excellence mondiale auprès des éleveurs et des vétérinaires. Cependant, sur le point de vente physique (animaleries spécialisées de périphérie), cette expertise se retourne contre la marque : un linéaire massif de 15 mètres de long exposant plus de 200 sacs aux emballages presque identiques. Si le vendeur de l'animalerie est occupé en caisse ou en conseil ailleurs, le client, submergé par des termes biochimiques hermétiques (L.I.P., hydrolysat de protéines, teneur en phosphore), hésite quelques instants et quitte le rayon sans acheter, ou se rabat sur un produit basique.
La mission confiée à ekino x MFG Labs sous le lead de Josselin : concevoir le service phygital et l'interface tactile intégrée au mobilier pour convertir les visiteurs hésitants en linéaire sans cannibaliser le rôle du vendeur.

---

##### 📍 Étape 01 : Immersion Terrain & Mystery Shopping en Animalerie

> **Le Propos Stratégique :**
> Sortir des hypothèses de bureau pour éprouver la réalité physique des clients en situation d'achat : observer les gestes, chronométrer l'hésitation et cartographier les moments précis de rupture de conversion devant le linéaire.

**Texte Rédigé pour le Site / Portfolio :**
> On ne conçoit pas un dispositif phygital dans le calme aseptisé d'une agence parisienne. J'ai conduit une phase d'immersion anonyme (*mystery shopping*) dans plusieurs animaleries de grande surface pour observer les comportements réels. 
> Le constat a été sans appel : face au mur de croquettes, le temps moyen d'hésitation avant abandon était inférieur à deux minutes. Les clients prenaient les paquets, plissaient les yeux pour déchiffrer des pavés de texte minuscules au dos, puis reposaient le sac par peur de commettre une erreur nutritionnelle fatale pour leur animal. Quant aux vendeurs du magasin, ils percevaient souvent les initiatives digitales précédentes comme des gadgets concurrents menaçant leur statut de prescripteur. Cette immersion a posé notre cahier des charges : le dispositif devait agir comme un guide express ultra-bienveillant, et valoriser le vendeur plutôt que de chercher à le remplacer.

* **Livrables Clés de l'Étape :** Cartographie du parcours client en animalerie (Customer Journey Map in-situ), Matrice des points de friction en linéaire, Synthèse d'observation terrain et verbatim vendeurs.
* **Artefact Preuve en Regard :** Schéma du parcours physique en magasin (Zone d'hésitation ➔ Déclencheur tactile ➔ Localisation en rayon).

---

##### 📍 Étape 02 : Alignement Multidisciplinaire & Design Sprint à Distance (5 Jours)

> **Le Propos Stratégique :**
> Réconcilier la rigueur des vétérinaires scientifiques avec les impératifs de conversion marketing dans un format condensé à distance pour forcer des arbitrages radicaux sur le moteur de diagnostic.

**Texte Rédigé pour le Site / Portfolio :**
> Le principal écueil d'une marque scientifique comme Royal Canin est de vouloir poser 25 questions cliniques avant de recommander un sac. J'ai cadré et animé un **Design Sprint à distance de 5 jours** réunissant autour de la même table virtuelle les vétérinaires nutritionnistes, les directeurs marketing et les développeurs.
> Notre challenge d'atelier : élaguer impitoyablement l'arbre décisionnel pour aboutir à un diagnostic fiable en 3 étapes clés et moins de 90 secondes.
> 1. *Qui est l'animal ?* (Chien / Chat, race spécifique ou type morphologique).
> 2. *Quel est son stade de vie ?* (Chiot / Chaton, Adulte, Senior).
> 3. *Quels sont ses besoins particuliers ?* (Stérilisation, sensibilité digestive, gestion du poids, pelage).
> En formalisant cet entonnoir, nous avons prouvé aux scientifiques qu'un filtrage progressif en 3 clics permettait d'isoler la formule idéale parmi 200 références sans compromettre la sécurité médicale de l'animal.

* **Livrables Clés de l'Étape :** Arbre de décision nutritionnel simplifié, Protocole d'atelier Design Sprint Miro, User Flows validés par le collège scientifique Royal Canin.
* **Artefact Preuve en Regard :** Matrice de l'arbre de décision en entonnoir (Race ➔ Âge ➔ Sensibilité ➔ Produit Cible).

---

##### 📍 Étape 03 : Co-conception Matérielle & Ergonomie de Borne Publique

> **Le Propos Stratégique :**
> Travailler main dans la main avec le fabricant du mobilier en tôle d'acier pour que l'interface tactile et le meuble physique ne fassent qu'un, en respectant les contraintes sévères d'éclairage néon et d'accessibilité PMR.

**Texte Rédigé pour le Site / Portfolio :**
> La force de mon profil hybride (Design UX $\times$ Ingénierie Arts et Métiers) a pris tout son sens lors du dialogue avec les designers industriels et les fabricants du meuble métallique. Une borne en magasin subit des contraintes physiques violentes : les tubes fluorescents industriels au plafond génèrent des reflets aveuglants sur les écrans plats, et la diversité des usagers impose une conformité totale avec les normes PMR (accessibilité en fauteuil roulant et debout).
> J'ai prescrit l'angle d'inclinaison optimal de la dalle tactile 24–32 pouces pour neutraliser la réverbération lumineuse, dimensionné des zones de frappe tactiles généreuses (> 48 px) pour compenser les touchers hésitants, et calibré une palette d'interface à fort contraste répondant aux critères WCAG AA sous forte intensité lumineuse.
> Enfin, la chute du parcours logiciel a été connectée à la réalité du linéaire : l'écran n'indique pas seulement la référence, il affiche une représentation visuelle du rayon signalant par une zone lumineuse l'étagère exacte où trouver le paquet à portée de main.

* **Livrables Clés de l'Étape :** Spécifications ergonomiques conjointes logiciel/mobilier, Kit UI tactile haute visibilité (touch targets larges, contrastes néons), Maquettes haute-fidélité des écrans de diagnostic et de guidage en rayon.
* **Artefact Preuve en Regard :** Vue de l'écran tactile intégré au meuble et schéma de guidage lumineux vers l'étagère physique.

---

##### 📍 Étape 04 : Expérimentation en Magasins Pilotes & Levée de Fonds Venture Interne

> **Le Propos Stratégique :**
> Démontrer l'efficacité opérationnelle du dispositif sur le terrain réel pour débloquer le financement d'un fonds d'investissement corporate venture dédié au déploiement industriel national.

**Texte Rédigé pour le Site / Portfolio :**
> Le prototype complet (meuble physique fonctionnel + interface logicielle interactive) a été déployé en conditions réelles dans un panel d'animaleries pilotes. 
> Les retours qualitatifs et quantitatifs ont immédiatement validé la thèse de départ : le temps de parcours moyen s'est stabilisé sous la barre des 90 secondes, les abandons de rayon ont chuté drastiquement sur les gammes expertes, et les vendeurs ont spontanément utilisé la borne comme support pour guider les clients indécis sans avoir à mémoriser les 200 fiches techniques.
> La restitution de ce démonstrateur auprès du management exécutif et des investisseurs internes du groupe a été le levier décisif : le projet a décroché le financement d'un **fonds corporate venture interne**, octroyant le budget nécessaire pour lancer l'industrialisation à grande échelle du réseau de distribution.

* **Livrables Clés de l'Étape :** Bilan qualitatif des tests in-situ en magasins pilotes, Rapport d'arbitrage ROI pour le COMEX, Kit de passage de témoin aux équipes d'industrialisation matérielle et logicielle.
* **Artefact Preuve en Regard :** Badge d'homologation du prototype pilote et cartouche des métriques de validation terrain.

---

#### C. Les 4 Tiroirs de Maîtrise Produit (Senior Depth)

* **Tiroir 1 : Ergonomie Phygitale & Éclairage Hostile**
  Compréhension poussée de l'ergonomie physique d'un kiosk public : angle de regard, hauteur d'implantation pour accessibilité universelle (PMR / fauteuil roulant), compensation des reflets néons par l'orientation de la dalle et choix d'une typographie lisible à 1,50 mètre de distance.
* **Tiroir 2 : Vulgarisation Scientifique & Moteur d'Aide au Choix**
  Capacité à dialoguer avec des spécialistes médicaux et nutritionnistes pour désosser un corpus de données denses et en extraire un tunnel de prescription ultra-fluide sans dénaturer la précision de la recommandation.
* **Tiroir 3 : Synergie Distributeurs & Conduite du Changement**
  Penser le produit digital non pas comme un substitut déshumanisant, mais comme un assistant bienveillant qui valorise les équipes de vente sur le terrain et désamorce les craintes de cannibalisation de l'emploi en magasin.
* **Tiroir 4 : Recul Critique de Senior & Scalabilité**
  Anticipation des écueils de la maintenance opérationnelle d'un parc de bornes : prévoir un mode dégradé hors-ligne en cas de coupure Wi-Fi du hangar, un système d'alerte sur les ruptures de stock en rayon, et une interface d'administration ultra-simple pour la mise à jour des packagings.

---

#### D. La Transposition Métier (« The So What? »)

* **Résonance Directe avec le Hardware Connecté & le Retail POS :**
  - **Pour Koralplay :** Maîtrise identique des contraintes d'interfaces tactiles d'équipements publics ou semi-publics (terminaux mobiles Android POS durcis Sunmi/Pax, bornes en kiosque de rue, utilisation sous soleil direct ou lumière agressive, rapidité d'exécution sans friction pour des usagers pressés).
  - **Pour les acteurs IoT & Hardware (Atlantic, Beem Energy, Horanet, LivingPackets) :** Preuve tangible d'une capacité à co-concevoir l'expérience globale avec les ingénieurs hardware et les designers de produit physique sans cloisonnement logiciel/matériel.

---

#### E. Cartographie & Inventaire des Visuels Clés — Royal Canin

| Moment du Récit | Visuel Recommandé en Regard | Statut & Source | Action / Suggestion à Josselin |
| :--- | :--- | :--- | :--- |
| **Hero / Scan (Temps 1)** | Photo ou rendu 3D de la borne intégrée dans le meuble métallique en animalerie | `[DISPONIBLE EN DOCUMENTATION]` 🟡 | Présent dans les archives du projet Royal Canin. |
| **Marque & Identité** | Sticker officiel Royal Canin découpé vinyle | `[DISPONIBLE & EXTRAIT]` ✅ | `Portfolio/code/public/assets/stickers/sticker_client_royal_canin.svg` |
| **Méthodologie (Étape 1)** | Schéma du parcours d'achat en linéaire (Hésitation ➔ Borne ➔ Rayon) | `[FORMALISÉ DANS LE CADRE]` ✅ | Diagramme vectoriel stylisé Olin.os. |
| **Design Sprint (Étape 2)** | Entonnoir décisionnel 3 étapes (Race ➔ Âge ➔ Sensibilité) | `[SPÉCIFIÉ]` ✅ | Schéma conceptuel du moteur de recommandation. |
| **Ergonomie (Étape 3)** | Wireframe de l'écran tactile Kiosk (touch-targets larges, contraste élevé) | `[DISPONIBLE EN ARCHIVES]` 🟡 | Extraits des maquettes UI de la borne. |
| **Validation (Étape 4)** | Badge d'homologation pilote & validation du fonds corporate venture | `[INTÉGRÉ DANS LE STAR]` ✅ | Composant d'impact dans le Master Deck. |

---

## 🎯 Synthèse de Posture pour l'Entretien avec Peter

* **Posture :** **Senior Product Designer & Builder** (Double diplôme EDNA MDes UX $\times$ ENSAM Ingénierie, 7 ans d'expérience grands comptes ekino x MFG Labs $+$ culture entrepreneuriale de livraison rapide).
* **Ce qui ressort de cette présentation en 2 temps :**
  1. Vous délivrez une synthèse percutante en 90 secondes avec le format One-Pager (Challenges, Approche, Résultat).
  2. Vous possédez la matière textuelle et méthodologique rédigée pour chaque étape dès que le Lead souhaite creuser.
  3. Vous assumez vos choix avec lucidité et recul critique (ce qui a fonctionné, ce que vous feriez autrement).
  4. Vous transposez immédiatement chaque projet aux enjeux de scalabilité et de rigueur de Koralplay.
