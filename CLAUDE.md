# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server (runs on localhost:3000)
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

### No Test Suite
This project does not currently have a test suite configured.

## Architecture Overview

This is a **bilingual Next.js 13+ marketing website** using the App Router pattern with TypeScript, Tailwind CSS, and Radix UI components.

### Key Architecture Patterns

**Bilingual Routing Structure:**
- English routes: `/`, `/about`, `/contact`, `/services/*`, `/solutions/*`
- Spanish routes: `/es/*` mirroring English structure
- Language detection via URL path (`/es` prefix) in `LanguageContext`

**Component Organization:**
- `src/components/ui/` - Reusable Radix UI components (Button, Card, Dialog, etc.)
- `src/components/sections/` - Page-specific sections (Hero, Services, About, etc.)
- `src/components/pages/` - Full page components
- `src/components/client/` - Client-side only components

**Internationalization System:**
- `LanguageContext` provides `t()` function for translations
- `src/lib/translations.ts` contains all translation data
- Language auto-detected from pathname (`/es` prefix)

**Styling System:**
- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- CSS variables for colors (`hsl(var(--primary))` pattern)
- Custom animations and keyframes for interactive elements
- Dark mode support with `class` strategy

**SEO & Metadata:**
- JSON-LD structured data in `JsonLd` component
- Dynamic metadata generation per page
- Sitemap generation (`sitemap.ts`)
- Robots.txt configuration

### Directory Structure

```
src/
├── app/                    # App Router pages
│   ├── [lang routes]/      # English routes
│   ├── es/                 # Spanish routes (mirrors English structure)
│   ├── globals.css         # Global styles with CSS variables
│   └── layout.tsx          # Root layout with providers
├── components/
│   ├── ui/                 # Radix UI component library
│   ├── sections/           # Reusable page sections
│   ├── pages/              # Full page components
│   └── client/             # Client-side components
├── contexts/
│   └── LanguageContext.tsx # Internationalization context
├── hooks/                  # Custom React hooks
└── lib/
    ├── translations.ts     # All translation data
    └── utils.ts           # Utility functions
```

### Important Technical Details

**Path Aliases:** Use `@/*` for imports (configured in `tsconfig.json`)

**Font Loading:** Inter and Outfit fonts loaded via `next/font/google`

**Language Context Usage:**
```typescript
const { language, t } = useLanguage();
const content = t('key.path');
```

**Component Imports:** UI components follow Radix patterns with custom styling

**Routing:** All routes have both English and Spanish versions - maintain this pattern when adding new pages