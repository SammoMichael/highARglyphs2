import merge from 'lodash/merge';
import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_DECKS:
            return merge({}, state, action.decks);
        case RECEIVE_DECK:
            return merge({}, state, { [action.deck.id]: action.deck });
        case REMOVE_DECK:
            newState = merge({}, state);
            delete newState[action.deckId];
            return newState;
        default:
            return state;
    }
};

export default decksReducer;
