import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Image, Text } from '@react-three/drei';
import * as THREE from 'three';

interface ProjectCard3DProps {
  title: string;
  imageSrc: string;
  isIcon: boolean;
  position: [number, number, number];
  onClick: () => void;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ title, imageSrc, isIcon, position, onClick }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const scaleVector = React.useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      
      // Tilt to mouse if hovered
      const targetRotationX = hovered ? (state.mouse.y * Math.PI) / 8 : 0;
      const targetRotationY = hovered ? (state.mouse.x * Math.PI) / 8 : 0;
      
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
      
      // Scale on hover
      const targetScale = hovered ? 1.05 : 1;
      meshRef.current.scale.lerp(scaleVector.set(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group 
      ref={meshRef} 
      position={position} 
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
      onClick={onClick}
    >
      {/* Card Base */}
      <mesh receiveShadow castShadow>
        <planeGeometry args={[3.2, 2.2]} />
        <meshPhysicalMaterial 
           color={hovered ? "#1F2833" : "#0B0C10"} 
           metalness={0.9} 
           roughness={0.1}
           clearcoat={1.0}
           clearcoatRoughness={0.1}
           transparent
           opacity={0.8}
        />
      </mesh>
      
      {/* Glow border */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[3.25, 2.25]} />
        <meshBasicMaterial color={hovered ? "#66FCF1" : "#45A29E"} transparent opacity={hovered ? 0.8 : 0.3} />
      </mesh>

      {/* Decorative inner elements */}
      {!isIcon && <Image url={imageSrc} transparent opacity={0.9} scale={[2.8, 1.4]} position={[0, 0.2, 0.05]} />}
      
      {isIcon && (
         <Text font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf" position={[0, 0.2, 0.05]} fontSize={0.6} color="#66FCF1" anchorX="center" anchorY="middle">
            {'{ }'}
         </Text>
      )}

      <Text 
        position={[0, -0.7, 0.05]} 
        fontSize={0.2} 
        color="#ffffff" 
        anchorX="center" 
        anchorY="middle"
        font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf"
      >
        {title}
      </Text>
    </group>
  );
};

export default ProjectCard3D;
