import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Notification(props) {

    // Argumentos
    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fechaNoti } = props;

    // Tipos de notificaciones
    const tipos_notificaciones = [
        "quiere ser tu amigo! Acepta o rechaza la solicitud de amistad.",
        "te acaba de enviar un mensaje privado.",
        "quiere conectar contigo! Acepta la oportunidad para hacer crecer tu red.",
        "tiene una oferta de trabajo para ti! Haz click para conocer más detalles.",
        "ha marcado tu publicación como favorita y ha dejado un comentario. ¡Echa un vistazo!",
        "comentó en tu publicación compartiendo su experiencia personal y sugiriendo nuevas ideas.",
        "te etiquetó en una foto de un evento pasado. ¡Revive esos momentos especiales!",
        "te ha enviado una recomendación profesional destacando tus habilidades y logros.",
        "compartió un nuevo artículo contigo, considerando que te resultará interesante. ¡No te lo pierdas!",
        "te ha invitado a un evento exclusivo que está organizando. Confirma tu asistencia.",
        "ha reaccionado a tu historia de hoy con emojis positivos. ¡Gracias por la interacción!",
        "ha publicado en tu muro expresando su gratitud y amistad. ¡Devuélvele el saludo!",
        "te mencionó en un comentario, preguntando por tu opinión sobre un tema relevante.",
        "te ha dado un reconocimiento por tu dedicación y contribuciones excepcionales.",
        "ha compartido un recurso educativo contigo que podría ser útil para tu desarrollo profesional."
    ];

    // Creación de la notificación
    const indiceAleatorio = Math.floor(Math.random() * tipos_notificaciones.length);
    const notificacionAleatoria = tipos_notificaciones[indiceAleatorio];

    return (
            <div class="card mb-1">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-1">
                            <img src={fotoPerfilPersona} class="me-3 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                        </div>
                        <div class="col-md-11">
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