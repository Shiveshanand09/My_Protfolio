"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleCore() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorsList = [
      new THREE.Color("#00f0ff"), // Neon Cyan
      new THREE.Color("#bd00ff"), // Neon Purple
      new THREE.Color("#ff007a"), // Neon Pink
    ];

    for (let i = 0; i < count; i++) {
      // Golden ratio distribution to map particles onto a sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Add minor random variance to radial distance for shell depth
      const radius = 2.0 + Math.random() * 0.4;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Cycle colors to get a blended gradient look
      const col = colorsList[i % 3];
      cols[i * 3] = col.r;
      cols[i * 3 + 1] = col.g;
      cols[i * 3 + 2] = col.b;
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Slow cinematic rotation
    pointsRef.current.rotation.y = time * 0.06;
    pointsRef.current.rotation.x = time * 0.03;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
        <PointMaterial
          transparent
          vertexColors
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const children = groupRef.current.children;
    if (children[0]) {
      children[0].rotation.z = time * 0.15;
      children[0].rotation.y = time * 0.08;
    }
    if (children[1]) {
      children[1].rotation.z = -time * 0.12;
      children[1].rotation.x = time * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner Cyber Ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <ringGeometry args={[2.5, 2.515, 64]} />
        <meshBasicMaterial color="#00f0ff" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>
      {/* Outer Glow Ring */}
      <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <ringGeometry args={[2.8, 2.81, 64]} />
        <meshBasicMaterial color="#ff007a" side={THREE.DoubleSide} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[8, 8, 8]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-8, -8, -8]} intensity={0.8} color="#ff007a" />
        <ParticleCore />
        <OrbitalRings />
      </Canvas>
    </div>
  );
}
