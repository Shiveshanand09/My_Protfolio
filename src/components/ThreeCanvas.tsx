"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function BackgroundStars() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions] = useMemo(() => {
    const count = 300;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function CyberRobot() {
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Idle bobbing & breathing
    if (robotRef.current) {
      robotRef.current.position.y = -0.5 + Math.sin(time * 1.5) * 0.12;
      robotRef.current.rotation.y = time * 0.15; // Slow continuous rotate
    }

    // Head tracks cursor
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouse.current.x * 0.4, 0.08);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, mouse.current.y * 0.25, 0.08);
    }

    // Pulsing core heart
    if (coreRef.current) {
      const scale = 1.0 + Math.sin(time * 4.5) * 0.1;
      coreRef.current.scale.set(scale, scale, scale);
      if (coreRef.current.material) {
        (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = 1.2 + Math.sin(time * 4.5) * 0.6;
      }
    }

    // Arm idle sway
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(time * 1.5) * 0.04 - 0.15;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(time * 1.5) * 0.04 + 0.15;
    }
  });

  return (
    <group ref={robotRef} position={[0, -0.5, 0]}>
      {/* 1. Head Group */}
      <group ref={headRef} position={[0, 1.4, 0]}>
        {/* Head Shell */}
        <mesh>
          <boxGeometry args={[0.65, 0.65, 0.65]} />
          <meshStandardMaterial color="#1a1a24" roughness={0.15} metalness={0.8} />
        </mesh>
        
        {/* Visor / Laser Eye Line */}
        <mesh position={[0, 0.08, 0.33]}>
          <boxGeometry args={[0.48, 0.1, 0.05]} />
          <meshStandardMaterial color="#ff007a" emissive="#ff007a" emissiveIntensity={3} toneMapped={false} />
        </mesh>

        {/* Head Antenna */}
        <mesh position={[0, 0.42, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 0.18, 8]} />
          <meshStandardMaterial color="#00f0ff" />
        </mesh>
        <mesh position={[0, 0.52, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} />
        </mesh>

        {/* Neck Column */}
        <mesh position={[0, -0.38, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.16, 16]} />
          <meshStandardMaterial color="#0b0b0f" roughness={0.5} metalness={0.9} />
        </mesh>
      </group>

      {/* 2. Torso Group */}
      <group position={[0, 0.4, 0]}>
        {/* Chest Armor Plate */}
        <mesh>
          <boxGeometry args={[1.05, 1.35, 0.75]} />
          <meshStandardMaterial color="#111118" roughness={0.2} metalness={0.95} />
        </mesh>

        {/* Reactor Core Heart */}
        <mesh ref={coreRef} position={[0, 0.15, 0.38]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.8} toneMapped={false} />
        </mesh>

        {/* Core Torus Ring */}
        <mesh position={[0, 0.15, 0.37]}>
          <torusGeometry args={[0.2, 0.025, 8, 32]} />
          <meshStandardMaterial color="#1e1e2d" metalness={0.9} />
        </mesh>
      </group>

      {/* 3. Left Arm Group */}
      <group ref={leftArmRef} position={[-0.65, 0.9, 0]}>
        {/* Shoulder Joint Ball */}
        <mesh>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#bd00ff" emissive="#bd00ff" emissiveIntensity={0.3} metalness={0.9} />
        </mesh>
        {/* Upper Arm Cylinder */}
        <mesh position={[-0.1, -0.38, 0]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.09, 0.07, 0.65, 16]} />
          <meshStandardMaterial color="#111118" metalness={0.8} />
        </mesh>
        {/* Elbow Joint Ball */}
        <mesh position={[-0.1, -0.75, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#00f0ff" metalness={0.9} />
        </mesh>
        {/* Lower Arm Cylinder */}
        <mesh position={[-0.1, -1.1, 0]} rotation={[0, 0, 0.05]}>
          <cylinderGeometry args={[0.07, 0.05, 0.55, 16]} />
          <meshStandardMaterial color="#1a1a24" metalness={0.8} />
        </mesh>
      </group>

      {/* 4. Right Arm Group */}
      <group ref={rightArmRef} position={[0.7, 0.9, 0]}>
        {/* Shoulder Joint Ball */}
        <mesh>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#bd00ff" emissive="#bd00ff" emissiveIntensity={0.3} metalness={0.9} />
        </mesh>
        {/* Upper Arm Cylinder */}
        <mesh position={[0.1, -0.38, 0]} rotation={[0, 0, -0.1]}>
          <cylinderGeometry args={[0.09, 0.07, 0.65, 16]} />
          <meshStandardMaterial color="#111118" metalness={0.8} />
        </mesh>
        {/* Elbow Joint Ball */}
        <mesh position={[0.1, -0.75, 0]}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshStandardMaterial color="#00f0ff" metalness={0.9} />
        </mesh>
        {/* Lower Arm Cylinder */}
        <mesh position={[0.1, -1.1, 0]} rotation={[0, 0, -0.05]}>
          <cylinderGeometry args={[0.07, 0.05, 0.55, 16]} />
          <meshStandardMaterial color="#1a1a24" metalness={0.8} />
        </mesh>
      </group>

      {/* 5. Pelvis Hip Base connection */}
      <mesh position={[0, -0.38, 0]}>
        <cylinderGeometry args={[0.38, 0.28, 0.28, 16]} />
        <meshStandardMaterial color="#0b0b0f" roughness={0.4} metalness={0.9} />
      </mesh>
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
        <CyberRobot />
        <BackgroundStars />
        <OrbitalRings />
      </Canvas>
    </div>
  );
}
