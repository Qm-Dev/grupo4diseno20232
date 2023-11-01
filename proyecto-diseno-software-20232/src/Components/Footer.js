import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {

    // Estados
    const [isAboutHovered, setIsAboutHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isFAQHovered, setIsFAQHovered] = useState(false);

    // Estilo general del footer
    const footerStyle = {
        backgroundColor: '#202020',
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%',
        paddingBottom: '1%',
        fontFamily: 'Yantramanav',
        fontSize: '15px'
    }

    // Estilo de imagen
    const imgStyle = {
        filter: 'grayscale(100%)',
        width: '25em',
        marginBottom: '1em'
    }

    // Estilo del link: Acerca de
    const linkStyleAbout = {
        transition: 'color 0.4s'
    }

    // Estilo del link: Contacto
    const linkStyleContact = {
        transition: 'color 0.4s'
    }

    // Si se detecta hover por parte del usuario
    // En Acerca de
    if (isAboutHovered) {
        linkStyleAbout.color = 'gray';
        linkStyleContact.color = 'white';
    }

    // En Contacto
    else if (isContactHovered) {
        linkStyleContact.color = 'gray';
        linkStyleAbout.color = 'white';
    }

    // No se realiza hover
    else {
        linkStyleAbout.color = 'white';
        linkStyleContact.color = 'white';
    }

    // Función
    return(
        <div className='Footer' style={footerStyle}>
            <img src="https://www.uai.cl/assets/uploads/2021/12/facultad-de-ingenieria-y-ciencias.png" style={imgStyle}></img>
            <p>Grupo 4 © 2023 • <a href="/about_us" style={linkStyleAbout}
            onMouseOver={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}>Acerca de</a> • <a href="/contact" style={linkStyleContact}
            onMouseOver={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}>Contacto</a></p>
        </div>
    );
}

export default Footer;
