# Zubair.dev — Technical Requirements Document (TRD)

**Project:** Zubair.dev Developer Portfolio
**Owner:** Zubair Mehmood
**Document Version:** 1.0
**Status:** Implementation Ready
**Related Document:** PRD.md

---

# 1. Technical Objective

Zubair.dev must be implemented as a modern, maintainable, responsive, accessible, and production-ready developer portfolio.

The technical architecture must prioritize:

1. Maintainability
2. Performance
3. Accessibility
4. Responsive design
5. Component reusability
6. Type safety
7. Security
8. Simple deployment
9. Easy content updates
10. Minimal unnecessary dependencies

The architecture must remain simple enough for a personal portfolio while being structured like a professional software project.

---

# 2. Recommended Technology Stack

## 2.1 Frontend

| Technology       | Purpose                                         |
| ---------------- | ----------------------------------------------- |
| React            | UI framework                                    |
| Vite             | Build tool and development server               |
| TypeScript       | Type safety                                     |
| Tailwind CSS     | Utility-based styling                           |
| Motion for React | Animation and transitions                       |
| Lucide React     | Icons                                           |
| React Router     | Routing if project detail pages are implemented |

---

# 3. Optional UI Resources

The project may selectively use:

### Magic UI

Primary optional UI enhancement library.

Use for:

* Hero effects
* Modern animated cards
* Subtle visual effects
* Special showcase components

### Unhuman AI

Use only for:

* AI-related sections
* AI project presentation
* Futuristic visual treatment

It must not define the entire website style.

### Smooth UI

Use only where its interaction pattern improves usability.

### Retro UI

Disabled by default.

It should only be introduced if a specific project or section intentionally uses a retro visual style.

---

# 4. Backend

Backend is optional for V1.

If required, use:

| Technology | Purpose            |
| ---------- | ------------------ |
| Python     | Backend language   |
| FastAPI    | REST API           |
| Pydantic   | Request validation |
| Uvicorn    | ASGI server        |

Primary backend responsibility:

```text
Contact form
     ↓
POST /api/contact
     ↓
Validation
     ↓
Rate limiting
     ↓
Spam protection
     ↓
Email delivery
```

A database is not required for the initial version.

---

# 5. Database Strategy

## V1

No database unless required.

Project data should be static typed data.

Contact messages should preferably be delivered through an email service rather than stored permanently.

## Future

If persistent contact storage becomes necessary:

```text
PostgreSQL
```

Possible table:

```text
contact_messages
----------------
id
name
email
subject
message
created_at
status
```

No database should be added merely because the application uses a backend.

---

# 6. Application Architecture

Recommended architecture:

```text
                    ┌─────────────────────┐
                    │      Browser        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
          Static portfolio             Contact API
               data                         │
                                            ▼
                                    ┌──────────────┐
                                    │   FastAPI    │
                                    └──────┬───────┘
                                           │
                                           ▼
                                    Email Provider
```

---

# 7. Frontend Folder Structure

Recommended structure:

```text
src/
├── app/
│   ├── App.tsx
│   └── routes.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   └── effects/
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── social.ts
│
├── hooks/
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   └── useScrollSpy.ts
│
├── lib/
│   ├── utils.ts
│   ├── validation.ts
│   └── constants.ts
│
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── animations.css
│
├── types/
│   ├── project.ts
│   ├── skill.ts
│   └── experience.ts
│
├── assets/
│
├── main.tsx
└── vite-env.d.ts
```

---

# 8. Component Architecture

Components must be organized according to responsibility.

## UI Components

Generic reusable components:

```text
Button
Badge
Card
Input
Textarea
SectionHeading
Container
IconButton
Divider
```

These components must not contain project-specific content.

---

## Layout Components

```text
Page
Navbar
Footer
Section
Container
```

---

## Navigation Components

```text
DesktopNavigation
MobileNavigation
MobileMenu
NavLink
```

---

## Section Components

```text
HeroSection
AboutSection
SkillsSection
ProjectsSection
ExperienceSection
CapabilitiesSection
ContactSection
```

---

## Project Components

```text
ProjectCard
ProjectGrid
ProjectTags
ProjectMeta
ProjectLinks
ProjectDetail
```

