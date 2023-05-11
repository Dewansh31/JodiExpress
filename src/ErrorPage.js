import React, { useState,useEffect } from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import errorimg from './images/error.png'

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
     <div className=' ' style={{
      margin:"auto",
      maxWidth:"500px",
      borderRadius:"10px"
     }}>
      <h1>404 Error </h1>

      <div className="" >

<h3 style={{margin:"auto",
           marginLeft:"100px",
          justifyContent:"center"
    }}>Page not found!</h3>

  <img style={{
    height:"50%",
    width:"50%",
    marginLeft:"150px",
    justifyContent:"center"
  }} src={errorimg}   alt="..." />

</div>


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
     </div>    
  )
}

export default ErrorPage