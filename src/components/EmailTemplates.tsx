import React, { useState } from 'react';
import { ArrowRight, Eye, CheckCircle2, ExternalLink } from 'lucide-react';
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
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Mockup Image Container */}
              <div
                onClick={() => onSelectTemplate(template)}
                onMouseEnter={(event) => {
                  const image = event.currentTarget.querySelector('img');
                  if (image) {
                    const maxOffset = Math.max(0, image.offsetHeight - event.currentTarget.clientHeight + 16);
                    image.style.transform = `translateY(-${maxOffset}px)`;
                  }
                }}
                onMouseLeave={(event) => {
                  const image = event.currentTarget.querySelector('img');
                  if (image) image.style.transform = 'translateY(0)';
                }}
                className="h-44 sm:h-68 bg-slate-950 p-2 cursor-pointer relative overflow-hidden"
              >
                {template.imageUrl ? (
                  <div className="h-full rounded-lg overflow-hidden bg-white">
                    <img
                      src={template.imageUrl}
                      alt={`${template.title} Preview`}
                      className="w-full h-auto min-h-full object-cover object-top rounded-lg transition-transform duration-[1800ms] ease-in-out"
                    />
                  </div>
                ) : null}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                    <Eye className="w-3.5 h-3.5" /> Quick Preview
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-md text-slate-500 leading-relaxed line-clamp-2 mb-3">
                    {template.description}
                  </p>
                </div>

                {/* Card CTA Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <a
              href={template.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xs shadow-md transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
                  <a
                    href={template.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg text-center transition-colors flex items-center justify-center"
                    title="View GitHub repository"
                  >
                    <Github className="w-3.5 h-3.5 mr-1" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
