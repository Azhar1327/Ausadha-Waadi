import axios from "axios";
import React, { useEffect, useState } from "react";
import RequestListIndividual from "./RequestListIndividual";

function RequestList() {
    const [list, setlist] = useState("");
    const [status, setstatus] = useState("unavailable");
  
    useEffect(async () => {
      const data = await axios("/api/v1/emergency/getAll");
      setlist(data.data.data);
    }, []);
  return <div>
    {list&&list.map((i)=>(
        <RequestListIndividual data={i}/>
    ))}
  </div>;
}

export default RequestList;
