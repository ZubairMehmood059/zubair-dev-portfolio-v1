# Zubair.dev — UI/UX Design Brief

**Project:** Zubair.dev Developer Portfolio
**Owner:** Zubair Mehmood
**Document Version:** 1.0
**Status:** Implementation Ready
**Related Documents:** PRD.md, TRD.md, WEBSITE_FLOW.md

---

# 1. Design Objective

Zubair.dev must look and feel like a serious software engineer's personal product.

The design must communicate:

* Technical confidence
* Simplicity
* Modern engineering
* Product thinking
* Strong typography
* Real project credibility
* Attention to detail

The design should be inspired by the supplied `leeshark_portfolio` reference direction without becoming a visual clone.

---

# 2. Design Personality

The visual personality is:

```text
Technical
    +
Minimal
    +
Bold
    +
Editorial
    +
Modern
    +
Slightly Experimental
```

The website should feel:

> **clean enough for a recruiter, interesting enough for a developer, and polished enough for a client.**

---

# 3. Visual Direction

## Primary Direction

Use:

* Dark background
* Bright text
* Lime/acid accent
* Strong typography
* Thin borders
* Controlled spacing
* Subtle motion
* Minimal visual noise

Avoid turning the website into a generic:

* AI dashboard
* SaaS landing page
* neon cyberpunk website
* glassmorphism template

---

# 4. Reference Influence

The `leeshark_portfolio` reference should influence:

* visual restraint
* dark-first presentation
* typography hierarchy
* technical/editorial feeling
* compact metadata
* strong spacing
* high contrast
* implementation-oriented structure

It must **not** be copied in:

* exact layout
* exact component placement
* source code
* exact text
* exact assets
* exact animations
* exact visual composition

The final design must establish its own identity as Zubair.dev.

---

# 5. Brand Identity

## Brand

**Zubair.dev**

## Name

**Zubair Mehmood**

## Primary Professional Label

**Software Engineer**

## Supporting Positioning

**Full-Stack Developer / AI Product Engineer**

The final wording must reflect actual demonstrated skills.

---

# 6. Color System

## Background

Primary background:

```css
--color-bg: oklch(0.11 0.01 260);
```

Visual intent:

> Near-black technical canvas.

---

## Surface

```css
--color-surface: oklch(0.15 0.012 260);
```

Used for:

* cards
* panels
* navigation surfaces
* form fields

---

## Raised Surface

```css
--color-surface-raised: oklch(0.19 0.012 260);
```

Used for:

* hover states
* elevated cards
* focused areas
* selected components

---

## Primary Text

```css
--color-text: oklch(0.94 0.01 260);
```

Used for:

* headings
* primary body text
* important labels

---

## Secondary Text

```css
--color-text-muted: oklch(0.70 0.02 260);
```

Used for:

* supporting text
* metadata
* descriptions
* secondary navigation

Contrast must be verified against the actual background.

---

## Accent

Primary accent:

```css
--color-accent: oklch(0.88 0.24 115);
```

Visual direction:

> Acid/lime green.

Use accent for:

* primary CTA
* active states
* important links
* small highlights
* status indicators
* selected navigation
* decorative details

Do not use accent as the main background of large sections.

---

## Border

```css
--color-border: oklch(1 0 0 / 0.12);
```

Borders should remain subtle.

---

# 7. Color Usage Ratio

A rough visual ratio should be:

```text
Dark background     ~70–80%
Surface / panels    ~10–15%
Text                ~10%
Accent              ~2–5%
```

These are visual guidelines, not strict mathematical requirements.

The accent must remain visually special.

---

# 8. Color Accessibility

Every important color combination must be tested.

Must verify:

* normal text
* large text
* buttons
* links
* muted text
* focus indicators
* form errors
* success messages

Do not assume the provided color tokens automatically meet WCAG 2.2 AA.

---

# 9. Typography

## Font Strategy

Default system stack:

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

A Google Font may be introduced only if it materially improves the design.

Do not load unnecessary font families.

---

# 10. Type Scale

Base:

```text
16px
```

Scale:

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

Hero typography may scale beyond 48px on large screens.

---

# 11. Typography Hierarchy

