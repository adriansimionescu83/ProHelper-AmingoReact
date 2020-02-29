import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage.js';
import ServicesPage from './Services.js';
import ContactPage from './Contact.js';
import WorkersPage from './Workers.js';
import TestimonialsPage from './Testimonials.js';
import LoginPage from './Login.js';
import CustomerRegister from './CustomerRegister.js';
import Navigation from './Navigation';
import Footer from './Footer';
import MyBigBanner from './BigBanner.js';

const LayoutRoute = (prop) =>{
    return(
        <div>
        <Navigation location={prop.location.pathname}/>
        <MyBigBanner/>
                <Route 
                    path={prop.path}
                    exact={prop.exact}
                    component={prop.component}/>
        <Footer location={prop.location.pathname}/>
        </div>
    )
}
const App = () => {
    const [globalState, setGlobalState] = useState(
        {
          loggedIn: false,
        }
    )
    return(
        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>            
            <Switch>
                <Route path="/" exact={true} component={LandingPage}/>
                <LayoutRoute path="/services" component={ServicesPage}/>
                <LayoutRoute path="/contact" component={ContactPage}/>
                <LayoutRoute path="/workers" component={WorkersPage}/>
                <LayoutRoute path="/testimonials" component={TestimonialsPage}/>
                <LayoutRoute path="/customer/register" component={CustomerRegister}/>
                <LayoutRoute path="/user/login" component={LoginPage}/>
            </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;