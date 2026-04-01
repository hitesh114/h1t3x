import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HeroParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const { positions, colors, count: particlesCount } = React.useMemo(() => {
    const particlesCount = 3000;
    const pos = new Float32Array(particlesCount * 3);
    const col = new Float32Array(particlesCount * 3);
  
    const color1 = new THREE.Color("#66FCF1"); // neon-cyan
    const color2 = new THREE.Color("#45A29E"); // neon-teal
    const tempColor = new THREE.Color();
  
    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      const mixedColor = tempColor.lerpColors(color1, color2, Math.random());
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    
    return { positions: pos, colors: col, count: particlesCount };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particlesCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors={true} transparent opacity={0.6} sizeAttenuation={true} blending={THREE.AdditiveBlending} />
    </points>
  );
};

export default HeroParticles;
