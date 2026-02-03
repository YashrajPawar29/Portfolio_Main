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
    <section id="certifications" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Professional Credentials</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <div
                key={cert.id}
                className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <IconComponent size={26} className="text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-slate-400 text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-emerald-400 text-sm">
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
