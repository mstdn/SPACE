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
            {/* <RigidBody
                type="fixed"
                colliders="hull"
            > */}
                <group  {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.SpaceShuttle_mesh.geometry}
                        material={materials.SpaceShuttle_mat}
                    />
                </group>
            {/* </RigidBody> */}
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


/**
* SaturnV
* */
const SaturnV = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/saturn-v.glb")
    return (
        <>
            {/* <RigidBody
                // type="fixed"
                colliders="trimesh"
                gravityScale={ 0.0001 }
                friction={ 0.0001 }
            > */}
                <group {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1550320431.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group895181094.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1040166495.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group60356901.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group457812550.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group607005179.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group166367546.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1442215038.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2057575161.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group839134822.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1883644601.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group578102495.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2110640149.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1993035645.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1268076700.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group508476088.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group514239896.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1382426378.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group720021976.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group703300687.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group560348169.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group347012032.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group64776194.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group734862155.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1039905167.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1233918327.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1923635208.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group114503671.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1374554909.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group748817347.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2082884405.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1507421373.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group442183165.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group676966531.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group493205679.geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1133644296.geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group198157876.geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group345644575.geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group593509371.geometry}
                        material={materials.mat12}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group817266765.geometry}
                        material={materials.mat5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1392174525.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1540866884.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1540866884_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh178640621.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh178640621_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1535673390.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1535673390_1.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1878962325.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1878962325_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1878962325_2.geometry}
                        material={materials.mat9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1664306598.geometry}
                        material={materials.mat9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1664306598_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh417954839.geometry}
                        material={materials.mat9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh417954839_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1137605379.geometry}
                        material={materials.mat9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1137605379_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1501661309.geometry}
                        material={materials.mat9}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1501661309_1.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1644675170.geometry}
                        material={materials.mat14}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh1644675170_1.geometry}
                        material={materials.mat21}
                    />
                </group>
            {/* </RigidBody> */}
        </>
    )
}


/**
* FalconHeavy
* */
const FalconHeavy = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/falcon-heavy.glb")
    return (
        <>
            {/* <RigidBody
                colliders="hull"
                gravityScale={ 0.0001 }
                friction={ 0.0001 }
            > */}
                <group {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1177551466.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1794313008.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group664186064.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1092526527.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1288991087.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1244545237.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group327409806.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1842216789.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group318079340.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1019908090.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group248325220.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1688682111.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1275527013.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group896255849.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2022321159.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1424326644.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1673725909.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group917770634.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1017733882.geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1317332132.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1529587663.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group613694139.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1053171569.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group770393545.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1250560570.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group2146284285.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group387247641.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1336124684.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1705044733.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1266683896.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group603785919.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1083589953.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.group1589445932.geometry}
                        material={materials.mat24}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh379271175.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh379271175_1.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh440554346.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh440554346_1.geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh315161725.geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh315161725_1.geometry}
                        material={materials.mat22}
                    />
                </group>
            {/* </RigidBody> */}
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

            <SaturnV position={ [ - 136, 11, 85 ] } scale={ 30 } rotation-y={ Math.PI * 1.5 } />
            <FalconHeavy position={ [81, 50, 50 ] } scale={ 5 } rotation-y={ Math.PI * 1.5 } />
        </>
    )
}

useGLTF.preload("./assets/models/world/building-1.glb")
useGLTF.preload("./assets/models/world/dome.glb")
useGLTF.preload("./assets/models/world/bar.glb")
useGLTF.preload("./assets/models/world/computer.glb")
useGLTF.preload("./assets/models/world/shuttle.glb")
useGLTF.preload("./assets/models/world/tank.glb")
useGLTF.preload("./assets/models/world/saturn-v.glb")