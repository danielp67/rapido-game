import React, {Component, useState} from 'react';
import Deck from "./Deck";
import NextButton from "./NextButton";

const Player= (props) => {

    const [deck, setDeck] = useState([{Value: "X", Suit: "secondary"}])
    const [loading, setLoading] = useState(false)
    const [remainingCards, setRemainingCards] = useState()
    const [init, setInit] = useState(false)


    const initDeck = () => {
         // const suits = ["primary", "success", "warning", "danger"];
          //   const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const suits = ["primary", "success"];
        const values = ["1", "2"];
        let tempDeck = []
// create a deck of cards
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = {Value: values[x], Suit: suits[i]};
                tempDeck.push(card);
            }
        }

// shuffle the cards
        for (let i = tempDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = tempDeck[i];
            tempDeck[i] = tempDeck[j];
            tempDeck[j] = temp;
        }
        console.log(tempDeck)

        setDeck(tempDeck)
        setLoading(true)
        setRemainingCards(tempDeck.length)
    }

   const  nextCard = () => {
            let tempDeck = [...deck]
            let temp = tempDeck.shift()
            tempDeck.push(temp)
            setDeck(tempDeck)
    }


if(!init){
    initDeck()
    setInit(true)
}

        if(loading){
        return (
            <div className="playerSlot col-8">
                <h1 className="text-center">Player slot </h1>
                <div className="col-2 text-center">
                    <Deck deck={deck}/>
                    <NextButton  nextCard={nextCard}/>
                    Cartes restantes : {remainingCards}
                </div>
            </div>
        )
        }
        else{
            return (
                <div className="playerSlot col-8">
                    <h1 className="text-center">Player slot</h1>
                    <div className="col-2 ">
                        <Deck deck={[]}/>
                        <NextButton  nextCard={nextCard}/>
                        Cartes restantes : {remainingCards}
                    </div>
                </div>
            )
        }

}


export default Player;