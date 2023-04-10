import React,{useState} from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { getFirestore } from "firebase/firestore";
import { collection, setDoc,doc } from "firebase/firestore"; 
import { app } from './firebase';

const firestore = getFirestore(app)

function Signup() {

  const navigate = useNavigate();
   

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const writeData =  async () =>{
    const authRef = collection(firestore, `users/${username}/authDetails`);
    const basicDetailsRef = collection(firestore, `users/${username}/basicDetails`);
    const educationaldetailsRef = collection(firestore, `users/${username}/educationDetails`);
    const professionalDetailsRef = collection(firestore, `users/${username}/professionalDetails`);
    const familyDetailsRef = collection(firestore, `users/${username}/familyDetails`);
    const backgroundDetailsRef = collection(firestore, `users/${username}/backgroundDetails`);

    
    // const result = await addDoc(collection(firestore,`users/${username}/authDetails`),{
    //    username:username,
    //    email:email,
    //    password:password,

    //  })

     await setDoc(doc(authRef, `${username}`), {
       username:username,
       email:email,
       password:password,
   });

      await setDoc(doc(basicDetailsRef, `${username}`), {
            fullName:"",
            dob:"",
            pob:"",
            gender:"",
            phone:"",
            height:""
    });

    await setDoc(doc(educationaldetailsRef, `${username}`), {
        collegeName:"",
        yop:"",
        degree:""
    });

    await setDoc(doc(professionalDetailsRef, `${username}`), {
        workplace:"",
        income:"",
        contact:""
    });

    await setDoc(doc(familyDetailsRef, `${username}`), {
          fathersName:"",
          mothersName:"",
          fatherOccupation:"",
          motherOccupation:"",
          familyLives:"",
          familyType:""
    });

    await setDoc(doc(backgroundDetailsRef, `${username}`), {
      religion:"",
      caste:"",
      subcaste:"",
      rashi:""
    });


    //  const result1 = await addDoc(collection(firestore,`users/${username}/basicDetails`),{
    //   fullName:"",
    //   dob:"",
    //   pob:"",
    //   gender:"",
    //   phone:"",
    //   height:""

    // })

    // const result2 = await addDoc(collection(firestore,`users/${username}/educationDetails`),{
      // collegeName:"",
      // yop:"",
      // degree:""

    // })

    // const result3 = await addDoc(collection(firestore,`users/${username}/professionalDetails`),{
    //   workplace:"",
    //   income:"",
    //   contact:""

    // })

    // const result4 = await addDoc(collection(firestore,`users/${username}/familyDetails`),{
    //   fathersName:"",
    //   mothersName:"",
    //   fatherOccupation:"",
    //   motherOccupation:"",
    //   familyLives:"",
    //   familyType:""

    // })

    // const result5 = await addDoc(collection(firestore,`users/${username}/backgroundDetails`),{
    //   religion:"",
    //   caste:"",
    //   subcaste:"",
    //   rashi:""
     

    // })

    //  console.log(result);

   }


  let handleSubmit =  (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, email,password)
    .then(async (res) => {
      setSubmitButtonDisabled(false);
      const user = res.user;
      writeData();

      await updateProfile(user, {
        displayName: username,
      });

      
     console.log(username);
     console.log(email);
  
      navigate("/");
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
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

          <p className="errormsg">{errorMsg}</p>

          <div className="button">
            <input type="submit" defaultValue="Register" disabled={submitButtonDisabled} onClick={handleSubmit} /><br /><br/>
            <span className="text">Already Have An Account? &nbsp;
              <Link to="/login" className="text login-link">Login</Link>
            </span>
          </div>
        </div></form>
    </div>
  </div>
    </div>
  )
}

export default Signup