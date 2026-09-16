import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    slug: 'mehfil',
    title: 'Mehfil',
    category: 'Full-Stack',
    tagline: 'Pakistan-focused cultural events & community discovery platform',
    summary:
      'A comprehensive event discovery and community coordination platform tailored for Pakistani local gatherings, cultural exhibitions, and technical meetups.',
    problem:
      'Community events across Pakistan are typically fragmented across social media groups without structured ticketing, schedule visibility, or standardized discovery mechanisms.',
    solution:
      'Architected a full-stack platform with a reactive frontend and structured FastAPI backend, providing geospatial filtering, event registration, and responsive schedule management.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Pydantic'],
    status: 'In Active Development',
    featured: true,
    repoUrl: 'https://github.com/ZubairMehmood059/mehfil-pak',
    architecturalHighlights: [
      {
        label: 'API Architecture',
        description: 'RESTful endpoints structured with FastAPI and Pydantic schemas for deterministic validation.',
      },
      {
        label: 'Relational Data Model',
        description: 'PostgreSQL schema with optimized indexing on event dates, locations, and category hierarchies.',
      },
      {
        label: 'Responsive UI System',
        description: 'Dark-first responsive event calendar with accessible filters and instant client-side searching.',
      },
    ],
  },
  {
    slug: 'type-nova-x',
    title: 'Type Nova-X',
    category: 'Core Engineering',
    tagline: 'Minimalist high-precision typing speed & accuracy engine',
    summary:
      'A high-performance typing test environment delivering real-time typing analytics, word-per-minute calculations, and keystroke rhythm visualization.',
    problem:
      'Most online typing tests are cluttered with distracting ads, inaccurate client-side interval calculations, and laggy rendering during rapid keystrokes.',
    solution:
      'Engineered an ultra-lean typing engine measuring sub-millisecond keystroke intervals, net WPM, error clustering, and dynamic vocabulary difficulty levels.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Vite'],
    status: 'Completed',
    featured: true,
    repoUrl: 'https://github.com/ZubairMehmood059/type-nova-x',
    architecturalHighlights: [
      {
        label: 'Keystroke Latency Profiling',
        description: 'Optimized event listeners calculating net WPM and accuracy without DOM re-render bottlenecks.',
      },
      {
        label: 'Deterministic Metrics Engine',
        description: 'Accurately computes standardized 5-keystroke words per minute with raw vs net comparisons.',
      },
      {
        label: 'Accessibility & Audio Feedback',
        description: 'Synthesized low-latency mechanical audio feedback with full keyboard navigation support.',
      },
    ],
  },
  {
    slug: 'digital-legacy-system',
    title: 'Digital Legacy & Inheritance System',
    category: 'Backend Systems',
    tagline: 'Digital asset succession & credential custody architecture',
    summary:
      'A digital inheritance architecture designed to explore scheduled verification, custody, and transfer of digital credentials to designated beneficiaries.',
    problem:
      'When an individual passes away or faces incapacitation, critical digital accounts, legal archives, and cryptographic assets are frequently lost permanently.',
    solution:
      'Designed a multi-factor heartbeat check system combined with time-locked credential escrow and automated beneficiary verification workflows.',
    technologies: ['Python', 'FastAPI', 'Cryptography', 'PostgreSQL', 'Docker'],
    status: 'Completed',
    featured: true,
    repoUrl: 'https://github.com/ZubairMehmood059/digital-inheritance-system',
    architecturalHighlights: [
      {
        label: 'Heartbeat Protocol',
        description: 'Configurable automated ping intervals to monitor user status before triggering inheritance protocols.',
      },
      {
        label: 'Cryptographic Escrow',
        description: 'Multi-key threshold scheme ensuring assets cannot be decrypted by unauthorized intermediaries.',
      },
      {
        label: 'Audit Logging',
        description: 'Immutable transaction trails recording every verification and heartbeat lifecycle event.',
      },
    ],
  },
  {
    slug: 'ai-career-copilot',
    title: 'AI Career Copilot',
    category: 'AI / Systems',
    tagline: 'Intelligent resume optimization and technical interview simulator',
    summary:
      'An intelligent assistant that analyzes engineering resumes against targeted job descriptions, detects missing architectural keywords, and simulates role-specific technical interviews.',
    problem:
      'Software candidates struggle to tailor technical resumes to modern applicant tracking systems and lack structured practice for domain-specific interview questions.',
    solution:
      'Integrated LLM API pipelines with structured prompt chaining, semantic scoring, and interactive interview question generations with real-time candidate critique.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Tailwind CSS', 'Pydantic'],
    status: 'In Active Development',
    featured: true,
    repoUrl: 'https://github.com/ZubairMehmood059/ai-career-copilot',
    architecturalHighlights: [
      {
        label: 'Prompt Chaining Architecture',
        description: 'Deconstructs job specs into hard technical requirements and parses candidate resume experiences.',
      },
      {
        label: 'Semantic Fit Scoring',
        description: 'Calculates concrete relevance metrics and highlights missing architectural competencies.',
      },
      {
        label: 'Safe Error Recovery',
        description: 'Graceful fallback mechanisms when upstream AI endpoints experience rate limits or timeouts.',
      },
    ],
  },
  {
    slug: 'edge-ledger',
    title: 'Edge Ledger',
    category: 'Full-Stack',
    tagline: 'Modern responsive financial management and investment interface',
    summary:
      'A sleek, responsive corporate ledger interface designed for financial consultants and asset managers to present investment allocations and performance reports.',
    problem:
      'Financial dashboards are often overwhelmed with poor visual contrast, illegible tables, and broken responsive layouts on mobile devices.',
    solution:
      'Implemented an editorial high-contrast financial UI with fluid typography, responsive data tables, and interactive performance charts.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Vite'],
    status: 'Completed',
    featured: false,
    repoUrl: 'https://github.com/ZubairMehmood059/edge-ledger',
    architecturalHighlights: [
      {
        label: 'Fluid Responsive Layout',
        description: 'Tested across 320px to 1920px viewports with zero horizontal table overflow.',
      },
      {
        label: 'Accessible Data Presentation',
        description: 'High WCAG contrast ratios ensuring financial figures and status badges are immediately legible.',
      },
    ],
  },
  {
    slug: 'qr-code-engine',
    title: 'QR Code Generator Utility',
    category: 'Core Engineering',
    tagline: 'High-speed client-side matrix barcode generator with custom exports',
    summary:
      'A zero-dependency client-side utility for instant QR code generation with error-correction tuning, vector SVG export, and dark-mode styling.',
    problem:
      'Third-party web tools for QR generation are riddled with tracker scripts, slow server round-trips, and paywalled vector downloads.',
    solution:
      'Engineered an instant in-browser QR matrix encoder using HTML5 Canvas and SVG math, providing instant offline generation with zero network lag.',
    technologies: ['TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'Vite'],
    status: 'Completed',
    featured: false,
    repoUrl: 'https://github.com/ZubairMehmood059/qr-generator',
    architecturalHighlights: [
      {
        label: 'Client-Side Synthesis',
        description: 'Entire barcode computation occurs locally on the client thread with 0ms network dependency.',
      },
      {
        label: 'Lossless Vector Export',
        description: 'Direct SVG markup compilation allowing infinite scaling for print and digital publishing.',
      },
    ],
  },
];
