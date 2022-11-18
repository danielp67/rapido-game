import React, {Component} from 'react';
import Card from "./Card";

class Deck extends Component {

    render() {
        if (this.props.deck.length !== 0) {
            return (
                <div className="p-1 h-100">
                    <Card card={this.props.deck[0]}/>
                </div>
            )
        } else
            return (
                <div className="p-1 h-100">
                    <Card card={{Value:"X", Suit:"secondary"}}/>
                </div>
            )
    }
}


export default Deck;