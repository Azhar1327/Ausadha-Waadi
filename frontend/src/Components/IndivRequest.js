import React, { useEffect, useRef } from "react";

function IndivRequest(data) {
  const one = useRef(0);
  useEffect(() => {
    if (data.data.availability === "red") {
      one.current.style.backgroundColor = "red";
    } else {
      one.current.style.backgroundColor = "red";
    }
  }, [data.data.availability]);

  return (
    <>
      <div className="individual_request_main">
        <div className="request_id">
          <p>request_id</p>
          <p>{data.data._id}</p>
        </div>
        <div className="request_user">
          <p>user id</p>
          <p>{data.data.user}</p>
        </div>
        <div className="request_medicine">
          <p>Medicine_id</p>
          <p>{data.data.medicine}</p>
        </div>
        <div className="request_availability">
          <p>Status</p>
          <p ref={one} style={{
            width:"10%"
          }}>{data.data.availability}</p>
        </div>
      </div>
    </>
  );
}

export default IndivRequest;
