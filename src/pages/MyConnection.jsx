import React from 'react'
import Table from '../components/Table'
import Sidebar from '../Sidebar'

const MyConnection = (props) => {
  return (
    <>
    
    <Sidebar username={props.name}/>
    <div className='container' style={{maxWidth:"100%"}}>
        <Table/>
    </div>
    </>
   
  )
}

export default MyConnection