import React, { useState, useEffect } from "react";

const About = ({ data }) => {
  const [resumeExists, setResumeExists] = useState(false);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/assets/resume.pdf", { method: "HEAD" })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="About Me">
            About Me
          </h2>
        </div>
        <div className="about-content">
          <div className="about-avatar">
            <div className="avatar-placeholder">
              {data.avatar.type === "icon" ? (
                <i className={data.avatar.src}></i>
              ) : (
                <img
                  src={process.env.PUBLIC_URL + data.avatar.src}
                  alt={data.avatar.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          </div>
          <div className="about-text">
            <div className="about-bio">
              {data.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {resumeExists && (
              <div className="resume-buttons">
                <a
                  href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn view-btn"
                >
                  <i className="fas fa-file-alt"></i>
                  <span>View Resume</span>
                </a>
                <a
                  href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
                  download="Hitesh_Resume.pdf"
                  className="resume-btn download-btn"
                >
                  <i className="fas fa-download"></i>
                  <span>Download Resume</span>
                </a>
              </div>
            )}
            {data.stats && data.stats.length > 0 && (
              <div className="about-stats">
                {data.stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
