import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const About = ({ data }) => {
  const [resumeExists, setResumeExists] = useState(false);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/assets/resume.pdf", { method: "HEAD" })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      id="about" 
      className="glass-card"
    >
      <div style={{ marginBottom: '2rem' }}>
        <h3 className="label-md" style={{ marginBottom: '0.5rem' }}>{"// Identity"}</h3>
        <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>Detailed Biography</h2>
      </div>
      
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div style={{ flexShrink: 0, width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)', boxShadow: '0 0 20px rgba(199, 153, 255, 0.2)' }}>
          {data.avatar.type === "icon" ? (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-container-highest)' }}>
              <i className={data.avatar.src} style={{ fontSize: '4rem', color: 'var(--primary)' }}></i>
            </div>
          ) : (
            <img src={process.env.PUBLIC_URL + data.avatar.src} alt={data.avatar.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          )}
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          {data.bio.map((paragraph, index) => (
            <p key={index} className="text-body" style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>{paragraph}</p>
          ))}
          {resumeExists && (
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} target="_blank" rel="noopener noreferrer" className="btn-neon" style={{ textDecoration: 'none', padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
                <i className="fas fa-file-alt" style={{ marginRight: '0.5rem' }}></i> View Resume
              </a>
              <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} download="Hitesh_Resume.pdf" className="btn-neon" style={{ textDecoration: 'none', background: 'transparent', border: '1px solid var(--outline)', padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
                <i className="fas fa-download" style={{ marginRight: '0.5rem', color: 'var(--on-surface)' }}></i> <span style={{ color: 'var(--on-surface)' }}>Download</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
