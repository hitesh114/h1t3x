import React from "react";
import { motion } from 'framer-motion';

const Projects = ({ data }) => {
  return (
    <div id="projects">
      <div style={{ marginBottom: '3rem', paddingLeft: '1.5rem' }}>
        <h3 className="label-md" style={{ marginBottom: '0.5rem' }}>{"// Deployments"}</h3>
        <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>Deployed Assets</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {data.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card" 
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', backgroundColor: 'var(--surface-container-lowest)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--primary)', boxShadow: '0 0 20px rgba(199, 153, 255, 0.1)' }}>
                {project.image.type === "icon" ? (
                  <i className={project.image.src}></i>
                ) : (
                  <img src={process.env.PUBLIC_URL + project.image.src} alt={project.image.alt} style={{ width: '100%', height: '100%', borderRadius: '1rem', objectFit: 'cover' }} />
                )}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.links?.github && project.links.github !== "#" && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='var(--on-surface)'} onMouseLeave={(e)=>e.target.style.color='var(--on-surface-variant)'}><i className="fab fa-github"></i></a>
                )}
                {project.links?.live && project.links.live !== "#" && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', fontSize: '1.25rem', transition: 'text-shadow 0.3s' }} onMouseEnter={(e)=>e.target.style.textShadow='0 0 10px rgba(74, 248, 227, 0.5)'} onMouseLeave={(e)=>e.target.style.textShadow='none'}><i className="fas fa-external-link-alt"></i></a>
                )}
              </div>
            </div>
            
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', color: 'var(--on-surface)', fontWeight: 600 }}>{project.title}</h4>
              <p className="text-body" style={{ margin: 0, color: 'var(--on-surface-variant)' }}>{project.description}</p>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '4px', backgroundColor: 'rgba(188, 135, 254, 0.1)', color: 'var(--primary-container)' }}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
