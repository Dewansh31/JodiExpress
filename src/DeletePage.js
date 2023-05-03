import Sidebar from './Sidebar'
import React,{useEffect, useState} from 'react'
import './Login.css';
import {updateDoc,getDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, deleteUser } from "firebase/auth";
import { auth } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, deleteDoc } from "firebase/firestore";
import { app } from './firebase';;


const db = getFirestore(app)

const DeletePage = (props) => {

  

  const toastSuccess = () => toast.success('Account deleted successfully!');
  const toastError = () => toast.error('Deletion failed!');
  const validationError = () => toast.error('Please fill all fields!');
  const validation2Error = () => toast.error('Invalid credentials!');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertodelete, setusertodelete] = useState("");
  const [Cuser,setCuser] = useState(null);

  const navigate = useNavigate();
 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  let handleSubmit =  (e) => {
    e.preventDefault();

    if (!email || !password) {
      // setErrorMsg("Fill all fields");
      validationError()
      return;
    }


    setSubmitButtonDisabled(true);

  
  //  console.log(usertodelete);
 

    deleteUser(Cuser).then(async() => {
     await deleteDoc(doc(db, "users", `${usertodelete}`));
    
     toastSuccess()
     await delay(1500)
    //  console.log("account deleted successfully!");
     navigate('/login')
    }).catch((error) => {
      console.log(error);
      toastError()
    });
    
  };

  const deactivate = async () => {

    const auth = getAuth();
    const user = auth.currentUser;
  
     const docRef = doc (db,`users`,`${user.displayName}`);
     await updateDoc(docRef,  {
        status: "deactivate"
      })
   


  }

  useEffect(() => {
    
  const auth = getAuth();
  const user = auth.currentUser;
  setusertodelete(user.displayName);
  setCuser(user);
  }, [])
  


  return (
    <div>
      <Sidebar username={props.name} />
     
      <div className="container1">


<div className="title">Deactivate Account</div>
<div className="content">
  <form action="#">
    <div className="user-details1">
      
      <div className="input-box1">
        <span className="details">Email</span>
        <input type="email" placeholder="Enter your email" required value={email}  onChange={(e) => setEmail(e.target.value)} name="email" />
      </div>
     
      <div className="input-box1">
        <span className="details">Password</span>
        <input type="password" placeholder="Enter your password" required value={password}  onChange={(e) => setPassword(e.target.value)} name="password" />
      </div>
     
      <div className="button">
        <input type="submit" value='Deactivate'  disabled={submitButtonDisabled} onClick={deactivate} /><br /><br/>
       

        <ToastContainer
          position="top-right"
          autoClose={5000}
        />

        
      </div>
      



    </div>
    

    </form>

  

</div>
</div>

      </div>
  )
}

export default DeletePage