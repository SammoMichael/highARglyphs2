import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions.js';

document.addEventListener('DOMContentLoaded', () => {
    window.login = login;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>hello apollos</h1>, root);
});
