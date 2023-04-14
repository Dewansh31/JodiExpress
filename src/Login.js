import React,{useState} from 'react'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        
        await delay(1500);
       
        navigate("/");
    
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        // setErrorMsg(err.message);
        validation2Error()
      });
    
  };

  return (
    <div>

      
  <div className="container1">


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