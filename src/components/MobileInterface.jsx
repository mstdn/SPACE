import { useKeyboardControls } from '@react-three/drei'
import useGame from '../stores/useGame.jsx'

export default function MobileInterface()
{
    const boxes = useGame((state) => state.boxes)
    console.log(boxes)

    return <>
        <div className="mobileInterface">
            <div className='flex justify-end pr-2 text-md text-white'>
                <div className=''>
                    { boxes }
                </div>
            </div>

        </div>
    </>
}
