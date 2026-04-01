import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { portfolioData } from '../../data/portfolioData';
import HeroParticles from '../3d/HeroParticles';

const FloatingShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[2, 0, 0]}>
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

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-obsidian-900 border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#c799ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4af8e3" />
          <HeroParticles />
          <FloatingShape />
          <Environment preset="city" />
        </Canvas>
      </div>
      
      <div 
        className="relative z-10 text-center max-w-4xl px-6 glass-card p-12 translate-y-[-2rem]"
        style={{ animation: 'fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
      >
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
          style={{
            background: "linear-gradient(135deg, #ffffff, #66FCF1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0px 0px 8px rgba(102,252,241,0.3))"
          }}
        >
          Hello, I'm {portfolioData.personal.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-8" style={{ color: "#4af8e3" }}>
          {portfolioData.personal.title}
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.bio[0]}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#projects" className="glass-button text-lg font-medium px-8 py-3 bg-neon-cyan/10 border-neon-cyan/50 hover:bg-neon-cyan/20">
            View Deployed Assets
          </a>
          <a href="#experience" className="glass-button text-lg font-medium px-8 py-3 bg-transparent border-gray-500 hover:border-gray-300">
            Exploration Log
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
