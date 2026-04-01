import React, { useState } from 'react';

const Navigation = ({ data }) => {
  const [activeItem, setActiveItem] = useState(data[0].href);

  const getIcon = (name) => {
    switch(name.toLowerCase()) {
      case 'home': return 'fas fa-home';
      case 'about': return 'fas fa-user';
      case 'experience': return 'fas fa-briefcase';
      case 'skills': return 'fas fa-code';
      case 'projects': return 'fas fa-laptop-code';
      case 'certifications': return 'fas fa-certificate';
      case 'contact': return 'fas fa-envelope';
      default: return 'fas fa-dot-circle';
    }
  };

  return (
    <nav className="floating-dock">
      {data.map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          className={`dock-link ${activeItem === item.href ? 'active' : ''}`}
          onClick={() => setActiveItem(item.href)}
          title={item.name}
        >
          <i className={getIcon(item.name)} style={{ fontSize: '1.25rem' }}></i>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;