import React from 'react';
import SettingsMenu from "./SettingsMenu";
import SecondMenu from "./SecondMenu";
import ScoringMenu from "./ScoringMenu";
import ResumeMenu from "./ResumeMenu";

const MainMenu = (props) => {

    const {startGame, settings, setSettings, loading} = props

    return (
        <div className="row h-100 bg-info text-dark bg-opacity-75">

            <div className="m-auto">

                <SecondMenu
                    startGame={startGame}
                    loading={loading}
                />
                <ResumeMenu/>
                <ScoringMenu/>
                <SettingsMenu
                    settings={settings}
                    setSettings={setSettings}
                />

            </div>
        </div>
    )
}

export default MainMenu;