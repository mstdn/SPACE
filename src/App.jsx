import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useEffect, useMemo, useState } from 'react'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, Loader, PointerLockControls, Preload } from '@react-three/drei'
import { EcctrlJoystick } from 'ecctrl'
import { BoxGeometry, CylinderGeometry, Euler, MeshBasicMaterial, SphereGeometry, Vector3 } from 'three'
import { isMobile, isDesktop } from 'react-device-detect'
import Interface from './components/Interface.jsx'
import { Perf } from 'r3f-perf'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import MobileInterface from './components/MobileInterface.jsx'

export default function App()
{
    const cylinderGeometry = useMemo(() => new CylinderGeometry(2.3, 2.1, 0.3, 32, 1), [])
    const sphereGeometry = useMemo(() => new SphereGeometry(1.4, 32, 8), [])
    const boxGeometry = useMemo(() => new BoxGeometry(1, 1, 1), [])
    const activeMaterial = useMemo(() => new MeshBasicMaterial({ color: 0xffffff, wireframe: false }), [])
    const passiveMaterial = useMemo(() => new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1 }), [])
    const [ started, setStarted ] = useState(false)
    const [ paused, setPaused ] = useState(false)
    useEffect(() => 
    {
        document.addEventListener("visibilitychange", () => 
        {      
            setPaused(true)
        })
        return() =>
        {
            document.removeEventListener("visibilitychange", () => {} )
        }
    }, [])

    const keyboardMap = 
    [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        // Optional animation key map
        { name: "action1", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        // { name: "action3", keys: ["3"] },
        // { name: "action4", keys: ["4"] },
    ]

    return( 
    <>
        { !started && (
            <LoadingScreen 
                started={ started } 
                setStarted={ setStarted }
            />
        ) }
        { isMobile && started && (
            <EcctrlJoystick 
                joystickBaseProps={{
                    geometry: cylinderGeometry,
                    material: passiveMaterial
                }}
                joystickStickProps={{
                    material: passiveMaterial
                }}
                joystickHandleProps={{
                    geometry: sphereGeometry,
                    rotation: new Euler(Math.PI * 0.5, 0, 0),
                    material: activeMaterial
                }}
                buttonLargeBaseProps={{
                    scale: new Vector3(4, 4, 4),
                    geometry: boxGeometry,
                    material: passiveMaterial
                }}
            />
        ) }
        <KeyboardControls map={ keyboardMap }>
            <Canvas
                shadows
                camera={ { far: 800, near: 0.1 } }
                onClick={() => setPaused(false)}
                style={{ background: 'black' }}
            >
                    <Physics
                        // debug
                        timeStep="vary"
                        paused={ paused }
                        // gravity={ [ 0, - 5.8, 0 ] }
                        >
                        <Suspense>
                            { started && (
                                <>
                                    <Experience />
                                    <Preload all />
                                </>
                            )}
                        </Suspense>
                    </Physics>
                { isDesktop && started && (
                    <>
                        <PointerLockControls />
                        <Perf />
                    </>
                )}
            </Canvas>
            { isDesktop && started && (
                <Interface />
            ) }
            { isMobile && started && (
                <MobileInterface />
            )}
        </KeyboardControls>
    </> )
}