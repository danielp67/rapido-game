import React from 'react';

const ScoringTab = ({scoring}) => {

    return (

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
                                    scoring.map((mapping, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{mapping.playerIndex}</td>
                                                <td>{mapping.currentScore}</td>
                                                <td>{mapping.total}</td>
                                            </tr>

                                        )
                                    })
                                }

                                </tbody>
                            </table>

    )
}

export default ScoringTab;