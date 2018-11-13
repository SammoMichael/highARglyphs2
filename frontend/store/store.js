import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import SessionReducer from '../reducers/session_reducer';

const configureStore = (preloadedState = {}) => (
    createstore(
        RootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
);

export default configureStore;
