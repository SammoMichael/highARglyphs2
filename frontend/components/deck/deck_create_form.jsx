import React from 'react';
import { withRouter } from 'react-router-dom';

class DeckCreateForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = { title: '' };
        
    this.handleSubmit = this.handleSubmit.bind(this);
}

    update(field) {
        return (e) => this.setState({
           [field]: e.currentTarget.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createDeck(this.state).then(this.props.closeModal);
    }

    render() {
        return (
            <div className='deck-create-form'>
                <h1 className='create-deck-header'>Create Deck</h1>
                <form onSubmit={this.handleSubmit} className='deck-create-box'>
                <br />
                <i onClick={this.props.closeModal} className="close-x" >X</i>
                <div className="create-form">
                <br />
                <label>
                    <input 
                     type="text"
                     value={this.state.title}
                     onChange={this.update('title')}
                     className="create-input-title"/>
                </label>
                </div>
                </form>
            </div>
        );
    }
}

export default withRouter(DeckCreateForm);
