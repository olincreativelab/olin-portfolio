---
name: "Olin.os Design System"
version: "1.0.0"
collection: "Olin / Core Tokens"
figma_file_key: "fmKmdTcWSH2mE4WXWV37eW"
figma_page_atoms: "3. Atoms"
figma_page_molecules: "4. Molecules"
figma_page_organisms: "5. Organisms"
figma_page_landing: "Web Portfolio Page"

tokens:
  colors:
    primitive:
      blue_500: "#4E4BF5"
      blue_600: "#4338CA"
      blue_400: "#3B82F6"
      slate_950: "#01050F"
      slate_800: "#1E293B"
      slate_600: "#334155"
      slate_400: "#626D82"
      glacier_100: "#F3F5FB"
      glacier_200: "#EDF2F9"
      glacier_300: "#E2E8F0"
      white: "#FFFFFF"
      neon_mint: "#01EEBA"
      cyan_doodle: "#38BDF8"
      amber_solar: "#F59E0B"
      sticky_yellow: "#FEF9C3"
      sticky_yellow_border: "#FDE047"
      sticky_yellow_ink: "#713F12"
      sticky_pink: "#FCE7F3"
      sticky_pink_border: "#F472B6"
      sticky_pink_ink: "#831843"
      sticky_cyan: "#E0F2FE"
      sticky_cyan_border: "#38BDF8"
      sticky_cyan_ink: "#0C4A6E"

    semantic:
      interactive_cta_bg: "blue_500"
      interactive_cta_hover: "blue_600"
      interactive_cta_text: "white"
      surface_canvas: "glacier_100"
      surface_card: "white"
      surface_card_tint: "#EEF4FF"
      text_primary: "slate_950"
      text_secondary: "slate_600"
      text_muted: "slate_400"
      border_subtle: "glacier_300"
      status_live: "neon_mint"

  spacing:
    space_4: 4
    space_8: 8
    space_12: 12
    space_16: 16
    space_20: 20
    space_24: 24
    space_32: 32
    space_48: 48
    space_64: 64

  radii:
    none: 0
    xs: 2
    sm: 4
    tag: 6
    btn: 8
    lg: 12
    card: 20
    hero: 28
    pill: 9999

  typography:
    display:
      family: "Kode Mono"
      weight: 700
      size: 48
      line_height: 1.1
    title:
      family: "Kode Mono"
      weight: 600
      size: 24
      line_height: 1.2
    body:
      family: "Geologica"
      fallback: "Inter"
      weight: 400
      size: 15
      line_height: 1.5
    button:
      family: "Kode Mono"
      weight: 600
      size: 15
      line_height: 1.0
    tag:
      family: "Kode Mono"
      weight: 500
      size: 12
      line_height: 1.2
    caption:
      family: "Kode Mono"
      weight: 400
      size: 10
      line_height: 1.2

  components:
    atoms:
      button_primary:
        name: "❖ Button / Primary"
        node_id: "4407:102"
        page: "3. Atoms"
        dimensions: { width: 208, height: 44 }
        hit_target_min: 44
        properties:
          State:
            type: "VARIANT"
            values: ["Default", "Hover", "Pressed", "Disabled"]
          Label:
            type: "TEXT"
            id: "Label#4439:0"
            default: "on en discute ?"
            binding: "Content > Text.characters"
          Show_Icon:
            type: "BOOLEAN"
            id: "Show Icon#4439:5"
            default: false
            binding: "Content > Leading Icon.visible"
          Icon:
            type: "INSTANCE_SWAP"
            id: "Icon#4439:10"
            default: "experimental / bulb"
            binding: "Content > Leading Icon.mainComponent"

      link_action:
        name: "❖ Link"
        node_id: "4327:152330"
        page: "3. Atoms"
        dimensions: { width: 159, height: 44 }
        hit_target_min: 44
        properties:
          State:
            type: "VARIANT"
            values: ["Default", "Hover", "Pressed", "Focus"]
          Label:
            type: "TEXT"
            default: "plus de détails"
            binding: "Label (characters)"
          Show_Arrow:
            type: "BOOLEAN"
            default: true

      tag_status_pill:
        name: "❖ Tag / Status Pill"
        page: "3. Atoms"
        dimensions: { height: 28 }
        properties:
          Tone:
            type: "VARIANT"
            values: ["Live Green", "Electric Blue", "Purple", "Neutral Slate"]
          Format:
            type: "VARIANT"
            values: ["Pill", "Tag"]
          Label:
            type: "TEXT"
            default: "DISPONIBLE EN AVRIL"
          Show_Dot:
            type: "BOOLEAN"
            default: true

    molecules:
      window_header:
        name: "❖ Window Header"
        page: "4. Molecules"
        dimensions: { height: 42 }
        slots:
          left: { default: "❖ Traffic Lights", type: "INSTANCE_SWAP" }
          center: { default: "❖ Window Title Capsule", type: "INSTANCE_SWAP" }
          right: { default: "❖ Tag / Status Pill", type: "INSTANCE_SWAP" }
        properties:
          Theme:
            type: "VARIANT"
            values: ["Studio Light", "Terminal Dark"]
          Border_Radius:
            type: "VARIANT"
            values: ["Top Rounded", "Flush Sharp"]
          Window_Title:
            type: "TEXT"
            default: "window.os"
          Show_Left_Slot:
            type: "BOOLEAN"
            default: true
          Show_Right_Slot:
            type: "BOOLEAN"
            default: true

      pinned_sticky_note:
        name: "❖ Pinned Sticky Note"
        page: "4. Molecules"
        dimensions: { width: 340 }
        properties:
          Color:
            type: "VARIANT"
            values: ["Acid Yellow", "Cyber Mint", "Lilas Pink", "Studio White"]
          Tilt:
            type: "VARIANT"
            values: ["Tilted", "Straight"]
          Note_Title:
            type: "TEXT"
            default: "// NOTE DE TERRAIN & VÉRITÉ D'ATELIER"
          Show_Title:
            type: "BOOLEAN"
            default: true
          Tag_Label:
            type: "TEXT"
            default: "RENAULT TECHCENTER"
          Show_Tag:
            type: "BOOLEAN"
            default: true
          Note_Body:
            type: "TEXT"
          Link_Label:
            type: "TEXT"
            default: "voir le jalon complet ↗"
          Show_Link:
            type: "BOOLEAN"
            default: true
          Show_Tape:
            type: "BOOLEAN"
            default: true

      picture_slot:
        name: "❖ Picture slot"
        node_id: "4318:140409"
        page: "4. Molecules"
        properties:
          Ratio:
            type: "VARIANT"
            values: ["16:9", "4:3", "1:1", "Free"]
          Show_Grain:
            type: "BOOLEAN"
            default: true
          Frame_Style:
            type: "VARIANT"
            values: ["Raw", "Window Card", "Tape Pinned"]
