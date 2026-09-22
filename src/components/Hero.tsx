import React from 'react';
import { ArrowRight, Github, Calendar, Mail, Monitor, Trophy } from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';
import { RamKumarAvatar } from './RamKumarAvatar';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const getStatIcon = (type: string) => {
    switch (type) {
      case 'calendar':
        return <Calendar className="w-6 h-6 text-sky-400" />;
      case 'mail':
        return <Mail className="w-6 h-6 text-sky-400" />;
      case 'monitor':
        return <Monitor className="w-6 h-6 text-sky-400" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      default:
        return <Trophy className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 bg-gradient-to-b from-[#0B1120] via-[#090D1A] to-[#060B18] overflow-hidden text-left">
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Left copy, Right avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase">
                {personalInfo.eyebrow}
              </span>
            </div>

            {/* Main Name Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
              {personalInfo.name.toUpperCase()}
            </h1>

            {/* Role Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 tracking-tight">
              {personalInfo.role}
            </h2>

            {/* Bio description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalInfo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-900/90 text-slate-300 border border-slate-700/80 rounded-full text-xs font-medium backdrop-blur-xs shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all hover:translate-x-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar illustration with orbital rings */}
          <div className="lg:col-span-5 flex justify-center">
            <RamKumarAvatar onContactClick={onContactClick} />
          </div>
        </div>

        {/* 4 Hero Stats Cards Row */}
        <div className=" hidden mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 p-4 sm:p-5 rounded-2xl flex items-center gap-3.5 backdrop-blur-sm transition-all hover:translate-y-[-2px] hover:shadow-lg shadow-slate-950/40"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
