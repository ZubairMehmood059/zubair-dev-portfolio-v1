# Zubair.dev — Product Requirements Document (PRD)

**Project:** Zubair.dev Developer Portfolio
**Owner:** Zubair Mehmood
**Product Type:** Personal Developer / Software Engineering Portfolio
**Document Version:** 1.0
**Status:** Implementation Ready
**Primary Goal:** Present Zubair as a credible Software Engineer / AI Product Engineer through a polished, technically strong, high-performance portfolio.

---

## 1. Product Overview

Zubair.dev is a modern developer portfolio designed to communicate technical ability, real project experience, engineering thinking, and professional identity.

The website should feel like a **real software engineer's product**, not a generic portfolio template.

The visual direction is inspired by the provided `leeshark_portfolio` reference: clean, technical, dark, typography-focused, high contrast, implementation-oriented, and visually distinctive.

The implementation must remain **original** and must not directly clone the reference website's source code, assets, copy, or exact layout.

### Core positioning

> **Software Engineer building full-stack products, backend systems, and AI-powered experiences.**

The portfolio should quickly communicate:

1. Who Zubair is.
2. What he builds.
3. What technologies he works with.
4. Which projects demonstrate his ability.
5. How someone can contact or work with him.

---

# 2. Product Goals

## 2.1 Primary Goals

The website must:

* Establish a professional developer identity.
* Showcase real software projects.
* Demonstrate frontend and backend capabilities.
* Highlight Python and full-stack development.
* Present AI/product engineering interests without exaggerating expertise.
* Make GitHub and project work easy to explore.
* Provide an easy way to contact Zubair.
* Work well on mobile, tablet, and desktop.
* Feel polished enough to use as a professional portfolio.
* Maintain strong accessibility and performance.
* Be easy to update without rewriting components.

---

## 2.2 Secondary Goals

The website should:

* Encourage recruiters to inspect projects.
* Encourage potential clients to contact Zubair.
* Encourage developers to visit GitHub.
* Provide a downloadable resume.
* Demonstrate good UI/UX implementation skills.
* Demonstrate understanding of responsive design.
* Demonstrate modern React development.
* Demonstrate attention to accessibility, security, and performance.

---

# 3. Target Audience

## Primary Audience

### Recruiters

They should be able to understand within approximately 30–60 seconds:

* Who Zubair is.
* His technical direction.
* His strongest projects.
* His current education/career stage.
* How to contact him.

### Engineering Managers

They should be able to evaluate:

* Technical breadth.
* Project complexity.
* Technology choices.
* Engineering maturity.
* Code/project quality.

### Potential Clients

They should quickly understand:

* What Zubair can build.
* Which technologies he uses.
* Whether he can build complete web products.
* How to contact him.

---

## Secondary Audience

* Developers.
* Startup founders.
* University peers.
* Open-source collaborators.
* Technical communities.

---

# 4. User Problems

The portfolio exists to solve these problems:

### Problem 1 — Generic portfolio perception

Many developer portfolios look like templates and do not communicate actual engineering ability.

**Solution:**
Use real projects, technical details, clear architecture-oriented content, and a strong visual system.

### Problem 2 — Information overload

A portfolio can contain too much information without prioritization.

**Solution:**
Use progressive disclosure and strong hierarchy.

### Problem 3 — Weak project presentation

Simply listing project names and technology tags does not demonstrate engineering ability.

**Solution:**
Each featured project should communicate:

* Problem.
* Product purpose.
* Key functionality.
* Technologies.
* Current status.
* Repository/live link where available.

### Problem 4 — Difficult navigation

Users should not need to search through the website to find important information.

**Solution:**
Provide clear navigation and section hierarchy.

### Problem 5 — Poor mobile experience

Developer portfolios often prioritize desktop design.

**Solution:**
Design mobile-first and test all major layouts across breakpoints.

---

# 5. Product Principles

The following principles are mandatory.

## 5.1 Real over exaggerated

The portfolio must never fabricate:

* Job experience.
* Client work.
* Revenue.
* User counts.
* Certifications.
* Skills.
* Professional achievements.

Only real information supplied by Zubair should be presented as fact.

---

## 5.2 Product over decoration

Visual effects must support the content.

Do not add animation simply because a library provides it.

---

## 5.3 Performance over unnecessary complexity

Every dependency must have a reason.

Avoid:

* unnecessary animation packages
* duplicate UI libraries
* heavy 3D effects
* unnecessary global state
* unnecessary backend services

---

## 5.4 Accessibility is part of the product

Accessibility must not be treated as a final optional task.

Keyboard navigation, focus states, readable contrast, semantic HTML, reduced motion, and form accessibility must be considered during implementation.

---

## 5.5 Original implementation