---

# 🤖 Olin.os Machine-Readable Design Contract (`design.md`)

> **Instruction Critique pour l'Agent IA (Claude / Antigravity / Cursor) :**  
> Ce document est la règle d'inférence absolue pour toute modification, génération ou audit de composants et de code dans Olin.os.

---

## 🚫 1. Les Contraintes Négatives Inviolables (DON'Ts)

- ❌ **DON'T (Zéro Casse Landing) :** Ne JAMAIS modifier les coordonnées `(x, y)`, la largeur, ou les conteneurs parents des maquettes existantes de la landing page sur `Web Portfolio Page`.
- ❌ **DON'T (Zéro Suppression Brutale) :** Ne JAMAIS supprimer de frame ou d'exploration sans la déplacer préalablement dans une section ou page `📦 Archives`.
- ❌ **DON'T (Zéro Couleur Hex en Dur) :** Ne JAMAIS injecter de code couleur hexadécimal arbitraire non déclaré dans le YAML `tokens.colors`.
- ❌ **DON'T (Zéro Frame Vide pour les Icônes) :** Ne jamais insérer un Frame vide `Frame 1` comme placeholder d'icône. Toujours instancier un vrai composant icône de la bibliothèque d'atomes.
- ❌ **DON'T (Zéro Dépassement Hit-Target) :** Ne jamais concevoir de composant interactif tactile d'une hauteur inférieure à 44px (`minHeight: 44`).
- ❌ **DON'T (Zéro Chevauchement) :** INTERDICTION ABSOLUE de positionner des composants par-dessus des éléments existants. TOUJOURS analyser d'abord tous les éléments de la page (`atomsPage.children`), calculer le `maxY` (point le plus bas), puis positionner les nouveaux éléments APRÈS avec une marge de sécurité minimale de 200px. Utiliser des SECTIONS Figma pour organiser visuellement les composants par type (01 · Button, 02 · Link, etc.).

---

## ✅ 2. Les Règles d'Assemblage Obligatoires (DOs)

- ✅ **DO (Variables Binding) :** Toujours lier les propriétés de couleur via `setBoundVariableForPaint` et les dimensions/radii via `node.setBoundVariable`.
- ✅ **DO (Sync Reflex) :** Toute modification d'un composant maître sur `3. Atoms` DOIT s'accompagner de la mise à jour immédiate de sa planche de spécification (`📄 Spec - [Nom]`) et de sa fiche Obsidian (`📄 Fiche_Composant_[Nom].md`).
- ✅ **DO (Preuve Visuelle) :** Sur la planche de spécification Figma, au moins une instance de test DOIT avoir `Show Icon = true` pour prouver visuellement le fonctionnement du slot.
- ✅ **DO (Atomic Dispatcher) :** Ranger chaque élément au bon niveau :
  - `3. Atoms` pour les briques élémentaires autonomes (boutons, pills, tags, traffic lights).
  - `4. Molecules` pour les assemblages d'atomes (headers de fenêtre, blocs bento, barres de nav).
  - `5. Organisms` pour les sections complètes (Hero, Pop-up Modal, Finder, Footer).
