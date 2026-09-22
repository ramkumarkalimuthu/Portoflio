import React from 'react';

interface ProjectMockupProps {
  type: 'portfolio' | 'landing' | 'wordpress' | 'webapp' | 'countries';
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, className = "w-full h-full" }) => {
  switch (type) {
    case 'portfolio':
      return (
        <div className={`${className} bg-slate-950 p-3 rounded-lg overflow-hidden flex flex-col justify-between border border-slate-800 text-left select-none relative group-hover:scale-105 transition-transform duration-300`}>
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          
          {/* Browser header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[9px] text-slate-400 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              ramkumar.dev
            </div>
            <div className="w-6" />
          </div>

          {/* Mini Portfolio Hero */}
          <div className="flex items-center justify-between gap-2 py-2">
            <div className="space-y-1 max-w-[60%]">
              <div className="text-[7px] text-cyan-400 font-bold uppercase tracking-wider">Hello, I'm</div>
              <div className="text-xs font-black text-white tracking-tight leading-none">RAM KUMAR</div>
              <div className="text-[8px] text-slate-300 leading-tight">Web Specialist</div>
              <div className="flex gap-1 pt-1">
                <span className="h-3 px-1.5 rounded-full bg-blue-600 text-[6px] text-white flex items-center font-medium">Work</span>
                <span className="h-3 px-1.5 rounded-full bg-slate-800 text-[6px] text-slate-300 flex items-center">GitHub</span>
              </div>
            </div>
            {/* Avatar thumbnail */}
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-blue-400 font-bold">
                  RK
                </div>
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-1 pt-2 border-t border-slate-800/60 mt-1">
            <div className="bg-slate-900/80 rounded p-1 text-center">
              <div className="text-[8px] font-bold text-blue-400">6+</div>
              <div className="text-[5px] text-slate-400">Years</div>
            </div>
            <div className="bg-slate-900/80 rounded p-1 text-center">
              <div className="text-[8px] font-bold text-blue-400">50+</div>
              <div className="text-[5px] text-slate-400">Emails</div>
            </div>
            <div className="bg-slate-900/80 rounded p-1 text-center">
              <div className="text-[8px] font-bold text-emerald-400">100%</div>
              <div className="text-[5px] text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>
      );

    case 'landing':
      return (
        <div className={`${className} bg-slate-900 p-3 rounded-lg overflow-hidden flex flex-col justify-between border border-slate-800 text-left select-none relative group-hover:scale-105 transition-transform duration-300`}>
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[8px] text-blue-400 font-semibold">CloudScale UI</span>
            <div className="w-4 h-1 bg-blue-500/40 rounded-full" />
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-slate-900 p-2 rounded-md border border-blue-800/40 mb-2">
            <div className="text-[9px] font-bold text-white mb-0.5">Scale Your Revenue</div>
            <div className="text-[6px] text-slate-300 leading-tight mb-1.5">The modern analytics platform built for high-growth digital teams.</div>
            <div className="flex gap-1">
              <span className="h-3 px-2 rounded bg-blue-500 text-[6px] text-white flex items-center font-bold">Start Free</span>
              <span className="h-3 px-1.5 rounded bg-slate-800 text-[6px] text-slate-300 flex items-center">Live Tour</span>
            </div>
          </div>

          {/* Mini chart card */}
          <div className="bg-slate-950 p-1.5 rounded border border-slate-800 flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-[6px] text-slate-400">Total Conversion</div>
              <div className="text-[9px] font-bold text-emerald-400">+34.8%</div>
            </div>
            <div className="flex items-end gap-1 h-6">
              <div className="w-1.5 bg-blue-500/40 rounded-t h-2" />
              <div className="w-1.5 bg-blue-500/60 rounded-t h-3.5" />
              <div className="w-1.5 bg-blue-500/80 rounded-t h-4" />
              <div className="w-1.5 bg-blue-400 rounded-t h-5.5" />
            </div>
          </div>
        </div>
      );

    case 'wordpress':
      return (
        <div className={`${className} bg-slate-900 p-3 rounded-lg overflow-hidden flex flex-col justify-between border border-slate-800 text-left select-none relative group-hover:scale-105 transition-transform duration-300`}>
          {/* Top navigation */}
          <div className="flex items-center justify-between pb-1.5 border-b border-emerald-900/50 mb-1.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[8px] font-bold text-emerald-400">Voya Nature</span>
            </div>
            <div className="text-[7px] text-slate-400">Menu</div>
          </div>

          {/* WordPress Banner */}
          <div className="bg-emerald-950/60 border border-emerald-800/40 rounded p-2 mb-2">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[6px] font-semibold text-emerald-400 uppercase tracking-wider">Enterprise CMS</span>
                <div className="text-[9px] font-bold text-white">Sustainable Future</div>
                <div className="text-[6px] text-slate-300 line-clamp-1">Custom blocks & SEO optimized templates.</div>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-800/60 border border-emerald-600/40 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-emerald-300" fill="currentColor">
                  <path d="M12 2L4 9v12h16V9l-8-7zm0 3.5l5 4.1v8.4H7V9.6l5-4.1z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-2 gap-1.5">
            <div className="bg-slate-950 p-1.5 rounded border border-slate-800">
              <div className="h-3 w-full bg-emerald-900/40 rounded mb-1" />
              <div className="text-[7px] font-bold text-slate-200">ESG Insights</div>
            </div>
            <div className="bg-slate-950 p-1.5 rounded border border-slate-800">
              <div className="h-3 w-full bg-emerald-900/40 rounded mb-1" />
              <div className="text-[7px] font-bold text-slate-200">Annual Report</div>
            </div>
          </div>
        </div>
      );

    case 'webapp':
      return (
        <div className={`${className} bg-slate-950 p-3 rounded-lg overflow-hidden flex flex-col justify-between border border-slate-800 text-left select-none relative group-hover:scale-105 transition-transform duration-300`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-1.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[8px] font-bold text-amber-400">Order Management</div>
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>

          {/* Sidebar & main layout */}
          <div className="flex gap-2 flex-1 mb-1.5">
            {/* Mini sidebar */}
            <div className="w-8 bg-slate-900 p-1 rounded space-y-1 shrink-0">
              <div className="h-1.5 bg-amber-500/80 rounded w-full" />
              <div className="h-1 bg-slate-700 rounded w-full" />
              <div className="h-1 bg-slate-700 rounded w-3/4" />
              <div className="h-1 bg-slate-700 rounded w-full" />
            </div>
            {/* Mini content */}
            <div className="flex-1 space-y-1">
              <div className="bg-slate-900 p-1.5 rounded border border-slate-800">
                <div className="flex justify-between items-center text-[7px] font-mono text-slate-300 mb-1">
                  <span>DB: MySQL</span>
                  <span className="text-amber-400">200 OK</span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex justify-between text-[6px] text-slate-400">
                    <span>#ORD-9821</span>
                    <span className="text-emerald-400">$1,450.00</span>
                  </div>
                  <div className="flex justify-between text-[6px] text-slate-400">
                    <span>#ORD-9822</span>
                    <span className="text-emerald-400">$890.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[6px] text-slate-400 pt-1 border-t border-slate-800/70">
            <span>PHP 8.2 backend</span>
            <span className="text-amber-300 font-bold">CRUD Verified</span>
          </div>
        </div>
      );

    case 'countries':
      return (
        <div className={`${className} bg-slate-900 p-3 rounded-lg overflow-hidden flex flex-col justify-between border border-slate-800 text-left select-none relative group-hover:scale-105 transition-transform duration-300`}>
          {/* Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-1.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="text-[8px] font-bold text-white">Country Explorer</div>
            <div className="text-[6px] text-slate-400">REST API</div>
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded border border-slate-800 mb-1.5">
            <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="text-[7px] text-slate-500">Search for a country...</span>
          </div>

          {/* Mini country cards */}
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-slate-950 rounded p-1 border border-slate-800 text-center">
              <div className="text-[9px] mb-0.5">🇮🇳</div>
              <div className="text-[6px] font-bold text-white truncate">India</div>
              <div className="text-[5px] text-slate-400">Asia</div>
            </div>
            <div className="bg-slate-950 rounded p-1 border border-slate-800 text-center">
              <div className="text-[9px] mb-0.5">🇩🇪</div>
              <div className="text-[6px] font-bold text-white truncate">Germany</div>
              <div className="text-[5px] text-slate-400">Europe</div>
            </div>
            <div className="bg-slate-950 rounded p-1 border border-slate-800 text-center">
              <div className="text-[9px] mb-0.5">🇯🇵</div>
              <div className="text-[6px] font-bold text-white truncate">Japan</div>
              <div className="text-[5px] text-slate-400">Asia</div>
            </div>
          </div>
        </div>
      );
  }
};
