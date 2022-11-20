import React, {Component, useState} from 'react';
import Deck from "./Deck";
import NextButton from "./NextButton";
import TempSlot from "./TempSlot";

const Player= (props) => {

    const {setCurrentCard, rapidoDeck, reserveDeck, drop, nextCard} = props



     return (
            <div className="playerSlot col-8">
                <div className="row">
                <h1 className="text-center">Player slot </h1>
                    <div className="col-2 text-center">
                        <TempSlot
                            playerSlotIndex={0}
                            maxCard={0}
                        />
                    </div>

                    <div className="col-2 text-center">
                    <Deck
                        setCurrentCard={setCurrentCard}
                        deckIndex={1}
                        deck={reserveDeck}
                        drop={drop}
                    />
                    <NextButton
                        nextCard={nextCard}
                    />
                    Cartes restantes : {reserveDeck.length}
                </div>
                <div className="col-2 text-center">
                    <TempSlot
                        playerSlotIndex={4}
                        maxCard={1}
                    />
                </div>
                <div className="col-2 text-center">
                    <TempSlot
                        playerSlotIndex={3}
                        maxCard={1}
                    />
                </div>
                <div className="col-2 text-center">
                    <TempSlot
                        playerSlotIndex={2}
                        maxCard={1}
                    />
                </div>
                <div className="col-2 text-center">
                    <Deck
                        setCurrentCard={setCurrentCard}
                        deckIndex={2}
                        deck={rapidoDeck}
                        drop={drop}
                    />
                    Cartes restantes : {rapidoDeck.length}
                </div>
            </div>
            </div>
        )


}


export default Player;