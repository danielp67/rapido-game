import React from 'react';

const ResumeMenu = () => {

        return (

            <>
                <button type="button" className="btn btn-primary col-4 m-2" data-bs-toggle="modal" data-bs-target="#staticBackdropResume">
                    <i className="fa fa-pause" aria-hidden="true"/>
                </button>


                <div className="modal fade" id="staticBackdropResume" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-fullscreen-down modal-dialog-scrollable">
                        <div className="modal-content">
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
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
}

export default ResumeMenu;