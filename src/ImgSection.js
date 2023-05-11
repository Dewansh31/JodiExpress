import React,{useEffect,useState} from 'react'
import './Profile.css';
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { auth } from "./firebase";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection, setDoc } from "firebase/firestore"; 


import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "./firebase";

const firestore = getFirestore(app);
const storageRef = ref(storage);

const ImgSection = () => {

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [show, setShow] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;
  

  const writeData =  async (e) =>{
    e.preventDefault();

    const docRef = doc (firestore,`users`,`${user.displayName}`);

    if (imageUpload == null) return;

    const imageRef = ref(storage, `${user.displayName}/images`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        console.log(url);
        
    });

   
    

});

      
  await updateDoc(docRef,  {
            url:imageUrl
          })

          setShow(true)
  

   }




  return (
    <div>
    <div className="formcontainer">
<div className="title">Profile Image</div>
<div className="content">
 <form action="#">
   <div className="user-details">
  
   <input type="file"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }} />

   </div>
   <div className="button">
     <input type="submit" defaultValue="Register" onClick={writeData}/>
     <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
     <h5>Profile Image updated successfully!</h5>
     
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

export default ImgSection