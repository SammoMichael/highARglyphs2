import React from 'react';

class CardIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { front: [this.props.front] || '',
        back: [this.props.back] || '' };
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete() {

    }
    render() {
        return (
            <>
                <h3>{this.props.id}</h3>
            <li>
                <textarea defaultValue={this.props.front}></textarea>
            <textarea defaultValue={this.props.back}></textarea>
                    <button onClick={() => this.props.deletePost(this.props.cardId)}>X</button>
            
            </li></>
        );
    }
}

export default CardIndexItem;
