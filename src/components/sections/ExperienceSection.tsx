import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';
import { GraduationCap, Code, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Education and Engineering Timeline"
      className="py-20 md:py-28 border-b border-border bg-bg/50"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="04. Background"
          title="Education & software engineering timeline."
          description="Academic foundation in computer science principles coupled with hands-on independent software development."
        />

        <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-border before:content-['']">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-12 sm:pl-16">
              {/* Timeline marker icon */}
              <div className="absolute left-2.5 sm:left-5.5 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-surface-raised border-2 border-accent flex items-center justify-center text-accent z-10">
                {item.type === 'Education' ? (
                  <GraduationCap className="w-3 h-3" />
                ) : (
                  <Code className="w-3 h-3" />
                )}
              </div>

              <Card className="bg-surface border-border p-6 hover:border-border-hover transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {item.period}
                  </span>
                  <Badge variant="outline" size="sm">
                    {item.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-primary-text mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs font-mono text-primary-muted mb-4">
                  <span className="text-primary-text font-medium">
                    {item.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-primary-muted mb-4 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 border-t border-border/60 pt-3">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-primary-muted flex items-start gap-2 leading-relaxed"
                    >
                      <span className="text-accent mt-0.5 font-bold">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
