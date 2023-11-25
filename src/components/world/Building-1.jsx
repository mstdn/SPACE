import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Building1(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/building-1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Building_L.geometry}
        material={materials.Atlas}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./assets/models/world/building-1.glb");