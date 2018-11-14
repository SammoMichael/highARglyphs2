import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions.js';
import configureStore from './store/store.js'; 
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    const store = configureStore();
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
