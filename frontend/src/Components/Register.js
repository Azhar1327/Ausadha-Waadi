import React from 'react'
import '../CSS/Login.css'
import {Link} from "react-router-dom";

function Register() {
  return (
    <>
    
    <form className="login-form" action="/" method="post">
                <div class="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" />
                </div>

                <div class="logincontainer">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label for="pin"><b>PIN</b></label>
                    <input type="number" placeholder="Enter PIN" name="pin" required />

                    <label for="phone"><b>Phone Number</b></label>
                    <input type="number" placeholder="Enter Phone Number" name="phone" required />

                    <label for="aadhar"><b>AADHAR</b></label>
                    <input type="text" placeholder="Enter AADHAR" name="aadhar" required />

                    
                    <label for="dob"><b>D.O.B.</b></label>
                    <input type="date" placeholder="Enter D.O.B." name="dob" required />
 
                    <label for="photo"><b>Enter Your Photo</b></label>
                    <input type="file" name="photo"/>
 
                    <label for="prescription"><b>Enter Your Prescription</b></label>
                    <input type="file" name="prescription"/>





                    <button type="submit">Register</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                <div class="logincontainer" >
                 <Link to ="/Login"><button type="button" class="Register">Login</button></Link>    
                    <span class="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>

    </>


  )
}

export default Register