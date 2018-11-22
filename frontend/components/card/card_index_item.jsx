import React from 'react';

class CardIndexItem extends React.Component {
 
    render() {
        return (
            <li>
            {this.props.front}
            {this.props.back}
            </li>
        );
    }
}

export default CardIndexItem;
