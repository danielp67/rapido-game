import React from 'react';
import SettingsMenu from "./SettingsMenu";
import SecondMenu from "./SecondMenu";
import ScoringTab from "./ScoringTab";
import ResumeMenu from "./ResumeMenu";

const MainMenu = (props) => {

    const {scoring, settings, setSettings, setReloading} = props

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


                            <ScoringTab
                                scoring={scoring}
                            />
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

export default MainMenu;