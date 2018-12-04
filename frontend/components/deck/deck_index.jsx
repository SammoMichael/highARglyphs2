import React from 'react';
import { Link } from 'react-router-dom';
import DeckIndexItem from './deck_index_item';
import SearchContainer from '../search/search_container';

class DeckIndex extends React.Component {
    componentDidMount() {
        this.props.fetchDecks();
    }

    render() {
        <button className="create-button"
            onClick={() => this.props.openModal('create')}>
            Create Deck
                </button>

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
                        {/* <img alt="deck-thumb" src="./placeholder.png" /> */}
                    <h3 className="deck-header">Decks</h3>
                        <button className="create-button create-button2"
                            onClick={() => this.props.openModal('create')}>
                            Create Deck
                </button>
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
