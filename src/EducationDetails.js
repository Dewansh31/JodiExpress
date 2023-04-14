import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";

const firestore = getFirestore(app)

function EducationDetails() {

  const [collegeName,setCollegeName] = useState("");
  const [yop,setYop] = useState("");
  const [degree,setDegree] = useState("");

  useEffect(() => {
		   getData();
       // eslint-disable-next-linecd
	  }, []);



  const auth = getAuth();
  const user = auth.currentUser;



  const writeData =  async () =>{
   const docRef = doc (firestore,`users`,`${user.displayName}`);
   await updateDoc(docRef,  {

    collegeName:collegeName,
    yop:yop,
    degree:degree
      
    })
   
   
  
  }

  const getData = async()=>{


    const docRef = doc (firestore,`users`,`${user.displayName}`);
    const docSnap = await getDoc(docRef);
    const edDetailsData = docSnap.data();
    // console.log(edDetailsData);

    setCollegeName(edDetailsData.collegeName)
    setYop(edDetailsData.yop)
    setDegree(edDetailsData.degree)
    

  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    writeData();
    getData();
  }

  return (
    <div>
        <div className="formcontainer">
  <div className="title">Eductional Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">College Name</span>
          <input type="text" placeholder=" College name" required value={collegeName}  onChange={(e) => setCollegeName(e.target.value)} name="collegeName" />
        </div>
        <div className="input-box">
          <span className="details">Year Of Passing</span>
          <input type="text" placeholder=" year of passing" required value={yop}  onChange={(e) => setYop(e.target.value)} name="yop" />
        </div>
        <div className="input-box">
          <span className="details">Degree</span>
          <input type="text" placeholder=" your degree" required value={degree}  onChange={(e) => setDegree(e.target.value)} name="degree" />
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

export default EducationDetails
