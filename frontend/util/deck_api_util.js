export const fetchDecks = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/decks',
    });
};
export const fetchDeck = (deckId) => {
  return $.ajax({
    method: 'GET',
    url: `api/decks/${deckId}`,
    });
};
export const createDeck = (deck) => {
  return $.ajax({
    method: 'POST',
    url: 'api/decks',
    data: { deck }
    });
};

export const deleteDeck = (deckId) => {
  return $.ajax({
    method: 'DELETE',
      url: `/api/decks/${deckId}`,
    });
};

export const searchDecks = (str) => {
  return $.ajax({
    method: 'GET',
    url: '/api/search',
    data: { str }
  });
};
