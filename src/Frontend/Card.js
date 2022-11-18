import React, {Component} from 'react';

class Card extends Component {

    placeCard = (props) => {
       // this.props.placeCard(this.props)
    }

    render() {

        return (
            <div className={`card h-100 bg-${this.props.card.Suit}`} onClick={this.placeCard}>
                {this.props.card.Value}
            </div>

        )
    }
}

export default Card;