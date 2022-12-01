import "../CSS/Header.css";
import {Link} from "react-router-dom";

import logo from "../Images/logo.png";

function Header() {
  return (
    <>
      <div className="Heading">
        <img src={logo} />

        <Link to="Profile">
          <b>Profile</b>
        </Link>
        <Link to="Dashboard">
          <b>Dashboard</b>
        </Link>
        <Link to="Login">
          <b>Login</b>
        </Link>
      </div>

      <div class="topnav">
        <Link to="/">
          <b>Home</b>{" "}
        </Link>

        <Link to="Search">
          <b>Search</b>
        </Link>
        <Link to="Medicines">
          <b>Medicines</b>
        </Link>
        <Link to="LabTests">
          <b>Lab Tests</b>
        </Link>
        <Link to="About">
          <b>About</b>
        </Link>
        <Link to="About">
          <b>About</b>
        </Link>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search For Medicines ?"
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
