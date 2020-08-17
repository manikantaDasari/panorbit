import {chatActionsTypes} from './chat-actionTypes';
import {addMessageToRoom} from './chart-utils'

const INITIAL_STATE ={
   chatUser:null,
   rooms:[]
}

const chatReducer=(state=INITIAL_STATE,action)=>{
   switch (action.type) {
      case chatActionsTypes.SET_CHAT_USER:
         return{
            ...state,
            chatUser:action.payload
         };
      case chatActionsTypes.SEND_MESSAGE:
         return{
            ...state,
            rooms:addMessageToRoom(state.rooms, action.payload)
         }

      case chatActionsTypes.CLEAR_CHAT_ROOM:
         return{
            ...state,
            rooms:[]
         }

         default:
            return state;
      }
}

export default chatReducer