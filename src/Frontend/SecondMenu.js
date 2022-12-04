import React from 'react';
import SettingsTab from "../Shareable/SettingsTab";
import Modal from "./Modal";

const SecondMenu = (props) => {

    const {startGame, loading} = props

    return (

        <>
            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropSecond">
                <i className="fa fa-play" aria-hidden="true"/>
            </button>

            <Modal id={"staticBackdropSecond"}>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        <i className="fa fa-play" aria-hidden="true"/> Menu
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <h4>Rapido game</h4>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" data-bs-target="#exampleModalToggle2"
                            data-bs-toggle="modal">
                        <i className="fa fa-cog" aria-hidden="true"/> Settings
                    </button>

                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={() => startGame(true)}>
                        <i className="fa fa-play" aria-hidden="true"/> Start
                    </button>

                </div>

            </Modal>

                <SettingsTab/>

            </>
            )
            }

            export default SecondMenu;