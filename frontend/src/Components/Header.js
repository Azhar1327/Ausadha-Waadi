import "../CSS/Header.css";

import logo from "../Images/logo.png";

function Header() {
  return (
    <>
      <div className="Heading">
        <img src={logo} />

        <a href="Profile">
          <b>Profile</b>
        </a>
        <a href="Dashboard">
          <b>Dashboard</b>
        </a>
        <a href="Login">
          <b>Login</b>
        </a>
      </div>

      <div class="topnav">
        <a href="/">
          <b>Home</b>{" "}
        </a>

        <a href="Search">
          <b>Search</b>
        </a>
        <a href="Medicines">
          <b>Medicines</b>
        </a>
        <a href="LabTests">
          <b>Lab Tests</b>
        </a>
        <a href="About">
          <b>About</b>
        </a>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search For Medicines ?"
            />
            <button type="submit" class="searchButton">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
