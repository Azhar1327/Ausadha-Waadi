import React from 'react'

function SingleUser(data) {
    console.log(data)
  return (
    <div>
      <div className="individual_request_main">
        <div className="request_id">
          <p>Email Id</p>
          <p>{data.data.email}</p>
        </div>
        <div className="request_id">
          <p>Role</p>
          <p>{data.data.role}</p>
        </div>
        <div className="request_user">
        </div>
        <div className="request_medicine">
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
          
        </div>
        <div className="request_availability">
          <p>User ID</p>
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
  )
}

export default SingleUser