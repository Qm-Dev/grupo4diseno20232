import React from "react";
import NavbarNewUser from "./NavbarNewUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const users = ["Benjamin", "Diego", "Matias"];

  const NavbarStyle = {
    backgroundColor: "#282c34",
    borderBottom: "1px solid white",
  };

  const NavbarText = {
    color: "white",
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
  <nav className="navbar navbar-expand-lg navbar-dark" style={NavbarStyle}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mb-1 mt-1 mx-auto">
        <li className="nav-item ml-10" style={NavbarText}>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {users.map((user, index) => (
              <li className="nav-item ml-10" key={index}>
                <NavbarNewUser user={user} />
              </li>
            ))}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
