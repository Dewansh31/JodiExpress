import React from 'react'
import "./AddReligion.css";
import Sidebar2 from './Sidebar2';
import {doc,updateDoc,getDoc } from "firebase/firestore"; 
import {arrayUnion } from "firebase/firestore";
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import { app } from './firebase';
import { auth } from "./firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';

const db = getFirestore(app)

function AddCaste(props) {

  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);

  const [cityList,setCityList] = useState([]);
  const [cityValue,setCityValue] = useState("");
  const [selectedCity,setSelectedCity] = useState("");
  const [editCity,setEditCity] = useState("");
  const [newcityvalue,setNewCityValue] = useState("");
  const [cities, setCities] = useState([]);

  const foo = () => {
    var headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "ZjV4eWVjaEpBZkFrVTk1N2VUaGhOeGNPQ2dDeGliMlBtUzFRaWo3Rw=="
    );

    var requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow"
    };

    fetch(
      "https://api.countrystatecity.in/v1/countries/IN/cities",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //    for (let i = 0; i < result.length; i++) {
        //         console.log(result[i].name)
        // }
        setCities(result);
        // console.log(result)
      })
      .catch((error) => console.log("error", error));
  }

  const fetchCastes = async () => {
   
    const docRef = doc(db, `admindata`, "castedata")
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    
    setCityList(data.castes);


    
  
    };

    const addCities =  async () =>{
      const cityRef = doc (db,`admindata`,`castedata`);
   
      await  updateDoc(cityRef,  {
        castes: arrayUnion(cityValue)
       })

       setCityValue("")
      }

      const handleSelected = async() =>{
        
       
       
      }

      const handleEdit = async() =>{

     
          const docRef = doc(db, `admindata`, 'castedata')
        

          const docSnap = await getDoc(docRef)
          
  
          const data = docSnap.exists() ? docSnap.data() : null
         
        
          if (data === null || data === undefined) return null
          
  
          // console.log(data.sentrequests);
          var temp = data.castes
          var index = temp.indexOf(editCity)
       
  
        temp[index] = newcityvalue;
        console.log(temp[index]);
        
  
        
          await  updateDoc(docRef,  {
            castes: temp
           })

            setNewCityValue("")
            setEditCity("")
        


      }

      const deleteCaste = async(r) =>{

        console.log(r);


        // const firestore = getFirestore()
        const docRef = doc(db, `admindata`, 'castedata')
        

        const docSnap = await getDoc(docRef)
        

        const data = docSnap.exists() ? docSnap.data() : null
       
      
        if (data === null || data === undefined) return null
        

       

        // console.log(data.sentrequests);
        var temp = data.castes
        temp = temp.filter(function(value, index, arr){ 
          return value !== r;
      })
      

      
        await  updateDoc(docRef,  {
          castes: temp
         })

        
  
    
    
      }
     
      

    useEffect(() => {
      fetchCastes()
      foo()
      setSelectedCity("")
      }, [cityList]);
    

  return (
    <div>

      <Sidebar2 name={props.name}/>
    <main className="cn">
    <select class="form-select mb-1 sc" aria-label="Default select example">

    {
    cityList.map((item) => (
   <option value={item}>{item}</option>
    ))}
    
   </select>

      <div className="accontainer mt-4 ck">
        <div className="row">
          <div className="col-md-6 mb-4"  style={{overflowY:"scroll", height:"400px"}}>
            <div className="acard indigo form-white">


  
      
      <div className="acard-body" >
      <h5 className="default-text">All Castes</h5>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.N.</th>
              <th scope="col">Caste Name</th>
              <th scope="col">Options</th>
            </tr>
          </thead>
          <tbody>

         { cityList.map((item) => (
            <tr>
              <th scope="row">{cityList.indexOf(item)+1}</th>
              <td>{item}</td>
              <td>
                <ul class="d-flex ">
                  <li class="list-inline-item">
                    <button
                      class="btn btn-success btn-sm btn-floating"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit"
                      onClick={()=>setEditCity(item)}
                    >
                      <i class="fa fa-edit"></i>
                    </button>
                  </li>
                  <li class="list-inline-item">
                    <button
                      class="btn btn-danger btn-sm btn-floating"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onClick={() => deleteCaste(item)}
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </li>
                </ul>
              </td>
            </tr>

            ))}
            
          </tbody>

          
        </table>
      </div>
    </div>
  



            </div>
          </div>

          <div className="col-md-6 mb-4" >
            <div className="acard" >
              <div className="acard-body">
                <h5 className="default-text">Add New Caste</h5>
                {/*Body*/}
                <div className="md-form">
                  <label htmlFor="defaultForm-email">Name</label>
                  <input
                    type="text"
                    id="defaultForm-email"
                    className="form-control"
                    value={cityValue}  onChange={(e) => setCityValue(e.target.value)} name="cityValue"
                  />
                </div>
                <div className="text-center mt-2 rk">
                  <button type="button" class="btn btn-primary" onClick={addCities}>
                    Save
                  </button>
                </div>
              </div>
            </div>
            <hr/>
            <div className="acard" >
              <div className="acard-body">
                <h5 className="default-text">Edit Caste</h5>
                {/*Body*/}
                <div className="md-form">
                  <label htmlFor="defaultForm-email">Caste</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={editCity}
                     value={newcityvalue} 
                     onChange={(e) => setNewCityValue(e.target.value)}
                  />
                </div>
                <div className="text-center mt-2 rk">
                  <button type="button" class="btn btn-primary" onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>

         
          
        </div>
      </div>
    </main>

    


  </div>
  )
}

export default AddCaste
