#!/usr/bin/env node
/**
 * OLIN.OS DESIGN SYSTEM SYNC
 * =============================================================================
 * Export automatique des Variables Figma (Olin / Core Tokens) vers CSS Custom Properties.
 *
 * Ce script lit les variables de la collection "Olin / Core Tokens" depuis Figma
 * et génère le fichier src/styles/tokens.css avec tous les tokens synchronisés.
 *
 * Prérequis :
 * - Variables d'environnement : FIGMA_ACCESS_TOKEN
 * - Node modules : dotenv, node-fetch
 *
 * Usage :
 *   node scripts/sync-figma-tokens.js
 *
 * @author Josselin Hillion - Senior Product Designer & Builder
 * @date 2026-09-25
 */

import 'dotenv/config';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration Figma
const FIGMA_FILE_KEY = 'fmKmdTcWSH2mE4WXWV37eW';
const FIGMA_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const COLLECTION_NAME = 'Olin / Core Tokens';

// Chemins de sortie
const OUTPUT_DIR = path.resolve(__dirname, '../src/styles');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.css');

/**
 * Récupère les variables locales du fichier Figma
 */
async function fetchFigmaVariables() {
  console.log('🔍 Récupération des variables Figma...');

  const response = await fetch(
    `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/variables/local`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    }
  );

  if (!response.ok) {
    throw new Error(`Erreur API Figma: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

/**
 * Trouve la collection "Olin / Core Tokens"
 */
function findTokenCollection(data) {
  const collection = Object.values(data.meta.variableCollections).find(
    col => col.name === COLLECTION_NAME
  );

  if (!collection) {
    throw new Error(`Collection "${COLLECTION_NAME}" introuvable`);
  }

  return collection;
}

/**
 * Convertit une variable Figma en valeur CSS
 */
function convertVariableValue(variable, mode, data) {
  const value = variable.valuesByMode[mode.modeId];

  // Si la valeur est un alias (référence à une autre variable)
  if (typeof value === 'object' && value.type === 'VARIABLE_ALIAS') {
    const aliasedVar = data.meta.variables[value.id];
    if (aliasedVar) {
      return `var(--${aliasedVar.name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')})`;
    }
  }

  // Conversion selon le type
  switch (variable.resolvedType) {
    case 'COLOR':
      if (typeof value === 'object') {
        const r = Math.round(value.r * 255);
        const g = Math.round(value.g * 255);
        const b = Math.round(value.b * 255);
        const a = value.a !== undefined ? value.a : 1;
        return a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
      }
      return value;

    case 'FLOAT':
      return typeof value === 'number' ? `${value}px` : value;

    case 'STRING':
      return `"${value}"`;

    default:
      return value;
  }
}

/**
 * Organise les variables par catégories (colors, spacing, radius, typography, etc.)
 */
function organizeVariables(variables, mode, data) {
  const categories = {
    colors: [],
    spacing: [],
    radius: [],
    typography: [],
    layout: [],
    other: []
  };

  variables.forEach(variable => {
    const name = variable.name.toLowerCase();
    const cssName = `--${name.replace(/\s+/g, '-').replace(/\//g, '-')}`;
    const cssValue = convertVariableValue(variable, mode, data);

    const token = {
      name: cssName,
      value: cssValue,
      originalName: variable.name,
      description: variable.description || ''
    };

    // Catégorisation intelligente
    if (name.includes('color') || name.includes('primitive')) {
      categories.colors.push(token);
    } else if (name.includes('space')) {
      categories.spacing.push(token);
    } else if (name.includes('radius')) {
      categories.radius.push(token);
    } else if (name.includes('typography') || name.includes('font')) {
      categories.typography.push(token);
    } else if (name.includes('layout') || name.includes('breakpoint') || name.includes('container')) {
      categories.layout.push(token);
    } else {
      categories.other.push(token);
    }
  });

  return categories;
}

/**
 * Génère le contenu CSS avec commentaires structurés
 */
function generateCSS(categories) {
  const timestamp = new Date().toISOString().split('T')[0];

  let css = `/**
 * ============================================================================
 * OLIN.OS DESIGN TOKENS — CSS CUSTOM PROPERTIES
 * ============================================================================
 *
 * Source de vérité : Figma "Olin / Core Tokens" Collection
 * Fichier Figma : ${FIGMA_FILE_KEY}
 * Généré automatiquement le : ${timestamp}
 *
 * ⚠️  NE PAS MODIFIER CE FICHIER MANUELLEMENT
 * Pour mettre à jour les tokens : \`npm run sync-tokens\`
 *
 * @see design.md — Contrat du Design System Olin.os
 * @see docs/tokens.md — Documentation complète des tokens
 */

:root {
`;

  // Section Colors
  if (categories.colors.length > 0) {
    css += `\n  /* ========================================================================
     COULEURS — Palette Primitive & Sémantique
     ======================================================================== */\n`;
    categories.colors.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  // Section Spacing
  if (categories.spacing.length > 0) {
    css += `\n  /* ========================================================================
     ESPACEMENT — Micro, Standard, Macro
     ======================================================================== */\n`;
    categories.spacing.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  // Section Radius
  if (categories.radius.length > 0) {
    css += `\n  /* ========================================================================
     RAYONS DE COURBURE — Border Radius
     ======================================================================== */\n`;
    categories.radius.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  // Section Typography
  if (categories.typography.length > 0) {
    css += `\n  /* ========================================================================
     TYPOGRAPHIE — Fonts & Text Styles
     ======================================================================== */\n`;
    categories.typography.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  // Section Layout
  if (categories.layout.length > 0) {
    css += `\n  /* ========================================================================
     LAYOUT — Conteneurs, Breakpoints, Grid
     ======================================================================== */\n`;
    categories.layout.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  // Section Other
  if (categories.other.length > 0) {
    css += `\n  /* ========================================================================
     AUTRES TOKENS
     ======================================================================== */\n`;
    categories.other.forEach(token => {
      if (token.description) {
        css += `  /* ${token.description} */\n`;
      }
      css += `  ${token.name}: ${token.value};\n`;
    });
  }

  css += `}\n`;

  return css;
}

/**
 * Main
 */
async function main() {
  try {
    console.log('🚀 Synchronisation des tokens Figma → CSS\n');

    // Vérification du token Figma
    if (!FIGMA_TOKEN) {
      throw new Error('FIGMA_ACCESS_TOKEN manquant. Définir dans .env');
    }

    // Récupération des variables
    const data = await fetchFigmaVariables();
    const collection = findTokenCollection(data);
    const mode = collection.modes[0]; // Mode par défaut

    console.log(`✅ Collection trouvée : "${collection.name}"`);
    console.log(`   Mode : ${mode.name}`);

    // Extraction et organisation
    const variables = Object.values(data.meta.variables).filter(
      v => v.variableCollectionId === collection.id
    );

    console.log(`📊 ${variables.length} variables détectées`);

    const categories = organizeVariables(variables, mode, data);

    console.log(`\n📦 Répartition par catégories :`);
    console.log(`   - Couleurs : ${categories.colors.length}`);
    console.log(`   - Espacement : ${categories.spacing.length}`);
    console.log(`   - Rayons : ${categories.radius.length}`);
    console.log(`   - Typographie : ${categories.typography.length}`);
    console.log(`   - Layout : ${categories.layout.length}`);
    console.log(`   - Autres : ${categories.other.length}`);

    // Génération CSS
    const css = generateCSS(categories);

    // Création du dossier de sortie si nécessaire
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Écriture du fichier
    await fs.writeFile(OUTPUT_FILE, css, 'utf-8');

    console.log(`\n✨ Fichier généré : ${OUTPUT_FILE}`);
    console.log('✅ Synchronisation terminée avec succès !\n');

  } catch (error) {
    console.error('\n❌ Erreur lors de la synchronisation :');
    console.error(error.message);
    process.exit(1);
  }
}

// Exécution
main();
