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
            <div className="col-4 bg-secondary">
                <div className="row">
                <AutoPlayer
                    playerIndex={1}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
                <AutoPlayer
                    playerIndex={2}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
                <AutoPlayer
                    playerIndex={3}
                    droppedCard={droppedCard}
                    setDroppedCard={setDroppedCard}
                    gameStop={stopAutoPlayer}
                    stop={stop}
                />
                </div>
            </div>
        )
}


export default Bots;