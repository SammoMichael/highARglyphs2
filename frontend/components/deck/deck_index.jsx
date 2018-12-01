import React from 'react';
import { Link } from 'react-router-dom';
import DeckIndexItem from './deck_index_item';
import SearchContainer from '../search/search_container';

class DeckIndex extends React.Component {
    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        const decks = this.props.decks.map((deck) => (
            <Link className="deck-links" 
            to={`/decks/${deck.id}`} 
            key={deck.id} > 
                <DeckIndexItem
                key={deck.id}
                deck={deck} /> </Link>
                ));
                
                return (
                    <div>  
                    <SearchContainer />
                    <h3 className="deck-header"></h3>
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
