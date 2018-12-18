import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';
import Speech from '../speech/speech';

class CardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
        this.handleClickNew = this.handleClickNew.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.reset = this.reset.bind(this);
        this.makeBlank = this.makeBlank.bind(this);
    }

    componentDidMount() {
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId)
        .then((payload) => {
            this.setState({ cards: Object.values(payload.cards), oldState: Object.values(payload.cards) });
            this.makeBlank();
        });
    }

    handleClickNew(e) {
        e.preventDefault();
        this.setState({ cards: (this.state.cards)
            .concat([{ deckId: this.props.match.params.deckId }]) });
    }

    handleClickDelete(card, idx) {
        const state = merge({}, this.state);
        state.cards.splice(idx, 1);
        if (card.id) {
            this.props.deleteCard(card.id);
        }
        this.setState(state);
    }

    update(field, idx) {
        return e => {
            const state = merge({}, this.state);
            state.cards[idx][field] = e.currentTarget.value;
            this.setState(state);
        };
    }
    
    reset() {
        this.setState({ cards: this.state.oldState });
    }

    makeBlank() {
        if (!this.state.cards.length) {
            this.setState({
                cards: (this.state.cards)
                    .concat([{ deckId: this.props.match.params.deckId }]),
                oldState: (this.state.cards)
                    .concat([{ deckId: this.props.match.params.deckId }]) });
        }
    }
    handleSearch(e) {
        this.setState({ searchString: e.currentTarget.value });
        if (e.currentTarget.value !== '') {
            this.props.searchDecks(this.state.transcript);
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
        var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        // let recognition = new webkitSpeechRecognition() || SpeechRecognition();
        recognition.continuous = true;
        reset();
        recognition.onend = reset();

        recognition.onresult = function (event) {
            for (let i = event.resultIndex; i < event.results.length; ++i) {
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
                    onClick={() => toggleStartStop()}
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

    render() {
        const cards = Object.values(this.state.cards.map((card, idx) => (
        <span
            className="card-num-span"
            id={idx + 1}
            key={idx}>
            <h3 className="card-num">{idx + 1}</h3>
            <textarea 
                className='front-textarea'
                onChange={this.update('front', idx)}
                defaultValue={card.front || window.transcript || ''}>
            </textarea>
            <span className="cell"></span>
            <textarea
                className='back-textarea' 
                onChange={this.update('back', idx)}
                defaultValue={card.back || ''}>
            </textarea>
                <i className="fas fa-times-circle fa-2x" onClick={() => this.handleClickDelete(card, idx)}></i>
            {/* <Speech /> */}
       </span>)
        ));
        return (
            <div className="edit-card-div">
                <h2 className="flashcard-in-title"> Flashcards in "{(this.props.deck ? this.props.deck.title : "")}"</h2>
                <div className="table-headers">
                    <span className='hashtag-span'>#</span>
                    <span className="questions-span">Question</span>
                    <span className="answers-span">Answer</span>
               </div>
                <ul className="card-list-ul">{ cards }
                <span className="directions-span">To add a row, press TAB or click the button below</span>
                    <div className="card-index-div">
                        <span className="card-index-control">
                            <i className="fas fa-plus-circle" onClick={this.handleClickNew}>Add Card</i>
                            <span className="right-side-buttons">
                                <button className="reset-button" onClick={() => this.reset()}>Reset</button>
                                <Link to={`/decks/${this.props.match.params.deckId}`} className='save-card-button' onClick={() => {
                                    this.props.saveCards(Object.values(this.state.cards));
                                }}>Save this Deck</Link>
                                <Link to={`/study/${(this.props.deck ? this.props.deck.id : '')}`} className='study-card-button'>Start Studying</Link>
                            </span>
                        </span>
                    </div>
                </ul>
            </div>
        );
    }
}

export default CardIndex;
