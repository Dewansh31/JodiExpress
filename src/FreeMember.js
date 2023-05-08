import "./FreeMember.css"
import Sidebar2 from './Sidebar2'
import React,{useState,useEffect} from 'react'
import { app } from './firebase';
import { collection, query, where, getDocs,or,and,orderBy  } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {doc,updateDoc} from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';

const db = getFirestore(app)

function FreeMember(props) {

  const [members,setMembers] = useState([])
  const [prev, setPrev] = useState([]);
  const [flag,setflag] = useState(false);

  const getAllmembers = async () => {
    return await getDocs(collection(db, "users"));
   
  };

  const fetchAllmembers = async () => {
    const result = await getAllmembers();

    if (!result) {
      return;

    }

    var tempmembers1 = [];
    result.forEach((doc) => tempmembers1.push({ ...doc.data(), pid: doc.id }));

    tempmembers1 = tempmembers1.sort((a, b) => Number(b.featured) - Number(a.featured));

    setMembers(tempmembers1);
    setPrev(tempmembers1);
    // console.log(members);

  };

  const applyFilter = async() =>{

                                             
    const q2 = query(collection(db, "users"),  where("featured", "==", flag)) 
    
    const querySnapshot = await getDocs(q2);
    var tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));

    // tmp = tmp.sort((a, b) => Number(b.featured) - Number(a.featured));
    // console.log(tmp)
    setMembers(tmp);

  }



  const clearFilter = () =>{
    // console.log("cleared");
    setMembers(prev)

  }

  const changer1 = () =>{

    setflag(false)

  }

  const changer2 = () =>{

    setflag(true)

  }


  useEffect(() => {

    fetchAllmembers();

    // eslint-disable-next-line
  }, []);



  return (
    <>

    <Sidebar2 name={props.name}/>
    
    <div className="main-content mc container">
  
  <div className="d-flex flex-row">

  {/* <select class="form-select mb-2" value={type}  onChange={(e) => {setMemberType(e)}} name="members"  aria-label="Default select example">
  <option value={!flag} >Free Member</option>
  <option value={flag}  >Premium Member</option>
 
</select> */}

   <MDBBtnGroup >
      <MDBRadio btn btnColor='secondary'  wrapperTag='span' label='All Members'   defaultChecked />
      <MDBRadio btn btnColor='secondary'  wrapperClass='mx-2' wrapperTag='span' label='Free Members'  onClick={changer1} />
      <MDBRadio btn btnColor='secondary' wrapperTag='span' label='Premium Members'  onClick={changer2}  />
    </MDBBtnGroup>

    <MDBBtn className='me-1' color='success'  onClick={applyFilter} >
        apply
      </MDBBtn>
      <MDBBtn className='me-1' color='danger'  onClick={clearFilter}>
       clear
      </MDBBtn>

  </div>


         <div className="records table-responsive">
          <div className="record-header">
          
            <div className="add">
              <span><h5>Free Members</h5></span>
            
            
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
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Member Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>

              { members.map((item) => (

                <tr>
                  <td>{members.indexOf(item)+1}</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
                      {/* <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div> */}
                    </div>
                  </td>
                  <td>
                    {item.fullName}
                  </td>
                  <td>
                    {item.gender}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.religion}
                  </td>
                  <td>
                  <ul class="d-flex ">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-danger btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                  </td>
              </tr>
              ))}
               
              </tbody>
            </table>
          </div>
        </div>
   </div>
   </>
  )
}

export default FreeMember
