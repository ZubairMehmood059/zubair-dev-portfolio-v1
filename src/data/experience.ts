import { TimelineItem } from '../types/experience';

export const experienceData: TimelineItem[] = [
  {
    id: 'edu-ssuet',
    period: '2023 — Present',
    title: 'Bachelor of Science in Software Engineering',
    organization: 'Sir Syed University of Engineering & Technology (SSUET)',
    location: 'Karachi, Pakistan',
    type: 'Education',
    description:
      'Pursuing formal academic grounding in computer science foundations, algorithm design, software architecture, and distributed database systems.',
    details: [
      'Core coursework: Data Structures & Algorithms, Object-Oriented Analysis & Design, Database Systems, Computer Networks.',
      'Active participation in technical study groups, developer workshops, and collaborative pair-programming.',
      'Applying theoretical paradigms directly into functional full-stack web applications and systems.',
    ],
  },
  {
    id: 'eng-focus',
    period: '2024 — Present',
    title: 'Independent Software & Product Engineering',
    organization: 'Personal & Open-Source Projects',
    location: 'Karachi, Pakistan',
    type: 'Engineering Focus',
    description:
      'Designing and developing end-to-end full-stack software products, typing telemetry engines, and digital succession architectures.',
    details: [
      'Architected "Mehfil", a Pakistan-centric cultural events platform utilizing React, FastAPI, and PostgreSQL.',
      'Built "Type Nova-X", engineering low-latency typing telemetry and client-side WPM calculations.',
      'Designed digital inheritance and legacy transfer concepts with multi-key verification prototypes.',
      'Committed to writing accessible, type-safe, and self-documenting code with zero dependency bloat.',
    ],
  },
];
