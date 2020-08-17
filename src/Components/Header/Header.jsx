import React ,{useState} from 'react';
import {connect}from 'react-redux';
import {withRouter} from 'react-router-dom'
import{selectCurrentUser} from '../../Redux/users/user-selector';
import {createStructuredSelector} from 'reselect';
// components
import { UserThumb } from '../UserThumb/UserThumb';
import  Dropdown  from '../DropDown/DropDown';
// styles
import './Header.scss'

const Header =({location, match,currentUser,props})=>{

   const[dropDown , setDropDown]=useState(false); 

   // gets value of current url
   const currentPage= (location.pathname).substring(1);   
  

   return(
   <>
   <div className="col-md-12 header-container d-flex justify-content-between">

      <div className="current-page">
         {currentPage?currentPage:'profile'}
      </div>

      <div className="current-user btn" onClick={()=>setDropDown(!dropDown)}>
         <UserThumb {...currentUser}/>
      </div>
   </div>
   {
      // checks the dropdown state
      
      dropDown?
      <Dropdown {...currentUser}/>: null

   }
   

   </>   
)}

const mapStateToProps=createStructuredSelector({
   currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(Header));