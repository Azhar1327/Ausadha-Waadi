import axios from "axios";
import React, { useEffect, useState } from "react";
import IndivRequest from "./IndivRequest";

function AdminMed() {
  const [list, setlist] = useState("");
  const [status, setstatus] = useState("unavailable");

  useEffect(async () => {
    const data = await axios("/api/v1/request/medicine/getAll");
    setlist(data.data.data);
  }, []);

  return (
    <>
      {list &&
        list.map((i) => (
          <div>
            <IndivRequest data={i} />
            <div className="updateButton">
              <button
                className="update_to_processing"
                onClick={async () => {
                  const id = i._id;
                  try {
                    const data = await axios.put(
                      "/api/v1/request/medicine/Update",
                      { status: "Processing", id }
                    );
                    alert("Status Updated Sucessfully")
                    window. location. reload()
                  } catch (error) {
                    console.log(error.response.data.message);
                  }
                }}
              >
                Processing
              </button>
              <button
                className="update_to_Available"
                onClick={async () => {
                  const id = i._id;
                  try {
                    const data = await axios.put(
                      "/api/v1/request/medicine/Update",
                      { status: "Available", id }
                    );
                    alert("Status Updated Sucessfully")
                    window. location. reload()
                  } catch (error) {
                    console.log(error.response.data.message);
                  }
                }}
              >
                Available
              </button>
              <button
                className="update_to_unavailable"
                onClick={async () => {
                  const id = i._id;
                  try {
                    const data = await axios.put(
                      "/api/v1/request/medicine/Update",
                      { status: "Unavailable", id }
                    );
                    alert("Status Updated Sucessfully")
                    window. location. reload()
                  } catch (error) {
                    console.log(error.response.data.message);
                  }
                }}
              >
                Unavailable
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default AdminMed;
