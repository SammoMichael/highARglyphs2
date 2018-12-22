import 'aframe';
import React from 'react';
import Speech from '../speech/speech';
import { Entity, Scene } from 'react-aframe-ar';

class Ar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currIdx: 0, flipped: true, numCards: this.props.numCards };
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickFlip = this.handleClickFlip.bind(this);
        this.endSession = this.endSession.bind(this);
        window.handleClickNext = this.handleClickNext;
        window.handleClickFlip = this.handleClickFlip;
    } 

    componentDidMount() {
        this.setState({ numCards: this.props.cards.length });
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId);
    }

    handleClickFlip() {
        (this.state.flipped ?
            this.setState({ flipped: false }) :
            this.setState({ flipped: true }));
    }

    handleClickNext() {
        this.setState({ numCards: this.props.cards.length });
        const newIdx = (this.state.currIdx + 1) % this.props.cards.length;
        this.setState({ currIdx: newIdx });
        this.setState({ flipped: true });
    }

    endSession() {
        setTimeout(location.reload(), 1000);
        location.assign('https://higharglyphs.herokuapp.com/#/');
    }

    render() {
        const card = Object.values(this.props.cards)[this.state.currIdx] || {}; 
        return (
            <div>
                <div id="ascene" className="myBtn">
                <Speech / >
                <button onClick={this.handleClickNext} id="myBtn">
                    Next 3d FlashCard
                 </button>
                <button onClick={this.handleClickFlip} id="myBtn">
                    See Answer
                </button>
                <button onClick={this.endSession} id="myBtn">
                    Main Menu
                </button>
            </div >
            <Scene id="scene" artoolkit={{ debugUIEnabled: 'false', sourceType: 'webcam', trackingMethod: 'best' }}>
                <a-marker-camera preset="hiro">
                        <a-plane position="-2 1 0" height="3" width="8" color="black"></a-plane>
                    <a-text position="-3.5 2 0" value={this.state.flipped ? card.front : card.back}></a-text>
                </a-marker-camera>
                    {/* <Entity */}
                    {/* // primitive="a-octahedron"
                    // detail={2}
                    // radius={2}
                    // position={[0, 0]}
                    // color="#FAFAF1"  */}
                    {/* <Entity id="mod" gltf-model="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" /> */}
                    {/* src="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" */}
                   
                    {/* <Entity camera /> */}
            </Scene>
        </div> 
        );
    }
}
export default Ar;
