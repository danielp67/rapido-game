import React, {useState} from 'react';
import Bots from "./Bots";
import DropZone from "./DropZone";
import Timer from "./Timer";
import Player from "./Player";
import MainMenu from "./MainMenu";
import {ScoreContext} from "./ScoreContext";

const MainBoard = () => {

    const [selectedSlot, setSelectedSlot] = useState("")
    const [droppedCard, setDroppedCard] = useState([])
    const [initMainBoard, setInitMainBoard] = useState(false)
    const [stop, setStop] = useState(false)
    const [start, setStart] = useState(false)
    const [score, setScore] = useState([
        {playerIndex: 1, currentScore:0, total:0},
        {playerIndex: 2, currentScore:0, total:0},
        {playerIndex: 3, currentScore:0, total:0},
        {playerIndex: 4, currentScore:0, total:0},
    ])
    const tmpScoring = []
    const [settings, sendSettings] = useState(
        {
            nbPlayer:"4",
            level:"100",
            switchCountScore : true,
            switchTimer : true,
            switchDarkMode : false
        }
    )
    const [loading, setLoading] = useState(true)
    let count=0

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

    const setScoring = (props) => {
        const {playerIndex, currentScore} = props

        console.log(props)
        tmpScoring[playerIndex-1] = {playerIndex: playerIndex, currentScore: currentScore}

        count++
        if(tmpScoring.length===4 && loading && count===8)
        {

            count=0
            console.log(tmpScoring)
            //setStop(false)
          setLoading(false)

            setScore(tmpScoring)


            //setLoading(true)

            //  localStorage.setItem('score', JSON.stringify(sc))
/*
            let itemsList = localStorage.getItem('score')
            if (itemsList) {
                this.setState({
                    items: JSON.parse(localStorage.getItem('items'))
                })
            }
        */
            // on each update, sync our state with localStorage
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


    if(count===0 && !loading)
    {
        console.log(tmpScoring, loading)
      //  setLoading(true)
    }

    if(true){
        return (
            <>
                <ScoreContext.Provider value={{score, setScoring}}>
                    <div className="row">
                        <h1 className="text-center">Rapido Game</h1>
                        <Timer
                            start={start}
                            stop={stop}
                            timerOn={settings.switchTimer}
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
                                start={start}
                                stop={stop}
                                droppedCard={droppedCard}
                                setDroppedCard={drop}
                                gameStop={gameStop}
                                setScore={setScoring}
                                level={parseInt(settings.level)}
                                loading={loading}
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
                                start={start}
                                stop={stop}
                                setScore={setScoring}
                                level={parseInt(settings.level)}
                                loading={loading}

                            />
                        </div>
                        <div className="col-4 col-md-3 col-xl-2">
                            <MainMenu
                                startGame={startGame}
                                settings={settings}
                                stop={stop}
                                setSettings={setSettings}
                            />
                        </div>

                    </div>
                </ScoreContext.Provider>
            </>
        )
    }else{

        return(
            <>
    </>
        )
    }
}


export default MainBoard;