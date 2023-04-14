import React from 'react';
import Search from './Search';
import Sidebar from '../Sidebar';


import Grid from '../Grid';
// import CardDetails from '../CardDetails';



const Dashboard = (props) => {
  return (
    <div>

      <Sidebar username={props.name}  />
     
    <Search/>

    
 

    </div>
  );
};

export default Dashboard;
