import { ContactShadows, Environment, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Lights(props)
{
    const { char, downgradedPerformance } = props
    const light = useRef()
    const stars = useRef()

    useFrame(() =>
    {
        if(char.current)
        {
            // Make lights follow the player
            const charPosition = char.current.translation()

            light.current.position.z = charPosition.z + 1 - 4
            light.current.target.position.z = charPosition.z - 4
            
            light.current.position.x = charPosition.x + 1 - 4
            light.current.target.position.x = charPosition.x - 4
            
            light.current.position.y = charPosition.y + 6
            light.current.target.position.y = charPosition.y
            
            light.current.target.updateMatrixWorld()

            // Make stars follow the player
            stars.current.position.z = charPosition.z + 1 - 4
            stars.current.position.x = charPosition.x + 1 - 4
            stars.current.position.y = charPosition.y + 5
            // console.log(stars.current.position)
        }
    })

    return <>
        <Environment
            // preset='sunset' 
            // files="./assets/images/map.hdr"
            files="./assets/images/sunset.hdr"
        />
        <ambientLight 
            intensity={ 0.1 } 
        />
        <Stars
            ref={ stars }
            radius={ 300 } 
            depth={ 0 } 
            count={ 5000 } 
            factor={ 4 } 
            saturation={ 1 } 
            // fade 
            speed={ 0.5 } 
        />
        <directionalLight
            ref={ light }
            castShadow={ !downgradedPerformance }
            // color={ 'blue' }
            position={ [ 1, 8, 1 ] }
            intensity={ 1 }
            shadow-camera-near={ 0.1 }
            shadow-camera-far={ 500 }
            shadow-camera-top={ 500 }
            shadow-camera-right={ 500 }
            shadow-camera-bottom={ - 500 }
            shadow-camera-left={ - 500 }
            shadow-bias={ - 0.001 }
            shadow-mapSize-width={ 2048 }
            shadow-mapSize-height={ 2048 }
            // shadow-mapSize={ [ 1024, 1024 ] }
        />
    </>
}