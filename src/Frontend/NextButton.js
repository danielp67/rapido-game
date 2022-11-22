import React from 'react';

const NextButton = (props)=> {

    const {nextCard} = props

        return (

            <button type="button" className="btn btn-info" onClick={nextCard}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>

        )

}

export default NextButton;