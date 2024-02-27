import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
const navbar = () => {
  return (
    <div>
      <ul >
        <Link to="/"> <li  >Home</li></Link>
       <Link to="/dashboard"><li >Dashboard</li></Link>  
       <Link to="/create"><li >Create</li></Link> 
       <Link to="/report"><li >Report</li></Link> 
      </ul>
     
    </div>
  )
}

export default navbar