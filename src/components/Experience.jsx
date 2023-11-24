import World from './World.jsx'
import Lights from '../Lights.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { useRef } from 'react'

export default function Experience()
{
    const ref = useRef()

    return(
    <>
        <Effects />
        <Lights char={ ref } />
        <Player ref={ ref } />
        <World char={ ref } />
    </>
    )
}