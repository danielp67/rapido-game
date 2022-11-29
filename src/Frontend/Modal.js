import React from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

const Modal = (props) => {

    const {title, content} = props

    return (

            <ThemeContext.Consumer>
                {({theme}) => (
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${theme.className}`}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                                <i className="fa fa-cog" aria-hidden="true"/> {title}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {content}

                        </div>
                    </div>
                </div>
            </div>
                )}
            </ThemeContext.Consumer>

    )
}

export default Modal;