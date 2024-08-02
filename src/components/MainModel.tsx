import * as THREE from "three";
import { useThree } from '@react-three/fiber'
import { useGLTF, useTexture } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

interface MainModelProps {
  upperTextureURL: string;
  outsoleTextureURL: string;
}

export default function MainModel({ upperTextureURL, outsoleTextureURL, ...props }: MainModelProps) {
  const { nodes } = useGLTF("/703.glb") as GLTFResult;
  const { viewport } = useThree()

  const upperTextures = useTexture({
    map: upperTextureURL,
    normalMap: "/images/texture/uni_703_01_upper_emboss2_normal.png",
    roughnessMap: "/images/texture/uni_703_01_upper_emboss2_roughness.png",
  });

  const bolangdiOutsoleTextures = useTexture({
    map: outsoleTextureURL,
    normalMap: "/images/texture/uni_703_01_accessory_metalheel_normal.png",
    roughnessMap: "/images/texture/uni_703_01_accessory_metalheel_roughness.png",
    metalnessMap: "/images/texture/uni_703_01_accessory_metalheel_metallic.png"
  });

  const OutsoleTextures = useTexture({
    map: "/images/texture/bolangdi_Outsole1_BaseColor_Black_.png",
    normalMap: "/images/texture/bolangdi_Outsole1_Normal.png",
    roughnessMap: "/images/texture/bolangdi_Outsole1_OcclusionRoughnessMetallic.png",
  });

  const upperMat = new THREE.MeshStandardMaterial({
    map: upperTextures.map,
    normalMap: upperTextures.normalMap,
    roughnessMap: upperTextures.roughnessMap
  });

  const soleMat = new THREE.MeshStandardMaterial({
    map: OutsoleTextures.map,
    normalMap: OutsoleTextures.normalMap,
    roughnessMap: OutsoleTextures.roughnessMap
  });

  const bolangdiOutSoleMat = new THREE.MeshStandardMaterial({
    map: bolangdiOutsoleTextures.map,
    normalMap: bolangdiOutsoleTextures.normalMap,
    roughnessMap: bolangdiOutsoleTextures.roughnessMap,
    metalnessMap: bolangdiOutsoleTextures.metalnessMap
  });

  const insoleTextures = useTexture({
    map: "/images/texture/uni_703_01_sole_leather2_darkbrown_basecolor.png",
    normalMap: "/images/texture/qingdi_outsole_Normal.png",
    roughnessMap: "/images/texture/qingdi_outsole_OcclusionRoughnessMetallic.png"
  });

  const insoleMat = new THREE.MeshStandardMaterial({
    map: insoleTextures.map,
    normalMap: insoleTextures.normalMap,
    roughnessMap: insoleTextures.roughnessMap
  });

  const quanTextures = useTexture({
    map: "/images/texture/quanpidi_Outsole_BaseColor_black.png",
    normalMap: "/images/texture/quanpidi_Outsole_Normal.png",
    roughnessMap: "/images/texture/quanpidi_Outsole_OcclusionRoughnessMetallic.png"
  });

  const quanMat = new THREE.MeshStandardMaterial({
    map: quanTextures.map,
    normalMap: quanTextures.normalMap,
    roughnessMap: quanTextures.roughnessMap
  });

  (upperTextures.map as THREE.Texture).flipY = false;
  (upperTextures.normalMap as THREE.Texture).flipY = false;
  (upperTextures.roughnessMap as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.map as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.normalMap as THREE.Texture).flipY = false;
  (bolangdiOutsoleTextures.roughnessMap as THREE.Texture).flipY = false;
  (insoleTextures.map as THREE.Texture).flipY = false;
  (insoleTextures.normalMap as THREE.Texture).flipY = false;
  (insoleTextures.roughnessMap as THREE.Texture).flipY = false;
  (quanTextures.map as THREE.Texture).flipY = false;
  (quanTextures.normalMap as THREE.Texture).flipY = false;
  (quanTextures.roughnessMap as THREE.Texture).flipY = false;
  (OutsoleTextures.map as THREE.Texture).flipY = false;
  (OutsoleTextures.normalMap as THREE.Texture).flipY = false;
  (OutsoleTextures.roughnessMap as THREE.Texture).flipY = false;
  
  
  
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
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4.geometry}
          material={soleMat}
        /> */}
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
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.qingdi_outsole_002.geometry}
          material={insoleMat}
          rotation={[-Math.PI / 2, 0, 0]}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.quanpidi_Outsole_.geometry}
          material={quanMat}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/703.glb");
useTexture.preload("/images/texture/703_1upper_1BaseColor.png");
useTexture.preload("/images/texture/703_1upper_2BaseColor.png");
useTexture.preload("/images/texture/703_1upper_3BaseColor.png");
useTexture.preload("/images/texture/703_1upper_4BaseColor.png");
useTexture.preload("/images/texture/703_1upper_5BaseColor.png");

const texturePaths = [
  "/images/texture/703_1upper_1BaseColor.png",
  "/images/texture/703_1upper_2BaseColor.png",
  "/images/texture/703_1upper_3BaseColor.png",
  "/images/texture/703_1upper_4BaseColor.png",
  "/images/texture/703_1upper_5BaseColor.png",
  "/images/texture/703_1u pper_Normal.png",
  "/images/texture/703_1upper_Roughness.png",
  "/images/texture/bolangdi_Outsole1_BaseColor_Black_.png",
  "/images/texture/bolangdi_Outsole1_Normal.png",
  "/images/texture/bolangdi_Outsole1_OcclusionRoughnessMetallic.png"
];

texturePaths.forEach(useTexture.preload);
