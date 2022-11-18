import React, { Component } from 'react';

class CardShuffle extends Component {

    state = {
    }


    render() {
        const suits = ["primary", "success", "warning", "danger"];
        const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// empty array to contain cards
        let deck = [];

// create a deck of cards
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = { Value: values[x], Suit: suits[i] };
                deck.push(card);
            }
        }

// shuffle the cards
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }

        return (
            <div className="m-2 card">
                <h1 className="text-center">shuffle slot </h1>
            </div>
        )
    }
}


export default CardShuffle;