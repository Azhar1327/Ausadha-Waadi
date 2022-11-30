import "./App.css";
import Header from "./Components/Header.js";
import Homepage from "./Components/Homepage.js";
import Footer from "./Components/Footer.js"
import Login from "./Components/Login.js"
import Medicines from "./Components/Medicines.js"
import LabTests from "./Components/LabTests";
import Register from "./Components/Register.js"
import MedicineBooking from "./Components/MedicineBooking";
import Profile from "./Components/Profile.js"
import About from "./Components/About.js"
import Search from "./Components/Search.js"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import React from "react";

function App() {
  return (
    <>
     

      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/LabTests" element={<LabTests />} />
          <Route path="/Booking" element={<MedicineBooking />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Search" element={<Search />} />
        </Routes> 
        
        <Footer />
      </Router>

     
    </>
  );
}

export default App;
