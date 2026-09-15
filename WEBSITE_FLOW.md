# Zubair.dev — Website Flow Specification

**Project:** Zubair.dev Developer Portfolio
**Owner:** Zubair Mehmood
**Document Version:** 1.0
**Status:** Implementation Ready
**Related Documents:** PRD.md, TRD.md

---

# 1. Purpose

This document defines the complete user flow of Zubair.dev.

It describes:

* Page structure
* Navigation
* Section order
* User journeys
* Project exploration
* Contact flow
* Mobile behavior
* Loading states
* Error states
* Empty states
* Accessibility behavior
* External-link behavior
* Optional project detail navigation

The implementation should follow this flow unless a deliberate product decision changes it.

---

# 2. Global Website Flow

Primary flow:

```text
Landing
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

The user must be able to reach every important section without getting lost.

---

# 3. Primary User Journey

A first-time visitor should experience:

```text
Open Website
      ↓
Understand Zubair's identity
      ↓
Understand technical focus
      ↓
See proof through projects
      ↓
Explore strongest project
      ↓
Review skills / background
      ↓
Decide whether Zubair is relevant
      ↓
Contact / GitHub / LinkedIn / Resume
```

The portfolio should not force users to read every section before reaching a CTA.

---

# 4. Visitor Intent Paths

Different visitors may have different goals.

## Recruiter

```text
Hero
 ↓
Projects
 ↓
Skills
 ↓
Experience / Education
 ↓
Resume
 ↓
Contact
```

---

## Potential Client

```text
Hero
 ↓
Capabilities
 ↓
Projects
 ↓
Contact
```

---

## Developer

```text
Hero
 ↓
Projects
 ↓
Project Details
 ↓
GitHub
```

---

## General Visitor

```text
Hero
 ↓
About
 ↓
Skills
 ↓
Projects
 ↓
Contact
```

---

# 5. Navigation Flow

Desktop navigation:

```text
Logo
   │
   ├── About
   ├── Skills
   ├── Projects
   ├── Experience
   ├── Contact
   │
   └── CTA
```

Suggested CTA:

```text
Let's Talk
```

or:

```text
Contact
```

---

# 6. Logo / Home Navigation

Clicking the Zubair.dev logo must return the user to the top/home state.

If the site is a single-page application:

```text
Logo click
   ↓
/
   ↓
Scroll to top
```

If already at the top:

No unnecessary navigation should occur.

---

# 7. Section Navigation

Navigation links should use section anchors where practical.

Example:

```text
About → #about
Skills → #skills
Projects → #projects
Experience → #experience
Contact → #contact
```

Smooth scrolling may be enabled.

However, smooth scrolling must respect:

```text
prefers-reduced-motion
```

---

# 8. Active Navigation State

If scroll-spy navigation is implemented:

```text
User scrolls
    ↓
Current section detected
    ↓
Corresponding nav item becomes active
```

Active state must be visually distinguishable without relying only on color.

If scroll-spy introduces unnecessary complexity, simple anchor navigation is preferred.

---

# 9. Hero Flow

The hero is the first major interaction point.

```text
Page Load
   ↓
Hero appears
   ↓
Identity visible
   ↓
Professional role visible
   ↓
Short positioning statement
   ↓
Primary CTA
   ↓
Secondary CTA
   ↓
Social links
```

---

# 10. Hero CTA Flow

## Primary CTA

Suggested:

```text
View Projects
```

Flow:

```text
Click
  ↓
#projects
  ↓
Projects section visible
```

---

## Secondary CTA

Suggested:

```text
Contact Me
```

Flow:

```text
Click
  ↓
#contact
  ↓
Contact section visible
```

---

# 11. Social Links Flow

Social links should open external profiles.

Potential links:

```text
GitHub
LinkedIn
Email
```

External links should generally use:

```html
target="_blank"
rel="noopener noreferrer"
```

where a new tab is intentionally used.

The accessible label must identify the destination.

---

# 12. About Flow

```text
User reaches About
       ↓
Short introduction
       ↓
Current education/background
       ↓
Engineering interests
       ↓
Development direction
```

The section should not become a long autobiography.

Recommended structure:

```text
Heading
   ↓
2–4 short paragraphs or concise content blocks
   ↓
Optional supporting facts
```

---

# 13. Skills Flow

```text
Skills section
      ↓
Category groups
      ↓
Technologies
      ↓
User scans technical breadth
```

Suggested categories:

```text
Languages
Frontend
Backend
Database / Infrastructure
Tools
AI / Product Engineering
```

---

# 14. Skill Interaction

Skill items may have:

* icon
* name
* category
* optional short description

Hover animation is optional.

Skills must remain understandable without hover.

Important information must never exist only in a tooltip.

---

# 15. Projects Flow

Projects are the primary proof section.

```text
Projects section
      ↓
