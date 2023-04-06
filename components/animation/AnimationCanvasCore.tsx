import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimationCanvasCore: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const instances = 100;
    const positions = new Float32Array(instances * 3);

    for (let i = 0; i < instances; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const lines = new Array(instances).fill(null).map(() => {
      const line = new THREE.Line(geometry, material);
      line.position.x = (Math.random() - 0.5) * 100;
      line.position.y = (Math.random() - 0.5) * 100;
      line.position.z = (Math.random() - 0.5) * 100;
      scene.add(line);
      return line;
    });

    const animate = () => {
      requestAnimationFrame(animate);

      camera.rotation.x += 0.001;
      camera.rotation.y += 0.001;

      lines.forEach((line) => {
        line.position.y -= 0.1;
        if (line.position.y < -50) {
          line.position.y = 50;
        }
      });

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={canvasRef} className="w-full h-full absolute top-0 left-0" />;
};

export default AnimationCanvasCore;
