import React from 'react'
import './Profile.css';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';

import { MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Grid = () => {
  return (
    <div  >
    <div className="container" style={{maxWidth:"1200px",maxHeight:"8000px"}}>
 <div className="title"> Details</div>
 <div className="content">

 <MDBRow style={{width:"100%"}}>

 <MDBCard style={{maxWidth:"1200px",maxHeight:"800px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>

      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        
        <Link>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </Link>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn to='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{maxWidth:"1200px",maxHeight:"200px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        
        <Link>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </Link>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    <MDBCard style={{maxWidth:"1200px",maxHeight:"200px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        
        <Link>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </Link>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    </MDBRow>



    
   
 </div>
</div>


   </div>
  )
}

export default Grid