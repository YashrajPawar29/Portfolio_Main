import React from 'react';
import { skills } from '../data/mock';
import { Code, Brain, TrendingUp, Users } from 'lucide-react';
import { Progress } from './ui/progress';

const SkillProgressItem = ({ skill }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
      <span className="text-emerald-400 text-sm">{skill.level}%</span>
    </div>
    <Progress value={skill.level} className="h-2 bg-slate-600/50" />
  </div>
);

const SkillTag = ({ name }) => (
  <span className="px-4 py-2 bg-slate-600/40 text-slate-300 rounded-lg text-sm hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors cursor-default">
    {name}
  </span>
);

const SkillCard = ({ category }) => {
  const IconComponent = category.icon;
  const skillsList = category.skills || [];
  
  return (
    <div className="group bg-slate-700/30 rounded-2xl p-8 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
          <IconComponent size={22} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      {category.type === "progress" ? (
        <div className="space-y-5">
          {skillsList.map((skill, idx) => (
            <SkillProgressItem key={idx} skill={skill} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skillsList.map((skill, idx) => (
            <SkillTag key={idx} name={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Technical Skills", icon: Code, skills: skills.technical, type: "progress" },
    { title: "Analytical Skills", icon: Brain, skills: skills.analytical, type: "tags" },
    { title: "Business Skills", icon: TrendingUp, skills: skills.business, type: "tags" },
    { title: "Soft Skills", icon: Users, skills: skills.soft, type: "tags" }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Technical Expertise</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
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
