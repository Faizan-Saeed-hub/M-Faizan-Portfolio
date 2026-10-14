import React from 'react';
import { certificationItems } from '../data/portfolioData';
import { 
  Award, 
  CheckCircle, 
  ExternalLink, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-[#0D0B19]/60">
      {/* Background ambient glow */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101322] border border-[#353047] text-xs font-semibold text-[#C084FC]">
            <span>Credentials &amp; Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="bg-gradient-to-r from-[#C084FC] to-[#7C3AED] bg-clip-text text-transparent">Training</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1B8] leading-relaxed">
            Verified course certifications, professional workshops, and technical credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificationItems.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-[#353047] hover:border-[#A855F7]/60 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top ambient line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#A855F7]/30 to-transparent group-hover:via-[#C084FC] transition-colors" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#070510] border border-[#353047] group-hover:border-[#A855F7]/40 shrink-0">
                      <Award className="w-6 h-6 text-[#C084FC]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#C084FC] transition-colors">
                        {cert.name}
                      </h3>
                      <div className="text-sm font-semibold text-[#A855F7]">
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#101322] border border-[#353047] text-slate-300 shrink-0">
                    <Calendar className="w-3 h-3 text-[#C084FC]" />
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1B8] leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 border-t border-[#353047]/50 flex items-center justify-between">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#C084FC] hover:text-white transition-colors group-hover:underline"
                    aria-label={`Verify ${cert.name} credential on Coursera (opens in new tab)`}
                  >
                    <ShieldCheck className="w-4 h-4 text-[#A855F7]" />
                    <span>Verify Credential ({cert.credentialId})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#A1A1B8]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span>Verified Academic / Internship Record</span>
                  </div>
                )}

                <span className="text-[11px] text-[#A1A1B8] font-mono">
                  {cert.issuer.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
