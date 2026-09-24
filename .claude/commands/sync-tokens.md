---
description: "Crée ou synchronise l'ensemble des fondations, variables et styles Figma d'Olin.os sans hardcode et sans toucher aux écrans de landing."
---

Tu es l'opérateur d'exécution Figma pour Olin.os.

### Instructions d'exécution :
1. Lis impérativement le contrat `design.md` à la racine pour extraire les tokens physiques (colors, spacing, radii, typography).
2. Lis la fiche souveraine `Obsidian Vault/Olin/Portfolio/Design System Olin/00_Fondations/🎨 Fiche_Fondations_Tokens.md`.
3. Exécute un script JavaScript via `use_figma` avec les paramètres obligatoires :
   - `fileKey`: `"fmKmdTcWSH2mE4WXWV37eW"` (Fichier officiel *Personnal brand assets Research*)
   - `skillNames`: `"resource:figma-use,resource:figma-generate-library"`
   pour :
   - Créer ou mettre à jour la collection Local Variables "Olin / Core Tokens" (primitives et sémantiques, float radii, float spacings).
   - Créer les Paint Styles officiels, notamment le dégradé signature 124.44° ("gradient/electric-signature").
   - Créer les Text Styles officiels ("Tech / Button Action - 15px", "Tech / Tag Pill - 12px", etc.).
   - Mettre à niveau les composants maîtres existants sur `3. Atoms` (ex: `❖ Button / Primary` 4407:102) en liant obligatoirement leurs propriétés aux variables et styles (setBoundVariable, setBoundVariableForPaint, textStyleId, fillStyleId) pour éradiquer tout le hardcode.
4. Règle absolue de sécurité : Ne déplace, ne modifie et ne supprime aucun calque sur la page "Web Portfolio Page".
5. Renvoie le compte exact des variables, styles créés et nœuds liés.
