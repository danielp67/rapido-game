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
            <div className={`col-3 border border-success rounded bg-${droppedCard[0].Suit}`}
                 onDragEnter={() => dragEnter()}
                 onDragLeave={() => dragLeave()}
            >
                <h1 className="text-center">{droppedCard[0].Value} X</h1>
            </div>
        )

    }
else
{
    return (
        <div className={`col-3 border border-success rounded bg-${droppedCard[0].Suit}`}
             onDragEnter={() => dragEnter()}
        >
            <h1 className="text-center">{droppedCard[0].Value}</h1>
        </div>
    )
}

}


export default SortedSlot;