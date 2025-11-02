import React from 'react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="Experience">Experience</h2>
        </div>
        <div className="experience-timeline">
          {data.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{job.title}</h3>
                  <div className="experience-company">{job.company}</div>
                  <div className="experience-meta">
                    <div className="experience-duration">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{job.duration}</span>
                    </div>
                    <div className="experience-location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                <div className="experience-description">
                  <ul>
                    {job.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className="experience-technologies">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="experience-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;