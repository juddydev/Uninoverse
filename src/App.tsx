import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MainModel from './components/MainModel'
import Action from './components/Action'
import './index.css';

const App: React.FC = () => {
  const [upperTextureURL, setUpperTextureURL] = useState('/images/texture/703_1upper_1BaseColor.png');
  const [outsoleTextureURL, setOutsoleTextureURL] = useState('/images/texture/bolangdi_Outsole1_BaseColor_DarkBrown.png');

  return (
    <>
      <div className='w-full h-full'>
        <Canvas shadows camera={{ position: [0.8, 0, 0.1], fov: 25 }} className=''>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <directionalLight color={0xffffff} intensity={1.5} castShadow />
          <directionalLight color={0xffffff} intensity={1.5} castShadow position={[10, -25, 10]}/>
          <Suspense fallback={null}>
              <MainModel upperTextureURL={upperTextureURL} outsoleTextureURL={outsoleTextureURL}/>
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Action setUpperTextureURL={setUpperTextureURL} setOutsoleTextureURL={setOutsoleTextureURL}/>
      </div>
    </>
  );
}

export default App;

