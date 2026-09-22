import React from 'react';
import { Download, User, MapPin, Mail, Phone, Linkedin, Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onResumeClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onResumeClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-slate-900 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Heading, Bio, Download Resume button */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">
                ABOUT ME
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Passionate about Web, Email & Digital Experiences
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {personalInfo.aboutText}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-blue-600/30 transition-all hover:scale-105 cursor-pointer"
              >
                <span>.Download Resume</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle Column: Contact Info Card */}
          <div className="lg:col-span-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-center space-y-4">
            {/* Name */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Name</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{personalInfo.name}</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Location</div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">{personalInfo.location}</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email</div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate"
                  title={personalInfo.email}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phone</div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</div>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors block truncate"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Card */}
          <div className="lg:col-span-3 bg-[#F0F7FF] border border-blue-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Big quote glyph */}
            <div className="text-blue-400/40 text-5xl sm:text-6xl font-serif font-black leading-none mb-2 select-none">
              “
            </div>
            <blockquote className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed relative z-10">
              "{personalInfo.quote}"
            </blockquote>
            {/* Blue accent dash */}
            <div className="w-12 h-1 bg-blue-600 rounded-full mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
