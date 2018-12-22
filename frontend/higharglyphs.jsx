import React from 'react';
import ReactDOM from 'react-dom';
import AWS from 'aws-sdk';
import { searchDecks } from './actions/deck_actions';
import configureStore from './store/store.js'; 
import Root from './components/root';
// import Amplify from '../node_modules/aws-amplify';
import awsmobile from '../frontend/aws-exports.js';

AWS.config.update({
  region: awsmobile.aws_cognito_region,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsmobile.aws_cognito_identity_pool_id
  })
});

document.addEventListener('DOMContentLoaded', () => {
    let store;
    Amplify.configure(awsmobile);
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
