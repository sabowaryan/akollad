<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Akollad - Construire l'avenir de la tech africaine

Ce projet est la vitrine de la holding technologique Akollad, dédiée à la promotion de l'innovation sur le continent africain.

## Stack Technique

Ce projet a été mis à jour pour utiliser les dernières technologies front-end :

| Technologie | Version | Notes |
| :--- | :--- | :--- |
| **React** | 19.x | Utilisation de la dernière version pour les composants et l'architecture. |
| **TypeScript** | ~5.x | Assure un typage fort et une meilleure maintenabilité du code. |
| **Vite** | 6.x | Bundler rapide pour le développement et la production. |
| **Tailwind CSS** | 4.x | Framework CSS utilitaire, configuré avec la nouvelle approche CSS-first (v4). |
| **React Router DOM** | 6.x | Utilisé pour la gestion des routes et la structure de l'application. |

## Architecture du Projet

Le projet suit une architecture modulaire et basée sur les pages :

- **`src/pages`** : Contient les composants de niveau supérieur qui représentent les différentes vues (ex: `Home.tsx`).
- **`src/components`** : Contient les composants réutilisables, y compris le `Layout.tsx` qui définit la structure principale (Header, Footer).
- **`src/utils`** : Contient les fichiers utilitaires et les constantes (ex: `constants.ts`).

## Lancement Local

**Prérequis :** Node.js et pnpm (gestionnaire de paquets recommandé).

1.  **Cloner le dépôt :**
    \`\`\`bash
    git clone sabowaryan/akollad
    cd akollad
    \`\`\`

2.  **Installer les dépendances :**
    \`\`\`bash
    pnpm install
    \`\`\`

3.  **Lancer l'application en mode développement :**
    \`\`\`bash
    pnpm run dev
    \`\`\`

L'application sera accessible à l'adresse `http://localhost:3000` (ou un port disponible).
