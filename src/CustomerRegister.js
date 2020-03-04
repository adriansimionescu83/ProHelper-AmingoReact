import React, { useState } from 'react';

const CustomerRegister = () => {

    let customerFirstName, customerLastName, customerEmail, customerPassword, customerPhoneNumber, customerDateOfBirth;

    const [state, setState] = useState(
        {saved: false}
    )

    const sendRegistration = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}customer/register`, 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                firstname: customerFirstName.value,
                lastname: customerLastName.value,
                email: customerEmail.value,
                password: customerPassword.value, 
                phonenumber: customerPhoneNumber.value,
                dateofbirth: customerDateOfBirth.value
            })
        })
        .then(response =>setState({...state, saved: true}))
    }

    if(state.saved === false) {
        return (
            <div className="container feed-form">
            <img className="mb-4" src="https://img.icons8.com/cute-clipart/2x/login-rounded-down.png" alt="" width="72" height="72"/>
         <h1 className="h3 mb-3 font-weight-normal">Please register</h1>
            <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input type="text" className="form-control" id="inputFirstName" placeholder="FirstName" ref={(elem)=>customerFirstName = elem}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input type="text" className="form-control" id="inputLastName" placeholder="LastName" ref={(elem)=>customerLastName = elem}/>
                </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" ref={(elem)=>customerEmail = elem}/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" ref={(elem)=>customerPassword = elem}/>
              </div>
            </div>
            <div className="form-row">
             <div className="form-group col-md-6">
              <label htmlFor="inputPhoneNumber">Phone Number</label>
              <input type="tel" className="form-control" id="inputPhone" placeholder="+971 / XXXXXXXXX" ref={(elem)=>customerPhoneNumber = elem}/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputDateOfBirth">Date of Birth</label>
              <input type="date" className="form-control" id="inputDateOfBirth" placeholder="mm/dd/yyyy" ref={(elem)=>customerDateOfBirth = elem}/>
            </div>
            </div>
            <button onClick={sendRegistration} type="button">Register</button>
          </form>  
          </div>        
        )
    } else {
        return(<p>Thank you for your registration. You may login using your email and password!</p>)
    }
}

export default CustomerRegister;