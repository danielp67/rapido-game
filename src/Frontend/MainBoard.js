import React, {useState} from 'react';
import Player from "./Player";
import Bots from "./Bots";
import DropZone from "./DropZone";
import SecondMenu from "./SecondMenu";
import Timer from "./Timer";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [currentCard, setCurrentCard] = useState({})
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [time, setTime] = useState(0);

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


    const initDropZone = () => {
        for (let i = 0; i < 16; i++) {
            droppedCard.push([{value: 0, suit: "secondary"}])
        }
        setDroppedCard(droppedCard)

    }

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


    const setSlot = (props) => {
        setSelectedSlot(props)
    };


    const setCard = (props) => {
        console.log(props)
        setCurrentCard(props)
    };

    const nextCard = () => {
        let tmpDeck = {...deck}
        let tmp = tmpDeck.reserveSlot.shift()
        tmpDeck.reserveSlot.push(tmp)
        setDeck(tmpDeck)
    }

    const drop = () => {
        let tmpDroppedCard = [...droppedCard]
        if(selectedSlot!=="")
        {

        let previousCard = tmpDroppedCard[selectedSlot][0]
            let slotName = currentCard.slotName
            console.log(previousCard, currentCard)

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

            console.log(tmpDroppedCard, tmpDeck)

        }
        }

    };

    if (!initMainBoard) {
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
                <Bots
                    deck={deck}
                    setCurrentCard={setCard}
                    drop={drop}
                    nextCard={nextCard}
                />
            </div>

            <div className="row">
                <Player
                    playerIndex={1}
                    deck={deck}
                    setCurrentCard={setCard}
                    drop={drop}
                    nextCard={nextCard}
                />
                <SecondMenu/>
                <Timer/>
            </div>
        </div>
    )
}


export default MainBoard;