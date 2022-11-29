import React from 'react';
import Modal from "./Modal";

const ScoringMenu = (props) => {

    return (

        <>

            <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropScoring">
                <i className="fa fa-trophy" aria-hidden="true"/>
            </button>


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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </Modal>


        </>
    )
}

export default ScoringMenu;