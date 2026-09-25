# 🔄 Système de Synchronisation Design System Figma ↔ Code

> **Objectif :** Maintenir une synchronisation automatique entre le Design System Figma (composants + variables) et le code CSS du portfolio Olin.os.

---

## 🏗️ Architecture du Système

### 1. Sources de Vérité

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SOURCES DE VÉRITÉ                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  1️⃣  FIGMA DESIGN SYSTEM                                                 │
│      └─ Fichier : fmKmdTcWSH2mE4WXWV37eW                                 │
│         ├─ Variables : "Olin / Core Tokens" Collection                   │
│         │   └─ 268 variables (COLOR, FLOAT, STRING)                      │
│         ├─ Composants : ❖ Button, ❖ Tag, ❖ Link, ❖ Window, etc.         │
│         └─ Styles : 23 Text Styles, 66 Paint Styles                      │
│                                                                           │
│  2️⃣  FICHES OBSIDIAN (Documentation)                                     │
│      └─ Obsidian Vault/Olin/Portfolio/Design System Olin/               │
│         ├─ 01_Atomes/                                                    │
│         │   ├─ 📄 Fiche_Composant_Button_Primaire.md                     │
│         │   ├─ 📄 Fiche_Composant_Link_Action.md                         │
│         │   └─ 📄 Fiche_Composant_Tag_Status_Pill.md                     │
│         └─ 02_Molecules/                                                 │
│             └─ 📄 Fiche_Composant_Window_Header.md                       │
│                                                                           │
│  3️⃣  design.md (Contrat YAML)                                            │
│      └─ Portfolio/design.md                                              │
│         └─ Structure complète des tokens et composants                   │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2. Pipeline de Synchronisation

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PIPELINE DE SYNCHRONISATION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  FIGMA VARIABLES                                                          │
│  (Olin / Core Tokens)                                                     │
│         │                                                                 │
│         │ [API Figma REST]                                                │
│         ↓                                                                 │
│  sync-figma-tokens.js ─────────┐                                         │
│         │                      │                                         │
│         │                      │ [Lecture & Conversion]                  │
│         ↓                      │                                         │
│  CSS Custom Properties         │                                         │
│  (src/styles/tokens.css)       │                                         │
│         │                      │                                         │
│         │                      │                                         │
│  FICHES OBSIDIAN               │                                         │
│  (Markdown + Code CSS)         │                                         │
│         │                      │                                         │
│         │ [Copie manuelle]     │                                         │
│         ↓                      │                                         │
│  CSS Components                │                                         │
│  (src/styles/components.css) ←─┘                                         │
│         │                                                                 │
│         ↓                                                                 │
│  BUILD VITE                                                               │
│  (dist/)                                                                  │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Installation & Configuration

### 1. Installation des Dépendances

```bash
cd /Users/josselinhillion/olin/Portfolio/code
npm install
```

Cela installera :
- `dotenv` : Gestion des variables d'environnement
- `node-fetch` : Requêtes HTTP vers l'API Figma
- `vite` : Build tool (déjà installé)

### 2. Configuration du Token Figma

1. **Générer un Personal Access Token Figma :**
   - Aller sur Figma → Settings → Personal Access Tokens
   - Créer un nouveau token avec les permissions `File content (read-only)`
   - Copier le token

2. **Configurer les variables d'environnement :**
   ```bash
   cp .env.example .env
   ```

3. **Éditer `.env` :**
   ```bash
   FIGMA_ACCESS_TOKEN=your_actual_figma_token_here
   FIGMA_FILE_KEY=fmKmdTcWSH2mE4WXWV37eW
   ```

⚠️ **IMPORTANT :** Ne jamais committer le fichier `.env` (déjà dans `.gitignore`)

---

## 📦 Scripts Disponibles

### `npm run sync:tokens`

Exporte les variables Figma ("Olin / Core Tokens") vers `src/styles/tokens.css`.

**Ce que fait le script :**
1. Se connecte à l'API Figma avec votre token
2. Récupère toutes les variables de la collection "Olin / Core Tokens"
3. Convertit les variables en CSS Custom Properties
4. Organise les tokens par catégories (colors, spacing, radius, typography, layout)
5. Génère le fichier `tokens.css` avec commentaires structurés

**Exemple d'exécution :**
```bash
npm run sync:tokens
```

**Sortie attendue :**
```
🚀 Synchronisation des tokens Figma → CSS

🔍 Récupération des variables Figma...
✅ Collection trouvée : "Olin / Core Tokens"
   Mode : Default
📊 268 variables détectées

📦 Répartition par catégories :
   - Couleurs : 60
   - Espacement : 154
   - Rayons : 8
   - Typographie : 24
   - Layout : 18
   - Autres : 4

✨ Fichier généré : src/styles/tokens.css
✅ Synchronisation terminée avec succès !
```

### `npm run sync:readme`

Synchronise le fichier README.md du portfolio (script existant).

### `npm run sync:all`

Lance tous les scripts de synchronisation en séquence :
1. `sync:readme`
2. `sync:tokens`

---

## 🎨 Workflow de Développement

### Scénario 1 : Modification d'un Token Figma

**Exemple :** Changer la couleur `--color-electric-blue` de `#4E4BF5` à `#0028FF`

1. **Modifier dans Figma :**
   - Ouvrir le fichier Design System Figma
   - Modifier la variable `color/primitive/blue_500` dans "Olin / Core Tokens"
   - Publier les changements

2. **Synchroniser vers le code :**
   ```bash
   npm run sync:tokens
   ```

3. **Vérifier les changements :**
   ```bash
   git diff src/styles/tokens.css
   ```

