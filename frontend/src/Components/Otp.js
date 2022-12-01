import axios from "axios";
import React, { useState } from "react";

function Otp() {
  const [userid, setUserid] = useState("");
  var otp = Math.floor(1000 + Math.random() * 9000);
  const varifyUser = async () => {
    alert("please wait for your email");
    try {
      const data = await axios.post("/api/v1/otp", { userid, otp });
      alert(`user otp is ${otp}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="otp_main">
        <input
          type="text"
          placeholder="Enter user id"
          onChange={(e) => {
            setUserid(e.target.value);
          }}
          className="user_id_submit"
        />
        <button onClick={varifyUser} className="uservarification">verify user pickup</button>
      </div>
    </>
  );
}

export default Otp;
