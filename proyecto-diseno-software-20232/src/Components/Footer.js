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
        width: '100%',
        height: '100%',
        maxWidth: '350px',
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

    // Estilo del link: FAQ
    const linkStyleFAQ = {
        transition: 'color 0.4s'
    }

    // Si se detecta hover por parte del usuario
    // En Acerca de
    if (isAboutHovered) {
        linkStyleAbout.color = 'gray';
        linkStyleContact.color = 'white';
        linkStyleFAQ.color = 'white';
    }

    // En Contacto
    else if (isContactHovered) {
        linkStyleAbout.color = 'white';
        linkStyleContact.color = 'gray';
        linkStyleFAQ.color = 'white';
    }

    // En FAQ
    else if (isFAQHovered) {
        linkStyleAbout.color = 'white';
        linkStyleContact.color = 'white';
        linkStyleFAQ.color = 'gray';
    }

    // No se realiza hover
    else {
        linkStyleAbout.color = 'white';
        linkStyleContact.color = 'white';
        linkStyleFAQ.color = 'white';
    }

    // Función
    return(
        <div className='Footer' style={footerStyle}>
            <img src="https://www.uai.cl/assets/uploads/2021/12/facultad-de-ingenieria-y-ciencias.png" style={imgStyle}></img>
            <p>Grupo 4 © 2023 • <a href="/about" style={linkStyleAbout}
            onMouseOver={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}>Acerca de</a> • <a href="/faq" style={linkStyleFAQ}
            onMouseOver={() => setIsFAQHovered(true)}
            onMouseLeave={() => setIsFAQHovered(false)}>FAQ</a> • <a href="/contact" style={linkStyleContact}
            onMouseOver={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}>Contacto</a></p>
        </div>
    );
}

export default Footer;
