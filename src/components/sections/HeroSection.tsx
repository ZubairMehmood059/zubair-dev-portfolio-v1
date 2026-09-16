import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react';
import { siteConfig } from '../../data/social';

export const HeroSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-border/80 bg-grid-pattern"
    >
      {/* Background subtle radial gradient */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Engineering Eyebrow Tag */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-border text-xs font-mono font-medium text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                <span>SOFTWARE ENGINEER</span>
              </div>
              <span className="text-xs font-mono text-primary-muted hidden sm:inline">
                // FULL-STACK & AI PRODUCT ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary-text leading-[1.08]">
                I build digital products that{' '}
                <span className="text-accent underline decoration-accent/30 decoration-wavy decoration-2 underline-offset-8">
                  solve real problems
                </span>
                .
              </h1>
              <p className="text-lg sm:text-xl text-primary-muted max-w-2xl font-normal leading-relaxed pt-2">
                Hi, I'm <strong className="text-primary-text font-semibold">Zubair Mehmood</strong>.
                I engineer resilient full-stack applications, backend systems and APIs with
                Python & FastAPI, and practical AI-powered experiences with clean, maintainable
                architecture.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowDown className="w-4 h-4" />}
                >
                  View Selected Work
                </Button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Social Coordinates & Email Copy */}
            <div className="pt-6 border-t border-border/80 flex flex-wrap items-center gap-6 text-sm font-mono text-primary-muted">
              <span className="text-xs uppercase text-primary-muted/80 tracking-wider">
                Connect:
              </span>

              <a
                href="https://github.com/ZubairMehmood059"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                aria-label="Visit Zubair Mehmood on GitHub"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zubair-mehmood-513470330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                aria-label="Visit Zubair Mehmood on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                aria-label="Copy direct email address"
              >
                <Mail className="w-4 h-4" />
                <span>{siteConfig.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>
            </div>
          </div>

          {/* Right Editorial Telemetry Panel */}
          <div className="lg:col-span-4 w-full">
            <div className="relative rounded-lg bg-surface border border-border p-6 shadow-card space-y-6">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-border/70">
                <div className="flex items-center gap-2 font-mono text-xs text-primary-muted">
                  <Terminal className="w-4 h-4 text-accent" />
                  <span>engineer_telemetry.sys</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/80"></span>
                </div>
              </div>

              {/* Status specs */}
              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-primary-muted block mb-1 uppercase tracking-wider text-[10px]">
                    Current Status
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                    </span>
                    <span className="text-primary-text font-medium">
                      BS Software Engineering @ SSUET
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-primary-muted block mb-1 uppercase tracking-wider text-[10px]">
                    Primary Stack
                  </span>
                  <p className="text-primary-text font-semibold">
                    Python · React · FastAPI · PostgreSQL · TypeScript
                  </p>
                </div>

                <div>
                  <span className="text-primary-muted block mb-1 uppercase tracking-wider text-[10px]">
                    Active Engineering Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <Badge variant="accent">Full-Stack Products</Badge>
                    <Badge variant="neutral">Async APIs</Badge>
                    <Badge variant="neutral">AI Workflows</Badge>
                  </div>
                </div>

                <div>
                  <span className="text-primary-muted block mb-1 uppercase tracking-wider text-[10px]">
                    Geographic Base
                  </span>
                  <p className="text-primary-text">
                    Karachi, Pakistan (UTC+5) · Available Globally
                  </p>
                </div>
              </div>

              {/* Fast Capability Snapshot */}
              <div className="p-4 rounded-sm bg-surface-raised/60 border border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] font-bold text-primary-text block">
                      Engineering Mindset
                    </span>
                    <span className="text-[11px] text-primary-muted block">
                      Clean architecture over shortcuts
                    </span>
                  </div>
                </div>
                <Layers className="w-4 h-4 text-primary-muted" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
