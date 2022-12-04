import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "../Shareable/TabGroup";
import {ThemeContext} from "../Shareable/ThemeContext";
import HomeTab from "./HomeTab";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading} = props

    return (
        <>
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={"overlay"}>
                        <div className={`card launch-card text-center my-auto ${theme.className}`}>
                            <TabGroup partNb={scoring.partNb}/>
                            <div className="card-body tab-content" id="myTabContent">
                                <HomeTab
                                    scoring={scoring}
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
                                    <i className="fa fa-play" aria-hidden="true"/> Start
                                </button>

                                <button type="button" className="btn btn-secondary disabled">
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