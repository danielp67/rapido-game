import React from 'react';
import Player from "./Player";

const Bots = (props) => {

    const {deck, setCurrentCard, drop, nextCard} = props

        return (
            <div className="col-4 bg-secondary">
                <h1 className="text-center">Bots Slot</h1>
                <Player
                    playerIndex={1}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                <Player
                    playerIndex={2}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                <Player
                    playerIndex={3}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
            </div>
        )
}


export default Bots;