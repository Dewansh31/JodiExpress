import Sidebar from '../Sidebar'
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import { app } from '../firebase';
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import {arrayUnion, arrayRemove } from "firebase/firestore";
import { MDBBtn } from 'mdb-react-ui-kit';

const db = getFirestore(app)

const Proposals = (props) => {

    const [marrysentReqMem,setmarrysentReqMem] = useState([]);
    const [marryreceivedReqMem,setmarryreceivedReqMem] = useState([]);
    const [marryConnections,setMarryConnections] = useState([]);

   

    const fetchMarryConnections = async () => {
     
      const auth = getAuth();
      const sender = auth.currentUser;
    
      // const firestore = getFirestore()
      const docRef = doc(db, `users`, sender.displayName)
      const docSnap = await getDoc(docRef)
    
      const data = docSnap.exists() ? docSnap.data() : null
    
      if (data === null || data === undefined) return null
    
      // console.log(data.marryconnections);
      setMarryConnections(data.marryconnections)
    
      };
    
    const fetchsetmembers = async () => {
     
      const auth = getAuth();
      const sender = auth.currentUser;
    
      // const firestore = getFirestore()
      const docRef = doc(db, `users`, sender.displayName)
      const docSnap = await getDoc(docRef)
    
      const data = docSnap.exists() ? docSnap.data() : null
    
      if (data === null || data === undefined) return null
    
      // console.log(data.sentrequests);
      setmarrysentReqMem(data.marrysent)
    
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
        setmarryreceivedReqMem(data.marryreceived)
      
        };
  
        const handleAccept = async(r) =>{
  
  
          const auth = getAuth();
          const sender = auth.currentUser;
      
  
          
           const receivedRef = doc (db,`users`,`${r}`);
            await  updateDoc(receivedRef,  {
              marryconnections: arrayUnion(sender.displayName)
             })
          
      
             //sending
            const sendRef = doc (db,`users`,`${sender.displayName}`);
              await updateDoc(sendRef,  {
                marryconnections: arrayUnion(r)
             })

             var newObject = {
             "p1": sender.displayName,
             "p2": r              
          }
           

             const coupleRef = doc (db,`marriages`,`successful`);
             await  updateDoc(coupleRef,  {
              couples: arrayUnion(newObject)
             })

  
          // const firestore = getFirestore()
          const docRef = doc(db, `users`, sender.displayName)
          const docRef2 = doc(db, `users`, r)
  
          const docSnap = await getDoc(docRef)
          const docSnap2 = await getDoc(docRef2)
  
          const data = docSnap.exists() ? docSnap.data() : null
          const data2 = docSnap2.exists() ? docSnap2.data() : null
        
          if (data === null || data === undefined) return null
          if (data2 === null || data2 === undefined) return null
  
          // console.log(data.sentrequests);
          var temp = data.marryreceived
          temp = temp.filter(function(value, index, arr){ 
            return value !== r;
        })
          var temp2 = data2.marrysent
          temp2 = temp2.filter(function(value, index, arr){ 
            return value !== sender.displayName;
        })
  
        // receiving
          const receivedRef2 = doc (db,`users`,`${r}`);
          await  updateDoc(receivedRef2,  {
            marrysent: temp2
           })
        
    
         //sending
          const sendRef2 = doc (db,`users`,`${sender.displayName}`);
            await updateDoc(sendRef2,  {
            marryreceived: temp
           })


  
           alert("Added to your connection!")
    
      
      
        }
  
        
        const handleReject = async(r) =>{
  
  
          const auth = getAuth();
          const sender = auth.currentUser;
        
          // const firestore = getFirestore()
          const docRef = doc(db, `users`, sender.displayName)
          const docRef2 = doc(db, `users`, r)
  
          const docSnap = await getDoc(docRef)
          const docSnap2 = await getDoc(docRef2)
  
          const data = docSnap.exists() ? docSnap.data() : null
          const data2 = docSnap2.exists() ? docSnap2.data() : null
        
          if (data === null || data === undefined) return null
          if (data2 === null || data2 === undefined) return null
  
          // console.log(data.sentrequests);
          var temp = data.marryreceived
          temp = temp.filter(function(value, index, arr){ 
            return value !== r;
        })
          var temp2 = data2.marrysent
          temp2 = temp2.filter(function(value, index, arr){ 
            return value !== sender.displayName;
        })
      
          // console.log(`rr : ${temp}`);
          // console.log(`sr : ${temp2}`);
  
         
          // // receiving
           const receivedRef = doc (db,`users`,`${r}`);
            await  updateDoc(receivedRef,  {
              marrysent: temp2
             })
          
      
          //    //sending
            const sendRef = doc (db,`users`,`${sender.displayName}`);
              await updateDoc(sendRef,  {
                marryreceived: temp
             })
      
             alert("rejected!")
      
        }
      
  
        useEffect(() => {
          fetchsetmembers()
          fetchreceivedmembers()
          fetchMarryConnections()
  
        }, [marrysentReqMem,marryreceivedReqMem,marryConnections]);
  
      
        
        return (
            <div>
              <Sidebar username={props.name}/>
                
              <div className="tabset">
          <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked />
          <label htmlFor="tab1">Sent</label>
          <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
          <label htmlFor="tab2">Received</label>
          <input type="radio" name="tabset" id="tab3" aria-controls="mconn" />
          <label htmlFor="tab3">Marry Connection</label>
         
          <div className="tab-panels">
            <section id="marzen" className="tab-panel">
        
            <div className="container membercontainer">
        
        {
          marrysentReqMem.length === 0 && 
          <h3>You don't have any sent requests!</h3>
        }
        
          <div className="row row-cols-1  row-cols-md-4 ">
        
        {
          marrysentReqMem.map((item) => (
            <div className="col-sm-4" >
            <div className="card " style={{width: '100%'}}>
              <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                {item}
            
                </p>
        
        
            <div >
        
            <Button className='detailBtn'  variant="primary" >Full Details</Button>
            {/* <Button className="connectBtn" variant="secondary">  pending </Button> */}
            <MDBBtn outline rounded>
            pending
              </MDBBtn>
        
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
        
            {
          marryreceivedReqMem.length === 0 && 
          <h3>You don't have any received requests!</h3>
        }
          <div className="row row-cols-1  row-cols-md-4 ">
        
        {
          marryreceivedReqMem.map((USER) => (
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
        
            <div className="d-grid gap-2 d-md-block my-2 " >
              <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='success' onClick={() => handleAccept(USER)}>✔️</MDBBtn>
              <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='danger' onClick={() => handleReject(USER)}> ❌</MDBBtn>
            </div>
        
            {/* <div className='d-flex flex-row'>
            <h5 className="connectBtn" style={{hover:{ backgroundColor: 'red'   }}} variant="secondary" onClick={() => handleAccept(USER)} >  ✔️ </h5>
            <h5 className="connectBtn" variant="secondary" onClick={() => handleReject(USER)} >  ❌ </h5>
        
              </div> */}
              </div>
              </div>
              </div>
          ))
        }
            
                
                </div>
        
        
        
                </div>
        
                
            </section>

            <section id="mconn" className="tab-panel">
        
        <div className="container membercontainer">
    
        {
      marryConnections.length === 0 && 
      <h3>You don't have any marry connections!</h3>
    }
      <div className="row row-cols-1  row-cols-md-4 ">
    
    {
      marryConnections.map((USER) => (
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
    
        {/* <div className="d-grid gap-2 d-md-block my-2 " >
          <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='success' onClick={() => handleAccept(USER)}>✔️</MDBBtn>
          <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='danger' onClick={() => handleReject(USER)}> ❌</MDBBtn>
        </div> */}
    
        {/* <div className='d-flex flex-row'>
        <h5 className="connectBtn" style={{hover:{ backgroundColor: 'red'   }}} variant="secondary" onClick={() => handleAccept(USER)} >  ✔️ </h5>
        <h5 className="connectBtn" variant="secondary" onClick={() => handleReject(USER)} >  ❌ </h5>
    
          </div> */}
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

export default Proposals