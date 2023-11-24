import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

export function Teleport(props) 
{
  const { char } = props
  const group = useRef()
  const { nodes, materials } = useGLTF("./assets/models/world/teleport.glb")

  useFrame(() =>
  {
    if(char.current)
      {
        const position = group.current.position
        const charPosition = char.current.translation()
        const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
        // console.log(distance)
        
        if(distance < 3)
        {
          char.current.setTranslation( { x: 80, y: 15, z: 106 } )
        }

      }
  })

  return (
    <group position={ [ - 10, 0.3, 105 ] } ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={400}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turret_Teleporter_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turret_Teleporter_2.geometry}
          material={materials.Orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turret_Teleporter_3.geometry}
          material={materials.LightGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Turret_Teleporter_4.geometry}
          material={materials.Grey}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./assets/models/world/teleport.glb")