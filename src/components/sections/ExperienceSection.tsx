import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="w-full min-h-screen py-20 bg-obsidian-800 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">02. </span>Experience
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full mb-12"></div>
        </motion.div>

        <motion.div 
          className="relative border-l-2 border-neon-cyan/30 ml-4 md:ml-0 md:pl-8 flex flex-col gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute w-4 h-4 bg-obsidian-900 border-2 border-neon-cyan rounded-full -left-[41px] top-1 md:-left-[41px]"></div>
              
              <div className="glass-card p-8 group hover:border-neon-cyan/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.title}</h3>
                    <h4 className="text-xl text-gray-400 mt-1">{exp.company}</h4>
                  </div>
                  <div className="text-neon-cyan font-mono mt-2 md:mt-0 bg-neon-cyan/10 px-4 py-1 rounded-full text-sm inline-block self-start">
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-gray-500 mb-6 italic"><i className="fa-solid fa-location-dot mr-2"></i>{exp.location}</p>
                
                <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.technologies.slice(0, 6).map((tech, idx) => (
                    <span key={idx} className="text-xs font-mono text-neon-teal bg-neon-teal/10 px-3 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 6 && (
                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-md">
                      +{exp.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
