import React,{useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from './UserContext';



const Header  = () => {
  const { user } = useContext(UserContext);

    return(
        <>
    <div>   
      <h1 class="navbar   opacity-75" >
         <p style={{color:"Red"}}>Welcome : {user.name}</p>
         <Link to="newperson"><p style={{color:"red"}}>AddPerson</p></Link>
         <Link to="personlist"><p style={{color:"red"}}>Personlist</p></Link>
         <Link to="logout"><p style={{color:"red"}}>Logout</p></Link>
      </h1>
    </div>
</>
    );
}

export default Header;