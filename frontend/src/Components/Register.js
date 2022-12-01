import React from "react";
import "../CSS/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/v1/register", { name, email, password });
      alert("User Registered Sucessfully")
    } catch (error) {
      console.log(error);
    }
  };

  const handlenameChange = (e) => {
    setName(e.target.value);
  };

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlepswChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      
        <div class="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            class="avatar"
          />
        </div>

        <div class="logincontainer">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            onChange={handlenameChange}
            placeholder="Enter Username"
            value={name}
            name="uname"
            required
          />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            onChange={handleemailChange}
            placeholder="Enter Email"
            value={email}
            name="email"
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            onChange={handlepswChange}
            placeholder="Enter Password"
            value={password}
            name="psw"
            required
          />

          <button type="submit" onClick={handleSubmit}>Register</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="logincontainer">
          <Link to="/Login">
            <button type="button" class="Register">
              Login
            </button>
          </Link>
         
        </div>
    </>
  );
}

export default Register;
