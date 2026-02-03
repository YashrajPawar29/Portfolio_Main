import React from 'react';
import { ArrowDown, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className="text-emerald-400 text-sm font-medium">Open to Opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {personalInfo.name.split(' ')[0]}
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-300 mb-4 font-light">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>

        {/* Contact info pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">
            <MapPin size={16} className="text-emerald-400" />
            {personalInfo.location}
          </div>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors"
          >
            <Mail size={16} className="text-emerald-400" />
            {personalInfo.email}
          </a>
          <a 
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50 transition-colors"
          >
            <Phone size={16} className="text-emerald-400" />
            {personalInfo.phone}
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5"
          >
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-emerald-400 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
