import * as THREE from 'three';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ModelComponent from './components/ModelComponent';
import TextureComponent from './components/TextureComponent';
import DownloadComponent from './components/DownloadComponent';
import './App.css';

THREE.ColorManagement.legacyMode = false;

async function fetchImages(): Promise<string[]> {
  const imagesContext = import.meta.glob('/public/images/*.{png,jpg,jpeg,svg}');
  const imagePaths = Object.keys(imagesContext);
  const images = await Promise.all(
    imagePaths.map(async (path) => {
      const mod = await imagesContext[path]();
      return mod.default;
    })
  );
  return images;
}

const App: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [textureUrl, setTextureUrl] = useState<string>('');

  useEffect(() => {
    fetchImages().then(images => {
      setImages(images);
      if (images.length > 0) {
        setTextureUrl(images[0]);
      }
    });
  }, []);

  const handleChangeTexture = () => {
    const nextTextureIndex = (images.indexOf(textureUrl) + 1) % images.length;
    setTextureUrl(images[nextTextureIndex]);
  };

  return (
    <>
      <Canvas 
        camera={{ position: [0.8, 0, 0.1], fov: 25 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <directionalLight intensity={Math.PI * 1.5} castShadow/>
        <ModelComponent modelUrl='shoe.glb' textureUrl={textureUrl} />
        <OrbitControls />
      </Canvas>
      {images.length > 0 && <TextureComponent handleChangeTexture={handleChangeTexture} />}
      <DownloadComponent modelUrl='shoe.glb' textureUrl={textureUrl} />
    </>
  );
}

export default App;