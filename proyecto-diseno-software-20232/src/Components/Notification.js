import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Notification(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fechaNoti } = props;

    const tipos_notificaciones = ["quiere ser tu amigo! Acepta o rechaza la solicitud de amistad.",
        "te acaba de enviar un mensaje privado, respondelo o ignoralo.",
        "quiere conectar contigo! Acepta la oporunidad para hacer crecer tu red.",
        "tiene una oferta de trabajo para ti! Haz click para que sepas de que se trata."];

    const indiceAleatorio = Math.floor(Math.random() * tipos_notificaciones.length);

    const notificacionAleatoria = tipos_notificaciones[indiceAleatorio];

    return (
            <div class="card">
                <div class="card-body">
                    <div class="d-flex">
                    <img src={fotoPerfilPersona} class="me-3 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                        <div class="media-body">
                            <h5 class="mt-0">{nombrePersona} {apellidoPersona}</h5>
                            <p>{nombrePersona} {notificacionAleatoria}</p>
                            <small class="text-muted">Fecha de notificación: {fechaNoti}</small>
                        </div>
                    </div>
                </div>
            </div>  
    );
}

export default Notification;