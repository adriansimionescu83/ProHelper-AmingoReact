import React from 'react';

const MyFeed = (prop) => {
    const myStyle = {
      width: "18rem"
    }
  
  return (
  <div className="card" style={myStyle}>
    <h2>
    <img src={prop.image} className="card-img-top" alt="Testimonial" width="200" height="200"/></h2>
    <div className="card-body">
      <h5 className="card-title">{prop.title}</h5>
      <p className="card-text">{prop.body}</p>
        <a href="#" className="btn btn-primary">{prop.button}</a>
    </div>
  </div>
  )
  }

  export default MyFeed;