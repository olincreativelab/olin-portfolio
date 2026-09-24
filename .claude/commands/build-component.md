---
description: "Synchronise la planche de spécification Figma directement depuis la fiche Markdown d'Obsidian pour N'IMPORTE QUEL composant avec confirmation de cible."
---

Pour synchroniser ou revoir le composant `$ARGUMENTS` (Atome, Molécule ou Organisme) :

1. **Vérification de la cible & Désambiguïsation :**
   Exécute d'abord la détection :
   ```bash
   node Portfolio/scripts/md_to_figma_spec.js "${ARGUMENTS:-Button_Primaire}"
   ```
   - Si la commande réussit (code 0) et que le nom n'était pas explicite à 100% : confirme brièvement à l'utilisateur : *"J'ai identifié la fiche [Nom]. Je lance la mise à jour sur Figma."*
   - Si la commande renvoie un statut `ambiguous` ou `not_found` : **arrête-toi et demande immédiatement confirmation à l'utilisateur** avec la liste des candidats proposés.

2. **Exécution dans Figma :**
   Dès validation, lis le script généré dans `scratch/figma_generated_spec.js` et exécute son contenu via l'outil `use_figma` avec les paramètres :
   - `fileKey`: La clé active définie dans `design.md` (`figma_file_key`, par défaut `fmKmdTcWSH2mE4WXWV37eW` ou l'URL fournie par Josselin)
   - `description`: `"Mise à jour spec board ${ARGUMENTS:-Button_Primaire} depuis Obsidian"`
   - `skillNames`: `"resource:figma-use,resource:figma-generate-library"`

3. **Résultat :**
   La planche de spec Figma est instantanément mise à jour avec les informations exactes, les tokens et les Do's & Don'ts de la fiche Obsidian ciblée !
