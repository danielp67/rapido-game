import React, {Component, useState} from 'react';
import Player from "./Player";
import Bots from "./Bots";
import DropZone from "./DropZone";
import SecondMenu from "./SecondMenu";

const MainBoard = () =>{

   // const [selectedSlot, setSelectedSlot] = useState()
    const [cardValue, setCardValue] = useState([])

    const setSelectedSlot = (props) => {
        console.log('setSelectedSlot', props);
        // setSelectedSlot(slotIndex)
    };

     return (
            <div className="">
                <div className="row">
                    <DropZone
                        setSelectedSlot={setSelectedSlot}
                        cardValue={cardValue}
                    />
                    <Bots/>
                </div>

                <div className="row">
                    <Player

                    />
                    <SecondMenu/>
                </div>
            </div>
        )
}


export default MainBoard;