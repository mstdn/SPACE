import { RigidBody } from "@react-three/rapier"
import { useGLTF } from "@react-three/drei"

/**
* Building
* */
// const Building = (props) => 
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
* Building Tower
* */
const Building1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/building-1.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="hull"
            >
                <group  {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Building_L.geometry}
                        material={materials.Atlas}
                        scale={100}
                    />
                </group>
            </RigidBody>
        </>
    )
}

/**
* Dome
* */
const Dome = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/dome.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="trimesh"
            >
                <group  {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.GeodesicDome.geometry}
                        material={materials.Atlas}
                        scale={100}
                    />
                </group>
            </RigidBody>
        </>
    )
}

/**
* Bar
* */
const Bar = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/bar.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="hull"
            >
                <group {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1683546353.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group778417009.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1269446095.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group745253516.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group806378912.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group652769020.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1709254307.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group325673256.geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1493270997.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1616186789.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group176597555.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1155337723.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1936922321.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1306770756.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1815982061.geometry}
                        material={materials.mat25}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1163468859.geometry}
                        material={materials.mat25}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group593860581.geometry}
                        material={materials.mat25}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1114516919.geometry}
                        material={materials.mat25}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1972172014.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2109032303.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2136313748.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2040346370.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1510553915.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group245004061.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group407307178.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group871745482.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1624327992.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1804162772.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group733624554.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1987934678.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1616714999.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1060906866.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1060906866_1.geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1068142959.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1068142959_1.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1765487294.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1765487294_1.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1130819713.geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1130819713_1.geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1130819713_2.geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh712791709.geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh712791709_1.geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh780848787.geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh780848787_1.geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1897093413.geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1897093413_1.geometry}
                        material={materials.mat17}
                    />
                </group>
            </RigidBody>
        </>
    )
}

/**
* Shuttle
* */
const Shuttle = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/shuttle.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="hull"
            >
                <group  {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.SpaceShuttle_mesh.geometry}
                        material={materials.SpaceShuttle_mat}
                    />
                </group>
            </RigidBody>
        </>
    )
}

/**
* Computer
* */
const Computer = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/computer.glb")
    return (
        <>
            <RigidBody
                type="fixed"
                colliders="hull"
            >
                <group  {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_1.geometry}
                        material={materials.Orange}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_2.geometry}
                        material={materials.Grey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_3.geometry}
                        material={materials.LightGrey}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_4.geometry}
                        material={materials.Screen}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_5.geometry}
                        material={materials.Texture_Signs}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_6.geometry}
                        material={materials.MetalLight}
                        />
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Computer_Large_7.geometry}
                        material={materials.DarkGrey}
                        />
                    </group>
                </group>
            </RigidBody>
        </>
    )
}

/**
* Tank
* */
const Tank = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/tank.glb")
    return (
        <>
            <RigidBody
                colliders="hull"
                friction={ 0.01 }
                gravityScale={ 0.01 }
            >
                <group  {...props} dispose={null}>
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
        </>
    )
}

export default function Structures()
{
    return(
        <>
            <Building1 position={ [ 91, 10, 111 ] } scale={ 1.8 } rotation-y={ Math.PI * 1 } />
            <Dome position={ [ 147, 10, 100 ] } scale={ 1.5 } />
            <Bar position={ [ 154.8, 14, 34 ] } scale={ 4 } rotation-y={ Math.PI * 1 } />
            <Bar position={ [ 154.8, 14, 24.5 ] } scale={ 4 } rotation-y={ Math.PI * 1 } />
            <Computer position={ [ 5, 0, 122 ] } scale={ 10 } rotation-y={ Math.PI * 1.2 } />
            <Computer position={ [ - 25, 0, 122 ] } scale={ 10 } rotation-y={ Math.PI * 0.8 } />
            <Shuttle position={ [ 147, 32.6, 177 ] } scale={ 1 } rotation-y={ Math.PI * 1.1 } />
            
            <Tank position={ [ 3.4, 0.4, 42 ] } scale={ 1 } rotation-y={ Math.PI * 1.1 } />
            <Tank position={ [ 1.4, 0.4, 44 ] } scale={ 1 } rotation-y={ Math.PI * 0.8 } />
            <Tank position={ [ - 15, 0.4, 122 ] } scale={ 1.1 } rotation-y={ Math.PI * 1.3 } />
            <Tank position={ [ - 17, 0.4, 123 ] } scale={ 1.2 } rotation-y={ Math.PI * 1.6 } />

        </>
    )
}

useGLTF.preload("./assets/models/world/building-1.glb")
useGLTF.preload("./assets/models/world/dome.glb")
useGLTF.preload("./assets/models/world/bar.glb")
useGLTF.preload("./assets/models/world/computer.glb")
useGLTF.preload("./assets/models/world/shuttle.glb")
useGLTF.preload("./assets/models/world/tank.glb")