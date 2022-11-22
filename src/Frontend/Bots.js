import React, {useState} from 'react';
import Player from "./Player";
import AutoPlayer from "./AutoPlayer";

const Bots = (props) => {

    const {droppedCard, setDroppedCard, gameStop} = props
    const [stop, setStop] = useState(false)

    const stopAutoPlayer = (props) => {

        setStop(true)
        gameStop(props)
    }

        return (
            <div className="col-4 bg-secondary bg-opacity-25">
                <AutoPlayer
                    realPlayer={false}
                    playerIndex={1}
                    color={"primary"}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
                <AutoPlayer
                    realPlayer={false}
                    playerIndex={2}
                    color={"success"}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
                <AutoPlayer
                    realPlayer={false}
                    playerIndex={3}
                    color={"danger"}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
            </div>
        )
}


export default Bots;