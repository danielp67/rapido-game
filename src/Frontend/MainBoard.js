import React, {useState} from 'react';
import Player from "./Player";
import Bots from "./Bots";
import DropZone from "./DropZone";
import SecondMenu from "./SecondMenu";
import Timer from "./Timer";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [stop, setStop] = useState(false)

    const initDropZone = () => {
        for (let i = 0; i < 16; i++) {
            droppedCard.push([{value: 0, suit: "secondary"}])
        }
        setDroppedCard(droppedCard)

    }

    const setSlot = (props) => {
        setSelectedSlot(props)
    };

    const drop = (props) => {
                setDroppedCard(props)
            }


     const gameStop = (props) => {

        console.log("player win :" + props)
         setStop(true)
     }

    if (!initMainBoard) {
        initDropZone()
        setInitMainBoard(true)

    }

    return (
        <div className="row">
            <div className="row">
                <h1 className="text-center">Rapido Game</h1>
                <Timer
                    start={true}
                    stop={stop}
                />
            </div>
            <div className="row">
                <div className="col-8">

                <DropZone
                    setSelectedSlot={setSlot}
                    droppedCard={droppedCard}
                />
                </div>

                    <div className="col-4">

                    <Bots
                    droppedCard={droppedCard}
                    setDroppedCard={drop}
                    gameStop={gameStop}
                />
            </div>
            </div>

            <div className="row">
                <div className="col-8">

                <Player
                    realPlayer={true}
                    playerIndex={4}
                    selectedSlot={selectedSlot}
                    setSelectedSlot={setSelectedSlot}
                    droppedCard={droppedCard}
                    setDroppedCard={drop}
                />
                </div>

                    <div className="col-4">

                    <SecondMenu/>


                    </div>

                </div>
        </div>
    )
}


export default MainBoard;