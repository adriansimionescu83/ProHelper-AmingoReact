import React, {useState, useContext} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import AppContext from './AppContext.js';
import LandingPage from './LandingPage.js';
import Services from './Services.js';
import ContactPage from './Contact.js';
import Workers from './Workers.js';
import Testimonials from './Testimonials.js';
import Login from './Login.js';
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
                <LayoutRoute path="/services" component={Services}/>
                <LayoutRoute path="/contact" component={ContactPage}/>
                <LayoutRoute path="/workers" component={Workers}/>
                <LayoutRoute path="/testimonials" component={Testimonials}/>
                <LayoutRoute path="/customer/register" component={CustomerRegister}/>
                <LayoutRoute path="/customer/login" component={Login}/>
            </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;