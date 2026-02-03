import React from 'react';
import { User, Briefcase, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master's at NYU Tandon"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Data & Supply Chain Analytics"
    },
    {
      icon: Target,
      title: "Focus",
      description: "AI Risk & Business Intelligence"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Get to Know Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side - Profile visual */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
                {/* Avatar placeholder with initials */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">YP</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-emerald-400 text-center text-sm mb-6">
                  {personalInfo.title}
                </p>

                {/* Quick highlights */}
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-10 h-10 bg-slate-600/50 rounded-lg flex items-center justify-center">
                        <item.icon size={18} className="text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide">{item.title}</p>
                        <p className="text-sm text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - About content */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-300 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">2+</div>
                <p className="text-slate-400 text-sm mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">5+</div>
                <p className="text-slate-400 text-sm mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">3</div>
                <p className="text-slate-400 text-sm mt-1">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
