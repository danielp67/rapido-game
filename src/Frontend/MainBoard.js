import React, {useContext, useState} from 'react';
import Bots from "./Bots";
import DropZone from "./DropZone";
import Timer from "./Timer";
import Player from "./Player";
import MainMenu from "./MainMenu";
import {ScoreContext} from "../Shareable/ScoreContext";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [stop, setStop] = useState(false)
    const [start, setStart] = useState(false)
    const [loading, setLoading] = useState(false)

    const {score} = useContext(ScoreContext)
    const [scoring, setScoring] = useState([...score])
    let tmpScoring = []
    const [settings, sendSettings] = useState(
        {
            nbPlayer: "4",
            level: "100",
            switchCountScore: true,
            switchTimer: true,
            switchDarkMode: false
        }
    )
    let count = 0

    const initDropZone = () => {
        let tmpDroppedCard = []
        for (let i = 0; i < 4 * settings.nbPlayer; i++) {
            tmpDroppedCard.push([{value: 0, suit: "secondary"}])
        }
        setDroppedCard(tmpDroppedCard)

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
        const {playerIndex, currentScore} = props
        tmpScoring[playerIndex - 1] = {...scoring[playerIndex - 1]}
        tmpScoring[playerIndex - 1] = {
            playerIndex: playerIndex,
            currentScore: currentScore,
            total: tmpScoring[playerIndex - 1].total
        }

        count++
        console.log(tmpScoring, count)

        if (tmpScoring.length === 4 && loading && count === 8) {

            tmpScoring = tmpScoring.map((mapping, index) => {
                return (
                    {
                        playerIndex: mapping.playerIndex,
                        currentScore: mapping.currentScore,
                        total: mapping.total + mapping.currentScore
                    }
                )
            })
            count = 0
            setScoring(tmpScoring)
            setLoading(false)
            console.log(tmpScoring, scoring)

        }
    }

    const startGame = (props) => {

        setStart(props)
        //  initDropZone()
    }

    const setSettings = (props) => {
        sendSettings(props)
    }

    if (!initMainBoard) {
        initDropZone()
        setInitMainBoard(true)

    }


    const setReloading = () => {
        setStop(false)
        setStart(true)
        setSelectedSlot("")
        setLoading(true)
        //  setInitMainBoard(false)
        initDropZone()

    }

    if (count === 0 && !loading) {
        console.log(tmpScoring, loading)

        //  setLoading(true)
    }

    if (loading) {
        return (
            <>
                <ScoreContext.Provider value={{score: scoring}}>
                    <div className="row">
                        <h1 className="text-center">Rapido Game</h1>
                        <Timer
                            start={start}
                            stop={stop}
                            timerOn={settings.switchTimer}
                        />
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                            <DropZone
                                setSelectedSlot={setSlot}
                                droppedCard={droppedCard}
                            />
                        </div>

                        <div className="col-4 col-md-3 col-xl-2 d-none d-sm-block">
                            <Bots
                                start={start}
                                stop={stop}
                                droppedCard={droppedCard}
                                setDroppedCard={drop}
                                gameStop={gameStop}
                                setScore={setScore}
                                level={parseInt(settings.level)}
                                loading={loading}
                                settings={settings}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 col-xl-4 offset-md-2 offset-xl-3">
                            <Player
                                realPlayer={true}
                                playerIndex={1}
                                color={"secondary"}
                                selectedSlot={selectedSlot}
                                setSelectedSlot={setSelectedSlot}
                                droppedCard={droppedCard}
                                setDroppedCard={drop}
                                gameStop={gameStop}
                                start={start}
                                stop={stop}
                                setScore={setScore}
                                level={parseInt(settings.level)}
                                loading={loading}

                            />
                        </div>
                        <div className="col-4 col-md-3 col-xl-2 d-none d-sm-block bg-info text-dark bg-opacity-75">

                        </div>

                    </div>
                </ScoreContext.Provider>

            </>
        )
    } else {

        return (
            <MainMenu
                settings={settings}
                setSettings={setSettings}
                scoring={scoring}
                setReloading={setReloading}
            />
        )
    }
}


export default MainBoard;