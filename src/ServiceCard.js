import React from 'react';

const ServiceCard = (prop) => {
    const myStyle= {
      width: "25rem"
    }  
  return (
<div className="col-lg-4 col-md-6 text-center">
<div className="mt-5">    
<h2>
<img src={prop.image} width="30" height="30"/>
</h2>
    <h3 className="h4 mb-2">Service: {prop.name}</h3>
    <p className="text-muted mb-0">Country: {prop.country}</p>
    <p className="text-muted mb-0">City: {prop.city}</p>
    <p className="text-muted mb-0">Description: {prop.description}</p>
</div>
</div>      
        )
}

  export default ServiceCard;