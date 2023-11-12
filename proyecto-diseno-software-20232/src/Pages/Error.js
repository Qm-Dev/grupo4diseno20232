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
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '500px',
        height: 'auto'
    }
    
    
    return (
        <main>
            <img style={imgError} src= 'https://i.kym-cdn.com/photos/images/original/000/918/810/a22.jpg'></img>
            <h2 className="text-center">¡Lo sentimos! Esta página no existe.</h2>
            <div class="container">
                <div class="text-center">
                    <Link to="/feed" className="btn btn-primary m-4">Volver atrás</Link>
                </div>
            </div>
        </main>
    );
}

export default Error;