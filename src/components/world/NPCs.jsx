import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PositionalAudio } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

/**
* NPC
* */
// const NPC = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/platform-1.glb")
//     return (
//         <>
//             <RigidBody
//                 type="fixed"
//                 colliders="hull"
//             >
//                 <group  {...props} dispose={null}>
                    
//                 </group>
//             </RigidBody>
//         </>
//     )
// }

/**
* MechFox
* */
const MechFox = (props) => 
{
    const { char } = props
    const group = useRef()
    const audio = useRef()
    const [ hasPlayed, setHasPlayed ] = useState(false)
    const { nodes, materials, animations } = useGLTF("./assets/models/characters/mech-fox.glb")
    const { actions } = useAnimations(animations, group)

    useEffect(() =>
    {
        actions["RobotArmature|Idle"].play()
    })

    useFrame(() =>
    {
        if(char.current)
        {
            const position = group.current.position
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 6 && !hasPlayed)
            {
                audio.current.play()
                setHasPlayed(true)
            } 
            else if(distance > 6 && hasPlayed)
            {
                audio.current.stop()
                setHasPlayed(false)
            }
        }
    })
    return (
        <>
            <group scale={ 1.5 }  ref={group} {...props} dispose={null}>
                <PositionalAudio
                    url="/assets/audio/1.wav"
                    loop={ false }
                    distance={ 10 }
                    ref={ audio }
                />
                <group name="Root_Scene">
                    <group name="RootNode">
                    <group
                        name="RobotArmature"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                    >
                        <primitive object={nodes.Body} />
                        <primitive object={nodes.FootL} />
                        <primitive object={nodes.FootR} />
                    </group>
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="RaeTheRedPanda"
                        geometry={nodes.RaeTheRedPanda.geometry}
                        material={materials.Atlas}
                        skeleton={nodes.RaeTheRedPanda.skeleton}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={81.935}
                    />
                    </group>
                </group>
            </group>
        </>
    )
}



export default function NPCs(props)
{
    const { char } = props
    return(
        <>
            <MechFox position={ [ 6, 0.4, 6 ] } rotation-y={ Math.PI * 1.2 } char={ char } />
        </>
    )
}


useGLTF.preload("./assets/models/characters/mech-fox.glb")