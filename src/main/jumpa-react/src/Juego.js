import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';



function Juego() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Crear la escena
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Crear la cámara
    const camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;

    // Crear el renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Agregar el canvas al contenedor
    containerRef.current.appendChild(renderer.domElement);

    // Crear un cubo y agregarlo a la escena
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animar el cubo
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Limpiar la escena al desmontar el componente
    return () => {
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef}></div>
  );
}

export default Juego;
