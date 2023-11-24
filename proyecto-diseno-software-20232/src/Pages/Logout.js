import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Logout() {

    const logoutPageStyle = {
        padding: '20%',
    }

    const headingStyle = {
        textAlign: 'center',
    }

    return (
        <div className='logoutPage' style={logoutPageStyle}>
            <h1 style={headingStyle}>Has cerrado sesión.</h1>
        </div>
    );
}

export default Logout;