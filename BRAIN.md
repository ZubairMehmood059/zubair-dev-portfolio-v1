# BRAIN.md

# Zubair.dev — AI Project Memory & Recovery Guide

> This file is the persistent memory and recovery guide for AI coding agents working on the Zubair.dev project.

## 1. Project Identity

**Project:** Zubair.dev

**Owner:** Zubair Mehmood

**Professional Identity:** Software Engineer

**Positioning:**

* Full-Stack Developer
* AI Product Engineer
* Software Engineer

The website is a professional developer portfolio.

It must communicate real engineering ability through real projects, clean architecture, strong UI/UX, security, accessibility, performance, and maintainability.

---

# 2. Why This File Exists

AI coding sessions may end because of:

* AI quota limits
* Context limits
* Session expiration
* Tool limitations
* Agent interruptions
* Computer restart
* Development errors

When a new AI agent starts working on this project, it must read this file before making significant changes.

This file exists so the agent can recover the project's context without rebuilding or guessing.

---

# 3. ABSOLUTE RULE — NEVER RESET THE PROJECT

## DO NOT:

* Delete the project
* Recreate the project
* Initialize a new Vite project over the existing project
* Delete working components
* Delete existing assets without justification
* Replace the entire codebase
* Reset Git history
* Remove existing functionality simply because another implementation is easier

## ALWAYS:

```text
Inspect
↓
Understand
↓
Preserve
↓
Modify incrementally
↓
Test
↓
Verify
```

If an existing implementation works, preserve it.

If something is broken, identify the root cause before changing architecture.

---

# 4. Source-of-Truth Documentation

The project contains these documentation files:

```text
PRD.md
TRD.md
WEBSITE_FLOW.md
UI_UX_DESIGN_BRIEF.md
BACKEND_PLAN.md
IMPLEMENTATION_PLAN.md
BRAIN.md
```

Read the relevant documentation before implementing a feature.

### Documentation responsibilities

```text
PRD.md
→ What the product is and what it should achieve

TRD.md
→ Technical architecture and technology decisions

WEBSITE_FLOW.md
→ User journeys and navigation

UI_UX_DESIGN_BRIEF.md
→ Visual design, interaction, accessibility and component behavior

BACKEND_PLAN.md
→ Backend architecture and security

IMPLEMENTATION_PLAN.md
→ Build sequence and implementation strategy

BRAIN.md
→ Persistent project memory, recovery rules and current state
```

---

# 5. Current Product Philosophy

Zubair.dev must feel like a real professional software product.

It must NOT feel like:

* A generic AI-generated portfolio
* A template with changed text
* An over-animated landing page
* A collection of random UI effects
* A technology showcase with no purpose

The website should communicate:

> I don't just learn technologies — I use them to build real products.

---

# 6. Approved Technology Direction

## Frontend

```text
React
Vite
TypeScript
Tailwind CSS
Motion
Lucide React
React Router
Zod
```

Supporting utilities may include:

```text
clsx
tailwind-merge
```

Only install dependencies when genuinely required.

---

# 7. Backend Direction

Backend is optional for V1.

If required:

```text
Python 3.11+
FastAPI
Pydantic
Uvicorn
Pytest
```

Initial API:

```text
GET  /api/health
POST /api/contact
```

No database is required for V1.

No authentication is required for the portfolio.

No admin dashboard is required.

No AI chatbot is required.

---

# 8. Database Rule

Do NOT add PostgreSQL, MongoDB, Redis, Firebase, or another database simply to make the project look more advanced.

V1 should remain database-free unless an actual requirement appears.

A database may be introduced later for:

* CMS
* Admin dashboard
* Contact message storage
* Blog
* Analytics
* Other genuine product requirements

---

# 9. Current Architecture

Expected frontend structure:

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
└── main.tsx
```

If the current repository differs from this structure, do NOT automatically restructure everything.

First determine whether the existing structure is healthy.

---

# 10. Expected Backend Structure

If backend is implemented:

```text
backend/
├── app/
│   ├── main.py
│   ├── config.py
│   │
│   ├── api/
│   │   └── routes/
│   │       ├── health.py
│   │       └── contact.py
│   │
│   ├── schemas/
│   │   └── contact.py
│   │
│   ├── services/
│   │   ├── email.py
│   │   └── spam.py
│   │
│   ├── middleware/
│   │   └── security.py
│   │
│   └── core/
│       └── rate_limit.py
│
├── tests/
│   ├── test_health.py
│   └── test_contact.py
│
├── pyproject.toml
└── .env.example
```

Again, do not force this structure if the existing implementation already has a clean equivalent.

---

# 11. Website Structure

Main website:

```text
Navbar
↓
Hero
↓
About
↓
Skills
↓
Featured Projects
↓
Experience / Education
↓
Capabilities
↓
Contact
↓
Footer
```

Optional:

```text
/projects/:slug
```

for detailed project pages.

---

# 12. Design Memory

Visual direction:

```text
Dark-first
Minimal
Technical
Premium
Editorial
High contrast
Slightly experimental
Acid/lime accent
```

Reference inspiration:

**leeshark_portfolio**

The design may be inspired by the reference but must remain an original Zubair.dev implementation.

Do not clone the reference website.

---

# 13. Design Tokens

Core visual tokens:

```css
--color-bg: oklch(0.11 0.01 260);
--color-surface: oklch(0.15 0.012 260);
--color-surface-raised: oklch(0.19 0.012 260);

