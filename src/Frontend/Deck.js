import React, {Component, useEffect} from 'react';
import Card from "./Card";

const Deck = (props) => {
const {setSelectedCard, deck} = props

    console.log(props)



    useEffect(() => {
        console.log("test")

    }, []);

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