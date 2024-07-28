import React, { useEffect, useRef } from "react";
import * as THREE from "three";

 const Three = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    const canvasWidth = container.clientWidth;
    const canvasHeight = container.clientHeight;

    // Create a scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      canvasWidth / canvasHeight,
      0.1,
      1000
    );

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create a sphere
    const geometry = new THREE.SphereGeometry(2, 10, 7);
    const material = new THREE.MeshBasicMaterial({
      color: 0x92ff38,
      wireframe: true,
      wireframeLinewidth: 1,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Position the camera
    camera.position.z = 4;

    // Render loop
    const render = () => {
      requestAnimationFrame(render);
      sphere.rotation.y += 0.008; // Rotate the sphere
      renderer.render(scene, camera);
    };
    render();

    // Handle window resize
    const handleResize = () => {
      const canvasWidth = container.clientWidth;
      const canvasHeight = container.clientHeight;
      renderer.setSize(canvasWidth, canvasHeight);
      camera.aspect = canvasWidth / canvasHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div id="monitor" className="crt">
        <pre className="content crt">
          <div ref={canvasRef} style={{ width: "50vw", height: "50vh" }} />
          <br />
          YOUR SECURITY IS JUST AN ILLUSION
          <br />
          <p className="loading">DECRYPTION IN PROGRESS</p>
        </pre>
        <div className="foreground"></div>
      </div>
    </>
  );
};

export default Three;