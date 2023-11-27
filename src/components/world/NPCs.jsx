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
    const { char, pos } = props
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
            const position = new Vector3(pos[0], pos[1], pos[2])
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
            <group scale={ 1.5 } ref={group} {...props} dispose={null}>
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

/**
* Robot
* */
const Robot = (props) => 
{
    const { char, pos, audio } = props
    const { nodes, materials } = useGLTF("./assets/models/characters/robot.glb")
    const [ hasPlayed, setHasPlayed ] = useState(false)

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
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
            <group scale={ 5 } {...props} dispose={null}>
                
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group346538596.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group140126695.geometry}
                    material={materials.mat13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1093835587.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group985861437.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group520837848.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1923443198.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group572601098.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1360564706.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1032718794.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group136007698.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group883343216.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1600173817.geometry}
                    material={materials.mat13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group699229793.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group593578704.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group609646893.geometry}
                    material={materials.mat13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group218755100.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1804926799.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1118255469.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group245663460.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1756593017.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1746559406.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group460382757.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group18696867.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group2084814091.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group706405961.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group341251062.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1798110318.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1474415853.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group729374697.geometry}
                    material={materials.mat13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group884034807.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group860499800.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group361429604.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group652161791.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1437140359.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group543624582.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1455851993.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group72576271.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1141538176.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1589731862.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group234446507.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1984023371.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group775217071.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1751157850.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1543206061.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1893864825.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1555821692.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group283046000.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1652730617.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group444073282.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group397968173.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1983309165.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1562974922.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group263063302.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group513642695.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1256048917.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1666296572.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1063696236.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group644575028.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1700241315.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group886672927.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group2037008767.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group799591128.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group39714970.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group985396850.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1271927237.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1157452240.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group398531861.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group759215076.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group355752032.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1579190275.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1253710826.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group2117677555.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group325787266.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1486260108.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1283183907.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group442658849.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group972726469.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group371674819.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1498187091.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group320495904.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1240935863.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1283338058.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1045017499.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group496940457.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1042300199.geometry}
                    material={materials.mat8}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group79361964.geometry}
                    material={materials.mat5}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group49666965.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1600291025.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group4228000.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1387000695.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1044882806.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group571457022.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group453122618.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group1755554578.geometry}
                    material={materials.mat20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.group511283609.geometry}
                    material={materials.mat20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh977054201.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh977054201_1.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh221446973.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh221446973_1.geometry}
                    material={materials.mat20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610.geometry}
                    material={materials.mat20}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_1.geometry}
                    material={materials.mat13}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_2.geometry}
                    material={materials.mat17}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_3.geometry}
                    material={materials.mat16}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_4.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_5.geometry}
                    material={materials.mat11}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_6.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_7.geometry}
                    material={materials.mat12}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh1540490610_8.geometry}
                    material={materials.mat14}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh662605459.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh662605459_1.geometry}
                    material={materials.mat21}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh496228701.geometry}
                    material={materials.mat23}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.mesh496228701_1.geometry}
                    material={materials.mat21}
                />
            </group>
        </>
    )
}



export default function NPCs(props)
{
    const { char } = props
    const Robot1 = useRef()
    const Robot2 = useRef()
    
    return(
        <>
            <MechFox 
                position={ [ 6, 0.4, 6 ] } 
                pos={ [ 6, 0.5, 6 ] } 
                rotation-y={ Math.PI * 1.2 } 
                char={ char } 
            />

            <group>
                <PositionalAudio
                    url="/assets/audio/2.wav"
                    loop={ false }
                    distance={ 15 }
                    ref={ Robot1 }
                />
                <Robot 
                    position={ [ 41, 2.9, - 5 ] } 
                    pos={ [ 41, 1, - 5 ] }
                    rotation-y={ Math.PI * - 1.3 }
                    rotation-x={ Math.PI * - 0.01 } 
                    char={ char }
                    scale={ 4 }
                    played={ false }
                    audio={ Robot1 }
                />
            </group>


            <group>
                <PositionalAudio
                    url="/assets/audio/3.wav"
                    loop={ false }
                    distance={ 10 }
                    ref={ Robot2 }
                />
                <Robot 
                    position={ [ 240, 13.6, 95 ] } 
                    pos={ [ 240, 14, 95 ] }
                    rotation-y={ - Math.PI * 1.3 } 
                    char={ char }
                    played={ false }
                    audio={ Robot2 }
                />
            </group>
        </>
    )
}


useGLTF.preload("./assets/models/characters/mech-fox.glb")
useGLTF.preload("./assets/models/characters/robot.glb")