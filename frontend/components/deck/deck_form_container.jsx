import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';
import deckForm from './deck_form';

const mapStateToProps = state => {
    const title = '';
    return { deck: title };
};

const mapDispatchToProps = dispatch => {
    return ({
        createDeck: deck => dispatch(createDeck(deck))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(deckForm);

