import { merge } from 'lodash';
import { combinerReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';

    export default combinerReducers({
        session: sessionReducer,
        users: usersReducer
    });

