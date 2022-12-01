import React, { useRef, useState } from "react";

import "../CSS/MedicineRequest.css";

function MedicineRequest() {
  const [pinCode, setpinCode] = useState("");
  const one = useRef(0);
  const SubmitMedincePincode = () => {
    if (pinCode === "751030") {
      one.current.style.display = "block";
    } else {
      alert("No unavalability");
    }
  };
  const medid1 = "6383c4c446498c5e7343c814";
  const medid2 = "6383c4fa46498c5e7343c819";
  const requestMedicine1 = async () => {
    alert("Request Submited Sucessfully");
  };
  return (
    <>
      <div className="Requestdiv">
        <h2>
          <b>Enter Pin Code Of your Locality</b>
        </h2>
        <div className="Enter_pin_code">
          <input
            type="number"
            onChange={(e) => {
              setpinCode(e.target.value);
            }}
          />
          <button
            className="SubmitMedincePincode-btn"
            onClick={SubmitMedincePincode}
          >
            submit
          </button>
        </div>
        <div className="list_of_unavailable_medicine" ref={one}>
          <h3>List of unavailble medicine</h3>
          <div className="unavailble_medicine_details">
            <div className="med_img">
              <img
                src="https://media.npr.org/assets/img/2019/05/28/avastin_gettyimages-94867926_custom-8a83cfafca73f987ab37e366ed8da25bd97a7c43.jpg"
                alt=""
                style={{ width: "20%" }}
              />
            </div>
            <div className="med_details">
              <p>Avastin 100mg</p>
              <p>Status: Unavailable</p>
              <p>Med ID :6383c4c446498c5e7343c814 </p>
              <button onClick={requestMedicine1}>REQUEST</button>
            </div>
          </div>
          <div className="unavailble_medicine_details">
            <div className="med_img">
              <img
                src="https://www.calcuttayellowpages.com/cimage34/111147bnnr_01.png"
                alt=""
              />
            </div>
            <div className="med_details">
              <p>Daxotel 80mg</p>
              <p>Status: Unavailable</p>
              <p>Med ID :6383c4fa46498c5e7343c819 </p>
              <button onClick={requestMedicine1}>REQUEST</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicineRequest;
