import React, { useState } from "react";

function EmergencyMed() {
  const [name, setname] = useState("");
  const [phoneNO, setphoneNO] = useState("");
  const [address, setaddress] = useState("");
  const [prescution, setprescution] = useState("");
  const [medicine_name, setmedicine_name] = useState("");

  const EnergencyFormSubmit=()=>{
    console.log(prescution)
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
