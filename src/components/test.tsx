import * as THREE from "three";
import { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import { useLocation } from "@remix-run/react"

function Model() {
  const location = useLocation()
  const data = location.state?.data
  console.log("data", data)
  const { viewport } = useThree()
  const modelNodes = data.media.nodes.filter((m: any) => {
  return m.__typename === "Model3d"
  })
      
  const modelUrl = modelNodes[0].sources[0].url

  const textureNodes = data.media.nodes.filter((m: any) => {
      return m.__typename === "MediaImage" && m.alt === "" || null
  })
  const { nodes } = useGLTF(modelUrl)
  const upperTextures = useTexture({
    map: textureNodes[0].image.url,
    normalMap: textureNodes[29].image.url,
    roughnessMap: textureNodes[11].image.url,
  });

  const bolangdiOutsoleTextures = useTexture({
    map: textureNodes[21].image.url,
    normalMap: textureNodes[9].image.url,
    roughnessMap: textureNodes[17].image.url,
  });

  const upperMat = new THREE.MeshStandardMaterial({
    map: upperTextures.map,
    normalMap: upperTextures.normalMap,
    roughnessMap: upperTextures.roughnessMap
  });

  const bolangdiOutSoleMat = new THREE.MeshStandardMaterial({
    map: bolangdiOutsoleTextures.map,
    normalMap: bolangdiOutsoleTextures.normalMap,
    roughnessMap: bolangdiOutsoleTextures.roughnessMap
  });

  (upperTextures.map as THREE.Texture).flipY = false;
  (upperTextures.normalMap as THREE.Texture).flipY = false;
  (upperTextures.roughnessMap as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.map as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.normalMap as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.roughnessMap as THREE.Texture).flipY = false;

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={window.innerWidth > 1024 ? 0.01 : viewport.width/35}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Decoration001.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HeelStrip.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Insole4.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lace.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lining2.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.upper3.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.upper5.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.upper8.geometry}
          material={upperMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4.geometry}
          material={bolangdiOutSoleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Decoration2.geometry}
          material={bolangdiOutSoleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bolangdi_tiepian2.geometry}
          material={bolangdiOutSoleMat}
        />
      </group>
    </group>
  );
}

export default function ModelViewer() {
    return (
        <div className='w-[70%]'>
            <Canvas shadows camera={{ position: [0.8, 0, 0.1], fov: 25 }} className=''>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <directionalLight color={0xffffff} intensity={1.5} castShadow />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    )
}

useGLTF.preload(modelUrl)
textureNodes.forEach(useTexture.preload)