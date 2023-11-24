import { useKeyboardControls } from '@react-three/drei'

export default function Interface()
{
    // Get true / false values for the keyboard controls
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)
    const run = useKeyboardControls((state) => state.run)

    return <>
        <div className="interface">

            {/* Controls */}
            <div className="controls">
                <div className="raw">
                    <div className={ `key ${ forward ? 'active' : '' }` }>
                        <p>W</p>
                    </div>
                </div>
                <div className="raw">
                    <div className={ `key ${ leftward ? 'active' : '' }` }>
                        <p>A</p>
                    </div>
                    <div className={ `key ${ backward ? 'active' : '' } ` }>
                        <p>S</p>
                    </div>
                    <div className={ `key ${ rightward ? 'active' : '' } ` }>
                        <p>D</p>
                    </div>
                </div>
                <div className="raw">
                    <div className={ `key large ${ run ? 'active' : '' } ` }>
                        <p>shift</p>
                    </div>
                    <div className={ `key large ${ jump ? 'active' : '' } ` }>
                        <p>space</p>
                    </div>
                </div>
            </div>

        </div>
    </>
}
