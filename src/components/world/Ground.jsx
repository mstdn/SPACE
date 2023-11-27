import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"

export function Ground(props) 
{
  return (
    <RigidBody gravityScale={ 1 } {...props} type="fixed" colliders={false}>
      <mesh receiveShadow position={ [ 0, 0, 0 ] } rotation-x={-Math.PI / 2}>
        <planeGeometry args={ [ 5, 5 ] } />
        <meshStandardMaterial color="green" />
      </mesh>
      <CuboidCollider args={ [ 5, 2, 5 ] } position={ [ 0, - 1.75, 0 ] } />
    </RigidBody>
  )
}

