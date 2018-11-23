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
    .then(payload => dispatch(receiveDeck(payload)));
};

export const createDeck = deck => dispatch => {
    return DeckAPIUtil.createDeck(deck)
    .then(payload => dispatch(receiveDeck(payload)));
};

export const deleteDeck = deckId => dispatch => {
    return DeckAPIUtil.deleteDeck(deckId)
    .then(deck => dispatch({ type: REMOVE_DECK, deckId }));
};

export const receiveDeck = ({ deck }) => {
    return ({
        type: RECEIVE_DECK,
        deck,
    });
};

export const searchDecks = (str) => dispatch => {
    return DeckAPIUtil.searchDecks(str)
    .then(decks => console.log(decks));
};
