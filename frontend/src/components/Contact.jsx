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
    <section id="contact" className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-emerald-500/30 transition-all text-center"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                <item.icon size={24} className="text-emerald-400" />
              </div>
              <p className="text-slate-400 text-sm mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-emerald-400 transition-colors font-medium"
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
          <p className="text-slate-400 text-sm mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-4">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
            >
              <Linkedin size={24} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
            >
              <Github size={24} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:-translate-y-1"
            >
              <Mail size={24} className="text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
