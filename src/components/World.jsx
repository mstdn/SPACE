import Platforms from "./world/Platforms"
import Structures from "./world/Structures"
import NPCs from "./world/NPCs"
import Teleports from "./world/Teleports"
import Texts from "./world/Texts"


export default function World(props)
{
    const { char } = props

    return(
    <>
        <group>
            <Platforms />
            <Texts />
            <Teleports char={ char } />
            <NPCs char={ char } />
            <Structures />
        </group>
    </>
    )
}