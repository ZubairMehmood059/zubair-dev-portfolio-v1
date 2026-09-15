import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { capabilitiesData } from '../../data/capabilities';
import { Layers, Server, Cpu, Code, Check } from 'lucide-react';

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-accent" />,
  Server: <Server className="w-5 h-5 text-accent" />,
  Cpu: <Cpu className="w-5 h-5 text-accent" />,
  Code: <Code className="w-5 h-5 text-accent" />,
};

export const CapabilitiesSection: React.FC = () => {
  return (
    <section
      id="capabilities"
      aria-label="Engineering Capabilities"
      className="py-20 md:py-28 border-b border-border bg-bg"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="05. Capabilities"
          title="What I can build for your team or product."
          description="Concrete software engineering competencies grounded in authentic project experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilitiesData.map((capability) => (
            <Card
              key={capability.id}
              className="bg-surface border-border flex flex-col justify-between p-7 hover:border-accent/40 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-sm bg-surface-raised border border-border">
                    {CAPABILITY_ICONS[capability.iconName]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-text">
                      {capability.title}
                    </h3>
                    <p className="font-mono text-xs text-accent mt-0.5">
                      {capability.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-primary-muted leading-relaxed mb-6">
                  {capability.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-xs uppercase text-primary-muted font-semibold tracking-wider block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-2">
                    {capability.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-primary-text flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Associated Verified Projects */}
              <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] text-primary-muted">
                  Demonstrated in:
                </span>
                {capability.associatedProjects.map((proj) => (
                  <Badge key={proj} variant="outline" size="sm">
                    {proj}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