---

## Effects

Animation-related components should be isolated where possible:

```text
Reveal
FadeIn
HoverEffect
BackgroundEffect
```

Effects must not become required dependencies for basic content rendering.

---

# 9. Data Architecture

Content must be separated from presentation.

Example:

```ts
export const projects: Project[] = [
  {
    slug: "mehfil",
    title: "Mehfil",
    summary: "...",
    description: "...",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    category: "Full-Stack",
    featured: true,
    status: "In Development",
  },
];
```

Components should consume this data.

Do not hard-code the same project information across multiple components.

---

# 10. TypeScript Requirements

TypeScript must use strict typing.

Recommended configuration:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

Avoid:

```ts
any
```

unless there is a documented technical reason.

Prefer:

```ts
unknown
```

with proper narrowing when the type is genuinely unknown.

---

# 11. Core Data Types

## Project

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  description?: string;
  technologies: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  status?: string;
};
```

---

## Skill

```ts
export type Skill = {
  name: string;
  category: string;
  level?: string;
  icon?: string;
};
```

Do not show skill levels unless they are meaningful and honestly defined.

---

## Experience

```ts
export type Experience = {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  description: string;
  type?: string;
};
```

---

# 12. Routing

If only one page exists:

```text
/
```

If project detail pages are implemented:

```text
/
/projects/:slug
```

Potential future routes:

```text
/resume
/about
/projects
/contact
```

Do not introduce routing complexity until required.

---

# 13. CSS Architecture

Tailwind CSS should provide most component styling.

Global CSS should contain:

* CSS variables
* reset/base rules
* typography defaults
* accessibility utilities
* global animation utilities
* selection styles
* scrollbar treatment if necessary

Avoid creating hundreds of custom CSS classes when Tailwind utilities or reusable components can solve the problem.

---

# 14. Design Tokens

Tokens must be centralized.

Example:

```css
:root {
  --color-bg: oklch(0.11 0.01 260);
  --color-surface: oklch(0.15 0.012 260);
  --color-surface-raised: oklch(0.19 0.012 260);

  --color-text: oklch(0.94 0.01 260);
  --color-text-muted: oklch(0.70 0.02 260);

  --color-accent: oklch(0.88 0.24 115);

  --color-border: oklch(1 0 0 / 0.12);

  --radius-xs: 8px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-full: 9999px;

  --space-1: 8px;
  --space-2: 12px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  --space-8: 96px;
  --space-9: 128px;
}
```

These values are starting tokens.

Actual contrast must be verified in the browser after implementation.

---

# 15. Important Radius Rule

Do not use extremely large radius values as a generic substitute for small rounded corners.

Use:

```text
8px     small
10px    compact
14px    medium
18px    large
9999px  pill/circular
```

The full radius should be reserved for:

* pills
* tags
* avatars
* circular controls

---

# 16. Typography

Recommended font stack:

```css
font-family:
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  "Helvetica Neue",
  Arial,
  sans-serif;
```

Base:

```text
16px
```

Suggested scale:

| Token | Size |
| ----- | ---: |
| xs    | 12px |
| sm    | 14px |
| md    | 16px |
| lg    | 18px |
| xl    | 20px |
| 2xl   | 24px |
| 3xl   | 36px |
| 4xl   | 48px |

Hero typography may scale beyond this range responsively.

---

# 17. Typography Rules

Typography should communicate hierarchy.

Use:

* Large display typography for hero.
* Medium/large headings for sections.
* Regular body text.
* Smaller muted text for metadata.

Do not use:

* excessive font weights
* tiny body text
* long paragraphs with excessive line length
* decorative fonts that reduce readability

Recommended content width:

```text
60–75 characters
```

for long-form body text where practical.

---

# 18. Spacing System

The primary spacing system should use multiples or near-multiples of 4/8.

Core values:

```text
8
12
16
24
32
48
64
96
128
```

Section spacing should generally be larger than component spacing.

Example:

```text
Component padding: 16–24px
Card gap: 16–24px
Section gap: 64–128px
```

---

# 19. Layout System

Use a centered responsive container.

Suggested maximum width:

```text
1200px–1280px
```

depending on final design.

The container must provide responsive horizontal padding.

Example conceptual structure:

```text
Viewport
│
├── horizontal padding
│
└── max-width container
      │
      ├── content
      └── content
