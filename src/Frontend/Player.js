import React from 'react';
import NextButton from "./NextButton";
import PlayerSlot from "./PlayerSlot";

const Player = (props) => {

    const {setCurrentCard, drop, nextCard, deck} = props

    return (
        <div className="playerSlot col-8">
            <div className="row">
                <h1 className="text-center">Player slot </h1>


                <div className="col-2 text-center">
                    <PlayerSlot
                        slotName={"reserveSlot"}
                        deck={deck}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                    />
                    <NextButton
                        nextCard={nextCard}
                    />
{/*
                    Cartes restantes : {deck["reserveSlot"].length}
*/}
                </div>
                <div className="col-2 text-center">
                    <PlayerSlot
                        slotName={"tmpSlot1"}
                        deck={deck}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 text-center">
                    <PlayerSlot
                        slotName={"tmpSlot2"}
                        deck={deck}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 text-center">
                    <PlayerSlot
                        slotName={"tmpSlot3"}
                        deck={deck}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                    />
                </div>
                <div className="col-2 text-center">
                    <PlayerSlot
                        slotName={"rapidoSlot"}
                        deck={deck}
                        setCurrentCard={setCurrentCard}
                        drop={drop}
                    />
                    {/*Cartes restantes : {deck["rapidoDeck"].length}*/}
                </div>
            </div>
        </div>
    )


}


export default Player;