import React from 'react';
import Player from "./Player";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop, setScore, stop, start, level, loading, settings} = props
    const color = ["primary", "success", "danger", "warning", "primary", "success", "danger", "warning", "primary", "success", "danger"]


    return (
        <>
            {color.slice(0,settings.nbPlayer-1).map((color, index) => {


                    return (
                        <Player
                            key={index}
                            realPlayer={false}
                            playerIndex={index + 2}
                            color={color}
                            droppedCard={droppedCard}
                            setDroppedCard={setDroppedCard}
                            gameStop={gameStop}
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

};


export default Bots;