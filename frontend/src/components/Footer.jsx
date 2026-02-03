import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              YP<span className="text-[#22D3EE]">.</span>
            </a>
            <p className="text-white/50 text-sm mt-2">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-white/50 text-sm flex items-center gap-1">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart size={14} className="text-[#7C3AED] fill-[#7C3AED]" />
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#2563EB] rounded-lg flex items-center justify-center transition-all border border-white/10"
          >
            <ArrowUp size={18} className="text-white/50 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
