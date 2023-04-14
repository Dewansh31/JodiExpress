import React,{useState,useEffect} from 'react'
import './Search.css';
import { doc, getDoc } from "firebase/firestore";
import { app } from '../firebase';
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import Select from 'react-select';
import { MDBRow } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import DetailPage from '../DetailPage';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
      value: "Bauddha",
      label: "Bauddha"
    },
    {
      value: "Parsi",
      label: "Parsi"
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
   
    // console.log("selected user", u.username);
  }

  // handle onChange event of the dropdown
  const handleChange = e => {
    setcityValue(e.value);
  }

  const handleDegree = e => {
    setDegree(e.value);
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

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

 

  const printer = () =>{
    console.log(`city selected:`, cityValue);
    console.log(`degree selected:`, degree);
    console.log(`religion selected:`, religion);
    console.log(`caste selected:`, caste);
    console.log(`income selected:`, income);
  }


  const getAllmembers = async () => {
    return await getDocs(collection(db, "users"),where);
   
  };

  const fetchAllmembers = async () => {
    const result = await getAllmembers();

    if (!result) {
      return;

    }

    const tempmembers = [];
    result.forEach((doc) => tempmembers.push({ ...doc.data(), pid: doc.id }));

    setmembers(tempmembers);
    setPrev(tempmembers);
    // console.log(members);
  };


  const applyFilter = async() =>{

    const q = query(collection(db, "users"), 
                                             where("caste", "==", caste),
                                             where("degree", "==", degree),
                                             where("income", "==", income),
                                             where("religion", "==", religion),
                                            //  where("city", "==", cityValue)
                                             );

    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.data());
    // });

    const tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));


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
  }, []);


 
   

  return (
    <div className='container mc'>
     <div className="searchBarwrapper">
  <div id="search-scontainer">
    <input type="search" id="search-input" placeholder="Search here.." />
    <button id="searchbtn" type='submit' onClick={applyFilter} >Search</button>
    <button id="clr" type='submit' onClick={clearFilter} >Clear Filter</button>
  </div>
  <div id="buttons d-flex">
    
   
     <Select
        placeholder="City"
        // className='button-value'
        value={data.filter(obj => obj.value === cityValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
    
    <Select
        placeholder="Qualification"
        // className='button-value'
        value={degreedata.filter(obj => obj.value === degree)} // set selected value
        options={degreedata} // set list of the data
        onChange={handleDegree} // assign onChange function
      />
 
    <Select
        placeholder="Religion"
        // className='button-value'
        value={religiondata.filter(obj => obj.value === religion)} // set selected value
        options={religiondata} // set list of the data
        onChange={handleReligion} // assign onChange function
      />
 
    <Select
        placeholder="Caste"
        // className='button-value'
        value={castedata.filter(obj => obj.value === caste)} // set selected value
        options={castedata} // set list of the data
        onChange={handleCaste} // assign onChange function
      />
 
    <Select
        placeholder="Income"
        // className='button-value'
        value={incomedata.filter(obj => obj.value === income)} // set selected value
        options={incomedata} // set list of the data
        onChange={handleIncome} // assign onChange function
      />
  </div>
  <div  />

</div>
        
   <div className="container membercontainer">
  <div className="row row-cols-1  row-cols-md-4 ">

  { members.map((item) => (
 
    <div className="col-sm-4" >
      <div className="card " style={{width: '100%'}}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.username}</h5>
          <p className="card-text">
          Full Name : {item.fullName} <br/>
          Qualification : {item.degree} <br/>
          Gender : {item.gender} <br/>
          Religion : {item.religion} <br/>
          Caste : {item.caste}
      
          </p>

      {/* <button onClick={() => handleSelected(item)}>show</button> */}

      <Button variant="primary" onClick={() => handleSelected(item)}>Full Details</Button>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selected.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
{/* 
          Full Name : {selected.fullName} <br/>
          Qualification : {selected.degree} <br/>
          Gender : {selected.gender} <br/>
          Religion : {selected.religion} <br/>
          Caste : {selected.caste} */}

        
{/*           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

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
        <div className="container rounded bg-white mt-5 mb-5  border border-dark">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">{selected.username}</span>
              <span className="text-black-50">{selected.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="text-right">Basic Details</h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  Full Name: xyzfg
                 
                </div>
                <div className="col-md-6">
                  DOB : 22/7/2021
                  
                </div>
                <div className="col-md-6">
                 Birth Place: Rasmada
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    defaultValue
                  /> */}
                </div>
                <div className="col-md-6">
                Gender: Male
                 
                </div>
                <div className="col-md-6">
                 Phone Number: 9874561233
                  
                </div>
                <div className="col-md-6">
                Height: 6ft
                  
                </div> 
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <h5 className="text-right">Eductional Details</h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                College Name : CSIT
                 
                </div>
                <div className="col-md-6">
                  Year Of Passing: 2024
                  {/* <input
                    type="text"
                    className="form-control"
                    defaultValue
                    placeholder="surname"
                  /> */}
                </div>
                <div className="col-md-6">
                Degree: B.Tech
                 
                </div>  
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <h5 className="text-right">Professional Details</h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  Employed In: xyz
                  
                </div>
                <div className="col-md-6">
                  Annual Income: 10000
                 
                </div>
                <div className="col-md-6">
                 Phone Number: 1478529632
                  
                </div>  
              </div>
              
              
             
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center experience">
                <h5><span>Background Details</span></h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 Religion: Hindu
                  
                </div>
                <div className="col-md-6">
                  Caste: kgflk
                 
                </div>
                <div className="col-md-6">
                  Sub Caste: dgdfd
                  
                </div>
                <div className="col-md-6">
                 Rashi: dgfdf
                
                </div>
                <div className="d-flex justify-content-between align-items-center experience mt-3">
                <h5><span>Family Details</span></h5>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                 Father Name: abfd
                  
                </div>
                <div className="col-md-6">
                  Mother Name: abfd
                 
                </div>
                <div className="col-md-6">
                 Father Occupation: abfd
                
                </div>
                <div className="col-md-6">
                 Mother Occupation: abfd
                 
                </div>
                <div className="col-md-6">
                Family Type: abfd
                 
                </div>
                <div className="col-md-6">
                  Family Lives: abfd
                 
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

  </div>
  
</div>

 </div>
  )
}

export default Search