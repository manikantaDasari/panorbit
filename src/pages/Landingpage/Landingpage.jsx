import React, {useEffect} from 'react';
import {connect} from 'react-redux'

// api call
import {fetchUsers}from '../../utils';

// components
import UsersListType1 from '../../Components/UserListType1/UserListType1';

// actions
import {setUsers}from '../../Redux/users/user-actions'

// styles
import './Landingpage.scss';

const LandingPage = ({users, setUsers})=>{

      useEffect(()=>{
         (async()=>{
            const fetchedUsers = await fetchUsers();
            setUsers(fetchedUsers)
         })();
      },[setUsers]);
   
   return(  

      <div className='landing-page'>
         <div className='lp-container'>
            <div className="header"> 

               {/*svg code for background  */}

                  <svg width="1440" height="473" viewBox="0 0 1440 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-1 286V46V20H1449V410L1327 448C974 513 806 437 663 364C520 291 305 376 167 384C56.6 390.4 9 321.333 -1 286Z" fill="url(#paint0_linear)" fillOpacity="0.2"/>
                  <path d="M-1 266V26V0H1449V390L1327 428C974 493 806 417 663 344C520 271 305 356 167 364C56.6 370.4 9 301.333 -1 266Z" fill="url(#paint1_linear)"/>
                  <defs>
                  <linearGradient id="paint0_linear" x1="75" y1="438" x2="1377" y2="82" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#702CC8"/>
                  <stop offset="1" stopColor="#3442C8"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="75" y1="418" x2="1377" y2="62" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#702CC8"/>
                  <stop offset="1" stopColor="#3442C8"/>
                  </linearGradient>
                  </defs>
                  </svg>
            </div>
            <div className="usersList">
               <div className="top">
                  <p className='heading'>Select an Account</p>
               </div>
               <div className="users customScrollBar">
                  {
                     users.length?<UsersListType1  users={users} />:'loading...'
                  }
               </div>
            </div>
         </div>

      </div>
   )
}

const mapStateToProps= state=>({
   users: state.user.users
})

const mapDispatchToProps= dispatch=>({
   setUsers: users=>dispatch(setUsers(users))
})

export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);