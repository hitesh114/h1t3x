import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 0]} />
        <meshPhysicalMaterial
          color="#c799ff"
          emissive="#4af8e3"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
          transmission={0.9}
          thickness={0.5}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
};

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        position: "relative",
      }}
    >
      {/* 3D Background Canvas */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: 0.6,
        }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#c799ff" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#4af8e3"
          />
          <FloatingShape />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          zIndex: 1,
          maxWidth: "800px",
          padding: "2rem",
        }}
        className="glass-card"
      >
        <h1
          className="display-lg"
          style={{
            marginBottom: "1.5rem",
            background:
              "linear-gradient(135deg, var(--on-surface), var(--on-surface-variant))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello, I'm {data.personal.name}
        </h1>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "var(--primary)",
            marginBottom: "2rem",
          }}
        >
          {data.personal.title}
        </h2>
        <p
          className="text-body"
          style={{
            color: "var(--on-surface-variant)",
            fontSize: "1.125rem",
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem auto",
          }}
        >
          {data.personal.bio[0]}
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#projects" className="btn-neon">
            View Deployed Assets
          </a>
          <a
            href="#experience"
            className="btn-neon"
            style={{
              background: "transparent",
              border: "1px solid var(--outline-variant)",
            }}
          >
            <span style={{ color: "var(--on-surface)" }}>Exploration Log</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
