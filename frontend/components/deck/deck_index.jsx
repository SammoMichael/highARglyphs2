import React from 'react';

class DeckIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {
        const decks = this.props.decks.map(deck => {
            return ( <DeckIndexItem
                id={deck.id}
                deck={deck} />
            )
        })
        return (
            <>
            <ul>
            { decks }
            </ul>
            <DeckCreateForm /></>
        )
    }
}
