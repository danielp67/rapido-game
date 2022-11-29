import React from 'react';

export const Score = [
    {current:0, total:0},
    {current:0, total:0},
    {current:0, total:0},
    {current:0, total:0},
    {current:0, total:0}
]

export const ScoreContext = React.createContext({
    score: Score,
    setScore: () => {
    },
});

