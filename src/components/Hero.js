import React, { useState, useEffect, useRef } from "react";

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const commands = data.terminalCommands;

    const typeCommand = () => {
      const currentCommand = commands[commandIndex];

      if (!isDeleting) {
        setDisplayText(currentCommand.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentCommand.length) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentCommand.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCommandIndex((prev) => (prev + 1) % commands.length);
          setTimeout(() => {}, 500);
          return;
        }
      }
    };

    const timer = setTimeout(
      typeCommand,
      isDeleting ? 50 : 100 + Math.random() * 50
    );
    return () => clearTimeout(timer);
  }, [commandIndex, charIndex, isDeleting, data.terminalCommands]);

  // Mouse tracking for 3D animation
  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (!animationRef.current || !isHovering) return;

      animationFrameId = requestAnimationFrame(() => {
        const rect = animationRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const x = ((e.clientX - centerX) / (rect.width / 2)) * 50;
        const y = ((e.clientY - centerY) / (rect.height / 2)) * 50;

        // Clamp values for smoother movement
        const clampedX = Math.max(-50, Math.min(50, x));
        const clampedY = Math.max(-50, Math.min(50, y));

        setMousePosition({ x: clampedX, y: clampedY });
      });
    };

    if (isHovering) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly return to default position
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-terminal-wrapper">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn close"></span>
                  <span className="btn minimize"></span>
                  <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">
                  {data.personal.username.toLowerCase()}@root:~$
                </div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="prompt">
                    {data.personal.username.toLowerCase()}@root:~$
                  </span>
                  <span className="command">whoami</span>
                </div>
                <div className="terminal-output">
                  <h1 className="hero-name">{data.personal.name}</h1>
                  <p className="hero-title">{data.personal.title}</p>
                </div>
                <div className="terminal-line">
                  <span className="prompt">
                    {data.personal.username.toLowerCase()}@root:~$
                  </span>
                  <span className="typing-text">{displayText}</span>
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>

            {/* Modern 3D Animation Element */}
            <div
              className="hero-3d-animation"
              ref={animationRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="modern-3d-scene">
                {/* Geometric Shapes */}
                <div
                  className={`geometric-wrapper ${
                    isHovering ? "interactive" : ""
                  }`}
                  style={{
                    "--rotate-x": `${-20 + mousePosition.y * 0.5}deg`,
                    "--rotate-y": `${45 + mousePosition.x * 0.5}deg`,
                    "--scale": isHovering ? 1.05 : 1,
                  }}
                >
                  {/* Tetrahedron */}
                  <div className="shape shape-tetrahedron">
                    <div className="shape-face face-1"></div>
                    <div className="shape-face face-2"></div>
                    <div className="shape-face face-3"></div>
                    <div className="shape-face face-4"></div>
                    <div className="shape-glow"></div>
                  </div>

                  {/* Octahedron */}
                  <div className="shape shape-octahedron">
                    <div className="shape-face face-top"></div>
                    <div className="shape-face face-bottom"></div>
                    <div className="shape-face face-front"></div>
                    <div className="shape-face face-back"></div>
                    <div className="shape-face face-left"></div>
                    <div className="shape-face face-right"></div>
                    <div className="shape-glow"></div>
                  </div>

                  {/* Floating Cube */}
                  <div className="shape shape-cube">
                    <div className="shape-face cube-front"></div>
                    <div className="shape-face cube-back"></div>
                    <div className="shape-face cube-right"></div>
                    <div className="shape-face cube-left"></div>
                    <div className="shape-face cube-top"></div>
                    <div className="shape-face cube-bottom"></div>
                    <div className="shape-glow"></div>
                  </div>
                </div>

                {/* Connecting Energy Lines */}
                <svg className="energy-lines" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
                      <stop offset="50%" stopColor="rgba(0, 255, 255, 1)" />
                      <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
                    </linearGradient>
                  </defs>
                  <line
                    className="energy-line line-1"
                    x1="110"
                    y1="140"
                    x2="200"
                    y2="200"
                  />
                  <line
                    className="energy-line line-2"
                    x1="290"
                    y1="140"
                    x2="200"
                    y2="200"
                  />
                  <line
                    className="energy-line line-3"
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="260"
                  />
                  <line
                    className="energy-line line-4"
                    x1="110"
                    y1="260"
                    x2="200"
                    y2="200"
                  />
                  <line
                    className="energy-line line-5"
                    x1="290"
                    y1="260"
                    x2="200"
                    y2="200"
                  />
                </svg>

                {/* Animated Particles */}
                <div className="modern-particles">
                  <div className="particle-modern p1"></div>
                  <div className="particle-modern p2"></div>
                  <div className="particle-modern p3"></div>
                  <div className="particle-modern p4"></div>
                  <div className="particle-modern p5"></div>
                  <div className="particle-modern p6"></div>
                  <div className="particle-modern p7"></div>
                  <div className="particle-modern p8"></div>
                </div>

                {/* Grid Background Effect */}
                <div className="grid-overlay"></div>
              </div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#experience" className="cta-button">
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
