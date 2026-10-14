import React from 'react';
import { aboutContent, personalInfo } from '../data/portfolioData';
import { 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Layout, 
  CheckCircle2, 
  FileDown 
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#C084FC]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#A855F7]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C084FC]" />;
      case 'Layout':
      default:
        return <Layout className="w-6 h-6 text-[#A855F7]" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-[#070510]">
      {/* Background radial gradient */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101322] border border-[#353047] text-xs font-semibold text-[#C084FC]">
            <span>Background &amp; Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-[#C084FC] to-[#7C3AED] bg-clip-text text-transparent">Muhammad Faizan</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1B8] leading-relaxed">
            {aboutContent.intro}
          </p>
        </div>

        {/* Story & Technical Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7]"></span>
              Engineering Philosophy &amp; Experience
            </h3>
            
            <p className="text-[#A1A1B8] text-base leading-relaxed">
              {aboutContent.bio1}
            </p>
            
            <p className="text-[#A1A1B8] text-base leading-relaxed">
              {aboutContent.bio2}
            </p>

            <div className="pt-2 border-t border-[#353047]/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C084FC] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    BS Computer Science, University of Sargodha (CGPA 3.24)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C084FC] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Real Experience as AI/ML Intern at MorphLabs
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C084FC] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Production Full-Stack &amp; Client-Side Architectures
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#C084FC] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">
                    Google "Hello, Python!" Certified on Coursera
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={personalInfo.cvPath}
                download="Muhammad_Faizan_CV.pdf"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white hover:brightness-110 shadow-md shadow-[#7C3AED]/20 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Verified CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-[#171427] border border-[#353047] hover:border-[#A855F7] text-slate-200 hover:text-white transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Highlights: 4 Disciplines */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutContent.disciplines.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#101322]/80 border border-[#353047] hover:border-[#A855F7]/50 hover:bg-[#171427]/80 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#0D0B19] border border-[#353047] group-hover:border-[#A855F7]/40 shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white group-hover:text-[#C084FC] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#A1A1B8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
