import React from 'react';
import Card from "./Card";

const PlayerSlot = (props) => {

    const {slotName, deck, setCurrentCard, drop, realPlayer} = props

        return (
                <Card
                    card={deck[slotName][0]}
                    realPlayer={realPlayer}
                    slotName={slotName}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                />
        )



}


export default PlayerSlot;