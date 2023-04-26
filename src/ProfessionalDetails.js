import React,{useState,useEffect} from "react";
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const firestore = getFirestore(app)

function ProfessionalDetails() {

  const [show, setShow] = useState(false);


  const [workplace,setWorkPlace] = useState("");
  const [income,setIncome] = useState("");
  const [contact,setContact] = useState("");

  useEffect(() => {
		   getData();
      // eslint-disable-next-line 
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.displayName}`);
   await updateDoc(docRef,  {
 
     workplace:workplace,
     income:income,
     contact:contact
    
      
    })


   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const proDetailsData = docSnap.data();
    // console.log(proDetailsData);

    setWorkPlace(proDetailsData.workplace)
    setIncome(proDetailsData.income)
    setContact(proDetailsData.contact)
    
   

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    setShow(true)
    getData();
  }


  return (
    <div>
      <div className="formcontainer">
        <div className="title">Professional Details</div>
        <div className="content">
          <form action="#">
            <div className="user-details">

            <select className="form-select input-box" required value={workplace} onChange={(e) => setWorkPlace(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Employed In</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Punjab">Punjab</option>
        <option value="Pune">Pune</option>
      </select>
              {/* <div className="input-box">
                <span className="details">Employed In</span>
                <input type="text" placeholder="Work place" required value={workplace}  onChange={(e) => setWorkPlace(e.target.value)} name="workplace" />
              </div> */}
              <div className="input-box">
                <span className="details">Annual Income</span>
                <input
                  type="number"
                  placeholder="annual income"
                  required
                  value={income}  onChange={(e) => setIncome(e.target.value)} name="income"
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="tel"  maxLength={10} placeholder="phone number" required value={contact}  onChange={(e) => setContact(e.target.value)} name="contact" />
              </div>
            </div>
            <div className="button">
              <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
              <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Professional details updated successfully!</h5>
        
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
  );
}

export default ProfessionalDetails;
