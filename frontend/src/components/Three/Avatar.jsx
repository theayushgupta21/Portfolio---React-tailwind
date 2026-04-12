import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Text } from "@react-three/drei";
import * as THREE from "three";

const CyberCharacter = () => {
  const groupRef = useRef();
  const eyeRef = useRef();
  const headRef = useRef();

  // Floating code fragments data
  const codeFragments = useMemo(() => [
    { text: "const portfolio = () => {", pos: [-1.5, 0.8, -0.5], size: 0.1 },
    { text: "opacity: 0.8,", pos: [1.2, 0.4, 0.5], size: 0.08 },
    { text: "camera.focus()", pos: [-0.8, -1.2, 1], size: 0.12 },
    { text: "render()", pos: [1.5, -0.6, -1], size: 0.09 },
  ], []);

  useFrame((state) => {
    const time = performance.now() / 1000;
    const { mouse } = state;

    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;

      // Mouse tracking for the whole group
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 8, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (-mouse.y * Math.PI) / 12, 0.1);
    }

    if (eyeRef.current) {
      // Small jittery "processing" movement for the eye-lens
      eyeRef.current.scale.setScalar(1 + Math.sin(time * 10) * 0.02);
      eyeRef.current.position.z = 0.5 + Math.sin(time * 5) * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Futuristic Head / Lens Pod */}
      <group ref={headRef}>
        <mesh castShadow>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial 
            color="#0f172a" 
            metalness={1} 
            roughness={0.05} 
            envMapIntensity={2} 
          />
        </mesh>
        
        {/* The "Camera Eye" */}
        <mesh ref={eyeRef} position={[0, 0, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.1, 32]} />
          <meshStandardMaterial 
            color="#6366f1" 
            emissive="#6366f1" 
            emissiveIntensity={2} 
            metalness={1} 
            roughness={0} 
          />
        </mesh>
        
        {/* Glow Halo */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.9, 0.02, 16, 100]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={5} />
        </mesh>
      </group>

      {/* 2. Floating Holographic Code Fragments */}
      {codeFragments.map((frag, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text
            position={frag.pos}
            fontSize={frag.size}
            color="#6366f1"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.8}
            maxWidth={2}
          >
            {frag.text}
          </Text>
        </Float>
      ))}

      {/* 3. Orbiting "Particle" satellites (Representing content nodes) */}
      {[0, 1, 2].map((i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} />
          {/* We animate these in useFrame if needed, for now just static satellites */}
        </mesh>
      ))}

      {/* 4. Ambient Cyber Glow */}
      <pointLight position={[0, 0, 2]} color="#6366f1" intensity={2} distance={5} />
      <pointLight position={[2, 2, -2]} color="#ec4899" intensity={1} distance={5} />
    </group>
  );
};

export default React.memo(CyberCharacter);
