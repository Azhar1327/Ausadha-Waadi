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
            <img
              src="https://media.istockphoto.com/id/458563393/photo/aspirin-bottle-with-tablets-spilling-out.jpg?s=612x612&w=0&k=20&c=MuRtWxOfp_rA2hWvVxAoJEeOcaWFIQ1xqtieh-W5iG8="
              alt="Avatar"
            />{" "}
            <h4>
              <b>Aspirin</b>
            </h4>
            <h5>
              <b>
                Aspirin is a common drug for relieving minor aches, pains, and
                fevers. People also use it as an anti-inflammatory or a blood
                thinner. People can buy aspirin ...
              </b>{" "}
            </h5>
            <h5></h5>
          </div>

          <div className="MedicineList">
            <img
              src="https://media.istockphoto.com/id/490758634/photo/generic-pack-of-statins.jpg?s=612x612&w=0&k=20&c=ZouaI7Oi4AZCAeq98XafmiciI362iTA5qUbtpfcMzco="
              alt="Avatar"
            />{" "}
            <h4>
              <b>Statin</b>
            </h4>
            <h5>
              <b>
                Statins are drugs that can lower your cholesterol. They work by
                blocking a substance your body needs to make cholesterol.
                Lowering cholesterol isn't the ...
              </b>{" "}
            </h5>
            <h5></h5>
          </div>

          <div className="MedicineList">
            <img
              src="https://www.shutterstock.com/image-photo/kyiv-ukrainejune-20-2018-diuretic-260nw-1233217231.jpg"
              alt="Avatar"
            />{" "}
            <h4>
              <b>Dieutric</b>
            </h4>
            <h5>
              <b>
                Diuretics are drugs that can increase the amount of water and
                sodium that is excreted in the urine. There are several classes
                of diuretics, each with a ...
              </b>{" "}
            </h5>
            <h5></h5>
          </div>

          <div className="MedicineList">
            <img
              src="https://media.istockphoto.com/id/1250471519/photo/vial-of-insulin-injection-with-a-syringe-on-black-table-and-stainless-steel-background.jpg?s=612x612&w=0&k=20&c=KE5VHmGmkSpQrhwfg5NUyMzECumK9lsiHDg9dJyvLPk="
              alt="Avatar"
            />{" "}
            <h4>
              <b>Insulin</b>
            </h4>
            <h5>
              <b>
                Insulin is a hormone created by your pancreas that controls the
                amount of glucose in your bloodstream at any given moment. It
                also helps store glucose in your ...
              </b>{" "}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardAdmin;
