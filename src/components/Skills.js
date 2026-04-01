import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = ({ data }) => {
  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            data.technical.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedLevels(prev => ({
                  ...prev,
                  [index]: skill.level
                }));
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [data.technical]);

  return (
    <div id="skills">
      <div style={{ marginBottom: '3rem', paddingLeft: '1.5rem' }}>
        <h3 className="label-md" style={{ marginBottom: '0.5rem' }}>{"// Arsenal"}</h3>
        <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>{data.categoryTitle || 'Security Testing'}</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card" 
        style={{ padding: '2rem' }}
      >
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {data.technical.map((skill, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 500 }}>{skill.name}</span>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{animatedLevels[index] || 0}%</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'var(--surface-container-low)', borderRadius: '4px', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    height: '100%',
                    width: `${animatedLevels[index] || 0}%`,
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    borderRadius: '4px',
                    transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
                    boxShadow: '0 0 10px rgba(74, 248, 227, 0.5)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h4 style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Proficiencies</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {data.tags.map((tag, index) => (
              <span key={index} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--surface-container-high)', borderRadius: '0.5rem', fontSize: '0.875rem', border: '1px solid var(--outline-variant)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;