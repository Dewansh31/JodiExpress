import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sidebar(props) {

  const toastSuccess = () => toast.success('Logged out successfully!');

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const navigate = useNavigate();

  const [UN,setUN] = useState("");
 
  useEffect(() => {
    setUN(props.username);
  
 }, []);


  

  const handleLogout = async () =>{
 
    toastSuccess();

    const auth = getAuth();

    await delay(1500);

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
        <div className="profile-img bg-img" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVVQ1zRPAbCMH_VAZHKSlSC_IKOHGKEtoDQ&usqp=CAU)'}} />
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5iROb1TgJ_rcl-6r-68v1yjtID052zxSkw&usqp=CAU" /> */}
        <h4>{UN}</h4>
      
      </div>
      <div className="side-menu1">
        <ul>
          <li>
            <Link to="/dashboard" className="active">
              <span className="las la-home" />
              <h6 className="smallc" style={{textDecoration:"none"}}>Dashboard</h6>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="las la-user-alt" />
              <h6 className="smallc">Update Profile</h6>
            </Link>
          </li>
          <li>
            <Link to="/myconnections">
              <span className="las la-envelope" />
              <h6 className="smallc">My Connections</h6>
            </Link>
          </li>
          <li>
            <Link to="/myrequests">
              <span className="las la-clipboard-list" />
              <h6 className="smallc">My Interests</h6>
            </Link>
          </li>
        
          <li>
            <Link>
              <span className="las la-tasks" />
              <h6 className="smallc">Delete Profile</h6>
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

    <ToastContainer
              position="top-right"
              autoClose={3000}
            />
   
  </div>
</div>

    </div>
  )
}

export default Sidebar
