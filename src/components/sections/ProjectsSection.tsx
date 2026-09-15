import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { projectsData } from '../../data/projects';
import { Project, ProjectCategory } from '../../types/project';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

type FilterOption = 'All' | ProjectCategory;

const FILTER_CATEGORIES: FilterOption[] = [
  'All',
  'Full-Stack',
  'Backend Systems',
  'AI / Systems',
  'Core Engineering',
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section
      id="projects"
      aria-label="Selected Engineering Work"
      className="py-20 md:py-28 border-b border-border bg-bg"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="03. Selected Work"
          title="Engineered systems, web products & utilities."
          description="A curated selection of software projects demonstrating frontend polish, backend architecture, and problem solving."
          rightElement={
            <a
              href="https://github.com/ZubairMehmood059"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-primary-muted hover:text-accent transition-colors"
            >
              <span>Explore full GitHub profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          }
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border/60">
          <span className="text-xs font-mono text-primary-muted uppercase mr-2 tracking-wider">
            Filter:
          </span>
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all select-none ${
                  isActive
                    ? 'bg-accent text-black font-semibold border-accent shadow-sm'
                    : 'bg-surface text-primary-muted border-border hover:border-border-hover hover:text-primary-text'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Empty state if filtering yields no result */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-surface rounded-md border border-border">
            <p className="font-mono text-sm text-primary-muted">
              No projects found matching the selected category.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => setSelectedCategory('All')}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Architecture Spec Detail Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </section>
  );
};
