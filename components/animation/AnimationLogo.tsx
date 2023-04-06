import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


export default function AnimationLogo({ width, height, amount, inversed }: { width: number, height: number, amount: number, inversed?: boolean }) {
  const canvasRef = useRef<HTMLDivElement>(null);

  if (!inversed) inversed = false;

  useEffect(() => {
    if (!canvasRef.current) return;

    const WIDTH = width;
    const HEIGHT = height;
    const SCREEN_WIDTH = WIDTH;
    const SCREEN_HEIGHT = HEIGHT;
    const r = 1700;

    let mouseY = 0;
    let windowHalfY = HEIGHT / 2;

    const camera = new THREE.PerspectiveCamera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1000);
    camera.position.z = 1000;

    const scene = new THREE.Scene();

    const parameters = inversed ? [
      [0.1, 0x21D4FD, 0.1],
      [0.1, 0x6AEDFF, 0.1],
      [0.2, 0xAAF3FF, 0.1],
      [0.2, 0xCAEEFF, 0.1],
      [0.3, 0xEAF9FF, 0.1],
    ] : [
      [0.1, 0x0051FF, 0.1],
      [0.1, 0x0046E6, 0.1],
      [0.2, 0x0039BF, 0.1],
      [0.2, 0x002C99, 0.1],
      [0.3, 0x001F7D, 0.1],
    ];

    const createGeometry = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const vertex = new THREE.Vector3();

      for (let i = 0; i < amount; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(r);

        vertices.push(vertex.x, vertex.y, vertex.z);

        vertex.multiplyScalar(Math.random() * 0.09 + 1);

        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      return geometry;
    };

    const geometry = createGeometry();

    for (let i = 0; i < parameters.length; ++i) {
      const p = parameters[i];

      const material = new THREE.LineBasicMaterial({ color: p[1], opacity: p[2] });

      const line = new THREE.LineSegments(geometry, material);
      line.scale.x = line.scale.y = line.scale.z = p[0];
      line.userData.originalScale = p[0];
      line.rotation.y = Math.random() * Math.PI;
      line.updateMatrix();
      scene.add(line);
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    canvasRef.current.appendChild(renderer.domElement);

    document.body.style.touchAction = 'none';
    document.body.addEventListener('pointermove', onPointerMove);

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      windowHalfY = HEIGHT / 2;

      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();

      renderer.setSize(WIDTH, HEIGHT);
    }

    function onPointerMove(event: any) {
      if (event.isPrimary === false) return;

      mouseY = event.clientY - windowHalfY;
    }

    const animate = () => {
      requestAnimationFrame(animate);

      camera.position.y += (-mouseY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const time = Date.now() * 0.0001;

      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];

        if (object instanceof THREE.LineSegments) {
          object.rotation.y = time * (i < 4 ? (i + 1) : -(i + 1));

          if (i < 2) {
            const scale = object.userData.originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(6 * time));
            object.scale.x = object.scale.y = object.scale.z = scale;
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      document.body.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onWindowResize);
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} />;
};