The reference portfolio is used for:

* visual direction
* density
* typography inspiration
* interaction ideas
* design discipline

It must not be copied exactly.

---

# 6. Brand Identity

## Brand Name

**Zubair.dev**

## Personal Name

**Zubair Mehmood**

## Professional Identity

Primary:

> Software Engineer

Secondary positioning:

> Full-Stack Developer / AI Product Engineer

The exact title should be chosen based on the final content and demonstrated skills.

---

# 7. Visual Direction

The visual language should be:

* Dark-first.
* Minimal.
* Technical.
* Modern.
* High contrast.
* Editorial.
* Typography-driven.
* Slightly experimental.
* Professional.
* Developer-oriented.

### Accent direction

A lime/acid-green accent inspired by the reference may be used as the primary accent.

It must be used carefully for:

* CTA emphasis.
* Active navigation.
* Important metadata.
* Small highlights.
* Interactive states.

The accent must not dominate the entire interface.

---

# 8. Core Website Structure

The primary website should contain:

1. Navigation
2. Hero
3. About
4. Skills / Tech Stack
5. Featured Projects
6. Experience / Education
7. Capabilities
8. Contact
9. Footer

Optional:

10. Project detail pages
11. Resume page/download
12. Blog/articles
13. GitHub activity

Optional features should not delay the core portfolio launch.

---

# 9. Navigation Requirements

The navigation must provide access to major sections.

Suggested navigation:

* Home
* About
* Skills
* Projects
* Experience
* Contact

Primary CTA:

**Let's Talk**

or

**Contact Me**

### Navigation behavior

Desktop:

* Horizontal navigation.
* Sticky or fixed positioning may be used.
* Clear active state.

Mobile:

* Compact navigation.
* Menu button.
* Keyboard accessible menu.
* Focus management.
* Escape-to-close behavior.
* Focus restoration after closing.

---

# 10. Hero Section

The hero is the highest-priority section.

It must answer three questions immediately:

### Who?

Zubair Mehmood.

### What?

Software Engineer / Full-Stack Developer / AI Product Engineer.

### What does he build?

Modern web products, backend systems, and AI-powered applications.

---

## Hero Content Structure

Suggested structure:

**Eyebrow**

> SOFTWARE ENGINEER

**Main heading**

> I build digital products that solve real problems.

**Supporting text**

Short explanation of Zubair's engineering focus.

**Primary CTA**

> View Projects

**Secondary CTA**

> Contact Me

Additional links:

* GitHub
* LinkedIn
* Resume

---

# 11. About Section

The About section should explain:

* Current education.
* Software engineering direction.
* Main technical interests.
* What kind of products Zubair enjoys building.
* Future engineering direction.

The copy should sound personal and natural.

Avoid generic statements such as:

> "I am a passionate developer who loves coding."

Instead, explain actual interests and development direction.

---

# 12. Skills Section

Skills should be grouped rather than displayed as one giant list.

Suggested categories:

### Languages

* Python
* JavaScript
* TypeScript
* Java

Only technologies actually used should be displayed.

### Frontend

* HTML
* CSS
* React
* Vite
* Tailwind CSS

### Backend

* Python
* FastAPI
* REST APIs

### Database / Infrastructure

Only technologies actually used should be listed.

### Tools

* Git
* GitHub
* VS Code

### AI / Product Engineering

This section should only contain technologies that can be honestly demonstrated through projects.

---

# 13. Featured Projects

Projects are the primary proof of engineering ability.

The portfolio should prioritize **quality over quantity**.

Recommended initial featured projects may include real projects such as:

* Mehfil
* AI Career Copilot
* Type Nova-X
* Digital Legacy / Inheritance System
* Edge Ledger

The final list must be confirmed against the actual project state before publication.

---

## Project Card Requirements

Every featured project should include:

* Project name.
* Short description.
* Category.
* Technology stack.
* Status.
* Visual preview.
* GitHub link when available.
* Live link when available.
* Case study/detail link when available.

---

## Project Description Structure

Each project should answer:

### What is it?

One-sentence explanation.

### What problem does it solve?

Short practical explanation.

### What did I build?

Major functionality.

### Technology

Relevant stack.

### Status

Examples:

* In Development
* Completed
* Deployed
* Prototype

Never label a project "production-ready" unless it has actually reached that standard.

---

# 14. Project Detail Pages

Project detail pages are optional for V1 but recommended if enough real project information exists.

A project detail page may include:

1. Overview
2. Problem
3. Solution
4. Features
5. Architecture
6. Technology decisions
7. Challenges
8. Screenshots
9. Results
10. Links

The system should use structured project data so additional projects can be added without creating completely new components.

---

# 15. Experience / Education

The website should contain a concise timeline or structured section.

