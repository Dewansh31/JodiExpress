import React from 'react';
import Search from './Search';
import Sidebar from '../Sidebar';


import Grid from '../Grid';



const Dashboard = (props) => {
  return (
    <div className='dashContainer'>

      <Sidebar username={props.name} />
     
    <Search/>

 


    {/* <Profile/> */}
    <Grid/>

    
 

    </div>
  );
};

export default Dashboard;
