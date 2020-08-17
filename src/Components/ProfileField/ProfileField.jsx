import React from 'react';
import './ProfileField.scss';

export const ProfileFieldItem=({keyName,value})=>(
   <li className='row'>
      <div className='col-md-12 item p-0'>
          <div className="key col-md-5 d-inline-flex">{keyName}</div>
          <div className="col-md-1 d-inline-flex">:</div> 
          <div className='value col-md-5 d-inline-flex'>{value}</div></div>
   </li>
)