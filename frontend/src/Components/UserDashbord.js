import React from "react";
import { Link } from "react-router-dom";
import "../CSS/DashboardUser.css";

function DashboardUser() {
  return (
    <>
      <div className="AdminPage">
        <div className="Admin-Navigation">
          <Link to="">
            <p>
              <b>Home</b>
            </p>{" "}
          </Link>
          <Link to="OrderedMedicines">
            <p>
              <b>Ordered Medicines</b>
            </p>{" "}
          </Link>
          <Link to="ScheduledLabTests">
            <p>
              <b>Schedule LabTests</b>
            </p>{" "}
          </Link>

          <Link to="UnavailableMedicines">
            <p>
              <b>Unavailable Medicines</b>
            </p>{" "}
          </Link>
          <Link to="ScheduledLabTests">
            <p>
              <b>Schedule LabTests</b>
            </p>{" "}
          </Link>
          <Link to="Users">
            <p>
              <b>Users</b>
            </p>{" "}
          </Link>
          <Link to="Emergency">
            <p>
              <b>Emergency</b>
            </p>{" "}
          </Link>
        </div>

        <div className="Admin-list">
          <div className="MedicineList">
            <div class="card">
              <div class="cardpic">
                <img
                  src="https://www.w3schools.com/howto/img_avatar2.png"
                  alt="John"
                />
                <h1>
                  <b>Amit Rout</b>{" "}
                </h1>
              </div>
              <div className="cardtitle">
                <p class="title">User ID : hj67FFG677ghhhj</p>
                <p>
                  <b>Email : amitrouard@gmail.com</b>
                </p>
                <p>
                  <b>Join Date : 2022-11-30T10:26:59.824+00:00</b>
                </p>
                <p>
                  <button>Edit Profile</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
