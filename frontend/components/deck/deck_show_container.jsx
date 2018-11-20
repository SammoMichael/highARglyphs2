import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeckShow from './deck_show';
import { fetchDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => {
    const deck = state.entities.decks[ownProps.match.params.deckId] || {};
    return { deck };
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchDeck: deckId => dispatch(fetchDeck(deckId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckShow));
