import React from 'react';

const NextButton = (props)=> {

    const {nextCard} = props

        return (

            <button type="button" className="btn btn-info" onClick={nextCard}>
                Next Card
            </button>

        )

}

export default NextButton;