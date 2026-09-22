import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockups';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div>
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-400 border border-blue-700/60">
              Project #{project.number}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left">
          {/* Mockup Preview Container */}
          <div
            className="h-56 sm:h-64 rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-slate-950"
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
          >
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={`${project.title} Preview`}
                className="block w-full h-auto min-h-full object-cover object-top rounded-lg transition-transform duration-[1800ms] ease-in-out"
              />
            ) : null}
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description} 
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-400" /> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-800 text-sky-300 border border-slate-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className=" hidden p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
            <h5 className="text-xs font-bold text-slate-200">Key Deliverables</h5>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Cross-browser tested across Safari, Chrome, Edge, and Firefox
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Pixel-perfect translation from Figma / Sketch prototypes
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Optimized asset pipelines with fast Core Web Vitals
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xs shadow-md transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-full font-bold text-xs shadow-sm transition-colors"
            >
              <Github className="w-4 h-4" /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
