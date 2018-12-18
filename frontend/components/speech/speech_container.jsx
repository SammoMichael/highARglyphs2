import { connect } from 'react';
import Speech from './speech';
import { saveCards } from '../../actions/card_actions';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = (state) => {
    return ( 
        state 
    );
};

const mapDispatchToProps = dispatch => ({
        saveCards: (cards) => dispatch(saveCards(cards)),
        createDeck: (deck) => dispatch(createDeck(deck)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Speech);
