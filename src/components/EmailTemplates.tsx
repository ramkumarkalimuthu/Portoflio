import React, { useState } from 'react';
import { ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { emailTemplates } from '../data/portfolioData';
import { EmailTemplate } from '../types';
import { EmailMockup } from './EmailMockups';

interface EmailTemplatesProps {
  onSelectTemplate: (template: EmailTemplate) => void;
}

export const EmailTemplates: React.FC<EmailTemplatesProps> = ({ onSelectTemplate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Financial', 'Corporate', 'Marketing', 'Seasonal'];

  const filteredTemplates = selectedCategory === 'All'
    ? emailTemplates
    : emailTemplates.filter(t => t.category === selectedCategory || (selectedCategory === 'Financial' && (t.category === 'Financial' || t.category === 'Investment' || t.category === 'Planning')));

  return (
    <section id="email-templates" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80 text-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
              EMAIL TEMPLATES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              HTML Email Templates
            </h2>
          </div>

          <button
            onClick={() => onSelectTemplate(emailTemplates[0])}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-blue-600/30 transition-all hover:scale-105 self-start sm:self-auto cursor-pointer"
          >
            <span>View All Templates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quality Assurance pill badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Tested in Outlook, Gmail, Apple Mail, Yahoo
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Litmus & Email on Acid Validated
          </span>
          
        </div>

        {/* 10 Email Cards Grid (5-cols on desktop, 2-cols on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {emailTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => onSelectTemplate(template)}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
            >
              {/* Email Mockup Preview */}
              <div className="h-56 sm:h-64 p-2 bg-slate-100/50 flex flex-col justify-center relative overflow-hidden">
                
                <iframe
                  src={template.liveUrl}
                  title={`${template.title} Live Preview`}
                  scrolling="no"
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none overflow-hidden"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" /> Inspect Email
                  </span>
                </div>
              </div>

              {/* Title Strip */}
              <div className="p-3 bg-white border-t border-slate-100 text-center">
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {template.title}
                </h3>
                 <p className="text-md text-slate-500 leading-relaxed line-clamp-2 mb-3">
                    {template.description}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
