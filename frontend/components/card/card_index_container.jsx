import { connect } from 'react-redux';
import CardIndex from './card_index';
import { fetchCards, createCard, updateCard, deleteCard } from '../../actions/card_actions';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
    const deckId = ownProps.match.params.deckId;
    const deck = state.entities.decks[deckId]; 
    const cards = Object.values(state.entities.cards);
    return (
        { deck, deckId, cards }
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCards: deckId => dispatch(fetchCards(deckId)),
    fetchDeck: deckId => dispatch(fetchDeck(deckId)),
    createCard: card => dispatch(createCard(card)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIndex);
