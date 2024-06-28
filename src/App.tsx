import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model'
import './App.css';

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