"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
    const count = 2000;
    const meshRef = useRef<THREE.Points>(null);

    // Generate random positions
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 10;
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Slow rotation over time
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;

        // Mouse interaction parallax
        const { x, y } = state.pointer;
        meshRef.current.rotation.x += y * 0.1;
        meshRef.current.rotation.y += x * 0.1;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#06b6d4" // Cyan base
                sizeAttenuation
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

function ConnectingLines() {
    // Optional second layer for depth - connecting lines or larger stars?
    // Let's keep it clean with just particles first, but maybe add a secondary color layer
    const count = 500;
    const meshRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 15;
            temp[i * 3] = x;
            temp[i * 3 + 1] = y;
            temp[i * 3 + 2] = z;
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                    args={[particles, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#8b5cf6" // Purple accent
                sizeAttenuation
                transparent
                opacity={0.6}
            />
        </points>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Fog to fade distant particles */}
                <fog attach="fog" args={["#000", 3, 10]} />

                <ParticleField />
                <ConnectingLines />

                {/* Ambient light purely for any mesh materials if added later */}
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}
