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
    <nav className="navbar navbar-expand navbar-light" style={NavbarStyle}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-1">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={NavbarText}
                href="#"
              >
                Inicio
              </a>
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
