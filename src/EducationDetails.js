import React from 'react'
import './Profile.css';

function EducationDetails() {
  return (
    <div>
        <div className="container">
  <div className="title">Eduction Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">College Name</span>
          <input type="text" placeholder=" College name" required />
        </div>
        <div className="input-box">
          <span className="details">Year Of Passing</span>
          <input type="text" placeholder=" year of passing" required />
        </div>
        <div className="input-box">
          <span className="details">Degree</span>
          <input type="text" placeholder=" your degree" required />
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

export default EducationDetails
