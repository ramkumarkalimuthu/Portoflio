import React from 'react';
import { MapPin, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
          <svg viewBox="0 0 400 400" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Skin Tone Gradient */}
              <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C68642" />
                <stop offset="70%" stopColor="#A86526" />
                <stop offset="100%" stopColor="#8C4E1A" />
              </linearGradient>

              {/* Shadow Skin */}
              <linearGradient id="skinShadow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#96551E" />
                <stop offset="100%" stopColor="#753C0F" />
              </linearGradient>

              {/* Olive Shirt Gradient */}
              <linearGradient id="oliveShirt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#435639" />
                <stop offset="50%" stopColor="#35442E" />
                <stop offset="100%" stopColor="#253220" />
              </linearGradient>

              {/* Dark Hair Gradient */}
              <linearGradient id="hairDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E2022" />
                <stop offset="100%" stopColor="#0B0C0E" />
              </linearGradient>

              {/* Background circular rim glow */}
              <radialGradient id="rimGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#0369a1" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
              </radialGradient>
            </defs>

            {/* Backdrop glow inside circle */}
            <circle cx="200" cy="200" r="200" fill="url(#rimGlow)" />

            {/* Light geometric circular lines behind portrait */}
            <circle cx="200" cy="180" r="140" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" fill="none" />
            <circle cx="200" cy="180" r="100" stroke="#38bdf8" strokeWidth="1" opacity="0.2" fill="none" />

            {/* Neck */}
            <path d="M165 240 L235 240 L240 310 L160 310 Z" fill="url(#skinShadow)" />

            {/* Olive Green Shirt & Collar */}
            <path d="M100 400 L115 310 L160 300 L200 325 L240 300 L285 310 L300 400 Z" fill="url(#oliveShirt)" />
            
            {/* Left Collar Flap */}
            <path d="M160 300 L200 325 L180 340 L145 320 Z" fill="#4B6040" stroke="#253220" strokeWidth="1.5" />
            
            {/* Right Collar Flap */}
            <path d="M240 300 L200 325 L220 340 L255 320 Z" fill="#4B6040" stroke="#253220" strokeWidth="1.5" />

            {/* Shirt Center Placket & Buttons */}
            <path d="M194 325 L206 325 L206 400 L194 400 Z" fill="#313E2A" />
            <circle cx="200" cy="350" r="3" fill="#D1D5DB" />
            <circle cx="200" cy="380" r="3" fill="#D1D5DB" />

            {/* Head Shape & Jaw */}
            <path d="M140 160 C140 100 260 100 260 160 C260 215 240 260 200 265 C160 260 140 215 140 160 Z" fill="url(#skin)" />

            {/* Ears */}
            <path d="M136 170 C130 170 128 195 138 205 C140 200 142 185 140 170 Z" fill="#A86526" />
            <path d="M264 170 C270 170 272 195 262 205 C260 200 258 185 260 170 Z" fill="#A86526" />

            {/* Hair - Stylish Short Dark Cut */}
            <path d="M135 155 C135 90 170 65 200 65 C230 65 265 90 265 155 C260 120 230 110 200 110 C170 110 140 120 135 155 Z" fill="url(#hairDark)" />
            <path d="M135 150 C142 125 170 115 200 115 C230 115 258 125 265 150 C262 135 245 125 200 125 C155 125 138 135 135 150 Z" fill="#2D3035" opacity="0.6" />

            {/* Eyebrows */}
            <path d="M152 150 Q170 144 185 152" stroke="#1E2022" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            <path d="M215 152 Q230 144 248 150" stroke="#1E2022" strokeWidth="5.5" strokeLinecap="round" fill="none" />

            {/* Eyes */}
            <ellipse cx="170" cy="165" rx="9" ry="6" fill="#FFFFFF" />
            <ellipse cx="230" cy="165" rx="9" ry="6" fill="#FFFFFF" />
            <circle cx="171" cy="165" r="5" fill="#2E1B0F" />
            <circle cx="229" cy="165" r="5" fill="#2E1B0F" />
            <circle cx="173" cy="163" r="1.5" fill="#FFFFFF" />
            <circle cx="231" cy="163" r="1.5" fill="#FFFFFF" />

            {/* Nose */}
            <path d="M198 160 L194 195 Q200 202 206 195 L202 160" stroke="#8C4E1A" strokeWidth="2" fill="none" />
            <ellipse cx="192" cy="196" rx="3" ry="2" fill="#8C4E1A" opacity="0.4" />
            <ellipse cx="208" cy="196" rx="3" ry="2" fill="#8C4E1A" opacity="0.4" />

            {/* Mustache & Beard (Full Well-Groomed Indian Style) */}
            <path d="M180 208 Q200 202 220 208 Q210 216 200 214 Q190 216 180 208 Z" fill="#1A1C1E" />
            
            {/* Smile / Lips */}
            <path d="M182 220 Q200 234 218 220" stroke="#8A3F1F" strokeWidth="3" fill="none" />
            <path d="M186 220 Q200 230 214 220 Z" fill="#FFFFFF" />

            {/* Chin Beard & Jawline Stubble */}
            <path d="M150 185 C148 220 170 262 200 263 C230 262 252 220 250 185 C242 225 225 250 200 252 C175 250 158 225 150 185 Z" fill="#181A1D" opacity="0.95" />
            <path d="M192 232 Q200 234 208 232 Q200 248 192 232 Z" fill="#181A1D" />

            {/* Soft Cheek Highlights */}
            <circle cx="160" cy="180" r="12" fill="#D98A48" opacity="0.2" />
            <circle cx="240" cy="180" r="12" fill="#D98A48" opacity="0.2" />
          </svg>
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
