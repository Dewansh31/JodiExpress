import React,{useState} from 'react'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
 
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  let handleSubmit =  (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
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
            <span className="text">Don't Have An Account? &nbsp;
              <Link to="/signup" className="text login-link">Signup</Link>
            </span>
          </div>
        </div></form>
    </div>
  </div>
</div>

  )
}

export default Login