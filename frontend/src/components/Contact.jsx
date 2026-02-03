import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#22D3EE] text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] mx-auto mt-4 rounded-full"></div>
          <p className="text-white/50 mt-6 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-[#0B0F19] rounded-xl p-6 border border-white/10 hover:border-[#7C3AED]/30 transition-all text-center hover:shadow-lg hover:shadow-[#7C3AED]/5"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED]/20 to-[#2563EB]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#7C3AED]/30 group-hover:to-[#2563EB]/30 transition-colors">
                <item.icon size={24} className="text-[#22D3EE]" />
              </div>
              <p className="text-white/50 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-[#22D3EE] transition-colors font-medium"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="text-center">
          <p className="text-white/50 text-sm mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#0B0F19] rounded-xl flex items-center justify-center hover:bg-[#7C3AED]/20 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Linkedin size={24} className="text-white/50 group-hover:text-[#22D3EE] transition-colors" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#0B0F19] rounded-xl flex items-center justify-center hover:bg-[#7C3AED]/20 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Github size={24} className="text-white/50 group-hover:text-[#22D3EE] transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-14 h-14 bg-[#0B0F19] rounded-xl flex items-center justify-center hover:bg-[#7C3AED]/20 transition-all hover:-translate-y-1 border border-white/10"
            >
              <Mail size={24} className="text-white/50 group-hover:text-[#22D3EE] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
