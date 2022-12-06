import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "../Shareable/TabGroup";
import {ThemeContext} from "../Context/ThemeContext";
import HomeTab from "./HomeTab";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading, reloadGame, start} = props

    return (
        <>
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={"overlay row bg-secondary vh-100"}>
                        <div className={`card col-md-6 col-12 offset-md-3 launch-card text-center my-auto ${theme.className}`}>
                            <TabGroup start={start}/>
                            <div className="card-body tab-content" id="myTabContent">
                                <HomeTab
                                    scoring={scoring}
                                    start={start}
                                />
                                    <ScoringTab
                                        scoring={scoring}
                                    />
                                    <SettingsTab
                                        settings={settings}
                                        setSettings={setSettings}
                                    />
                                <div className="tab-pane fade" id="tuto-tab-pane" role="tabpanel"
                                     aria-labelledby="tuto-tab" tabIndex="0">...
                                </div>
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-primary"
                                        onClick={() => setReloading()}
                                >
                                    <i className="fa fa-play" aria-hidden="true"/> {scoring.partNb===0 ? "Démarrer" : "Continuer"}
                                </button>

                                <button type="button" className="btn btn-secondary"
                                        onClick={() => reloadGame()}
                                        disabled={!start}>
                                    <i className="fa fa-sign-in" aria-hidden="true"/> Quitter la partie
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </ThemeContext.Consumer>
        </>
    )
};

export default MainMenu;