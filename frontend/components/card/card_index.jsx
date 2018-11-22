import React from 'react';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.handleClickNew = this.handleClickNew.bind(this);
    }

    componentDidMount() {
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        const cards = this.props.fetchCards(this.props.match.params.deckId);
        this.setState(cards || {});
    }

    handleClickNew() {
        // this.props.createCard
    }

    

    render() {
        const cards = Object.values(this.props.cards.map((card, idx) => (
        <CardIndexItem
            id={idx + 1}
            key={idx}
            front={card.front}
            back={card.back}
            deckId={card.deckId} 
                deleteCard={this.props.deleteCard} />)
        ));
        return (
            <ul>{ cards }
            <button onClick={this.handleClickNew}>+</button>
            </ul>
        );
    }
}

export default CardIndex;
