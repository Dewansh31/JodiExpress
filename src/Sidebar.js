import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function Sidebar(props) {

  const navigate = useNavigate();

  const [UN,setUN] = useState("");

  useEffect(() => {
    setUN(props.username);
    // eslint-disable-next-linecd
 }, []);


  

  const handleLogout = () =>{

    const auth = getAuth();

    signOut(auth).then(() => {
      // console.log("logged out!");
      
      
      navigate("/login")

    }).catch((error) => {
      console.log("logout failed!");
    });

  }

  return (
    <div>
     <div>
  <input type="checkbox" id="menu-toggle" />
  <div className="sidebar">
    <div className="side-header">
      <h3>J<span>odi Express</span></h3>
    </div>
    <div className="side-content">
      <div className="profile">
        <div className="profile-img bg-img" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVVQ1zRPAbCMH_VAZHKSlSC_IKOHGKEtoDQ&usqp=CAU)'}} />
        <h4>{UN}</h4>
      
      </div>
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/dashboard" className="active">
              <span className="las la-home" />
              <small>Dashboard</small>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="las la-user-alt" />
              <small>Profile</small>
            </Link>
          </li>
          <li>
            <Link to="/myconnections">
              <span className="las la-envelope" />
              <small>My Connections</small>
            </Link>
          </li>
          <li>
            <Link to="/myrequests">
              <span className="las la-clipboard-list" />
              <small>My Requests</small>
            </Link>
          </li>
        
          <li>
            <Link>
              <span className="las la-tasks" />
              <small>Logout</small>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="main-content">
    <header>
      <div className="header-content">
        <label htmlFor="menu-toggle">
          <span className="las la-bars" />
        </label>
        <div className="header-menu">
          {/* <label htmlFor>
            <span className="las la-search" />
          </label> */}
         
          <div className="user" onClick={handleLogout}>
            <div className="bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
            <span className="las la-power-off" />
            <span><b>Logout</b></span>
          </div>
        </div>
      </div>
    </header>

   
  </div>
</div>

    </div>
  )
}

export default Sidebar
