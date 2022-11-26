import React from 'react';

const SettingsMenu = () => {

    return (

        <>

            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdropSettings">
                <i className="fa fa-cog" aria-hidden="true"></i>
            </button>


            <div className="modal fade" id="staticBackdropSettings" data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-down modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Settings</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
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
                                       id="flexSwitchCheckChecked"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Comptage des
                                    points</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Timer</label>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SettingsMenu;