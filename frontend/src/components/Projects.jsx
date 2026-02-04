import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Badge } from './ui/badge';

const HighlightItem = ({ text }) => (
  <div className="flex items-start gap-2 text-white/60 text-sm">
    <ChevronRight size={16} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </div>
);

const ProjectCard = ({ project }) => {
  const highlightsList = project.highlights || [];
  const tagsList = project.tags || [];
  
  return (
    <div className="group bg-[#0B0F19] rounded-2xl border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/5 overflow-hidden">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
          <div className="absolute top-4 right-4 flex items-center gap-2 text-white/80 text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
            <Calendar size={14} />
            {project.period}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#22D3EE] transition-colors">
          {project.title}
        </h3>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-sm mt-1 font-medium">{project.organization}</p>
        <div className="mt-4 space-y-2">
          {highlightsList.map((highlight, idx) => (
            <HighlightItem key={idx} text={highlight} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {tagsList.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="border-[#7C3AED]/30 text-[#22D3EE] hover:bg-[#7C3AED]/10">
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
    <section id="projects" className="py-24 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
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
