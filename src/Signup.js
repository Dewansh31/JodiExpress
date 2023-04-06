import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <body className='mbody'>
    <div>
      <div className="containera">
    <div className="title">Signup</div>
    <div className="content">
      <form className='lform' action="#">
        <div className="user-detailsa">
          <div className="input-boxa">
            <span className="detailsa">Name</span>
            <input className="linput" type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-boxa">
            <span className="detailsa">Email</span>
            <input className="linput" type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-boxa">
            <span className="detailsa">Phone Number</span>
            <input className="linput" type="text" placeholder="Enter your number" required />
          </div>
          <div className="input-boxa">
            <span className="detailsa">Password</span>
            <input className="linput" type="password" placeholder="Enter your password" required />
          </div>
          <div className="button">
            <input className="linput" type="submit" defaultValue="Register" /><br />
            <span className="text">Already Have An Account? &nbsp;
              <Link to="/login" className="text login-link">Login</Link>
            </span>
          </div>
        </div></form>
    </div>
  </div>
    </div>
    </body>
  )
}

export default Signup
