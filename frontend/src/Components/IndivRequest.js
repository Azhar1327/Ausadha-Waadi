import React, { useEffect, useRef } from "react";
import "../CSS/IndividualRequest.css"
function IndivRequest(data) {
  const one = useRef(0);
  useEffect(() => {
    if (data.data.availability === "red") {
      one.current.style.backgroundColor = "red";
    } else {
      one.current.style.backgroundColor = "green";
    }
  }, [data.data.availability]);

  return (
    <>
      <div className="individual_request_main">
        <div className="request_id">
          <p>Medicine Request ID :</p>
          <p>{data.data._id}</p>
        </div>
        <div className="request_user">
          <p>User ID :</p>
          <p>{data.data.user}</p>
        </div>
        <div className="request_medicine">
          <p>Medicine ID :</p>
          <p>{data.data.medicine}</p>
        </div>
        <div className="request_availability">
          <p>Availability Status :</p>
          <p ref={one} style={{
            width:"24%"
          }}>{data.data.availability}</p>
        </div>
      </div>
    </>
  );
}

export default IndivRequest;
