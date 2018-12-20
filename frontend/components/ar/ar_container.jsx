import { connect } from 'react-redux';
import Ar from './ar';
import {
    saveCards,
    fetchCards, createCard, updateCard, deleteCard
} from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
    const deckId = ownProps.match.params.deckId;
    const deck = state.entities.decks[deckId];
    const cards = Object.values(state.entities.cards);
    const numCards = cards.length;
    return {
        deckId,
        deck,
        cards,
        numCards,
    };
};

const mapDispatchToProps = dispatch => {
    return ({
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    createCard: card => dispatch(createCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId)),
    saveCards: cards => dispatch(saveCards(cards)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Ar);
