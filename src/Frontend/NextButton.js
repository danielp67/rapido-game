import React, {Component} from 'react';

class NextButton extends Component {

    nextCard = (props) => {
        this.props.nextCard()
    }

    render() {

        return (

            <button type="button" className="btn btn-info" onClick={this.nextCard}>
                Next Card
            </button>

        )
    }
}

export default NextButton;