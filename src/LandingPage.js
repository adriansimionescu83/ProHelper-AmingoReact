import React from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/creative.css';
import Navigation from './Navigation.js';
import MyCardSection from './CardSection.js';
import MyCard from './Card.js';
import Header from './Header.js';
import Banner from './Banner.js';
import Footer from './Footer.js';
import Details from './Details.js';
import CustomerRegister from './CustomerRegister';
import TextCont from './TextCont';
import MyBigBanner from './BigBanner.js';

function LandingPage() {
  return (
    <div className="App">     
         <Navigation/>
         <MyBigBanner/>     
         <TextCont/>
          <MyCardSection>
          <MyCard category="Maintenance" image="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1" link="/services"/>
          <MyCard category="Home improving" image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1"/>
          <MyCard category="Moving" image="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-1.2.1"/>
          <MyCard category="House Helpers" image="https://images.unsplash.com/photo-1562886877-f12251816e01?ixlib=rb-1.2.1"/>
          <MyCard category="IT" image="https://images.unsplash.com/photo-1576613109753-27804de2cba8?ixlib=rb-1.2.1"/>
          <MyCard category="Various Professionals" image="https://images.unsplash.com/photo-1524224971825-8c690dec4b7c?ixlib=rb-1.2.1"/>
          </MyCardSection>
          <Details/>
          <Footer/>
    </div>
  );
}

export default LandingPage;
