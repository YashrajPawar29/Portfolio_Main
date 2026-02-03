import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Professional Journey</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-emerald-500 rounded-full transform md:-translate-x-1/2 border-4 border-slate-800 z-10"></div>

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-slate-700/30 rounded-2xl p-6 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                        <Briefcase size={22} className="text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Title and company */}
                    <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-emerald-400 font-medium mt-1">{exp.company}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mt-4 leading-relaxed text-sm">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                          <ChevronRight size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
