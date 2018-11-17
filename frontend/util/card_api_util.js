export const fetchCards = (deckId) => dispatch => {
    return $.ajax({
        method: 'GET',
        url: `api/${deckId}/cards`,
    });
};

export const fetchCard = cardId => dispatch => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}`,
    });
};

export const createCard = card => dispatch => {
    return $.ajax({
        method: 'POST',
        url: `api/${card.deck}/cards`,
        data: { card },
    });
};

export const updateCard = card => dispatch => {
    return $.ajax({
        method: 'PATCH',
        url: `api/cards/${card.id}`,
    });
};

export const deleteCard = cardId => dispatch => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cards/${cardId}`,
    });
};
