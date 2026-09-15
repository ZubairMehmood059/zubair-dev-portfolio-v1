import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
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
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-bg/95 backdrop-blur-xl animate-in fade-in duration-200"
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold text-primary-text tracking-tight">
            Zubair<span className="text-accent">.dev</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-semibold">
            ENGINEER
          </span>
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 text-primary-muted hover:text-primary-text rounded-sm border border-border hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center space-y-4">
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between text-2xl font-bold py-3 border-b border-border/40 transition-colors ${
                isActive ? 'text-accent pl-2' : 'text-primary-text hover:text-accent hover:pl-2'
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary-muted">0{idx + 1}.</span>
                <span>{item.label}</span>
              </span>
              <ArrowUpRight className="w-5 h-5 opacity-60" />
            </a>
          );
        })}
      </nav>

      {/* Menu Footer */}
      <div className="px-6 py-6 border-t border-border bg-surface/50 space-y-5">
        <a href="#contact" onClick={onClose} className="block w-full">
          <Button variant="primary" size="lg" className="w-full justify-center">
            Let's Talk
          </Button>
        </a>

        <div className="flex items-center justify-center gap-6 pt-2 text-primary-muted">
          <a
            href="https://github.com/ZubairMehmood059"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/zubair-mehmood-513470330"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:itszayn1379@gmail.com"
            aria-label="Send Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
