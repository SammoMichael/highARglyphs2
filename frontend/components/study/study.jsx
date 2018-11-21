import React from 'react';
import CardStudyItem from '../card/card_study_item';

class Study extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;  
        // this.handleKeydown = this.handleKeydown.bind(this);      
    }   
    
    
    componentDidMount() {
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId);
        document.addEventListener('keydown', this.handleKeydown);
    }

    render() {
        const cards = Object.values(this.props.cards.map((card, idx) => (
        <CardStudyItem 
            className="card-study-item"
            key={idx}
            front={card.front}
            back={card.back}
            deckId={card.deckId} />
        )));
        return (
            <ul>
                <h1>Study</h1>
               {cards}
            </ul>
        );
    }
}
// handleKeydown (e) {
//     const {deck} = this.props;
//     if (e.keycode === 37) {
//         toggle(cardFace)
//     }
//     if (e.keycode === 39) {
//         toggle(cardFace)
//     }
//     if (e.keycode === 38) {
//         this.props.history.push(`/study/${cardId - 1}`)
//     }
//     if (e.keycode === 40) {
//         this.props.history.push(`/study/${cardId + 1}`)
//     }
// }

export default Study; 

