# Akollad - Tech Africa Showcase Website

## Project Overview
A modern, responsive React showcase website for **Akollad**, a technological holding company focused on innovation in Africa.

## Tech Stack
- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Routing:** React Router DOM 7
- **Package Manager:** pnpm

## Project Structure
```
/
├── index.html          # Entry HTML
├── index.css           # Global styles
├── vite.config.ts      # Vite configuration (port 5000, host 0.0.0.0)
├── tsconfig.json       # TypeScript config
├── postcss.config.js   # PostCSS config
├── package.json        # Dependencies and scripts
└── src/
    ├── main.tsx        # React entry point
    ├── App.tsx         # Routes: / and /privacy-policy
    ├── components/     # Reusable UI components
    │   ├── Layout.tsx
    │   ├── icons/
    │   └── ...
    ├── pages/          # Page components
    │   ├── Home.tsx
    │   └── PrivacyPolicy.tsx
    └── utils/
        └── constants.ts
```

## Development
- Run: `pnpm dev` (starts on port 5000)
- Build: `pnpm build` (outputs to `dist/`)

## Deployment
- Type: Static site
- Build command: `pnpm run build`
- Public directory: `dist`
