import React, { useState,useEffect } from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



const firestore = getFirestore(app)

function Profile(props) {


  const [show, setShow] = useState(false);


  const [fullName,setFullName] = useState("");
  const [dob,setDOB] = useState("");
  const [pob,setPOB] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [height,setHeight] = useState("");

  useEffect(() => {
		   getData();
        // eslint-disable-next-line
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;

 

  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.displayName}`);
   await updateDoc(docRef,  {
      fullName:fullName,
      dob:dob,
      pob:pob,
      gender:gender,
      phone:phone,
      height:height
    })
   

  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const basicDetailsData = docSnap.data();
    // console.log(basicDetailsData);

    setFullName(basicDetailsData.fullName)
    setDOB(basicDetailsData.dob)
    setPOB(basicDetailsData.pob)
    setGender(basicDetailsData.gender)
    setPhone(basicDetailsData.phone)
    setHeight(basicDetailsData.height)

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    setShow(true)
    getData();
  }
  

  return (
    <div>
     <div className="formcontainer">
  <div className="title">Basic Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="name" required value={fullName}  onChange={(e) => setFullName(e.target.value)} name="fullName" />
        </div>
        <div className="input-box">
          <span className="details">DOB</span>
          <input type="date" required value={dob}   onChange={(e) => setDOB(e.target.value)} name="dob"/>
        </div>
        {/* <div className="input-box">
          <span className="details">Place Of Birth</span>
          <input type="text" placeholder="birth place" required value={pob}  onChange={(e) => setPOB(e.target.value)} name="pob" />
        </div> */}
        <select className="form-select input-box" required value={pob} onChange={(e) => setPOB(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Place Of Birth</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Punjab">Punjab</option>
        <option value="Pune">Pune</option>
      </select>
        
      <select className="form-select input-box" required value={gender} onChange={(e) => setGender(e.target.value)} name="gender" aria-label="Default select example">
      <option selected>Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>

        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="tel" placeholder="phone number" maxLength={10}  required value={phone}  onChange={(e) => setPhone(e.target.value)} name="phone"/>
        </div>
        
        
        <div className="input-box">
          <span className="details">Height</span>
          <input type="text" placeholder="height" required value={height}  onChange={(e) => setHeight(e.target.value)} name="height" />
        </div>
       
      </div>
      
      
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit}/>

        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Basic details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>


      </div>
    </form>
  </div>
</div>


    </div>
  )
}

export default Profile
