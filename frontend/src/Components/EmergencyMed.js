import axios from "axios";
import React, { useState } from "react";
import "../CSS/Emergency.css"

function EmergencyMed() {
  const [name, setname] = useState("");
  const [PhoneNO, setphoneNO] = useState("");
  const [address, setaddress] = useState("");
  const [prescription, setprescution] = useState("");
  const [medicine, setmedicine_name] = useState("");

  const EnergencyFormSubmit=async()=>{
    try{
      const data=await axios.post("/api/v1/emergency/request",{name,medicine,address,PhoneNO,prescription})
      console.log(data)
      alert("Your Requested Submited Sucessfully")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className="emergency_main">
        <h4>Emergency Medicine Request Form </h4>
        <div className="emergency_medicine_form">
          <div className="name_and_phone_no">
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Your PhoneNO"
              onChange={(e) => {
                setphoneNO(e.target.value);
              }}
            />
          </div>
          <div className="Address">
            <input
              type="text"
              placeholder="Enter Your Address"
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>
          <div className="medicine_name">
            <input
              type="text"
              placeholder="Enter Name of The medicine"
              onChange={(e) => {
                setmedicine_name(e.target.value);
              }}
            />
          </div>
          <div className="prescution">
            <p>Upload Your prescription</p>
            <label class="custom-file-upload" name="file" />
            <input
              type="file"
              name="avatar"
              accept=".pdf"
              onChange={(event) => {
                const file = new FileReader();
                file.onload = () => {
                  if (file.readyState === 2) {
                    setprescution(file.result);
                  }
                };
                //read file as a url so the result will be in form of a url
                file.readAsDataURL(event.target.files[0]);
              }}
              required="true"
            />
          </div>
          <button onClick={EnergencyFormSubmit}>submit</button>
        </div>
      </div>
    </>
  );
}

export default EmergencyMed;
