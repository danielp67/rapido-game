import React, {Component} from 'react';
import MainBoard from "./MainBoard";
import SortedSlot from "./SortedSlot";

const DropZone = (props) => {

    const {selectedSlot,setSelectedSlot, cardValue} = props




    return (
        <div className="col-8 bg-info">
            <div className="row">

                <SortedSlot
                    slotIndex={1}
                    setSelectedSlot={setSelectedSlot}
                    cardValue={cardValue}
                />

                <SortedSlot
                    slotIndex={2}
                    setSelectedSlot={setSelectedSlot}
                    cardValue={cardValue}
                />
            </div>

        </div>
    )

}


export default DropZone;