import React, {useRef, useState} from 'react';

const TempSlot = (props) => {

    const {playerSlotIndex, maxCard} = props
    const[enter, setEnter]=  useState(false)

    const dragEnter = () => {
      //  setSelectedSlot(slotIndex)
        setEnter(true)
    };

    const dragLeave = () => {
       setEnter(false)
    };

if(enter)
{
        return (
            <div className={`border border-success rounded bg-primary`}
                 onDragEnter={() => dragEnter()}
                 onDragLeave={() => dragLeave()}
            >
                <h1 className="text-center"> X</h1>
            </div>
        )

    }
else
{
    return (
        <div className={`border border-success rounded bg-primary`}
             onDragEnter={() => dragEnter()}
        >
            <h1 className="text-center">XXX</h1>
        </div>
    )
}

}


export default TempSlot;