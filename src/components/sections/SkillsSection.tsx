import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/skills';
import { Code, Terminal, Server, Database, Sparkles, Wrench } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code className="w-4 h-4 text-accent" />,
  frontend: <Terminal className="w-4 h-4 text-accent" />,
  backend: <Server className="w-4 h-4 text-accent" />,
  databases: <Database className="w-4 h-4 text-accent" />,
  'ai-engineering': <Sparkles className="w-4 h-4 text-accent" />,
  tools: <Wrench className="w-4 h-4 text-accent" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills & Competencies"
      className="py-20 md:py-28 border-b border-border bg-bg/50"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="02. Tech Stack"
          title="Grouped competencies & engineering tools."
          description="Technologies and tooling actively utilized to build performant, maintainable software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group) => (
            <Card
              key={group.id}
              className="bg-surface border-border flex flex-col justify-between hover:border-border-hover transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-2 pb-3 border-b border-border">
                  <div className="p-1.5 rounded-sm bg-surface-raised border border-border">
                    {CATEGORY_ICONS[group.id] || <Code className="w-4 h-4 text-accent" />}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-primary-text uppercase tracking-wide">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-primary-muted mb-4 leading-normal">
                  {group.description}
                </p>

                {/* Skill List */}
                <ul className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="p-2.5 rounded-sm bg-surface-raised/40 border border-border/60 hover:border-accent/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-primary-text">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-primary-muted mt-0.5">
                        {skill.focus}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
