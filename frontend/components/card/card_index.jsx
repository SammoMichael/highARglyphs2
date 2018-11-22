import React from 'react';
import CardIndexItem from './card_index_item';
import merge from 'lodash/merge';

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
        delete state.cards[idx];
        this.props.deleteCard(card.id);
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
        window.state = this.state;
        const cards = Object.values(this.state.cards.map((card, idx) => (
        <span
            id={idx + 1}
            key={idx}
            cardid={card.id}
            deckid={card.deck_id}> 
            <h3>{idx + 1}</h3>
            <textarea 
            onChange={this.update('front', idx)}
            defaultValue={card.front || ''}></textarea>
            <textarea 
            onChange={this.update('back', idx)}
            defaultValue={card.back || ''}></textarea>
            <button onClick={() => this.handleClickDelete(card, idx)}>X</button>
            
       </span>)
        ));
        return (
            <div>
                <ul>{ cards }
                    <button className='new-card-button' onClick={this.handleClickNew}>+</button>
                    <button className='save-card-button' onClick={() => {
                        this.props.saveCards(Object.values(this.state.cards))
                    }}>Save</button>
                </ul>
            </div>
        );
    }
}

export default CardIndex;
