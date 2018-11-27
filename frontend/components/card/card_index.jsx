import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

class CardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    componentDidMount() {
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId)
        .then((payload) => {
            this.setState({ cards: Object.values(payload.cards) });
        });
    }

    handleClickNew(e) {
        e.preventDefault();
        this.setState({ cards: (this.state.cards)
            .concat([{ deckId: this.props.match.params.deckId }]) });
    }

    handleClickDelete(card, idx) {
        const state = merge({}, this.state);
        state.cards.splice(idx, 1);
        if (card.id) {
            this.props.deleteCard(card.id);
        }
        this.setState(state);
    }

    update(field, idx) {
        return e => {
            const state = merge({}, this.state);
            state.cards[idx][field] = e.currentTarget.value;
            this.setState(state);
        };
    }

    render() {
        const cards = Object.values(this.state.cards.map((card, idx) => (
        <span
            id={idx + 1}
            key={idx}>
            <h3>{idx + 1}</h3>
            <textarea 
            className='front-textarea'
            onChange={this.update('front', idx)}
            defaultValue={card.front || ''}></textarea>
            <textarea
            className='back-textarea' 
            onChange={this.update('back', idx)}
            defaultValue={card.back || ''}></textarea>
            <button  className='delete-button2'
            onClick={() => this.handleClickDelete(card, idx)}>X</button>
            
       </span>)
        ));
        return (
            <div>
                <ul>{ cards }
                    <button className='new-card-button' onClick={this.handleClickNew}>+</button>
                    <Link to={`/decks/${this.props.match.params.deckId}`} className='save-card-button' onClick={() => {
                        this.props.saveCards(Object.values(this.state.cards))
                    }}>Save</Link>
                </ul>
            </div>
        );
    }
}

export default CardIndex;
