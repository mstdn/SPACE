import { RigidBody } from "@react-three/rapier"
import { useGLTF } from "@react-three/drei"

/**
* Platform X
* */
// const PlatformX = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/platform-1.glb")
//     return (
//         <>
//             <RigidBody
//                 type="fixed"
//                 colliders="trimesh"
//                 gravityScale={ 0.1 }
//                 friction={ 0.1 }
//             >
//                 <group  {...props} dispose={null}>
                    
//                 </group>
//             </RigidBody>
//         </>
//     )
// }

/**
* Platform 1 -- Square platform
* */
const Platform1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/platform-1.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 0.1 }
            >
                <group  {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_1.geometry}
                        material={materials.LightGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_2.geometry}
                        material={materials.Grey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_3.geometry}
                        material={materials.Texture_Signs}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_4.geometry}
                        material={materials.Black}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_5.geometry}
                        material={materials.DarkGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_2x2_6.geometry}
                        material={materials.Orange}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    )
}

/**
* Platform 2
* */
const Platform2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/platform-2.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 0.1 }
            >
                <group  {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_1.geometry}
                        material={materials.Texture_Signs}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_2.geometry}
                        material={materials.LightGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_3.geometry}
                        material={materials.Black}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_4.geometry}
                        material={materials.Grey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_5.geometry}
                        material={materials.Orange}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x2_6.geometry}
                        material={materials.DarkGrey}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    )
}

/**
* Platform 3 -- Bridge
* */
const Platform3 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/platform-3.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 0.1 }
            >
                <group  {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_1.geometry}
                        material={materials.LightGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_2.geometry}
                        material={materials.Grey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_3.geometry}
                        material={materials.Texture_Signs}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_4.geometry}
                        material={materials.Black}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_5.geometry}
                        material={materials.Orange}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x1_6.geometry}
                        material={materials.DarkGrey}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    )
}

/**
* Platform 4
* */
const Platform4 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/platform-4.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="trimesh"
                gravityScale={ 0.1 }
                friction={ 0.1 }
            >
                <group  {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_1.geometry}
                        material={materials.Texture_Signs}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_2.geometry}
                        material={materials.LightGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_3.geometry}
                        material={materials.Grey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_4.geometry}
                        material={materials.DarkGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_5.geometry}
                        material={materials.Black}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Platform_4x4_6.geometry}
                        material={materials.Orange}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    )
}


export default function Platforms()
{
    return(
        <>
            <Platform1 position={ [ 0, 0, 0 ] } scale={ 10 } />
            <Platform1 position={ [ 147, 10, 100 ] } scale={ 12 } />
            <Platform2 position={ [ 45, 0, 0 ] } scale={ 10 } />
            <Platform2 position={ [ 147, 10, 170 ] } scale={ 10 } rotation-y={ Math.PI * 0.5 } />
            <Platform2 position={ [ 147, 10, 29.7 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
            <Platform3 position={ [ 0, 0, 30 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
            <Platform3 position={ [ 0.85, 0, 68.3 ] } scale={ 10 } rotation-y={ Math.PI * 0.5 } />
            <Platform3 position={ [ 114.7, 10, 100 ] } scale={ 10 } rotation-y={ Math.PI * 1 } />
            <Platform3 position={ [ 147, 10, 132.1 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
            <Platform3 position={ [ 147, 10, 67.99 ] } scale={ 10 } rotation-y={ Math.PI * 0.5 } />
            <Platform4 position={ [ - 10, 0, 106.9 ] } scale={ 10 } rotation-y={ Math.PI * 1 } />
            <Platform4 position={ [ 80, 10, 106.9 ] } scale={ 8 } rotation-y={ Math.PI * 1 } />
            <Platform3 position={ [ 179, 10, 98 ] } scale={ 10 } rotation-y={ Math.PI * 1 } />
            <Platform3 position={ [ 217.9, 10, 98.85 ] } scale={ 10 } rotation-y={ Math.PI * 2 } />
            <Platform1 position={ [ 247.75, 10, 98.85 ] } scale={ 10 } rotation-y={ Math.PI * 0.5 } />
            <Platform3 position={ [ - 48, 0, 95 ] } scale={ 10 } rotation-y={ Math.PI * 2 } />
            <Platform3 position={ [ - 86.9, 0, 94.15 ] } scale={ 10 } rotation-y={ Math.PI * 1 } />
            <Platform2 position={ [ - 116.7, 0, 94.15 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
            <Platform1 position={ [ - 138, 0, 85.37 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
            <Platform1 position={ [ 80, 0, 50 ] } scale={ 10 } rotation-y={ Math.PI * 1.5 } />
        </>
    )
}

useGLTF.preload("./assets/models/world/platform-1.glb")
useGLTF.preload("./assets/models/world/platform-2.glb")
useGLTF.preload("./assets/models/world/platform-3.glb")
useGLTF.preload("./assets/models/world/platform-4.glb")