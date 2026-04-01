import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
  return (
    <div id="experience">
      <div style={{ marginBottom: '3rem', paddingLeft: '1.5rem' }}>
        <h3 className="label-md" style={{ marginBottom: '0.5rem' }}>{"// History"}</h3>
        <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>Operational Experience</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {data.map((job, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card"
            style={{ position: 'relative' }}
          >
            {/* Glow line decorator */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary))', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', paddingLeft: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', margin: '0 0 0.25rem 0', color: 'var(--on-surface)' }}>{job.title}</h4>
                <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1rem', letterSpacing: '0.05em' }}>{job.company}</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.875rem', color: 'var(--on-surface-variant)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}><i className="fas fa-calendar-alt"></i> {job.duration}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}><i className="fas fa-map-marker-alt"></i> {job.location}</div>
              </div>
            </div>
            
            <ul style={{ margin: '1.5rem 0', paddingLeft: '2.5rem', color: 'var(--on-surface-variant)', fontSize: '1rem', lineHeight: '1.8' }}>
              {job.description.map((desc, descIndex) => (
                <li key={descIndex} style={{ marginBottom: '0.5rem' }}>{desc}</li>
              ))}
            </ul>
            
            <div style={{ paddingLeft: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {job.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '999px', border: '1px solid var(--outline-variant)', color: 'var(--secondary)' }}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;