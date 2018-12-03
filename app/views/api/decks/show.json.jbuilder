json.deck do
  json.partial! 'api/decks/deck', deck: @deck, count: @deck.cards.count
end