Featured project grid
      ↓
User scans cards
      ↓
Selects interesting project
```

Each project card should expose:

```text
Project name
↓
Short summary
↓
Technology tags
↓
Status
↓
Visual preview
↓
Available actions
```

---

# 16. Project Card Actions

Possible actions:

```text
View Project
View Case Study
Live Demo
GitHub
```

Only display actions that actually exist.

Example:

```text
Project has GitHub
→ Show GitHub

Project has no live deployment
→ Do not show Live Demo
```

Never render broken or placeholder links.

---

# 17. Project Exploration Flow

If project detail pages are enabled:

```text
Projects
   ↓
Project Card
   ↓
View Project
   ↓
/projects/project-slug
   ↓
Project Detail
```

---

# 18. Project Detail Flow

Project detail page:

```text
Project Header
      ↓
Overview
      ↓
Problem
      ↓
Solution
      ↓
Features
      ↓
Technology
      ↓
Architecture
      ↓
Challenges
      ↓
Screenshots
      ↓
Links
      ↓
Related Projects
```

The page should end with a clear next action.

Example:

```text
Back to Projects
```

or:

```text
Let's Work Together
```

---

# 19. Project Detail Navigation

Recommended navigation:

```text
← Back to Projects
```

The browser back button must also work naturally.

If the user refreshes:

```text
/projects/mehfil
```

the page must load correctly.

No project route should depend on a previous navigation event.

---

# 20. Missing Project Data

If a project lacks optional data:

### No image

Use a structured fallback visual.

### No GitHub

Hide GitHub button.

### No live demo

Hide Live Demo button.

### No case study

Use project summary/detail content instead.

Never show:

```text
Coming Soon
```

unless it is intentionally part of the product.

---

# 21. Experience / Education Flow

```text
Experience / Education
        ↓
Timeline or structured cards
        ↓
Current education
        ↓
Relevant experience
        ↓
Supporting context
```

The section should remain concise.

Projects remain the stronger proof of engineering ability.

---

# 22. Capabilities Flow

```text
Capabilities
     ↓
What Zubair can build
     ↓
Capability categories
     ↓
Supporting project examples
```

Possible categories:

```text
Full-Stack Development
Backend Development
AI Product Development
UI Implementation
Product Engineering
```

Where practical, capability cards should connect to relevant projects.

Example:

```text
Backend Development
        ↓
Relevant project
```

---

# 23. Contact Flow

Primary flow:

```text
Contact section
      ↓
User enters information
      ↓
Client-side validation
      ↓
Submit
      ↓
Loading
      ↓
Server request
      ↓
Success / Error
```

---

# 24. Contact Form — Default State

Fields:

```text
Name
Email
Subject (optional)
Message
```

CTA:

```text
Send Message
```

The form should be empty on first load unless prefilled data is intentionally supported.

---

# 25. Contact Validation Flow

```text
User clicks Send
        ↓
Validate fields
        ↓
Valid?
  ├── No → Show field errors
  │
  └── Yes
        ↓
Submit request
```

Validation errors should appear near the relevant fields.

---

# 26. Contact Loading State

During submission:

```text
Submit
  ↓
Button disabled
  ↓
Loading indicator
  ↓
Prevent duplicate submission
```

The user must receive clear feedback that the message is being processed.

---

# 27. Contact Success Flow

```text
API success
    ↓
Success message
    ↓
Form reset
```

Example message:

> Message sent successfully. I'll get back to you soon.

The success message should be accessible to assistive technologies.

---

# 28. Contact Error Flow

```text
API request
     ↓
Failure
     ↓
Readable error message
     ↓
Retry
```

Optional fallback:

```text
Contact me directly by email
```

Never expose:

* API errors
* stack traces
* server paths
* internal exception messages

---

# 29. Contact Network Failure

If the network is unavailable:

```text
Submit
  ↓
Network failure
  ↓
"Unable to send your message right now."
  ↓
Retry
  +
Direct email option
```

The user must not lose their typed message unnecessarily.

---

# 30. Footer Flow

Footer contains:

```text
Zubair.dev
    ↓
Short identity
    ↓
Navigation
    ↓
Social links
    ↓
Contact
    ↓
Copyright
```

Footer links should remain keyboard accessible.

---

# 31. Resume Flow

If a resume is provided:

```text
Resume CTA
    ↓
