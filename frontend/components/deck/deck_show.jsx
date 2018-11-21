import React from 'react';

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
                    <li className="deck-title">{deck.title}</li>
                    <div className="deck-controls">
                        <button className='study-button'>Study</button>
                        <button className='edit-button'>Edit Cards</button>
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
