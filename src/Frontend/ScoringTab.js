import React from 'react';
import {ThemeContext} from "../Shareable/ThemeContext";

const ScoringTab = ({scoring}) => {

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
        <table className={`table table-hover table-striped ${theme.className}`}>
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
            )}
        </ThemeContext.Consumer>
    )
}

export default ScoringTab;