import React from 'react';

const HomeTab = (props) => {

    const {scoring} = props
    let winnerMatch= [...scoring.score]
    let winnerGame = [...scoring.score]

    winnerMatch.sort(function(a, b){return b.currentScore - a.currentScore})

    winnerGame.sort(function(a, b){return b.total - a.total})

    return (
        <>
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                         aria-labelledby="home-tab" tabIndex="0">

                        <h4 className="card-title fw-bold">Rapido game</h4>
                        {scoring.partNb === 0 ?
                            <div>
                                Bienvenue dans Rapido Game !<br/>
                                Commencer une nouvelle partie ?
                            </div>

                          :   <div>
                                Manche n°{scoring.partNb}<br/>
                                Gagnant de la manche : joueur n°{winnerMatch[0].playerIndex}
                            </div>
                        }

                        {scoring.partNb === 0 ?

                            null
                            :  <div>
                                Le jeu est fini, le vainqueur est le joueur n°{winnerGame[0].playerIndex}<br/>
                                Commencer une nouvelle partie ?
                        </div>
                        }

                    </div>

        </>
    )
}

export default HomeTab;