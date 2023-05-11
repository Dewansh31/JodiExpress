import React from 'react'
import "./Sidebar2.css"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';

function Sidebar2(props) {

  const toastSuccess = () => toast.success('Logged out successfully!');

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const navigate = useNavigate();

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
  


  return (
  <div>
  <input type="checkbox" id="menu-toggle" />
  <div className="sidebar">
    <div className="side-header">
      <h3>J<span>odiExpress</span></h3>
    </div>
    <div className="side-content">
      <div className="profile">
        <div className="profile-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
        <h4>{props.name}</h4>
        <small>Administrator</small>
      </div>
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/dashboard2" className="active2">
              <span className="las la-home" />
              <small>Dashboard</small>
            </Link>
          </li>
         
          <li>
            <Link to="/addcaste">
              <span className="las la-envelope" />
              <small>Profile Attribute</small>
            </Link>
          </li>
          <li>
            <Link to="/freemember">
              <span className="las la-clipboard-list" />
              <small>Members</small>
            </Link>
          </li>
          
          <li>
          <Link to="/couples" activeClassName="active">
              <span className="las la-clipboard-list" />
              <small className="smallc">
                Couples
              </small>
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
         
          {/* <div className="notify-icon">
            <span className="las la-envelope" />
            <span className="notify">4</span>
          </div>
          <div className="notify-icon">
            <span className="las la-bell" />
            <span className="notify">3</span>
          </div> */}
          
          <Button variant="danger">


  <div className="user" onClick={handleLogout}>
            <span className="las la-power-off" />
            <span><b>Logout</b></span>
</div>

</Button>

        </div>
      </div>
    </header>
    {/* <main>
      <div className="page-header">
        <h1>Dashboard</h1>
        <small>Home / Dashboard</small>
      </div>
      <div className="page-content">
        <div className="analytics">
          <div className="card">
            <div className="card-head">
              <h2>107,200</h2>
              <span className="las la-user-friends" />
            </div>
            <div className="card-progress">
              <small>Total Member</small>
              <div className="card-indicator">
                <div className="indicator one" style={{width: '60%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>340,230</h2>
              <span className="las la-eye" />
            </div>
            <div className="card-progress">
              <small>Premium Member</small>
              <div className="card-indicator">
                <div className="indicator two" style={{width: '80%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>$653,200</h2>
              <span className="las la-shopping-cart" />
            </div>
            <div className="card-progress">
              <small>Free Member</small>
              <div className="card-indicator">
                <div className="indicator three" style={{width: '65%'}} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h2>47,500</h2>
              <span className="las la-envelope" />
            </div>
            <div className="card-progress">
              <small>Blocked Member</small>
              <div className="card-indicator">
                <div className="indicator four" style={{width: '90%'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="records table-responsive">
          <div className="record-header">
            <div className="add">
              <span>Entries</span>
              <select name id>
                <option value>ID</option>
              </select>
              <button>Add record</button>
            </div>
            <div className="browse">
              <input type="search" placeholder="Search" className="record-search" />
              <select name id>
                <option value>Status</option>
              </select>
            </div>
          </div>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>#</th>
                  <th><span className="las la-sort" /> CLIENT</th>
                  <th><span className="las la-sort" /> TOTAL</th>
                  <th><span className="las la-sort" /> ISSUED DATE</th>
                  <th><span className="las la-sort" /> BALANCE</th>
                  <th><span className="las la-sort" /> ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/3.jpeg)'}} />
                      <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $3171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    -$205
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#5033</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(img/1.jpeg)'}} />
                      <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    $2171
                  </td>
                  <td>
                    19 April, 2022
                  </td>
                  <td>
                    <span className="paid">Paid</span>
                  </td>
                  <td>
                    <div className="actions">
                      <span className="lab la-telegram-plane" />
                      <span className="las la-eye" />
                      <span className="las la-ellipsis-v" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main> */}
  </div>
</div>

  )
}

export default Sidebar2
