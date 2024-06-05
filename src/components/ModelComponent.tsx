import * as THREE from 'three';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface ModelProps {
  modelUrl: string;
  textureUrl: string;
}

const ModelComponent: React.FC<ModelProps> = ({ modelUrl, textureUrl }) => {
  const { scene } = useGLTF(modelUrl);
  const texture = useLoader(THREE.TextureLoader, textureUrl);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.map.flipY = false 
      child.material.map.encoding = THREE.sRGBEncoding
      child.material.needsUpdate = true;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive object={scene} />
    </Suspense>
  );
};

export default ModelComponent;