Resume document
```

Preferred behavior:

* Open in a new tab or download intentionally.
* File must actually exist.
* Link must not be a placeholder.

Do not show the resume CTA until the actual resume is ready.

---

# 32. Theme Flow

If theme switching is implemented:

```text
Initial load
      ↓
Check saved preference
      ↓
Preference exists?
   ├── Yes → Apply saved theme
   │
   └── No → Check system preference
```

Then:

```text
User changes theme
      ↓
Apply theme
      ↓
Save preference
```

Theme transition should not cause major layout shifts.

---

# 33. Mobile Navigation Flow

```text
Mobile page
     ↓
Menu button
     ↓
Open navigation
     ↓
Focus first navigation item
```

Inside menu:

```text
Navigation item
   ↓
Navigate
   ↓
Menu closes
   ↓
Focus returns appropriately
```

Escape:

```text
Escape
  ↓
Close menu
  ↓
Restore focus to trigger
```

---

# 34. Mobile Menu Error Prevention

The mobile menu must not:

* remain open after navigation
* prevent scrolling permanently
* trap focus incorrectly
* create duplicate navigation
* cover critical content without a close mechanism

---

# 35. Page Loading Flow

For a static Vite portfolio:

```text
Browser request
      ↓
HTML
      ↓
JS/CSS
      ↓
Application renders
```

The page should not show an unnecessary full-screen loading screen.

Critical content should render as quickly as possible.

---

# 36. Error Boundary Flow

If a runtime rendering error occurs:

```text
Component error
      ↓
Error boundary
      ↓
Fallback UI
```

Fallback should provide:

```text
Something went wrong.
Please refresh the page.
```

Optionally:

```text
Return Home
```

Development mode may expose more detailed debugging information.

Production must not expose internal errors.

---

# 37. 404 Flow

If project routes are implemented:

```text
Unknown URL
      ↓
404 page
      ↓
Message
      ↓
Back Home
```

Example:

```text
404

This page doesn't exist.

← Back to Zubair.dev
```

---

# 38. External Link Flow

External links must:

* point to real destinations
* use accessible labels
* not be placeholders
* be tested before deployment

Examples:

```text
GitHub
LinkedIn
Live Demo
Email
```

---

# 39. Keyboard User Flow

A keyboard-only visitor should be able to:

```text
Load page
   ↓
Tab
   ↓
Navbar
   ↓
Hero CTA
   ↓
Social links
   ↓
Sections
   ↓
Projects
   ↓
Contact form
   ↓
Footer
```

No important interaction may require a mouse.

---

# 40. Focus Flow

Focus order must follow logical visual order.

Avoid:

```text
Visual order:
Navbar → Hero → Projects → Contact

Keyboard order:
Contact → Hidden menu → Hero → Projects
```

DOM structure should support logical navigation.

---

# 41. Reduced Motion Flow

When reduced motion is enabled:

```text
Page loads
   ↓
No unnecessary entrance animations
   ↓
No parallax
   ↓
Minimal transitions
   ↓
All content remains accessible
```

The design should still look intentional without animation.

---

# 42. Long Content Flow

If a project title is long:

```text
Long title
   ↓
Wrap naturally
   ↓
Card height adapts
```

Do not force:

```text
overflow: hidden
```

in a way that hides important content.

---

# 43. Long Description Flow

Long descriptions must:

* wrap naturally
* maintain readable line length
* avoid horizontal scrolling
* preserve card structure

If content becomes too long:

```text
Summary
   ↓
Project detail page
```

should provide the full content.

---

# 44. Small Screen Flow

At approximately 320px width:

```text
Navbar
 ↓
Hero
 ↓
Content
 ↓
Cards
 ↓
Forms
 ↓
Footer
```

The page must not create unintended horizontal scrolling.

---

# 45. Touch Interaction

Interactive controls must have adequate touch target size.

Avoid tiny:

```text
icon-only controls
```

unless they are intentionally designed with sufficient hit area and accessible labeling.

---

# 46. Empty Portfolio States

If no project exists in a category:

```text
Category
   ↓
No matching projects
```

The interface should communicate this clearly.

However, V1 should prioritize featured projects rather than implementing complex filtering unless required.

---

# 47. Optional Project Filtering

Filtering is not required for V1.

If added:

```text
All
Frontend
Backend
AI
Full-Stack
```

Flow:

```text
Select category
     ↓
Project list updates
     ↓
Accessible status/update
```

Filter state should be understandable without animation.

---

# 48. Optional Search

Search is not required.

Do not add project search merely for visual complexity.

If project count grows significantly, search can be introduced later.

---

# 49. Performance Flow

The initial experience should be:

```text
Request
 ↓
Critical UI
 ↓
Hero content
 ↓
