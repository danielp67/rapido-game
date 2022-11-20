import React from 'react';

const Card = (props) => {
    const {drop, setCurrentCard, slotName, card} = props

    const dragStart = (e) => {
        setCurrentCard({card:card, slotName:slotName})
        console.log('dragStart',card, slotName);
    };

        return (
            <div
                className={`card h-100 bg-${card.suit}`}
                onDragStart={(e) => dragStart(e)}
                onDragEnd={drop}
                draggable
            >
                {card.value}
            </div>

        )

}

export default Card;