import React from 'react'
import './Profile.css';

function Profile() {
  return (
    <div>
     <div className="container">
  <div className="title">Basic Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="name" required />
        </div>
        <div className="input-box">
          <span className="details">DOB</span>
          <input type="date" required />
        </div>
        <div className="input-box">
          <span className="details">Place Of Birth</span>
          <input type="text" placeholder="birth place" required />
        </div>
        <div className="input-box">
          <span className="details">Gender</span>
          <input type="text" placeholder="gender" required />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="phone number" required />
        </div>
        <div className="input-box">
          <span className="details">Rashi</span>
          <input type="text" placeholder="your rashi" required />
        </div>
        <div className="input-box">
          <span className="details">Religion</span>
          <input type="text" placeholder="religion" required />
        </div>
        <div className="input-box">
          <span className="details">Height</span>
          <input type="text" placeholder="height" required />
        </div>
        <div className="input-box">
          <span className="details">Caste</span>
          <input type="text" placeholder="caste" required />
        </div>
        <div className="input-box">
          <span className="details">Sub Caste</span>
          <input type="text" placeholder="sub caste" required />
        </div>
      </div>
      
      
      <div className="button">
        <input type="submit" defaultValue="Register" />
      </div>
    </form>
  </div>
</div>


    </div>
  )
}

export default Profile
