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
            <ul>
            { decks }
            </ul>
        );
    }
}
export default DeckIndex;
