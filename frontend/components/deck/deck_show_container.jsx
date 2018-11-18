import { connect } from 'react-redux';
import DeckShow from './deck_show';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
    const deck = state.decks[ownProps.match.params.id];
    return deck;
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchDeck: deckId => dispatch(fetchDeck(deckId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
