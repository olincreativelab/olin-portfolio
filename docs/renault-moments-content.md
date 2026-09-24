# 🚗 Architecture de la Page Projet : Renault Group (DCX) — Renault Moments & Collections

> **Rôle du Document :** Gabarit de référence d'une page projet « Deep Dive » pour un **Senior Product Designer & Builder**.  
> **Objectif :** Présenter les textes définitifs, les visuels en regard (croquis, blueprints, prototypes 3D, cockpit OpenR, tests usine), les composants d'interface et les arguments clés pour captiver un Lead Designer (Peter De Meurichy) ou un Head of Product.

---

## 🧭 Le Principe de Composition : L'Architecture Séquentielle à Double Vitesse (Progressive Disclosure)

Pour garantir une consommation immédiate sur mobile comme sur desktop sans saturation cognitive, la page abandonne le parallélisme rigide en 2 colonnes pour adopter une **narration séquentielle progressive en 4 niveaux** rythmée par **4 moments-clés de conversion (CTAs)** :

```text
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 1 : L'EXECUTIVE CARD (Le One-Pager Synthétique — Scan 90s)             │
│ • Desktop : Split 50/50 compact (Métadonnées + Matrice 3x3 ↔ Mockup Cockpit)   │
│ • Mobile : Visuel Cockpit en tête + Cartouche & 3 puces swipeables             │
│ 🎯 MOMENT CTA 1 : [⚡ Scanner la synthèse ↓] • [📥 Télécharger One-Pager PDF]   │
│ 🎯 MOMENT CTA 2 (Fin de Scan) : [Discuter du projet ↗] ou [Creuser la méthode ↓│
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 2 : LE STEPPER DE PROGRESSION (L'Aiguillage Narratif)                   │
│ [01. Poser le concept] ➔ [02. Posture DCX] ➔ [03. HMI Bimodale] ➔ [04. Tests]  │
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 3 : LE DEEP DIVE EN FORMAT PLEINE LARGEUR (Modular Storyboard)          │
│ • Chaque grand acte prend tout l'étage pour donner 100% d'espace aux visuels   │
│ • Récit d'ingénierie et d'arbitrage en texte respirant                         │
│ • Artefacts visuels à haute résolution (Blueprint 360°, Écrans OpenR, Usine)   │
│ • Pinned Sticky Note d'atelier d'artisan pour l'anecdote de terrain (#48)      │
│ 🎯 MOMENT CTA 3 : [Tester la simulation cockpit ↗] • [Ouvrir le Figma live ↗] │
└───────────────────────────────────────┬────────────────────────────────────────┘
                                        │
                                        ▼
┌────────────────────────────────────────────────────────────────────────────────┐
│ NIVEAU 4 : LES 4 TIROIRS DE MAÎTRISE SENIOR & CONVERSION FINALE                │
│ • 1. Gouvernance SAFe • 2. Ergonomie HMI • 3. Reality Check • 4. Recul Senior  │
│ • Desktop : Grille Bento 2x2 • Mobile : 4 accordéons repliés (4 lignes)        │
│ • Transposition Stratégique pour l'Entreprise Cible (Koralplay / SaaS B2B)     │
│ 🎯 MOMENT CTA 4 : [Planifier un call découverte (15 min) ↗] (Primary 44px)     │
│                   [Explorer le cas suivant : Excibat BTP →] (Lien secondaire)  │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🎬 Déroulé Séquentiel des 6 Actes

---

### 🏛️ ACTE 1 : Le Cartouche d'Identité & L'Accroche Stratégique

#### Colonne Gauche — Texte & Métadonnées
* **Titre :** `Renault Group (DCX) — Renault Moments & Collections`
* **Sous-titre / Promesse :** *De la vision prospective 5-10 ans au cockpit prototype testé en usine : inventer les routines de vie à bord des véhicules électriques connectés.*
* **Grille de Métadonnées (Style `Kode Mono` dans une capsule d'atelier) :**
  ```text
  // Cartouche Projet
  Client / Cadre   : Renault Group • Direction Digital Customer Experience (DCX)
  Rôle             : Lead UX Designer & Strategist (ekino x MFG Labs)
  Équipe           : 1 PM Renault, 4 Développeurs Embarqués AAOS, Experts Ergonomie HMI
  Typologie        : Design de Service Prospectif + MVP Embarqué Automobile
  Stack & Normes   : Android Automotive OS (AAOS), Écran OpenR, Driver Distraction Rules
  ```
* **Capsules d'Impact (Badges de contraste fort) :**
  * `🟢 Validé par le COMEX Renault Group`
  * `🏎️ Testé en usine sur véhicule prototype réel`
  * `⚡ Standard d'interaction pour la plateforme OpenR`

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** L'écran panoramique en "L" du système **OpenR Renault** (écran combiné bord + écran central vertical 12") affichant l'interface sombre de *Renault Moments*.
* **Éléments graphiques :** Le losange moderne Renault, le sticker Android Automotive OS et une vue perspective du cockpit.
* **Recommandation Design :** Cadrage 16:9 cinématographique avec reflet d'habitacle et lumière d'ambiance violette/bleue feutrée.