Primary styling
 ↓
Projects
 ↓
Non-critical media/effects
```

Heavy decorative effects must not delay the main content.

---

# 50. SEO Flow

Search engine flow:

```text
Crawler
   ↓
Semantic HTML
   ↓
Title
   ↓
Description
   ↓
Content
   ↓
Project information
   ↓
Social metadata
```

Important content must exist in actual HTML/DOM rather than being rendered only inside decorative effects.

---

# 51. Analytics Flow

If analytics are introduced:

```text
Visitor
   ↓
Privacy-aware analytics
   ↓
Minimal event tracking
```

Possible events:

```text
project_open
github_click
resume_click
contact_submit
```

Analytics must remain optional.

---

# 52. Recommended Primary Conversion Flow

The most important conversion path is:

```text
Hero
  ↓
Featured Projects
  ↓
Project Detail
  ↓
GitHub / Live Demo
  ↓
Contact
```

Secondary conversion:

```text
Hero
  ↓
Contact
```

Third:

```text
Hero
  ↓
Resume
```

---

# 53. Recommended First-Time Visitor Experience

A first-time visitor should understand the following in this order:

### 0–5 seconds

Who is this?

### 5–15 seconds

What does he build?

### 15–30 seconds

What proof does he have?

### 30–60 seconds

What technologies and background does he have?

### After 60 seconds

How can I contact or explore his work?

This should guide visual hierarchy.

---

# 54. Global Interaction Rules

Every interactive component must support:

```text
Default
Hover
Focus-visible
Active
Disabled
Loading
Error
Success
```

Only applicable states need to be implemented.

For example, a static navigation link does not need a loading state.

---

# 55. Global Accessibility Flow

```text
Page load
   ↓
Semantic structure
   ↓
Keyboard navigation
   ↓
Visible focus
   ↓
Accessible labels
   ↓
Accessible form feedback
   ↓
Reduced motion
```

Accessibility must work without requiring a mouse.

---

# 56. Global Error Philosophy

Errors should be:

* understandable
* actionable
* non-technical
* recoverable where possible

Bad:

> Error 500: AxiosError ECONNREFUSED...

Good:

> We couldn't send your message right now. Please try again or contact me directly by email.

---

# 57. Global Loading Philosophy

Do not use loading indicators when there is no actual loading.

Avoid fake:

```text
Loading portfolio...
```

for static content.

Use loading states only for asynchronous operations.

---

# 58. Global Empty-State Philosophy

Empty states should be intentional.

Do not expose raw:

```text
undefined
null
N/A
```

to users.

Optional content should either:

* disappear gracefully
* use an intentional fallback

---

# 59. Complete Website Flow

The complete expected experience is:

```text
                         ┌───────────────┐
                         │   Zubair.dev   │
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │     Hero      │
                         └───────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
           Projects           About             Contact
              │                  │                  │
              ▼                  ▼                  ▼
        Project Detail         Skills          Contact Form
              │                  │                  │
        ┌─────┴─────┐            ▼            ┌─────┴─────┐
        │           │        Experience       │           │
        ▼           ▼            │            ▼           ▼
      GitHub      Live Demo      ▼          Success     Error
                                 │
                                 ▼
                            Capabilities
                                 │
                                 ▼
                              Footer
```

---

# 60. Final Flow Principle

The website should always guide the visitor toward one of three meaningful outcomes:

```text
Explore Work
     OR
Understand the Engineer
     OR
Start a Conversation
```

Everything else is secondary.

The experience must remain:

**Clear → Fast → Accessible → Interesting → Credible → Actionable**

---

# 61. Flow Definition of Done

* [ ] Home flow is defined.
* [ ] Navigation flow is defined.
* [ ] Hero CTA flow is defined.
* [ ] Project exploration flow is defined.
* [ ] Optional project detail flow is defined.
* [ ] Contact flow is defined.
* [ ] Form states are defined.
* [ ] Mobile navigation flow is defined.
* [ ] Keyboard flow is defined.
* [ ] Reduced-motion flow is defined.
* [ ] Loading states are defined.
* [ ] Error states are defined.
* [ ] Empty states are defined.
* [ ] 404 flow is defined.
* [ ] External links behavior is defined.
* [ ] Theme flow is defined.
* [ ] Resume flow is defined.
* [ ] Performance flow is defined.
* [ ] SEO flow is defined.

---

# 62. Final User Experience Principle

The visitor should never have to wonder:

> "What is this website?"

or:

> "What am I supposed to click?"

or:

> "How do I contact this person?"

Zubair.dev should make the path obvious:

> **Understand → Explore → Trust → Connect.**
