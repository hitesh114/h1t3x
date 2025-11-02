import React from "react";

const About = ({ data }) => {
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
                  src={data.avatar.src}
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
