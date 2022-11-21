import React, {useState} from 'react';
import Card from "./Card";
import Player from "./Player";

const PlayerSlot = (props) => {

    const {slotName, deck, setCurrentCard, drop, realPlayer} = props
    const[enter, setEnter]=  useState(false)

    const dragEnter = () => {
      //  setSelectedSlot(slotIndex)
        setEnter(true)
    };

    const dragLeave = () => {
       setEnter(false)
    };


        return (
            <div className="">
                <Card
                    card={deck[slotName][0]}
                    realPlayer={true}
                    slotName={slotName}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                />
            </div>
        )



}


export default PlayerSlot;