import React from 'react';
import Back from './back';

const Ar = () => {
    
    return (
        <>
        <div>
            {/* <Back /> */}
            <button id="myBtn">
                HIDE OBJECTS
	</button>
        </div>
            <a-scene embedded arjs='trackingMethod: best;'>
                <a-gltf-model src="https://rawgit.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf"></a-gltf-model>
                <a-marker-camera preset='hiro'></a-marker-camera>
                <a-camera-static />
            </a-scene>
    <a-scene embedded arjs='trackingMethod: best;'>

	<a-anchor hit-testing-enabled='true'>

		<a-box position='0 0.5 0' material='opacity: 0.5; side:double; color:red;'>
                <a-torus-knot radius='0.26' radius-tubular='0.05'>
                    <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
                </a-torus-knot>
            </a-box>

        </a-anchor>

	<a-camera-static />

    </a-scene></>
    );
};

export default Ar;
