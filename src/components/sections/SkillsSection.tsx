import React from 'react';
import { Canvas } from '@react-three/fiber';
import { portfolioData } from '../../data/portfolioData';
import SkillSphere from '../3d/SkillSphere';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-20 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">03. </span>Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-[600px] relative glow-bg"
          >
             <Canvas camera={{ position: [0, 0, 45], fov: 75 }} dpr={[1, 2]}>
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />
               <SkillSphere skills={portfolioData.skills.tags} />
             </Canvas>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="flex flex-col gap-6"
          >
             <h3 className="text-2xl text-white font-semibold mb-2">{portfolioData.skills.categoryTitle}</h3>
             
             {portfolioData.skills.technical.map((skill, index) => (
               <div key={index} className="w-full">
                 <div className="flex justify-between text-gray-300 mb-2">
                   <span>{skill.name}</span>
                   <span className="text-neon-cyan">{skill.level}%</span>
                 </div>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${skill.level}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, delay: 0.5 + Math.random() * 0.5 }}
                     className="h-full bg-gradient-to-r from-neon-teal to-neon-cyan rounded-full"
                   ></motion.div>
                 </div>
               </div>
             ))}

             <div className="mt-8">
               <h4 className="text-xl text-white mb-4">Other Competencies</h4>
               <div className="flex flex-wrap gap-2">
                 {portfolioData.skills.tags.slice(0, 8).map((tag, i) => (
                   <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-neon-cyan hover:border-neon-cyan transition-colors">
                     {tag}
                   </span>
                 ))}
                 <span className="px-4 py-2 text-sm text-neon-cyan/50 italic">...and more inside the sphere</span>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
