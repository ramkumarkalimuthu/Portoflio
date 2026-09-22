/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EmailTemplates } from './components/EmailTemplates';
import { ExperienceAndContact } from './components/ExperienceAndContact';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { Project, EmailTemplate } from './types';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onContactClick={() => setIsContactOpen(true)} />

        {/* About Me Section */}
        <About onResumeClick={() => setIsResumeOpen(true)} />

        {/* Skills & Tools Section */}
        <Skills />

        {/* Featured Projects (Website Projects) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* HTML Email Templates Section */}
        <EmailTemplates onSelectTemplate={(template) => setSelectedTemplate(template)} />

        {/* Experience, Achievements & Contact 3-Column Section */}
        <ExperienceAndContact onContactClick={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <EmailModal
        template={selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

