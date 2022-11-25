import React, {useState} from 'react';
import NextButton from "./NextButton";
import PlayerSlot from "./PlayerSlot";

const Player = (props) => {

    const {realPlayer, playerIndex, selectedSlot, setSelectedSlot, droppedCard, setDroppedCard} = props

    const [currentCard, setCurrentCard] = useState({})
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [deck, setDeck] = useState(
        {
            initialDeck: [],
            reserveDeck: [],
            reserveSlot: [],
            rapidoSlot: [],
            tmpSlot1: [],
            tmpSlot2: [],
            tmpSlot3: []
        }
    )


    const initDeck = () => {
        const suits = ["primary", "success", "warning", "danger"];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //   const suits = ["primary", "success"];
        // const values = [1,2];
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


        let initalDeck = tmpDeck
        let reserveSlot = tmpReserveSlot
        let rapidoSlot = tmpDeck.slice(0, 10)
        let tmpSlot1 = tmpDeck.slice(10, 11)
        let tmpSlot2 = tmpDeck.slice(11, 12)
        let tmpSlot3 = tmpDeck.slice(12, 13)

        setDeck(
            {
                initialDeck: initalDeck,
                reserveDeck: [],
                reserveSlot: reserveSlot,
                rapidoSlot: rapidoSlot,
                tmpSlot1: tmpSlot1,
                tmpSlot2: tmpSlot2,
                tmpSlot3: tmpSlot3
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
        let tmpDroppedCard = [...droppedCard]
        if(selectedSlot!=="")
        {

            let previousCard = tmpDroppedCard[selectedSlot][0]
            let slotName = currentCard.slotName

            if (
                (previousCard.value + 1 === currentCard.card.value &&
                    previousCard.suit === currentCard.card.suit) ||
                (previousCard.value === 0 && currentCard.card.value === 1)

            ) {

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

                    tmpDeck["rapidoSlot"].unshift({value: "X", suit: "secondary", playerIndex: "X"})
                }

                setDeck(tmpDeck)
                tmpDroppedCard[selectedSlot].unshift(currentCard.card)
                setDroppedCard(tmpDroppedCard)
                setSelectedSlot("")

            }
        }

    };


    if (!initMainBoard) {
        initDeck()
        setInitMainBoard(true)

    }


    return (
            <div className="row text-center bg-secondary bg-opacity-50">

                <div className="col-2 my-3">
                    <PlayerSlot
                        realPlayer={realPlayer}
                        slotName={"reserveSlot"}
                        deck={deck}
                        setCurrentCard={setCard}
                        drop={drop}
                    />

                        <NextButton
                            nextCard={nextCard}
                        />

                    {deck["reserveSlot"].length}

                </div>
                <div className="col-2 my-3 ">
                    <PlayerSlot
                        realPlayer={realPlayer}
                        slotName={"tmpSlot1"}
                        deck={deck}
                        setCurrentCard={setCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 my-3 ">
                    <PlayerSlot
                        realPlayer={realPlayer}
                        slotName={"tmpSlot2"}
                        deck={deck}
                        setCurrentCard={setCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 my-3 ">
                    <PlayerSlot
                        realPlayer={realPlayer}
                        slotName={"tmpSlot3"}
                        deck={deck}
                        setCurrentCard={setCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 my-3 ">
                    <PlayerSlot
                        realPlayer={realPlayer}
                        slotName={"rapidoSlot"}
                        deck={deck}
                        setCurrentCard={setCard}
                        drop={drop}
                    />
                    {deck["rapidoSlot"].length}
                </div>

                <div className="col-2 my-3 ">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    {playerIndex}
                </div>

            </div>
    )


}


export default Player;