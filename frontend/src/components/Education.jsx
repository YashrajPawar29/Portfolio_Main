import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { education } from '../data/mock';
import { Badge } from './ui/badge';

const EducationCard = ({ edu, isLast }) => {
  const courseworkList = edu.coursework || [];
  
  return (
    <div className="group relative bg-[#0B0F19] rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/5">
      {!isLast && (
        <div className="absolute left-12 top-full w-0.5 h-8 bg-gradient-to-b from-[#7C3AED]/50 to-transparent hidden md:block"></div>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center group-hover:from-[#7C3AED]/30 group-hover:to-[#2563EB]/30 transition-colors">
            <GraduationCap size={28} className="text-[#22D3EE]" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[#22D3EE] transition-colors">
                {edu.institution}
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#2563EB] font-medium mt-1">{edu.degree}</p>
              {edu.gpa && <p className="text-white/50 text-sm mt-1">{edu.gpa}</p>}
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin size={14} />
                {edu.location}
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Calendar size={14} />
                {edu.period}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
              <BookOpen size={14} />
              <span>Relevant Coursework</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {courseworkList.map((course, idx) => (
                <Badge key={idx} variant="secondary" className="bg-white/5 text-white/70 hover:bg-[#7C3AED]/20 border-0">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const educationList = education || [];
  const totalItems = educationList.length;

  return (
    <section id="education" className="py-24 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Academic Background</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} isLast={index === totalItems - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
