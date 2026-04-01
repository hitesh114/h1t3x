import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveAsset } from '../../utils/resolveAsset';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="w-full min-h-screen py-20 bg-obsidian-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">04. </span>Featured Projects
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {portfolioData.projects.map((project, idx) => (
             <motion.div 
               key={idx}
               variants={itemVariants}
               className="glass-card overflow-hidden group relative"
               onMouseEnter={() => setActiveProject(idx)}
               onMouseLeave={() => setActiveProject(null)}
             >
               <div className="h-64 bg-obsidian-800 relative overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 to-transparent z-10"></div>
                  
                  {project.image.type === 'img' || project.image.type === 'image' ? (
                     <img 
                        src={resolveAsset(project.image.src || "/assets/images/Logo_1.png")} 
                        alt={project.title} 
                        className="object-contain h-full w-full transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Project+Image' }}
                     />
                  ) : (
                     <div className="text-7xl text-neon-teal/50 group-hover:text-neon-cyan transition-colors duration-500 transform group-hover:scale-110">
                        <i className={project.image.src}></i>
                     </div>
                  )}
                  
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                     <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0,3).map((tech, i) => (
                          <span key={i} className="text-xs font-mono text-neon-cyan">{tech}</span>
                        ))}
                     </div>
                  </div>
               </div>
               
               <AnimatePresence>
                 {activeProject === idx && (
                   <motion.div 
                     initial={{ opacity: 0, height: 0 }}
                     animate={{ opacity: 1, height: 'auto' }}
                     exit={{ opacity: 0, height: 0 }}
                     className="px-6 pb-6 pt-4 border-t border-white/5 bg-obsidian-800/50 backdrop-blur-md"
                   >
                     <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
                     
                     <div className="flex gap-4">
                       {project.links.live && project.links.live !== "#" && (
                         <a href={project.links.live} target="_blank" rel="noreferrer" className="text-neon-cyan hover:text-white transition-colors">
                           <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i> Live Demo
                         </a>
                       )}
                       {project.links.github && project.links.github !== "#" && (
                         <a href={project.links.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                           <i className="fa-brands fa-github mr-2"></i> Source Code
                         </a>
                       )}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
