import { CapabilityItem } from '../types/experience';

export const capabilitiesData: CapabilityItem[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Web Development',
    tagline: 'End-to-end web products from schema design to reactive frontends.',
    description:
      'Translating user requirements into cohesive full-stack web applications. Connecting performant TypeScript frontends with resilient Python backends and structured relational databases.',
    iconName: 'Layers',
    deliverables: [
      'Full-stack architecture from concept to deployed product',
      'Reactive state management & data fetching',
      'Structured database design and migrations',
      'Complete responsive multi-device support',
    ],
    associatedProjects: ['Mehfil', 'Edge Ledger'],
  },
  {
    id: 'backend',
    title: 'Backend Systems & API Architecture',
    tagline: 'Structured, deterministic REST APIs built with FastAPI & Python.',
    description:
      'Developing secure, documented server-side architectures. Implementing strict request validation with Pydantic, controlled CORS policies, rate limiting, and defensive error handling.',
    iconName: 'Server',
    deliverables: [
      'Asynchronous FastAPI REST endpoints',
      'Pydantic request/response schema validation',
      'Honeypot spam defenses & IP rate limiting',
      'Relational schema design in PostgreSQL',
    ],
    associatedProjects: ['Mehfil', 'Digital Legacy & Inheritance System'],
  },
  {
    id: 'ai-engineering',
    title: 'AI Product Development',
    tagline: 'Embedding intelligent capabilities into real products without visual clutter.',
    description:
      'Designing practical AI user experiences by bridging state-of-the-art LLM APIs into existing software workflows. Focusing on prompt chaining, structured JSON outputs, and graceful fallbacks.',
    iconName: 'Cpu',
    deliverables: [
      'LLM pipeline integration (OpenAI, Gemini, Anthropic)',
      'Deterministic prompt engineering & scoring engines',
      'Graceful error handling during upstream API timeouts',
      'Token-efficient context payload management',
    ],
    associatedProjects: ['AI Career Copilot'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Implementation & Accessibility',
    tagline: 'Editorial, high-contrast digital interfaces adhering to WCAG 2.2 AA.',
    description:
      'Crafting clean, typography-led digital interfaces that wow visitors through design discipline rather than noise. Ensuring full keyboard accessibility, visible focus indicators, and reduced-motion modes.',
    iconName: 'Code',
    deliverables: [
      'WCAG 2.2 AA compliance & visible focus rings',
      'Fluid responsive layouts from 320px to 1920px',
      'Design token systems using Tailwind CSS',
      'Micro-interactions that respect prefers-reduced-motion',
    ],
    associatedProjects: ['Type Nova-X', 'Zubair.dev'],
  },
];
