import React, {useContext, useState} from 'react';
import Bots from "./Bots";
import DropZone from "./DropZone";
import Timer from "./Timer";
import Player from "./Player";
import MainMenu from "./MainMenu";
import {ScoreContext} from "./ScoreContext";
import SettingsMenu from "./SettingsMenu";

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
        console.log(tmpScoring,count)

        if (tmpScoring.length === 4 && loading && count === 8) {

            tmpScoring=  tmpScoring.map((mapping, index) =>{
                return(
                    {playerIndex: mapping.playerIndex,
                        currentScore:mapping.currentScore,
                        total:mapping.total + mapping.currentScore
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
                           {/* <MainMenu
                                startGame={startGame}
                                settings={settings}
                                loading={loading}
                                setSettings={setSettings}
                            />*/}
                        </div>

                    </div>
                </ScoreContext.Provider>

            </>
        )
    } else {


        return (
            <>
                <div className={"overlay"}>
                    <div className="card launch-card text-center my-auto">
                        <ul className=" nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                        data-bs-target="#home-tab-pane" type="button" role="tab"
                                        aria-controls="home-tab-pane" aria-selected="true">Home
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#profile-tab-pane" type="button" role="tab"
                                        aria-controls="profile-tab-pane" aria-selected="false">Score
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#contact-tab-pane" type="button" role="tab"
                                        aria-controls="contact-tab-pane" aria-selected="false">Tuto
                                </button>
                            </li>
                        </ul>
                        <div className="card-body tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                 aria-labelledby="home-tab" tabIndex="0">

                                <h5 className="card-title">Rapido game</h5>
                                welcome in rapido game

                            </div>
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                 aria-labelledby="profile-tab" tabIndex="0">


                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Player</th>
                                        <th scope="col">Points</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        scoring.map((mapping, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{mapping.playerIndex}</td>
                                                    <td>{mapping.currentScore}</td>
                                                    <td>{mapping.total}</td>
                                                </tr>

                                            )
                                        })
                                    }

                                    </tbody>
                                </table>

                            </div>
                            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                 aria-labelledby="contact-tab" tabIndex="0">...
                            </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-primary" data-bs-target="#settingsMenu"
                                    data-bs-toggle="modal">
                                <i className="fa fa-cog" aria-hidden="true"/> Settings
                            </button>

                            <button className="btn btn-primary"
                                    onClick={() => setReloading()}
                            >
                                <i className="fa fa-play" aria-hidden="true"/> Start
                            </button>

                        </div>

                    </div>
                </div>

                <SettingsMenu
                    settings={settings}
                    setSettings={setSettings}
                />

            </>
        )
    }
}


export default MainBoard;