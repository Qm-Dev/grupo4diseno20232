import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Error() {

    // Estilo del texto
    const textError = {
        textAlign: 'center',
        padding: '0.75rem 1.5rem',
        marginBottom: '2rem'
    }

    // Estilo de la imagen
    const imgError = {
        display: 'block',
        margin: '0 auto',
        paddingTop: '1.5rem',
        paddingBottom: '1rem',
    }

    // Estilo del boton
    const backButtonStyle = {
        marginTop: '2rem',
        marginBottom: '1rem',
        display: 'block',
        margin: '1rem auto',
        cursor: 'pointer',
        maxWidth: '10%',
        maxHeight: '10%',
    };
    
    
    

    return (
        <main>
            <img style={imgError} src= 'https://i.kym-cdn.com/photos/images/original/000/918/810/a22.jpg'></img>
            <h2 style={textError}>¡Lo sentimos! Esta pagina no existe</h2>
            <Link to="/feed" style={backButtonStyle} className="btn btn-primary" >Volver al Inicio</Link>
        </main>
    );
}

export default Error;