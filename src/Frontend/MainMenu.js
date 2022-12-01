import React from 'react';
import SettingsMenu from "./SettingsMenu";
import SecondMenu from "./SecondMenu";
import ScoringMenu from "./ScoringMenu";
import ResumeMenu from "./ResumeMenu";
import QuitMenu from "./QuitMenu";

const MainMenu = (props) => {

    const {startGame, settings, setSettings, stop} = props

    return (
        <div className="row h-100 bg-warning text-dark bg-opacity-50">

            <div className="m-auto">

                <SecondMenu startGame={startGame}/>
                <ResumeMenu/>
                <QuitMenu/>
                <ScoringMenu stop={stop}/>
                <SettingsMenu
                    settings={settings}
                    setSettings={setSettings}
                />

            </div>
        </div>
    )
}

export default MainMenu;