import * as DeckAPIUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const fetchDecks = () => dispatch => {
    return DeckAPIUtil.fetchDecks().then(
        decks => dispatch({ type: RECEIVE_DECKS, decks }
    ));
};

export const fetchDeck = deckId => dispatch => {
    return DeckAPIUtil.fetchDeck(deckId)
    .then(deck => dispatch({ type: RECEIVE_DECK, deck }));
};

export const createDeck = deckId =>dispatch => {
    return DeckAPIUtil.createDeck(deck)
    .then(deck => dispatch({ type: RECEIVE_DECK, deck }));
};

export const deleteDeck = deckId => dispatch => {
    return DeckAPIUtil.deleteDeck(deckId)
    .then(deckId => dispatch({ type: REMOVE_DECK, deckId }));
};
