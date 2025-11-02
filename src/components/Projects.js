import React from "react";

const Projects = ({ data }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="Projects">
            Projects
          </h2>
        </div>
        <div className="projects-grid">
          {data.map((project, index) => (
            <div key={index} className="project-card">
              {project.links?.live && project.links.live !== "#" && (
                <div
                  className="project-link live-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      project.links.live,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  <i className="fas fa-external-link-alt"></i>
                </div>
              )}
              {project.links?.github && project.links.github !== "#" && (
                <div
                  className="project-github github-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      project.links.github,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 10,
                    cursor: "pointer",
                  }}
                >
                  <i className="fab fa-github"></i>
                </div>
              )}
              <div className="project-image">
                <div className="project-placeholder">
                  {project.image.type === "icon" ? (
                    <i className={project.image.src}></i>
                  ) : (
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
