import React from 'react';
import { educationItems } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award 
} from 'lucide-react';
import { TiltCard } from './TiltCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#070510]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
            EDUCATION
          </h2>
          <p className="text-sm sm:text-base text-[#9f95bf] font-medium leading-relaxed">
            My academic credentials and educational milestones
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Center Line */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#a855f7] via-[#2b2247] to-transparent -translate-x-1/2" 
            aria-hidden="true" 
          />

          <div className="space-y-12">
            {educationItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Glowing Timeline Node Dot */}
                  <div 
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0e0b1d] border-2 border-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.7)] flex items-center justify-center z-10 transition-transform group-hover:scale-125"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C084FC]"></span>
                    </span>
                  </div>

                  {/* Card Content: on mobile, indented from the left; on desktop, alternating */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-left sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <TiltCard 
                      maxTilt={4}
                      scale={1.015}
                      className="rounded-2xl p-6 sm:p-7 bg-[#0e0b1d]/90 border border-[#2b2247] hover:border-[#A855F7]/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.22)] transition-all duration-300 shadow-xl shadow-black/40 backdrop-blur-md"
                    >
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#1c143d] text-[#C084FC] border border-[#3b2776]">
                          <Award className="w-3.5 h-3.5" />
                          {item.result}
                        </span>

                        <span className="inline-flex items-center gap-1.5 text-xs text-[#9f95bf]">
                          <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
                          {item.period}
                        </span>
                      </div>

                      {/* Degree & School */}
                      <div className="flex items-start gap-3 mb-2">
                        <div className="p-2 rounded-xl bg-[#161131] border border-[#2f2355] text-[#C084FC] shrink-0 mt-0.5">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#C084FC] transition-colors leading-snug">
                            {item.degree}
                          </h3>
                          <div className="text-sm font-semibold text-[#A855F7] mt-0.5">
                            {item.institution}
                          </div>
                        </div>
                      </div>

                      {/* Coursework & details */}
                      {item.details && (
                        <div className="pt-3 border-t border-[#2b2247]/60 space-y-2 mb-3">
                          {item.details.map((detail, dIdx) => (
                            <p key={dIdx} className="text-xs sm:text-sm text-[#9f95bf] leading-relaxed flex items-start gap-2 font-normal">
                              <span className="text-[#C084FC] mt-0.5">▸</span>
                              <span>{detail}</span>
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Location Tag */}
                      <div className="pt-3 border-t border-[#2b2247]/40 flex items-center justify-between text-xs text-[#9f95bf]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#9f95bf]" />
                          {item.location}
                        </span>
                        <span className="text-[#C084FC] font-medium text-[11px]">
                          Verified Record
                        </span>
                      </div>

                    </TiltCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
