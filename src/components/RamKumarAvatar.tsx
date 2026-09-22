import React from 'react';
import { MapPin, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import avatarImage from '../images/ramkumar-avatar.png';

interface RamKumarAvatarProps {
  onContactClick?: () => void;
}

export const RamKumarAvatar: React.FC<RamKumarAvatarProps> = ({ onContactClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center select-none py-4">
      {/* Concentric Glowing Ambient Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-sky-500/20 animate-pulse" />
        <div className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full border border-blue-500/30" />
        <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-cyan-400/40" />
        <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-radial from-blue-600/30 via-sky-500/10 to-transparent blur-xl" />
      </div>

      {/* Handwritten cursive annotation on top right: "Turning Ideas into Impact" */}
      <div className="absolute -top-3 right-0 sm:-right-4 z-20 hidden sm:flex flex-col items-start transform rotate-6 pointer-events-none">
        <div className="font-handwriting text-2xl sm:text-3xl text-sky-300 font-bold tracking-wide drop-shadow-md leading-none">
          Turning<br />
          <span className="italic text-cyan-200">Ideas into</span><br />
          <span className="text-white text-3xl sm:text-4xl underline decoration-wavy decoration-cyan-400">Impact</span>
        </div>
        <svg viewBox="0 0 100 60" className="w-16 h-10 text-sky-300 mt-1 ml-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M10,10 Q60,10 40,45" />
          <path d="M30,38 L40,45 L48,35" />
        </svg>
      </div>

      {/* Main Circular Portrait Container */}
      <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full p-2 bg-gradient-to-b from-cyan-400/40 via-blue-600/30 to-slate-900 border-2 border-cyan-400/60 shadow-[0_0_50px_rgba(14,165,233,0.35)]">
        <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 relative flex items-end justify-center">
          {/* Detailed SVG Illustration of Ram Kumar matching reference photo */}
          
          <img src={avatarImage} alt="Ram Kumar Avatar" className="absolute inset-0 w-full h-full[108%] object-cover" />
          
        </div>
      </div>

      {/* Floating Location & Social Badges on the right */}
      <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 z-20">
        {/* Location Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-sm text-xs font-medium text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={onContactClick}
            title="Send Email"
            className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
