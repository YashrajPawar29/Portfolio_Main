import React from 'react';
import { FolderOpen, Calendar, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Badge } from './ui/badge';

const HighlightItem = ({ text }) => (
  <div className="flex items-start gap-2 text-[#2F2F2F]/60 text-sm">
    <ChevronRight size={16} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </div>
);

const ProjectCard = ({ project }) => {
  const highlightsList = project.highlights || [];
  const tagsList = project.tags || [];
  
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/5 overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-[#2563EB] to-[#3b82f6]"></div>
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center group-hover:bg-[#2563EB]/20 transition-colors">
            <FolderOpen size={26} className="text-[#2563EB]" />
          </div>
          <div className="flex items-center gap-2 text-[#2F2F2F]/60 text-sm bg-[#F8FAFC] px-3 py-1 rounded-full">
            <Calendar size={14} />
            {project.period}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-[#2F2F2F] group-hover:text-[#2563EB] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#2563EB] text-sm mt-1 font-medium">{project.organization}</p>
        <p className="text-[#2F2F2F]/70 mt-4 leading-relaxed text-sm">{project.description}</p>
        <div className="mt-4 space-y-2">
          {highlightsList.map((highlight, idx) => (
            <HighlightItem key={idx} text={highlight} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {tagsList.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="border-[#2563EB]/30 text-[#2563EB] hover:bg-[#2563EB]/10">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsList = projects || [];

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mt-3">Featured Work</h2>
          <div className="w-20 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
