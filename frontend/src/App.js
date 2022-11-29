import "./App.css";
import Header from "./Components/Header.js";
import Homepage from "./Components/Homepage.js";
import Footer from "./Components/Footer.js"
import Login from "./Components/Login.js"
import MedicineBooking from "./Components/MedicineBooking";

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
      <Header />

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Booking" element={<MedicineBooking />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
