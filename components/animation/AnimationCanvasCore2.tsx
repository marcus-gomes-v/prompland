import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const AnimationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 1000;
    controls.maxDistance = 3000;

    const group = new THREE.Group();
    scene.add(group);

    const segments = 5000 * 5000;
    const positions = new Float32Array(segments * 3);
    for (let i = 0; i < segments; i++) {
      positions[i * 3] = Math.random() * 800 - 400;
      positions[i * 3 + 1] = Math.random() * 800 - 400;
      positions[i * 3 + 2] = Math.random() * 800 - 400;
    }
    const colors = new Float32Array(segments * 3);

    const pMaterial = new THREE.PointsMaterial({
      color: 0xCCCCCC,
      size: 6,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: false
    });

    const particlesAmount = 500
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesAmount * 3);
    const particlesData: { velocity: THREE.Vector3, numConnections: number }[] = [];



    for (let i = 0; i < particlesAmount; i++) {
      const x = Math.random() * 800 - 400;
      const y = Math.random() * 800 - 400;
      const z = Math.random() * 800 - 400;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
        numConnections: 0,
      });
    }

    particles.setDrawRange(0, particlesAmount);
    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3).setUsage(THREE.DynamicDrawUsage));

    const pointCloud = new THREE.Points(particles, pMaterial);
    group.add(pointCloud);


    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage));


    geometry.computeBoundingSphere();

    geometry.setDrawRange(0, 0);

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const linesMesh = new THREE.LineSegments(geometry, material);
    group.add(linesMesh);

    const animate = () => {
      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particlesAmount; i++) particlesData[i].numConnections = 0;
      for (let i = 0; i < particlesAmount; i++) {
        const particleData = particlesData[i];

        particlePositions[i * 3] += particleData.velocity.x;
        particlePositions[i * 3 + 1] += particleData.velocity.y;
        particlePositions[i * 3 + 2] += particleData.velocity.z;

        if (particlePositions[i * 3 + 1] < -400 || particlePositions[i * 3 + 1] > 400)
          particleData.velocity.y = -particleData.velocity.y;

        if (particlePositions[i * 3] < -400 || particlePositions[i * 3] > 400)
          particleData.velocity.x = -particleData.velocity.x;

        if (particlePositions[i * 3 + 2] < -400 || particlePositions[i * 3 + 2] > 400)
          particleData.velocity.z = -particleData.velocity.z;

        for (let j = i + 1; j < particlesAmount; j++) {
          const particleDataB = particlesData[j];
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 100) {
            particleData.numConnections++;
            particleDataB.numConnections++;

            const alpha = 1.0 - dist / 100;

            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;
            colors[colorpos++] = alpha;

            numConnected++;
          }
        }
      }



      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;

      pointCloud.geometry.attributes.position.needsUpdate = true;

      scene.add(pointCloud);
      scene.add(linesMesh);
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div ref={canvasRef} className="w-full h-full absolute top-0 left-0" />;
};

export default AnimationCanvas;

