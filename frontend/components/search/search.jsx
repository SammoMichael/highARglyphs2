import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: '', transcript: window.transcript };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearTranscript = this.clearTranscript.bind(this);
        window.searchDecks = this.props.searchDecks;
    }

    componentDidMount() {
        this.props.searchDecks(this.state.searchString);
    }
    
    handleSearch(e) {
        this.setState({ searchString: e.currentTarget.value });
        if (e.currentTarget.value !== '') {
            this.props.searchDecks(this.state.transcript) 
        } else {
        this.props.searchDecks(e.currentTarget.value.toLowerCase());
        }
    }
    handleChange(e) {
        this.setState({ searchString: e.currentTarget.value });
        this.props.searchDecks(e.currentTarget.value.toLowerCase());
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
        // this.setState({ transcript: ''});
        // window.textarea = '';
        // textarea.value = '';
        
    }
    
    render() {
        var recognizing;
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        // var recognition = new webkitSpeechRecognition() || SpeechRecognition();
        recognition.continuous = true;
        reset();
        recognition.onend = reset();

        recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    textarea.value += event.results[i][0].transcript;
                    const transcript = event.results[i][0].transcript;
                    window.transcript = transcript;
                    window.textarea.value = textarea.value;
                }
            }
        }

        function reset() {
            recognizing = false;
        }

        function toggleStartStop() {
            if (recognizing) {
                recognition.stop();
                window.searchDecks(window.transcript.toLowerCase());
                textarea.value = "";
                reset();
            } else {
                recognition.start();
                recognizing = true;
            }
        }
        const transcript = this.state.transcript;
        let response = (Object.values(this.props.decks).map(deck => {
            return (
                <li className="search-result-line" key={deck.id}>{deck.title}</li>) 
            }))
        let bestMatch = (Object.values(this.props.decks).map(deck => deck.title))
        let firstBestMatch = bestMatch.filter(title => title.slice(0, this.state.searchString.length).toLowerCase() === this.state.searchString.toLowerCase());
    return (
        <>
            {/* <input 
            value={this.state.transcript}
            onChange={() => this.handleChange}
            id="textarea"></input> */}

        
            <i className="fas fa-search search-icon"></i>
        <input
            id="textarea"
            className="search-field"
            type="text"
            placeholder="search"
            value={this.state.searchString}
            onChange={this.handleChange}></input>
                <h1 className="search-result" >{this.state.searchString === "" ? null : firstBestMatch.map((match, key) => <span key={key}>{match}<br></br></span>) }</h1>
            <i className="fas fa-microphone-alt mic"></i>
        <button className="record-button" id="button" onClick={() => toggleStartStop()}>Record/Submit</button>
        {/* <input 
            type="text"
            value={transcript}
            onChange={this.handleSubmit}
            onMouseOver={() => this.handleSubmit}
            onClick={this.handleSubmit}></input>
            <h3>{this.state.transcript}</h3>
        <button onClick={() => reset()}>Clear</button>
            <h1 className="search-result" >{this.state.searchString === "" ? null : firstBestMatch.map(match => <span>{match}<br></br></span>)}</h1>            */}
            {/* <h1 className="search-response">{response}</h1> */}

        </>
        );
    }
}
export default Search;