```

Do not allow content to touch the viewport edges on mobile.

---

# 20. Breakpoints

Use practical responsive breakpoints.

```text
Mobile:   < 640px
Tablet:   640–1023px
Desktop:  1024–1279px
Wide:     1280px+
```

Components should adapt based on available space rather than relying entirely on device categories.

---

# 21. Responsive Behavior

## Mobile

Priorities:

* readability
* simple navigation
* touch-friendly controls
* stacked project cards
* minimal decorative effects

## Tablet

Use:

* two-column layouts where appropriate
* moderate spacing
* adaptive typography

## Desktop

Use:

* multi-column project layouts
* larger hero composition
* enhanced motion
* more visual whitespace

---

# 22. Navigation Technical Requirements

Navbar must:

* remain usable at all widths
* have clear focus states
* support keyboard navigation
* avoid layout shift
* provide active section feedback where applicable

Mobile menu must:

* open/close reliably
* trap focus when implemented as a modal-like menu
* close using Escape
* restore focus to the menu trigger
* prevent background interaction when appropriate

---

# 23. Hero Technical Requirements

Hero should contain:

```text
Eyebrow
Heading
Description
Primary CTA
Secondary CTA
Social links
Optional visual
```

The hero visual must not block the main content.

If animations fail, the hero must remain fully usable.

---

# 24. Project Card Technical Requirements

Project cards must support:

* responsive layout
* keyboard interaction
* pointer interaction
* hover state
* focus state
* active state
* optional loading state
* optional image
* long project titles
* long descriptions
* missing live URL
* missing repository URL

Do not make the entire card an inaccessible clickable `<div>`.

Use semantic links/buttons.

---

# 25. Button System

Buttons must define:

### Default

Normal appearance.

### Hover

Visual feedback.

### Focus-visible

Strong visible focus ring.

### Active

Pressed interaction.

### Disabled

Clearly unavailable.

### Loading

Prevent duplicate actions.

---

# 26. Form System

Inputs must have:

* visible labels
* appropriate `autocomplete`
* accessible descriptions where needed
* validation messages
* focus styles
* error styles

Example:

```html
<label for="email">Email</label>
<input
  id="email"
  name="email"
  type="email"
  autocomplete="email"
/>
```

Never rely only on placeholder text as the label.

---

# 27. Contact API

If backend is enabled:

```http
POST /api/contact
Content-Type: application/json
```

Request:

```json
{
  "name": "Zubair",
  "email": "example@email.com",
  "subject": "Project inquiry",
  "message": "Hello..."
}
```

---

# 28. Contact Validation

Recommended limits:

```text
name:    1–100 characters
email:   valid email format
subject: 1–150 characters
message: 10–5000 characters
```

Server-side validation is mandatory.

Frontend validation improves UX but must not replace server validation.

---

# 29. API Response Strategy

Success:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

Validation:

```json
{
  "success": false,
  "error": "Invalid input."
}
```

Server failure:

```json
{
  "success": false,
  "error": "Unable to process your request."
}
```

Do not expose:

* stack traces
* internal paths
* database errors
* secrets
* infrastructure details

---

# 30. Backend Security

If backend exists:

### HTTPS

Production API must use HTTPS.

### CORS

Allow only trusted frontend origins.

### Rate limiting

Contact endpoint must be protected against spam and abuse.

### Input validation

Validate every request.

### Content-Type validation

Reject unexpected content types.

### Method validation

Reject unsupported HTTP methods.

### Logging

Do not log unnecessary personal information.

### Secrets

Use environment variables.

Never commit:

```text
.env
.env.local
API keys
SMTP passwords
tokens
private credentials
```

---

# 31. Frontend Security

The frontend must:

* avoid `dangerouslySetInnerHTML` unless absolutely necessary
* never store secrets
* validate external URLs
* avoid rendering untrusted HTML
* avoid exposing private API configuration
* use HTTPS in production

---

# 32. Image Strategy

Images must be optimized.

Preferred:

```text
WebP
AVIF
SVG
```

where appropriate.

Images must define dimensions when practical to reduce layout shift.

Informative images require meaningful alt text.

Decorative images should use empty alt text.

---

# 33. Animation Architecture

Motion should be centralized enough to keep behavior consistent.

Recommended utility:

```tsx
<Reveal>
  ...
