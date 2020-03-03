import React from 'react';

const WorkerCard = (prop) => {
    const myStyle= {
      width: "20rem"
    }
  
  return (
    <div className="card" style={myStyle}>
    <h2>
    <img src={prop.photo} className="card-img-top" alt="Umbrella" width="200" height="200"/></h2>
    <div className="card-body">
    <h5 className="card-title">Name: {prop.firstname} {prop.lastname}</h5>
      <p className="card-text">Email: {prop.email}</p>
      <p className="card-text">Phone Number: {prop.phonenumber}</p>
        <a href="/services" className="btn btn-primary">Provided Services</a>
    </div>
  </div>
  )
  }

  export default WorkerCard;