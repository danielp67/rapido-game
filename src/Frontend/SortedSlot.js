import React, { useRef} from 'react';

const SortedSlot = (props) => {

    const {slotIndex, setSelectedSlot, selectedSlot} = props

    const dragEnter = () => {
        console.log('dragEnter',slotIndex, props);
        setSelectedSlot(slotIndex)
    };


    let cardValue = {Value:"X", Suit:"secondary"}
        return (
            <div className={`col-3 border border-success rounded bg-${cardValue.Suit}`}
                 onDragEnter={() => dragEnter()}
            >
                <h1 className="text-center">{cardValue.Value} test </h1>
            </div>
        )


}


export default SortedSlot;