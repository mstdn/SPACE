import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dome(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/dome.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GeodesicDome.geometry}
        material={materials.Atlas}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./assets/models/world/dome.glb");