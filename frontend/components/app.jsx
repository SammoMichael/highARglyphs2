import React form 'react';
import { Provider } from 'react-redux';
import { Hashrouter } from 'react-router-dom';

import App from './app';

const root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

export default root;