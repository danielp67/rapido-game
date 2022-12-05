import React from 'react';
import {ThemeContext} from "../Context/ThemeContext";

const ScoringTab = ({scoring}) => {

    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className="tab-pane fade" id="score-tab-pane" role="tabpanel"
                     aria-labelledby="score-tab" tabIndex="0">
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
                            scoring.score.map((mapping, index) => {
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
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default ScoringTab;