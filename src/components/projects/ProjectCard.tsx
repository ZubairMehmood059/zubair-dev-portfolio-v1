import React from 'react';
import { Project } from '../../types/project';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <Card
      interactive
      className="group flex flex-col justify-between h-full bg-surface border-border hover:border-accent/40 transition-all duration-300 overflow-hidden"
    >
      {/* Top Section */}
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>

          <Badge variant="status">{project.status}</Badge>
        </div>

        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-text group-hover:text-accent transition-colors tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
          </h3>
          <p className="font-mono text-xs text-primary-muted mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Problem/Summary text */}
        <p className="text-sm text-primary-muted leading-relaxed line-clamp-3 mb-6">
          {project.summary}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-border/70 space-y-5">
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="neutral" size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-mono text-[10px] text-primary-muted self-center px-1">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-1">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary-text group-hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
            aria-label={`Inspect architecture of ${project.title}`}
          >
            <span>Inspect Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="p-2 text-primary-muted hover:text-accent rounded-sm hover:bg-surface-raised border border-transparent hover:border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-2 text-primary-muted hover:text-accent rounded-sm hover:bg-surface-raised border border-transparent hover:border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
