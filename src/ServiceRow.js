import React, {useContext, useState} from 'react';
import AppContext from './AppContext';

const ServiceRow = (prop)=>{
       
    return(       
        <section className="page-section" id="services">
        <div className="container">
        <h2 className="text-center mt-0">{prop.category}</h2>
        <hr className="divider my-4"/>
        <div className="row">
           {prop.children}
        </div>
        </div>
    </section>
    )
    }
    
    export default ServiceRow;
      
