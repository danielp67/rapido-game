import React, {Component} from 'react';
import Card from "./Card";

const Deck = (props) => {
const {setSelectedCard, deck} = props

        if (props.deck.length !== 0) {
            return (
                <div className="h-100">
                    <Card
                        card={deck[0]}
                        setSelectedCard={setSelectedCard}
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