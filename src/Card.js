import React from 'react';

const MyCard = (prop)=>{
return (
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={prop.link}>
            <img src={prop.image} alt="Pic" className="rounded" width="500" height="300" />
            <div className="portfolio-box-caption">
              <div className="service-category text-white-50">{prop.category}</div>
           </div>
          </a>
        </div>
)
}
export default MyCard;
