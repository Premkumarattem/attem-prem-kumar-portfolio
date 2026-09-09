import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeWorkspace() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene & Fog
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070f, 0.035);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 7.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Mouse lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.0012;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.0012;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const workspaceGroup = new THREE.Group();
    scene.add(workspaceGroup);

    // --- 1. Grid Floor ---
    const gridHelper = new THREE.GridHelper(40, 40, 0x38bdf8, 0x1e293b);
    gridHelper.position.y = -2;
    gridHelper.material.opacity = 0.3;
    gridHelper.material.transparent = true;
    workspaceGroup.add(gridHelper);

    // --- 2. Floating 3D Tech Cubes ---
    const createTechCube = (size, x, y, z, color, labelText) => {
      const geometry = new THREE.BoxGeometry(size, size, size);

      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 256, 256);
      ctx.lineWidth = 8;
      ctx.strokeStyle = color;
      ctx.strokeRect(4, 4, 248, 248);
      ctx.fillStyle = color;
      ctx.font = 'bold 36px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labelText, 128, 128);

      const texture = new THREE.CanvasTexture(canvas);
      const materials = Array(6).fill(
        new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0.8,
          roughness: 0.2,
          emissive: new THREE.Color(color),
          emissiveIntensity: 0.25,
        })
      );

      const cube = new THREE.Mesh(geometry, materials);
      cube.position.set(x, y, z);
      cube.userData = {
        rotX: (Math.random() - 0.5) * 0.015,
        rotY: (Math.random() - 0.5) * 0.02,
        initialY: y,
        floatOffset: Math.random() * Math.PI * 2
      };
      workspaceGroup.add(cube);
      return cube;
    };

    const cubes = [
      createTechCube(0.8, -3.2, 1.2, -1, '#38bdf8', 'PYTHON'),
      createTechCube(0.7, 3.2, 1.8, -1.5, '#818cf8', 'FASTAPI'),
      createTechCube(0.65, -2.8, -0.8, -2, '#c084fc', 'GROQ AI'),
      createTechCube(0.75, 3.0, -0.2, -1, '#38bdf8', 'REACT'),
      createTechCube(0.6, 0.0, 2.8, -0.5, '#34d399', 'DATA'),
    ];

    // --- 3. 3D Developer Desk Workspace ---
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, -1.2, 0);
    workspaceGroup.add(deskGroup);

    // Base
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.9, roughness: 0.1 });
    const laptopBase = new THREE.Mesh(baseGeo, darkMat);
    deskGroup.add(laptopBase);

    // Screen
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.04, -0.75);
    screenGroup.rotation.x = -Math.PI * 0.15;
    deskGroup.add(screenGroup);

    const screenFrameGeo = new THREE.BoxGeometry(2.4, 1.5, 0.05);
    const screenFrame = new THREE.Mesh(screenFrameGeo, darkMat);
    screenFrame.position.set(0, 0.75, 0);
    screenGroup.add(screenFrame);

    // Code texture canvas
    const codeCanvas = document.createElement('canvas');
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    const codeCtx = codeCanvas.getContext('2d');
    const codeTexture = new THREE.CanvasTexture(codeCanvas);

    const screenDisplayGeo = new THREE.PlaneGeometry(2.2, 1.3);
    const screenMat = new THREE.MeshBasicMaterial({ map: codeTexture });
    const screenDisplay = new THREE.Mesh(screenDisplayGeo, screenMat);
    screenDisplay.position.set(0, 0.75, 0.03);
    screenGroup.add(screenDisplay);

    const codeLines = [
      'const dev = new SoftwareEngineer("Attem Prem Kumar");',
      'dev.setSkills(["Python", "FastAPI", "React", "Groq AI"]);',
      'dev.setDataAnalytics("Sketch Brains Certified");',
      'await dev.launchSmartClassroomAssistant();',
      'console.log("Capgemini Tech 4 Future Finalist");',
      'function buildRealTimeAIPlatform() {',
      '  return WebSockets + WebRTC + Groq + PostgreSQL;',
      '}',
      'dev.setContact("premkumaryadavat71@gmail.com");',
      'dev.status = 200; // Ready for Impact'
    ];

    const updateScreenTexture = () => {
      codeCtx.fillStyle = '#030712';
      codeCtx.fillRect(0, 0, 512, 320);

      // Header Bar
      codeCtx.fillStyle = '#0f172a';
      codeCtx.fillRect(0, 0, 512, 30);
      codeCtx.fillStyle = '#ef4444';
      codeCtx.beginPath(); codeCtx.arc(15, 15, 5, 0, Math.PI * 2); codeCtx.fill();
      codeCtx.fillStyle = '#eab308';
      codeCtx.beginPath(); codeCtx.arc(32, 15, 5, 0, Math.PI * 2); codeCtx.fill();
      codeCtx.fillStyle = '#22c55e';
      codeCtx.beginPath(); codeCtx.arc(49, 15, 5, 0, Math.PI * 2); codeCtx.fill();

      codeCtx.fillStyle = '#38bdf8';
      codeCtx.font = '12px "Fira Code", monospace';
      codeCtx.fillText('SmartClassroomAssistant.py - Active Session', 70, 20);

      // Lines
      codeCtx.font = '13px "Fira Code", monospace';
      codeLines.forEach((line, idx) => {
        const y = 55 + idx * 24;
        codeCtx.fillStyle = idx % 2 === 0 ? '#38bdf8' : '#c084fc';
        codeCtx.fillText(`> ${line}`, 15, y);
      });

      // Cursor
      if (Math.floor(Date.now() / 400) % 2 === 0) {
        codeCtx.fillStyle = '#38bdf8';
        codeCtx.fillRect(380, 265, 10, 16);
      }

      codeTexture.needsUpdate = true;
    };

    // Dual Holo Screens
    const createSideHoloScreen = (x, y, z, rotY) => {
      const holoGeo = new THREE.PlaneGeometry(1.6, 1.0);
      const holoMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.2,
        wireframe: true
      });
      const holoMesh = new THREE.Mesh(holoGeo, holoMat);
      holoMesh.position.set(x, y, z);
      holoMesh.rotation.y = rotY;
      workspaceGroup.add(holoMesh);
      return holoMesh;
    };

    const holoLeft = createSideHoloScreen(-2.2, 0.4, -0.5, 0.4);
    const holoRight = createSideHoloScreen(2.2, 0.4, -0.5, -0.4);

    // --- 4. Particle Starfield ---
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x38bdf8);
    const indigoColor = new THREE.Color(0x818cf8);
    const purpleColor = new THREE.Color(0xc084fc);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 12;
      posArray[i + 2] = (Math.random() - 0.5) * 15;

      const mix = Math.random();
      const pColor = mix < 0.4 ? cyanColor : mix < 0.7 ? indigoColor : purpleColor;
      colorArray[i] = pColor.r;
      colorArray[i + 1] = pColor.g;
      colorArray[i + 2] = pColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- 5. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.5, 12);
    cyanLight.position.set(-2, 3, 2);
    scene.add(cyanLight);

    const indigoLight = new THREE.PointLight(0x818cf8, 4, 12);
    indigoLight.position.set(2, 3, 2);
    scene.add(indigoLight);

    // --- 6. Animation ---
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 2;
      camera.position.y = 2 - targetY * 1.5;
      camera.lookAt(0, 0, 0);

      workspaceGroup.rotation.y = targetX * 0.25;

      cubes.forEach((cube) => {
        cube.rotation.x += cube.userData.rotX;
        cube.rotation.y += cube.userData.rotY;
        cube.position.y = cube.userData.initialY + Math.sin(elapsedTime * 1.5 + cube.userData.floatOffset) * 0.15;
      });

      holoLeft.material.opacity = 0.15 + Math.sin(elapsedTime * 2) * 0.05;
      holoRight.material.opacity = 0.15 + Math.cos(elapsedTime * 2) * 0.05;

      particles.rotation.y = elapsedTime * 0.015;

      if (Math.floor(elapsedTime * 10) % 5 === 0) {
        updateScreenTexture();
      }

      renderer.render(scene, camera);
    };

    updateScreenTexture();
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
