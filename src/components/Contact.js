import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  return (
    <div id="contact">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h3 className="label-md" style={{ marginBottom: '0.5rem' }}>{"// Transmission"}</h3>
        <h2 className="display-lg" style={{ fontSize: '2.5rem' }}>Establish Connection</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card" 
        style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '3rem 2rem' }}
      >
        <div style={{ width: '5rem', height: '5rem', borderRadius: '50%', backgroundColor: 'rgba(199, 153, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '2rem', margin: '0 auto 2rem auto', boxShadow: '0 0 20px rgba(199, 153, 255, 0.2)' }}>
          <i className="fas fa-satellite-dish"></i>
        </div>
        
        <p className="text-body" style={{ color: 'var(--on-surface-variant)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
          {data.description || "My transmission channels are always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
        </p>
        
        <a href={`mailto:${data.email}`} className="btn-neon" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', padding: '1rem 2.5rem', marginBottom: '1rem', textDecoration: 'none' }}>
          <i className="fas fa-envelope"></i> Send Email
        </a>
        <div style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '3rem' }}>
          or reach out directly to <span style={{ color: 'var(--primary)', fontWeight: 500 }}>{data.email}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
          {data.social && data.social.map((platform, index) => (
            platform.url && platform.url !== "#" && (
              <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface-variant)', fontSize: '1.75rem', transition: 'color 0.3s, transform 0.3s' }} onMouseEnter={(e)=>{e.target.style.color='var(--primary)'; e.target.style.transform='translateY(-3px)'}} onMouseLeave={(e)=>{e.target.style.color='var(--on-surface-variant)'; e.target.style.transform='translateY(0)'}} title={platform.display}>
                <i className={platform.icon}></i>
              </a>
            )
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;