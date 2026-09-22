import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Eye } from 'lucide-react';
import { websiteProjects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockups';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest block mb-1">
              FEATURED PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Website Projects
            </h2>
          </div>

          <a
            href="https://github.com/ramkumar19121996"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-blue-600/30 transition-all hover:scale-105 self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Project Cards Grid (5-cols on large screens, responsive on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5">
          {websiteProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Mockup Image Container */}
              <div
                onClick={() => onSelectProject(project)}
                className="h-44 sm:h-48 bg-slate-950 p-2 cursor-pointer relative overflow-hidden"
              >
                <ProjectMockup type={project.mockupType} />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-xs">
                  <span className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center gap-1 shadow-md">
                    <Eye className="w-3.5 h-3.5" /> Quick Preview
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {project.number}. {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Card CTA Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 py-1.5 px-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg text-center transition-colors shadow-xs cursor-pointer"
                  >
                    Live Demo
                  </button>
                  <a
                    href={project.githubUrl}
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