> **💡 Ce qu'il faut dire à Peter (Koralplay) en entretien :**
> *« Ce projet prouve ma capacité à concevoir pour des environnements critiques où une erreur d'ergonomie ne se traduit pas par un simple clic manqué, mais par un danger physique réel pour le conducteur. »*

---

### ⚡ ACTE 2 : La Tension Industrielle & Le Tournant "Renaulution"

#### Colonne Gauche — Texte Narratif
* **Le Contexte de Rupture :**
  > Dans le cadre du plan stratégique « Renaulution » porté par Luca de Meo, Renault Group devait opérer sa bascule historique : passer du statut de constructeur automobile matériel classique à celui d'opérateur de services et de technologies connectées.
* **Le Vrai Problème Produit :**
  > Avant mon arrivée, les équipes techniques avaient développé un premier démonstrateur : un empilement lourd et austère de fonctions d'ingénieurs. Les écrans étaient saturés de menus imbriqués sans aucune cohérence de marque. La tentation interne était d'ajouter des dizaines d'applications tierces isolées, transformant le cockpit en un smartphone géant décorrélé de la conduite.
* **Le Défi :**
  > Définir une **expérience signature unifiée à horizon 5-10 ans**, capable d'aligner la direction générale sur une vision inspirante, tout en étant immédiatement déclinable en un MVP codable par les équipes logicielles.

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** La cartographie des systèmes connectés de la vision DCX opposant l'ancien paradigme (*empilement d'applications isolées*) au nouveau paradigme (*orchestration contextuelle unifiée*).
* **Recommandation Design :** Schéma fonctionnel contrasté noir et blanc avec accents bleu électrique, annoté avec des flèches manuscrites d'atelier.

> **💡 Ce qu'il faut dire à Peter (Koralplay) :**
> *« En équipe produit, le réflexe paresseux est d'empiler des fonctionnalités les unes après les autres. Mon rôle chez Renault a été de refuser l'effet catalogue pour bâtir une expérience systémique où chaque élément répond à un état de vie de l'utilisateur. »*

---

### 🔮 ACTE 3 : La Découverte des Micro-Moments & La Scénarisation de Vie (Discovery)

#### Colonne Gauche — Texte Narratif
* **Le Saut Conceptuel :**
  > Avec l'avènement du véhicule électrique et autonome, la voiture cesse d'être un simple outil de déplacement : elle devient une extension de l'espace de vie domestique et professionnel.
