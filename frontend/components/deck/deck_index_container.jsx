import { connect } from 'react-redux';
import DeckIndex from './deck_index';
import { fetchAllDecks } from '../../actions/deck_actions';

const mapStateToProps = state => {
    const decks = Object.values(state.decks);
    return decks;
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchAllDecks: () => dispatch(fetchAllDecks())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckIndex);
