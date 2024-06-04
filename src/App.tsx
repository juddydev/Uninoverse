import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import './App.css'

function Model({ modelUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelUrl);
  console.log(nodes)
  console.log(materials)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0.8, 0, 0.1], fov: 25 }} shadows>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <spotLight />
      <directionalLight intensity={Math.PI * 1} position={[10, 30, 5]} />
      <directionalLight intensity={Math.PI * 0.5} position={[-10, 5, 5]} />
      <directionalLight intensity={Math.PI * 1} position={[10, -25, 10]} />
      <directionalLight intensity={Math.PI * 1} position={[0, -10, 10]} />
      <directionalLight intensity={Math.PI * 0.5} position={[10, 25, -10]} />
      <Suspense fallback={null}>
        <Model modelUrl='shoe.glb' />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;