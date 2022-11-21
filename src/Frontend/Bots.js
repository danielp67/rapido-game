import React from 'react';
import Player from "./Player";

const Bots = (props) => {

    const {deck, setCurrentCard, drop, nextCard} = props

        return (
            <div className="col-4 bg-secondary">
                <div className="row">
                <Player
                    playerIndex={1}
                    realPlayer={false}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                <Player
                    playerIndex={2}
                    realPlayer={false}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                <Player
                    playerIndex={3}
                    realPlayer={false}
                    deck={deck}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                </div>
            </div>
        )
}


export default Bots;