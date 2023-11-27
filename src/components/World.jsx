import { Text } from "@react-three/drei"
import Platforms from "./world/Platforms"
import Structures from "./world/Structures"
import NPCs from "./world/NPCs"
import Teleports from "./world/Teleports"


export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>

            <Text
                font="./assets/fonts/tron.ttf"
                fontSize={ 0.9 }
                maxWidth={ 4 }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                position={ [ - 3, 2.5, 7 ] }
                rotation-y={ Math.PI * 0.9 }
                color="white"
            >
                Try to reach the thingy
            </Text>

            <Teleports char={ char } />
            <NPCs char={ char } />
            <Structures />
            <Platforms />

        </group>
    </>
    )
}