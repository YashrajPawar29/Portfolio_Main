import React from 'react';
import { Award, GraduationCap, BarChart3, Calendar } from 'lucide-react';
import { certifications } from '../data/mock';

const iconMap = {
  'award': Award,
  'graduation-cap': GraduationCap,
  'bar-chart': BarChart3
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mt-3">Professional Credentials</h2>
          <div className="w-20 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#2563EB]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2563EB]/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                  <IconComponent size={26} className="text-[#2563EB]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#2F2F2F] group-hover:text-[#2563EB] transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-[#2F2F2F]/60 text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-[#2563EB] text-sm">
                  <Calendar size={14} />
                  {cert.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
