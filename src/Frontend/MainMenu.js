import React from 'react';
import SettingsMenu from "./SettingsMenu";
import SecondMenu from "./SecondMenu";
import ScoringMenu from "./ScoringMenu";

const MainMenu = () => {

    return (
        <div className="row h-100 bg-warning text-dark bg-opacity-50">

            <div className="m-auto bg-success">
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-pause" aria-hidden="true"></i>

                </button>
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>

                </button>


                <SecondMenu/>

                <ScoringMenu/>
                <SettingsMenu/>


            </div>
        </div>
    )
}

export default MainMenu;