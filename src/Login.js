import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';
import './css/creative.css';
import MyBigBanner from './BigBanner';

const LoginPage = ()=>{
    return(
        <div className="page">            
            <Navigation/>
            <Banner/>
            <MyBigBanner/>
        </div>
    )
}

export default LoginPage;