'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Center } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/scene.gltf');
  const group = useRef<THREE.Group>(null);

  return (
    <Center>
      <primitive 
        ref={group}
        object={scene} 
        scale={1.2} 
        rotation={[0, 0, 0]}
      />
    </Center>
  );
}

export default function ToothModel() {
  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1.8, 0]} 
            opacity={0.3} 
            scale={10} 
            blur={2.5} 
            far={4.5} 
          />
        </Suspense>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
