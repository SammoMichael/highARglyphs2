import React from 'react';
import { Link } from 'react-router-dom';

class DeckShow extends React.Component {
    componentDidMount() {
        this.props.fetchDeck(this.props.match.params.deckId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.deckId !== this.props.match.params.deckId) {
            this.props.fetchDeck(this.props.match.params.deckId);
        }
    }

    render() {
        const { deck } = this.props;
        return (
            <section className="deck-detail">
                <ul className='deck-detail-box'>
                    <span className="placeholder-img"></span>
                    <li className="deck-title">{deck.title}</li>
                    <div className="deck-controls">
                        <Link to={`/study/${deck.id}`} className='study-button'>Study</Link>
                        <Link to={`/cards/${deck.id}`} className='edit-button'>Edit Cards</Link>
                        <button 
                        className='delete-button' 
                        onClick={() => this.props.deleteDeck(this.props.deck.id)
                        .then(this.props.history.push('/decks'))}
                        >Delete</button>
                    </div>
                </ul>
            </section>
        );
    }
}


export default DeckShow;
