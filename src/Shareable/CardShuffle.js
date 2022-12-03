import React, { Component } from 'react';

class CardShuffle extends Component {

    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    getComments = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }


    render() {
        const { characters } = this.state

        return (
            <div className="m-2 card">
                <h1 className="text-center">Board Game from class</h1>
                <Player/>
            </div>
        )
    }


    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }



}


export default CardShuffle;