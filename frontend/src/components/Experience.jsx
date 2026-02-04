import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/mock';

const HighlightItem = ({ text }) => (
  <div className="flex items-start gap-2 text-white/60 text-sm">
    <ChevronRight size={16} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />
    <span>{text}</span>
  </div>
);

const ExperienceCard = ({ exp, isEven }) => {
  const highlightsList = exp.highlights || [];
  
  return (
    <div className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-full transform md:-translate-x-1/2 border-4 border-[#0d1117] z-10"></div>
      <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="group bg-[#0B0F19] rounded-2xl p-6 border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/5">
          <div className="flex items-start justify-between mb-4">
            {exp.logo ? (
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src={exp.logo} 
                  alt={exp.company}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center group-hover:from-[#7C3AED]/30 group-hover:to-[#2563EB]/30 transition-colors">
                <Briefcase size={22} className="text-[#22D3EE]" />
              </div>
            )}
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Calendar size={14} />
              {exp.period}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-[#22D3EE] transition-colors">
            {exp.title}
          </h3>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#2563EB] font-medium mt-1">{exp.company}</p>
          <div className="flex items-center gap-2 text-white/50 text-sm mt-2">
            <MapPin size={14} />
            {exp.location}
          </div>
          <div className="mt-4 space-y-2">
            {highlightsList.map((highlight, idx) => (
              <HighlightItem key={idx} text={highlight} />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

const Experience = () => {
  const experienceList = experience || [];

  return (
    <section id="experience" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#2563EB] to-transparent transform md:-translate-x-1/2"></div>
          <div className="space-y-12">
            {experienceList.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} isEven={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
