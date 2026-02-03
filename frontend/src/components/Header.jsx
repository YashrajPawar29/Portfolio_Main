import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-white tracking-tight hover:text-[#22D3EE] transition-colors"
          >
            YP<span className="text-[#22D3EE]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white/70 hover:text-[#22D3EE] transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:from-[#6d28d9] hover:to-[#1d4ed8] text-white px-5 py-2 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#7C3AED]/25"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/70 hover:text-[#22D3EE] transition-colors text-sm font-medium text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white px-5 py-2 rounded-lg text-sm font-medium w-full mt-2"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
