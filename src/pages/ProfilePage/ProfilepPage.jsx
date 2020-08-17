import React from 'react';
import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/users/user-selector";
import { createStructuredSelector } from "reselect";
import { ProfileFieldItem } from '../../Components/ProfileField/ProfileField';

// css
import './ProfilePage.scss';

const ProfilePage=({currentUser})=>{

   // destructres the required values from currentuser
   const{name,username,email,profilepicture,address,phone,website,company} = currentUser;
   
   // destructres the required values from address

   const{street,suite,city,zipcode,geo}=address


   return(
      <div className="col-md-12 profile-container d-flex">
         <div className="col-md-5 left-container">

               <div className="profile-bio">
                  <div style={{ backgroundImage: `url(${profilepicture})`}} className='avatar'></div>
                  <h3>{name}</h3>
                  <ul className='p-0'>
                     <ProfileFieldItem keyName={'Username'} value={username}/>
                     <ProfileFieldItem keyName={'e-mail'} value={email}/>
                     <ProfileFieldItem keyName={'Phone'} value={phone}/>
                     <ProfileFieldItem keyName={'Website'} value={website}/>                         
                  </ul>
               </div>

               <hr className='divider'/>

               <div className="profile-work">
                  <p className='sub'>Company</p>
                  <ul className='p-0'>
                     {  
                        // generates a array of key value pair for each 

                         Object.entries(company).map( (prop,i)=> 
                           <ProfileFieldItem key={i} keyName={prop[0]} value={prop[1]}/>
                        )                     
                         
                     }
                     
                  </ul>

               </div>

         </div>
         <div className="col-md-7 right-container">
            <p className="sub">Address :</p>

            <ul className='p-0'>
                     <ProfileFieldItem keyName={'Street'} value={street}/>
                     <ProfileFieldItem keyName={'Suite'} value={suite}/>
                     <ProfileFieldItem keyName={'City'} value={city}/>
                     <ProfileFieldItem keyName={'Zipcode'} value={zipcode}/>
            </ul>
            <div className="map">
               <div className="location-container">               
                  <iframe title='location' height='100%' width='100%' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"src ={`https://maps.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`}></iframe>
               </div>
               <p className='text-right mt-1 co-ordinates' ><span className='lat'>Lat: {geo.lat} </span> <span className='long'> Long: {geo.lng}</span></p>

            </div>
            

         </div>
      </div>
   )
}

const mapStateToProps= createStructuredSelector({
   currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(ProfilePage)