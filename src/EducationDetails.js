import React,{useEffect,useState} from 'react'
import './Profile.css';
import { getFirestore } from "firebase/firestore";
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import { app } from './firebase';
import { getAuth } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


const firestore = getFirestore(app)

function EducationDetails() {

  const [show, setShow] = useState(false);


  const [collegeName,setCollegeName] = useState("");
  const [yop,setYop] = useState("");
  const [degree,setDegree] = useState("");
 

  useEffect(() => {
		   getData();
       // eslint-disable-next-line
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
    setShow(true)
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
       
       <select className="form-select input-box" required value={degree} onChange={(e) => setDegree(e.target.value)} name="pob" aria-label="Default select example">
        <option selected>Degree</option>
        <option value="Btech">Btech</option>
        <option value="Mtech">Mtech</option>
        <option value="Bsc">Bsc</option>
        <option value="Msc">Msc</option>
        <option value="Bcom">Bcom</option>
        <option value="Gujarat">Gujarat</option>
        <option value="MBBS">MBBS</option>
        <option value="MBA">MBA</option>
        <option value="Mass communication">Mass communication</option>
        <option value="Engineering">Engineering</option>
        <option value="Chartered accountant">Chartered accountant</option>
        <option value="Law">Law</option>
        <option value="B.Pharma">B.Pharma</option>
        <option value="M.Pharma">M.Pharma</option>
        <option value="B.Ed">B.Ed</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="B.Arch">B.Arch</option>
      </select>
      </div>
      <div className="button">
        <input type="submit" defaultValue="Register" onClick={handleSubmit} />

        <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Educational details updated successfully!</h5>
        
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

export default EducationDetails
