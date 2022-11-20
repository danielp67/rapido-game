import React, {useState} from 'react';
import Card from "./Card";

const PlayerSlot = (props) => {

    const {slotName, deck, setCurrentCard, drop} = props
    const[enter, setEnter]=  useState(false)

    const dragEnter = () => {
      //  setSelectedSlot(slotIndex)
        setEnter(true)
    };

    const dragLeave = () => {
       setEnter(false)
    };


        return (
            <div className="h-100">
                <Card
                    card={deck[slotName][0]}
                    slotName={slotName}
                    setCurrentCard={setCurrentCard}
                    drop={drop}
                />
            </div>
        )



}


export default PlayerSlot;