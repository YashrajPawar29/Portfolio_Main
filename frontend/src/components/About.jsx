import React from 'react';
import { Briefcase, GraduationCap, Target } from 'lucide-react';
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
      description: "Analytics, Business Intelligence & Data-Driven Operations"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Get to Know Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left side - Profile visual */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-[#0B0F19] rounded-2xl p-8 border border-white/10">
                {/* Profile photo */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#7C3AED]/30">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_portfolio-showcase-628/artifacts/myzf8w0c_02734501-4ccc-43ed-8ad8-976071a23ef6.jpg" 
                    alt="Yashraj Pawar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {personalInfo.name}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-center text-sm mb-6 font-medium">
                  {personalInfo.title}
                </p>

                {/* Quick highlights */}
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-lg flex items-center justify-center">
                        <item.icon size={18} className="text-[#22D3EE]" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wide">{item.title}</p>
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
                <p key={index} className="text-white/70 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">5+</div>
                <p className="text-white/50 text-sm mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]">5</div>
                <p className="text-white/50 text-sm mt-1">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
