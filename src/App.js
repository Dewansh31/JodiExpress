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

function App() {

	const [isAuthenticated,setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");
	
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
		  if (user) {
			setUserName(user.displayName);
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
				<Route path="/*" element={<Login />} />	
				</>
		


	

   

	{ isAuthenticated &&

       <>

        <Route path="/" element={<Dashboard name={userName} />} />

		<Route path="/dashboard" element={<Dashboard name={userName} />} />
  
		<Route path="/profile" element={<NavTab name={userName} />} />
		<Route path="/familydetails" element={<FamilyDetails name={userName} />} />
		<Route path="/professionaldetails" element={<ProfessionalDetails name={userName} />} />
		<Route path="/educationaldetails" element={<EducationDetails name={userName} />} />
		<Route path="/myconnections" element={<MyConnection  name={userName}/>} />
		<Route path="/myrequests" element={<MyRequests name={userName} />} />

		<Route path="*" element={<ErrorPage name={userName}/>} />	
		
		</>
   }

		</Routes>

	

	
	  
    </Router>
  );
}

export default App;


