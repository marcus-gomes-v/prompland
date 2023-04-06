import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

const RotatingCube: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Create the WebGLRenderer, scene, and camera
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);

    // Set up OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;

    // Create a rotating cube
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 7;

    // Lightning bolt setup
    const lightningBoltCount = 5;
    const lightningBoltMaterial = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    const lightningBolts: any = [];

    for (let i = 0; i < lightningBoltCount; i++) {
      const points = generateLightningPoints(cube.position, 10);
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
      const lightningBolt = new THREE.Mesh(tubeGeometry, lightningBoltMaterial);
      scene.add(lightningBolt);
      lightningBolts.push(lightningBolt);
    }

    function generateLightningPoints(startPosition: THREE.Vector3, maxLength: number): THREE.Vector3[] {
      const points = [startPosition.clone()];
      let currentLength = 0;

      while (currentLength < maxLength) {
        const direction = new THREE.Vector3(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1);
        const segmentLength = Math.random() * 1 + 0.5;
        const newPosition = points[points.length - 1].clone().add(direction.normalize().multiplyScalar(segmentLength));
        points.push(newPosition);
        currentLength += segmentLength;
      }

      return points;
    }

    // Initialize random delay for each lightning bolt
    const lightningBoltDelays = lightningBolts.map(() => Math.random() * 100);


    // Set up the animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Update lightning bolts
      lightningBolts.forEach((bolt: any, index: any) => {
        lightningBoltDelays[index] -= 16.67; // Assuming 60 FPS, so 1000 ms / 60 = 16.67 ms per frame
        if (lightningBoltDelays[index] <= 0) {
          const points = generateLightningPoints(cube.position, 10);
          const curve = new THREE.CatmullRomCurve3(points);
          bolt.geometry = new THREE.TubeGeometry(curve, 64, 0.05, 16, false);

          // Reset the delay for the current lightning bolt with a random value between 500 and 1000 ms
          lightningBoltDelays[index] = 500 + Math.random() * 500;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    };

    // Start the animation
    animate();

    // Resize the canvas when the window is resized
    const handleResize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default RotatingCube;