import React from 'react';

const Banner = (prop) => {

    const bannerStyle = {        
        backgroundImage: `url(${prop.photo})`,
        backgroundColor: '#a2a2a1ff',
        backgroundSize: '50%',
        backgroundPosition: 'center',
        minHeight: '20px'       
    }
    return(
<div className="jumbotron jumbotron-fluid" style={bannerStyle}>
</div>
          )
}

export default Banner;