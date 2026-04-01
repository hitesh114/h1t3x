import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import { resolveAsset } from '../../utils/resolveAsset';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="w-full py-20 bg-obsidian-900 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
            <span className="text-neon-cyan">04.5 </span>Certifications
          </h2>
          <div className="w-24 h-1 bg-neon-cyan rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
             <motion.a 
               href={cert.certificationLink}
               target="_blank"
               rel="noreferrer"
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.1 }}
               className="glass-card p-6 flex items-center gap-6 group hover:-translate-y-2 hover:border-neon-cyan/50 transition-all duration-300"
             >
               <div className="w-16 h-16 rounded-lg bg-white/10 flex-shrink-0 overflow-hidden border border-white/10 group-hover:border-neon-cyan/50 transition-colors p-2 flex items-center justify-center">
                 {cert.badge.type === 'img' || cert.badge.type === 'image' ? (
                   <img src={resolveAsset(cert.badge.src)} alt={cert.badge.alt} className="w-full h-full object-contain" />
                 ) : (
                   <i className={`${cert.badge.src} text-3xl text-neon-cyan`}></i>
                 )}
               </div>
               <div>
                 <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">{cert.name}</h3>
                 <p className="text-gray-400 text-sm mt-1">{cert.organization}</p>
                 <p className="text-neon-teal font-mono text-xs mt-2">{cert.dateObtained}</p>
               </div>
             </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
