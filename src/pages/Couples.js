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
import Sidebar2 from '../Sidebar2';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

const db = getFirestore(app)

const Couples = (props) => {

    const [sCouples,setSCouples] = useState([]);

    const fetchCouples = async () => {
     
      
        const docRef = doc(db, `marriages`, `successful`)
        const docSnap = await getDoc(docRef)
      
        const data = docSnap.exists() ? docSnap.data() : null
      
        if (data === null || data === undefined) return null
        
        setSCouples(data.couples)
        // console.log(sCouples);
        // console.log(`couples 1 : ${Object.keys(data.couples[0])} and ${Object.values(data.couples[0])}`)
      
        };

        useEffect(() => {

            fetchCouples();
            // eslint-disable-next-line
          }, []);


  return (
    <div>
          {/* <Sidebar username={props.name}/>

          {
             sCouples.map((item) => (
                <h3>{`${Object.keys(item)} and ${Object.values(item)}`}</h3>
             ))
          }

          <MDBBtn style={{cursor:"pointer"}} outline rounded rippleColor='green'  color='success' onClick={() => console.log(sCouples)}>✔️</MDBBtn> */}

<div className='container mc mcont'>

{/* <Sidebar username={props.name} /> */}
<Sidebar2 name={props.name}/>

<div >


{/* <h2>Successfull Couples</h2> */}
{/* <MDBListGroup style={{ Width: '100%',position:"relative" }} > */}
      {/* <MDBListGroupItem style={{margin:"auto",padding:"4px"}}><h2>Successfull Couples</h2> </MDBListGroupItem> */}

      <div className="page-header" style={{padding:"0 0 0 0",position:"relative"}}>
        <h3 style={{padding:"10px 50px ",margin:"auto"}}>Successfull Couples</h3>
       
      </div>

    {/* </MDBListGroup> */}

     
<div className="container membercontainer">

{
sCouples.length === 0 &&
<p>No connections found!</p>
}


<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">


{
sCouples.map((item) => (

 
   

 

 <div className="col-sm-4 " >
 <div className="card " style={{width: '100%'}}>

    <div className="d-flex flex-row ">
        <div className="p-2"><img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." /></div>
        <div className="p-2"> <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." /></div>

      </div>

   
  

   <div className="card-body">
     <h6 className="card-title">{` ${Object.values(item)[0]} and ${Object.values(item)[1]} `}</h6>
     <p className="card-text">

     <div className="d-flex flex-column ">

      
      
      
  
  
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


    </div>
  )
}

export default Couples