import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app);

function BackgroundDetails() {

  const [caste,setCaste] = useState("");
  const [rashi,setRashi] = useState("");
  const [religion,setReligion] = useState("");
  const [subcaste,setSubCaste] = useState("");

  useEffect(() => {
		   getData();
       // eslint-disable-next-linecd
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.displayName}`);
   await updateDoc(docRef,  {

    caste:caste,
    rashi:rashi,
    religion:religion,
    subcaste:subcaste
    
      
    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const bgDetailsData = docSnap.data();
    // console.log(bgDetailsData);

    setCaste(bgDetailsData.caste)
    setRashi(bgDetailsData.rashi)
    setReligion(bgDetailsData.religion)
    setSubCaste(bgDetailsData.subcaste)
    

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    getData();
  }

  return (
    <div>
       <div className="formcontainer">
  <div className="title">Background Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Religion</span>
          <input type="text" placeholder=" religion" required value={religion}  onChange={(e) => setReligion(e.target.value)} name="religion" />
        </div>
        <div className="input-box">
          <span className="details">Caste</span>
          <input type="text" placeholder=" caste" required value={caste}  onChange={(e) => setCaste(e.target.value)} name="caste" />
        </div>
        <div className="input-box">
          <span className="details">Sub Caste</span>
          <input type="text" placeholder=" sub caste" required value={subcaste}  onChange={(e) => setSubCaste(e.target.value)} name="subcaste" />
        </div>
        <div className="input-box">
          <span className="details">Rashi</span>
          <input type="text" placeholder=" rashi" required value={rashi}  onChange={(e) => setRashi(e.target.value)} name="rashi" />
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

export default BackgroundDetails
