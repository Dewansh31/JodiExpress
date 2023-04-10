import React,{useState,useEffect} from 'react'
import './Profile.js';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app)

function FamilyDetails() {

  const [fathersName,setFatherName] = useState("");
  const [mothersName,setMotherName] = useState("");
  const [motherOccupation,setMotherOccupation] = useState("");
  const [fatherOccupation,setFatherOccupation] = useState("");
  const [familyLives,setFLives] = useState("");
  const [familyType,setFType] = useState("");

  useEffect(() => {
		   getData();
       // eslint-disable-next-linecd
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;

  // collection(firestore,`users/${username}/basicDetails`)

  const writeData =  async () =>{
   const docRef = doc (firestore,`users/${user.displayName}/familyDetails`,`${user.displayName}`);
   await updateDoc(docRef,  {

    fathersName:fathersName,
    mothersName:mothersName,
    fatherOccupation:fatherOccupation,
    motherOccupation:motherOccupation,
    familyLives:familyLives,
    familyType:familyType
    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users/${user.displayName}/familyDetails`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const familyDetailsData = docSnap.data();
    console.log(familyDetailsData);

    setFatherName(familyDetailsData.fathersName)
    setMotherName(familyDetailsData.mothersName)
    setFatherOccupation(familyDetailsData.fatherOccupation)
    setMotherOccupation(familyDetailsData.motherOccupation)
    setFLives(familyDetailsData.familyLives)
    setFType(familyDetailsData.familyType)

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    getData();
  }

  return (
    <div>
       <div className="container">
  <div className="title">Family Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Father Name</span>
          <input type="text" placeholder=" Father's name" required value={fathersName}  onChange={(e) => setFatherName(e.target.value)} name="fathersName"  />
        </div>
        <div className="input-box">
          <span className="details">Mother Name</span>
          <input type="text" placeholder=" Mother's username" required value={mothersName}  onChange={(e) => setMotherName(e.target.value)} name="mothersName"  />
        </div>
        <div className="input-box">
          <span className="details">Father Occupation</span>
          <input type="text" placeholder=" Father's Ocuupation" required value={fatherOccupation}  onChange={(e) => setFatherOccupation(e.target.value)} name="fatherOccupation"  />
        </div>
        <div className="input-box">
          <span className="details">Mother Occupation</span>
          <input type="text" placeholder=" Mother's Ocuupation" required value={motherOccupation}  onChange={(e) => setMotherOccupation(e.target.value)} name="motherOccupation"  />
        </div>
        <div className="input-box">
          <span className="details">Family Lives</span>
          <input type="text" placeholder=" Family Lives" required value={familyLives}  onChange={(e) => setFLives(e.target.value)} name="familyLives"  />
        </div>
        <div className="input-box">
          <span className="details">Family Type</span>
          <input type="text" placeholder=" Family type" required value={familyType}  onChange={(e) => setFType(e.target.value)} name="familyType"  />
        </div>
       
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit} />
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default FamilyDetails
