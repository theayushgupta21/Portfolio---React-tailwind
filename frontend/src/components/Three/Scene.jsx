import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  Float, 
  ContactShadows, 
  Stars,
  Sparkles
} from "@react-three/drei";
import Avatar from "./Avatar";
import { useStore } from "../../useStore/store";

const BackgroundElements = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={100} scale={10} size={1} speed={0.4} opacity={0.2} color="#6366f1" />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={2} />
    </>
  );
};

const Scene = () => {
  return (
    <Canvas shadow={{ type: 'soft' }} dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
      <BackgroundElements />
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Avatar />
      </Float>

      <ContactShadows 
        opacity={0.4} 
        scale={10} 
        blur={2.4} 
        far={10} 
        resolution={256} 
        color="#000000" 
      />
      
      {/* Subtle background particles or grid can go here */}
    </Canvas>
  );
};

export default Scene;
