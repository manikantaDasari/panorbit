import {combineReducers} from 'redux';

import userReducer from './users/user-reducer';
import chatReducer from './chat/chat-reducer';

export default combineReducers({

   user:userReducer,
   chat: chatReducer
   
});