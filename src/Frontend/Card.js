import React, { useRef, useState} from 'react';

const Card = (props) => {
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(['Item 1','Item 2','Item 3','Item 4','Item 5','Item 6']);
    const {drop, setSelectedCard, card} = props


    console.log(card)

    const dragStart = (e, card) => {
       // setSelectedCard(card)
        console.log('dragStart',card);
    };

    // const dragEnter = (e, position) => {
    //     dragOverItem.current = position;
    //     console.log('dragEnter',dragOverItem.current, e, position, e.target.innerHTML);
    // };

    // const drop = () => {
    //     const copyListItems = [...list];
    //     const dragItemContent = copyListItems[dragItem.current];
    //     copyListItems.splice(dragItem.current, 1);
    //     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    //     dragItem.current = null;
    //     dragOverItem.current = null;
    //     setList(copyListItems);
    //     console.log('droppppp');
    //
    // };


        return (
            <div
                className={`card h-100 bg-${props.card.Suit}`}
                onDragStart={(e) => dragStart(e, card)}
              //  onDragEnter={(e) => dragEnter(e, props.card)}
                onDragEnd={drop}
                draggable
            >
                {props.card.Value}
            </div>

        )

}

export default Card;