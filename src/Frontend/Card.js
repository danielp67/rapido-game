import React from 'react';

const Card = (props) => {
    const {drop, setCurrentCard, slotName, card, realPlayer} = props

    const dragStart = (e) => {
        setCurrentCard({card:card, slotName:slotName})
        console.log('dragStart',card, slotName);
    };

        return (
            <div
                className={`card bg-${card.suit}`}
                onDragStart={(e) => dragStart(e)}
                onDragEnd={drop}
                draggable={realPlayer}
            >
                {card.value}
            </div>

        )

}

export default Card;