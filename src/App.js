import React from 'react';
import './App.scss';
import {Routes ,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Aboutsection from './Components/Aboutsection';
import Sectionservices from './Components/Servicessection';
import Portfoliosection from './Components/Portfoliosection';
import Contactsection from './Components/Contactsection';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';




const App = () => {
  return (
    <>
  

      <Navbar/>
      <Routes>
      <Route path="/" element={<div>
      <section><Aboutsection/></section>
      <section><Sectionservices/></section>
      <section><Portfoliosection/></section>
      <section><Contactsection/></section>
      </div>}/>

      </Routes>


    </>
  );
}

export default App;
