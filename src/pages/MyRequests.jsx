import Sidebar from '../Sidebar'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const MyRequests = (props) => {

 

  return (
    <div>
      <Sidebar username={props.name}/>
        
      <div className="tabset">
  <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked />
  <label htmlFor="tab1">Sent</label>
  <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
  <label htmlFor="tab2">Received</label>
 
  <div className="tab-panels">
    <section id="marzen" className="tab-panel">

    <div className="container membercontainer">
  <div className="row row-cols-1  row-cols-md-4 ">

    <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        
        </div>

 <div className="row row-cols-1  row-cols-md-4 ">

<div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste :  
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    </div>

        </div>

    </section>
    <section id="rauchbier" className="tab-panel">

    <div className="container membercontainer">
  <div className="row row-cols-1  row-cols-md-4 ">

    <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">
          Religion :  <br/>
          Caste : 
      
          </p>


      <div >

      <Button className='detailBtn' variant="primary" >Full Details</Button>
      <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

        </div>
        </div>
        </div>
        </div>

        
        </div>

 <div className="row row-cols-1  row-cols-md-4 ">

<div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste :  
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    <div className="col-sm-4" >
  <div className="card " style={{width: '100%'}}>
    <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">
      Religion :  <br/>
      Caste : 
  
      </p>


  <div >

  <Button className='detailBtn' variant="primary" >Full Details</Button>
  <Button className="connectBtn" variant="secondary">  connect 🔗 </Button>

    </div>
    </div>
    </div>
    </div>

    </div>

        </div>
        
    </section>
  
  </div>
</div>


    </div>
  )
}

export default MyRequests