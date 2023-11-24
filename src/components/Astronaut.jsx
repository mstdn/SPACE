import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Astronaut(props) 
{
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./assets/models/astronaut.glb")
  const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="AuxScene">
        <group position={[0, -2.011, 0.012]}>
          <group name="default" />
          <skinnedMesh
            castShadow
            receiveShadow
            name="Astronaut_mesh"
            geometry={nodes.Astronaut_mesh.geometry}
            material={materials.Astronaut_matmat}
            skeleton={nodes.Astronaut_mesh.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("./assets/models/astronaut.glb")

