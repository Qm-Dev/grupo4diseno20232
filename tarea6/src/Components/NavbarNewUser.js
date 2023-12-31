import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarNewUser = ({ user }) => {
  const NavbarText = {
    color: "white",
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Inter',
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
