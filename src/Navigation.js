import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        //---- Navigation Bar -----
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container-fluid">
                <Link className="navbar-brand js-scroll-trigger" to="/">Pro Helper</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/Services">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/testimonials">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/workers">Workers</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/customer/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="/customer/register">Register</Link>
                        </li>                     
                        
                    </ul>
                </div>
            </div>
            </nav>
        </div>    
    )
}
export default Navigation;