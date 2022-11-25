import React from 'react';

const Scoring = (props) => {
    const {scoring} = props

    console.log(scoring)
   let playerScore = 14
        return (
            <div
                className={`card`}
            >
                <p className="my-auto fs-3 fw-bold">{playerScore}</p>
            </div>

        )

}

export default Scoring;