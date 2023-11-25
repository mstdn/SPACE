import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Shuttle(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/shuttle.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SpaceShuttle_mesh.geometry}
        material={materials.SpaceShuttle_mat}
      />
    </group>
  );
}

useGLTF.preload("./assets/models/world/shuttle.glb");