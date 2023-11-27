import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

const Teleport = (props) =>
{
    const { char, target, from } = props
    const { nodes, materials } = useGLTF("./assets/models/world/teleport.glb")

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(from[0], from[1], from[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 3)
            {
                char.current.setTranslation( target )
                char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                char.current.setAngvel( { x: 0, y: 0, z: 0 } )
            }
        }
    })

    return (
        <group {...props} dispose={null}>
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

export default function Teleports(props)
{
    const { char } = props
    return(
        <>
            <Teleport 
                position={ [ - 10, 0.3, 105 ] } 
                from={ [ - 10, 0.3, 105 ] } 
                target={ { x: 80, y: 15, z: 106 } } 
                scale={ 1 } 
                char={ char } 
            />

            <Teleport 
                position={ [ 44, 0.3, 0 ] } 
                from={ [ 44, 0.3, 0 ] } 
                target={ { x: 145, y: 20, z: 31 } } 
                scale={ 1 } 
                char={ char } 
            />
        </>
    )
}

useGLTF.preload("./assets/models/world/teleport.glb")