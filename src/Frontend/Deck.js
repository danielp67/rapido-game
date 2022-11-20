import React from 'react';
import Card from "./Card";

const Deck = (props) => {
const {setCurrentCard, deck, deckIndex, drop} = props

    if (deck.length !== 0) {
            return (
                <div className="h-100">
                    <Card
                        card={deck[0]}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                        deckIndex={deckIndex}
                    />
                </div>
            )
        } else
            return (
                <div className="h-100">
                    <Card card={{Value:"X", Suit:"secondary"}}/>
                </div>
            )
}


export default Deck;