## Hero

Very large, bold, high-impact.

## Section Heading

Strong but smaller than hero.

## Card Heading

Medium/strong.

## Body

Comfortable reading size.

## Metadata

Small and muted.

---

# 12. Typography Rules

Must:

* maintain readable line length
* maintain clear hierarchy
* use weight intentionally
* wrap naturally
* avoid text overflow

Should:

* use fewer font weights
* use typography as a major visual element
* use uppercase sparingly for metadata

Do not:

* use tiny body text
* use decorative fonts for long content
* use excessive bold text
* create huge headings that break mobile layouts

---

# 13. Spacing System

Primary spacing:

```text
8px
12px
16px
24px
32px
48px
64px
96px
128px
```

Use smaller spacing inside components.

Use larger spacing between major sections.

---

# 14. Section Spacing

Desktop:

```text
64–128px
```

between major sections depending on content density.

Mobile:

```text
48–80px
```

depending on viewport size and section complexity.

Avoid excessive empty space that makes the portfolio feel unfinished.

---

# 15. Radius System

```css
--radius-xs: 8px;
--radius-sm: 10px;
--radius-md: 14px;
--radius-lg: 18px;
--radius-full: 9999px;
```

Use:

### 8px

Small controls.

### 10px

Compact cards.

### 14px

Normal cards/inputs.

### 18px

Large visual containers.

### 9999px

Pills, tags, avatars, circular elements.

---

# 16. Border System

Default border:

```text
1px solid subtle border
```

Borders should provide structure without visually dominating the interface.

Avoid thick borders throughout the entire page.

---

# 17. Shadows

Shadows should be subtle.

Dark UI should not rely on huge shadows.

Prefer:

```text
border
+
surface contrast
+
small elevation
```

instead of:

```text
huge glowing shadow
```

---

# 18. Glassmorphism Rule

Glassmorphism is **not** the primary visual language.

If used:

* use sparingly
* maintain text contrast
* avoid excessive blur
* avoid making every card translucent

The website should still look strong with glass effects disabled.

---

# 19. Navbar Design

Navbar should be:

* compact
* clean
* highly readable
* visually connected to the page
* responsive

Possible structure:

```text
Zubair.dev

About
Skills
Projects
Experience
Contact

[Let's Talk]
```

---

# 20. Navbar States

Must support:

```text
Default
Hover
Focus-visible
Active
Scrolled
Mobile-open
```

If a sticky navbar is used, it must not consume excessive vertical space.

---

# 21. Hero Design

The hero is the strongest visual moment.

Suggested composition:

```text
Eyebrow

Large heading

Short positioning statement

[View Projects] [Contact Me]

GitHub   LinkedIn   Resume
```

Optional visual element may be positioned beside or behind the content.

The visual must not compete with the headline.

---

# 22. Hero Visual Philosophy

Possible visual treatments:

* subtle grid
* technical lines
* small glow
* abstract geometry
* code-inspired metadata
* restrained motion

Avoid:

* huge 3D scenes
* distracting particles
* constantly moving backgrounds
* excessive neon

The hero must remain usable if decorative effects fail.

---

# 23. About Design

The About section should feel editorial.

Possible layout:

```text
ABOUT
──────────────

Short introduction        Supporting facts
                           or small metadata

Engineering direction
```

Use whitespace to create hierarchy.

Do not create a giant wall of text.

---

# 24. Skills Design

Skills should use grouped categories.

Example:

```text
LANGUAGES
Python
JavaScript
TypeScript
Java

FRONTEND
React
Vite
Tailwind CSS

BACKEND
Python
FastAPI
REST APIs
```

Each group should visually feel related.

---

# 25. Skill Cards

Skill cards may contain:

* icon
* technology name
* short descriptor

Avoid fake percentage bars such as:

```text
Python 93%
React 87%
```

unless a meaningful and defensible measurement exists.

Prefer categorical presentation.

---

# 26. Projects Section

Projects must be the strongest proof section.

Suggested heading:

> Selected Work

or:

> Things I've Built

The final wording can be selected during implementation.

---

# 27. Project Card Design

Each card should have:

