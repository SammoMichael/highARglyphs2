import * as DeckAPIUtil from '../util/deck_api_util';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const fetchAllDecks = () => dispatch => {
    return DeckAPIUtil.fetchDecks()
    .then(decks => dispatch({ type: RECEIVE_ALL_DECKS, decks }));
};

export const fetchDeck = deckId => dispatch => {
    return DeckAPIUtil.fetchDeck(deckId)
    .then(deck => dispatch({ type: RECEIVE_DECK, deck }));
};

export const deleteDeck = deckId => dispach => {
    return DeckAPIUtil.deleteDeck(deckId)
    .then(deckId => dispach({ type: REMOVE_DECK, deckId }));
};

