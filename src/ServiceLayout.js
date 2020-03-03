import React from 'react';

const ServiceLayout = (prop)=> {
    const myStyle = {
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",  
        flexFlow: "row-reverse wrap",
    }

    return (     
    <div className="container">
        <h2></h2>
        <p align="center">Select the service that you're looking for from the list below</p>
        <div style={myStyle}>
            {prop.children}
        </div>
    </div>
    )
}

export default ServiceLayout;