```text
Image / visual
Category
Title
Short description
Technology tags
Status
Actions
```

Example:

```text
FULL-STACK

Mehfil

Pakistan-focused events platform...

React  FastAPI  PostgreSQL

In Development

[View Project] [GitHub]
```

---

# 28. Project Card Visual Hierarchy

Priority:

```text
1. Project title
2. Project visual
3. Summary
4. Technology
5. Actions
6. Metadata
```

Do not make technology tags visually louder than the project name.

---

# 29. Project Hover

Desktop hover may provide:

* slight elevation
* border change
* image scale
* accent detail
* subtle movement

Avoid:

* large card jumps
* excessive scale
* distracting glow
* important information appearing only on hover

---

# 30. Project Focus State

Keyboard focus must be clearly visible.

The card/link should communicate:

> This element is currently focused.

Focus must not depend only on color.

---

# 31. Project Image Treatment

Images should:

* have consistent aspect ratios where possible
* avoid distortion
* load efficiently
* have meaningful alt text when informative
* use decorative treatment only when appropriate

Possible aspect ratio:

```text
16:10
```

or another consistent ratio based on final assets.

---

# 32. Experience Design

Experience/Education should be visually quieter than Projects.

Possible layout:

```text
2026 — Present
Software Engineering
SSUET University

Previous / Relevant Experience
...
```

Use timeline or stacked entries.

Do not make the timeline overly decorative.

---

# 33. Capabilities Design

Capabilities should communicate practical engineering output.

Possible cards:

```text
FULL-STACK
Build complete web products.

BACKEND
Build APIs and backend systems.

AI PRODUCTS
Build AI-powered product experiences.

UI IMPLEMENTATION
Turn designs into responsive interfaces.
```

Cards should be concise.

---

# 34. Contact Design

Contact section should feel like a clear invitation rather than another generic form.

Possible heading:

> Have a project in mind?

Supporting text:

> Let's build something useful.

Then:

```text
Name
Email
Subject
Message

[Send Message]
```

---

# 35. Form Input Design

Inputs:

* dark surface
* subtle border
* clear label
* visible focus
* readable text
* accessible error state

Avoid:

* floating labels unless necessary
* placeholder-only labels
* excessive rounded shapes
* low-contrast placeholders

---

# 36. Form States

Every relevant input should support:

```text
Default
Hover
Focus
Error
Disabled
```

Form submission supports:

```text
Loading
Success
Error
```

---

# 37. Error Design

Error styling should be noticeable but not visually aggressive.

Error message:

* appears near field
* explains what needs fixing
* uses icon only as supporting information
* does not rely solely on red color

---

# 38. Success Design

Success should be concise.

Example:

> Message sent successfully.

Optional supporting text:

> Thanks for reaching out. I'll get back to you soon.

Do not replace the entire page with a giant success screen.

---

# 39. Footer Design

Footer should be minimal.

Suggested:

```text
Zubair.dev

Software Engineer building digital products.

GitHub
LinkedIn
Email

© 2026 Zubair Mehmood
```

---

# 40. Iconography

Use **Lucide React** as the default icon system.

Icons must:

* have consistent visual weight
* have accessible labels when interactive
* not replace text unnecessarily

Icon-only buttons must have:

```text
aria-label
```

---

# 41. Button System

Primary button:

* accent background
* dark text if contrast is sufficient
* strong visual hierarchy

Secondary button:

* transparent/surface background
* border
* light text

Text/link button:

* minimal visual treatment
* accent on interaction

---

# 42. Button Dimensions

Buttons should have comfortable interaction areas.

Suggested:

```text
Height: 40–48px
Horizontal padding: 16–20px
```

Small icon controls must still have adequate hit areas.

---

# 43. Badge / Tag System

Technology tags should be:

* compact
* readable
* low visual priority
* consistent

Example:

```text
React
FastAPI
PostgreSQL
Python
```

Use pill radius if appropriate.

Do not use a different visual style for every technology.

---

# 44. Responsive Design

## Mobile

Priority:

```text
Content
↓
Readability
↓
Navigation
↓
Touch interaction
↓
Decorative effects
```

Desktop allows more visual experimentation.

