import React from 'react';

const TestimonialSection = (prop)=> {
    return (     
    <div className="container">
        <h2>Other customers have left their feedback</h2>
        <p>Hard to decide which worker to contract or trust? Check out the testimonials our client provided to make sure you take the right decision.</p>
        <p>We encourage you to leave a testimonial once the job is done so that we can keep our database relevant for new customers. Thank you. </p><br/>
            {prop.children}
    </div>
    )
}

export default TestimonialSection;


