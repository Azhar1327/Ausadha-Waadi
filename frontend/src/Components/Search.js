import React from "react";
import "../CSS/Search.css";
import available from "../data/Available.json";
import { useRef, useEffect } from "react";
import { useState } from "react";

function Search() {
  const [pin, setPin] = useState("");
  const [medicine, setMedicine] = useState("");
  const [labtest, setLabtest] = useState("");

  const [isavailable, setIsavailable] = useState(false);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    setPin("");
    setMedicine("");
    setLabtest("");
  };

  var zipcodes = available.map((data) => {
    return data.zipcodes;
  });

  var medicines = available.map((data) => {
    if (zipcodes.includes(data.zipcodes)) return data.medicines;
  });
  medicines = [].concat(...medicines);

  var labtests = available.map((data) => {
    if (zipcodes.includes(data.zipcodes)) return data.labtests;
  });
  labtests = [].concat(...labtests);

  var centre = available.map((data) => {
    if (zipcodes.includes(data.zipcodes)) return data.centre;
  });

  console.log(centre);

  var btn = document.getElementById("submit-btn");

  const checkAvailability = () => {
    var zipcode = pin;
    var res = document.getElementById("res");

    if (zipcodes.includes(parseInt(zipcode))) {
      console.log("true");
      res.textContent = "Available";
      res.classList.add("available");
      res.classList.remove("not-available");
      setPin("");
      setIsavailable(true);
    } else {
      console.log("false");
      res.textContent = "Not Available";
      res.classList.add("not-available");
      res.classList.remove("available");
      setPin("");
    }
  };

  var btn = document.getElementById("medicine-btn");

  const checkMedicinesAvailability = () => {
    var medicinelist = medicines;
    var res = document.getElementById("medicine-res");
    console.log("medicinelist" + medicinelist);

    console.log("medicines" + medicines);
    console.log("medicine" + medicine);

    if (medicinelist.includes(medicine)) {
      console.log("true");
      res.textContent = "Available";
      res.classList.add("available");
      res.classList.remove("not-available");
      setMedicine("");
    } else {
      console.log("false");
      res.textContent = "Not Available";
      res.classList.add("not-available");
      res.classList.remove("available");
      setMedicine("");
    }
  };

  const checkLabTestsAvailability = () => {
    var labtestlist = labtests;
    var res = document.getElementById("labtest-res");
    console.log("labtestlist" + labtestlist);

    console.log("labtests" + labtests);
    console.log("labtest" + labtest);

    if (labtestlist.includes(labtest)) {
      console.log("true");
      res.textContent = "Available";
      res.classList.add("available");
      res.classList.remove("not-available");
      setLabtest("");
    } else {
      console.log("false");
      res.textContent = "Not Available";
      res.classList.add("not-available");
      res.classList.remove("available");
      setLabtest("");
    }
  };

  return (
    <>
      <div className="Search-page">
        <div className="Availabilty">
          <form onSubmit={handleSubmit}>
            <label for="search">
              <p>
                <b>Enter your PIN for the Medical nearest Center </b>{" "}
              </p>{" "}
            </label>
            <input
              id="zipcode"
              onChange={(event) => setPin(event.target.value)}
              value={pin}
              type="number"
              name="search"
              placeholder="Search.."
            />
            <button onClick={checkAvailability} id="submit-btn" type="submit">
              Check
            </button>
            <div id="res"></div>
            <div
              id="res-found"
              style={{ display: isavailable ? "block" : "none" }}
            >
              <h2>The centre is found at {centre} </h2>
              <h4>You can book medicines and labtests</h4>
            </div>
          </form>
        </div>

        <div
          className="Availabilty"
          style={{ display: isavailable ? "block" : "none" }}
        >
          <form onSubmit={handleSubmit}>
            <label for="search">
              <p>
                <b>Enter the medicines required </b>{" "}
              </p>{" "}
            </label>
            <input
              id="medicinelist"
              onChange={(event) => setMedicine(event.target.value)}
              value={medicine}
              type="text"
              name="search"
              placeholder="Search.."
            />
            <button
              onClick={checkMedicinesAvailability}
              id="medicine-btn"
              type="submit"
            >
              Check
            </button>
            <div id="medicine-res"></div>
          </form>
        </div>

        <div
          className="Availabilty LabTests-Availability"
          style={{ visibility: isavailable ? "visible" : "hidden" }}
        >
          <form onSubmit={handleSubmit}>
            <label for="search">
              <p>
                <b>Schedule the LabTests </b>{" "}
              </p>{" "}
            </label>
            <input
              id="labtestlist"
              onChange={(event) => setLabtest(event.target.value)}
              value={labtest}
              type="text"
              name="search"
              placeholder="Search.."
            />
            <button
              onClick={checkLabTestsAvailability}
              id="labtest-btn"
              type="submit"
            >
              Check
            </button>
            <div id="labtest-res"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
