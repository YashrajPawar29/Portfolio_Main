import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-[#2F2F2F] tracking-tight">
              YP<span className="text-[#2563EB]">.</span>
            </a>
            <p className="text-[#2F2F2F]/60 text-sm mt-2">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-[#2F2F2F]/60 text-sm flex items-center gap-1">
            <span>© {currentYear} {personalInfo.name}. Made with</span>
            <Heart size={14} className="text-[#2563EB] fill-[#2563EB]" />
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="group w-10 h-10 bg-white hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-colors border border-gray-200"
          >
            <ArrowUp size={18} className="text-[#2F2F2F]/60 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
