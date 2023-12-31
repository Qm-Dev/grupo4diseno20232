import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const obtenerFechaActual = () => {
    const opcionesFormato = {year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date();

    return fecha.toLocaleDateString('es-ES', opcionesFormato);
};

function NewPost(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { msg } = props;
    const { onShareButtonClick } = props;
    const { onLikeButtonClick } = props;

    const fechaActualFormateada = obtenerFechaActual();

    return (
            <div class="card mt-3">
                    <div class="card-body">
                        <div class="d-flex mb-1">
                        <a href={`/users/${nombrePersona.toLowerCase()}_${apellidoPersona.toLowerCase()}`}><img src={fotoPerfilPersona} class="me-2 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img></a>
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">{nombrePersona} {apellidoPersona}</h5>
                                <small class="text-muted">Fecha de publicacion: {fechaActualFormateada}</small>
                            </div>
                        </div>
                        <p class="card-text">
                            <span class="text-uppercase">{msg[0]}</span>{msg.slice(1)}.
                        </p>
                        <div className="btn-group-md d-flex flex-wrap flex-column flex-md-row mt-2 gap-md-4 justify-content-center" role="group">
                                {/* Recomendar */}
                                <button type="button" class="btn btn-outline-primary mb-3 mb-md-0" onClick={onLikeButtonClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                                </svg>Recomendar</button>

                                {/* Comentar */}
                                <button type="button" class="btn btn-outline-primary mb-3 mb-md-0"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-circle" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" />
                                </svg>Comentar</button>

                                {/* Compartir */}
                                <button type="button" class="btn btn-outline-primary mb-3 mb-md-0" onClick={onShareButtonClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M8.7 10.7l6.6 -3.4" />
                                <path d="M8.7 13.3l6.6 3.4" />
                                </svg>Compartir</button>

                                {/* Enviar */}
                                <button type="button" class="btn btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="26" height="26" viewBox="0 0 32 26" stroke-width="1.5" stroke="#0D6EFE" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                </svg>Enviar</button>

                            </div>
                    </div>
                </div>
    );
}

export default NewPost;