import React, { useContext } from 'react';
import { UserContext } from './UserContext';

import { Link } from "react-router-dom";

const CheckOut = ()  => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
    <div>
    <br/>
      <h1>Logout confirmed {user.name}!</h1>
      <Link to="/"><button onClick={logout}>Loggin again</button></Link>  
      </div> 
        
    </>
  );
}

export default CheckOut;