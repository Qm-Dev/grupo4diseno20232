import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Logout() {

    const logoutPageStyle = {
        padding: '20%',
    }

    const headingStyle = {
        textAlign: 'center',
    }

    return (
        <div className='logoutPage' style={logoutPageStyle}>
            <h1 style={headingStyle}>Sesión cerrada.</h1>
        </div>
    );
}

export default Logout;