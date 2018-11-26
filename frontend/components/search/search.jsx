import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.searchDecks(this.state.searchString);
    }
    componentDidUpdate() {
        
    }
    handleSearch(e) {
        this.setState({ searchString: e.currentTarget.value });
        this.props.searchSong(e.currentTarget.value);
    }
    handleChange(e) {
        this.setState({ searchString: e.currentTarget.value });
        this.props.searchDecks(e.currentTarget.value).then(res => console.log(res));
        console.log(this.state.searchString)
        console.log(this.props.decks)
    }
    
    render() {
        let response = (Object.values(this.props.decks).map(deck => {
            return (
            <li key={deck.id}>{deck.title}</li>) 
        }))
    return (
        <>
        
        <input
            type="text"
            value={this.state.searchString}
            onChange={this.handleChange}></input>
            <h1>{response}</h1>

        </>
        );
    }
}
export default Search;