Mobile must not simply be a compressed desktop design.

---

# 45. Mobile Hero

Hero should become:

```text
Eyebrow
Heading
Description
CTA
Social links
```

Stack vertically.

The heading must not overflow horizontally.

---

# 46. Mobile Projects

Preferred:

```text
Single-column cards
```

Cards should remain visually rich without becoming excessively tall.

---

# 47. Tablet Projects

Possible:

```text
2-column grid
```

depending on available width.

---

# 48. Desktop Projects

Possible:

```text
2–3 column grid
```

depending on final card design.

Featured projects may use larger asymmetric layouts.

---

# 49. Responsive Typography

Hero heading should scale using responsive CSS.

Conceptually:

```text
Mobile: 40–52px
Tablet: 52–64px
Desktop: 64–88px
```

Actual values should be tuned visually.

Never allow oversized text to cause horizontal scrolling.

---

# 50. Motion Design Language

Motion should feel:

```text
Intentional
Fast
Smooth
Controlled
```

Not:

```text
Constant
Bouncy
Distracting
```

---

# 51. Motion Types

Recommended:

### Entrance

Subtle fade/translate.

### Hover

Small movement/elevation.

### Navigation

Short smooth transition.

### Project

Image/card interaction.

### Form

State transition.

---

# 52. Motion Timing

```text
150ms
```

Micro-interactions.

```text
300ms
```

Standard transitions.

```text
500–700ms
```

Large entrance/emphasis.

Do not make ordinary interactions wait 700ms.

---

# 53. Reduced Motion

When:

```text
prefers-reduced-motion: reduce
```

Then:

* disable unnecessary transforms
* reduce animation duration
* remove parallax
* stop decorative looping effects

The page must remain visually coherent.

---

# 54. UI Library Architecture

The four requested UI resources must have clearly separated responsibilities.

```text
                    DESIGN TOKENS
                         │
                         ▼
                  Tailwind / CSS
                         │
                         ▼
                  Base UI Components
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Magic UI       Smooth UI      Unhuman AI
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                   Page Sections
                         │
                         ▼
                     Zubair.dev
```

Retro UI remains outside the normal design system.

---

# 55. Magic UI Rules

Magic UI is the primary enhancement library.

Recommended use:

* Hero visual
* animated border
* subtle background effect
* special project showcase
* controlled reveal

Magic UI must not replace the core design system.

If a Magic UI component creates:

* excessive bundle size
* accessibility problems
* poor mobile behavior
* unnecessary animation

then do not use it.

---

# 56. Unhuman AI Rules

Unhuman AI should be limited to AI-oriented experiences.

Good use:

```text
AI Career Copilot
AI Product section
AI capability visual
AI project detail
```

Bad use:

```text
Entire portfolio looks like an AI command center.
```

The personal portfolio must remain an engineering portfolio.

---

# 57. Smooth UI Rules

Smooth UI may be used for:

* interaction polish
* transitions
* small visual effects
* component-level motion

Do not use Smooth UI and Motion for React to duplicate the same animation system unnecessarily.

Choose one implementation for each interaction.

---

# 58. Retro UI Rules

Retro UI is:

```text
OFF BY DEFAULT
```

It may be used only for:

* a specific retro-themed project
* a project showcase
* a controlled Easter egg
* a dedicated visual subsection

It must not redefine the main Zubair.dev design.

---

# 59. Four-Library Conflict Rule

Never do this:

```text
Navbar → Retro UI
Hero → Unhuman AI
Projects → Magic UI
Buttons → Smooth UI
Forms → another unrelated library
```

without a coherent reason.

This produces a visually inconsistent website.

Instead:

```text
Core system → Tailwind + custom components
Special effects → Magic UI
AI-specific → Unhuman AI
Interaction enhancement → Smooth UI
Retro project only → Retro UI
```

---

# 60. Component State Matrix

Every interactive component must define relevant states.

