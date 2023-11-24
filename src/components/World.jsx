import { RigidBody } from "@react-three/rapier"
import { Ground } from "./Ground"
import { Platform1 } from "./world/Platform-1"
import { Platform2 } from "./world/Platform-2"
import { Platform3 } from "./world/Platform-3"
import { Text } from "@react-three/drei"
import { Platform4 } from "./world/Platform-4"
import { Teleport } from "./world/Teleport"
import { Computer } from "./world/Computer"
import { Tank } from "./world/Tank"


export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>
            {/* Starter platform */}
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 1 }
                position={ [ 0, 0, 0 ] }
                scale={ 10 }
            >
                <Platform1 />
            </RigidBody>

            {/* Second platform */}
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 1 }
                position={ [ 45, 0, 0 ] }
                scale={ 10 }
            >
                <Platform2 />
            </RigidBody>

            {/* Bridge */}
            <group>
                {/* Third platform */}
                <RigidBody
                    type="fixed"
                    colliders="trimesh"
                    gravityScale={ 0.1 }
                    friction={ 1 }
                    position={ [ 0, 0, 30 ] }
                    scale={ 10 }
                >
                    <Platform3 rotation-y={ Math.PI * 1.5 } />
                </RigidBody>
                {/* Third platform */}
                <RigidBody
                    type="fixed"
                    colliders="trimesh"
                    gravityScale={ 0.1 }
                    friction={ 1 }
                    position={ [ 0.85, 0, 68.3 ] }
                    scale={ 10 }
                >
                    <Platform3 rotation-y={ Math.PI * 0.5 } />
                </RigidBody>
                {/* Tanks */}
                <Tank position={ [ 3.4, 0.4, 42 ] } />
                <Tank position={ [ 1.4, 0.4, 44 ] } rotation-y={ Math.PI * 0.7 } />
            </group>

            <group>
                {/* Fourth platform */}
                <RigidBody
                    type="fixed"
                    colliders="trimesh"
                    gravityScale={ 0.1 }
                    friction={ 1 }
                    position={ [ - 10, 0, 106.9 ] }
                    scale={ 10 }
                >
                    <Platform4 rotation-y={ Math.PI * 1 } />
                </RigidBody>
                {/* Computer 1 */}
                <RigidBody
                    type="fixed"
                    colliders="hull"
                    position={ [ 5, 0, 122 ] }
                    scale={ 10 }
                >
                    <Computer rotation-y={ Math.PI * 1.2 } />
                </RigidBody>
                {/* Computer 1 */}
                <RigidBody
                    type="fixed"
                    colliders="hull"
                    position={ [ - 25, 0, 122 ] }
                    scale={ 10 }
                >
                    <Computer rotation-y={ Math.PI * 0.8 } />
                </RigidBody>

                {/* Tanks */}
                <Tank position={ [ - 15, 0.4, 122 ] } scale={ 1.1 } />
                <Tank position={ [ - 17, 0.4, 123 ] } rotation-y={ Math.PI * 1.2 } />
            </group>

            {/* Fifth platform */}
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 1 }
                position={ [ 80, 10, 106.9 ] }
                scale={ 8 }
            >
                <Platform4 rotation-y={ Math.PI * 1 } />
            </RigidBody>

            
            <group>
                <Text
                    font="./assets/fonts/tron.ttf"
                    fontSize={ 0.9 }
                    maxWidth={ 4 }
                    lineHeight={ 1 }
                    letterSpacing={ 0.05 }
                    textAlign="center"
                    position={ [ - 3, 2.5, 7 ] }
                    rotation-y={ Math.PI * 0.9 }
                    color="white"
                >
                    Try to reach the thingy
                </Text>
            </group>

            {/* Teleport 1 */}
                <Teleport char={ char } />
            {/* <Morty char={ char } /> */}
            {/* <Ground /> */}
        </group>
    </>
    )
}