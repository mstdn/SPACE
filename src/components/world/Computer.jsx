import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/computer.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_1.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_2.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_3.geometry}
          material={materials.LightGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_4.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_5.geometry}
          material={materials.Texture_Signs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_6.geometry}
          material={materials.MetalLight}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Computer_Large_7.geometry}
          material={materials.DarkGrey}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/world/computer.glb");