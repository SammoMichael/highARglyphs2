import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: '', transcript: window.transcript };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearTranscript = this.clearTranscript.bind(this);
    }

    componentDidMount() {
        this.props.searchDecks(this.state.searchString);
    }
    
    handleSearch(e) {
        this.setState({ searchString: e.currentTarget.value });
        if (e.currentTarget.value === '') {
            this.props.searchDecks(this.state.transcript) 
        } else {
        this.props.searchDecks(e.currentTarget.value);
        }
    }
    handleChange(e) {
        this.setState({ searchString: e.currentTarget.value });
        this.props.searchDecks(e.currentTarget.value);
    }

    handleSubmit(e) {
        this.setState({ transcript: window.transcript })
        if (e.currentTarget.value === '') {
            this.props.searchDecks(this.state.transcript)
        } else {
            this.props.searchDecks(e.currentTarget.value);
        }
    }

    clearTranscript() {
        this.setState({ transcript: ''});
        window.textarea = '';
    }
    
    render() {
        const transcript = this.state.transcript;
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
        {/* <input 
            type="text"
            value={transcript}
            onChange={this.handleSubmit}
            onMouseOver={() => this.handleSubmit}
            onClick={this.handleSubmit}></input>
            <h3>{this.state.transcript}</h3>
        <button onClick={this.clearTranscript}>Clear</button>
            <h1 className="search-response">{response}</h1> */}

        </>
        );
    }
}
export default Search;

