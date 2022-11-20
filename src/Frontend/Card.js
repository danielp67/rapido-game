import React from 'react';

const Card = (props) => {
    const {drop, setCurrentCard, deckIndex, card} = props

    const dragStart = (e, card) => {
        setCurrentCard(card, deckIndex)
        console.log('dragStart',card);
    };

        return (
            <div
                className={`card h-100 bg-${props.card.Suit}`}
                onDragStart={(e) => dragStart(e, card)}
                onDragEnd={drop}
                draggable
            >
                {card.Value}
            </div>

        )

}

export default Card;