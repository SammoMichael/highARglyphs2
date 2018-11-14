// // import {
// //     RECEIVE_ERRORS
// // }

// const errorsReducer = (state = {}, action) => 
//     switch (action.type) {
//         case value:
//         case value:
//         case value:
            
import { combineReducers } from 'redux';

import session from './session_errors_reducer';

export default combineReducers({
    session
});
