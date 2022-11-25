import React, {useEffect, useState} from 'react';
import NextButton from "./NextButton";
import PlayerSlot from "./PlayerSlot";

const AutoPlayer = (props) => {

    const {realPlayer, playerIndex, color, droppedCard, setDroppedCard, stop, gameStop, setScore} = props
    const [currentCard, setCurrentCard] = useState({})
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [deck, setDeck] = useState(
        {
       //     initialDeck: [],
     //       reserveDeck: [],
            reserveSlot: [],
            rapidoSlot: [],
            tmpSlot1: [],
            tmpSlot2: [],
            tmpSlot3: []
        }
    )
    const playerSlot =  ["reserveSlot", "tmpSlot1", "tmpSlot2", "tmpSlot3", "rapidoSlot"]


    const initDeck = () => {
        const suits = ["primary", "success", "warning", "danger"];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         //  const suits = ["primary", "success"];
       //  const values = [1,2];
        let tmpDeck = []
// create a deck of cards
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let card = {value: values[x], suit: suits[i]};
                tmpDeck.push(card);
            }
        }

// shuffle the cards
        for (let i = tmpDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let tmp = tmpDeck[i];
            tmpDeck[i] = tmpDeck[j];
            tmpDeck[j] = tmp;
        }


        let tmpReserveSlot = [...tmpDeck]
        tmpReserveSlot.splice(0, 13)

console.log(tmpDeck)
    //    let initalDeck = tmpDeck
        let reserveSlot = tmpReserveSlot
        let rapidoSlot = tmpDeck.slice(0, 10)
        let tmpSlot1 = tmpDeck.slice(10, 11)
        let tmpSlot2 = tmpDeck.slice(11, 12)
        let tmpSlot3 = tmpDeck.slice(12, 13)

        setDeck(
            {
              //  initialDeck: initalDeck,
               // reserveDeck: [],
                reserveSlot: reserveSlot,
                tmpSlot1: tmpSlot1,
                tmpSlot2: tmpSlot2,
                tmpSlot3: tmpSlot3,
                rapidoSlot: rapidoSlot,
            }
        )

    }

    const nextCard = () => {
        let tmpDeck = {...deck}
        let tmp = tmpDeck.reserveSlot.shift()
        tmpDeck.reserveSlot.push(tmp)
        setDeck(tmpDeck)
    }

    const setCard = (props) => {
        setCurrentCard(props)
    };

    const drop = () => {

    }


    const checkCardDroppable = () => {

        let isCardDropped = false
        let tmpDroppedCard = [...droppedCard]


        for(let i = 0; i<tmpDroppedCard.length;i++)
        {
            let previousCard = tmpDroppedCard[i][0]

            for(let j = 0; j< playerSlot.length;j++)
            {

                let slotName = playerSlot[j]
                let currentCard = deck[slotName][0]

                if (
                    (previousCard.value + 1 === currentCard.value &&
                        previousCard.suit === currentCard.suit) ||
                    (previousCard.value === 0 && currentCard.value === 1)

                ) {

                    isCardDropped=true
                    let tmpDeck = {...deck}
                    tmpDeck[slotName].shift()


                    if(slotName==="tmpSlot1" || slotName==="tmpSlot2" || slotName==="tmpSlot3")
                    {
                        let tmp = tmpDeck["rapidoSlot"].shift()
                        tmpDeck[slotName].unshift(tmp)

                    }

                    if(tmpDeck["rapidoSlot"].length === 0)
                    {
                        console.log("winner")
                        gameStop(playerIndex)
                        tmpDeck["rapidoSlot"].unshift({value: "X", suit: "secondary"})
                    }


                    setDeck(tmpDeck)
                    tmpDroppedCard[i].unshift(currentCard)
                    setDroppedCard(tmpDroppedCard)
                }
            }


        }


        if(!isCardDropped)
        {
            nextCard()
        }
    }

    const sendScore = () => {
        setScore({playerIndex: playerIndex, deck:deck})
    }

    if (!initMainBoard) {
        initDeck()
        setInitMainBoard(true)

    }

    if(stop)
    {
        sendScore()
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(!stop)
            {
                checkCardDroppable()
            }
        }, 1000);

        return () => clearTimeout(timer);
    });


    return (
            <div className={`row text-center bg-opacity-50 bg-${color}`}>

                {playerSlot.map((mapping, index) => {
                    if(mapping === "initialDeck")
                    {
                        return null
                    }
                    else{
                        return(

                            <div key={index} className="col-2 my-4">
                                <PlayerSlot
                                    realPlayer={realPlayer}
                                    slotName={mapping}
                                    deck={deck}
                                    setCurrentCard={setCard}
                                    drop={drop}
                                />
                                {mapping==="reserveSlot" || mapping==="rapidoSlot" ? deck[mapping].length : null }
                            </div>
                        )
                    }
                })}

                <div className="col-2 my-3 ">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    {playerIndex}
                </div>




            </div>
    )


}


export default AutoPlayer;