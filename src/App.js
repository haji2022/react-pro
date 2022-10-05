import React, { useState,useContext } from "react";
import {FormPerson} from './components/FormPerson';
import {PersonList} from './components/PersonList';
import  {UserContext}  from './components/UserContext';
import CheckOut from './components/CheckOut';
import CheckIn from './components/CheckIn';
import { Home } from "./components/Home";

import { Routes, Route} from "react-router-dom";
import './App.css';



function App() {
  
  
  const { user } = React.useContext(UserContext);

  const [persons, updatepersons] = useState([]);

  const addPerson = (person) => {
    updatepersons([...persons, person]);
  };



 
  return ( 
    <>
    <div className="App">
 
     {/*<FormPerson addPerson={addPerson} /> 
      <h1><PersonList persons={persons} /></h1> */}
      <Routes>
      <Route index path="/" element={  <CheckIn/> } />
        <Route  path="home/" element={ <Home/> } />
        <Route path="home/newperson/" element={ <FormPerson  addPerson={addPerson}/>} /> 
        <Route path="home/personlist/" element={ <PersonList persons={persons}  />} />
        <Route path="home/logout" element={ < CheckOut  />} />
      </Routes>
  
    </div>
    </>
  );
  }

  export default App;