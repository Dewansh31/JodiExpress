import React, { useState,useEffect } from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app)

function Profile(props) {

  const [fullName,setFullName] = useState("");
  const [dob,setDOB] = useState("");
  const [pob,setPOB] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [height,setHeight] = useState("");

  useEffect(() => {
		   getData();
       // eslint-disable-next-linecd
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;

  // collection(firestore,`users/${username}/basicDetails`)

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
   
   
   
  //  {
  //   fullName:fullName,
  //   dob:dob,
  //   pob:pob,
  //   gender:gender,
  //   phone:phone,
  //   height:height
  // }

    // setFullName("")
    // setDOB("")
    // setPOB("")
    // setGender("")
    // setPhone("")
    // setHeight("")

    // console.log(result);
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
          <input type="date" required value={dob}  onChange={(e) => setDOB(e.target.value)} name="dob"/>
        </div>
        <div className="input-box">
          <span className="details">Place Of Birth</span>
          <input type="text" placeholder="birth place" required value={pob}  onChange={(e) => setPOB(e.target.value)} name="pob" />
        </div>
        <div className="input-box">
          <span className="details">Gender</span>
          <input type="text" placeholder="gender" required value={gender}  onChange={(e) => setGender(e.target.value)} name="gender"/>
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="phone number" required value={phone}  onChange={(e) => setPhone(e.target.value)} name="phone"/>
        </div>
        
        
        <div className="input-box">
          <span className="details">Height</span>
          <input type="text" placeholder="height" required value={height}  onChange={(e) => setHeight(e.target.value)} name="height" />
        </div>
       
      </div>
      
      
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
      </div>
    </form>
  </div>
</div>


    </div>
  )
}

export default Profile
