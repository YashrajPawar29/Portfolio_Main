import React from 'react';
import { skills } from '../data/mock';
import { Code, Brain, TrendingUp, Users } from 'lucide-react';

const SkillTag = ({ name }) => (
  <span className="px-4 py-2 bg-white/5 text-white/70 rounded-lg text-sm hover:bg-[#7C3AED]/20 hover:text-[#22D3EE] transition-colors cursor-default border border-white/5">
    {name}
  </span>
);

const SkillCard = ({ category }) => {
  const IconComponent = category.icon;
  const skillsList = category.skills || [];
  
  return (
    <div className="group bg-[#0B0F19] rounded-2xl p-8 border border-white/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/5">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center group-hover:from-[#7C3AED]/30 group-hover:to-[#2563EB]/30 transition-colors">
          <IconComponent size={22} className="text-[#22D3EE]" />
        </div>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skillsList.map((skill, idx) => (
          <SkillTag key={idx} name={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Technical Skills", icon: Code, skills: skills.technical },
    { title: "Analytical Skills", icon: Brain, skills: skills.analytical },
    { title: "Business Skills", icon: TrendingUp, skills: skills.business },
    { title: "Soft Skills", icon: Users, skills: skills.soft }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Technical Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
