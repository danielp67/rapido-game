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

                </div>

            </div>
        )
}

export default SecondMenu;