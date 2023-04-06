import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <body className='mbody'>

    
    <div>
  <div className="containera">
    <div className="title">Login</div>
    <div className="content">
      <form className='lform' action="#">
        <div className="user-detailsa">
          
          <div className="input-boxa">
            <span className="detailsa">Email</span>
            <input className="linput" type="text" placeholder="Enter your email" required />
          </div>
         
          <div className="input-boxa">
            <span className="detailsa">Password</span>
            <input className="linput" type="password" placeholder="Enter your password" required />
          </div>
          <div className="button">
            <input className="linput" type="submit" defaultValue="Register" /><br />
            <span className="text" style={{padding:"5px"}}>Don't Have An Account? &nbsp;
              <Link to="/signup" className="text login-link">Signup</Link>
            </span>
          </div>
        </div></form>
    </div>
  </div>
</div>
</body>

  )
}

export default Login
