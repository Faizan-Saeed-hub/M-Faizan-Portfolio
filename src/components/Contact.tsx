import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'info'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error on input
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Build mailto URI with user's verified contact info
      const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
      const bodyEncoded = encodeURIComponent(
        `Hi Muhammad Faizan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via portfolio contact form`
      );

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
      
      // Trigger default email client
      window.location.href = mailtoUrl;

      setStatusMessage({
        type: 'success',
        text: `Your default email client has been launched with your formatted message. You can also directly reach Muhammad Faizan at ${personalInfo.email}.`
      });
    } catch {
      setStatusMessage({
        type: 'info',
        text: `Could not launch mail client automatically. Please send directly to ${personalInfo.email}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#070510]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white">
            CONTACT
          </h2>
          <p className="text-sm sm:text-base text-[#9f95bf] font-medium leading-relaxed">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0e0b1d]/90 border border-[#2b2247] shadow-xl shadow-black/40 backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#C084FC]" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-[#161131] border border-[#2f2355] flex items-start justify-between gap-3 group">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="p-2 rounded-lg bg-[#0e0b1d] text-[#C084FC] border border-[#2b2247] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#9f95bf]">Direct Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-[#C084FC] transition-colors break-all block truncate"
                        title={personalInfo.email}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email to clipboard"
                    className="p-2 rounded-lg bg-[#0e0b1d] text-[#9f95bf] hover:text-white border border-[#2b2247] hover:border-[#A855F7] transition-all"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-[#161131] border border-[#2f2355] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0e0b1d] text-[#C084FC] border border-[#2b2247]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9f95bf]">Phone / WhatsApp</div>
                    <a 
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                      className="text-sm font-semibold text-slate-200 hover:text-[#C084FC] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-[#161131] border border-[#2f2355] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0e0b1d] text-[#C084FC] border border-[#2b2247]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9f95bf]">Location</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#2b2247]/60">
                <div className="text-xs text-[#9f95bf] mb-3 font-medium">Professional Profiles</div>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#161131] hover:bg-[#1f1940] border border-[#2f2355] hover:border-[#A855F7] text-xs font-semibold text-slate-200 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#161131] hover:bg-[#1f1940] border border-[#2f2355] hover:border-[#A855F7] text-xs font-semibold text-slate-200 hover:text-[#C084FC] transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0e0b1d]/90 border border-[#2b2247] shadow-xl shadow-black/40 backdrop-blur-md">
              
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Email Me</span>
                <span>🚀</span>
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Your Name <span className="text-[#C084FC]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#161131] border ${
                      errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2f2355] focus:border-[#A855F7]'
                    } text-white placeholder-[#9f95bf]/50 text-sm focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Your Email <span className="text-[#C084FC]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={`w-full px-4 py-3 rounded-xl bg-[#161131] border ${
                      errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2f2355] focus:border-[#A855F7]'
                    } text-white placeholder-[#9f95bf]/50 text-sm focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Subject <span className="text-[#C084FC]">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 rounded-xl bg-[#161131] border ${
                      errors.subject ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2f2355] focus:border-[#A855F7]'
                    } text-white placeholder-[#9f95bf]/50 text-sm focus:outline-none transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-200 mb-1.5">
                    Message <span className="text-[#C084FC]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    className={`w-full px-4 py-3 rounded-xl bg-[#161131] border ${
                      errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-[#2f2355] focus:border-[#A855F7]'
                    } text-white placeholder-[#9f95bf]/50 text-sm focus:outline-none transition-all resize-y`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Message Banner */}
                {statusMessage && (
                  <div className="p-4 rounded-xl bg-[#161131] border border-[#A855F7]/40 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#9333EA] via-[#A855F7] to-[#EC4899] hover:brightness-110 text-white font-bold text-base shadow-[0_0_25px_rgba(168,85,247,0.45)] hover:shadow-[0_0_35px_rgba(168,85,247,0.65)] transition-all duration-300 active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
