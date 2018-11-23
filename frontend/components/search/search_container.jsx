import { connect } from 'react-redux';
import Search from './search';
import { searchDecks } from '../../actions/deck_actions';

const mapStateToProps = state => {
    const decks = this.state.entities.decks
    return { decks };
};

const mapDispatchToProps = dispatch => ({
    searchPosts: str => dispatch(searchDecks(str))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
