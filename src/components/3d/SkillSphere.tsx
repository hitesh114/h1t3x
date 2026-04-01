import React, { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface WordProps {
  children: string;
  position: THREE.Vector3;
}

const Word = React.memo(({ children, position }: WordProps) => {
  // Memoize static props to prevent re-creation
  const fontProps = useMemo(() => ({ 
    font: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf",
    fontSize: 2.5, 
    letterSpacing: -0.05, 
    lineHeight: 1, 
    'material-toneMapped': false 
  }), []);
  
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  
  // Allocate color once per text instance instead of calculating in render body
  const color = useMemo(() => new THREE.Color(), []);
  
  const over = (e: any) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }
  const out = () => { setHovered(false); document.body.style.cursor = 'auto'; }
  
  useFrame(() => {
    if (ref.current) {
        // Optimized lerping
        ref.current.material.color.lerp(color.set(hovered ? '#66FCF1' : '#C5C6C7'), 0.1);
    }
  });

  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} position={position} {...fontProps}>
      {children}
    </Text>
  );
});

interface CloudProps {
  skills: string[];
  count?: number;
  radius?: number;
}

const Cloud = React.memo(({ skills, count = 4, radius = 20 }: CloudProps) => {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    let index = 0;
    const safeSkills = skills && skills.length > 0 ? skills : ["React", "TypeScript", "Three.js"];
    
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
            new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), 
            safeSkills[index % safeSkills.length]
        ]);
        index++;
      }
    }
    return temp;
  }, [count, radius, skills]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={`${word}-${index}`} position={pos}>{word}</Word>
      ))}
    </>
  );
});

export interface SkillSphereProps {
  skills: string[];
}

const SkillSphere: React.FC<SkillSphereProps> = ({ skills }) => {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      group.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Cloud skills={skills} count={4} radius={18} />
    </group>
  );
};

export default React.memo(SkillSphere);
