import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { fetchDecks, fetchDeck } from '../../actions/deck_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
    decks: Object.values(state.entities.decks)
    };
};

const mapDispatchToProps = dispatch => ({
        fetchDecks: () => dispatch(fetchDecks()),
        fetchDeck: deckId => dispatch(fetchDeck(deckId)),
        openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
