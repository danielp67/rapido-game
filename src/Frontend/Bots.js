import React, {useState} from 'react';
import AutoPlayer from "./AutoPlayer";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop} = props
    const [stop, setStop] = useState(false)
    const color=["primary", "success", "danger"]
    const stopAutoPlayer = (props) => {

        setStop(true)
        gameStop(props)
    }

        return (
            <>
                { color.map((color, index) => {

                return(
                    <AutoPlayer
                        key={index}
                        realPlayer={false}
                        playerIndex={index+1}
                        color={color}
                        droppedCard={droppedCard}
                        setDroppedCard={setDroppedCard}
                        gameStop={stopAutoPlayer}
                        stop={stop}
                    />

                )
            }
)}
            </>)

}


export default Bots;