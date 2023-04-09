import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimationCanvasBall: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;


  useEffect(() => {
    if (!canvasRef.current) return;

    const SCREEN_WIDTH = window.innerWidth;
    const SCREEN_HEIGHT = window.innerHeight;
    const r = 450;

    let mouseY = 0;
    let windowHalfY = window.innerHeight / 2;

    const camera = new THREE.PerspectiveCamera(80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000);
    camera.position.z = 1000;

    const scene = new THREE.Scene();

    const parameters = [
      [0.6, 0x0051FF, 0.1],
      [0.6, 0x0046E6, 0.1],
      [0.6, 0x0039BF, 0.1],
      [0.6, 0x002C99, 0.1],
      [0.6, 0x001F7D, 0.1],
      [2, 0xFFC95C, 1],
      [3, 0xE6B352, 1],
      [4, 0xBF9143, 1],
      [5, 0x997033, 1],
    ];

    const createGeometry = () => {
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      const vertex = new THREE.Vector3();

      for (let i = 0; i < 1500; i++) {
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

    if (!isMobile) {
      document.body.addEventListener('pointermove', onPointerMove);
      document.body.style.touchAction = 'none';
    }

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
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

          if (i < 5) {
            const scale = object.userData.originalScale * (i / 5 + 1) * (1 + 0.5 * Math.sin(6 * time));
            object.scale.x = object.scale.y = object.scale.z = scale;
          }
        }
      }

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      if (!isMobile) {
        document.body.removeEventListener('pointermove', onPointerMove);
      }
      window.removeEventListener('resize', onWindowResize);
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} className="w-full h-full absolute top-0 left-0" />;
};

export default AnimationCanvasBall;

