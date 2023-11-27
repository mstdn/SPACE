import { Text } from "@react-three/drei"

const GameText = (props) => 
{
    const { text, color, size, width, position, rotationY } = props

    return(
        <>
            <Text
                font="./assets/fonts/tron.ttf"
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ 1 }
                letterSpacing={ 0.05 }
                textAlign="center"
                color={ color }
                rotation-y={ rotationY }
                position={ position}
            >
                { text }
            </Text>
        </>
    )
}

export default function Texts()
{
    return(
        <>
            <GameText 
                text="Listen to the Fox" 
                position={ [ - 5, 3.5, 7 ] }
                rotationY={ Math.PI * 0.9 }
                color={ "white" }
                size={ 0.8 }
                width={ 4 }
            />

            <GameText 
                text="To the bar!" 
                position={ [ 47.85, 3.5, 0 ] }
                rotationY={ Math.PI * 1.5 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            />

            <GameText 
                text="Shuttle Bay" 
                position={ [ 141, 13, 151 ] }
                rotationY={ Math.PI * 1 }
                color={ "white" }
                size={ 0.8 }
                width={ 6 }
            />
        </>
    )
}