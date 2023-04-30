import React,{useState,useEffect} from 'react'
import './Search.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { app } from '../firebase';
import { MDBBadge } from 'mdb-react-ui-kit';
import { collection, query, where, getDocs,or,and,orderBy  } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import Select from 'react-select';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {doc,updateDoc} from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";


const db = getFirestore(app)

function Search() {



  const data = [
    {
      value: "Durg",
      label: "Durg"
    },
    {
      value: "Raipur",
      label: "Raipur"
    },
    {
      value: "Bhilai",
      label: "Bhilai"
    },
    {
      value: "Kavardha",
      label: "Kavardha"
    },
    {
      value: "Mumbai",
      label: "Mumbai"
    },
    {
      value: "Delhi",
      label: "Delhi"
    }
  ];

  const degreedata = [
    {
      value: "Btech",
      label: "Btech"
    },
    {
      value: "Mtech",
      label: "Mtech"
    },
    {
      value: "Bsc",
      label: "Bsc"
    },
    {
      value: "Msc",
      label: "Msc"
    },
    {
      value: "Bcom",
      label: "Bcom"
    },
    {
      value: "MBBS",
      label: "MBBS"
    },
    {
      value: "MBA",
      label: "MBA"
    },
    {
      value: "Mass communication",
      label: "Mass communication"
    },
    {
      value: "Engineering",
      label: "Engineering"
    },
    {
      value: "Chartered accountant",
      label: "Chartered accountant"
    },
    {
      value: "Fashion Designing",
      label: "Fashion Designing"
    },
    {
      value: "Civil services",
      label: "Civil services"
    },
    {
      value: "Accounts & Finance",
      label: "Accounts & Finance"
    },
    {
      value: "Mtech",
      label: "Mtech"
    },
    {
      value: "Law",
      label: "Law"
    },
    {
      value: "Hotel management",
      label: "Hotel management"
    },
    {
      value: "BBA",
      label: "BBA"
    },
    {
      value: "B.Pharma",
      label: "B.Pharma"
    },
    {
      value: "M.Pharma",
      label: "M.Pharma"
    },
    {
      value: "B.Ed",
      label: "B.Ed"
    },
    {
      value: "BCA",
      label: "BCA"
    },
    {
      value: "MCA",
      label: "MCA"
    },
    {
      value: "B.Arch",
      label: "B.Arch"
    },
    {
      value: "Journalism",
      label: "Journalism"
    }
  ];

  const religiondata = [
    {
      value: "Hindu",
      label: "Hindu"
    },
    {
      value: "Muslim",
      label: "Muslim"
    },
    {
      value: "Christian",
      label: "Christian"
    },
    {
      value: "Sikh",
      label: "Sikh"
    },
    {
      value: "Bauddhist",
      label: "Bauddhist"
    },
    {
      value: "Zoroastrian",
      label: "Zoroastrian"
    },
    {
      value: "Jain",
      label: "Jain"
    },
    {
      value: "Judaism",
      label: "Judaism"
    },
    {
      value: "Non-Religious",
      label: "Non-Religious"
    }
  ];

  const castedata = [
    {
      value: "Yadav",
      label: "Yadav"
    },
    {
      value: "Sahu",
      label: "Sahu"
    },
    {
      value: "Verma",
      label: "Verma"
    },
    
   
  ];

  const incomedata = [
    {
      value: "100000",
      label: "100000"
    },
    {
      value: "200000",
      label: "200000"
    },
    {
      value: "500000",
      label: "500000"
    },
    
  ];

  // set value for default selection
  const [cityValue, setcityValue] = useState(null);
  const [degree, setDegree] = useState(null);
  const [religion, setReligion] = useState(null);
  const [caste, setCaste] = useState(null);
  const [income, setIncome] = useState(null);
  const [selected,setSelected] = useState("");


  

  const handleSelected = (u) =>{
    setSelected(u);
    setShow(true);
   
   
  }

  // const getsentmembers = async () => {

  //   const auth = getAuth();
  //   const sender = auth.currentUser;
  //   return await getDocs(collection(db, `users/${sender.username}/sentrequests`));
   
  // };


  const handleConnect = async(r) =>{


    const auth = getAuth();
    const sender = auth.currentUser;

    console.log(`sender : ${sender.displayName}`);
    console.log(`receiver : ${r.username}`);

    // receiving
     const receivedRef = doc (db,`users`,`${r.username}`);
      await  updateDoc(receivedRef,  {
        receivedrequests: arrayUnion(sender.displayName)
       })
    

       //sending
      const sendRef = doc (db,`users`,`${sender.displayName}`);
        await updateDoc(sendRef,  {
        sentrequests: arrayUnion(r.username)
       })

      //  setShowAlert(true);
      alert("Connection sent!")


  }

  




  // handle onChange event of the dropdown
  const handleChange = e => {
    setcityValue(e.value);
  }

  const handleDegree = e => {
    setDegree(e.value);
    // applyFilter();
  }
  const handleReligion = e => {
    setReligion(e.value);
  }
  const handleCaste = e => {
    setCaste(e.value);
  }
  const handleIncome = e => {
    setIncome(e.value);
  }

  const [members, setmembers] = useState([]);

  
  const [prev, setPrev] = useState([]);

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

 

  // const printer = () =>{
  //   console.log(`city selected:`, cityValue);
  //   console.log(`degree selected:`, degree);
  //   console.log(`religion selected:`, religion);
  //   console.log(`caste selected:`, caste);
  //   console.log(`income selected:`, income);
  // }


  const getAllmembers = async () => {
    return await getDocs(collection(db, "users"));
   
  };

  const fetchAllmembers = async () => {
    const result = await getAllmembers();

    if (!result) {
      return;

    }

    var tempmembers = [];
    result.forEach((doc) => tempmembers.push({ ...doc.data(), pid: doc.id }));

    tempmembers = tempmembers.sort((a, b) => Number(b.featured) - Number(a.featured));

    setmembers(tempmembers);
    setPrev(tempmembers);
    // console.log(members);
  };


  const applyFilter = async() =>{

    // const q1 = query(collection(db, "users"), and(
                                            //  where("caste", "==", caste),
                                            //  where("degree", "==", degree),
                                            //  where("income", "==", income),
                                            //  where("religion", "==", religion),
                                            //  where("city", "==", cityValue)
                                            //  ));
                                             
    const q2 = query(collection(db, "users"),
                                             or(
                                              and(
                                                 where("caste", "==", caste),
                                                 where("degree", "==", degree),
                                                 where("income", "==", income),
                                                 where("religion", "==", religion),
                                                //  where("city", "==", cityValue)
                                                 ),
                                                 or(
                                                  where("caste", "==", caste),
                                                  where("degree", "==", degree),
                                                  where("income", "==", income),
                                                  where("religion", "==", religion),
                                                 //  where("city", "==", cityValue)
                                                   )
                                                   

                                             ) 
                                           
                                             );

    const querySnapshot = await getDocs(q2);
   
    var tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));

    tmp = tmp.sort((a, b) => Number(b.featured) - Number(a.featured));
    setmembers(tmp);

  }

  const clearFilter = () =>{
    // console.log("cleared");
    setmembers(prev)
    setCaste(null);
    setDegree(null);
    setcityValue(null);
    setIncome(null);
    setReligion(null);
  }




 

  useEffect(() => {

    fetchAllmembers();
    // eslint-disable-next-line
  }, []);


 
   

  return (
    <div className='container mc'>
     <div className="searchBarwrapper">
  <div id="search-scontainer">
    <input type="search" id="search-input" placeholder="Search here.." />
    <button id="searchbtn" type='submit' onClick={applyFilter} >Search</button>
    <button id="clr" type='submit' onClick={clearFilter} >Clear Filter</button>
  </div>
  <div id="buttons d-flex flex-row">
    
  <div class="container selectContainer">
 
  <div class="row">
    <div class="col">



    <Select
        placeholder="City"
        // className='button-value'
        value={data.filter(obj => obj.value === cityValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    </div>
    <div class="col">
    <Select
        placeholder="Income"
        // className='button-value'
        value={incomedata.filter(obj => obj.value === income)} // set selected value
        options={incomedata} // set list of the data
        onChange={handleIncome} // assign onChange function
      />
    </div>
    <div class="col">
    <Select
        placeholder="Religion"
        // className='button-value'
        value={religiondata.filter(obj => obj.value === religion)} // set selected value
        options={religiondata} // set list of the data
        onChange={handleReligion} // assign onChange function
      />
    </div>
    <div class="col">
    <Select
        placeholder="Caste"
        // className='button-value'
        value={castedata.filter(obj => obj.value === caste)} // set selected value
        options={castedata} // set list of the data
        onChange={handleCaste} // assign onChange function
      />
    </div>
    <div class="col">
  

<Select
        placeholder="Qualification"
        // className='button-value'
        value={degreedata.filter(obj => obj.value === degree)} // set selected value
        options={degreedata} // set list of the data
        onChange={handleDegree} // assign onChange function
      />
    </div>
  </div>
</div>

   
   
  </div>
  <div  />

</div>
        
   <div className="container membercontainer">

   {
      members.length === 0 &&
  (

    <p>No result found</p>
    // <div class="d-flex justify-content-center">
    // <div class="spinner-border" role="status">
    //   <span class="visually-hidden">Loading...</span>
    // </div>
    // </div>



  )
      
   }

  <div className="row row-cols-1  row-cols-md-4 ">

   

  { members.map((item) => (
 
    <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
      
      <img src="data:image/png;base64,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"  className="card-img-top" alt="..." />
 
        
        {/* <img src={item.url}  className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title"> {item.fullName} </h5>
   
        {
            item.featured && 
            <MDBBadge color='warning' light>featured</MDBBadge>
          }
          <p className="card-text">
          Qualification : {item.degree} <br/>
          Gender : {item.gender} <br/>
          Religion : {item.religion} <br/>
          Caste : {item.caste}
         
          </p>


      <div >

      <Button className='detailBtn' variant="primary" onClick={() => handleSelected(item)}>Full Details</Button>
      {/* <h6 className="connectBtn" variant="secondary" onClick={() => handleConnect(item)}>  connect  </h6> */}
      <MDBBtn outline rounded onClick={() => handleConnect(item)}>
      connect
      </MDBBtn>

      


        </div>
      

  

       

     <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {selected.fullName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="rounded-circle mt-5"
                width="150px"
                alt='img'
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{selected.username}</span>
              <span className="text-black-50">{selected.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-4 border-right">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Basic Details</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Full Name: {selected.fullName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>DOB : {selected.dob}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Birth Place: {selected.pob}</h6>
                 
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Gender: {selected.gender}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Phone Number: {selected.contact}</h6>
                  
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Height: {selected.height}</h6>
                  
                </div> 
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Eductional Details</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>College Name : {selected.collegeName}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Year Of Passing: {selected.yop}</h6>
                
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Degree: {selected.degree}</h6>
                 
                </div>  
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <u><h5 className="text-right" style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}>Professional Details</h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Employed In: {selected.workplace}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Annual Income: {selected.income}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Phone Number: {selected.contact}</h6>
                  
                </div>  
              </div>
              
              
             
            </div>
          </div>
          <div className="col-md-5">
            <div className="p-2 py-2">
              <div className="d-flex justify-content-between align-items-center experience">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span>Background Details</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Religion: {selected.religion}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}} >Caste: {selected.caste}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Sub Caste: {selected.subcaste}</h6>
                  
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Rashi: {selected.rashi}</h6>
                
                </div>
                <div className="d-flex justify-content-between align-items-center experience mt-3">
                <u><h5 style={{fontWeight:"bold",fontFamily:"Palatino",color:"red"}}><span>Family Details</span></h5></u>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Name: {selected.fathersName}</h6>
                  
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Mother Name: {selected.mothersName}</h6>
                 
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Father Occupation:{selected.fatherOccupation}</h6>
                
                </div>
                <div className="col-md-6">
                 <h6 style={{fontFamily:"Palatino"}}>Mother Occupation: {selected.motherOccupation}</h6>
                 
                </div>
                <div className="col-md-6">
                <h6 style={{fontFamily:"Palatino"}}>Family Type:{selected.familyType}</h6>
                 
                </div>
                <div className="col-md-6">
                  <h6 style={{fontFamily:"Palatino"}}>Family Lives: {selected.familyLives}</h6>
                 
                </div>
                </div>
                
                </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
        </Modal.Body>
      </Modal>


        </div>
        
      </div>


    </div>

      ))}

   {/* <Alert show={showAlert} variant="success" >
        <h5>Connection sent successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAlert(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert> */}


  </div>
  
</div>

 </div>
  )
}

export default Search