* **La Cartographie des 3 Micro-Moments Clés :**
  > J'ai structuré la vision prospective autour de trois moments de vie charnières :
  > 1. **`Home-to-Car` (L'anticipation) :** Pré-conditionnement thermique de l'habitacle et de la batterie, calcul prédictif de charge selon l'agenda du jour.
  > 2. **`On-the-Road` (L'adaptation) :** Ajustement dynamique de l'environnement selon le contexte (routine de décompression après une journée stressante, mode concentration, ou voyage familial apaisé).
  > 3. **`Smart Charging` (La valeur du temps arrêté) :** Transformer les 25 minutes de recharge sur autoroute en une bulle de productivité ou de relaxation plutôt qu'en attente subie.
* **L'Artefact Stratégique :**
  > Réalisation d'un **Service Blueprint à 360°** et d'un **Storyboard narratif immersif** mettant en scène la symbiose entre le smartphone de l'utilisateur, l'infrastructure de recharge et le cockpit du véhicule.

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** Extrait du **Storyboard narratif de vie à bord** et schéma séquentiel du parcours *Home-to-Car $\rightarrow$ On-the-road $\rightarrow$ Charging*.
* **Recommandation Design :** Montage façon planche de cadrage cinéma, combinant croquis d'usage, silhouettes d'utilisateurs et écrans d'état correspondants.

> **💡 Ce qu'il faut dire à Peter (Koralplay) :**
> *« La prospective ne vaut rien si elle reste abstraite. Le storyboard narratif a été l'outil décisif qui a permis de faire comprendre au COMEX que la valeur ne résidait pas dans la taille de l'écran, mais dans la pertinence du moment contextuel. »*

---

### 🛡️ ACTE 4 : Les Arbitrages de Sécurité Routière & Le Scoping Lean UX

#### Colonne Gauche — Texte Narratif
* **La Confrontation Ergonomie $\leftrightarrow$ Marketing :**
  > Alors que le marketing souhaitait multiplier les widgets météo, les notifications de flux et les animations complexes, j'ai posé les garde-fous de la sécurité routière.
* **Les 2 Arbitrages d'Ergonomie HMI Majeurs :**
  > 1. **La Règle d'Or des 2 Secondes (*Driver Distraction Guidelines*) :** Aucune action en cours de conduite ne doit mobiliser le regard plus de 2 secondes cumulées. J'ai surdimensionné les cibles tactiles (**touch targets $\ge 12$ mm**) et banni tout menu déroulant profond.
  > 2. **Le Mode Bimodal Intelligent (Arrêt vs Roulage) :**
  >    * *Véhicule en mouvement :* Élagage radical de l'UI. Seules les commandes d'ambiance en 1 geste et le retour sonore discret restent actifs.
  >    * *Véhicule à l'arrêt :* Déploiement de toute la richesse d'exploration (paramétrage fin des éclairages LED, contenus enrichis).
* **Le Découpage du MVP "Collections" :**
  > Pour permettre aux développeurs de sortir un démonstrateur viable en 8 semaines, j'ai réduit le périmètre à un **Golden Path unique** : l'activation en 1 clic d'une routine d'ambiance multisensorielle synchronisant musique, climatisation et éclairage intérieur.

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** Comparatif visuel de l'interface OpenR en **Mode Roulage (ultra-épuré, contrastes forts)** versus **Mode Arrêt (carte d'exploration complète)**, avec mise en évidence des zones tactiles ergonomiques.
* **Recommandation Design :** Annoter visuellement les cibles tactiles de 12 mm avec des cercles de contact et des indicateurs de temps de regard.

> **💡 Ce qu'il faut dire à Peter (Koralplay) :**
> *« Face aux parties prenantes qui veulent tout afficher, le rôle d'un Senior Designer est d'être le gardien intransigeant de la charge cognitive. Dans l'automobile comme dans le betting ou la fintech, la clarté sous stress est la priorité absolue. »*

---

### 💻 ACTE 5 : L'Ingénierie HMI & Le Delivery Embarqué (Android Automotive OS)

#### Colonne Gauche — Texte Narratif
* **Le Design System Automobile OpenR :**
  > Création d'une bibliothèque de composants spécifiques sous Figma adaptée aux contraintes strictes d'Android Automotive OS (AAOS) :
  > * Gestion native de la **luminance jour/nuit** pour éviter l'éblouissement nocturne sans compromettre la lisibilité en plein soleil.
  > * Palette sombre signature Renault, typographie à fort empattement horizontal et contrastes WCAG AAA.
* **Le Pairing Technique avec les Ingénieurs Software :**
  > Travail quotidien au coude-à-coude avec l'équipe de développement embarqué :
  > * Cartographie des événements du **Bus CAN du véhicule** (détection de vitesse nulle, ouverture des portes, branchement du câble de charge) traduits en déclencheurs d'états d'interface.
  > * Rédaction des spécifications d'animation et de transitions fluides entre combiné d'instruments et écran central.

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** Planche du **Design System AAOS** montrant les variantes d'états des cartes d'ambiance (`Default`, `Focused`, `Active`, `Driving Mode`) et l'arborescence des tokens d'éclairage d'habitacle.
* **Recommandation Design :** Présenter les composants avec leur nomenclature de tokens machine-readable (`--color-hmi-surface`, `--radius-cockpit: 16px`).

> **💡 Ce qu'il faut dire à Peter (Koralplay) :**
> *« Un bon designer produit ne conçoit pas pour un écran abstrait : il conçoit pour le système hôte. Comprendre les contraintes d'Android Automotive OS et les signaux de capteurs physiques m'a permis de livrer des spécifications que les ingénieurs ont intégrées sans friction. »*

---

### 🏆 ACTE 6 : La Présentation COMEX, L'Épreuve de l'Usine & La Rétrospective

#### Colonne Gauche — Texte Narratif
* **La Validation Décisionnelle au Sommet :**
  > Présentation de la vision stratégique et des démonstrateurs interactifs devant les membres du **COMEX de Renault Group**. La clarté de la démonstration a permis d'arbitrer les priorités de la roadmap et de débloquer les budgets d'investissement R&D pour l'industrialisation des services connectés.
* **L'Épreuve du Réel : Essais sur Véhicule Prototype en Usine :**
  > Déploiement de l'application MVP directement sur le système multimédia d'un véhicule de série prototype au sein des centres techniques Renault.
  > * Tests ergonomiques réels assis au volant : validation de l'accessibilité physique des boutons, des reflets lumineux et de la réactivité sous différentes conditions d'éclairage.
* **La Rétrospective de Senior (« Ce que je ferais différemment aujourd'hui ») :**
  > *« Si je devais reconduire ce projet aujourd'hui avec l'outillage moderne, je brancherais un simulateur de volant physique directement sur Figma et le code via un serveur WebSocket local. Cela permettrait de mesurer les temps de réaction musculaires et la distraction visuelle dès la première semaine, avant même le premier passage en usine. »*

#### Colonne Droite — Visuel en Regard
* **Visuel à intégrer :** Photo d'immersion du test utilisateur **assis dans le prototype en usine**, montrant la main du conducteur interagissant avec l'écran OpenR allumé dans l'habitacle.
* **Recommandation Design :** Mettre en regard la photo brute in situ en usine et la slide de présentation finale validée en COMEX pour souligner le grand écart maîtrisé entre stratégie exécutive et réalité de production.

> **💡 Ce qu'il faut dire à Peter (Koralplay) :**
> *« Ce cas illustre ma zone de confort : être capable de tenir la barre d'une vision prospective devant des dirigeants de haut niveau, et l'après-midi même d'enfiler des chaussures de sécurité pour aller tester la réactivité des composants assis dans un prototype en usine. »*

---

## 🎨 Résumé des Tokens & Styles CSS Recommandés pour cette Page

* **Couleur d'accent du projet :** Jaune Solaire Renaulution (`--color-accent: #FFD200;` ou `#F59E0B`).
* **Couleur de surface sombre :** Noir Habitacle Deep Cockpit (`--surface-cockpit: #0F0C20;`).
* **Typographie Titres :** `Geologica`, 800, majuscules percutantes.
* **Typographie Données Techniques :** `Kode Mono`, 600, espacement de lettre `+0.5px`.
* **Cartouches d'Atelier :** Fond sombre ou blanc glacier, bordures nettes `2px`, ombre offset *hard shadow*.

---

*Document de référence créé dans le cadre de la préparation des soutenances et de l'intégration dans le portfolio Olin.os.*