</Reveal>
```

Animations should not be individually reinvented for every section.

---

# 34. Motion Tokens

Suggested durations:

```text
fast:       150ms
standard:   300ms
emphasis:   500ms
dramatic:   700ms
```

Suggested easing:

```text
ease-out
ease-in-out
```

Avoid excessive spring animations on simple UI controls.

---

# 35. Reduced Motion

The application must respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

* disable unnecessary entrance animations
* reduce transforms
* remove parallax
* minimize looping effects

Content and interaction must remain available.

---

# 36. Accessibility Architecture

The application must target:

**WCAG 2.2 AA**

Required:

* semantic HTML
* keyboard access
* focus-visible styles
* accessible labels
* correct heading hierarchy
* adequate contrast
* accessible navigation
* reduced-motion support
* no keyboard traps

---

# 37. Focus System

Focus styles must be visible.

Example conceptual rule:

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```

Do not remove browser focus indicators without replacing them.

---

# 38. Color Contrast

The following must be checked in the browser:

* body text
* muted text
* buttons
* links
* borders where meaningful
* accent text
* focus indicators

Do not assume that token values automatically satisfy WCAG.

---

# 39. State Management

Global state should be avoided unless necessary.

Preferred:

```text
React state
+
URL state
+
localStorage
```

Use local state for:

* mobile menu
* form state
* theme preference
* temporary UI state

Do not introduce Redux or another global-state library unless a real requirement appears.

---

# 40. Theme State

If dark/light mode is implemented:

```text
System preference
       ↓
User preference
       ↓
localStorage
       ↓
Applied theme
```

Theme selection should happen early enough to minimize flash of incorrect theme.

---

# 41. Error Handling

The application must fail gracefully.

Frontend errors should:

* avoid blank screens where possible
* provide useful fallback UI
* log useful development information
* avoid exposing internal details to users

Network errors should provide:

* readable message
* retry action
* alternative contact option where appropriate

---

# 42. Loading States

Loading states should exist where asynchronous operations occur.

Examples:

```text
Contact submission
Project detail loading
External content loading
```

Avoid unnecessary skeleton loaders for content that is already statically available.

---

# 43. Empty States

Empty states must be handled intentionally.

Examples:

```text
No project image
No live URL
No repository URL
No experience entries
```

The interface should gracefully omit or replace unavailable content.

Do not render broken buttons.

---

# 44. SEO Architecture

Required metadata:

```text
<title>
<meta name="description">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<link rel="canonical">
```

Recommended:

```text
robots.txt
sitemap.xml
favicon
Open Graph image
```

---

# 45. Semantic HTML

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Avoid constructing the entire application using `<div>` elements.

---

# 46. Performance Requirements

The implementation should aim for:

* fast initial render
* minimal blocking JavaScript
* optimized images
* limited dependencies
* efficient animations
* no unnecessary API calls

Avoid:

* large background videos
* unnecessary 3D libraries
* excessive particles
* multiple animation frameworks
* huge icon libraries when only a few icons are needed

---

# 47. Core Web Vitals

The implementation should be reviewed for:

### LCP

Largest Contentful Paint.

### CLS

Cumulative Layout Shift.

### INP

Interaction to Next Paint.

Large images, fonts, animations, and layout changes must be evaluated against these metrics.

---

# 48. Font Strategy

If external Google Fonts are used:

* limit font families
* limit weights
* preload only when justified
* avoid unnecessary variants

System fonts are acceptable and may be preferred for maximum performance.

---

# 49. Dependency Rules

Before installing a dependency:

1. Check existing project dependencies.
2. Check whether native browser APIs can solve the problem.
3. Check whether an existing library already provides the feature.
4. Add only when the dependency provides meaningful value.

Never install multiple libraries that solve the same problem without a clear reason.

---

# 50. UI Library Conflict Rule

Do not allow multiple UI libraries to control:

* typography
* spacing
* colors
* buttons
* cards
* global layout

There must be one source of truth for the design system.

