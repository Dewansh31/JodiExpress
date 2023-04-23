import React from "react";
import Sidebar from "../Sidebar";
import "./myConn.css";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import { app } from '../firebase';
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const db = getFirestore(app)

const MyConnection = (props) => {

 
  
  const [mconnections,setMConnections] = useState([]);
  
  const fetchConnections = async () => {
   
    const auth = getAuth();
    const sender = auth.currentUser;
  
    // const firestore = getFirestore()
    const docRef = doc(db, `users`, sender.displayName)
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    // console.log(data.sentrequests);
    setMConnections(data.connections)
  
    };

    useEffect(() => {
      fetchConnections()  
      }, [mconnections]);
    


  return (

    <div className='container mc mcont'>

     <Sidebar username={props.name} />

     <div >


     <h2>My connections</h2>

          
  <div className="container membercontainer">

  {
    mconnections.length == 0 &&
    <p>No connections found!</p>
  }


 <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">

  
  {
    mconnections.map((item) => (
      <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item}</h5>
          <p className="card-text">
          Religion : dfgdg <br/>
          Caste : dfgdgdg
 
          </p>
 
 
     
 
 
 
 
 
        </div>
      </div>
 
      
    
 
    </div>
 
    ))
  }   

  
  




 </div>

 
</div>



   </div>

    </div>
    
  );
};

export default MyConnection;
