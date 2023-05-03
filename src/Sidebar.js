import React, { useState,useEffect } from 'react'
import './Sidebar.css'
import { Link ,useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';


const firestore = getFirestore(app);

function Sidebar(props) {

  const toastSuccess = () => toast.success('Logged out successfully!');

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const navigate = useNavigate();

  const [UN,setUN] = useState("");
  const [profileUrl,setProfileUrl] = useState("");

  const getPhoto = async()=>{

    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const bgDetailsData = docSnap.data();
    // console.log(bgDetailsData.url);

    setProfileUrl(bgDetailsData.url)
    
    
  

  }
 
 

  

  const handleLogout = async () =>{
 
    toastSuccess();

    const auth = getAuth();

    await delay(1000);

    signOut(auth).then(() => {
      // console.log("logged out!");
      
      
      navigate("/login")

    }).catch((error) => {
      console.log("logout failed!");
    });

  }

  useEffect(() => {
    setUN(props.username);
    getPhoto();
 }, []);


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
        
        <div className="profile-img bg-img" style={{backgroundImage:`url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU)`}} />
        {/* <img className="profile-img bg-img" src={profileUrl}  /> */}
        <h4>{UN}</h4>
      
      </div>
      <div className="side-menu1">
        <ul>
          <li>
            <NavLink  to="/dashboard" activeClassName="active">
              <span className="las la-home" />
              <h6 className="smallc" style={{textDecoration:"none"}}>Dashboard</h6>
            </NavLink >
          </li>
          <li>
            <NavLink  to="/selfinfo" activeClassName="active">
              <span className="las la-user-alt" />
              <h6 className="smallc">My Profile</h6>
            </NavLink >
          </li>
          <li>
            <NavLink to="/myconnections" activeClassName="active">
              <span className="las la-envelope" />
              <h6 className="smallc">My Connections</h6>
            </NavLink>
          </li>
          <li>
            <NavLink to="/myrequests" activeClassName="active">
              <span className="las la-clipboard-list" />
              <h6 className="smallc">Requests</h6>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/myproposals" activeClassName="active">
              <span className="las la-clipboard-list" />
              <h6 className="smallc">Proposals</h6>
            </NavLink>
          </li>

          <li>
            <NavLink to="/couples" activeClassName="active">
              <span className="las la-clipboard-list" />
              <h6 className="smallc">
                Couples
              </h6>
            </NavLink>
          </li>


          <li>
            <NavLink to="/delete" activeClassName="active">
              <span className="las la-tasks" />
              <h6 className="smallc">Deactivate Profile</h6>
            </NavLink>
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

<span class="badge badge-danger"><div className="user" onClick={handleLogout}>
            {/* <div className="bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} /> */}
            <span className="las la-power-off" />
            <span><b>Logout</b></span>

            

          </div></span>
         
          
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
