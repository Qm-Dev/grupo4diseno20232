import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pfp_example from '../Pages/img/pfp_example.jpg';

function Notification(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;

    const textPostStyle = {
        textAlign: 'justify'
    }

    const tipos_notificaciones = ["quiere ser tu amigo! Acepta o rechaza la solicitud de amistad.",
        "te acaba de enviar un mensaje privado, respondelo o ignoralo.",
        "quiere conectar contigo! Acepta la oporunidad para hacer crecer tu red.",
        "tiene una oferta de trabajo para ti! Haz click para que sepas de que se trata."];

    const indiceAleatorio = Math.floor(Math.random() * tipos_notificaciones.length);

    const notificacionAleatoria = tipos_notificaciones[indiceAleatorio];

    return (
        <div className='container'>
            <div className='row'>
                <div className='border border-5 border-dark p-4 col-md-12 rounded-4 mb-4'>
                    <img className="rounded-circle mx-auto d-block w-25 m-2" src={fotoPerfilPersona}></img>
                    <div>
                        <h4>{nombrePersona} {apellidoPersona}</h4>
                        <p id='publicationText' style={textPostStyle}>{nombrePersona} {notificacionAleatoria}</p>
                        <div className='text-center'>
                            <button className='btn btn-secondary m-1'>Interactuar</button>
                            <button className='btn btn-secondary m-1'>Comentar</button>
                            <button className='btn btn-secondary m-1'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;