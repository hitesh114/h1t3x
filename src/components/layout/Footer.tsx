import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-obsidian-900 py-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{portfolioData.personal.name}</h3>
            <p className="text-gray-400">{portfolioData.personal.title}</p>
          </div>
          
          <div className="flex gap-6">
            {portfolioData.contact.social.map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(102,252,241,0.3)] transition-all">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {portfolioData.footer.copyright}</p>
          <div className="flex gap-6">
             {portfolioData.footer.links.map((link, idx) => (
                <a key={idx} href={link.href} className="hover:text-neon-cyan transition-colors">{link.name}</a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
