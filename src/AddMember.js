import React from 'react'
import "./AddMember.css"
import Sidebar2 from './Sidebar2'

export default function AddMember(props) {
  return (
    <div>
      
      <Sidebar2 name={props.name}/>
  <div className="wrapper">
    <div className="title">
      Add New Member
    </div>
    <div className="form">
      <div className="inputfield">
        <label>Full Name</label>
        <input type="text" className="input" />
      </div>  
      <div className="inputfield">
        <label>Email</label>
        <input type="text" className="input" />
      </div>  
      <div className="inputfield">
        <label>DOB</label>
        <input type="date" className="input" />
      </div>  
      <div className="inputfield">
        <label>Phone Number</label>
        <input type="password" className="input" />
      </div> 
      <div className="inputfield">
        <label>Gender</label>
        <div className="custom_select">
          <select>
            <option value>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div> 
      {/* <div className="inputfield">
        <label>Email Address</label>
        <input type="text" className="input" />
      </div> 
      <div className="inputfield">
        <label>Phone Number</label>
        <input type="text" className="input" />
      </div>  */}
      <div className="inputfield">
        <label>Address</label>
        <textarea className="textarea" defaultValue={""} />
      </div> 
      {/* <div className="inputfield">
        <label>Postal Code</label>
        <input type="text" className="input" />
      </div> 
      <div className="inputfield terms">
        <label className="check">
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
        <p>Agreed to terms and conditions</p>
      </div>  */}
      <div className="inputfield">
        <input type="submit" value="Add Member" className="btn" />
      </div>
    </div>
  </div>
</div>

  )
}
