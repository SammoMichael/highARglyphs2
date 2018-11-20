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
        console.log({ deck })
        return (
            <section className="deck-detail">
                <li>
                    {deck.title}
                </li>
            </section>
        );
    }
}


export default DeckShow;
