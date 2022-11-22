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
            <div className={`col-3 border border-success rounded bg-${droppedCard[0].suit}`}
                 onDragEnter={() => dragEnter()}
                 onDragLeave={() => dragLeave()}
            >
                <h1 className="text-center my-auto">{droppedCard[0].value} X</h1>
            </div>
        )

    }
else
{
    return (
        <div className={`col-3 border border-success rounded bg-${droppedCard[0].suit}`}
             onDragEnter={() => dragEnter()}
        >
            <h1 className="text-center">{droppedCard[0].value}</h1>
        </div>
    )
}

}


export default SortedSlot;