import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Platform3(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/platform-3.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_1.geometry}
          material={materials.LightGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_2.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_3.geometry}
          material={materials.Texture_Signs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_4.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_5.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Platform_4x1_6.geometry}
          material={materials.DarkGrey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/world/platform-3.glb");