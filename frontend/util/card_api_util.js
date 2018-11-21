export const fetchCards = (deckId) => {
    return $.ajax({
        method: 'GET',
        url: `api/decks/${deckId}/cards`,
    });
};

export const fetchCard = cardId => {
    return $.ajax({
        method: 'GET',
        url: `api/cards/${cardId}`,
    });
};

export const createCard = card => {
    return $.ajax({
        method: 'POST',
        url: `api/decks/${card.deck}/cards`,
        data: { card },
    });
};

export const updateCard = card => {
    return $.ajax({
        method: 'PATCH',
        url: `api/cards/${card.id}`,
    });
};

export const deleteCard = cardId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cards/${cardId}`,
    });
};
