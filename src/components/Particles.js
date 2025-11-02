import React, { useEffect, useRef } from 'react';

const Particles = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const particleCount = 30;
    let particlePool = [];

    const createParticle = () => {
      let particle = particlePool.pop();
      if (!particle) {
        particle = document.createElement('div');
        particle.className = 'particle';
      }

      const size = Math.random() * 3 + 1;
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 5}s;
      `;

      particlesContainer.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
          particlePool.push(particle);
        }
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
      setTimeout(createParticle, i * 200);
    }

    // Continuously create new particles
    const interval = setInterval(createParticle, 1200);

    return () => {
      clearInterval(interval);
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return <div className="particles-container" ref={particlesRef}></div>;
};

export default Particles;