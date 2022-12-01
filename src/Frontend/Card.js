import React from 'react';

const Card = (props) => {
    const {drop, setCurrentCard, slotName, card, realPlayer} = props

    const dragStart = (e) => {
        setCurrentCard({card:card, slotName:slotName})
    };

    const doubleClick = (e) => {
        setCurrentCard({card:card, slotName:"doubleClick"})
       // console.log('doubleClick',e);
    };

    let className=""
    if(slotName==="reserveSlot")
    {
        className="border border-dark border-2"
    }
    if(slotName==="rapidoSlot")
    {
        className="border border-secondary border-2"
    }


    if(realPlayer) {
        return (
            <div
                className={`card playerCard bg-${card.suit} ${className}`}
                onDragStart={(e) => dragStart(e)}
                onDragEnd={drop}
                onDoubleClick={(e) => doubleClick(e)}
                draggable
            >
                <p className="my-auto fs-3 fw-bold">{card.value}</p>
            </div>

        )
    }
    else{
        return (
            <div
                className={`card autoPlayerCard my-auto bg-${card.suit} ${className}`}
            >
                <p className="my-auto">{card.value}</p>
            </div>

        )
    }

}

export default Card;