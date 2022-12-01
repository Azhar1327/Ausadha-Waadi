import "./App.css";
import Header from "./Components/Header.js";
import Homepage from "./Components/Homepage.js";
import Footer from "./Components/Footer.js";
import Login from "./Components/Login.js";
import Medicines from "./Components/Medicines.js";
import LabTests from "./Components/LabTests";
import Register from "./Components/Register.js";
import MedicineBooking from "./Components/MedicineBooking";
import Profile from "./Components/Profile.js";
import About from "./Components/About.js";
import Search from "./Components/Search.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import React from "react";
import MedicineRequest from "./Components/MedicineRequest";
import MedList from "./Components/MedList";
import AdminMed from "./Components/AdminMed";
import EmergencyMed from "./Components/EmergencyMed";
import ChatBot from "./Components/ChatBot";
import RequestList from "./Components/RequestList";
import DashboardAdmin from "./Components/AdminDashbord";
import Otp from "./Components/Otp";
import AllUsers from "./Components/AllUsers";
import UserDashbord from "./Components/UserDashbord"
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
          {/* new routes */}
          <Route path="/Request" element={<MedicineRequest />} />
          <Route path="/Request/list" element={<MedList />} />
          <Route path="/Request/list/admin" element={<AdminMed />} />
          <Route path="/Emergency" element={<EmergencyMed />} />
          <Route path="/Help" element={<ChatBot />} />
          <Route path="/request/list/emergency/admin" element={<RequestList />} />
          <Route path="/dashbord/admin" element={<DashboardAdmin />} />
          <Route path="/varify" element={<Otp />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/dashbord/user" element={<UserDashbord />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
