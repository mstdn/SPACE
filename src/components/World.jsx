import { RigidBody } from "@react-three/rapier"
import { Ground } from "./Ground"
import { Platform1 } from "./world/Platform-1"
import { Platform2 } from "./world/Platform-2"
import { Platform3 } from "./world/Platform-3"
import { Text } from "@react-three/drei"
import { Platform4 } from "./world/Platform-4"
import { Teleport } from "./world/Teleport"


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