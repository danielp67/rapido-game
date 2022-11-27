import React, {useState} from 'react';
import Player from "./Player";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop, setScore, start} = props
    const [stop, setStop] = useState(false)
    const color = ["primary", "success", "danger"]

    const stopAutoPlayer = (props) => {
        setStop(true)
        gameStop(props)
    }

    return (
        <>
            {color.map((color, index) => {

                    return (
                        <Player
                            key={index}
                            realPlayer={false}
                            playerIndex={index + 1}
                            color={color}
                            droppedCard={droppedCard}
                            setDroppedCard={setDroppedCard}
                            gameStop={stopAutoPlayer}
                            start={start}
                            stop={stop}
                            setScore={setScore}
                        />

                    )
                }
            )}
        </>)

}


export default Bots;