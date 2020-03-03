import React from 'react';
import './css/creative.css';

const Login = ()=>{
    return(
    <div className="container" align="center">
     <div className="col-lg-3 col-md-6 text-center"> 
     <form className="form-signin" wtx-context="39173EE9-4A3F-4BF6-A180-FA3519A5F79F">
      <img className="mb-4" src="https://img.icons8.com/cute-clipart/2x/login-rounded-down.png" alt="" width="72" height="72"/>
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" wtx-context="5A4A4836-C57F-4353-8000-5BFAE0B3BD2B"/>
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" wtx-context="6D12EF4F-87E5-4F0D-AFE3-75D2084884EB"/>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" wtx-context="0CCDEB60-7E8B-4407-8B58-7A266D8DF1FA"/> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    </div>  

</div>
    )
}

export default Login;