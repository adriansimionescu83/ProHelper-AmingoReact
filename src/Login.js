import './css/creative.css';
import React, { useState } from 'react';

    

const Login = ()=>{
    let customerEmail, customerPassword;

    const [state, setState] = useState(
        {saved: false}
    )

    const sendLogin = () => {
        // Fetch request goes
        fetch(`${process.env.REACT_APP_BACKEND_URL}customer/login`, 
        {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: customerEmail.value,
                password: customerPassword.value,                
            })
        })
        .then(
            (response)=>response.json()
        )
        .then(
            (result)=> {
                // 1. Save the JWT in sessionStorage
                sessionStorage.setItem('jwt', result.token)

                // 2. Set the loggedIn global state to true
                setGlobalState({
                    ...globalState,
                    loggedIn: true
                })
            }
        )
    }

if(state.saved === false) {
    return(
        <div className="container feed-form">
        <img className="mb-4" src="https://img.icons8.com/cute-clipart/2x/login-rounded-down.png" alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">
                    Enter your email
                </label><br/>
                <input ref={(elem)=>customerEmail = elem} type="text" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">
                    Enter your password
                </label><br/>
                <input ref={(elem)=>customerPassword = elem} type="password" />
            </div>
            <button 
                onClick={sendLogin}
                type="button" 
                className="btn btn-primary">
                    Submit
            </button>
        </form>
    </div>
    )
}else {
    return(<p>Thank you for your registration. You may login using your email and password!</p>)

}
}

export default Login;