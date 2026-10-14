import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'skills',
      'experience',
      'projects',
      'education',
      'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Check for query param ?scroll=sectionId
    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get('scroll');
    if (scrollTarget) {
      const targetEl = document.getElementById(scrollTarget);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
        }, 80);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#05020c] text-[#F8FAFC] flex flex-col relative selection:bg-[#A855F7]/30 selection:text-white overflow-x-hidden w-full">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[999] bg-[#7C3AED] text-white px-4 py-2 rounded-lg font-semibold shadow-lg outline-none"
      >
        Skip to main content
      </a>

      {/* Global Ambient Glow Orbs */}
      <div 
        className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C084FC]/10 rounded-full blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections matching reference screenshot flow */}
      <main id="main-content" className="flex-1 overflow-x-hidden w-full">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
