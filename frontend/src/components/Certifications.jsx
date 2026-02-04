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
    <section id="certifications" className="py-24 bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Professional Credentials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <div
                key={cert.id}
                className="group bg-[#0d1117] rounded-2xl p-6 border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/5 hover:-translate-y-1"
              >
                {/* Logo or Icon */}
                {cert.logo ? (
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 p-2">
                    <img 
                      src={cert.logo} 
                      alt={cert.issuer}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#7C3AED]/30 group-hover:to-[#2563EB]/30 transition-colors">
                    <IconComponent size={26} className="text-[#22D3EE]" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-[#22D3EE] transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-white/50 text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-[#22D3EE] text-sm">
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
