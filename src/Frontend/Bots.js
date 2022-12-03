import React from 'react';
import Player from "./Player";
import {SettingsContext} from "./SettingsContext";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop, setScore, stop, start, level, loading} = props
    const stopAutoPlayer = (props) => {
        gameStop(props)
    }

    return (

        <SettingsContext.Consumer>
            {({settingsContext}) => (

                settingsContext.color.slice(0, settingsContext.nbPlayer - 1).map((color, index) => {

                        return (
                            <Player
                                key={index}
                                realPlayer={false}
                                playerIndex={index + 2}
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
                )
            )}
        </SettingsContext.Consumer>
    )

};


export default Bots;