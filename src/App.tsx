import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { CapabilitiesSection } from './components/sections/CapabilitiesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg text-primary-text selection:bg-accent selection:text-black">
      {/* Skip to Content for Screen Readers & Keyboard Users (WCAG 2.2 AA) */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-black font-mono font-bold rounded-sm shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
