import * as THREE from 'three';
import { useEffect, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

THREE.ColorManagement.legacyMode = false;

function Model({ modelUrl, textureUrl, materialColor }) {
  // const group = useRef();
  const { scene, materials } = useGLTF(modelUrl);
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  useEffect(() => {
    texture.encoding = THREE.sRGBEncoding;
    
    Object.values(materials).forEach((material) => {
      if (material.map) {
        material.map = texture;
        material.map.encoding = THREE.sRGBEncoding;
        material.color = new THREE.Color(materialColor); // Apply the color to the material
        material.needsUpdate = true;
      }
    });
  }, [materials, texture, materialColor]);

  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas 
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.0,
      }}
      camera={{ position: [0, 0, 0.4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]}/>
      <directionalLight intensity={Math.PI * 1.5} castShadow/>
      <Suspense fallback={null}>
        <Model modelUrl='704_01.glb' textureUrl='704_01-.webp' materialColor=''/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;