Recommended hierarchy:

```text
Design Tokens
      ↓
Tailwind / CSS
      ↓
Reusable UI Components
      ↓
Optional UI Library Components
      ↓
Page Sections
```

---

# 51. Git Requirements

Repository must use Git.

Recommended branch:

```text
main
```

Commit examples:

```text
feat: build portfolio shell
feat: add project showcase
feat: add contact form
fix: improve mobile navigation
fix: resolve accessibility issues
refactor: centralize design tokens
```

---

# 52. Git Safety

Before major changes:

```bash
git status
git diff
```

Never commit:

```text
.env
.env.*
node_modules/
dist/
personal secrets
private credentials
local databases
```

unless explicitly required and safe.

---

# 53. Testing Strategy

Testing should occur at multiple levels.

## Manual

* Chrome
* Edge where practical
* Mobile viewport
* Tablet viewport
* Desktop viewport

## Functional

Test:

* navigation
* menu
* links
* project cards
* project details
* contact form
* theme switching
* resume link
* social links

## Accessibility

Test:

* keyboard
* focus
* screen-reader-friendly semantics
* contrast
* reduced motion

---

# 54. Build Verification

Before deployment:

```bash
npm run build
```

Build must complete successfully.

If linting exists:

```bash
npm run lint
```

must pass or have explicitly reviewed exceptions.

---

# 55. Production Architecture

Recommended:

```text
GitHub
   ↓
Vercel
   ↓
React/Vite production build
```

If backend is required:

```text
Frontend
  ↓
Vercel

Backend
  ↓
FastAPI deployment
```

The backend platform can be selected later based on free-tier reliability and deployment requirements.

---

# 56. Environment Variables

Frontend:

```text
VITE_PUBLIC_API_URL
```

Only public configuration belongs in frontend environment variables.

Backend:

```text
ALLOWED_ORIGINS
EMAIL_API_KEY
EMAIL_FROM
EMAIL_TO
```

Actual secret names may vary.

Never expose backend secrets through `VITE_*`.

---

# 57. Development Environment

Recommended:

```text
Node.js LTS
npm
Python 3.11+
Git
VS Code
```

The project must not depend on a developer-specific absolute path.

Bad:

```text
C:\Users\Zubair\...
```

Good:

```text
relative project paths
environment variables
standard commands
```

---

# 58. Browser Support

The portfolio should support modern evergreen browsers:

* Chrome
* Edge
* Firefox
* Safari

No legacy Internet Explorer support is required.

---

# 59. Architecture Decision Rules

When choosing between two implementations:

Prefer the solution that is:

1. simpler
2. more maintainable
3. more accessible
4. faster
5. easier to debug
6. less dependent on third-party services

Do not choose technology because it looks impressive on a portfolio.

---

# 60. Anti-Patterns

The implementation must avoid:

* giant monolithic components
* duplicated project data
* unnecessary global state
* inline secrets
* inaccessible clickable `<div>` elements
* animation everywhere
* excessive glassmorphism
* excessive neon effects
* huge dependency bundles
* fake skill percentages
* fabricated metrics
* hard-coded repeated content
* unexplained magic numbers
* unnecessary API calls
* unnecessary database usage

---

# 61. Technical Definition of Done

The technical implementation is complete when:

* [ ] TypeScript builds successfully.
* [ ] Production build succeeds.
* [ ] No major console errors exist.
* [ ] Components are reusable.
* [ ] Project data is separated from UI.
* [ ] Responsive behavior works.
* [ ] Keyboard navigation works.
* [ ] Focus-visible states exist.
* [ ] Reduced-motion support exists.
* [ ] Forms are accessible.
* [ ] External links work.
* [ ] No secrets are committed.
* [ ] Images are optimized.
* [ ] SEO metadata exists.
* [ ] Performance has been reviewed.
* [ ] Git repository is clean.
* [ ] Deployment works.

---

# 62. Final Technical Principle

The architecture must remain proportional to the product.

Zubair.dev is a professional portfolio, not a SaaS platform.

Therefore:

> **Build it with professional engineering discipline, but do not manufacture unnecessary complexity.**

The final architecture should be simple enough to maintain independently while strong enough to demonstrate real software engineering ability.
