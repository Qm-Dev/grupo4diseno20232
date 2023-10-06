import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#282c34',
    color: "white",
    width: "100%",
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <footer className="text-center" style={footerStyle}>
        <div className="text-center p-3" style={footerStyle}>
          Diseño de Software Sección 1 2023/2
          <div className="text-white">
            <a href="https://uai.cl/" style={linkStyle}>
              © Universidad Adolfo Ibañez
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
