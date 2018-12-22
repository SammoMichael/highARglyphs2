import React from 'react';

class Speech extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchString: '', transcript: window.transcript };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        // this.props.searchDecks(e.currentTarget.value.toLowerCase());
    }

    handleSubmit(e) {
        this.setState({ transcript: window.transcript });
    }

    render() {
        let recognizing;
        let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.continuous = true;
        reset();
        recognition.onend = reset();

        recognition.onresult = function (event) {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    textarea.value += event.results[i][0].transcript;
                    const transcript = event.results[i][0].transcript;
                    if (transcript === 'next') { window.handleClickNext(); }
                    if (transcript === 'turn') { window.handleClickFlip(); }
                    window.transcript = transcript;
                    window.textarea.value = textarea.value;
                }
            }
        };

        function reset() {
            recognizing = false;
        }

        function toggleStartStop() {
            if (recognizing) {
                recognition.stop();
                // window.saveCards(window.cards) || window.createDeck(window.deck);
                // window.searchDecks(window.transcript.toLowerCase());
                textarea.value = "";
                reset();
            } else {
                recognition.start();
                recognizing = true;
            }
        }
        const transcript = this.state.transcript;
        
        return (    
            <div>
                <i className="fas fa-search search-icon"></i>
                <input
                    id="textarea"
                    className="search-field"
                    type="text"
                    placeholder="Click record to speak"
                    value={this.state.searchString}
                    onChange={this.handleChange}></input>
                <i className="fas fa-microphone-alt mic"></i>
                <button className="record-button" id="button" onClick={() => toggleStartStop()}>Record/Submit</button>

            </div>
        );
    }
}
export default Speech;
