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

const db = getFirestore(app)

function AddCaste(props) {

  const [cityList,setCityList] = useState([]);
  const [cityValue,setCityValue] = useState("");

  const fetchCastes = async () => {
   
    // const auth = getAuth();
    // const sender = auth.currentUser;
  
    // const firestore = getFirestore()
    const docRef = doc(db, `admindata`, "castedata")
    const docSnap = await getDoc(docRef)
  
    const data = docSnap.exists() ? docSnap.data() : null
  
    if (data === null || data === undefined) return null
  
    
    setCityList(data.castes);
    // console.log("cities:",cityList);

    
  
    };

    const addCities =  async () =>{
      const cityRef = doc (db,`admindata`,`castedata`);
      // console.log(cityValue);
      await  updateDoc(cityRef,  {
        castes: arrayUnion(cityValue)
       })

       setCityValue("")
      }

     
      

    useEffect(() => {
      fetchCastes()
      // console.log(loggedInUser);  
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
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default AddCaste
