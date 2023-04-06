import React from 'react'
import './Profile.js';

function FamilyDetails() {
  return (
    <div>
       <div className="container">
  <div className="title">Family Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Father Name</span>
          <input type="text" placeholder=" Father's name" required />
        </div>
        <div className="input-box">
          <span className="details">Mother Name</span>
          <input type="text" placeholder=" Mother's username" required />
        </div>
        <div className="input-box">
          <span className="details">Father Occupation</span>
          <input type="text" placeholder=" Father's Ocuupation" required />
        </div>
        <div className="input-box">
          <span className="details">Mother Occupation</span>
          <input type="text" placeholder=" Mother's Ocuupation" required />
        </div>
        <div className="input-box">
          <span className="details">Family Lives</span>
          <input type="text" placeholder=" Family Lives" required />
        </div>
        <div className="input-box">
          <span className="details">Family Type</span>
          <input type="text" placeholder=" Family type" required />
        </div>
        <div className="input-box">
          <span className="details">Brother</span>
          <input type="text" placeholder="how many brothers do you have" required />
        </div>
        <div className="input-box">
          <span className="details">Sister</span>
          <input type="text" placeholder="how many sisters do you have" required />
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

export default FamilyDetails
