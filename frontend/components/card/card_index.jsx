import React from 'react';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
    
    componentDidMount() {
        debugger
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        const cards = this.props.fetchCards(this.props.match.params.deckId);
    }

    render() {
        const cards = Object.values(this.props.cards.map((card, idx) => (
        <CardIndexItem
            key={idx}
            front={card.front}
            back={card.back}
            deckId={card.deckId} />)
        ));
        return (
            <ul>{ cards }
            </ul>
        );
    }
}

export default CardIndex;
