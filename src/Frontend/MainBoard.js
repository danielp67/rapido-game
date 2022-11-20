import React, {Component, useState} from 'react';
import Player from "./Player";
import Bots from "./Bots";
import DropZone from "./DropZone";
import SecondMenu from "./SecondMenu";

const MainBoard = () =>{

    const [selectedSlot, setSelectedSlot] = useState()
    const [currentCard, setCurrentCard] = useState()
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard ] = useState(false)
   // const [deckIndex, setDeckIndex] = useState([{Value: "X", Suit: "secondary", Player: "X"}])
    const [reserveDeck, setReserveDeck] = useState([{Value: "X", Suit: "secondary", Player: "X"}])
    const [rapidoDeck, setRapidoDeck] = useState([{Value: "X", Suit: "secondary", Player: "X"}])



    const initDropZone = () => {
        for(let i=0; i<16; i++)
        {
            droppedCard.push([{Value:0, Suit:"secondary"}])
        }
        setDroppedCard(droppedCard)

    }

    const initDeck = () => {
        const suits = ["primary", "success", "warning", "danger"];
              const values = [1,2,3,4,5,6,7,8,9,10];
        //   const suits = ["primary", "success"];
       // const values = [1,2];
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

        setRapidoDeck(tempDeck.slice(0,13))

        let tempReserveDeck = [...tempDeck]
        tempReserveDeck.splice(0,13)
        setReserveDeck(tempReserveDeck)


    }


    const setSlot = (props) => {
        setSelectedSlot(props)
    };


    const setCard = (props) => {
        setCurrentCard(props)
    };

    const  nextCard = () => {
        let tempReserveDeck = [...reserveDeck]
        let temp = tempReserveDeck.shift()
        tempReserveDeck.push(temp)
        setReserveDeck(tempReserveDeck)
    }

     const drop = () => {
         let tempDroppedCard = [...droppedCard]
         let previousCard = tempDroppedCard[selectedSlot][0]

         if(
             (previousCard.Value+1 === currentCard.Value &&
             previousCard.Suit === currentCard.Suit) ||
             (previousCard.Value === 0 && currentCard.Value === 1)

         ){
             let tempReserveDeck = [...reserveDeck]
             tempReserveDeck.shift()

             tempDroppedCard[selectedSlot].unshift(currentCard)

         //    setCurrentCard(deckTemp[0])
             setReserveDeck(tempReserveDeck)
             setDroppedCard(tempDroppedCard)
         }


     };

    if(!initMainBoard)
    {
        initDropZone()
        initDeck()
        setInitMainBoard(true)

    }

     return (
            <div className="">
                <div className="row">
                    <DropZone
                        setSelectedSlot={setSlot}
                        droppedCard={droppedCard}
                    />
                    <Bots/>
                </div>

                <div className="row">
                    <Player
                        setCurrentCard={setCard}
                        drop={drop}
                        reserveDeck={reserveDeck}
                        rapidoDeck={rapidoDeck}
                        nextCard={nextCard}
                    />
                    <SecondMenu/>
                </div>
            </div>
        )
}


export default MainBoard;