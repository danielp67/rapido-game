import React from 'react';

const SecondMenu = () => {

        return (
            <div className="row h-100 bg-warning text-dark bg-opacity-50">

                <div className="m-auto bg-success">
                    <button type="button" className="btn btn-secondary col-2">
                            <i className="fa fa-play" aria-hidden="true"></i>

                    </button>
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-pause" aria-hidden="true"></i>

                </button>
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-sign-in" aria-hidden="true"></i>

                </button>
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-trophy" aria-hidden="true"></i>

                </button>
                <button type="button" className="btn btn-secondary col-2">
                    <i className="fa fa-cog" aria-hidden="true"></i>

                </button>




                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Menu
                    </button>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-fullscreen-down modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
            </div>
        )
}

export default SecondMenu;