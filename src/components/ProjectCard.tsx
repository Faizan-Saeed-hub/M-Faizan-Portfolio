import type { Project } from '../types';
import { 
  ExternalLink, 
  Sparkles, 
  Code,
  BrainCircuit,
  TrendingUp,
  FileText,
  Bot
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { TiltCard } from './TiltCard';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'credit-loan-approval':
        return <TrendingUp className="w-8 h-8 text-[#C084FC]" />;
      case 'smartcart-clustering':
        return <BrainCircuit className="w-8 h-8 text-[#C084FC]" />;
      case 'text-summarizer-transformers':
        return <FileText className="w-8 h-8 text-[#C084FC]" />;
      case 'image-generation-gan':
        return <Sparkles className="w-8 h-8 text-[#C084FC]" />;
      case 'ai-personal-assistant':
        return <Bot className="w-8 h-8 text-[#C084FC]" />;
      default:
        return <Code className="w-8 h-8 text-[#C084FC]" />;
    }
  };

  return (
    <TiltCard 
      maxTilt={5}
      scale={1.015}
      className="rounded-2xl overflow-hidden bg-[#0e0b1d]/90 border border-[#2b2247] hover:border-[#A855F7]/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)] flex flex-col justify-between group transition-all duration-300 shadow-xl shadow-black/40 backdrop-blur-md"
    >
      
      {/* Project Image Preview or Fallback Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090714] border-b border-[#2b2247]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#120d26] via-[#0e0b1d] to-[#1a1238] text-center relative overflow-hidden group/thumb">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#7C3AED]/20 border border-[#7C3AED]/40 flex items-center justify-center mb-3 group-hover/thumb:scale-110 group-hover/thumb:border-[#A855F7] transition-all duration-300 shadow-lg shadow-[#7C3AED]/20">
              {getProjectIcon(project.id)}
            </div>
            <span className="relative z-10 text-sm font-bold text-white tracking-wide">
              {project.title}
            </span>
            <span className="relative z-10 text-xs text-[#C084FC] mt-1 font-medium">
              CV Project • Machine Learning &amp; AI
            </span>
          </div>
        )}

        {/* Featured Tag Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#140e2b]/95 backdrop-blur-md border border-[#A855F7]/50 text-xs font-semibold text-[#C084FC] shadow-lg shadow-black/40">
            <Sparkles className="w-3 h-3 text-[#A855F7]" />
            <span>Featured</span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#070510]/90 backdrop-blur-sm border border-[#2b2247] text-[11px] font-medium text-[#C084FC]">
          {project.category}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-medium text-[#C084FC] tracking-wide mb-1">
            {project.subtitle}
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#C084FC] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9f95bf] leading-relaxed mt-2.5 line-clamp-3 font-normal">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#161131] text-[#C084FC] border border-[#2f2355]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-[#2b2247]/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#A855F7] text-white hover:brightness-110 shadow-sm shadow-[#9333EA]/30 transition-all"
                aria-label={`View live demo of ${project.title} (opens in new tab)`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl bg-[#140e2b] hover:bg-[#1f1640] border border-[#2b2247] hover:border-[#A855F7] text-slate-200 hover:text-white transition-all"
                aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#C084FC]" />
                <span>Code</span>
              </a>
            )}
          </div>

          <div className="text-[11px] text-[#9f95bf] hidden sm:block">
            {project.category}
          </div>
        </div>

      </div>

    </TiltCard>
  );
};
