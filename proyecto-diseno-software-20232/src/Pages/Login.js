import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Login() {

    const loginFormStyle = {
        border: '3px solid',
        margin: '3rem',
        textAlign: 'center',
        borderRadius: '30px',
    }

    const formFieldStyle = {
        border: '3px solid',
        margin: '7%',
        padding: '1.5rem',
        borderRadius: '2rem'
    }

    const loginButtonStyle = {
        borderRadius: '10px',
        width: '100px',
        marginBottom: '1rem'
    }

    const inputStyle = {
        marginLeft: '1rem',
        width: '50%'
    }

    return (
        <div className='login' style={loginFormStyle}>
            <h1>Iniciar sesión</h1>
            <div className='field' style={formFieldStyle}>
                <label for='user'><b>Usuario</b></label>
                <br></br><br></br>
                <input type='text' placeholder='Usuario' name='user' style={inputStyle} required></input>
            </div>
            <div className='field' style={formFieldStyle}>
                <label for='password'><b>Contraseña</b></label>
                <br></br><br></br>
                <input type='password' placeholder='Contraseña' name='password' style={inputStyle} required></input>
            </div>
            <button type="submit" className="btn btn-primary" style={loginButtonStyle}>Ingresar</button>
        </div>
    );
}

export default Login;