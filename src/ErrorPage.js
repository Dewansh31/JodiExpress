import React, { useState,useEffect } from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";

const ErrorPage = (props) => {

 const [u,setU] = useState(false)

  useEffect(() => {

    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      setU(true)
    }
  
 }, [u]);

  return (
     <>
      <h1>404 Error </h1>
<p class="zoom-area"> The page you are looking for is not found! </p>
<section class="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
{
      (u)
      ?  <Link  to="/" class="more-link">Go to Dashboard</Link>
      :  <Link  to="/login" class="more-link">Login</Link>

}
        

</div>
     </>    
  )
}

export default ErrorPage