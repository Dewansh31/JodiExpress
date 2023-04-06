import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function BasicDetailsForm() {
  return (
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' placeholder='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' placeholder='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='dob' type="datetime-local" />
        </MDBCol>
        <MDBCol>
          <MDBInput id='pob' placeholder='Place of Birth' style={{background:"none"}} />
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
        
            <select class="form-select" aria-label="Gender">
            <option selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            </select>
        </MDBCol>
        <MDBCol>
        <select class="form-select" aria-label="Zodiac">
            <option selected>Zodiac Sign</option>
            <option value="1">Aries</option>
            <option value="2">Taurus</option>
            <option value="3">Gemini</option>
            <option value="4">Cancer</option>
            <option value="5">Leo</option>
            <option value="6">Virgo</option>
            <option value="7">Libra</option>
            <option value="8">Scorpio</option>
            <option value="9">Sagittarius</option>
            <option value="10">Capricorn</option>
            <option value="11">Aquarius</option>
            <option value="12">Pieces</option>
            </select>
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
        <MDBCol>
        
            <select class="form-select" aria-label="Religion">
            <option selected>Religion</option>
            <option value="1">Hinduism</option>
            <option value="2">Islam</option>
            <option value="3">Chrisitianity</option>
            <option value="4">Jainishm</option>
            <option value="5">Sikkhism</option>
            <option value="6">Buddhism</option>
            <option value="7">Zoroastrianism</option>
            <option value="8">Not Specified</option>
          
            </select>
        </MDBCol>
        <MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' placeholder='Caste' />
        </MDBCol>
        </MDBCol>
      </MDBRow>

      <MDBRow className='mb-4'>
         <MDBCol>
          <MDBInput id='form3Example2' placeholder='Height' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' placeholder='Mobile' />
        </MDBCol>
      </MDBRow>
      


      
    </form>
  );
}