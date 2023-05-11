import React,{useState,useEffect} from 'react'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth } from "firebase/auth";

function Login() {


  const toastSuccess = () => toast.success('Logged in successfully!');
  const toastError = () => toast.error('Login failed!');
  const validationError = () => toast.error('Please fill all fields!');
  const validation2Error = () => toast.error('Invalid credentials!');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {

        setSubmitButtonDisabled(false);
        
        toastSuccess()

           console.log(res.user.uid+res.user.uid);

        if(res.user.photoURL == "admin"){
           await delay(1000);
          navigate("/dashboard2");
        } else {
           await delay(1000);
          navigate("/dashboard");
        };
       
       
    
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsg(err.message);
        validation2Error()
      });
    
  };

  // useEffect(() => {

  //   const auth = getAuth();
  //   const user = auth.currentUser;

  //   if (user) {


	// 		if(user.photoURL == "admin"){
	// 			navigate("/dashboard2");
	// 		} else {
  //       navigate("/dashboard");
	// 	  };
	// 	}

	
	//   }, []);


  return (
    <div>

      
  <div className="lcontainer1">


    <div className="title">Login</div>
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
          <p className="errormsg">{errorMsg}</p>
          <div className="button">
            <input type="submit" defaultValue="Login" isabled={submitButtonDisabled} onClick={handleSubmit} /><br /><br/>
           

            <ToastContainer
              position="top-right"
              autoClose={5000}
            />

            <span className="text">Don't Have An Account? &nbsp;
              <Link to="/signup" className="text login-link">Signup</Link>
            </span>
          </div>
          



        </div>
        

        </form>

      

    </div>
  </div>

</div>

  )
}

export default Login