import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileDown, 
  ChevronRight 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get('menu') === 'open';
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenuOpen
          ? 'bg-[#0b081b] border-b border-[#2b2247] shadow-2xl py-3'
          : isScrolled
          ? 'bg-[#070510]/95 backdrop-blur-md border-b border-[#353047]/60 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Small Portrait Photo */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group text-white font-bold text-xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] rounded-lg p-1"
            aria-label="Muhammad Faizan - Home"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#C084FC] p-[1.5px] shadow-sm shadow-[#A855F7]/30 transition-transform group-hover:scale-105 overflow-hidden flex items-center justify-center shrink-0">
              <img
                src={personalInfo.portraitPath}
                alt="Muhammad Faizan"
                className="w-full h-full object-cover object-top rounded-[10px]"
              />
            </span>
            <span className="hidden sm:inline-block font-semibold text-slate-100 group-hover:text-white transition-colors">
              Muhammad <span className="text-[#C084FC]">Faizan</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0e0b1d]/90 border border-[#2b2247] rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm px-4 py-1.5 rounded-full transition-all duration-200 font-medium relative ${
                    isActive
                      ? 'text-white bg-[#A855F7]/25 border border-[#A855F7]/60 shadow-[0_0_15px_rgba(168,85,247,0.35)] font-bold'
                      : 'text-[#9f95bf] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & CV Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile (opens in new tab)"
              className="p-2 text-[#A1A1B8] hover:text-white hover:bg-[#171427] border border-transparent hover:border-[#353047] rounded-lg transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile (opens in new tab)"
              className="p-2 text-[#A1A1B8] hover:text-[#C084FC] hover:bg-[#171427] border border-transparent hover:border-[#353047] rounded-lg transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.cvPath}
              download="Muhammad_Faizan_CV.pdf"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] text-white shadow-md shadow-[#7C3AED]/25 hover:shadow-lg hover:shadow-[#A855F7]/30 transition-all duration-200 active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Action & Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalInfo.cvPath}
              download="Muhammad_Faizan_CV.pdf"
              aria-label="Download CV"
              className="p-2 rounded-lg bg-[#A855F7]/20 text-[#C084FC] border border-[#A855F7]/30"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#A1A1B8] hover:text-white bg-[#101322] border border-[#353047] focus:outline-none focus:ring-2 focus:ring-[#A855F7]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay to dismiss on tap */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Dropdown Menu: Attached directly under header (top-full), works reliably at any scroll position */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-menu"
          className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#0b081b] border-b border-[#2b2247] shadow-[0_25px_50px_rgba(0,0,0,0.95)] px-6 py-6 flex flex-col space-y-6 max-h-[calc(100vh-64px)] overflow-y-auto z-50 animate-fadeIn"
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-[#A855F7]/20 border border-[#A855F7]/40 font-semibold'
                      : 'text-[#A1A1B8] hover:text-white hover:bg-[#101322]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#353047] space-y-4">
            <a
              href={personalInfo.cvPath}
              download="Muhammad_Faizan_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-semibold text-sm shadow-md shadow-[#7C3AED]/30 hover:brightness-110 active:scale-95 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Verified CV</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-1">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101322] border border-[#353047] text-[#A1A1B8] hover:text-white text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101322] border border-[#353047] text-[#A1A1B8] hover:text-[#C084FC] text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
