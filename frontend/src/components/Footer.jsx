import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              YP<span className="text-emerald-400">.</span>
            </a>
            <p className="text-slate-400 text-sm mt-2">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-slate-400 text-sm flex items-center gap-1">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart size={14} className="text-emerald-400 fill-emerald-400" />
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors"
          >
            <ArrowUp size={18} className="text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
