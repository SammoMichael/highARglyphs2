import React from 'react';
import DeckIndexItem from './deck_index_item';
import { Route } from 'react-router-dom';

class DeckIndex extends React.Component {
    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        const decks = this.props.decks.map((deck) => (
          <DeckIndexItem
                key={deck.id}
                deck={deck} />
            ));
        
        return (
          <div>  
            <ul className="deck-index-item">
                { decks }
            </ul>
            <nav className="create-deck-button">
                <button className="create-button" 
                onClick={() => this.props.openModal('create')}>
                Create Deck
                </button>
            </nav>
          </div>
        );
    }
}
export default DeckIndex;
