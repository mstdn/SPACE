import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Tank(props) {
  const { nodes, materials } = useGLTF("./assets/models/world/tank.glb");
  return (
    <RigidBody
      colliders="hull"
      friction={ 0.01 }
      gravityScale={ 0.01 }
    >
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1000}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pickup_Tank_1.geometry}
            material={materials.Grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pickup_Tank_2.geometry}
            material={materials.Orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pickup_Tank_3.geometry}
            material={materials.LightGrey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pickup_Tank_4.geometry}
            material={materials.LightGreen}
          />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload("./assets/models/world/tank.glb");