# Zubair.dev — Software Engineer Portfolio

A minimal, high-contrast, editorial portfolio website built to showcase engineering projects, system architectures, and technical competencies.

Designed and built by **Zubair Mehmood**, a Software Engineering undergraduate at Sir Syed University of Engineering & Technology (SSUET) focusing on full-stack development, Python backends, and AI product engineering.

Live website: [https://zubair.dev](https://zubair.dev)

---

## Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), CSS Custom Properties (Design Tokens)
- **Icons**: Lucide React
- **Validation**: Zod (contact form schema validation)
- **Deployment**: Netlify (continuous deployment via GitHub)

---

## Key Portfolio Sections

1. **Hero**: Quick introduction, core technical positioning, live availability indicator, and contact coordinates.
2. **About Me**: Academic background at SSUET, engineering philosophy, and responsive profile photo support.
3. **Tech Stack**: Categorized competencies across Languages, Frontend, Backend & APIs, Databases, AI Engineering, and Developer Tooling.
4. **Selected Work**: Filterable project showcase highlighting full-stack architectures, typing telemetry engines, and systems with an interactive architectural specification modal.
5. **Background**: Chronological academic and engineering timeline.
6. **Capabilities**: Concrete service and technical deliverables demonstrated across verified projects.
7. **Contact**: Direct communication channels with one-click email copying, honeypot spam protection, and client-side form validation.

---

## Getting Started Locally

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/ZubairMehmood059/portfolio-v1.git

# Navigate into directory
cd portfolio-v1

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

The development server will start at `http://localhost:5173`.

### Production Build & Linting

```bash
# Type check and build optimized static bundle
npm run build

# Run TypeScript type check
npm run lint

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
├── public/                  # Static public assets (favicons, robots.txt, sitemap)
├── src/
│   ├── components/
│   │   ├── layout/          # Global layout elements (Footer)
│   │   ├── navigation/      # Sticky navbar, mobile drawer, links
│   │   ├── projects/        # Project cards & architectural modal
│   │   ├── sections/        # Main page sections (Hero, About, Skills, etc.)
│   │   └── ui/              # Reusable UI primitives (Button, Badge, Card, etc.)
│   ├── data/                # Typed project data, skills, timeline, social links
│   ├── hooks/               # Custom React hooks (useScrollSpy, useReducedMotion)
│   ├── lib/                 # Shared utilities and validation schemas
│   ├── styles/              # Design tokens (tokens.css) & global styles (globals.css)
│   ├── types/               # TypeScript interfaces and domain types
│   ├── App.tsx              # Root component & skip navigation link
│   └── main.tsx             # Application entry point
├── index.html               # Semantic HTML5 shell with OpenGraph metadata
├── vite.config.ts           # Vite build & Tailwind plugin configuration
├── tailwind.config.ts       # Tailwind theme extensions & design tokens
└── tsconfig.json            # Strict TypeScript configuration
```

---

## Design System

The visual design follows an editorial, dark-first technical aesthetic inspired by modern engineering tools:

- **Palette**: Dark background (`#0e1015`), high-contrast typography, and an acid/lime accent (`#c8ff00`) for deliberate interactive feedback.
- **Accessibility**: Built to WCAG 2.2 AA standards, featuring visible focus indicators, skip-to-content navigation, semantic headings, and `prefers-reduced-motion` compliance.
- **Performance**: Zero heavy external CSS frameworks or unoptimized dependencies; fast initial paint and responsive layouts tested from 320px mobile to ultra-wide displays.

---

## Author & Contact

- **Zubair Mehmood** — Software Engineer
- **GitHub**: [@ZubairMehmood059](https://github.com/ZubairMehmood059)
- **LinkedIn**: [linkedin.com/in/zubair-mehmood-513470330](https://www.linkedin.com/in/zubair-mehmood-513470330)
- **Email**: [itszayn1379@gmail.com](mailto:itszayn1379@gmail.com)
