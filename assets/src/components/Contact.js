import React from 'react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="Contact">Contact</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">{data.description}</p>
            <div className="contact-methods">
              <div className="contact-method">
                <i className="fas fa-envelope"></i>
                <a href={`mailto:${data.email}`} style={{ color: '#00ffff', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#00ffff'}>{data.email}</a>
              </div>
              {data.social.map((social, index) => (
                <div key={index} className="contact-method">
                  <i className={social.icon}></i>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#00ffff'}>
                    {social.display}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-terminal">
            <div className="terminal-window small">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">contact.sh</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">./contact.sh --email</span>
                </div>
                <div className="terminal-output">
                  <span className="success">
                    ✓ Email: <a href={`mailto:${data.email}`} style={{ color: '#00ffff', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#00ffff'}>{data.email}</a>
                  </span>
                </div>
                <div className="terminal-line">
                  <span className="prompt">$</span>
                  <span className="command">./contact.sh --social</span>
                </div>
                <div className="terminal-output">
                  {data.social.map((social, index) => (
                    <div key={index} className="success">
                      ✓ {social.name}: <a href={social.url} target="_blank" rel="noopener noreferrer" style={{ color: '#00ffff', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#64ffda'} onMouseLeave={(e) => e.target.style.color = '#00ffff'}>{social.display}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;