import "./FreeMember.css"
import Sidebar2 from './Sidebar2'
import React,{useState,useEffect} from 'react'
import { app } from './firebase';
import { collection, query, where, getDocs,or,and,orderBy  } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth  } from "firebase/auth";
import {doc,updateDoc} from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import {
  
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

import './components/Tab.css'
import Profile from './Profile'
import EducationDetails from './EducationDetails'
import FamilyDetails from './FamilyDetails'
import ProfessionalDetails from './ProfessionalDetails'
import BackgroundDetails from './BackgroundDetails'
import Sidebar from './Sidebar';
import ImgSection from './ImgSection';

const db = getFirestore(app)

function FreeMember(props) {

  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);

  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
   
  const [selected,setSelected] = useState("");
  const [members,setMembers] = useState([])
  const [prev, setPrev] = useState([]);
  const [flag,setflag] = useState(false);

  const [t1,setT1] = useState("")

  const getAllmembers = async () => {
    return await getDocs(collection(db, "users"));
   
  };

  const fetchAllmembers = async () => {
    const result = await getAllmembers();

    if (!result) {
      return;

    }

    var tempmembers1 = [];
    result.forEach((doc) => tempmembers1.push({ ...doc.data(), pid: doc.id }));

    tempmembers1 = tempmembers1.sort((a, b) => Number(b.featured) - Number(a.featured));

    setMembers(tempmembers1);
    setPrev(tempmembers1);
    // console.log(members);

  };

  const applyFilter1 = async() =>{

    console.log("filter1");
                                             
    const q2 = query(collection(db, "users"),  where("featured", "==", true)) 
    
    const querySnapshot = await getDocs(q2);
    var tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));

    // tmp = tmp.sort((a, b) => Number(b.featured) - Number(a.featured));
    console.log("Premium members : ",tmp)
    setMembers(tmp);

  }

  const applyFilter2 = async() =>{

    console.log("filter2");
                                             
    const q2 = query(collection(db, "users"),  where("featured", "==", false)) 
    
    const querySnapshot = await getDocs(q2);
    var tmp = [];
    querySnapshot.forEach((doc) => tmp.push({ ...doc.data(), pid: doc.id }));

    // tmp = tmp.sort((a, b) => Number(b.featured) - Number(a.featured));
    console.log("Free members : ",tmp)
    setMembers(tmp);

  }



  const clearFilter = () =>{
    // console.log("cleared");
    setMembers(prev)

  }

 


  //  Edit Section - opening

  // const [show, setShow] = useState(false);


  const [fullName,setFullName] = useState("");
  const [dob,setDOB] = useState("");
  const [pob,setPOB] = useState("");
  const [gender,setGender] = useState("");
  const [phone,setPhone] = useState("");
  const [height,setHeight] = useState("");

  const [collegeName,setCollegeName] = useState("");
  const [yop,setYop] = useState("");
  const [degree,setDegree] = useState("");

  const [workplace,setWorkPlace] = useState("");
  const [income,setIncome] = useState("");
  const [contact,setContact] = useState("");

  const [fathersName,setFatherName] = useState("");
  const [mothersName,setMotherName] = useState("");
  const [motherOccupation,setMotherOccupation] = useState("");
  const [fatherOccupation,setFatherOccupation] = useState("");
  const [familyLives,setFLives] = useState("");
  const [familyType,setFType] = useState("");

  const [caste,setCaste] = useState("");
  const [rashi,setRashi] = useState("");
  const [religion,setReligion] = useState("");
  const [subcaste,setSubCaste] = useState("");
  
  const docRef = doc (db,`users`,`${selected.username}`);

  const writeData =  async () =>{
   
   await updateDoc(docRef,  {
      fullName:fullName,
      dob:dob,
      pob:pob,
      gender:gender,
      phone:phone,
      height:height
    })

    setFullName("")
    setDOB("")
    setPOB("")
    setGender("")
    setPhone("")
    setHeight("")
   
    alert(`${selected.fullName}'s basic details edited successfully!`)
  
  }

  const writeData2 =  async () =>{

    await updateDoc(docRef,  {
 
     collegeName:collegeName,
     yop:yop,
     degree:degree
       
     })

    setCollegeName("")
    setYop("")
    setDegree("")

     alert(`${selected.fullName}'s educational details edited successfully!`)

    }

    const writeData3 =  async () =>{
     
      await updateDoc(docRef,  {
    
        workplace:workplace,
        income:income,
        contact:contact
       
         
       })

       setWorkPlace("")
      setIncome("")
      setContact("")

       alert(`${selected.fullName}'s professional details edited successfully!`)

      }

  const writeData4 =  async () =>{
     
        await updateDoc(docRef,  {
     
         fathersName:fathersName,
         mothersName:mothersName,
         fatherOccupation:fatherOccupation,
         motherOccupation:motherOccupation,
         familyLives:familyLives,
         familyType:familyType
         })

          setFatherName("")
          setMotherName("")
          setFatherOccupation("")
          setMotherOccupation("")
          setFLives("")
          setFType("")

      alert(`${selected.fullName}'s family details edited successfully!`)

  }
    
  const writeData5 =  async () =>{
  
    await updateDoc(docRef,  {
 
     caste:caste,
     rashi:rashi,
     religion:religion,
     subcaste:subcaste
     
       
     })

    setCaste("")
    setRashi("")
    setReligion("")
    setSubCaste("")

     alert(`${selected.fullName}'s background details edited successfully!`)
    
 
    
   
   }
        
       
    


  const handleSubmit1 = (e) =>{
    e.preventDefault();
    writeData(); 
  }
  const handleSubmit2 = (e) =>{
    e.preventDefault();
    writeData2(); 
  }
  const handleSubmit3 = (e) =>{
    e.preventDefault();
    writeData3(); 
  }
  const handleSubmit4 = (e) =>{
    e.preventDefault();
    writeData4(); 
  }
  const handleSubmit5 = (e) =>{
    e.preventDefault();
    writeData5(); 
  }



  const handleCurrent = (item) =>{
    setSelected(item)
    toggleShow();
  }



  // Edit Section - closing


  // Delete Section - starting


  let handleDeleteUser =  (e) => {
    e.preventDefault();

    
    // deleteUser(Cuser).then(async() => {
    //  await deleteDoc(doc(db, "users", `${usertodelete}`));
    
    // console.log(`${usertodelete} deleted successfully!`);
    // //  console.log("account deleted successfully!");
  
    // }).catch((error) => {
    //   console.log(error);
   
    // });

    getAuth()
  .deleteUser('RBM1xVpfcGPBwLcQBDOeqAsYqJ73')
  .then(() => {
    alert('Successfully deleted user');
  })
  .catch((error) => {
    alert('Error deleting user:', error);
  });
    
  };


  // Delete Section - ending

  useEffect(() => {

    fetchAllmembers();

    // eslint-disable-next-line
  }, []);



  return (
    <>

    <Sidebar2 name={props.name}/>
    
    <div className="main-content mc container">
  
  <div className="d-flex flex-row">

  {/* <select class="form-select mb-2" value={type}  onChange={(e) => {setMemberType(e)}} name="members"  aria-label="Default select example">
  <option value={!flag} >Free Member</option>
  <option value={flag}  >Premium Member</option>
 
</select> */}

   <MDBBtnGroup >
      {/* <MDBRadio btn btnColor='secondary'  wrapperClass='mx-2' wrapperTag='span' label='Free Members'  onClick={applyFilter2} />
      <MDBRadio btn btnColor='secondary' wrapperTag='span' label='Premium Members'  onClick={applyFilter1}  /> */}

      <MDBBtn btnColor='secondary' onClick={applyFilter2} style={{margin:"5px"}} >Free</MDBBtn>
      <MDBBtn btnColor='primary' onClick={applyFilter1} style={{margin:"5px"}} >Premium</MDBBtn>
    </MDBBtnGroup>

    <MDBBtn className='me-1' color='success'   >
        apply
      </MDBBtn>
      <MDBBtn className='me-1' color='danger'  onClick={clearFilter}>
       clear
      </MDBBtn>

  </div>


         <div className="records table-responsive">
          <div className="record-header">
          
            <div className="add">
              <span><h5>Free Members</h5></span>
            
            
            </div>
            <div className="browse">
              <input type="search" placeholder="Search" className="record-search" />
              <select name id>
                <option value>Status</option>
              </select>
            </div>
          </div>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Member Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>

              { members.map((item) => (

                <tr key={members.indexOf(item)+1}>
                  <td>{members.indexOf(item)+1}</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
                      {/* <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div> */}
                    </div>
                  </td>
                  <td>
                    {item.username}
                  </td>
                  <td>
                    {item.gender}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.featured}
                  </td>
                  <td>
                  <ul class="d-flex ">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  onClick={()=>handleCurrent(item)}
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                             
                            </ul>
                  </td>
              </tr>
              ))}
               
              </tbody>
            </table>

            <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit the details of {selected.fullName}</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <div className='cont'>
 
  <main className='mainT'>
    <input className="inp" id="tab1" type="radio" name="tabs" defaultChecked />
    <label htmlFor="tab1">1</label>
    <input className="inp" id="tab2" type="radio" name="tabs" />
    <label htmlFor="tab2">2</label>
    <input className="inp" id="tab3" type="radio" name="tabs" />
    <label htmlFor="tab3">3</label>
    <input className="inp" id="tab4" type="radio" name="tabs" />
    <label htmlFor="tab4">4</label>
    <input className="inp" id="tab5" type="radio" name="tabs" />
    <label htmlFor="tab5">5</label>



    <section id="content1">
    <div className="formcontainer">
  <div className="title">Basic Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder={selected.fullName} value={fullName}  onChange={(e) => setFullName(e.target.value)} name="name"   />
        </div>
        <div className="input-box">
          <span className="details">DOB</span>
          <input type="date" placeholder={selected.dob} value={dob}  onChange={(e) => setDOB(e.target.value)} name="dob" />
        </div>
        {/* <div className="input-box">
          <span className="details">Place Of Birth</span>
          <input type="text" placeholder="birth place" required value={pob}  onChange={(e) => setPOB(e.target.value)} name="pob" />
        </div> */}
        <select className="form-select input-box" aria-label="Default select example" placeholder={selected.pob} value={pob}  onChange={(e) => setPOB(e.target.value)} name="pob">
        <option selected>Place Of Birth</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Punjab">Punjab</option>
        <option value="Pune">Pune</option>
      </select>
        
      <select className="form-select input-box"  aria-label="Default select example"  value={gender}  onChange={(e) => setGender(e.target.value)} name="gender">
      <option selected>Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>

        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="tel"  maxLength={10} placeholder ={selected.contact} value={phone}  onChange={(e) => setPhone(e.target.value)} name="phone" />
        </div>
        
        
        <div className="input-box">
          <span className="details">Height</span>
          <input type="text" placeholder={selected.height}  value={height}  onChange={(e) => setHeight(e.target.value)} name="height"   />
        </div>
       
      </div>
      
      
      <div className="button">
        {/* <input type="submit" color='primary' value="Save" /> */}

             <MDBBtn type='button' color='primary' style={{
                 height: "100%",
                 width: "100%",
                 borderRadius: "5px",
                 border: "none",
                 color: "#fff",
                 fontSize: "18px",
                 fontWeight: "500",
                 letterSpacing: "1px",
                 cursor: "pointer",
                //  transition:" all 0.3s ease",
                

             }} 
             
             onClick={handleSubmit1}
             >
                Save
              </MDBBtn>

        {/* <Alert show={show} variant="success" style={{marginTop:"-20rem"}}> */}
        {/* <h5>Basic details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div> */}
      {/* </Alert> */}


      </div>
    </form>
  </div>
