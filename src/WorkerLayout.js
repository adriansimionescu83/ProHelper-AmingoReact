import React from 'react';

const WorkerLayout = (prop)=> {
    const myStyle = {
        display: "flex",
        margin: "0 auto",
        justifyContent: "center",  
        flexFlow: "row-reverse wrap",
    }

    return (     
    <div className="container">
        <h2>Magic hands ready to help</h2>
        <p>Browse through the list of workers to select the worker and vizualize the testimonials</p>
        <div style={myStyle}>
            {prop.children}
            </div>
    </div>
    )
}

export default WorkerLayout;

