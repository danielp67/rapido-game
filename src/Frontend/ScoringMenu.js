import React from 'react';
import Modal from "./Modal";
import {ScoreContext} from "./ScoreContext";

const ScoringMenu = (props) => {

    return (

        <>

            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropScoring">
                <i className="fa fa-trophy" aria-hidden="true"/>
            </button>

            <ScoreContext.Consumer>
                {({score}) => (
                    <Modal id={"staticBackdropScoring"}>

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                <i className="fa fa-trophy" aria-hidden="true"/> Score
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">

                            <table className="table table-hover table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Player</th>
                                    <th scope="col">Points</th>
                                    <th scope="col">Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    score.map((mapping, index) => {
                                         console.log(mapping, index)
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index+1}</th>
                                                    <td>{mapping.playerIndex}</td>
                                                    <td>{mapping.currentScore}</td>
                                                    <td>{mapping.total}</td>
                                                </tr>


                                            )
                                    })
                                }

                                </tbody>
                            </table>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </Modal>
                )}
            </ScoreContext.Consumer>
        </>
    )
}

export default ScoringMenu;