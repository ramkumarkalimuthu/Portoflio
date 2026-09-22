import React from 'react';
import { X, Printer, Download, CheckCircle, Briefcase, GraduationCap, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { personalInfo, experienceData, awardsData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Curriculum Vitae</span>
            <h3 className="text-lg font-bold text-white mt-0.5">Ram Kumar - Resume</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto bg-slate-950 text-slate-200 space-y-6 text-left font-sans">
          {/* Header Banner */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl font-black text-white tracking-tight">{personalInfo.name}</h1>
            <p className="text-sm font-semibold text-blue-400 mt-0.5">{personalInfo.role}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400 mt-3">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.phone}</span>
              <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-slate-400" /> {personalInfo.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Professional Summary</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-blue-400" /> Experience (6+ Years)
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="p-4 bg-slate-900/80 rounded-xl border border-slate-800">
                  <div className="flex flex-wrap justify-between items-start gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role} <span className="text-blue-400 font-normal">| {exp.company}</span></h3>
                      <div className="text-xs text-slate-400">{exp.location}</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-semibold text-sky-300 border border-slate-700">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Skills & Platforms</h2>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.map((skill) => (
                <span key={skill.name} className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-200">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Key Honors & Recognitions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {awardsData.map((award, idx) => (
                <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-left">
                  <div className="text-xs font-bold text-white mb-1">{award.title}</div>
                  <div className="text-[11px] text-slate-400 leading-snug">{award.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
