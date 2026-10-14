import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Full-Stack', 'Web Apps', 'AI & ML'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#0D0B19]/70">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 right-10 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
            PROJECTS
          </h2>
          <p className="text-sm sm:text-base text-[#9f95bf] font-medium leading-relaxed">
            A showcase of web applications, platforms, and open-source tools I have engineered
          </p>
        </div>

        {/* Filter Tabs matching reference buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              type="button"
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-[#1e1645] border border-[#a855f7] text-[#c084fc] shadow-md shadow-[#7C3AED]/25'
                  : 'bg-[#0e0b1d] text-[#9f95bf] hover:text-white border border-[#2b2247] hover:border-[#a855f7]/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Responsive Projects Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project note on verification & repository links */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101322]/80 border border-[#353047] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#C084FC]" />
              <span>Looking for more open source projects?</span>
            </h4>
            <p className="text-xs text-[#A1A1B8]">
              Browse 8+ open repositories with clean code commits, documentation, and architecture notes.
            </p>
          </div>

          <a
            href="https://github.com/Faizan-Saeed-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#171427] hover:bg-[#1f1b33] border border-[#353047] hover:border-[#A855F7] text-white transition-all shrink-0"
          >
            <span>Visit GitHub Profile</span>
          </a>
        </div>

      </div>
    </section>
  );
};