</div>
    </section>
    <section id="content2">
    <div className="formcontainer">
  <div className="title">Eductional Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">College Name</span>
          <input type="text" placeholder={selected.collegeName} value={collegeName}  onChange={(e) => setCollegeName(e.target.value)} name="college"   />
        </div>
        <div className="input-box">
          <span className="details">Year Of Passing</span>
      
          <input type="text" placeholder={selected.yop} value={yop}  onChange={(e) => setYop(e.target.value)} name="yop"    />
        </div>
       
       <select className="form-select input-box" placeholder={selected.degree} value={degree}  onChange={(e) => setDegree(e.target.value)} name="yop"   aria-label="Default select example">
        <option selected>Degree</option>
        <option value="Btech">Btech</option>
        <option value="Mtech">Mtech</option>
        <option value="Bsc">Bsc</option>
        <option value="Msc">Msc</option>
        <option value="Bcom">Bcom</option>
        <option value="Gujarat">Gujarat</option>
        <option value="MBBS">MBBS</option>
        <option value="MBA">MBA</option>
        <option value="Mass communication">Mass communication</option>
        <option value="Engineering">Engineering</option>
        <option value="Chartered accountant">Chartered accountant</option>
        <option value="Law">Law</option>
        <option value="B.Pharma">B.Pharma</option>
        <option value="M.Pharma">M.Pharma</option>
        <option value="B.Ed">B.Ed</option>
        <option value="BCA">BCA</option>
        <option value="MCA">MCA</option>
        <option value="B.Arch">B.Arch</option>
      </select>
      </div>
      <div className="button">
      <MDBBtn type='button' color='primary' style={{
                 height: "100%",
                 width: "100%",
                 borderRadius: "5px",
                 border: "none",
                 color: "#fff",
                 fontSize: "18px",
                 fontWeight: "500",
                 letterSpacing: "1px",
                 cursor: "pointer",
                //  transition:" all 0.3s ease",
                

             }}
             onClick={handleSubmit2}
             >
                Save
              </MDBBtn>

        {/* <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Educational details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert> */}

      </div>
    </form>
  </div>
