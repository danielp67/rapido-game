import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "../Shareable/TabGroup";
import {ThemeContext} from "../Shareable/ThemeContext";

const HomeTab = (props) => {

    const {winner, partNb} = props

    return (
        <>
            <ThemeContext.Consumer>
                {({theme}) => (

                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                         aria-labelledby="home-tab" tabIndex="0">

                        <h5 className="card-title">Rapido game</h5>
                        Manche n°{partNb} - gagnant joueur n°{winner}
                        Le jeu est fini, le vainqueur est le joueur n°{winner}
                        Bienvenue dans Rapido Game !
                        Commencer une nouvelle partie ?
                    </div>

                )}
            </ThemeContext.Consumer>
        </>
    )
};

export default HomeTab;