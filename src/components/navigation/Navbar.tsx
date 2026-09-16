import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';
import { Menu, ArrowRight } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar: React.FC = () => { //fix mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const activeSection = useScrollSpy(
    ['about', 'skills', 'projects', 'experience', 'capabilities', 'contact'],
    150
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    // Restore focus to the trigger button
    menuTriggerRef.current?.focus();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-250 ${
          isScrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-border shadow-card py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              aria-label="Zubair.dev - Back to Top"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 py-0.5"
            >
              <div className="w-8 h-8 rounded-sm bg-surface-raised border border-border flex items-center justify-center font-mono font-bold text-accent group-hover:border-accent transition-colors">
                Z.
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-base font-bold text-primary-text tracking-tight flex items-center gap-1.5">
                  Zubair<span className="text-accent">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-primary-muted -mt-1 hidden sm:inline">
                  Software Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 bg-surface/70 border border-border/70 rounded-full px-4 py-1.5 backdrop-blur-sm"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={activeSection === item.href.replace('#', '')}
                />
              ))}
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Live Availability Status */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-border/80 text-xs font-mono text-primary-muted">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]"></span>
                </span>
                <span className="text-[11px]">Available</span>
              </div>

              {/* Desktop CTA Button */}
              <a href="#contact" className="hidden md:inline-flex">
                <Button
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Let's Talk
                </Button>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                ref={menuTriggerRef}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden p-2 text-primary-muted hover:text-primary-text rounded-sm border border-border bg-surface hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu — rendered outside header to avoid backdrop-blur stacking context issues */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMenu}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
      />
    </>
  );
};
