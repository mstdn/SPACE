import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useEffect, useState } from 'react'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, Loader, PointerLockControls, Preload } from '@react-three/drei'
import { EcctrlJoystick } from 'ecctrl'
import { isMobile, isDesktop } from 'react-device-detect'
import Interface from './components/Interface.jsx'
import { Perf } from 'r3f-perf'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import MobileInterface from './components/MobileInterface.jsx'

export default function App()
{
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
            <EcctrlJoystick />
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
                        {/* <Perf /> */}
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