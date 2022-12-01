import React from "react";
import "../CSS/Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/loginUser", { email, password });
      alert("User Login Sucessfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlepswChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="login-form"
        action="/"
        method="post"
      >
        <div class="imgcontainer">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            class="avatar"
          />
        </div>

        <div class="logincontainer">
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

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="logincontainer">
          <Link to="/Register">
            <button type="button" class="Register">
              Register
            </button>
          </Link>
          <span class="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </>
  );
}

export default Login;
