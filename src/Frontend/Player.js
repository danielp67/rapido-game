import React, {Component} from 'react';
import Deck from "./Deck";
import NextButton from "./NextButton";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [{Value: "X", Suit: "secondary"}],
            loading: false,
            remainingCards: "",
        }
    }


    componentDidMount() {
        this.initDeck()
    }

    initDeck = (props) => {
         // const suits = ["primary", "success", "warning", "danger"];
          //   const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const suits = ["primary", "success"];
        const values = ["1", "2"];

// empty array to contain cards
        let deck = [];

// create a deck of cards
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = {Value: values[x], Suit: suits[i]};
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

        this.setState({deck: deck, loading: true, remainingCards:deck.length})
    }

    nextCard = (props) => {
        let deck = this.state.deck
        let temp = deck.shift()
        deck.push(temp)

        this.setState({deck: deck, loading: true, remainingCards:deck.length})
    }


    render() {

        if(this.state.loading){
        return (
            <div id="playerSlot" className="m-2 card">
                <h1 className="text-center">Player slot </h1>
                <div className="col-2 text-center">
                    <Deck deck={this.state.deck}/>
                    <NextButton  nextCard={this.nextCard}/>
                    Cartes restantes : {this.state.remainingCards}
                </div>
            </div>
        )
        }
        else{
            return (
                <div id="playerSlot" className="m-2 row">
                    <h1 className="text-center">Player slot</h1>
                    <div className="col-2 ">
                        <Deck deck={this.state.deck}/>
                        <NextButton  nextCard={this.nextCard}/>
                       // Cartes restantes : {this.state.remainingCards}
                    </div>
                </div>
            )
        }
    }
}


export default Player;