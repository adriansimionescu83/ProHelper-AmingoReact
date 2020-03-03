import './css/creative.css';
import React, {useContext, useState} from 'react';
import AppContext from './AppContext';

const MyFeed = (prop) => {
return (   
  <div className="media border p-3">
    <div className="media-left">
      <img className="img-fluid" src={prop.image} alt={prop.title} className="mr-3 mt-3 rounded" width="160"/>
    </div>
    <div className="media-body">
      <h4 className="media-heading">{prop.title}</h4>
      <p>{prop.description}</p>
    </div>
    <hr/>
  </div>
  )
  }

  export default MyFeed;