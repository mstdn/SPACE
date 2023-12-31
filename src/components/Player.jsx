import { forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Ecctrl, { EcctrlAnimation } from 'ecctrl'
import { Astronaut } from './Astronaut'

const Player = forwardRef((props, ref) =>
{
    useFrame(() =>
    {
        if(ref.current)
        {
            const charPosition = ref.current.translation()
            // console.log(charPosition)
            if(charPosition.y < - 30 )
            {
                ref.current.setTranslation( { x: 0, y: 10, z: 0 } )
                ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
                ref.current.setAngvel( { x: 0, y: 0, z: 0 } )
            }
        }
    })
    
    const characterURL = "./assets/models/astronaut.glb"
    const animationSet = 
    {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        jump: "Jump",
        jumpIdle: "Falling",
        jumpLand: "Landing",
        fall: "Falling",
        action1: "Dance",
        action2: "Wave",
        // action3: "CharacterArmature|No",
        // action4: "CharacterArmature|Duck",
    }

    return( 
        <>
            <Ecctrl
                ref={ ref }
                capsuleRadius={ 0.3 }
                capsuleHalfHeight={ 0.5 }
                friction={ 1 }
                camInitDis={ - 8 } // Initial camera distance
                camMaxDis={ - 30 } // Maximum camera distance
                camMinDis={ - 0.1 } // Minimum camera distance
                animated={ true }
                position={ [ 0, 20, 0 ] }
                maxVelLimit={ 3 }
                sprintMult={ 3 }
                jumpVel={ 6 }
                turnSpeed={ 10 }
                // jumpForceToGroundMult={ 10 }
                gravityScale={ 1 }
                autoBalanceDampingOnY={ 0.01 }
                // characterInitDir={ 160 }
                // camInitDir={ Math.PI * 1 }
            >
                <EcctrlAnimation
                    characterURL={ characterURL }
                    animationSet={ animationSet }
                >
                    <Astronaut 
                        position={ [ 0, 0.95, 0 ] }
                    />
                </EcctrlAnimation>
            </Ecctrl>
        </>
    )
})

export default Player