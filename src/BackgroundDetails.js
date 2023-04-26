import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const firestore = getFirestore(app);

function BackgroundDetails() {

  const [show, setShow] = useState(false);

 

  const [caste,setCaste] = useState("");
  const [rashi,setRashi] = useState("");
  const [religion,setReligion] = useState("");
  const [subcaste,setSubCaste] = useState("");

  useEffect(() => {
		   getData();
      // eslint-disable-next-line 
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
    setShow(true)
    getData();
  }

  return (
    <div>
       <div className="formcontainer">
  <div className="title">Background Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
      <select className="form-select input-box" required value={religion} onChange={(e) => setReligion(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Bauddhist">Bauddhist</option>
        <option value="Zoroastrian">Zoroastrian</option>
        <option value="Jain">Jain</option>
        <option value="Judaism">Judaism</option>
        <option value="Non-Religious">Non-Religious</option>
       
      </select>

       
        <div className="input-box">
          <span className="details">Caste</span>
          <input type="text" placeholder=" caste" required value={caste}  onChange={(e) => setCaste(e.target.value)} name="caste" />
        </div>
        <div className="input-box">
          <span className="details">Sub Caste</span>
          <input type="text" placeholder=" sub caste" required value={subcaste}  onChange={(e) => setSubCaste(e.target.value)} name="subcaste" />
        </div>
        {/* <div className="input-box">
          <span className="details">Rashi</span>
          <input type="text" placeholder=" rashi" required value={rashi}  onChange={(e) => setRashi(e.target.value)} name="rashi" />
        </div> */}
        <select className="form-select input-box" required value={rashi} onChange={(e) => setRashi(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Rashi</option>
        <option value="Mesh">Mesh</option>
        <option value="Vrishabh">Vrishabh</option>
        <option value="Mithun">Mithun</option>
        <option value="Kark">Kark</option>
        <option value="Sinh">Sinh</option>
        <option value="Tula">Tula</option>
        <option value="Vrishchik">Vrishchik</option>
        <option value="Dhanu">Dhanu</option>
        <option value="Makar">Makar</option>
        <option value="Kumbh">Kumbh</option>
        <option value="Meen">Meen</option>
       
      </select>
      
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit}/>
        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Background details updated successfully!</h5>
        
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

export default BackgroundDetails
