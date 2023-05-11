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
import { getAuth} from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';

const firestore = getFirestore(app)

const storageRef = ref(storage);

function Signup() {

  const navigate = useNavigate();

  const toastSuccess = () => toast.success('Signed up successfully!');
  const toastError = () => toast.error('Signup failed!');
  const validationError = () => toast.error('Please fill all fields!');
  const validation2Error = () => toast.error('Invalid credentials!');
   
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU");


  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [key, setKey] = useState();



 



  const writeData =  async (e) =>{

    if(role === "admin"){

      
  const userRef = collection(firestore, `admins`);
  
  await setDoc(doc(userRef, `${username}`), {
    username:username.concat(key),
    email:email,
    password:password,
    fullName:"",
    dob:"",
    gender:"",
    phone:"",
    role:role,
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
});


    }else{

      const userRef = collection(firestore, `users`);
  
      await setDoc(doc(userRef, `${username}`), {
        username:username.concat(key),
        email:email,
        password:password,
        active:true,
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
        featured:false,
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
        role:role,
        connections:[],
        sentrequests:[],
        receivedrequests:[],
        marryconnections:[],
        marrysent:[],
        marryreceived:[],
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2hw0Mq5YNF3BFKPHP5WBxrAOAl1_MdYPxQ&usqp=CAU"
    });
    

    }

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
      console.log(user.uid);
      setKey(user.uid)
    
      writeData();

     

      if(role == "admin"){
        await updateProfile(user, {
          displayName: username.concat(key),
          photoURL:"admin"  
          
        });

   

      }else{
        await updateProfile(user, {
          displayName: username.concat(key),
          
        });

     

      }

      console.log(user);

      // navigate('/')
    
      if(res.user.photoURL == "admin"){
        await delay(1000);
        navigate("/dashboard2");
      } else{
        await delay(1000);
        navigate("/dashboard");
      };

      
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      // setErrorMsg(err.message);
      toastError();
    });

 
  };


  return (
    <div>
      <div className="lcontainer1">
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
         
          <div className="input-box1">
            <span className="details">Password</span>
            <input type="password" placeholder="Enter your password" required value={password}  onChange={(e) => setPassword(e.target.value)} name="password"/>
          </div>

          <input type="file"  onChange={(event) => {
          setImageUpload(event.target.files[0]);
          }} />


   {/* <select className="form-select input-box1" required value={role} onChange={(e) => setRole(e.target.value)} name="role" aria-label="Default select example">
      <option selected>Select role</option>
      <option value="user">user</option>
      <option value="admin">admin</option>
    </select> */}
      

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