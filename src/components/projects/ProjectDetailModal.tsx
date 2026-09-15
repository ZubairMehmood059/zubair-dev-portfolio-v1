import React, { useEffect, useRef } from 'react';
import { Project } from '../../types/project';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { X, Github, ExternalLink, ShieldCheck, Layers, Terminal } from 'lucide-react';

export interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface rounded-lg border border-border flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-raised/60">
          <div className="flex items-center gap-2 font-mono text-xs text-primary-muted">
            <Terminal className="w-4 h-4 text-accent" />
            <span>architecture_spec://{project.slug}</span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project details"
            className="p-1.5 text-primary-muted hover:text-primary-text rounded-sm border border-transparent hover:border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="accent">{project.category}</Badge>
              <Badge variant="status">{project.status}</Badge>
            </div>
            <h3
              id="modal-project-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-base text-accent font-mono font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg/60 p-5 rounded-md border border-border">
              <h4 className="flex items-center gap-2 text-xs font-mono uppercase text-red-400 font-semibold mb-2 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                The Engineering Problem
              </h4>
              <p className="text-sm text-primary-muted leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-bg/60 p-5 rounded-md border border-border">
              <h4 className="flex items-center gap-2 text-xs font-mono uppercase text-[#4ade80] font-semibold mb-2 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"></span>
                The Architecture Solution
              </h4>
              <p className="text-sm text-primary-muted leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          {project.architecturalHighlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-xs font-mono uppercase text-primary-text font-semibold tracking-wider">
                <Layers className="w-4 h-4 text-accent" />
                Technical Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.architecturalHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-md bg-surface-raised/40 border border-border/70"
                  >
                    <p className="font-mono text-xs font-semibold text-primary-text mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                      {highlight.label}
                    </p>
                    <p className="text-xs text-primary-muted leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-primary-text font-semibold tracking-wider">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="neutral" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-border bg-surface-raised/40">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Spec
          </Button>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                <Button
                  variant="secondary"
                  size="sm"
                  leftIcon={<Github className="w-4 h-4" />}
                >
                  View Repository
                </Button>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                <Button
                  variant="primary"
                  size="sm"
                  rightIcon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Deployment
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
