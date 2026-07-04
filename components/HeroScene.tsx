"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroSceneProps = {
  className?: string;
};

export function HeroScene({ className }: HeroSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    const atmosphereGeometry = new THREE.PlaneGeometry(18, 10);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0f766e,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.position.set(0, 0, -5.8);
    scene.add(atmosphere);

    const geometry = new THREE.TorusKnotGeometry(1.35, 0.34, 180, 18);
    const material = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      emissive: 0x0f766e,
      emissiveIntensity: 0.24,
      metalness: 0.42,
      roughness: 0.28,
      transparent: true,
      opacity: 0.78,
    });
    const knot = new THREE.Mesh(geometry, material);
    knot.position.set(2.4, 0.15, -0.7);
    knot.rotation.set(0.7, 0.2, 0.3);
    group.add(knot);

    const ringGeometry = new THREE.TorusGeometry(2.15, 0.012, 8, 160);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.34,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(2.3, 0.15, -0.85);
    ring.rotation.set(1.1, 0.15, 0.4);
    group.add(ring);

    const particleCount = 140;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0x5eead4),
      new THREE.Color(0x7dd3fc),
      new THREE.Color(0xfbbf24),
      new THREE.Color(0xffffff),
    ];

    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.5 + Math.random() * 5.2;
      const angle = Math.random() * Math.PI * 2;
      const depth = -4.4 + Math.random() * 5.2;

      positions[index * 3] = Math.cos(angle) * radius + 1.1;
      positions[index * 3 + 1] = Math.sin(angle) * radius * 0.72;
      positions[index * 3 + 2] = depth;

      const color = palette[index % palette.length];
      colors[index * 3] = color.r;
      colors[index * 3 + 1] = color.g;
      colors[index * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.74,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambient);

    const keyLight = new THREE.PointLight(0x5eead4, 12, 18);
    keyLight.position.set(3.4, 2.2, 4.2);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x7dd3fc, 6, 14);
    fillLight.position.set(-2.8, -1.6, 3.2);
    scene.add(fillLight);

    const pointer = new THREE.Vector2(0, 0);
    const clock = new THREE.Clock();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      if (width < 720) {
        knot.position.set(0.4, -0.2, -0.9);
        ring.position.set(0.35, -0.2, -1);
        group.scale.setScalar(0.86);
      } else {
        knot.position.set(2.4, 0.15, -0.7);
        ring.position.set(2.3, 0.15, -0.85);
        group.scale.setScalar(1);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove);
    resize();

    let frame = 0;
    const render = () => {
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        knot.rotation.x = 0.7 + elapsed * 0.18;
        knot.rotation.y = 0.2 + elapsed * 0.28;
        ring.rotation.z = 0.4 - elapsed * 0.08;
        particles.rotation.z = elapsed * 0.025;
        group.rotation.x += (pointer.y * 0.08 - group.rotation.x) * 0.03;
        group.rotation.y += (pointer.x * 0.12 - group.rotation.y) * 0.03;
      }

      renderer.render(scene, camera);
      frame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      data-testid="hero-three-scene"
    />
  );
}
