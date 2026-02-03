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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#2563EB] text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2F2F] mt-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#2563EB] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#2F2F2F]/60 mt-6 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-[#F8FAFC] rounded-xl p-6 border border-gray-200 hover:border-[#2563EB]/30 transition-all text-center hover:shadow-lg hover:shadow-[#2563EB]/5"
            >
              <div className="w-14 h-14 bg-[#2563EB]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2563EB]/20 transition-colors">
                <item.icon size={24} className="text-[#2563EB]" />
              </div>
              <p className="text-[#2F2F2F]/60 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[#2F2F2F] hover:text-[#2563EB] transition-colors font-medium"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-[#2F2F2F] font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="text-center">
          <p className="text-[#2F2F2F]/60 text-sm mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#2563EB]/10 transition-all hover:-translate-y-1 border border-gray-200"
            >
              <Linkedin size={24} className="text-[#2F2F2F]/60 group-hover:text-[#2563EB] transition-colors" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#2563EB]/10 transition-all hover:-translate-y-1 border border-gray-200"
            >
              <Github size={24} className="text-[#2F2F2F]/60 group-hover:text-[#2563EB] transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center hover:bg-[#2563EB]/10 transition-all hover:-translate-y-1 border border-gray-200"
            >
              <Mail size={24} className="text-[#2F2F2F]/60 group-hover:text-[#2563EB] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
