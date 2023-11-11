import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// componente fecha
function formatDate(isoDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString(undefined, options);
    return formattedDate;
}


function SocialPost(props) {

    const { nombrePersona } = props;
    const { apellidoPersona } = props;
    const { fotoPerfilPersona } = props;
    const { fecha } = props;
    const formattedDate = formatDate(fecha);
    
    return (
        <div class="container mt-4">
            <div class="card">
                    <div class="card-body">
                        <div class="d-flex">
                        <img src={fotoPerfilPersona} class="me-3 rounded-circle img-thumbnail" alt="Imagen de Usuario"></img>
                            <div class="media-body">
                                <h5 class="mt-0">{nombrePersona} {apellidoPersona}</h5>
                                <small class="text-muted">Fecha de Nacimiento: {formattedDate}</small>
                            </div>
                        </div>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec felis convallis, nec eleifend est hendrerit.</p>
                                    <div class="d-flex btn-group justify-content-cente">
                                        <button type="button" class="btn btn-outline-primary">Recomendar</button>
                                        <button type="button" class="btn btn-outline-primary">Comentar</button>
                                        <button type="button" class="btn btn-outline-primary">Compartir</button>
                                        <button type="button" class="btn btn-outline-primary">Enviar</button>
                                    </div>
                    </div>
                </div>
            </div>
    );
}

export default SocialPost;