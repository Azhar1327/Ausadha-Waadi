import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

function AllUsers() {
  const [list, setlist] = useState("");

  useEffect(async () => {
    const data = await axios.get("api/v1/admin/users");
    setlist(data.data.user);
  }, []);
  console.log(list);
  return <>{list && list.map((i) => <SingleUser data={i} />)}</>;
}

export default AllUsers;
