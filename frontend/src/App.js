
import './App.css';
import Header from './Components/Header.js';
import Homepage from './Components/Homepage.js';
import Footer from './Components/Footer.js'

import { BrowserRouter as Router, Routes, Route, 
  Navigate,Link } from 'react-router-dom';

import React from "react";

function App() {
  return (

   <>

<Header/>


    <Router>

  <Routes>
    <Route path="/" element={<Homepage/>}/>

    </Routes>
    </Router> 


    <Footer/>

   </>
    
  );
}

export default App;
