import React from 'react';
import {ThemeContext} from "../Shareable/ThemeContext";

const HomeTab = (props) => {

    const {scoring} = props
    let winnerMatch= [...scoring.score]
    let winnerGame = [...scoring.score]

    winnerMatch.sort(function(a, b){return b.currentScore - a.currentScore})

    winnerGame.sort(function(a, b){return b.total - a.total})

    return (
        <>
            <ThemeContext.Consumer>
                {({theme}) => (

                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                         aria-labelledby="home-tab" tabIndex="0">

                        <h5 className="card-title">Rapido game</h5>
                        Manche n°{scoring.partNb}<br/>
                        Gagnant de la manche : joueur n°{winnerMatch[0].playerIndex}<br/>
                        Le jeu est fini, le vainqueur est le joueur n°{winnerGame[0].playerIndex}<br/>
                        Bienvenue dans Rapido Game !<br/>
                        Commencer une nouvelle partie ?<br/>
                    </div>

                )}
            </ThemeContext.Consumer>
        </>
    )
};

export default HomeTab;