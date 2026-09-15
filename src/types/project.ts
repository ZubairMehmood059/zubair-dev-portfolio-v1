export type ProjectCategory = 'Full-Stack' | 'Backend Systems' | 'AI / Systems' | 'Core Engineering';

export type ProjectStatus = 'In Active Development' | 'Completed' | 'Operational' | 'Production Ready';

export interface ProjectArchitectureDetail {
  label: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  status: ProjectStatus;
  featured: boolean;
  repoUrl?: string;
  liveUrl?: string;
  architecturalHighlights: ProjectArchitectureDetail[];
}
