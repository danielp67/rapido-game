import React, {useState} from 'react';
import Bots from "./Bots";
import DropZone from "./DropZone";
import Timer from "./Timer";
import Player from "./Player";
import MainMenu from "./MainMenu";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [stop, setStop] = useState(false)
    const [scoring, setScoring] = useState([])

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
     //   console.log(props)
        setDroppedCard(props)
    }


    const gameStop = (props) => {

        console.log("player win :" + props)
        setStop(true)
    }

    const setScore = (props) => {
        console.log(props)
        let tmpScoring = [...scoring]

    tmpScoring.push(props)
        console.log(tmpScoring)
      // setScoring(tmpScoring)

    }

    if (!initMainBoard) {
        initDropZone()
        setInitMainBoard(true)

    }

    return (
        <>
            <div className="row">
                <h1 className="text-center">Rapido Game</h1>
                <Timer
                    start={true}
                    stop={stop}
                />
            </div>

            <div className="row">
                <div className="col-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                    <DropZone
                        setSelectedSlot={setSlot}
                        droppedCard={droppedCard}
                    />
                </div>

                <div className="col-4 col-md-3 col-xl-2">
                    <Bots
                        droppedCard={droppedCard}
                        setDroppedCard={drop}
                        gameStop={gameStop}
                        setScore={setScore}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                    <Player
                        realPlayer={true}
                        playerIndex={4}
                        color={"secondary"}
                        selectedSlot={selectedSlot}
                        setSelectedSlot={setSelectedSlot}
                        droppedCard={droppedCard}
                        setDroppedCard={drop}
                        stop={stop}
                        setScore={setScore}
                    />
                </div>
                <div className="col-4 col-md-3 col-xl-2">
                    <MainMenu/>
                </div>

            </div>
        </>
    )
}


export default MainBoard;