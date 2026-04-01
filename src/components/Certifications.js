import React from "react";
import { motion } from "framer-motion";

const Certifications = ({ data }) => {
  return (
    <div id="certifications">
      <div style={{ marginBottom: "3rem", paddingLeft: "1.5rem" }}>
        <h3 className="label-md" style={{ marginBottom: "0.5rem" }}>
          {"// Credentials"}
        </h3>
        <h2 className="display-lg" style={{ fontSize: "2.5rem" }}>
          Recognized Certifications
        </h2>
      </div>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {data.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="glass-card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "rgba(74, 248, 227, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--secondary)",
                  fontSize: "1.5rem",
                  flexShrink: 0,
                  border: "1px solid var(--outline-variant)",
                }}
              >
                {cert.badge && cert.badge.type === "img" ? (
                  <img
                    src={process.env.PUBLIC_URL + cert.badge.src}
                    alt={cert.badge.alt}
                    style={{
                      width: "110%",
                      height: "110%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <i className="fas fa-certificate"></i>
                )}
              </div>
              <div>
                <h4
                  style={{
                    margin: "0 0 0.25rem 0",
                    fontSize: "1.25rem",
                    color: "var(--on-surface)",
                  }}
                >
                  {cert.name}
                </h4>
                <div
                  style={{
                    color: "var(--on-surface-variant)",
                    fontSize: "1rem",
                  }}
                >
                  {cert.organization}
                </div>
              </div>
            </div>

            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  color: "var(--primary)",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  marginBottom: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                }}
              >
                <i className="far fa-calendar-alt"></i> {cert.dateObtained}
              </div>
            </div>

            {cert.certificationLink && cert.certificationLink !== "#" && (
              <a
                href={cert.certificationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon"
                style={{
                  textDecoration: "none",
                  background: "transparent",
                  border: "1px solid var(--primary)",
                  padding: "0.5rem 1rem",
                  fontSize: "0.75rem",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "1rem",
                  display: "inline-block",
                }}
              >
                Verify Credential
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
