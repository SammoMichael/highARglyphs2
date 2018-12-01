import merge from 'lodash/merge';
import { RECEIVE_DECKS, RECEIVE_DECK,
     REMOVE_DECK, RECEIVE_SEARCH_DECKS } from '../actions/deck_actions';

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
        case RECEIVE_SEARCH_DECKS:
            newState = merge({}, action.decks);
            return newState;
        default:
        return state;
    }
};

export default decksReducer;