</div>
    </section>
    <section id="content3">
    <div className="formcontainer">
        <div className="title">Professional Details</div>
        <div className="content">
          <form action="#">
            <div className="user-details">

            <select className="form-select input-box" placeholder={selected.workplace} value={workplace}  onChange={(e) => setWorkPlace(e.target.value)}   name="worlplace" aria-label="Default select example">
        <option selected>Employed In</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Lucknow">Lucknow</option>
        <option value="Chennai">Chennai</option>
        <option value="Punjab">Punjab</option>
        <option value="Pune">Pune</option>
      </select>
             
              <div className="input-box">
                <span className="details">Annual Income</span>
                <input
                  type="number"
                  placeholder={selected.income}
                  required
                  value={income}  onChange={(e) => setIncome(e.target.value)} name="income"
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="tel"  maxLength={10}   placeholder={selected.contact}
                required value={contact}  onChange={(e) => setContact(e.target.value)} name="contact" 
                />
              </div>
            </div>
            <div className="button">
            <MDBBtn type='button' color='primary' style={{
                 height: "100%",
                 width: "100%",
                 borderRadius: "5px",
                 border: "none",
                 color: "#fff",
                 fontSize: "18px",
                 fontWeight: "500",
                 letterSpacing: "1px",
                 cursor: "pointer",
                //  transition:" all 0.3s ease",
                

             }}
             onClick={handleSubmit3}
             >
                Save
              </MDBBtn>
              {/* <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Professional details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert> */}
            </div>
          </form>
        </div>
      </div>
    </section>
    <section id="content4">
    {/* <FamilyDetails/> */}

    <div className="formcontainer">
  <div className="title">Family Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Father Name</span>
          <input type="text" placeholder={selected.fathersName} 
          required value={fathersName}  onChange={(e) => setFatherName(e.target.value)} name="fathersName" 
           />
        </div>
        <div className="input-box">
          <span className="details">Mother Name</span>
          <input type="text"  placeholder={selected.mothersName} 
          required value={mothersName}  onChange={(e) => setMotherName(e.target.value)} name="mothersName" 
           />
        </div>
        <div className="input-box">
          <span className="details">Father Occupation</span>
          <input type="text"   placeholder={selected.fatherOccupation} 
          required value={fatherOccupation}  onChange={(e) => setFatherOccupation(e.target.value)} name="fatherOccupation" 
           />
        </div>
        <div className="input-box">
          <span className="details">Mother Occupation</span>
          <input type="text"   placeholder={selected.motherOccupation}
          required value={motherOccupation}  onChange={(e) => setMotherOccupation(e.target.value)} name="motherOccupation" 
           />
        </div>
        <div className="input-box">
          <span className="details">Family Lives</span>
          <input type="text"   placeholder={selected.familyLives} 
          required value={familyLives}  onChange={(e) => setFLives(e.target.value)} name="familyLives"  
          />
        </div>
        <div className="input-box">
          <span className="details">Family Type</span>
          <input type="text"   placeholder={selected.familyType}
          required value={familyType}  onChange={(e) => setFType(e.target.value)} name="familyType"  
          />
        </div>
       
      </div>
      <div className="button">
      <MDBBtn type='button' color='primary' style={{
                 height: "100%",
                 width: "100%",
                 borderRadius: "5px",
                 border: "none",
                 color: "#fff",
                 fontSize: "18px",
                 fontWeight: "500",
                 letterSpacing: "1px",
                 cursor: "pointer",
                //  transition:" all 0.3s ease",
                

             }} onClick={handleSubmit4} >
                Save
              </MDBBtn>
        {/* <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Family details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert> */}

      </div>
    </form>
  </div>
