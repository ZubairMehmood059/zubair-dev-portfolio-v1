import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Code2, Compass, Cpu, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Zubair Mehmood"
      className="py-20 md:py-28 border-b border-border bg-bg"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="01. About Me"
          title="Engineering practical software with focus and discipline."
          description="A dedicated Software Engineer who enjoys turning complex problems into structured, reliable, and user-centric software systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-primary-muted leading-relaxed font-normal">
            <p>
              I am a Software Engineering undergraduate at{' '}
              <strong className="text-primary-text font-semibold">
                Sir Syed University of Engineering and Technology (SSUET)
              </strong>
              , deeply committed to writing software that provides actual utility rather than
              surface-level novelty.
            </p>

            <p>
              My engineering approach is rooted in understanding full-stack lifecycles: from
              crafting deterministic relational schemas in PostgreSQL and writing high-throughput
              asynchronous APIs with Python & FastAPI, to constructing responsive, accessible
              interfaces using React and TypeScript.
            </p>

            <p>
              Rather than treating AI as an isolated novelty, I focus on{' '}
              <strong className="text-primary-text font-semibold">AI product engineering</strong> —
              integrating intelligent models into practical tools like career copilot workflows and
              automated validation engines with resilient fallbacks and zero fluff.
            </p>

            {/* Core Principles Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-md bg-surface border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary-text mb-1">
                    System Correctness
                  </h4>
                  <p className="text-xs text-primary-muted">
                    Strong typing, defensive error handling, and strict schema validation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-md bg-surface border border-border">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary-text mb-1">
                    Accessible Standards
                  </h4>
                  <p className="text-xs text-primary-muted">
                    Semantic HTML, visible focus states, and WCAG 2.2 AA compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts / Mindset Column */}
          <div className="lg:col-span-5 space-y-4">
            <Card className="bg-surface border-border p-6 space-y-5">
              <h3 className="font-mono text-xs uppercase text-accent font-bold tracking-wider flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent" />
                Engineering Values
              </h3>

              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-accent pl-3">
                  <h4 className="font-semibold text-primary-text">Simple + Maintainable</h4>
                  <p className="text-xs text-primary-muted mt-1 leading-normal">
                    Prefer straightforward, well-documented patterns over clever, brittle
                    abstractions.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-3 hover:border-accent transition-colors">
                  <h4 className="font-semibold text-primary-text">Authentic Craft</h4>
                  <p className="text-xs text-primary-muted mt-1 leading-normal">
                    Demonstrating ability through actual code, real GitHub commits, and shipped
                    projects.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-3 hover:border-accent transition-colors">
                  <h4 className="font-semibold text-primary-text">Continuous Evolution</h4>
                  <p className="text-xs text-primary-muted mt-1 leading-normal">
                    Constantly deepening algorithm competence, backend concurrency, and system
                    design.
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-5 rounded-md bg-surface-raised border border-border/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-primary-text block">
                    SSUET Software Engineering
                  </span>
                  <span className="text-xs text-primary-muted block">
                    Undergraduate Academic Foundation
                  </span>
                </div>
              </div>
              <Cpu className="w-4 h-4 text-primary-muted" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
