import React from 'react';
import { Container } from '../ui/Container';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '../../data/social';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 md:py-16 bg-bg border-t border-border text-primary-muted text-sm font-sans">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border/60">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 font-mono text-lg font-bold text-primary-text tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <span>Zubair</span>
              <span className="text-accent">.dev</span>
            </a>
            <p className="text-xs sm:text-sm text-primary-muted max-w-md leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-xs uppercase text-primary-text font-semibold tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  // 01. About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  // 02. Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  // 03. Selected Work
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  // 04. Background
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-accent transition-colors">
                  // 05. Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  // 06. Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-xs uppercase text-primary-text font-semibold tracking-wider block">
              Profiles
            </span>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/ZubairMehmood059"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zubair Mehmood GitHub"
                className="p-2.5 rounded-sm bg-surface border border-border hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/zubair-mehmood-513470330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zubair Mehmood LinkedIn"
                className="p-2.5 rounded-sm bg-surface border border-border hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Zubair Mehmood Email"
                className="p-2.5 rounded-sm bg-surface border border-border hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] font-mono text-primary-muted pt-2">
              Based in Karachi, Pakistan
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-primary-muted">
          <div>
            © {new Date().getFullYear()} Zubair Mehmood. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>React · TypeScript · Tailwind CSS</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
