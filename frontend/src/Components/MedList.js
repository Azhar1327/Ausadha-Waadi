import axios from "axios";
import React, { useEffect, useState } from "react";
import IndivRequest from "./IndivRequest";

function MedList() {
  const [list, setlist] = useState("");
  useEffect(async () => {
    const data = await axios("/api/v1/request/medicine/getAll");
    setlist(data.data.data);
  }, []);
  return (
    <>
      {list &&
        list.map((i) => (
          <IndivRequest data={i} />
        ))}
    </>
  );
}

export default MedList;
