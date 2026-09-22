import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Email Templates', href: '#email-templates' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10 text-slate-600 text-left text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-base shadow-sm">
              RK
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900 tracking-tight">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {personalInfo.role}
              </div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 font-semibold text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Social & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shadow-xs"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors shadow-xs"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={onContactClick}
              className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center hover:bg-purple-500 transition-colors shadow-xs cursor-pointer"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-300 transition-colors ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-2">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="text-slate-500">
            Designed for high performance, accessibility & enterprise production standards.
          </div>
        </div>
      </div>
    </footer>
  );
};
