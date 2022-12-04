import React from 'react';
import SettingsTab from "./SettingsTab";
import ScoringTab from "./ScoringTab";
import TabGroup from "./TabGroup";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading} = props

    return (
        <>
            <div className={"overlay"}>
                <div className="card launch-card text-center my-auto">
                    <TabGroup/>
                    <div className="card-body tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                             aria-labelledby="home-tab" tabIndex="0">

                            <h5 className="card-title">Rapido game</h5>
                            welcome in rapido game

                        </div>
                        <div className="tab-pane fade" id="score-tab-pane" role="tabpanel"
                             aria-labelledby="score-tab" tabIndex="0">


                            <ScoringTab
                                scoring={scoring}
                            />
                        </div>
                        <div className="tab-pane fade" id="settings-tab-pane" role="tabpanel"
                             aria-labelledby="settings-tab" tabIndex="0">


                            <SettingsTab
                                settings={settings}
                                setSettings={setSettings}
                            />
                        </div>
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
                    </div>

                </div>
            </div>
        </>
    )
}

export default MainMenu;