import React from 'react';

const Details = ()=> {
    return (
        //---- Details Section ----
        <section className="page-section" id="services">
            <div className="container">
            <h2 className="text-center mt-0">How does this work?</h2>
            <hr className="divider my-4"/>
            <div className="row">
                <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">                    
                    <h3 className="h4 mb-2">Search</h3>
                    <p className="text-muted mb-0">Choose your Helper by reviews, skills and price</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <h3 className="h4 mb-2">Request</h3>
                    <p className="text-muted mb-0">Schedule a time that works for you-as early as today</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <h3 className="h4 mb-2">Complete</h3>
                    <p className="text-muted mb-0">Chat, pay, tip and review all through one platform</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Details;