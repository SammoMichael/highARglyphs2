import * as cardAPIUtil from '../util/card_api_util.js';

export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const fetchAllCards = deckId => dispatch => {
    return cardAPIUtil.fetchAllCards(deckId)
    .then(cards => dispatch({ type: RECEIVE_ALL_CARDS, cards }));
};

export const fetchCard = cardId => dispatch => {
    return cardAPIUtil.fetchCards(cardId)
    .then(card => dispatch({type: RECEIVE_CARD, card}));
};

export const removeCard = cardId => dispatch => {
    return cardAPIUtil.deleteCard(cardId)
    .then(cardId =>  dispatch({type: REMOVE_CARD, cardId}));
};

