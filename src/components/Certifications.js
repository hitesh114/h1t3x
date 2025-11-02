import React from "react";

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glitch" data-text="Certifications">
            Certifications
          </h2>
        </div>
        <div className="certifications-grid">
          {data.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-header">
                <div className="certification-badge">
                  {cert.badge.type === "icon" ? (
                    <i className={cert.badge.src}></i>
                  ) : (
                    <img
                      src={cert.badge.src}
                      alt={cert.badge.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className="certification-info">
                  <h3 className="certification-name">{cert.name}</h3>
                  <div className="certification-organization">
                    {cert.organization}
                  </div>
                </div>
              </div>
              <div className="certification-dates">
                <div className="cert-date">
                  <i className={cert.dateIcon}></i>
                  Obtained: {cert.dateObtained}
                </div>
                {cert.expirationDate && (
                  <div className="cert-date">
                    <i className={cert.expirationIcon}></i>
                    Expires: {cert.expirationDate}
                  </div>
                )}
              </div>
              {cert.certificationLink && (
                <a
                  href={cert.certificationLink}
                  className="certification-verify"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
