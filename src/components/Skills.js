import React, { useState, useEffect } from 'react';

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
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [data.technical]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="Skills">Skills</h2>
        </div>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">{data.categoryTitle || 'Security Testing'}</h3>
            <div className="technical-skills">
              {data.technical.map((skill, index) => (
                <div key={index} className="skill-bar">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-fill"
                      style={{ 
                        width: `${animatedLevels[index] || 0}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-tags">
            <div className="tag-cloud">
              {data.tags.map((tag, index) => (
                <span key={index} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;