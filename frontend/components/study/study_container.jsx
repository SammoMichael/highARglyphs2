import { connect } from 'react-redux';
import Study from './study';
import { fetchDeck } from '../../actions/deck_actions';
import { fetchCards } from '../../actions/card_actions';

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

const mapDispatchToProps = (dispatch) => {
    return {
    fetchDeck: id => dispatch(fetchDeck(id)),
    fetchCards: (deckId) => dispatch(fetchCards(deckId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Study);
