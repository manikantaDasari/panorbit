import {userActionsTypes} from './user-actionTypes' 

const INITIAL_STATE ={
   currentUser:null,
   users:[]
}


const userReducer =(state=INITIAL_STATE, action)=>{
   switch (action.type) {
      case userActionsTypes.SET_CURRENT_USER:
         return{
            ...state,
            currentUser:action.payload
         };
      
         case userActionsTypes.SET_ALL_USERS:
            return{
               ...state,
               users: action.payload
            };
   
      default:
         return state;
   }
}

export default userReducer