import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EducationDetails from "./EducationDetails";
import FamilyDetails from "./FamilyDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import Dashboard from './pages/Dashboard';
import MyConnection from './pages/MyConnection';
import MyRequests from './pages/MyRequests';
import NavTab from './components/NavTab'
import Signup from './Signup'
import Login from './Login'

import { useState,useEffect } from 'react';
import { auth } from "./firebase";
import ErrorPage from './ErrorPage';
import DeletePage from './DeletePage';
import Proposals from './pages/Proposals';
import Couples from './pages/Couples';
import SelfInfo from './components/SelfInfo';


//admin 


import FreeMember from "./FreeMember";
import AddMember from "./AddMember";
import AddReligion from "./AddReligion";
import Dashboard2 from "./Dashboard2";
import PemiumMember from "./PemiumMember";
import AddCaste from "./AddCaste";


function App() {

	const [isAuthenticated,setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");
	// const [profilePhoto, setProfilePhoto] = useState(null);
	
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
		  if (user) {
			setUserName(user.displayName);
			// setProfilePhoto(user.photoURL);
			setIsAuthenticated(true)
		  } else {
			setUserName("")
		  };
		});
	  }, []);


  return (
    <Router>
      


    

		<Routes>

			

				<>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} /> 
				<Route path="*" element={<Login />} />	
				</>
		


	

   

	{ isAuthenticated &&

       <>

        <Route path="/" element={<Dashboard name={userName}/>} />

		<Route path="/dashboard" element={<Dashboard name={userName}  />} />
		 <Route path="/selfinfo" element={<SelfInfo name={userName} />} />
		<Route path="/profile" element={<NavTab name={userName} />} />
		<Route path="/familydetails" element={<FamilyDetails name={userName} />} />
		<Route path="/professionaldetails" element={<ProfessionalDetails name={userName} />} />
		<Route path="/educationaldetails" element={<EducationDetails name={userName} />} />
		<Route path="/myconnections" element={<MyConnection  name={userName}/>} />
		<Route path="/myrequests" element={<MyRequests name={userName} />} />
		<Route path="/myproposals" element={<Proposals name={userName} />} />
		<Route path="/couples" element={<Couples name={userName} />} />
		<Route path="*" element={<ErrorPage name={userName}/>} />	

        {/* admin */}

		<Route path="/dashboard2" element={<Dashboard2/>} />
        <Route path="/addreligion" element={<AddReligion/>} />
        <Route path="/addcaste" element={<AddCaste/>}/>
        <Route path="/addmember" element={<AddMember/>} />
        <Route path="/freemember" element={<FreeMember/>} />
        <Route path="/premiummember" element={<PemiumMember/>} />

		<Route path="/couples" element={<Couples />} />

		
		</>
   }

		</Routes>

	

	
	  
    </Router>
  );
}

export default App;


