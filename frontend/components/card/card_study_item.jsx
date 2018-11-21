import React from 'react';

class CardStudyItem extends React.Component {
    constructor(props) {
    super(props);
    this.state = { value: this.props.front,
    flipped: true };
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    console.log(this.state);
    (this.state.flipped ? 
    this.setState({ flipped: false }) :
    this.setState({ flipped: true }));
    if (this.state.flipped === false) {
        this.setState({ value: this.props.front });
        } else {
        this.setState({ value: this.props.back });
        }
    }

    render() {
        return (
           <span
           className="flashcard" 
            onClick={this.handleClick}
           >{this.state.value}</span>
        );
    }
}

export default CardStudyItem;
