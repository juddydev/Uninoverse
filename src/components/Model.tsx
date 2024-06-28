import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh
  }
  materials: {
    [key: string]: THREE.Material
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/main.glb') as GLTFResult;
  
  // Load textures
  const upperTexture = useTexture('/images/texture/703_1upper_1BaseColor.png');
  const outsoleTexture = useTexture('/images/texture/bolangdi_Outsole1_BaseColor_DarkBrown.png');
  
  // Apply textures to materials
  materials['703_1upper'].map = upperTexture;
  materials.bolangdi_Outsole1_BaseColor_DarkBrown.map = outsoleTexture;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bolangdi_Outsole_0011.geometry}
        material={materials.bolangdi_Outsole1_BaseColor_DarkBrown}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper3.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper2.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper1.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Decoration3.geometry}
        material={materials.bolangdi_Outsole1_BaseColor_DarkBrown}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lining.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lace.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Insole1.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bolangdi_tiepian1.geometry}
        material={materials.bolangdi_Outsole1_BaseColor_DarkBrown}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HeelStrip.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Decoration001.geometry}
        material={materials['703_1upper']}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload('/main.glb');
useTexture.preload('/images/texture/703_1upper_1BaseColor.png');
useTexture.preload('/images/texture/bolangdi_Outsole1_BaseColor_DarkBrown.png');
