import React from 'react';
import { FolderOpen, Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { projects } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Featured Work</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden"
            >
              {/* Project header with gradient */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>

              <div className="p-8">
                {/* Icon and date */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <FolderOpen size={26} className="text-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-700/30 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {project.period}
                  </div>
                </div>

                {/* Title and organization */}
                <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-emerald-400 text-sm mt-1 font-medium">
                  {project.organization}
                </p>

                {/* Description */}
                <p className="text-slate-300 mt-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                      <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