| Component    | Default | Hover | Focus | Active | Disabled | Loading  | Error    |
| ------------ | ------- | ----- | ----- | ------ | -------- | -------- | -------- |
| Button       | ✓       | ✓     | ✓     | ✓      | ✓        | ✓        | optional |
| Link         | ✓       | ✓     | ✓     | ✓      | optional | —        | —        |
| Input        | ✓       | ✓     | ✓     | —      | ✓        | optional | ✓        |
| Textarea     | ✓       | ✓     | ✓     | —      | ✓        | optional | ✓        |
| Project Card | ✓       | ✓     | ✓     | ✓      | optional | optional | optional |
| Mobile Menu  | closed  | —     | ✓     | ✓      | —        | —        | optional |
| Contact Form | ✓       | —     | ✓     | —      | ✓        | ✓        | ✓        |

---

# 61. Accessibility Design Rules

The design must support:

* keyboard navigation
* screen readers
* visible focus
* semantic headings
* proper labels
* readable contrast
* reduced motion
* touch interaction

Never communicate meaning using color alone.

---

# 62. Focus Ring

Recommended:

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}
```

The exact implementation may use Tailwind utilities.

Focus must remain visible against both dark and light themes.

---

# 63. Hover-Only Information Rule

Important information must never exist only on hover.

Bad:

```text
Project description appears only on hover.
```

Good:

```text
Project description is always visible.
Hover adds visual enhancement.
```

---

# 64. Accessibility and Animation Rule

Animation must never communicate the only meaning of a state.

Example:

Bad:

```text
Button changes color only.
```

Good:

```text
Button changes appearance
+
accessible state remains understandable.
```

---

# 65. Content Density

The design should feel information-rich without becoming cluttered.

Reference-level density can include:

* compact navigation
* project metadata
* technology tags
* concise sections
* strong headings

But whitespace must separate major ideas.

---

# 66. Visual Hierarchy

Priority order:

```text
1. Identity
2. Main message
3. Projects
4. CTA
5. Skills
6. Background information
7. Secondary metadata
```

Do not allow decorative effects to outrank actual project content.

---

# 67. Decorative Backgrounds

Optional:

* grid
* dots
* subtle glow
* lines
* noise texture

Rules:

* low contrast
* low opacity
* never reduce readability
* never create excessive GPU usage
* never become the primary content

---

# 68. Selection Styling

Optional accent selection:

```css
::selection {
  background: var(--color-accent);
}
```

Text color must remain readable.

---

# 69. Scrollbar

Custom scrollbar styling is optional.

If implemented:

* keep it subtle
* preserve usability
* do not make scrollbar extremely thin
* do not use accent color excessively

Native scrollbar is acceptable.

---

# 70. Empty / Missing Visuals

If a project has no screenshot:

Use:

```text
project-specific abstract placeholder
```

rather than:

```text
broken image icon
```

The placeholder must not falsely represent the actual application.

---

# 71. Image Alt Text

Informative project screenshot:

```text
alt="Mehfil event discovery interface"
```

Decorative image:

```text
alt=""
```

Do not use:

```text
alt="image"
```

---

# 72. Content Tone

Writing should be:

* concise
* confident
* technical
* natural
* human
* specific

Avoid:

> "I am a highly passionate, dedicated, innovative developer who loves turning ideas into reality."

Prefer specific descriptions of actual work.

---

# 73. CTA Language

Preferred:

```text
View Projects
Explore Work
Let's Talk
Contact Me
View on GitHub
Live Demo
Read Case Study
```

Avoid:

```text
Click Here
Learn More!!!
Hire Me Now!!!
```

unless the context genuinely requires it.

---

# 74. Microcopy

Use short functional messages.

Examples:

```text
Message sent successfully.
Something went wrong. Try again.
No live demo available.
View source on GitHub.
```

Avoid unnecessary conversational filler.

---

# 75. Visual Anti-Patterns

Do not use:

* excessive neon
* rainbow gradients
* giant glowing text
* animated background everywhere
* excessive glass cards
* too many floating elements
* excessive rounded containers
* huge shadows
* unnecessary 3D
* multiple conflicting design systems

---

# 76. UX Anti-Patterns

Do not:

* hide navigation
* require hover for important content
* use icon-only buttons without labels
* use placeholder text as labels
* make tiny click targets
* create inaccessible modals
* auto-play distracting media
* create unnecessary loading screens
* force users through a long animation before content appears

---

# 77. Desktop Visual Density

Desktop should feel:

```text
Dense enough to feel engineered
+
Spacious enough to feel premium
```

Do not stretch every section across the entire screen without a content reason.

---

# 78. Mobile Visual Density

Mobile should feel:

```text
Focused
Readable
Compact
Touch-friendly
```

Reduce decorative complexity before reducing content clarity.

---

# 79. Theme Strategy

Dark mode is the primary design.

Light mode is optional.

If light mode is implemented:

* define separate surface colors
* verify contrast
* preserve accent meaning
* test every component
* avoid simply reversing black/white

---

# 80. Design Token Source of Truth

The design system must have one source of truth.

Recommended:

```text
tokens.css
     ↓
