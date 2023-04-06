// import Sidebar from './components/Sidebar';
// // import './App.css'
// import Dashboard from './pages/Dashboard';
// import MyProfile from './pages/MyProfile';
// import MyConnection from './pages/MyConnection';
// import MyRequests from './pages/MyRequests';
// import Signup from './pages/Signup';
// import Plans from './pages/Plans';
// import MainPage from './pages/MainPage';
// import Profile from './components/FormGroup/Profile';
// import FamilyDetails from './components/FormGroup/FamilyDetails';
// import Sidebar2 from './components/Sidebar2';
// import EducationDetails from './components/FormGroup/EducationDetails';
// import ProfessionalDetails from './components/FormGroup/ProfessionalDetails';


// function App() {
//   return (
// 	<Router>
// 	{/* <Sidebar2> */}

// 	  <Routes>
// 	   <Route path="/" element={<Dashboard />} />
// 		<Route path="/dashboard" element={<Dashboard />} />
// 		<Route path="/myprofile" element={<MyProfile />} />
// 		<Route path="/myrequests" element={<MyRequests/>} />
// 		<Route path="/myrequests" element={<MyRequests/>} />
// 		<Route path="/plans" element={<Plans />} />
// 		<Route path="/mp" element={<MainPage />} /> */}
// 		<Route path="/profile" element={<Profile />} />
// 		<Route path="/familydetails" element={<FamilyDetails />} />
// 		<Route path="/professionaldetails" element={<ProfessionalDetails />} />
// 		<Route path="/educationaldetails" element={<EducationDetails />} />
		
// 	  </Routes>
// 	{/* </Sidebar2> */}
//   </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EducationDetails from "./EducationDetails";
import FamilyDetails from "./FamilyDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import Sidebar from "./Sidebar";
import Dashboard from './pages/Dashboard';
import MyConnection from './pages/MyConnection';
import MyRequests from './pages/MyRequests';
import NavTab from './components/NavTab'
import Signup from './Signup'
import Login from './Login'

function App() {
  return (
    <Router>
      


      <Sidebar/>

		<Routes>

    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} /> 


   <Route path="/" element={<Dashboard />} />

		<Route path="/dashboard" element={<Dashboard />} />
  
		<Route path="/profile" element={<NavTab />} />
		<Route path="/familydetails" element={<FamilyDetails />} />
		<Route path="/professionaldetails" element={<ProfessionalDetails />} />
		<Route path="/educationaldetails" element={<EducationDetails />} />
		<Route path="/myconnections" element={<MyConnection />} />
		<Route path="/myrequests" element={<MyRequests />} />
		
	

		</Routes>

	

	
	  
    </Router>
  );
}

export default App;


