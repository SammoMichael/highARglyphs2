export const fetchDecks = () => dispatch => {
  return $.ajax({
    method: 'GET',
    url: 'api/decks',
    });
};
export const fetchDeck = (deckId) => dispatch => {
  return $.ajax({
    method: 'GET',
    url: `api/decks/${deckId}`,
    });
};
export const createDeck = (deck) => dispatch => {
  return $.ajax({
    method: 'POST',
    url: 'api/decks',
    data: { deck }
    });
};

export const deleteDeck = (deckId) => dispatch => {
  return $.ajax({
    method: 'DELETE',
      url: `api/decks/${deckId}`,
    });
};

