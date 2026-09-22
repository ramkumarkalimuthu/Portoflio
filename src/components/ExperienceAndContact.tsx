import React from 'react';
import { ArrowRight, Trophy, Star, Sparkles, Mail, Phone, MapPin, Linkedin, Briefcase } from 'lucide-react';
import { experienceData, awardsData, personalInfo } from '../data/portfolioData';

interface ExperienceAndContactProps {
  onContactClick: () => void;
}

export const ExperienceAndContact: React.FC<ExperienceAndContactProps> = ({ onContactClick }) => {
  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'star':
        return <Star className="w-5 h-5 text-pink-500" />;
      case 'sparkle':
        return <Sparkles className="w-5 h-5 text-blue-500" />;
      default:
        return <Trophy className="w-5 h-5 text-amber-500" />;
    }
  };

  const getAwardBg = (type: string) => {
    switch (type) {
      case 'trophy':
        return 'bg-amber-50 border-amber-200/80';
      case 'star':
        return 'bg-pink-50 border-pink-200/80';
      case 'sparkle':
        return 'bg-blue-50 border-blue-200/80';
      default:
        return 'bg-amber-50 border-amber-200/80';
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white text-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Column 1: EXPERIENCE (approx 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
                EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                My Professional Journey
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-200">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-125" />

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 flex flex-wrap items-center gap-1.5">
                      <span>{exp.role}</span>
                      <span className="text-slate-400 font-normal">|</span>
                      <span className="text-slate-900 font-extrabold">{exp.company}</span>
                    </h3>

                    <div className="text-xs font-semibold text-slate-500">
                      {exp.period} <span className="text-slate-300 mx-1">|</span> {exp.location}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1.5">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: ACHIEVEMENTS (approx 3.5 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
                ACHIEVEMENTS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight opacity-0 pointer-events-none select-none hidden lg:block">
                Awards
              </h2>
            </div>

            <div className="space-y-4">
              {awardsData.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-start gap-3.5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all hover:-translate-y-0.5"
                >
                  <div className={`w-10 h-10 rounded-full border ${getAwardBg(award.iconType)} flex items-center justify-center shrink-0 shadow-xs`}>
                    {getAwardIcon(award.iconType)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: GET IN TOUCH (approx 3.5 cols) */}
          <div id="contact" className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Let's Work Together
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>

            {/* Contact details list with icons */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors font-medium truncate"
                  title={personalInfo.email}
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">{personalInfo.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors font-medium truncate"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>

            {/* Send a Message Button */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
