// import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

// THREE.ColorManagement.legacyMode = false;

function Model({ modelUrl }) {
  // const group = useRef();
  const { scene } = useGLTF(modelUrl);
  // const texture = useLoader(THREE.TextureLoader, textureUrl);

  // useEffect(() => {
  //   texture.encoding = THREE.sRGBEncoding;
    
  //   Object.values(materials).forEach((material) => {
  //     if (material.map) {
  //       material.map = texture;
  //       material.map.encoding = THREE.sRGBEncoding;
  //       material.color = new THREE.Color(materialColor);
  //       material.needsUpdate = true;
  //     }
  //   });
  // }, [materials, texture, materialColor]);

  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas camera={{ position: [0.8, 0, 0.1], fov: 25 }}>
      <ambientLight  />
      <pointLight position={[10, 10, 10]} />
      {/* <spotLight /> */}
      {/* <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.6} position={[0, 20, 0]} /> */}
      <directionalLight intensity={Math.PI * 1} position={[10, 30, 5]} />
      <directionalLight intensity={Math.PI * 0.5} position={[-10, 5, 5]} />
      <directionalLight intensity={Math.PI * 1} position={[10, -25, 10]} />
      <directionalLight intensity={Math.PI * 1} position={[0, -10, 10]} />
      <directionalLight intensity={Math.PI * 0.5} position={[10, 25, -10]} />
      <Suspense fallback={null}>
        <Model modelUrl='scene.gltf' />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;



