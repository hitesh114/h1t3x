import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { resolveAsset } from '../../utils/resolveAsset';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full min-h-screen items-center py-20 bg-obsidian-800 relative z-10 flex">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">01. </span>About Me
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 text-gray-300 text-lg leading-relaxed flex flex-col gap-6">
              {portfolioData.personal.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white text-xl mb-4 font-semibold">Terminal Commands I Use</h4>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.terminalCommands.map((cmd, idx) => (
                    <span key={idx} className="bg-obsidian-900 border border-neon-cyan/30 text-neon-cyan font-mono text-sm px-4 py-2 rounded-md">
                      $ {cmd}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-neon-cyan rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-obsidian-900 border-2 border-neon-cyan rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-500 overflow-hidden z-10 glass-card">
              {portfolioData.personal.avatar.type === 'image' ? (
                <img 
                  src={resolveAsset(portfolioData.personal.avatar.src)} 
                  alt={portfolioData.personal.avatar.alt}
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl text-neon-cyan">
                  <i className="fa-solid fa-user-astronaut"></i>
                </div>
              )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
