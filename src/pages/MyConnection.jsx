import React from "react";
import Sidebar from "../Sidebar";
import "./myConn.css";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import { app } from '../firebase';
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';

const db = getFirestore(app)

const MyConnection = (props) => {

  const [mconnections,setMConnections] = useState([]);
  const [tUser,setTUser] = useState(null);



  const handleMarrySent = async () => {

    const auth = getAuth();
    const sender = auth.currentUser;

    // receiving
     const receivedRef = doc (db,`users`,`${tUser.username}`);
      await  updateDoc(receivedRef,  {
        marryreceived: arrayUnion(sender.displayName)
       })
    

       //sending
      const sendRef = doc (db,`users`,`${sender.displayName}`);
        await updateDoc(sendRef,  {
        marrysent: arrayUnion(tUser.username)
       })

       // const firestore = getFirestore()
       const docRef = doc(db, `users`, sender.displayName)
       const docRef2 = doc(db, `users`, tUser.username)

       const docSnap = await getDoc(docRef)
       const docSnap2 = await getDoc(docRef2)

       const data = docSnap.exists() ? docSnap.data() : null
       const data2 = docSnap2.exists() ? docSnap2.data() : null
     
       if (data === null || data === undefined) return null
       if (data2 === null || data2 === undefined) return null

       // console.log(data.sentrequests);
       var temp = data.marrysent
       temp = temp.filter(function(value, index, arr){ 
         return value !== tUser.username;
     })
       var temp2 = data2.marryreceived
       temp2 = temp2.filter(function(value, index, arr){ 
         return value !== sender.displayName;
     })

     // receiving
       const receivedRef2 = doc (db,`users`,`${tUser.username}`);
       await  updateDoc(receivedRef2,  {
        marrysent: temp2
        })
     
 
      //sending
       const sendRef2 = doc (db,`users`,`${sender.displayName}`);
         await updateDoc(sendRef2,  {
          marryreceived: temp
        })




  }

  const handleMarryDiscard = () =>{

  }

  
  


  const getDetailonMarry = async (u) =>{

     // const firestore = getFirestore()
     const docRef = doc(db, `users`, u)
     const docSnap = await getDoc(docRef)
   
     const data = docSnap.exists() ? docSnap.data() : null
   
     if (data === null || data === undefined) return null
   
    //  console.log(data);

     setTUser(data);

     handleMarrySent();

  }
  
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
      fetchConnections();
      // console.log(loggedInUser);  
      }, [mconnections]);
    


  return (

    <div className=' mc mcont'>

     <Sidebar username={props.name} />

     <div >


     <h2>My connections</h2>

          
  <div className=" membercontainer">

  {
    mconnections.length === 0 &&
    <p>No connections found!</p>
  }


 <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">

  
  {
    mconnections.map((item) => (

      
        

      

      <div className="col-sm-4 " >
        
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{item}</h6>
          <p className="card-text">

          <div className="d-flex flex-column ">

           
            
              <>
              <div  style={{margin:"2px 2px"}}>
              <MDBBtn outline rounded color='success'  onClick={() => getDetailonMarry(item)}>
                marry
              </MDBBtn></div>
            <div className="">
               <MDBBtn outline rounded color='danger'>
                Discard
              </MDBBtn></div>
              </>
           
       
       
      </div>
          
         

         
    
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
