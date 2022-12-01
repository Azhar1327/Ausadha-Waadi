import React from "react";

function RequestListIndividual(data) {
  console.log(data.data);
  return (
    <div>
      <div className="individual_request_main">
        <div className="request_id">
          <p>PhoneNO</p>
          <p>{data.data.PhoneNO}</p>
        </div>
        <div className="request_user">
          <p>Address</p>
          <p>{data.data.address}</p>
        </div>
        <div className="request_medicine">
          <p>Medicine Name</p>
          <p>{data.data.medicine}</p>
        </div>
        <div className="request_availability">
          <p>Name</p>
          <p
            style={{
              width: "10%",
            }}
          >
            {data.data.name}
          </p>
        </div>
        <div className="request_availability">
          <p>Prescription</p>
          <p
            style={{
              textTransform: "lowercase",
              maxWidth: "1800px",
              overflow: "scroll",
            }}
          >
            {data.data.prescription}
          </p>
        </div>
        <div className="request_availability">
          <p>User</p>
          <p
            style={{
              width: "10%",
            }}
          >
            {data.data._id}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RequestListIndividual;
