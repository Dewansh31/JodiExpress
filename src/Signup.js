import React,{useState} from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection, setDoc,doc } from "firebase/firestore"; 
import { app } from './firebase';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firestore = getFirestore(app)

const storageRef = ref(storage);

function Signup() {

  const navigate = useNavigate();

  const toastSuccess = () => toast.success('Signed up successfully!');
  const toastError = () => toast.error('Signup failed!');
  const validationError = () => toast.error('Please fill all fields!');
  const validation2Error = () => toast.error('Invalid credentials!');
   
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState();


  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

 



  const writeData =  async (e) =>{


    const userRef = collection(firestore, `users`);

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        console.log(url);
      });
    });

    
  await setDoc(doc(userRef, `${username}`), {
    username:username,
    email:email,
    password:password,
    fullName:"",
    dob:"",
    pob:"",
    gender:"",
    phone:"",
    height:"",
    collegeName:"",
    yop:"",
    degree:"",
    workplace:"",
    income:"",
    contact:"",
    fathersName:"",
    mothersName:"",
    fatherOccupation:"",
    motherOccupation:"",
    familyLives:"",
    familyType:"",
    religion:"",
    caste:"",
    subcaste:"",
    rashi:"",
    connections:[],
    sentrequests:[],
    receivedrequests:[],
    url:imageUrl
});




  

   }


  let handleSubmit =  (e) => {
    e.preventDefault();

    if (!username || !email || !password ) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, email,password)
    .then(async (res) => {
      setSubmitButtonDisabled(false);
      toastSuccess()
      const user = res.user;
      writeData();

    
      await updateProfile(user, {
        displayName: username,
        // photoURL: imageUrl
      });

      await delay(1500);

    //  console.log(username);
    //  console.log(email);
  
      navigate("/");
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      // setErrorMsg(err.message);
      toastError();
    });

    //  console.log(username);
    //  console.log(email);
    
  };


  return (
    <div>
      <div className="container1">
    <div className="title">Signup</div>
    <div className="content">
      <form action="#">
        <div className="user-details1">
          <div className="input-box1">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required value={username}  onChange={(e) => setUserName(e.target.value)} name="username"  />
          </div>
          <div className="input-box1">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" required  value={email}  onChange={(e) => setEmail(e.target.value)} name="email" />
          </div>
          {/* <div className="input-box1">
            <span className="details">Phone</span>
            <input type="text" placeholder="Enter your number" required />
          </div> */}
          <div className="input-box1">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" required value={password}  onChange={(e) => setPassword(e.target.value)} name="password"/>
          </div>

          <input type="file"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }} />


          
      

          <p className="errormsg">{errorMsg}</p>

          <div className="button">
            <input type="submit" defaultValue="Register" disabled={submitButtonDisabled} onClick={handleSubmit} /><br /><br/>

            
            <ToastContainer
              position="top-right"
              autoClose={5000}
            />

            <span className="text">Already Have An Account? &nbsp;
              <Link to="/login" className="text login-link">Login</Link>
            </span>
          </div>

          {/* <button type='submit' onClick={uploadImage}> upload </button> <br /> */}


        </div></form>
    </div>
  </div>
    </div>
  )
}

export default Signup