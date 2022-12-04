import React from 'react';
import Modal from "./Modal";

const ResumeMenu = () => {

    return (

        <>
            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropResume">
                <i className="fa fa-pause" aria-hidden="true"/>
            </button>


            <Modal id={"staticBackdropResume"}>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        <i className="fa fa-pause" aria-hidden="true"/> Pause

                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <h4>Reprendre la partie ?</h4>


                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary">
                        <i className="fa fa-sign-in" aria-hidden="true"/> Quitter la partie
                    </button>
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-play" aria-hidden="true"/> Continuer
                    </button>
                </div>
            </Modal>


        </>
    )
}

export default ResumeMenu;