import * as React from 'react';
import NavBar from './Component/Navbar'
import Portfolio from "./Component/Portfolio"
import ProSkills from "./Component/ProSkills"
import Education from "./Component/Education"
import Contact from "./Component/ContactMe"
import './App.css';
import Hero from './Component/Hero';



function App() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <Portfolio/>
    <ProSkills/>
    <Education/>
    <Contact/>
    </>
  );
}

export default App;
