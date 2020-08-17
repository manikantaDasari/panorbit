import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from '../../Redux/users/user-actions';
import{setChatUser} from '../../Redux/chat/chat-actions'

// 
import UserListType1 from '../UserListType1/UserListType1';

// styles
import'./DropDown.scss'



const Dropdown=({setCurrentUser,profilepicture,name,email,setChatUser})=> {

   // set users values to null
      const handleSignOut=(user)=>{
         setCurrentUser(user);
         setChatUser(user)
      }
   
      return(
      <div className='dropdown-container pt-3'>

         <div className='current-user'>
            <div style={{ backgroundImage: `url(${profilepicture})`}} className='avatar'></div>
            <h5 className='m-0 p-1'>{name}</h5>
            <p>{email}</p>
            <hr/>
         </div>
         
         <div className='all-users customScrollBar' >
            <UserListType1/>
         </div>

         <button className='btn signout' onClick={()=>handleSignOut(null)}>Sign Out</button>
            


      </div>
   )
}
const mapDispatchToProps= dispatch=>({
   setCurrentUser: user=>dispatch(setCurrentUser(user)),
   setChatUser:user=>dispatch(setChatUser(user))
})


export default connect(null,mapDispatchToProps)(Dropdown)
