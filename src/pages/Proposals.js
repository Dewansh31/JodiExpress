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
import errorimg from '../images/error.png'
import Spinner from '../Spinner';

const db = getFirestore(app)

const Proposals = (props) => {

    const [marrysentReqMem,setmarrysentReqMem] = useState([]);
    const [marryreceivedReqMem,setmarryreceivedReqMem] = useState([]);
    const [marryConnections,setMarryConnections] = useState([]);
    const [flag,setFlag] = useState(true)
   

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
      setFlag(false)
    
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
      setFlag(false)
    
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
        setFlag(false)
      
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
          marrysentReqMem.length === 0 && !flag &&

          
  <div className="" 
 
  >

<h3 style={{margin:"auto",
           marginLeft:"100px",
          justifyContent:"center"
    }}>You don't have any sent proposals!</h3>

  <img style={{
    height:"70%",
    width:"70%",
    marginLeft:"100px",
    justifyContent:"center"
  }} src={errorimg}   alt="..." />



</div>

       
        }

        { flag &&

         <Spinner/>

        }
        
          <div className="row row-cols-1  row-cols-md-4 ">
        
        {
          marrysentReqMem.map((item) => (
            <div className="col-sm-4" >
            <div className="card " style={{width: '100%'}}>
              <img src="data:image/png;base64,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"  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                {item}
            
                </p>
        
        
            <div >
        
            {/* <Button className='detailBtn'  variant="primary" >Full Details</Button> */}
            {/* <Button className="connectBtn" variant="secondary">  pending </Button> */}
            {/* <MDBBtn outline rounded>
            pending
              </MDBBtn> */}

<div className="buttons d-flex flex-row" style={{marginLeft:"-18px"}}>
  <button className="primary"  >
   Details
  </button>
  <button className="primary ghost" >
  pending
  </button>
</div>
        
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

          <div className="" 
 
          >
        
        <h3 style={{margin:"auto",
                   marginLeft:"100px",
                  justifyContent:"center"
            }}>You don't have any received proposals!</h3>
        
          <img style={{
            height:"70%",
            width:"70%",
            marginLeft:"100px",
            justifyContent:"center"
          }} src={errorimg}   alt="..." />
        
        
        
        </div>
         
          
        }
          <div className="row row-cols-1  row-cols-md-4 ">
        
        {
          marryreceivedReqMem.map((USER) => (
            <div className="col-sm-4" >
            <div className="card " style={{width: '100%'}}>
              <img src="data:image/png;base64,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"  className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                {USER}
            
                </p>
        
        
            {/* <div > */}
        
            {/* <Button className='detailBtn' variant="primary" >Full Details</Button> */}
        
            {/* <div className="d-grid gap-2 d-md-block my-2 " >
              <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='success' onClick={() => handleAccept(USER)}>✔️</MDBBtn>
              <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='danger' onClick={() => handleReject(USER)}> ❌</MDBBtn>
            </div> */}

<div className="buttons d-flex flex-row" style={{marginLeft:"0px"}}>
  <button className="primary" onClick={() => handleAccept(USER)}>✔️</button>
  <button className="primary ghost"  onClick={() => handleReject(USER)}> ❌</button>
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
      <div className="" 
 
      >
    
    <h3 style={{margin:"auto",
               marginLeft:"100px",
              justifyContent:"center"
        }}>You don't have any marry proposals!</h3>
    
      <img style={{
        height:"70%",
        width:"70%",
        marginLeft:"100px",
        justifyContent:"center"
      }} src={errorimg}   alt="..." />
    
    
    
    </div>
    }
      <div className="row row-cols-1  row-cols-md-4 ">
    
    {
      marryConnections.map((USER) => (
        <div className="col-sm-4" >
        <div className="card " style={{width: '100%'}}>
          <img src="data:image/png;base64,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"  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
            {USER}
        
            </p>
    
    
        {/* <div > */}
    
        {/* <Button className='detailBtn' variant="primary" >Full Details</Button> */}

        <div className="buttons d-flex flex-row" style={{marginLeft:"0px"}}>
          <button className="primary" >Full Details</button>
        </div>
    
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