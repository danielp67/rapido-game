import React from 'react';
import SortedSlot from "./SortedSlot";

const DropZone = (props) => {

    const {setSelectedSlot, droppedCard} = props

    return (
        <div className="col-8 bg-info">
            <div className="row">

                {
                    droppedCard.map((mapping, index) => {
                      return(
                        <SortedSlot
                            key={index}
                            slotIndex={index}
                            setSelectedSlot={setSelectedSlot}
                            droppedCard={droppedCard[index]}
                        />
                      )
                    })
                }

            </div>

        </div>
    )

}


export default DropZone;