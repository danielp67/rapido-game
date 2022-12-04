import React, {useRef, useState} from 'react';

const SortedSlot = (props) => {

    const {slotIndex, setSelectedSlot, selectedSlot, droppedCard} = props
    const[enter, setEnter]=  useState(false)

    const dragEnter = () => {
        setSelectedSlot(slotIndex)
        setEnter(true)
    };

    const dragLeave = () => {
        setEnter(false)
    };

if(enter)
{
        return (
            <div className={`col-3 bg-secondary bg-opacity-50`}
                 onDragEnter={() => dragEnter()}
                 onDragLeave={() => dragLeave()}
            >
                    <div className={`card sortedSlotCard border border-dark border-2 my-2 bg-${droppedCard[0].suit}`}>
                        <p className="my-auto fs-2 fw-bold">{droppedCard[0].value}</p>

                    </div>
                </div>
        )

    }
else
{
    return (
        <div className={`col-3`}
             onDragEnter={() => dragEnter()}
        >
            <div className={`card sortedSlotCard my-2 bg-${droppedCard[0].suit}`}>
                <p className="my-auto fs-2 fw-bold">{droppedCard[0].value}</p>

        </div>
        </div>
    )
}

}


export default SortedSlot;