import React from 'react';
import Player from "./Player";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop, setScore, stop, start, level, loading} = props
    const color = ["primary", "success", "danger"]

    const stopAutoPlayer = (props) => {
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
                            level={level}
                            loading={loading}

                        />

                    )
                }
            )}
        </>)

}


export default Bots;