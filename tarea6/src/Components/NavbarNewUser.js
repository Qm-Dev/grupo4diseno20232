import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarNewUser = ({ user }) => {
  const NavbarText = {
    color: "white",
  };

  return (
    <li className="nav-item">
      <a className="nav-link" style={NavbarText} href="#">
        {user}
      </a>
    </li>
  );
};

export default NavbarNewUser;
