import React from 'react';
import { skillsData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-14 sm:py-20 bg-slate-50/60 border-t border-b border-slate-200/60 text-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
              SKILLS & TOOLS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technologies I Work With
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-500 italic">
            Always learning. Always building.
          </div>
        </div>

        {/* 12 Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-slate-200/80 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center gap-2.5 shadow-xs hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 group cursor-default select-none"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                <TechIcon name={skill.iconType} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-center whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
