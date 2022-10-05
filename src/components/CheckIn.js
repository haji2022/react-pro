import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { Link } from "react-router-dom";


const CheckIn = () => {
  const { login } = useContext(UserContext);
  const [name, setName] = useState();

  return (
    <>
   
 <div >
  <br/>
      <input
        type="text"
        
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
       <Link to="home"><button onClick={() => login(name)}>Log in</button></Link>
    </div>
    </>
  );
}

export default CheckIn;