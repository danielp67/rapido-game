import React from 'react';

const Card = (props) => {
    const {drop, setCurrentCard, slotName, card, realPlayer} = props

    const dragStart = (e) => {
        setCurrentCard({card:card, slotName:slotName})
        console.log('dragStart',card, slotName);
    };

    if(realPlayer) {
        return (
            <div
                className={`card playerCard bg-${card.suit}`}
                onDragStart={(e) => dragStart(e)}
                onDragEnd={drop}
                draggable
            >
                <p className="my-auto">{card.value}</p>
            </div>

        )
    }
    else{
        return (
            <div
                className={`card autoPlayerCard my-auto bg-${card.suit}`}
            >
                <p className="my-auto">{card.value}</p>
            </div>

        )
    }

}

export default Card;