--color-text: oklch(0.94 0.01 260);
--color-text-muted: oklch(0.70 0.02 260);

--color-accent: oklch(0.88 0.24 115);

--color-border: oklch(1 0 0 / 0.12);
```

Do not introduce random colors throughout individual components.

The design system must remain coherent.

---

# 14. Motion Rules

Use Motion intentionally.

```text
150ms
→ micro interactions

300ms
→ component transitions

500–700ms
→ major entrance/section animation
```

Respect:

```text
prefers-reduced-motion
```

Do not animate everything.

---

# 15. Project Content Rules

Only use real projects and real information.

Potential projects include:

```text
Mehfil
AI Career Copilot
Type Nova-X
Digital Legacy / Inheritance System
Edge Ledger
Netflix Clone
QR Code Generator
```

Before publishing a project, verify:

* Project actually exists
* Description is accurate
* Technologies are actually used
* GitHub link is correct
* Live link is correct
* Screenshots are real
* Claims are truthful

Never invent:

```text
Users
Revenue
Clients
Experience
Performance statistics
Awards
Companies
Testimonials
```

---

# 16. Security — HIGHEST PRIORITY

Security must be treated as a first-class requirement.

The goal is:

> No unnecessary data exposure, no secrets in the frontend, no accidental credential leakage, and no unsafe handling of visitor input.

---

# 17. Secret Management

NEVER place secrets inside:

```text
React components
TypeScript files
JavaScript files
CSS
public/
GitHub repository
HTML
browser-accessible configuration
```

Never expose:

```text
API keys
Email provider keys
Private tokens
Database credentials
JWT secrets
Service credentials
```

Frontend environment variables beginning with:

```text
VITE_
```

are public and must never contain secrets.

---

# 18. Environment Files

Use:

```text
.env
.env.example
```

`.env` must be ignored by Git.

`.env.example` may contain variable names but must not contain real secrets.

Example:

```env
APP_ENV=development

ALLOWED_ORIGINS=http://localhost:5173

