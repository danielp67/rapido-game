import React from 'react';
import {Theme, ThemeContext} from "./ThemeContext";

const Modal = ({id, children}) => {

    return (

            <ThemeContext.Consumer>
                {({theme}) => (
            <div className="modal fade" id={id} aria-hidden="true"
                 aria-labelledby={id} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className={`modal-content ${theme.className}`}>
                        {children}
                    </div>
                </div>
            </div>
                )}
            </ThemeContext.Consumer>

    )
}

export default Modal;