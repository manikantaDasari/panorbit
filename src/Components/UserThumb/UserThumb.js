import React from 'react';
import './UserThumb.scss'
export const UserThumb=({name, profilepicture})=>(

   <div className="userThumb">
      
      <div style={{ backgroundImage: `url(${profilepicture})`}} className='avatar'></div>
      <p className='pl-3 m-0'>{name}</p>
   </div>

)