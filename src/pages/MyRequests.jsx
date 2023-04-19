import Sidebar from '../Sidebar'
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import { app } from '../firebase';
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import {arrayUnion, arrayRemove } from "firebase/firestore";

const db = getFirestore(app)

const MyRequests = (props) => {

  useEffect(() => {
    fetchsetmembers()
    fetchreceivedmembers()
  }, []);


  const [sentReqMem,setSentReqMem] = useState([]);
  const [receivedReqMem,setReceivedReqMem] = useState([]);
  
  const fetchsetmembers = async () => {
   
    const auth = getAuth();
    const sender = auth.currentUser;
  
    // const firestore = getFirestore()
    const docRef = doc(db, `users`, sender.displayName)
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    // console.log(data.sentrequests);
    setSentReqMem(data.sentrequests)
  
    };

    const fetchreceivedmembers = async () => {
   
      const auth = getAuth();
      const sender = auth.currentUser;
    
      // const firestore = getFirestore()
      const docRef = doc(db, `users`, sender.displayName)
      const docSnap = await getDoc(docRef)
    
      const data = docSnap.exists() ? docSnap.data() : null
    
      if (data === null || data === undefined) return null
    
      // console.log(data.sentrequests);
      setReceivedReqMem(data.receivedrequests)
    
      };

      const handleAccept = async(r) =>{


        const auth = getAuth();
        const sender = auth.currentUser;
    
        console.log(`sender : ${sender.displayName}`);
        console.log(`receiver : ${r}`);
    
        // receiving
         const receivedRef = doc (db,`users`,`${r}`);
          await  updateDoc(receivedRef,  {
            connections: arrayUnion(sender.displayName)
           })
        
    
           //sending
          const sendRef = doc (db,`users`,`${sender.displayName}`);
            await updateDoc(sendRef,  {
            connections: arrayUnion(r)
           })
    
    
      }
    

 

  return (
    <div>
      <Sidebar username={props.name}/>
        
      <div className="tabset">
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked />
  <label htmlFor="tab1">Sent</label>
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
  <label htmlFor="tab2">Received</label>
 
  <div className="tab-panels">
    <section id="marzen" className="tab-panel">

    <div className="container membercontainer">
  <div className="row row-cols-1  row-cols-md-4 ">

{
  sentReqMem.map((item) => (
    <div className="col-sm-4" >
    <div className="card " style={{width: '100%'}}>
      <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
        {item}
    
        </p>


    <div >

    <Button className='detailBtn' variant="primary" >Full Details</Button>
    <Button className="connectBtn" variant="secondary">  pending </Button>

      </div>
      </div>
      </div>
      </div>
  ))
}
    
        
        </div>



        </div>

    </section>



    <section id="rauchbier" className="tab-panel">

    <div className="container membercontainer">
  <div className="row row-cols-1  row-cols-md-4 ">

{
  receivedReqMem.map((USER) => (
    <div className="col-sm-4" >
    <div className="card " style={{width: '100%'}}>
      <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
        {USER}
    
        </p>


    {/* <div > */}

    <Button className='detailBtn' variant="primary" >Full Details</Button>

    <div className='d-flex flex-row'>
    <h5 className="connectBtn" variant="secondary" onClick={() => handleAccept(USER)} >  ✔️ </h5>
    <h5 className="connectBtn" variant="secondary" >  ❌ </h5>

      </div>
      </div>
      </div>
      </div>
  ))
}
    
        
        </div>



        </div>

        
    </section>
  
  </div>
</div>


    </div>
  )
}

export default MyRequests