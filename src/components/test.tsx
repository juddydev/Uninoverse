// App.tsx
import * as THREE from 'three'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import './App.css';

function Model() {
  const { scene } = useGLTF('ImageToStlcom_main-v1.glb') as any;  

  const upperTexture = useTexture('/images/texture/703_1upper_1BaseColor.png') as any;
  const outsoleTexture = useTexture('/images/texture/bolangdi_Outsole1_BaseColor_Black_.png') as any;

  // scene.traverse((child: THREE.Object3D) => {
  //   if ((child as THREE.Mesh).isMesh) {
  //     const mesh = child as THREE.Mesh;
  //     if (mesh.name === 'upper1') {
  //       (mesh.material as THREE.MeshPhysicalMaterial).map = upperTexture;
  //       mesh.material.needsUpdate = true;
  //     } else if (mesh.name === 'bolangdi_Outsole_0011') {
  //       (mesh.material as THREE.MeshPhysicalMaterial).map = outsoleTexture;
  //       mesh.material.needsUpdate = true;
  //     }
  //   }
  // });

  scene.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;

      mesh.material.map = upperTexture;
      mesh.material.map.flipY = false;
      mesh.material.map.encoding = THREE.sRGBEncoding
      mesh.material.needsUpdate = true;
   
    }
  });

  // scene.traverse((child: THREE.Object3D) => {
  //   if ((child as THREE.Mesh).isMesh) {
  //     const mesh = child as THREE.Mesh;
  //     if (Array.isArray(mesh.material)) {
  //       mesh.material.forEach((material) => {
  //         if (material instanceof THREE.MeshStandardMaterial) {
  //           if (mesh.name === 'upper1') {
  //             material.map = upperTexture;
  //             material.map.flipY = false 
  //             material.encoding = THREE.sRGBEncoding
  //             material.needsUpdate = true;
  //             console.log('Applied upper texture to', mesh.name);
  //           } else if (mesh.name === 'bolangdi_Outsole_0011') {
  //             material.map = outsoleTexture;
  //             outsoleTexture.map.flipY = false 
  //             outsoleTexture.encoding = THREE.sRGBEncoding
  //             material.needsUpdate = true;
  //             console.log('Applied outsole texture to', mesh.name);
  //           }
  //         }
  //       });
  //     } else if (mesh.material instanceof THREE.MeshPhysicalMaterial) {
  //       if (mesh.name === 'upper1') {
  //         mesh.material.map = upperTexture;
  //         mesh.material.needsUpdate = true;
  //         console.log('Applied upper texture to', mesh.name);
  //       } else if (mesh.name === 'bolangdi_Outsole_0011') {
  //         mesh.material.map = outsoleTexture;
  //         mesh.material.needsUpdate = true;
  //         console.log('Applied outsole texture to', mesh.name);
  //       }
  //     }
  //   }
  // });

  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 0.4], fov: 45 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight color={0xffffff} intensity={Math.PI * 1.5} castShadow />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
