import React from 'react';
import './css/creative.css';

const ContactForm = ()=>{
    return(
    <section className="page-section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h2 className="mt-0">Let's Get In Touch!</h2>
          <hr className="divider my-4"/>
          <p className="text-muted mb-5">Looking to find out more about us or how to become a Pro Helper professional?</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
          <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
          <div>+971 (56) 4547 964</div>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
          <a className="d-block" href="mailto:simionescuadrian@yahoo.com">simionescuadrian@yahoo.com</a>
        </div>
      </div>
    </div>
  </section>
    )
}

export default ContactForm;
