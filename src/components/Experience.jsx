import World from './World.jsx'
import Lights from '../Lights.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { useRef } from 'react'
import { Ground } from './world/Ground.jsx'

export default function Experience({ downgradedPerformance = false })
{

    const ref = useRef()

    return(
    <>
        <Ground />
        <Player ref={ ref } />
        <World char={ ref } />
        <Lights 
            char={ ref } 
            downgradedPerformance={ downgradedPerformance } 
        />
        { !downgradedPerformance && (
            <Effects />
        )}
    </>
    )
}