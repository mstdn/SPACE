import React, { useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PositionalAudio } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"

export function Morty(props) 
{
  const { char } = props

  const group = useRef()
  const audio = useRef()
  const [ hasPlayed, setHasPlayed ] = useState(false)
  const { nodes, materials, animations } = useGLTF("./assets/models/morty.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() =>
  {
    actions["Talking"].play()
  })

  useFrame(() =>
  {
    if(char.current)
      {
        const position = group.current.position
        const charPosition = char.current.translation()
        const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
        // console.log(distance)
        
        if(distance < 3 && !hasPlayed)
        {
          audio.current.play()
          setHasPlayed(true)
        } else if(distance > 3 && hasPlayed)
        {
          audio.current.stop()
          setHasPlayed(false)
        }

      }
  })

  return (
    <group position={ [ 14, 6,  36 ] } scale={ 0.022 } rotation-y={ Math.PI * 1 } ref={group} {...props} dispose={null}>
      
      <PositionalAudio
          url="/assets/audio/1.wav"
          loop={ false }
          distance={ 2 }
          ref={ audio }
      />
      
      <group name="AuxScene">
        <group position={[0, -1.362, -104.572]}>
          <group
            name="root"
            position={[9.001, -3.854, 6.132]}
            rotation={[-1.615, -0.039, 0.462]}
          >
            <primitive object={nodes.pelvis} />
            <group name="ik_foot_root">
              <group
                name="ik_foot_r"
                position={[-17.076, 8.072, 13.466]}
                rotation={[-1.245, -1.523, 1.885]}
              />
              <group
                name="ik_foot_l"
                position={[17.076, 8.072, 13.466]}
                rotation={[1.897, -1.523, 1.885]}
              />
            </group>
            <group name="ik_hand_root">
              <group
                name="ik_hand_gun"
                position={[-56.646, 0.335, 111.68]}
                rotation={[1.325, 0.398, 0.729]}
              >
                <group
                  name="ik_hand_l"
                  position={[77.885, -69.602, 43.87]}
                  rotation={[2.545, 0.561, 1.636]}
                />
                <group name="ik_hand_r" />
              </group>
            </group>
          </group>
          <skinnedMesh
            receiveShadow
            castShadow
            name="MortyMesh"
            geometry={nodes.MortyMesh.geometry}
            material={materials.M_Morty}
            skeleton={nodes.MortyMesh.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/models/morty.glb");

