import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-obsidian-900/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-teal">
          {portfolioData.personal.username}
        </div>
        
        <div className="hidden md:flex gap-8">
          {portfolioData.navigation.map((item, i) => (
            <a key={i} href={item.href} className="text-gray-light hover:text-neon-cyan transition-colors text-sm uppercase tracking-wider font-medium">
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="md:hidden text-neon-cyan">
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
