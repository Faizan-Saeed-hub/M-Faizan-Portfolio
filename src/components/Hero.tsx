import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'AI/ML Intern',
    'React.js Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;
    const pauseTime = 1900;

    if (!isDeleting && currentText === currentFullText) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timer);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-2/3 right-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#C084FC]/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Portrait Column: on mobile appears first at top; on desktop remains right column (order-2) */}
          <div className="order-first lg:order-2 lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-[#9333EA] via-[#A855F7] to-[#C084FC] shadow-[0_0_35px_rgba(168,85,247,0.55),0_0_70px_rgba(124,58,237,0.35)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0D0B19] border-[3px] border-[#A855F7] relative group">
                <img
                  src={personalInfo.portraitPath}
                  alt="Muhammad Faizan - Software Engineer & Full-Stack Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070510]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Bio & Details Column: on mobile under portrait (order-last); on desktop left column (order-1) */}
          <div className="order-last lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#140e2b] border border-[#3b2776] text-xs sm:text-sm text-[#C084FC] shadow-sm shadow-[#A855F7]/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-[#A855F7]"></span>
              </span>
              <span className="font-medium text-slate-200">
                Available for Software Engineering &amp; Full-Stack Roles
              </span>
            </div>

            {/* Main Headline with Typewriter Rotating Roles */}
            <div className="space-y-1.5 max-w-2xl w-full">
              <p className="text-xl sm:text-2xl font-bold text-gray-200 tracking-wide">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Muhammad Faizan
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold pt-1 min-h-[40px] sm:min-h-[48px] flex items-center justify-center lg:justify-start">
                <span className="text-slate-300 mr-2">I am a</span>
                <span className="text-[#C084FC] drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] font-extrabold">
                  {currentText}
                </span>
                <span className="inline-block w-[3px] h-6 sm:h-8 ml-1 bg-[#C084FC] animate-pulse shadow-[0_0_12px_#A855F7] align-middle" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#9f95bf] leading-relaxed max-w-xl font-normal">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons with pill-shaped glowing Check Resume button */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href={personalInfo.cvPath}
                download="Muhammad_Faizan_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7E22CE] hover:to-[#9333EA] text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Check Resume</span>
                <FileDown className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#120d26] hover:bg-[#1a1438] border border-[#2b2247] hover:border-[#A855F7] text-slate-200 hover:text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C084FC]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-transparent hover:border-[#2b2247] text-[#9f95bf] hover:text-white font-medium text-sm sm:text-base transition-all"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 w-full border-t border-[#2b2247]/60">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0e0b1d]/70 border border-[#2b2247]/70 text-center lg:text-left">
                  <div className="text-xs sm:text-sm md:text-base font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#9f95bf] truncate mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

