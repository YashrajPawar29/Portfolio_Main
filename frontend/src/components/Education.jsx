import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/mock';
import { Badge } from './ui/badge';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Academic Background</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="group relative bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
            >
              {/* Timeline connector */}
              {index < education.length - 1 && (
                <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-emerald-500/50 to-transparent hidden md:block"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <GraduationCap size={28} className="text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="text-emerald-400 font-medium mt-1">{edu.degree}</p>
                      {edu.gpa && (
                        <p className="text-slate-400 text-sm mt-1">{edu.gpa}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                      <BookOpen size={14} />
                      <span>Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border-0"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
