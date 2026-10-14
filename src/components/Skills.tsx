import React from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Html5Logo,
  Css3Logo,
  JavaScriptLogo,
  TypeScriptLogo,
  ReactLogo,
  TailwindLogo,
  ViteLogo,
  NodeLogo,
  ExpressLogo,
  MySqlLogo,
  PythonLogo,
  NumpyLogo,
  PandasLogo,
  ScikitLearnLogo,
  AiBrainLogo,
  GitLogo,
  GitHubLogo,
  VsCodeLogo,
  PostmanLogo,
  VercelLogo,
  NetlifyLogo,
  CppLogo,
  RestApiLogo
} from './TechLogos';
import { TiltCard } from './TiltCard';

export const Skills: React.FC = () => {
  const renderSkillIcon = (iconKey?: string) => {
    switch (iconKey) {
      case 'html5':
        return <Html5Logo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'css3':
        return <Css3Logo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'javascript':
        return <JavaScriptLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'typescript':
        return <TypeScriptLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'react':
        return <ReactLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'tailwind':
        return <TailwindLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'vite':
        return <ViteLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'node':
        return <NodeLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'express':
        return <ExpressLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'mysql':
        return <MySqlLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'python':
        return <PythonLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'cpp':
        return <CppLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'numpy':
        return <NumpyLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'pandas':
        return <PandasLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'scikit':
        return <ScikitLearnLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'ai':
        return <AiBrainLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'git':
        return <GitLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'github':
        return <GitHubLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-white" />;
      case 'vscode':
        return <VsCodeLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'postman':
        return <PostmanLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'restapi':
        return <RestApiLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'vercel':
        return <VercelLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      case 'netlify':
        return <NetlifyLogo className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />;
      default:
        return <span className="w-3 h-3 rounded-full bg-[#A855F7]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#070510]">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7C3AED]/12 rounded-full blur-[180px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference style */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
            SKILLS
          </h2>
          <p className="text-sm sm:text-base text-[#9f95bf] font-medium leading-relaxed">
            A comprehensive showcase of technical tools, libraries, and frameworks I use to engineer robust applications
          </p>
        </div>

        {/* 2x2 Grid of Larger Interactive 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <TiltCard 
              key={idx}
              maxTilt={6}
              scale={1.015}
              className="rounded-3xl p-7 sm:p-9 bg-[#0e0b1d]/90 border border-[#2b2247] hover:border-[#A855F7]/80 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300 relative group shadow-xl shadow-black/50 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                <div className="mb-7 flex items-center justify-between border-b border-[#2b2247]/60 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide group-hover:text-[#C084FC] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#9f95bf] mt-1 font-normal">
                      {category.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#C084FC] px-3 py-1 rounded-full bg-[#181335] border border-[#3b2776] shrink-0">
                    {category.skills.length} tools
                  </span>
                </div>

                {/* Skills Pills with Larger Icons and Readable Labels */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#16122e] border border-[#2f2554] hover:border-[#A855F7] hover:bg-[#1f1940] hover:shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-200 cursor-default group/pill"
                    >
                      {renderSkillIcon(skill.iconKey)}
                      <span className="text-sm font-semibold text-slate-100 group-hover/pill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
