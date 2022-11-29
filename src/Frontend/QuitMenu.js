import React from 'react';
import Modal from "./Modal";

const QuitMenu = () => {

    return (

        <>

            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropQuit">
                <i className="fa fa-sign-in" aria-hidden="true"/>
            </button>


            <Modal id={"staticBackdropQuit"}>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        <i className="fa fa-sign-in" aria-hidden="true"/> Quitter le jeu
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                </div>
                <div className="modal-body">
                    <h4>Quitter la partie en cours ?</h4>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Confirm</button>
                </div>
            </Modal>

        </>
    )
}

export default QuitMenu;