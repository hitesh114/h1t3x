import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">&copy; {data.copyright}</p>
          <div className="footer-links">
            {data.links.map((link, index) => (
              <a key={index} href={link.href} className="footer-link">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;