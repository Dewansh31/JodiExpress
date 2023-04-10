import React from 'react';
import './Tab.css'
import Profile from '../Profile'
import EducationDetails from '../EducationDetails'
import FamilyDetails from '../FamilyDetails'
import ProfessionalDetails from '../ProfessionalDetails'
import BackgroundDetails from '../BackgroundDetails'
import Sidebar from '../Sidebar';


const NavTab = (props) => {
  return (
    <>

    <Sidebar username={props.name}/>
    
   <div className='cont'>
  <h1>
    
  </h1>
  <main>
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
    <Profile/>
    </section>
    <section id="content2">
    <EducationDetails/>
    </section>
    <section id="content3">
    <ProfessionalDetails/>
    </section>
    <section id="content4">
    <FamilyDetails/>
    </section>
    <section id="content5">
    <BackgroundDetails/>
    </section>
    
  </main>
</div>


    </>


  )
}

export default NavTab;