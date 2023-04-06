import React from "react";
import './Profile.css';

function ProfessionalDetails() {
  return (
    <div>
      <div className="container">
        <div className="title">Professional Details</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Employed In</span>
                <input type="text" placeholder="Work place" required />
              </div>
              <div className="input-box">
                <span className="details">Annual Income</span>
                <input
                  type="text"
                  placeholder="annual income"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="phone number" required />
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalDetails;