EMAIL_API_KEY=
EMAIL_FROM=
EMAIL_TO=
```

---

# 19. Git Security

Before every commit:

```text
git status
```

Check for:

* `.env`
* credentials
* API keys
* private certificates
* tokens
* accidental database files
* secret configuration

Never commit secrets.

If a secret is accidentally committed:

1. Revoke/rotate the secret
2. Remove it from the repository
3. Check Git history
4. Replace it with environment configuration

Simply deleting the current file is not enough if the credential remains in Git history.

---

# 20. Contact Form Security

The contact form must have:

* Frontend validation
* Backend validation
* Maximum input lengths
* Rate limiting
* Honeypot spam protection
* Safe error handling
* Controlled CORS
* No unnecessary data storage

Recommended limits:

```text
Name: 1–100
Subject: up to 150
Message: 10–5000
```

Email must be validated.

---

# 21. Data Minimization

Only collect information actually required.

V1 contact form:

```text
Name
Email
Subject
Message
```

Do not collect:

* Passwords
* Phone numbers unless required
* Addresses
* Unnecessary personal details
* Sensitive personal information

Do not create a database of visitor information without a genuine requirement.

---

# 22. Logging Security

Never log:

```text
Full contact messages
API keys
Tokens
Passwords
Private credentials
Unnecessary personal information
```

Logs should contain only operational information needed for debugging and monitoring.

---

# 23. API Security

Backend must use:

```text
HTTPS
Strict CORS
Validation
Rate limiting
Safe errors
Request limits
Environment secrets
```

Production CORS must not blindly allow:

```text
*
```

when restricted origins are appropriate.

---

# 24. Error Security

Never expose:

```text
Stack traces
File paths
Environment variables
Database errors
Internal architecture
Provider credentials
```

to website visitors.

Users should receive a safe message such as:

```text
Unable to send your message right now.
Please try again.
```

Internal debugging information belongs in controlled logs.

---

# 25. Dependency Security

Before installing a package:

1. Check whether it already exists.
2. Check whether it is actually required.
3. Prefer established packages.
4. Avoid duplicate libraries.
5. Avoid abandoned/unnecessary packages.
6. Keep dependencies minimal.

Do not install packages just because an AI suggests them.

---

# 26. UI Library Rule

The portfolio should have one coherent design system.

Approved:

```text
Motion
Lucide React
Optional Magic UI
Optional Smooth UI
Optional Unhuman AI for AI-specific sections
```

Retro UI is disabled unless specifically required.

Do not combine multiple libraries for the same component.

---

# 27. Accessibility

Target:

**WCAG 2.2 AA**

Always consider:

* Keyboard navigation
* Focus-visible
* Contrast
* Semantic HTML
* Screen-reader labels
* Form accessibility
* Reduced motion
* Mobile navigation
* Touch targets

---

# 28. Performance

Avoid:

* Huge images
* Heavy videos
* Excessive animation
* Unnecessary dependencies
* Heavy 3D
* Unoptimized assets

Prefer:

* Optimized images
* Lazy loading
* Efficient components
* Small bundles
* Controlled animation

---

# 29. AI Agent Recovery Procedure

When a new AI session begins:

## Step 1

Read:

```text
BRAIN.md
```

## Step 2

Read:

```text
IMPLEMENTATION_PLAN.md
```

## Step 3

Read only the additional documentation relevant to the current task:

```text
PRD.md
TRD.md
WEBSITE_FLOW.md
UI_UX_DESIGN_BRIEF.md
BACKEND_PLAN.md
```

## Step 4

Inspect the actual repository.

Never assume the current code exactly matches these documents.

## Step 5

Check:

```text
git status
```

## Step 6

Inspect recent changes.

## Step 7

Determine:

```text
What is already complete?
What is partially complete?
What is broken?
What is the next safe task?
```

## Step 8

Continue from the existing state.

Never restart from Phase 1 unless the repository genuinely requires it.

---

# 30. AI Quota Recovery

If the previous AI session ended because of quota/context limits:

DO NOT rebuild the project.

Instead:

```text
Read BRAIN.md
↓
Inspect repository
↓
Check Git status
↓
Check build
↓
Identify last completed phase
↓
Continue from there
```

The project files are the real source of truth.

BRAIN.md is the recovery guide.

---

# 31. Current Progress Tracking

This section should be updated during major implementation sessions.

```text
[ ] Repository audit
[ ] Dependency verification
[ ] Design system
[ ] Global layout
[ ] Navbar
[ ] Hero
[ ] About
[ ] Skills
[ ] Projects
[ ] Experience / Education
[ ] Capabilities
[ ] Contact
[ ] Theme
[ ] Responsive refinement
[ ] Motion
[ ] Accessibility
[ ] SEO
[ ] Backend
[ ] Backend security
[ ] Testing
[ ] Performance audit
[ ] Browser QA
[ ] GitHub
[ ] Deployment
```

When a phase is genuinely complete, the agent may update the checkbox.

Do not mark incomplete work as complete.

---

# 32. Current Known Issues

This section must contain only verified current issues.

Format:

```text
Issue:
Location:
Severity:
Status:
Root cause:
Fix:
Verification:
```

Do not invent issues.

If there are no known issues:

```text
No verified unresolved issues.
```

---

# 33. Important Development Principle

Do not optimize for:

```text
More files
More dependencies
More animations
More frameworks
More features
More complexity
```

Optimize for:

```text
Correctness
Security
Maintainability
Accessibility
Performance
Professional UX
Real functionality
```

---

# 34. Senior Developer Standard

Every implementation decision should be evaluated using:

### Correctness

Does it actually work?

### Maintainability

Can another developer understand and modify it?

### Security

Can it leak secrets or expose unnecessary data?

### Accessibility

Can different users operate it?

### Performance

Does it introduce unnecessary cost or complexity?

### Scalability

Can the feature grow without requiring a rewrite?

### Simplicity

Is there a simpler solution that solves the same problem?

---

# 35. Decision Rule

When choosing between two implementations:

Prefer:

```text
Simple + secure + maintainable
```

over:

```text
Complex + impressive-looking + unnecessary
```

---

# 36. Before Changing Architecture

The AI agent must explain:

1. Why the current architecture is insufficient
2. What problem the proposed architecture solves
3. What files will change
4. What risks exist
5. Whether the change is actually necessary

Do not perform large architectural changes for minor problems.

---

# 37. Before Installing Packages

The AI agent must check:

```text
Is it already installed?
↓
Is it genuinely required?
↓
Does an existing package already solve the problem?
↓
Will it increase bundle size?
↓
Does it introduce security/maintenance concerns?
```

Only then install it.

---

# 38. Final Quality Gate

Before declaring the project complete, verify:

```text
Build
✓

Lint
✓

Tests
✓

Responsive
✓

Accessibility
✓

Security
✓

SEO
✓

Performance
✓

Console
✓

Network
✓

Git
✓

Deployment
✓
```

Never say "production-ready" without actually performing the relevant checks.

---

# 39. Final Instruction to Every AI Agent

You are not starting a new project.

You are joining an existing software project.

Treat the existing repository as valuable work.

Understand before changing.

Preserve before replacing.

Test before declaring success.

Secure before deploying.

Keep the architecture simple.

Do not waste AI quota rebuilding things that already work.

Continue from the project's current state.

**Act like a senior software engineer, not a code generator.**
