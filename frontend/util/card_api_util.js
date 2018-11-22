export const fetchCards = (deckId) => {
    return $.ajax({
        method: 'GET',
        url: `api/decks/${deckId}/cards`,
    });
};

export const saveCards = cards => {
    return $.ajax({
        method: 'POST',
        url: 'api/cards/save',
        data: { cards: [cards] },
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
        url: `api/decks/${card.deckId}/cards`,
        data: { card },
    });
};

export const updateCard = card => {
    return $.ajax({
        method: 'PATCH',
        url: `api/cards/${card.id}`,
        data: { card }
    });
};

export const deleteCard = cardId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/cards/${cardId}`,
    });
};
