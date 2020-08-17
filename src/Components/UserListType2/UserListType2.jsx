import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";

import {setChatUser} from '../../Redux/chat/chat-actions';
import {selectUserArray} from "../../Redux/users/user-selector";
import {selectCurrentUser} from '../../Redux/users/user-selector';


// styles
import './UserListType2.scss';
import { UserThumb } from '../UserThumb/UserThumb';


const UsersListType1 =({users, setChatUser,currentUser})=>{
   
   return(
      <ul className='userList'>
         {  
            // filters the cuurent user from the user 
            
            users.filter(user=>user.id !== currentUser.id).map((user,i)=>(            
                  <li className='user' key={user.id} onClick={()=>setChatUser(user)}>
                     <UserThumb {...user}/>

                     {/* generates random boolen to set the users state*/}

                     <div className={`status ${Math.random() >= 0.5?'active':'inactive'}`}></div>

                  </li>                              
            ))
         }
      </ul>
   )
}

const mapStateToProps= createStructuredSelector({
   users:selectUserArray,
   currentUser:selectCurrentUser
})

const mapDispatchToProps= dispatch=>({
   setChatUser: user=>dispatch(setChatUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(UsersListType1)

