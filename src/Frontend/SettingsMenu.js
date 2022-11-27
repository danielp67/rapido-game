import React from 'react';
import SecondMenu from "./SecondMenu";

const SettingsMenu = () => {

    return (

        <>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                                <i className="fa fa-cog" aria-hidden="true"/> Settings
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Nombre de joueurs :
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioNbPlayer"
                                       id="flexRadioNbPlayer1" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioNbPlayer1">
                                    4
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioNbPlayer"
                                       id="flexRadioNbPlayer2"/>
                                <label className="form-check-label" htmlFor="flexRadioNbPlayer2">
                                    8
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioNbPlayer"
                                       id="flexRadioNbPlayer3"/>
                                <label className="form-check-label" htmlFor="flexRadioNbPlayer3">
                                    12
                                </label>
                            </div>

                            <hr/>
                            Level :
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioLevel"
                                       id="flexRadioLevel1"/>
                                <label className="form-check-label" htmlFor="flexRadioLevel1">
                                    Easy
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioLevel"
                                       id="flexRadioLevel2" defaultChecked/>
                                <label className="form-check-label" htmlFor="flexRadioLevel2">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioLevel"
                                       id="flexRadioLevel3"/>
                                <label className="form-check-label" htmlFor="flexRadioLevel3">
                                    Hard
                                </label>
                            </div>
                            <hr/>

                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="switchCountScore"/>
                                <label className="form-check-label" htmlFor="switchCountScore">
                                    Comptage des points
                                </label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="switchTimer" defaultChecked/>
                                <label className="form-check-label" htmlFor="switchTimer">
                                    Timer
                                </label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="switchDarkMode" defaultChecked/>
                                <label className="form-check-label" htmlFor="switchDarkMode">
                                    Dark Mode
                                </label>
                            </div>


                        </div>
                        <div className="modal-footer">

                            <button className="btn btn-secondary" data-bs-target="#staticBackdropSecond" data-bs-toggle="modal">
                                Cancel
                            </button>
                            <button className="btn btn-primary" data-bs-target="#staticBackdropSecond" data-bs-toggle="modal">
                                Save
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SettingsMenu;