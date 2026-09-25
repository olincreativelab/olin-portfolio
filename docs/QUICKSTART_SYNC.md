# 🚀 Guide de Démarrage Rapide — Synchronisation Design System

> **Objectif :** Connecter votre Design System Figma au code du portfolio en 3 étapes simples.

---

## ⚡ Installation en 3 Étapes

### 1️⃣ Configurer le Token Figma (2 minutes)

1. **Créer un token Figma :**
   - Ouvrir [Figma Settings → Personal Access Tokens](https://www.figma.com/settings)
   - Créer un nouveau token avec permission **"File content (read-only)"**
   - Copier le token

2. **Créer le fichier `.env` :**
   ```bash
   cd /Users/josselinhillion/olin/Portfolio/code
   cp .env.example .env
   ```

3. **Coller votre token :**
   Éditer `.env` et remplacer `your_figma_token_here` par votre vrai token :
   ```bash
   FIGMA_ACCESS_TOKEN=figd_VOTRE_TOKEN_ICI
   ```

### 2️⃣ Installer les Dépendances

```bash
npm install
```

Déjà fait ! ✅ Les packages `dotenv` et `node-fetch` sont installés.

### 3️⃣ Lancer la Synchronisation

```bash
npm run sync:tokens
```

**Résultat attendu :**
```
✅ Collection trouvée : "Olin / Core Tokens"
📊 268 variables détectées
✨ Fichier généré : src/styles/tokens.css
✅ Synchronisation terminée avec succès !
```

---

## 📦 Ce Qui a Été Créé

### Fichiers Ajoutés

```
Portfolio/code/
├── .env.example                    # Template de configuration (✅ créé)
├── docs/
│   ├── SYNC.md                     # Documentation complète (✅ créé)
│   └── QUICKSTART_SYNC.md          # Ce guide (✅ créé)
├── scripts/
│   └── sync-figma-tokens.js        # Script d'export Figma → CSS (✅ créé)
└── package.json                    # Scripts npm ajoutés (✅ modifié)
```

### Scripts NPM Disponibles

| Script | Description |
|--------|-------------|
| `npm run sync:tokens` | Exporte les variables Figma vers CSS |
| `npm run sync:readme` | Synchronise le README (existant) |
| `npm run sync:all` | Lance tous les syncs |
| `npm run dev` | Démarre le serveur de dev |
| `npm run build` | Build de production |

---

## 🎯 Utilisation Quotidienne

### Au Début de Chaque Session

```bash
# 1. Synchroniser les dernières modifications Figma
npm run sync:all

# 2. Démarrer le serveur de développement
npm run dev
```

### Après Avoir Modifié une Variable Figma

**Exemple :** Changement d'une couleur dans Figma

1. Modifier la variable dans Figma
2. Exécuter :
   ```bash
   npm run sync:tokens
   ```
3. Le fichier `src/styles/tokens.css` est automatiquement mis à jour

### Workflow Git

```bash
# Vérifier les changements
git diff src/styles/tokens.css

# Committer
git add src/styles/tokens.css
git commit -m "feat(tokens): Sync latest Figma variables"
```

---

## 🏗️ Architecture Actuelle

### ✅ Synchronisation Automatique

```
FIGMA Variables (Olin / Core Tokens)
         │
         │ [API Figma]
         ↓
   sync-figma-tokens.js
         │
         ↓
   src/styles/tokens.css  (✅ AUTO-GÉNÉRÉ)
```

**Contenu de `tokens.css` :**
- 268 variables CSS Custom Properties
- Organisées par catégories (colors, spacing, radius, typography, layout)
- Commentaires structurés
- Timestamp de génération

### ✅ Composants CSS (Déjà Synchronisés)

```
Fiches Obsidian (Markdown)
         │
         │ [Copie manuelle du code Section 6]
         ↓
   src/styles/components.css  (✅ DÉJÀ COMPLET)
```

**Contenu de `components.css` (1680 lignes) :**
- `.olin-btn--primary` / `.olin-btn--secondary`
- `.olin-link`
- `.olin-tag--pill` / `.olin-tag--tag`
- `.olin-window`
- `.olin-sticky`
- `.olin-metric-card`
- `.olin-stepper`
- `.olin-drawers-grid`
- `.olin-picture-frame`
- `.olin-brainfm-player`

---

## 🔍 État de Connexion du Design System

### Variables Figma → CSS ✅

- **268 variables** dans la collection "Olin / Core Tokens"
- Export automatique vers `tokens.css`
- Script fonctionnel : `npm run sync:tokens`

### Composants Figma → CSS ✅

- **10 composants maîtres** déjà implémentés dans `components.css`
- Code synchronisé avec les fiches Obsidian
- Respect pixel-perfect des spécifications Figma

### Styles Figma ✅

- **23 Text Styles** utilisés dans les composants
- **66 Paint Styles** liés aux variables
- Tous les composants connectés aux variables

---

## 📚 Documentation Complète

Pour plus de détails, consulter :
- **[docs/SYNC.md](./SYNC.md)** — Documentation technique complète
- **[design.md](../../design.md)** — Contrat du Design System
- **[CLAUDE.md](../CLAUDE.md)** — Guidelines du projet

---

## 🐛 Dépannage Rapide

### Le script ne trouve pas le token

```bash
# Vérifier que .env existe et contient le token
cat .env

# Si .env n'existe pas, le créer depuis le template
cp .env.example .env
# Puis éditer .env et ajouter votre token
```

### Erreur 403 Forbidden

Votre token Figma est invalide ou expiré.
1. Régénérer un nouveau token dans Figma Settings
2. Mettre à jour `.env`

### Les changements ne s'appliquent pas

Vérifier que `src/styles/main.css` importe bien `tokens.css` :
```css
@import './tokens.css';
@import './components.css';
```

---

## 🎉 Prochaines Étapes

1. **Tester la synchronisation :**
   ```bash
   npm run sync:tokens
   ```

2. **Modifier une variable dans Figma** (ex: changer une couleur)

3. **Re-synchroniser et constater le changement :**
   ```bash
   npm run sync:tokens
   git diff src/styles/tokens.css
   ```

4. **Développer en confiance** avec un Design System connecté ! 🚀

---

**Questions ou problèmes ?**
Consulter la documentation complète : [docs/SYNC.md](./SYNC.md)

**Maintenu par :** Josselin Hillion — Senior Product Designer & Builder
**Dernière mise à jour :** 2026-09-25