Education information should be factual.

Example:

**Software Engineering**
SSUET University

Additional academic details may be included if useful.

The section should not overpower the projects section because the portfolio's primary purpose is demonstrating engineering capability.

---

# 16. Capabilities Section

This section communicates what Zubair can build.

Potential categories:

### Full-Stack Web Development

Modern frontend interfaces connected to backend APIs.

### Backend Development

REST APIs, validation, authentication, database integration, and backend architecture.

### AI Product Development

AI-powered product concepts and integrations where supported by actual projects.

### UI Implementation

Responsive, accessible interfaces with modern interaction patterns.

### Product Engineering

Turning an idea into a structured, testable software product.

Only capabilities that can be supported by actual work should remain visible.

---

# 17. Contact Section

The contact section must be simple and direct.

Required fields:

* Name
* Email
* Message

Optional:

* Subject

CTA:

> Send Message

Alternative direct contact options may include:

* Email
* LinkedIn
* GitHub

---

## Contact Form States

The form must support:

### Default

Empty form.

### Focus

Clear focus indicators.

### Validation error

Specific field-level messages.

### Loading

Disable duplicate submission and show progress.

### Success

Show confirmation message.

### Server error

Explain that the message could not be sent and provide retry/direct-email fallback.

### Empty state

Form begins empty.

---

# 18. Footer

Footer should include:

* Zubair.dev
* Short identity statement.
* Navigation links.
* GitHub.
* LinkedIn.
* Contact/email.
* Copyright.

Do not overload the footer with unnecessary links.

---

# 19. Theme

### Primary Theme

Dark theme.

### Optional Theme

Light theme may be supported if it can maintain the same design quality.

If light mode is implemented:

* It must have independently verified contrast.
* It must not simply invert colors.
* Components must remain visually coherent.
* User preference should persist.

---

# 20. Responsive Requirements

The website must support:

### Mobile

Approximately:

`320px–639px`

### Tablet

Approximately:

`640px–1023px`

### Desktop

Approximately:

`1024px–1279px`

### Wide Desktop

`1280px+`

The design must not depend on a single screen size.

---

# 21. Accessibility Requirements

The website must target **WCAG 2.2 AA**.

Required:

* Semantic HTML.
* Keyboard navigation.
* Visible focus indicators.
* Sufficient color contrast.
* Accessible form labels.
* Meaningful button labels.
* Alternative text for informative images.
* Decorative images marked appropriately.
* Reduced-motion support.
* Logical heading hierarchy.
* No keyboard traps.
* Accessible mobile navigation.
* Accessible interactive project cards.

---

# 22. Motion Requirements

Motion should improve:

* Navigation.
* Section transitions.
* Project interaction.
* Feedback.
* Visual hierarchy.

Suggested motion durations:

* Fast: ~150ms
* Standard: ~300ms
* Emphasis: ~500–700ms

Animations must respect:

`prefers-reduced-motion`.

When reduced motion is enabled:

* Remove unnecessary movement.
* Keep essential state changes understandable.
* Avoid parallax-heavy behavior.

---

# 23. UI Library Strategy

The portfolio may use multiple UI resources, but they must not compete with each other.

### Magic UI

Primary source for selected modern animated components.

Use for:

* subtle visual effects
* modern cards
* special hero elements
* controlled animations

### Unhuman AI

Use only for AI/futuristic visual sections where appropriate.

Do not make the entire website look like an AI dashboard.

### Smooth UI

Use selectively for interaction polish where the component genuinely improves UX.

### Retro UI

**Disabled by default.**

Only use it if a specific section or project intentionally requires a retro aesthetic.

The four libraries must not be combined randomly.

---

# 24. Performance Requirements

The portfolio should prioritize fast loading.

Requirements:

* Optimize images.
* Lazy-load non-critical media.
* Avoid unnecessarily large dependencies.
* Minimize JavaScript where possible.
* Avoid animation that causes excessive rendering.
* Use appropriate image dimensions.
* Avoid blocking resources.
* Keep the initial page lightweight.

Target:

* Fast first load.
* Smooth interaction.
* Good Core Web Vitals.

---

# 25. SEO Requirements

The website must contain:

* Meaningful `<title>`.
* Meta description.
* Open Graph metadata.
* Twitter/X metadata where appropriate.
* Canonical URL.
* Semantic headings.
* Descriptive page content.
* Favicon/app icon.
* `robots.txt`.
* `sitemap.xml` if applicable.

Suggested title:

> Zubair Mehmood — Software Engineer

Suggested description should clearly communicate engineering focus without keyword stuffing.

---

# 26. Security Requirements

Frontend:

* No secrets in source code.
* No API keys exposed.
* Sanitize/validate external content.
* Avoid unsafe HTML injection.
* Validate external URLs.

