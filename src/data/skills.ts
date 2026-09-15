import { SkillGroup } from '../types/skill';

export const skillsData: SkillGroup[] = [
  {
    id: 'languages',
    category: 'Programming Languages',
    description: 'Core languages used for building backend systems, scalable services, and interactive web products.',
    skills: [
      { name: 'Python', focus: 'Backend APIs, Automation & Systems' },
      { name: 'TypeScript', focus: 'Type-Safe Frontend & Server Logic' },
      { name: 'JavaScript (ES6+)', focus: 'Modern Web Architecture' },
      { name: 'Java', focus: 'Object-Oriented Programming & Data Structures' },
      { name: 'SQL', focus: 'Relational Queries & Optimization' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend Engineering',
    description: 'Modern component-driven development with emphasis on performance, accessibility, and high visual polish.',
    skills: [
      { name: 'React', focus: 'Hooks, Component Architecture, State Management' },
      { name: 'Tailwind CSS', focus: 'Design Token Systems & Responsive Utilities' },
      { name: 'Vite', focus: 'Rapid Bundling & Optimized Production Builds' },
      { name: 'HTML5 & CSS3', focus: 'Semantic Markup & Accessible Standards' },
      { name: 'Next.js', focus: 'Server-Side Rendering & App Routing' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    description: 'Constructing robust server systems, validating payloads, and securing API endpoints.',
    skills: [
      { name: 'FastAPI', focus: 'High-Performance Asynchronous Python REST APIs' },
      { name: 'Pydantic', focus: 'Deterministic Request & Response Schemas' },
      { name: 'RESTful API Design', focus: 'Resource Modeling, Status Codes, Versioning' },
      { name: 'Node.js', focus: 'Runtime Services & Tooling' },
      { name: 'API Security', focus: 'CORS, Rate Limiting & Input Sanitization' },
    ],
  },
  {
    id: 'databases',
    category: 'Databases & Storage',
    description: 'Relational data modeling, schema migrations, and secure transactional queries.',
    skills: [
      { name: 'PostgreSQL', focus: 'Primary Relational Database of Choice' },
      { name: 'SQLite', focus: 'Local Development & Embedded Datastores' },
      { name: 'Schema Architecture', focus: 'Normalization, Foreign Keys & Constraints' },
      { name: 'Query Optimization', focus: 'Index Tuning & Execution Planning' },
    ],
  },
  {
    id: 'ai-engineering',
    category: 'AI & Product Engineering',
    description: 'Embedding generative capabilities into practical software without unnecessary complexity.',
    skills: [
      { name: 'LLM API Integration', focus: 'OpenAI, Anthropic & Gemini API Pipelines' },
      { name: 'Prompt Chaining', focus: 'Deterministic Multi-Step AI Workflows' },
      { name: 'Context Optimization', focus: 'Token Efficiency & Structured Outputs' },
      { name: 'AI Product UX', focus: 'Streaming Responses, Fallbacks & Error States' },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Engineering Practices',
    description: 'Professional development workflows, version control discipline, and developer tooling.',
    skills: [
      { name: 'Git & GitHub', focus: 'Semantic Commits, Branching & Code Review' },
      { name: 'Linux / Bash', focus: 'Command-Line Fluency & Environment Scripting' },
      { name: 'VS Code', focus: 'Optimized Pair-Programming & Debugging' },
      { name: 'Postman / Bruno', focus: 'API Endpoint Testing & Contract Validation' },
      { name: 'Accessibility (WCAG)', focus: 'Keyboard Navigation, Contrast & Screen-Readers' },
    ],
  },
];
