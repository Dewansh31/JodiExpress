import React,{useState,useEffect} from "react";
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app)

function ProfessionalDetails() {

  const [workplace,setWorkPlace] = useState("");
  const [income,setIncome] = useState("");
  const [contact,setContact] = useState("");

  useEffect(() => {
		   getData();
       // eslint-disable-next-linecd
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users/${user.displayName}/professionalDetails`,`${user.displayName}`);
   await updateDoc(docRef,  {
 
     workplace:workplace,
     income:income,
     contact:contact
    
      
    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users/${user.displayName}/professionalDetails`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const proDetailsData = docSnap.data();
    console.log(proDetailsData);

    setWorkPlace(proDetailsData.workplace)
    setIncome(proDetailsData.income)
    setContact(proDetailsData.contact)
    

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    getData();
  }


  return (
    <div>
      <div className="container">
        <div className="title">Professional Details</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Employed In</span>
                <input type="text" placeholder="Work place" required value={workplace}  onChange={(e) => setWorkPlace(e.target.value)} name="workplace" />
              </div>
              <div className="input-box">
                <span className="details">Annual Income</span>
                <input
                  type="text"
                  placeholder="annual income"
                  required
                  value={income}  onChange={(e) => setIncome(e.target.value)} name="income"
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="phone number" required value={contact}  onChange={(e) => setContact(e.target.value)} name="contact" />
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalDetails;