If a backend is implemented:

* Validate all incoming data.
* Restrict CORS.
* Use HTTPS in production.
* Rate-limit contact submissions.
* Add spam protection.
* Do not expose stack traces.
* Do not log unnecessary personal data.
* Store secrets in environment variables.
* Never commit `.env`.

---

# 27. Backend Scope

Backend is **optional for the first version**.

A backend should only be introduced if it provides real value.

Primary potential use:

> Contact form delivery.

Possible architecture:

```text
React + Vite
      |
      | POST /api/contact
      v
FastAPI
      |
      ├── Validation
      ├── Rate limiting
      ├── Spam protection
      └── Email provider
```

A database is not required for V1 unless there is a clear operational reason.

---

# 28. Content Management

V1 should not require a CMS.

Project information should live in typed data structures.

Example:

```ts
type Project = {
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

This allows projects to be updated without changing the UI components.

---

# 29. Analytics

Analytics are optional.

If added, the implementation must prioritize:

* Privacy.
* Performance.
* Minimal tracking.

No analytics dashboard is required for V1.

---

# 30. Out of Scope — V1

The following should not be built unless explicitly approved later:

* User authentication.
* User accounts.
* Admin dashboard.
* CMS.
* Payment system.
* E-commerce.
* Visitor messaging system.
* Complex AI chatbot.
* WebGL/3D as a core dependency.
* Social network.
* Blog CMS.
* Complex analytics dashboard.
* Database-backed project management.
* Unnecessary microservices.

---

# 31. Success Criteria

The portfolio is successful when:

### Professional

* Visitors immediately understand who Zubair is.
* The website looks credible and intentional.
* Content is honest and specific.

### Technical

* Projects demonstrate real engineering work.
* The application uses a clean architecture.
* Components are reusable.
* The website is responsive.
* Code is maintainable.

### UX

* Navigation is intuitive.
* Projects are easy to explore.
* Contact is easy.
* Mobile experience is strong.
* Keyboard navigation works.

### Performance

* Production build succeeds.
* No major console errors.
* No broken links.
* Images are optimized.
* Major interactions remain smooth.

### Accessibility

* Keyboard navigation works.
* Focus states are visible.
* Forms are accessible.
* Contrast is acceptable.
* Reduced motion works.

### Deployment

* Production build succeeds.
* Environment variables are handled correctly.
* No secrets are committed.
* Git repository is clean.
* Production deployment works.

---

# 32. Definition of Done

The portfolio should not be considered complete until:

* [ ] All major sections are implemented.
* [ ] Real personal/project content is inserted.
* [ ] Responsive layouts are tested.
* [ ] Mobile navigation works.
* [ ] Keyboard navigation works.
* [ ] Focus states are visible.
* [ ] Reduced-motion behavior works.
* [ ] Forms have all required states.
* [ ] External links are verified.
* [ ] No major console errors exist.
* [ ] No fake content remains.
* [ ] No secrets exist in the repository.
* [ ] Production build succeeds.
* [ ] SEO metadata exists.
* [ ] Images are optimized.
* [ ] Git repository is clean.
* [ ] Deployment has been tested.

---

# 33. Implementation Guardrails

These rules apply to the entire project.

### Existing work must be preserved.

If implementation already exists:

* Inspect it first.
* Reuse working components.
* Modify only what is necessary.
* Do not delete working functionality unnecessarily.

### No reset/rebuild behavior.

The implementation agent must not:

* Delete the project.
* Recreate the application from scratch.
* Replace the entire codebase unnecessarily.
* Remove working features just to simplify implementation.

### Dependency discipline

Before adding a dependency:

1. Check whether the functionality already exists.
2. Check whether an existing dependency can provide it.
3. Add a new dependency only when justified.

### Testing discipline

After every major implementation phase:

1. Run the application.
2. Check browser console.
3. Test the affected functionality.
4. Fix root causes.
5. Continue only after the feature is stable.

---

# 34. Project Quality Standard

The final result should feel like:

> **A real software engineer's personal product, not a template filled with personal information.**

The website should demonstrate both:

**Engineering ability**

and

**Product/design judgment.**

Visual polish must never hide weak functionality.

Functional quality must never be an excuse for poor UX.

The final portfolio should balance:

**Code + Design + UX + Accessibility + Performance + Content + Professionalism.**

---

# 35. Final Product Statement

Zubair.dev is a personal engineering portfolio designed to establish Zubair Mehmood as a developing Software Engineer and AI Product Engineer through authentic project work, strong technical presentation, accessible interaction, and a distinctive modern visual identity.

The product should communicate one clear message:

> **I don't just learn technologies — I use them to build real products.**
