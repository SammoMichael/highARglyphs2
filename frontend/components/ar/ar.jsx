import 'aframe';
import React from 'react';
import Speech from '../speech/speech';
// import ReactDOM from 'react-dom';
import { Entity, Scene } from 'react-aframe-ar';

class Ar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currIdx: 0, flipped: true, numCards: this.props.numCards };
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickFlip = this.handleClickFlip.bind(this);
        this.video = document.getElementById('scene');
        window.video = this.video;
    } 

    componentDidMount() {
        this.setState({ numCards: this.props.cards.length });
        const { fetchDeck, deckId } = this.props;
        fetchDeck(deckId);
        this.props.fetchCards(this.props.match.params.deckId);
        document.addEventListener('keydown', this.handleKeydown);
        this.front = 'front';
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


    render() {
        const card = Object.values(this.props.cards)[this.state.currIdx] || {}; 
        console.log(this.props);
        console.log(card.flip);

        // console.log(window.transcript);
        return (

            <div>ar = 
                <div id="ascene" className="myBtn">
            <Speech  / >
                {/* <Back /> */}
                    <button onClick={this.handleClickNext} id="myBtn">
                Next 3d FlashCard
	        </button>
                    <button onClick={this.handleClickFlip} id="myBtn">
                See Answer
	        </button>
                    <button onClick={() => location.assign('https://higharglyphs.herokuapp.com/#/')} id="myBtn">
                Main Menu
	        </button>
        </div >
            <Scene id="scene" artoolkit={{ sourceType: 'webcam', trackingMethod: 'best' }}>
                    <a-marker-camera preset="hiro">
                        <a-plane height="3" width="3" color="black">
                    </a-plane>
                    <a-text value={this.state.flipped ? card.back : card.front} >

                    </a-text>
                    {/* <Entity */}
                        {/* // primitive="a-octahedron"
                        // detail={2}
                        // radius={2}
                        // position={[0, 0]}
                        // color="#FAFAF1"  */}
                        {/* <Entity id="mod" gltf-model="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" /> */}
                 {/* src="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf" */}

                    />
               </a-marker-camera>
                {/* <Entity camera /> */}
            </Scene>
            </div> 

        );
    }
}
export default Ar;


// import React from 'react';
// import Back from './back';

// const Ar = () => {
    
//     return (
//         <>
//     <html>
//             {/* <!doctype HTML> */}


        

//                 <head>
//                     <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
//                     <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
//                     <script src="https://rawgit.com/jeromeetienne/AR.js/master/aframe/build/aframe-ar.min.js"></script>
//                     <script src="https://rawgit.com/donmccurdy/aframe-extras/master/dist/aframe-extras.loaders.min.js"></script>
//                     <script src="https://rawgit.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/events.js"></script>
//                     <script>
//                         THREEx.ArToolkitContext.baseURL = 'https://rawgit.com/jeromeetienne/ar.js/master/three.js/'
// </script>
// </meta>
// </head>
//                     <body style="margin : 0px; overflow: scroll;">
//                         <a-scene embedded arjs="sourceType: webcam;">
//                             <a-gltf-model src="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf"></a-gltf-model>
//                             <a-marker-camera preset="hiro">
//                                 <!-- <a-box position='0 0.5 0' material="opacity: 0.5;"></a-box> -->
// 		</a-marker-camera>
//                         </a-scene>
//                     </body>

//  </html>
// </>
//     );
// };