4. **Tester localement :**
   ```bash
   npm run dev
   ```

5. **Committer :**
   ```bash
   git add src/styles/tokens.css
   git commit -m "feat(tokens): Update electric blue from Figma"
   ```

### Scénario 2 : Création d'un Nouveau Composant

**Exemple :** Créer un nouveau composant `Badge`

1. **Créer dans Figma :**
   - Créer le composant dans la page `3. Atoms`
   - Définir les Component Properties V2
   - Lier aux variables "Olin / Core Tokens"
   - Documenter dans la description

2. **Documenter dans Obsidian :**
   - Créer `Obsidian Vault/Olin/Portfolio/Design System Olin/01_Atomes/📄 Fiche_Composant_Badge.md`
   - Suivre le template des autres fiches :
     - Section 1 : Le Double Regard
     - Section 2 : Cartouche d'Identité
     - Section 3 : Anatomie Détaillée
     - Section 4 : Matrice des États
     - Section 5 : Règles d'Usage
     - Section 6 : Implémentation CSS

3. **Implémenter le CSS :**
   - Copier le code CSS de la fiche Obsidian (Section 6)
   - Coller dans `src/styles/components.css`
   - Respecter la structure de commentaires

4. **Synchroniser les tokens (si nécessaire) :**
   ```bash
   npm run sync:tokens
   ```

5. **Tester :**
   ```bash
   npm run dev
   ```

### Scénario 3 : Mise à Jour Quotidienne

**Au début de chaque session de développement :**

```bash
# Récupérer les dernières modifications Figma
npm run sync:all

# Démarrer le serveur de développement
npm run dev
```

---

## 📂 Structure des Fichiers

```
Portfolio/code/
├── .env                          # Configuration locale (ne pas committer)
├── .env.example                  # Template de configuration
├── package.json                  # Scripts npm et dépendances
├── docs/
│   └── SYNC.md                   # Cette documentation
├── scripts/
│   └── sync-figma-tokens.js      # Script d'export Figma → CSS
└── src/
    ├── styles/
    │   ├── tokens.css            # 🔄 GÉNÉRÉ AUTO — Tokens synchronisés
    │   ├── components.css        # Composants CSS (copie manuelle depuis Obsidian)
    │   ├── base.css              # Reset & styles de base
    │   └── main.css              # Point d'entrée CSS
    └── tokens/
        └── tenants/              # (Réservé pour multi-tenant futur)
```

---

## 🔒 Sécurité & Bonnes Pratiques

### 1. Protection du Token Figma

- ✅ **Toujours utiliser `.env`** pour stocker le token
- ✅ **Vérifier que `.env` est dans `.gitignore`**
- ❌ **JAMAIS committer le token dans le code**
- ❌ **JAMAIS partager le token publiquement**

### 2. Gestion des Conflits

Si deux personnes modifient Figma en même temps :

1. **Le dernier sync gagne** — Les variables Figma écrasent le fichier `tokens.css`
2. **Résolution :** Toujours vérifier Figma avant de committer
3. **Communication :** Utiliser les branches Git pour les modifications importantes

### 3. Versioning des Tokens

Le fichier `tokens.css` généré contient un timestamp de génération :

```css
/**
 * Généré automatiquement le : 2026-09-25
 */
```

Cela permet de tracer quand les tokens ont été synchronisés pour la dernière fois.

---

## 🐛 Dépannage

### Erreur : `FIGMA_ACCESS_TOKEN manquant`

**Cause :** Le fichier `.env` n'existe pas ou le token n'est pas défini.

**Solution :**
```bash
cp .env.example .env
# Éditer .env et ajouter votre token Figma
```

### Erreur : `Collection "Olin / Core Tokens" introuvable`

**Cause :** Le nom de la collection a changé dans Figma ou le fichier cible est incorrect.

**Solution :**
1. Vérifier le nom exact de la collection dans Figma
2. Modifier `COLLECTION_NAME` dans `scripts/sync-figma-tokens.js` si nécessaire

### Erreur : `Erreur API Figma: 403 Forbidden`

**Cause :** Le token Figma est invalide ou n'a pas les bonnes permissions.

**Solution :**
1. Régénérer un nouveau token dans Figma Settings
2. S'assurer que la permission `File content (read-only)` est activée
3. Mettre à jour le `.env`

### Les variables ne s'appliquent pas dans le navigateur

**Cause :** Le fichier `tokens.css` n'est pas importé dans `main.css`.

**Solution :**
Vérifier que `src/styles/main.css` contient :
```css
@import './tokens.css';
@import './base.css';
@import './components.css';
```

---

## 🚀 Évolutions Futures

### Phase 1 : Export Automatique des Composants (Q4 2026)

Créer un script qui :
- Lit les fiches Obsidian Markdown
- Extrait le code CSS de la section 6
- Génère automatiquement `components.css`

### Phase 2 : Synchronisation Bidirectionnelle (2027)

- Code → Figma : Proposer des mises à jour Figma depuis le code
- Détection de conflits automatique
- Preview des changements avant sync

### Phase 3 : CI/CD Integration (2027)

- Hook Git pre-commit pour vérifier la sync
- GitHub Actions pour auto-sync après push
- Notification Slack en cas de désynchronisation

---

## 📚 Références

- [Figma Variables API](https://www.figma.com/developers/api#variables)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Fiche CLAUDE.md](../CLAUDE.md) — Guidelines du projet
- [design.md](../../design.md) — Contrat du Design System

---

**Maintenu par :** Josselin Hillion — Senior Product Designer & Builder
**Dernière mise à jour :** 2026-09-25