Tailwind configuration / CSS variables
     ↓
Reusable components
```

Do not define the same color independently in ten components.

Bad:

```text
bg-[#111]
bg-[#101010]
bg-[#121212]
```

Good:

```text
bg-surface
```

or equivalent design token.

---

# 81. Component Reuse

If the same visual pattern appears more than once, consider creating a reusable component.

Examples:

```text
ProjectCard
Badge
SectionHeading
Button
SocialLink
```

Avoid creating a new custom implementation for every section.

---

# 82. Design QA Checklist

Before final approval:

### Visual

* [ ] Colors consistent.
* [ ] Typography consistent.
* [ ] Spacing consistent.
* [ ] Borders consistent.
* [ ] Radius consistent.
* [ ] Buttons consistent.
* [ ] Cards consistent.

### Responsive

* [ ] 320px tested.
* [ ] 375px tested.
* [ ] 768px tested.
* [ ] 1024px tested.
* [ ] 1280px tested.
* [ ] Wide desktop tested.

### Interaction

* [ ] Hover states work.
* [ ] Focus states work.
* [ ] Active states work.
* [ ] Disabled states work.
* [ ] Loading states work.
* [ ] Error states work.
* [ ] Success states work.

### Accessibility

* [ ] Keyboard navigation works.
* [ ] Focus is visible.
* [ ] Labels exist.
* [ ] Contrast verified.
* [ ] Reduced motion works.
* [ ] No keyboard traps.
* [ ] Interactive elements have accessible names.

---

# 83. Library QA Checklist

Before adding a UI library component:

* [ ] Does the project actually need it?
* [ ] Does it match the design system?
* [ ] Is it responsive?
* [ ] Is it accessible?
* [ ] Does it increase bundle size significantly?
* [ ] Does it duplicate an existing component?
* [ ] Does it introduce another animation system?
* [ ] Can it be customized?
* [ ] Does it work with the current Tailwind setup?

If the answer is unfavorable, do not use the component.

---

# 84. Final Design Rule

The design system exists to make the website coherent.

Therefore:

> **Consistency beats novelty.**

A single excellent animation is better than twenty mediocre animations.

A strong project screenshot is better than a complicated 3D background.

Clear typography is better than excessive visual effects.

Good UX is more important than showing how many UI libraries were used.

---

# 85. Final Visual Principle

Zubair.dev should ultimately feel like:

> **A developer who knows how to build software and also understands how good products should feel.**

The website must communicate:

**Technical → Clean → Distinctive → Credible → Human.**

---

# 86. Definition of Done

* [ ] Color tokens defined.
* [ ] Typography defined.
* [ ] Spacing defined.
* [ ] Radius defined.
* [ ] Component states defined.
* [ ] Responsive rules defined.
* [ ] Accessibility rules defined.
* [ ] Motion rules defined.
* [ ] Dark theme defined.
* [ ] Light theme decision documented.
* [ ] Navbar design defined.
* [ ] Hero design defined.
* [ ] Project card design defined.
* [ ] Contact form design defined.
* [ ] Footer design defined.
* [ ] UI library responsibilities defined.
* [ ] Anti-patterns documented.
* [ ] QA checklist defined.

---

# 87. Final UI/UX Statement

The final interface must not look like four UI libraries placed together.

It must look like **one coherent product**.

The libraries are implementation tools.

The **Zubair.dev design system remains the source of truth.**
