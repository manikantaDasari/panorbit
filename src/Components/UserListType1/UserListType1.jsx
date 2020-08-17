import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";


import {setCurrentUser} from '../../Redux/users/user-actions';
import {selectUserArray } from "../../Redux/users/user-selector";
import {clearChatRoom} from '../../Redux/chat/chat-actions';

// styles

import './UserListType1.scss';
import { UserThumb } from '../UserThumb/UserThumb';


const UsersListType1 =({users, setCurrentUser})=>{

   // set the cuurent users to the store.
   
   const handleClick=(user)=>{
      setCurrentUser(user);
      clearChatRoom();
   }



   return(
      <ul className='userList'>

         {/* loops through the fetched array from api*/}

         {
            users.map((user,i)=>(            
                  <li className='user' key={user.id} onClick={()=>handleClick(user)}>
                     <UserThumb {...user}/>
                  </li>                              
            ))
         }
      </ul>
   )
}

const mapStateToProps= createStructuredSelector({
   users:selectUserArray
})

const mapDispatchToProps= dispatch=>({
   setCurrentUser: user=>dispatch(setCurrentUser(user)),
   clearChatRoom: dispatch(clearChatRoom())
})


export default connect(mapStateToProps,mapDispatchToProps)(UsersListType1)