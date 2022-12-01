import React from "react";
import { Link } from "react-router-dom";
import "../CSS/DashboardAdmin.css";

function DashboardAdmin() {
  return (
    <>
      <div className="AdminPage">
        <div className="Admin-Navigation">
          <Link to="">
            <p>
              <b>Home</b>
            </p>{" "}
          </Link>
          <Link to="/Medicines">
            <p>
              <b>Medicines</b>
            </p>
          </Link>
          <Link to="/LabTests">
            <p>
              <b>LabTests</b>
            </p>{" "}
          </Link>
          <Link to="/Request/list/admin">
            <p>
              <b>Unavailable List</b>
            </p>{" "}
          </Link>
          <Link to="/allUsers">
            <p>
              <b>Users</b>
            </p>{" "}
          </Link>
          <Link to="/request/list/emergency/admin">
            <p>
              <b>Emergency Medicines</b>
            </p>{" "}
          </Link>
          <Link to="/varify">
            <p>
              <b>Verify</b>
            </p>{" "}
          </Link>
        </div>

        <div className="Admin-list">
          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>

          <div className="MedicineList">
            <img src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" />
            <h4>
              <b>Paracetamol</b>
            </h4>
            <h5>
              <b>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</b>
            </h5>
            <h5>
              <b>56</b>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
