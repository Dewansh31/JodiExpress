import React from 'react'
import Sidebar from '../Sidebar'

const MyRequests = (props) => {
  return (
    <div>
      <Sidebar username={props.name}/>
        <h2>My Requests</h2>
    </div>
  )
}

export default MyRequests