import React from 'react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--outline-variant)' }}>
      {data.links && data.links.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {data.links.map((link, index) => (
            link.href !== "#" && (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e)=>e.target.style.color='var(--primary)'} onMouseLeave={(e)=>e.target.style.color='var(--on-surface-variant)'}>
                {link.name}
              </a>
            )
          ))}
        </div>
      )}
      <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', margin: 0, fontFamily: 'var(--font-label)', letterSpacing: '0.05em' }}>
        &copy; {currentYear} {data.copyright || "H1t3X. All Rights Reserved."}
      </p>
    </footer>
  );
};

export default Footer;