</div>

    </section>
    <section id="content5">
    {/* <BackgroundDetails/> */}
    <div className="formcontainer">
  <div className="title">Background Details</div>
  <div className="content">
    <form action="#">
      <div className="user-details">
      <select className="form-select input-box" placeholder={selected.religion} 
      value={religion} onChange={(e) => setReligion(e.target.value)} name="pob" aria-label="Default select example"
      >
        <option selected>Religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Bauddhist">Bauddhist</option>
        <option value="Zoroastrian">Zoroastrian</option>
        <option value="Jain">Jain</option>
        <option value="Judaism">Judaism</option>
        <option value="Non-Religious">Non-Religious</option>
       
      </select>

       
        <div className="input-box">
          <span className="details">Caste</span>
          <input type="text"
           placeholder={selected.caste}  value={caste}  onChange={(e) => setCaste(e.target.value)} name="caste" 
          />
        </div>
        <div className="input-box">
          <span className="details">Sub Caste</span>
          <input type="text"  placeholder={selected.subcaste} 
            value={subcaste}  onChange={(e) => setSubCaste(e.target.value)} name="subcaste"
            />
        </div>
        
        <select className="form-select input-box"   placeholder={selected.rashi} 
         value={rashi} onChange={(e) => setRashi(e.target.value)} name="pob" aria-label="Default select example"
        >
        <option selected>Rashi</option>
        <option value="Mesh">Mesh</option>
        <option value="Vrishabh">Vrishabh</option>
        <option value="Mithun">Mithun</option>
        <option value="Kark">Kark</option>
        <option value="Sinh">Sinh</option>
        <option value="Kanya">Kanya</option>
        <option value="Tula">Tula</option>
        <option value="Vrishchik">Vrishchik</option>
        <option value="Dhanu">Dhanu</option>
        <option value="Makar">Makar</option>
        <option value="Kumbh">Kumbh</option>
        <option value="Meen">Meen</option>
       
      </select>
      
      </div>
      <div className="button">
      <MDBBtn type='button' color='primary' style={{
                 height: "100%",
                 width: "100%",
                 borderRadius: "5px",
                 border: "none",
                 color: "#fff",
                 fontSize: "18px",
                 fontWeight: "500",
                 letterSpacing: "1px",
                 cursor: "pointer",
                //  transition:" all 0.3s ease",
                

             }}
             onClick={handleSubmit5} >
                Save
              </MDBBtn>
        {/* <Alert show={show} variant="success" style={{marginTop:"-20rem"}}>
        <h5>Background details updated successfully!</h5>
        
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert> */}
      </div>
    </form>
  </div>
</div>
    </section>
    {/* <section id="content6"> */}
      {/* <ImgSection/> */}
    {/* </section> */}
    
  </main>
</div>

   
            </MDBModalBody>
            <MDBModalFooter>
            {/* <MDBBtn type='button' color='primary' >
                Save
              </MDBBtn> */}
              <MDBBtn type='button' color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

          </div>
        </div>
   </div>
   </>
  )
}

export default FreeMember
