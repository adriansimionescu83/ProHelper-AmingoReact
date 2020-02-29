import React from 'react';

const MyCardSection = (prop) =>{
    return(
    <section id="portfolio">
      <div className="container-fluid p-0">
        <div className="row no-gutters align-items-stretch">
            {prop.children}
        </div>
      </div>
    </section>   
    )
}
export default MyCardSection;